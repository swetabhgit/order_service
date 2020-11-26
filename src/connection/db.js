const mongoose = require('mongoose')
// const connect =async ()=>
// {
//     await mongoose.connect(process.env.DB_CONNECTION_STRING, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// })
    
// console.log(":: connection established with database ::")
// }

// const connectWithMenu =async ()=>
// {
//     await mongoose.connect(process.env.MENUDB_CONNECTION_STRING, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// })
// }

// const disconnect = async ()=>{
//     mongoose.connection.close()
//     console.log(":: db connection disconnected ::")
//     return new Promise((resolve)=>resolve(true))
// }
// module.exports = {connect:connect, disconnect:disconnect,connectWithMenu:connectWithMenu}
 const orderDb = mongoose.createConnection("mongodb+srv://restaurantDB:swetabh@cluster0.lk4iz.mongodb.net/orderDB?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    const menuDb = mongoose.createConnection("mongodb+srv://restaurantDB:swetabh@cluster0.lk4iz.mongodb.net/restaurantDB?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })

module.exports ={orderDb:orderDb, menuDb: menuDb}