const {pool}=require('../db')

const downloadCertificate = async (req,res)=>{
    try{
        console.log("Helloo")
        const query=await pool.query(`select template_text from certificates where certificate_id=${req.query.certificate_id}`)

        var matchesArray=query.rows[0].template_text.match(/<<.*>>/g)

        console.log(matchesArray)
        // const details=await pool.query(`select users.name from certificate_application,users
        // where certificate_application.application_id=${req.query.application_id} and certificate_application.admission_no=users.user_id`)
        // console.log(details.rows)
        res.json(query.rows)
    }
    catch(e){

    }
}

module.exports={downloadCertificate}