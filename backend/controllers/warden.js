const {pool}=require('../db')
const ExcelJS = require('exceljs');
const workbook = new ExcelJS.Workbook();
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

const getHostelApplications = async (req,res)=>{
    try{
        const query=await pool.query('SELECT * from hostel_application,users where hostel_application.user_id=users.user_id')
        console.log(query.rows)
        res.json(query.rows)
    }
    catch(e){

    }
}

const generateRankList= async(req,res) =>{
    try{

        const headerquery=await pool.query(`SELECT * from allotment_columns order by column_letter`)
        console.log(headerquery.rows)
        const existingcolquery=await pool.query(`SELECT * from allotment_columns where column_type='existing'`)
        const colData=existingcolquery.rows.map(col=>col.columns)

        // console.log(colData)

        const queryText='SELECT '+ colData.join(',') + ' from hostel_application, student_progress, users where hostel_application.user_id=users.user_id'
        const query=await pool.query(queryText);

        console.log(query.rows)
        const worksheet = workbook.addWorksheet('RankList');
        worksheet.columns=[]
        var temp=[]
        headerquery.rows.forEach(element => {
            if(element.column_type==='existing'){
                temp.push({header:element.columns.split('.')[1],key:element.columns})
                //Existing column format : 'table.columnname'
            }
            else{
                temp.push({header:element.columns,key:element.columns})
                //Derived column format : 'columnname'
            }
        });
        worksheet.columns=[...temp]
        // console.log(worksheet.columns)
        const noofrows=query.rows.length
        var rows=[]
        for(let i=0;i<noofrows;i++){
            var row=[]
            headerquery.rows.forEach(col=>{
                if(col.column_type==='existing')
                {
                    row.push(query.rows[i][col.columns.split('.')[1]])
                }
            })
            // Object.keys(query.rows[i]).forEach(colHeader => {
            //     row.push(query.rows[i][colHeader])
            // });
            rows.push(row)
        }

        worksheet.eachRow((row, rowNo)=>{
            headerquery.rows.forEach(col=>{
                if(col.column_type==='derived')
                    worksheet.getCell(col.column_letter+''+(rowNo+1)).value={formula:col.formula}
            })
        })
        console.log(rows)
        worksheet.addRows(rows);
        console.log("running")
        await workbook.xlsx.writeFile("Ranklist.xlsx");

    }
    catch(e){
        console.log(e)
    }
}

module.exports={hostelRegistry,getHostelApplications,generateRankList}