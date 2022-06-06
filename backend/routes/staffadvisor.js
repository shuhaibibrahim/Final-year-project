const express=require('express')
const router=express.Router()
const {pool}=require('../db')

const staffadvisor=require('../controllers/staffadvisor')


router.get('/inmates', staffadvisor.inmateList)
 

//StaffAdvisor - view CERTIFICATE ROUTES

//View Certificates
router.get('/viewcertificates', staffadvisor.viewCertificates)
module.exports=router