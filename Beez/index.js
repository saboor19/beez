const express=require('express');
const app=express();
const port=8000;
//uding express router 
app.use('/',require('./routes'));






app.listen(port,function(err){
    if(err){
        console.log(`error while starting the server:${err}`);
        return;
    }
    console.log(`Server is up and running on port:${port}`);

});