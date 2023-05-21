    const User=require('../models/user')

//profile  page
exports.profile = async (req, res) => {
  try {
    if (req.cookies.user_id) {
      const user = await User.findById(req.cookies.user_id).exec();
      if (user) {
        return res.render('user_profile', {
          title: 'Profile',
          user: user
        });
      } else {
        return res.redirect('/users/sign-in');
      }
    } else {
      return res.redirect('/users/sign-in');
    }
  } catch (error) {
    console.error(error);
    return res.redirect('/users/sign-in');
  }
};


   
    //render the sign up page
    module.exports.signup=function(req,res){
              return res.render('signUp',{
                title:"beez sign-up"
              })
    }
    //get the signup data
    module.exports.create = async function (req, res) {
        try {
          if (req.body.password !== req.body.confirm_password) {
            return res.redirect('back');
          }
      
          const user = await User.findOne({ email: req.body.email });
      
          if (!user) {
            await User.create(req.body);
            return res.redirect('./sign-in');
          } else {
            return res.redirect('back');
          }
        } catch (err) {
          console.log('Error:', err);
          return res.redirect('back');
        }
      };


      //signing out of the page
      exports.signOut = (req, res) => {
        // Clear the user_id cookie
        res.clearCookie('user_id');
        
        // Redirect to the sign-in page or any other desired location
        res.redirect('/users/sign-in');
      };
      
        // module.exports.create=function(req,res){
        //     if(req.body.password!=req.body.confirm_password){
                
        //         return res.redirect('back');
        //     }

        //     User.findOne({email:req.body.email},function(err,user){
        //             if(err){console.log('error in finding the user');return;}
                
        //             if(!user){

        //         User.create(req.body,function(err,user){
        //             if(err){ console.log('error in creating the user'); return; }
        //             return res.redirect('./users/sign-in');
        //         })
        //     }
        //     else{
        //         return res.redirect('back');
        //     } 
            
        // });

        // }

    //render the sign in page
    module.exports.signin=function(req,res){
        return res.render('signin',{
            title:'Beez'
        });
    }
    //sign In and create the session for user
    module.exports.createSession = async function (req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    
    if (user) {
      if (user.password !=req.body.password) {

        return res.redirect('back');
      }

      res.cookie('user_id', user.id);
      return res.redirect('/users/profile');
     } 
     else {
      console.log('User not found');
      return res.redirect('back');
    }
  } catch (err) {
    console.log('Error:', err);
    return res.redirect('back');
  }
};

      
      
    //     module.exports.createSession=function(req,res){
    //         //find the user
    //     User.findOne({email:req.body.email},function(err,user){
    //             if(err){console.log('error in finding user in signing in');return}
    //         //handle user found 
    //         if(user){
    //             //handle password incorrect
    //            if(user.password!=req.body.password){
    //             return res.redirect('back');
    //            }
    //             //handle session creation
    //             res.cookie('user_id',user.id);
    //             return res.redirect('/users/profile');

    //         }else{
    //             //handle user not found
    //            return res.redirect('back');
    //         }

    //     });



       

       

       
    // }