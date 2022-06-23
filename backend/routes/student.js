const express=require('express')
const router=express.Router()
const {pool}=require('../db')
router.get('/',(req,res) =>{
    res.status(200).send('Student here')
})

router.post('/hostelapplication',async (req,res)=>{
    console.log(req.body)
    const query=await pool.query(`INSERT INTO hostel_application(user_id,dob,religion,caste,category,
        admission_criteria,parent_name,parent_address,local_guardian_name,local_guardian_address,
        local_guardian_number,annual_income,bpl,present_address,
        eligible_for_concession) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)`,[req.body.user_id,req.body.dob,req.body.religion,
        req.body.caste,req.body.category,req.body.admission_criteria,req.body.parent_name,req.body.parent_address
        ,req.body.local_guardian_name,req.body.local_guardian_address,req.body.local_guardian_number,req.body.annual_income
        ,req.body.bpl,req.body.parent_address,req.body.eligible_for_concession])
        console.log(query)
    const semmarks=[]
    // const marksquery= await pool.query(`INSERT into student_progress(admission_no,semester,university_marks) values($1,$2,$3)`,[req.body.user_id,req.body.semester,req.body.grade])
})

router.post('/noninmate',async (req,res)=>{
    try{
        
    }
    catch(e){
        console.error(e)
    }
})

module.exports=router