
const ResponseModel = require('../../utilities/responseModel');
const tokenHandler = require('../../utilities/tokenHandlers');
const {Users} = require('../../data/models');
// Login function.
module.exports.login = async(req, res) => {
    const {email, password} = req.body;
    
    // Check if user exists.
    var user = await Users.findOne({where: {
        email: email, 
        password: password}
    });

    if(!user){
        return res.json(new ResponseModel(null, null, ['Invalid credentials.']));
    }

    // Create token.
    const token = tokenHandler.createToken({
        id: user.id,
        firstname: user.firstname,
        lastname:user.lastname,

        role: user.role
    });

    res.json(new ResponseModel(token));
}

// Register function.
module.exports.register = async (req, res) => {
    try{
        const {firstname,lastname, email,phone,address,otp,status, password} = req.body;

        // Check if user already exists.
        const userExists = await Users.findOne({where: {email: email}});
        if(userExists){
            return res.status(400)
                .json(new ResponseModel(null, null, ['User already exists.']));
        }

        var user = await Users.create({
            firstname: firstname,
            lastname:lastname,
            email: email,
            phone: phone,
            address:address,
            otp:otp,
            status:status,
            password: password
        });
        res.json(new ResponseModel(user));
    }
    catch(err){
        console.log(err);
        res.status(500).json(new ResponseModel(null, null, ['Unable to create user.']));
    }
}