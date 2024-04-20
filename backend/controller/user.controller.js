const User = require("../model/user.model.js");
const bcryptjs = require("bcrypt")
const signup = async (req, res) => {
  try {
    const { firstname, email, password } = req.body;
    const user =await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        msg: "email already exist",
      });
    }
    const createdUser = new User({
      firstname,
      email,
      password,
    });
    await createdUser.save();
    return res.status(201).json({
      msg: "email already exist",
    });
  } catch (error) {
    console.log("error : ", error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user =await User.findOne({ email });
    const isMatch = await bcryptjs.compare(password , user.password)
    if(!user || !isMatch){
      return res.status(402).json({mesg : "invalid username or password"})
    }
    else{
      return res.status(400).json({mesg : "login successful" , user:{
        email : user.email,
        firstname : user.firstname,
        id  : user._id
      }})

    }
  } catch (error) {
    console.log("error : ", error.mesg);
  }
};

module.exports = signup;
module.exports = login;
