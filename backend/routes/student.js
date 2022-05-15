const express=require('express')
const router=express.Router()
const pool=require('../db')
router.get('/',(req,res) =>{
    res.status(200).send('Student here')
})

router.post('/noninmate',(req,res)=>{
    console.log(req.body)
    res.send('Submitted')
})

module.exports=router