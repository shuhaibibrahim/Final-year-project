const {pool} = require('../db')
const applyHostelOut = async(req,res)=>{
    try{
        const {user_id,fromDate,toDate,reason}=req.body
        const getadmno=await pool.query("SELECT hostel_admission_no FROM inmate_table WHERE admission_no=$1",[user_id])
        const hostel_admno=getadmno.rows[0].hostel_admission_no
        const hostelout=await pool.query('INSERT INTO hostel_out(hostel_admission_no,fromdate,todate,reason) VALUES($1,$2,$3,$4)',[hostel_admno,fromDate,toDate,reason])
        res.json(hostelout)
    }
    catch(e){
        console.error(e)
    }
}

const submitComplaint = async (req,res)=>{
    try{
        const {user_id,complaint}=req.body
        const complaints=await pool.query("INSERT INTO complaints(user_id,complaint) VALUES($1,$2)",[user_id,complaint])
        res.json(complaints)
    }
    catch(e){
        console.error(e)
    }
}

const submitRoomChange = async(req,res)=>{
    try{
        const {user_id,preferredRoom,changeReason}=req.body
        const getadmno=await pool.query("SELECT hostel_admission_no FROM inmate_table WHERE admission_no=$1",[user_id])
        const hostel_admno=getadmno.rows[0].hostel_admission_no
        const roomchangereq=await pool.query("INSERT INTO room_request values($1,$2,$3,FALSE)",[hostel_admno,preferredRoom,changeReason])
        res.json(roomchangereq)
    }
    catch(e){
        console.error(e)
    }
}

const viewMessOutHistory = async (req,res)=>{
    try{
        const user_id=req.query.user_id
        const messouts=await pool.query("SELECT * FROM messout WHERE hostel_admission_no=(SELECT hostel_admission_no FROM inmate_table WHERE admission_no=$1)",[user_id])
        res.json(messouts)
    }
    catch (e){
        console.error(e)
    }
}

const messOutDays = async (req,res)=>{
    try{
        const days=await pool.query("SELECT value FROM messrequirements WHERE key='messoutdays'")
        res.json(days.rows)
    }
    catch (e){
        console.error(e)
    }
}

const renderFormTemplate = async (req,res)=>{
    try{
        const type=req.query.user_type
        var usertype=""
        switch(type) {
            case "inmate":
              usertype="IN"
              break;
            case "noninmate":
              usertype="NIN"
              break;
          }
        const query=await pool.query("SELECT * FROM certificates,path where certificates.pathno=path.pathno AND (path.start_user=$1 or path.start_user='S')",[usertype])
        res.json(query.rows)
    }
    catch (e){
        console.error(e)
    }
}

const applyCertificate = async(req,res)=>{
    try{
        const {user_id,certificate_id}=req.body
        delete req.body.user_id
        delete req.body.certificate_id
        const applicationform=JSON.stringify(req.body)
        const getadmno=await pool.query("SELECT hostel_admission_no FROM inmate_table WHERE admission_no=$1",[user_id])
        const hostel_admno=getadmno.rows[0].hostel_admission_no
        const date=new Date()
        const query=await pool.query("INSERT INTO certificate_application(hostel_admission_no,certificate_id,date,approved,rejected,status,application_form) VALUES($1,$2,$3,FALSE,FALSE,0,$4) RETURNING *",[hostel_admno,certificate_id,date,applicationform])
        console.log(query)

    }
    catch(e){
        console.error(e)
    }
}

const viewCertificates = async (req,res)=>{
    try{
        const user_id=req.query.user_id
        const certificates=await pool.query('SELECT CA.application_id,CA.certificate_id,CA.date,C.name,CA.approved,CA.rejected,CA.status,CA.feedback,CA.application_form FROM certificate_application as CA,certificates as C WHERE hostel_admission_no=(SELECT hostel_admission_no FROM inmate_table WHERE admission_no=$1) AND CA.certificate_id=C.certificate_id',[user_id])
        // const certificates=await pool.query('SELECT * FROM certificate_application where hostel_admission_no=(SELECT hostel_admission_no FROM inmate_table WHERE admission_no=$1)',[user_id])
        console.log(certificates.rows)
        res.json(certificates.rows)
    }
    catch(e){
        console.error(e)
    }
    
}

const applyMessOut = async (req,res)=>{
    try{
        const {user_id,fromDate,toDate} = req.body
        console.log(req.body)
        const getadmno=await pool.query("SELECT hostel_admission_no FROM inmate_table WHERE admission_no=$1",[user_id])
        const hostel_admno=getadmno.rows[0].hostel_admission_no
        const messout=await pool.query("INSERT INTO messout VALUES($1,$2,$3) RETURNING *",[hostel_admno,fromDate,toDate])
        console.log(messout)
        // res.json(messout.rows[0])
        res.json(messout)
    }
    catch(e){
        console.log(e)
        
    } 
}

const messOutRequests = async (req,res) =>{
    try{
        const requests=await pool.query(`SELECT mo.hostel_admission_no,mo.fromdate,mo.todate,u.name from messout as mo,inmate_table as it,inmate_room as ir,hostel_room as hr,hostel_blocks as hb,users as u
        WHERE mo.hostel_admission_no=it.hostel_admission_no AND it.admission_no = u.user_id AND it.hostel_admission_no=ir.hostel_admission_no AND ir.room_id=hr.room_id
        AND hr.block_id=hb.block_id AND hb.hostel='MH'`)
        console.log(requests)
        res.json(requests)
    }
    catch(e){
        console.log(e)
    } 
}

const currentInmates = async (req,res) =>{
    try{
        
    }
    catch(e){
        
    } 
}

const uploadMessBill = async (req,res) =>{
    try{
        console.log(req.body)
        req.body.jsonData.map(async item=>{
            const query= await pool.query("INSERT INTO messbill(hostel_admission_no,bill) VALUES('18MH001',$1)",[item.bill])
            console.log(query)
        })
        
    }
    catch(e){

    } 
}

module.exports={
    applyHostelOut,
    submitComplaint,
    submitRoomChange,
    viewMessOutHistory,
    messOutDays,
    renderFormTemplate,
    applyCertificate,
    viewCertificates,
    applyMessOut,
    messOutRequests,
    currentInmates,
    uploadMessBill
}
