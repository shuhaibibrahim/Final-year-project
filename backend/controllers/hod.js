const {pool}=require('../db')

//Inmate Functions
const inmateList=(req,res)=>{

    pool.query(`SELECT * FROM Users u, STUDENT s, BATCH b, INMATE_TABLE it, INMATE_ROOM ir, HOSTEL_ROOM hr, HOSTEL_BLOCKS hb
                where s.BatchId=b.batchId and u.User_Id=s.Admission_No and s.Admission_No=it.Admission_No and
                it.Hostel_Admission_No=ir.Hostel_Admission_No and ir.Room_Id=hr.Room_Id and 
                hr.block_id=hb.block_id and hb.hostel=$1`, [req.query.hostel], (err, resp) => {
        // if (err) {
        //     throw err
        // }

        console.log('user:', resp.rows)

        res.send(resp.rows)
    })
}

const viewCertificates = async (req,res)=>{
    try{
        const user_id=req.query.user_id
        console.log(user_id)
        const certificates=await pool.query(`
        SELECT ST.admission_no,u.name as studentname,B.programme,C.name as certificatename,
        CA.application_id,CA.date,CA.status,CA.application_form,p.path 
        FROM roles_faculty as RF, hod as H, student as ST, certificate_application as CA, 
        certificates as C, path as P, users as U,batch as B 
        WHERE RF.userid=$1 and RF.roleid=H.roleid and B.batchid=ST.batchid 
        and H.department=B.department and ST.admission_no = CA.admission_no and 
        CA.certificate_id=C.certificate_id and ST.admission_no=u.user_id and C.pathno=P.pathno`,[user_id])
        var requiredCertificates=[]
        for (var i=0;i<certificates.rows.length;i++)
        { 
            var myArray = certificates.rows[i].path.split("-");
            // console.log(myArray)
            if(myArray[certificates.rows[i].status]=='HOD'){
                requiredCertificates.push(certificates.rows[i])
            }
        }

        // console.log(requiredCertificates)
        console.log(certificates.rows)
        // console.log(req.query)
        res.json(certificates.rows)
    }
    catch(e){
        console.error(e)
    }
    
}

module.exports={inmateList,
    viewCertificates
}