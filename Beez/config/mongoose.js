const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/beez_devlopment');

const db=mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to database'));

db.once('open',function(){
    console.log('connected to data base');
});

module.exports=db;