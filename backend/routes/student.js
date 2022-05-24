const express=require('express')
const router=express.Router()
const {pool}=require('../db')
router.get('/',(req,res) =>{
    res.status(200).send('Student here')
})

router.post('/hostelapplication',async (req,res)=>{
    console.log(req.body)
    const {age,dob,religion,caste,category,admissioncriteria,yearofadmission,}=req.body
        const application=pool.query('INSERT INTO hostel_application($1)',[...req.body])
})

router.post('/noninmate',async (req,res)=>{
    try{
        
    }
    catch(e){
        console.error(e)
    }
})

module.exports=router