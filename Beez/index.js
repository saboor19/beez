const express=require('express');
const app=express();
const port=8000;
//requiring express EJS layout
const expressLayouts=require('express-ejs-layouts');
//dataBase connection
const db=require('./config/mongoose');

//layout methods to organise style and script
app.use(expressLayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
//including static files
app.use(express.static('./assets'));

//using express router 
app.use('/',require('./routes'));

//set up view engine
app.set('view engine','ejs');
app.set('views','./views');





app.listen(port,function(err){
    if(err){
        console.log(`error while starting the server:${err}`);
        return;
    }
    console.log(`Server is up and running on port:${port}`);

});