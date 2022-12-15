const {Users} = require('../../data/models');
const ResponseModel = require('../../utilities/responseModel');
const TokenHandlers = require('../../utilities/tokenHandlers');
const {Issuedbooks} = require('../../data/models');


// Get user profile
module.exports.getUserProfile = async (req, res) => {

    const Profile = await Users.findOne(
        { where: 
            { id:req.user.id}
        });
    res.json(new ResponseModel(Profile));
}

// Get user book history
module.exports.getMyBook = async (req, res) => {

    const Mybooks = await Issuedbooks.findAll(
        { where: 
            { userId:req.user.id}
        });
    res.json(new ResponseModel(Mybooks));
}
