module.exports.profile=function(req,res){
    return res.render('user_profile',{
        title:'profile'
    });
}
//render the sign up page
module.exports.signup=function(req,res){
    return res.render('signUp',{
        title:"signup"
    });
}
//get the signup data
module.exports.create=function(req,res){
    //to be done
}



//render the sign in page
module.exports.signin=function(req,res){
    return res.render('signin',{
        title:'Beez'
    });
}
//sign In and create the session for user
module.exports.createSession=function(req,res){
    //
}