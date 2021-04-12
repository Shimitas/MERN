const mongoose = require('mongoose');
const BDConnectionString =process.env.DB;

mongoose
    .connect(BDConnectionString, {useNewUrlParser: true ,useUnifiedTopology: true})
    .then(()=>console.log('MongoBD Connected'))
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection;

module.exports = db;
