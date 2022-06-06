const express=require('express')
const router=express.Router()
const {pool}=require('../db')

const hod=require('../controllers/hod')


router.get('/inmates', hod.inmateList)
 

//HOD - view CERTIFICATE ROUTES

//View Certificates
router.get('/viewcertificates', hod.viewCertificates)
module.exports=router