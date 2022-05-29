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
        
        var counter=0;
        resp.rows.forEach((item, index)=>{
            pool.query(`SELECT Name, Certificate_ID
                        FROM CERTIFICATES
                        WHERE PathNo=$1`, [item.pathno], (err, respCert) => {
                
                counter++;
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
                        certificates:respCert.rows.length>0?respCert.rows.map(item=>(
                            {
                                name:item.name,
                                certificateId:item.certificate_id
                            }
                        )):[]
                    })
                }

                if(counter==resp.rows.length)
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

    pool.query(`DELETE from path where PathNo=$1 RETURNING *`, [req.query.pathNo], (err, resp) => {
        if (err) {
            console.log(err)
            throw err
        }

        console.log("req : ", req.query)
        res.send(resp.rows)
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
        
        pool.query(`SELECT Name, Certificate_ID
                    FROM CERTIFICATES
                    WHERE PathNo=$1`, [req.body.pathNo], (err, respCert) => {
            if (err) {
                console.log(err)
                throw err
            }

            //sending response
            res.send(respCert.rows.map(item=>(
                {
                    name:item.name,
                    certificateId:item.certificate_id
                }
            )))
        })
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

        pool.query(`SELECT Name, Certificate_ID
                    FROM CERTIFICATES
                    WHERE PathNo=$1`, [req.query.pathNo], (err, respCert) => {
            if (err) {
                console.log(err)
                throw err
            }

            //sending response
            res.send(respCert.rows.map(item=>(
                {
                    name:item.name,
                    certificateId:item.certificate_id
                }
            )))
        })
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

//Hostel Blocks
const getBlocks=(req,res)=>{

    pool.query(`SELECT MIN(Room_No) as rangeFrom, MAX(Room_No) as rangeTo, block_name, hb.block_id, floor_no
                FROM HOSTEL_ROOM hr, HOSTEL_BLOCKS hb
                WHERE hr.block_id=hb.block_id and hb.Hostel=$1
                GROUP BY hb.block_id, block_name, floor_no`, [req.query.hostel], (err, resp) => {
        if (err) {
            console.log(err)
            throw err
        }

        console.log(resp.rows)

        res.send(resp.rows)
    })
}

const addBlock=(req,res)=>{

    pool.query(`INSERT INTO HOSTEL_BLOCKS(hostel, block_name)
                VALUES($1, $2)
                RETURNING *`, [req.body.hostel, req.body.blockName], (err, resp) => {
        if (err) {
            console.log(err)
            throw err
        }

        res.send(resp.rows)
    })
}

const addFloor=async (req,res)=>{

    for(var room=req.body.rangeFrom; room<=req.body.rangeTo;room++)
    {
        try
        {
            var roomEntered = await pool.query(`INSERT INTO HOSTEL_ROOM(room_no, current_inmates, floor_no, block_id)
                        VALUES($1,0,$2,$3)
                        RETURNING *`, [room, req.body.floorNo, req.body.blockId])
            console.log(roomEntered.rows)
        }
        catch(e)
        {
            console.log(e)
        }
    }

    console.log("finished")
}

const applyHostelOut = async(req,res)=>{
    try{
        const {user_id,fromDate,toDate,reason}=req.body
        const getadmno=await pool.query("SELECT hostel_admission_no FROM inmate_table WHERE admission_no=$1",[user_id])
        const hostel_admno=getadmno.rows[0].hostel_admission_no
        const hostelout=await pool.query('INSERT INTO hostel_out(hostel_admission_no,fromdate,todate,reason) VALUES($1,$2,$3,$4)',[hostel_admno,fromDate,toDate,reason])
        res.json(hostelout)
    }
    catch(e){
        console.error(e)
    }
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
    updateApplication,

    //hostel blocks
    getBlocks,
    addBlock,
    addFloor

}