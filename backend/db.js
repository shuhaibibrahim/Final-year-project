const { Pool } = require('pg')

const pool=new Pool({
    user:"eehzmbvdfszifc",
    password:"d49976d5e0c46dba3557084f8544b395a61bff40a0edd3a80c460b20c1c4385b",
    host:"ec2-44-196-223-128.compute-1.amazonaws.com",
    port:5432,
    database:"d80dtaeden6cv",
    ssl:{
        rejectUnauthorized:false
    }
})

const users=[
    {
        username: "user",
        password: "1234",
        roles:["admin", "staff advisor", "hod", "warden", "hosteloffice"]
    }
]

module.exports = pool