const {Users} = require('../../data/models');
const ResponseModel = require('../../utilities/responseModel');
const TokenHandlers = require('../../utilities/tokenHandlers');
const {Issuedbooks} = require('../../data/models');


// Get user profile
getUserProfile = async (req, res) => {
    console.log(req.user);
    try{
        const Profile = await Users.findOne(
            { where: 
                { id:req.user.id}
            });
        res.json(new ResponseModel(Profile));
    }
    catch(err){
        res.send(err);
    }
}

// Get user book history
getMyBook = async (req, res) => {
    
    console.log(req.user);
    const Mybooks = await Issuedbooks.findAll(
        { where: 
            { userId:req.user.id}
        });
    res.json(new ResponseModel(Mybooks));
}

module.exports={ getUserProfile, getMyBook}