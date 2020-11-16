const mongoose = require('mongoose')
const connect =async ()=>
{
    await mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    
console.log(":: connection established with database ::")
}

const disconnect = async ()=>{
    mongoose.connection.close()
    console.log(":: db connection disconnected ::")
}
module.exports = {connect:connect, disconnect:disconnect}