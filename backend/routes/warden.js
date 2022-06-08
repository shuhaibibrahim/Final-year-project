const express=require('express')
const router=express.Router()
const warden=require('../controllers/warden')

//Hostel Registry
router.get('/hostelregistry',warden.hostelRegistry)


module.exports=router;