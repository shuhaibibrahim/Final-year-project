const express=require('express')
const router=express.Router()
const inmate=require('../controllers/inmate')
const {pool}=require('../db')

//INMATE - HOSTEL ROUTES

//Hostel Out Form
router.post('/hostelout',inmate.applyHostelOut)

//Complaint Box
router.post('/complaintbox',inmate.submitComplaint)

//Room Change
router.post('/roomchange',inmate.submitRoomChange)

//INMATE - MESSOUT ROUTES

//View MessOut history
router.get('/messouthistory',inmate.viewMessOutHistory)

//View MessOut days
router.get('/messoutdays',inmate.messOutDays)

//Apply for MessOut
router.post('/applymessout',async (req,res)=>{
    try{
        const {user_id,fromDate,toDate} = req.body
        const getadmno=await pool.query("SELECT hostel_admission_no FROM inmate_table WHERE admission_no=$1",[user_id])
        const hostel_admno=getadmno.rows[0].hostel_admission_no
        const messout=await pool.query("INSERT INTO messout VALUES($1,$2,$3);",[hostel_admno,fromDate,toDate])
        console.log(messout)
        res.json(messout)
    }
    catch(e){
        console.error(e)
    }
    
})


//INMATE - CERTIFICATE ROUTES

//View Certificates
router.get('/viewcertificates',async (req,res)=>{
    try{
        const certificates=await pool.query('SELECT * FROM certificate_application')
        console.log(certificates.rows)
        res.json(certificates.rows)
    }
    catch(e){
        console.error(e)
    }
    
})

//Apply for a certificate
// router.post('/applycertificate',async(req,res)=>{
//     try{
//         const user_id=req.body.user_id
//         const purpose=req.body.purpose
//         const remarks=req.body.purpose
//         const date=new Date();
//         const getadmno=await pool.query("SELECT hostel_admission_no FROM inmate_table WHERE admission_no=$1",[user_id])
//         const hostel_admno=getadmno.rows[0].hostel_admission_no
//         const query=await pool.query("INSERT INTO certificate_application VALUES(1,1,1,1,1,1,)",[hostel_admno,date,purpose,remarks])

//     }
//     catch(e){
//         console.error(e)
//     }
// })




//MESS SECRETARY
//Update MessOut Rule
router.put('/messoutdays',async (req,res)=>{
    try{
        const {noofDays}=req.body
        const messout=await pool.query("UPDATE messrequirements SET value=$1 WHERE key='messoutdays'",[noofDays])
        console.log(messout)
    }
    catch(e){
        console.error(e)
    }
})

//View Messout Requests
router.get('/messoutrequests', async(req,res)=>{
    try{
        
    }
    catch (e){
        console.error(e)
    }
})

//View Current Inmates (Also for Mess Director)
router.get('/viewinmates', async(req,res)=>{
    try{
        
    }
    catch (e){
        console.error(e)
    }
})

//MESS DIRECTOR








module.exports=router