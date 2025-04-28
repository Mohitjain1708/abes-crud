const mongoose =require('mongoose')
async function dbConn(){

    const conn=await mongoose.connect('mongodb+srv://mohitjain1784:Sinzq8MzvLbkUFiN@cluster0.vqi86oz.mongodb.net/abes-crud?retryWrites=true&w=majority&appName=Cluster0')
    if(conn){
        console.log('database connect successfully')
    }

    else{
        console.log('connection fail');

    }
}
module.exports=dbConn;