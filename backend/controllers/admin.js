const {pool}=require('../db')

//Inmate Functions
const inmateList=(req,res)=>{

    pool.query(`SELECT * FROM STUDENT s, BATCH b, INMATE_TABLE it, INMATE_ROOM ir, HOSTEL_ROOM hr
                where s.BatchId=b.batchId and s.Admission_No=it.Admission_No and
                it.Hostel_Admission_No=ir.Hostel_Admission_No and ir.Room_Id=hr.Room_Id and 
                hr.Hostel=$1`, [req.query.hostel], (err, res) => {
        if (err) {
            throw err
        }
        console.log('user:', res.rows)
    })
}

const inmateRoles=(req,res)=>{
    pool.query(`SELECT Role INAMTE_ROLE irole
                where irole.Hostel_Admission_No=$1`, [req.query.hostelAdmNo], (err, res) => {
        if (err) {
            console.log(err)
            throw err
        }
        console.log('user:', res.rows)
    })
    console.log("req :", req.query)
    res.send('Admin is up!')
}

const updateInmateRole=(req,res)=>{
    pool.query(`INSERT INTO INMATE_ROLE (Hostel_Admission_No, Role)
                Values ($1, $2)`, [req.body.hostelAdmNo, req.body.role], (err, res) => {
        if (err) {
          throw err
        }
        console.log('user:', res.rows)
    })
    console.log("req :", req.query)
    res.send('Admin is up!')
}

//Faculty functions
const facultyList=(req,res)=>{

    var rows=[]
    pool.query(`SELECT * FROM FACULTY f, ROLES_FACULTY rf 
                where f.PEN_NO=rf.UserID`, (err, resp) => {
        if (err) {
            console.log(err)
            throw err
        }
        console.log('user:', resp.rows)
        res.send(resp.rows)
    })
}

//Hostel Registry
const hostelRegistry=(req,res)=>{

    pool.query(`SELECT * FROM HOSTEL_OUT ho, INMATE_TABLE it, STUDENT s, BATCH b
                where ho.Hostel_Admission_No=it.Hostel_Admission_No and it.Admission_No=s.Admission_No
                and s.BatchId=b.BatchId`, [req.query.hostel], (err, res) => {
        if (err) {
            console.log(err)
            throw err
        }
        console.log('user:', res.rows)

        res.send(res.rows)
    })
}

//Applications Paths
const postPath=(req,res)=>{

    pool.query(`INSERT INTO PATH (path)
                values($1)`, [req.body.path], (err, res) => {
        if (err) {
            console.log(err)
            throw err
        }
        console.log('user:', res.rows)

        res.send(res.rows)
    })
}

const deletePath=(req,res)=>{

    pool.query(`DELETE from path where PathNo=$1`, [req.query.pathNo], (err, res) => {
        if (err) {
            console.log(err)
            throw err
        }
        console.log('user:', res.rows)

        res.send(res.rows)
    })
}

const mapCertificate=(req,res)=>{

    pool.query(`UPDATE CERTIFICATES
                SET PathNo=$1
                WHERE Name=$2`, [req.body.pathNo, req.body.certificateName], (err, res) => {
        if (err) {
            console.log(err)
            throw err
        }
        console.log('user:', res.rows)

        res.send(res.rows)
    })
}

module.exports={
    inmateList, 
    inmateRoles, 
    updateInmateRole, 
    facultyList, 
    hostelRegistry,
    postPath,
    deletePath,
    mapCertificate
}