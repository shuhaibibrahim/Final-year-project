const {pool}=require('../db')

//Inmate Functions
const inmateList=(req,res)=>{

    pool.query(`SELECT * FROM Users u, STUDENT s, BATCH b, INMATE_TABLE it, INMATE_ROOM ir, HOSTEL_ROOM hr, HOSTEL_BLOCKS hb
                where s.BatchId=b.batchId and u.User_Id=s.Admission_No and s.Admission_No=it.Admission_No and
                it.Hostel_Admission_No=ir.Hostel_Admission_No and ir.Room_Id=hr.Room_Id and 
                hr.block_id=hb.block_id and hb.hostel=$1`, [req.query.hostel], (err, resp) => {
        if (err) {
            throw err
        }

        console.log('user:', resp.rows)

        res.send(resp.rows)
    })
}

const viewCertificates = async (req,res)=>{
    try{
        const user_id=req.query.user_id
        // const certificates=await pool.query('SELECT CA.application_id,CA.certificate_id,CA.date,C.name,CA.approved,CA.rejected,CA.status,CA.feedback,CA.application_form FROM certificate_application as CA,certificates as C WHERE CA.certificate_id=C.certificate_id')
        const certificates=await pool.query('SELECT ST.admission_no,u.name as studentname,B.programme,C.name as certificatename,CA.application_id,CA.date,CA.status,CA.application_form,p.path FROM Roles_faculty as RF, Staff_advisor as SA, student as ST, certificate_application as CA, certificates as C, path as P, users as U,batch as B WHERE Rf.Userid=$1 and Rf.roleid=SA.roleid and SA.batchid=B.batchid and B.batchid=ST.batchid and ST.admission_no = CA.admission_no and CA.certificate_id=C.certificate_id and ST.admission_no=u.user_id and C.pathno=P.pathno',[user_id])
        // const certificates=await pool.query('SELECT * FROM certificate_application where hostel_admission_no=(SELECT hostel_admission_no FROM inmate_table WHERE admission_no=$1)',[user_id])
        var requiredCertificates=[]
        for (var i=0;i<certificates.rows.length;i++)
        { 
            var myArray = certificates.rows[i].path.split("-");
            console.log(myArray)
            if(myArray[certificates.rows[i].status]=='SA'){
                requiredCertificates.push(certificates.rows[i])
            }
        }

           
        console.log(certificates.rows)
        console.log(req.query)
        res.json(requiredCertificates)
    }
    catch(e){
        console.error(e)
    }
    
}

const approveApplication = async (req,res)=>{
    const applicationid=req.body.application_id
    console.log(applicationid)
    const query=await pool.query(`SELECT P.path,CA.status 
    from certificate_application as CA,certificates as C,path as P 
    where CA.application_id=${applicationid} and CA.certificate_id=C.certificate_id and C.pathno=P.pathno`)
    console.log(query.rows[0])
    var {path,status}=(query.rows[0])
    var patharray=path.split("-")
    console.log(patharray)
    if(status===(patharray.length)-1){
        console.log(patharray.length)
        const query=await pool.query(`update certificate_application set approved=TRUE where application_id=${applicationid} returning *`)
        console.log(query.rows)
        res.send(query.rows)
    }
    else{
        const query=await pool.query(`update certificate_application set status=status+1 where application_id=${applicationid} returning *`)
        console.log(query.rows)
        res.send(query.rows)
    }
   
}

module.exports={inmateList,
    viewCertificates,
    approveApplication
}