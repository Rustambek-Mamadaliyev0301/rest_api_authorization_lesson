import Pool from "pg-pool";

const pool = new Pool({
    database: "courses",
    user:"postgres",
    password:"931487733RMS",
    port:5432,
});



let id="19";
async function main(){
    try {
       const client =  await pool.connect();

// await client.query(`INSERT INTO users (user_name, user_email, user_password) VALUES('awsddwwwswqwqw','w','t');`)


    const users = await client.query(`SELECT * FROM users WHERE user_id=$1 OR user_id=$2;`,
    [id,18]);  
    console.log(users.rows);
    } catch (error) {
        console.log("PG_Error", error);
        
    }
}
main();