const express=require('express')
const router=express.Router()
const {pool}=require('../db')

const admin=require('../controllers/admin')

router.get('/inmates', admin.inmateList)
router.get('/inmates/roles', admin.inmateRoles)
router.post('/inmates/updateRole', admin.updateInmateRole)

router.get('/faculties', admin.facultyList)


module.exports=router
