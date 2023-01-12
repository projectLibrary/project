const ResponseModel = require("../../utilities/responseModel");
const tokenHandler = require("../../utilities/tokenHandlers");
const { Users } = require("../../data/models");
const nodemailer = require("nodemailer");
const { body, validationResult } = require('express-validator');
// Login function.

// Function to generate OTP
function otpGenerator(email) {
  let otp = "";
  let generateOTP = () => {
    let otp = "";
    let digits = "0123456789";
    for (let i = 0; i < 6; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
  };
  // Sending Mail
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "abhijithanandabhavan@gmail.com",
      pass: "tvnhmuqamtujuamh",
    },
  });
// Creating the message body
  otp = generateOTP();
  let mailOptions = {
    from: "abhijithanandabhavan@gmail.com",
    to: email,

    subject: "OTP Verification",
    text: "Your OTP is " + otp,
  };
// Catching any errors
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      mailOptions;
    }
  });
  return otp;
}
// Function to send OTP ends here


const sendOtp = async (req, res) => {
  const { email, password } = req.body;

  // Check if user exists.
  var user = await Users.findOne({
    where: {
      email: email,
      password: password,
    },
    
  });
  if (!user) {
    
    return res.json(new ResponseModel(null, null, ["Invalid User Details."]));
    
  }

  let otp = otpGenerator(user.email);
  user.otp = otp;
  await user.save();
  return res.json(new ResponseModel(null, null));
};

const loginUser = async (req, res) => {
  const { email, password, otp } = req.body;

  // Check if user exists.
  var user = await Users.findOne({
    where: {
      email: email,
      password: password,
      otp: otp
    },
  });
  if (!user) {
    return res.json(new ResponseModel(null, null, ["No user with the given details found"]));
  }
  let otp_received = otpGenerator(user.email);
  // Create token.
  const token = tokenHandler.createToken({
    id: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    role: user.role,
  });

  res.json(new ResponseModel(token));
};

const log_out =()=> {
  localStorage.removeItem(token);
  setIsLoggedin(false);
}

// Register function.
const registerNewUser = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      phone,
      address,
      otp,
      status,
      password,
    } = req.body;

     // Backend validation start here


     const errors = validationResult(req);
     if (!errors.isEmpty()) {
      return res.status(400).json(new ResponseModel(null, null,  errors.array() ));
   
     }

 // backend validation of express validator ends here

    // Check if user already exists.
    const userExists = await Users.findOne({ where: { email: email } });
    if (userExists) {
      return res
        .status(400)
        .json(new ResponseModel(null, null, ['User exists already']));
    }
   
    
    var user = await Users.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      address: address,
      otp: otp,
      // status: status,
      password: password,
    });
    
    res.json(new ResponseModel(user));
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json(new ResponseModel(null, null, ["Unable to create user."]));
  }
};

module.exports={sendOtp,registerNewUser,loginUser,log_out}