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

module.exports={applyHostelOut,submitComplaint,submitRoomChange,viewMessOutHistory,messOutDays}
