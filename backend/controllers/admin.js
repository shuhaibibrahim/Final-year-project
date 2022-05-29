const {pool}=require('../db')

//Inmate Functions
const inmateList=(req,res)=>{

    pool.query(`SELECT * FROM Users u, STUDENT s, BATCH b, INMATE_TABLE it, INMATE_ROOM ir, HOSTEL_ROOM hr
                where s.BatchId=b.batchId and u.User_Id=s.Admission_No and s.Admission_No=it.Admission_No and
                it.Hostel_Admission_No=ir.Hostel_Admission_No and ir.Room_Id=hr.Room_Id and 
                hr.Hostel=$1`, [req.query.hostel], (err, resp) => {
        if (err) {
            throw err
        }

        console.log('user:', resp.rows)

        res.send(resp.rows)
    })
}

const getInmateRoles=(req, res)=>{
    pool.query(`SELECT Role FROM INMATE_ROLE
                WHERE Hostel_Admission_No=$1`, [req.query.hostelAdmNo], (err, resp) => {
        if (err) {
            throw err
        }

        res.send(resp.rows.map(item=>item.role))
    })
}

const updateInmateRole=(req,res)=>{
    pool.query(`INSERT INTO INMATE_ROLE (Hostel_Admission_No, Role)
                Values ($1, $2)`, [req.body.hostelAdmNo, req.body.role], (err, resp) => {
        if (err) {
          throw err
        }
        console.log('user roles:', resp.rows)
    })
    console.log("req :", req.query)
    res.send('Admin is up!')
}

const removeInmateRole=(req,res)=>{
    pool.query(`DELETE FROM INMATE_ROLE 
                WHERE Hostel_Admission_No=$1 AND Role=$2 returning *`, [req.query.hostelAdmNo, req.query.role], (err, resp) => {
        if (err) {
          throw err
        }
        console.log('user:', resp.rows)
    })
    console.log("req deleted L ", req.query)
    res.send('Admin is up!')
}


//Faculty functions
const facultyList=(req,res)=>{

    var rows=[]
    pool.query(`SELECT *  FROM Users u, FACULTY f
                where u.User_Id=f.PEN_NO`, (err, resp) => {
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
const getPathsData=(req,res)=>{

    pool.query(`SELECT * FROM PATH`, (err, resp) => {
        if (err) {
            console.log(err)
            throw err
        }
        console.log('user:', resp.rows)

        var responseData=[]

        resp.rows.forEach((item, index)=>{
            pool.query(`SELECT name
                        FROM CERTIFICATES
                        WHERE PathNo=$1`, [item.pathno], (err, respCert) => {
                if (err) {
                    console.log(err)
                }
                else
                {
                    console.log("im here")
                    responseData.push({
                        start: item.start_user,
                        pathNo: item.pathno,
                        path: item.path,
                        certificates:respCert.rows.length>0?respCert.rows.map(item=>item.name):[]
                    })
                }

                if(index==resp.rows.length-1)
                {
                    console.log(responseData)
                    res.send(responseData)
                }
            })
        })
    })
}

const postPath=(req,res)=>{

    pool.query(`INSERT INTO PATH (path, start_user)
                values($1, $2)
                RETURNING *`, [req.body.path, req.body.start], (err, resp) => {
        if (err) {
            console.log(err)
            throw err
        }
        console.log('path inserted:', resp.rows)

        res.send(resp.rows)
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
                WHERE Certificate_ID=$2 AND PathNo IS Null RETURNING *`, [req.body.pathNo, req.body.certificateId], (err, resp) => {
        if (err) {
            console.log(err)
            throw err
        }
            console.log(req.body
                ," --- response is : ", resp.rows)
        // if(resp.rows.length==0)
        //     res.send({message:"No rows are updated"})

        res.send(resp.rows)
    })
}

const deleteMapping=(req,res)=>{

    pool.query(`UPDATE CERTIFICATES
                SET PathNo=null
                WHERE Certificate_Id=$1 RETURNING *`, [req.query.certificateId], (err, resp) => {
        if (err) {
            console.log(err)
            throw err
        }

        if(resp.rows.length==0)
            res.send({message:"No rows are updated"})

        res.send(resp.rows)
    })
}

//Create/Edit application
const getCertificates=(req,res)=>{

    pool.query(`SELECT * FROM CERTIFICATES`, (err, resp) => {
        if (err) {
            console.log(err)
            throw err
        }

        res.send(resp.rows)
    })
}

const createApplication=(req,res)=>{

    pool.query(`INSERT INTO CERTIFICATES(Name, Application_template)
                VALUES ($1, $2) 
                RETURNING *`, [req.body.certificateName, req.body.certificateTemplate], (err, resp) => {
        if (err) {
            console.log(err)
            throw err
        }

        res.send(resp.rows)
    })
}

const deleteApplication=(req,res)=>{

    pool.query(`DELETE FROM CERTIFICATES
                WHERE Certificate_ID=$1
                RETURNING *`, [req.query.certificateId], (err, resp) => {
        if (err) {
            console.log(err)
            throw err
        }
        console.log('certificate deleted : ',req.query,resp.rows)

        res.send(resp.rows)
    })
}

const updateApplication=(req,res)=>{
    
    console.log( "body : ",req.body)
    pool.query(`UPDATE CERTIFICATES
                SET application_template=$1
                WHERE Certificate_ID=$2
                RETURNING *`, [req.body.certificateTemplate, req.body.certificateId], (err, resp) => {
        if (err) {
            console.log(err)
            throw err
        }
        console.log('certificate updated : ', resp.rows)

        res.send(resp.rows)
    })
}

module.exports={
    //inmate
    inmateList, 
    getInmateRoles,
    updateInmateRole, 
    removeInmateRole,

    //faculty
    facultyList, 

    //hostel registry
    hostelRegistry,

    //application paths
    getPathsData,
    postPath,
    deletePath,
    mapCertificate,
    deleteMapping,

    //create/edit application
    getCertificates,
    createApplication,
    deleteApplication,
    updateApplication

}