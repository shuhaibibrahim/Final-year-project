const {pool}=require('../db')

const hostelRegistry = async (req,res)=>{
    try{
        const query=await pool.query(`SELECT users.name,hostel_out.hostel_admission_no,batch.department,users.mobile_no,users.email,hostel_out.fromdate,hostel_out.todate,hostel_out.reason,hostel_blocks.hostel
        FROM users,inmate_table,hostel_out,batch,student,inmate_room,hostel_room,hostel_blocks WHERE hostel_out.hostel_admission_no=inmate_table.hostel_admission_no and inmate_table.admission_no=users.user_id and inmate_table.admission_no=student.admission_no and student.batchid=batch.batchid and hostel_out.hostel_admission_no=inmate_room.hostel_admission_no and inmate_room.room_id=hostel_room.room_id and hostel_room.block_id=hostel_blocks.block_id`)
        console.log(query.rows)
        res.json(query.rows)
    }
    catch(e){
        console.log(e)
    }

}

module.exports={hostelRegistry}