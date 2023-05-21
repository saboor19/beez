module.exports.home=function(req,res){
    res.cookie('user',90)
    console.log(req.cookies);
    return res.render('home',{
        title:"Beez"
    });
}