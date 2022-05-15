const express=require('express')
const router=express.Router()
const pool=require('../db')
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

router.post('/complaintbox',(req,res)=>{
    console.log(req.body)
    res.send("Filled")
})

module.exports=router