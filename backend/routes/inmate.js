const express=require('express')
const router=express.Router()
const {pool}=require('../db')

//INMATE - HOSTEL ROUTES

//Hostel Out Form
router.post('/hostelout',async (req,res)=>{
    try{
        const {admno,fromDate,toDate,reason}=req.body
        const hostelout=await pool.query('INSERT INTO hostel_out(hostel_admission_no,fromdate,todate,reason) VALUES($1,$2,$3,$4)',[admno,fromDate,toDate,reason])
        res.json(hostelout)
    }
    catch(e){
        console.error(err)
    }
})

//Complaint Box
router.post('/complaintbox',async (req,res)=>{
    try{
        const {admno,complaint}=req.body
        const complaints=await pool.query("INSERT INTO Complaints(HostelAdmissionNo,Complaint) VALUES($1,$2)",[admno,complaint])
        res.json(complaints)
    }
    catch(e){
        console.error(err)
    }
})

//Room Change
router.post('/roomchange',async(req,res)=>{
    try{
        const {admno,preferredroom,reason}=req.body
        const roomchangereq=await pool.query("INSERT INTO ")
    }
    catch(e){
        console.error(err)
    }
})

//INMATE - MESSOUT ROUTES

//View MessOut history
router.get('/messouthistory',async (req,res)=>{
    try{
        const messouts=await pool.query("SELECT * FROM messout WHERE hostel_admission_no='$1'",[])
        res.json(messouts)
    }
    catch (e){
        console.error(e)
    }
})

//View MessOut days
router.get('/messoutdays',async (req,res)=>{
    try{
        const days=await pool.query("SELECT value FROM messrequirements WHERE key='messoutdays'")
        res.json(days.rows)
    }
    catch (e){
        console.error(e)
    }
})

//Apply for MessOut
router.post('/messout',async (req,res)=>{
    try{
        const {fromDate,toDate} = req.body
        // console.log(pool.query())
        const messout=await pool.query("INSERT INTO messoutdummy VALUES($1,$2);",[fromDate,toDate])
        console.log(messout)
        res.json(messout)
    }
    catch(e){
        console.error(e)
    }
    
})


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


//INMATE - CERTIFICATE ROUTES

router.post('/applycertificate',(req,res)=>{
    try{
        console.log(req,res)
    }
    catch(e){
        console.error(e)
    }
})



module.exports=router