const express=require('express')
const router=express.Router()
const {pool}=require('../db')
router.get('/',(req,res) =>{
    res.status(200).send('Student here')
})

router.post('/hostelapplication',(req,res)=>{
    console.log(req.body)
})

router.post('/noninmate',async (req,res)=>{
    try{
        
    }
    catch(e){
        console.error(e)
    }
})

module.exports=router