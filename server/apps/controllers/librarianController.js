const ResponseModel = require('../../utilities/responseModel');
const tokenHandler = require('../../utilities/tokenHandlers');
const {Users} = require('../../data/models');
const {Issuedbooks} = require('../../data/models');
const {Books} = require('../../data/models');
const {Feedback} = require('../../data/models');

//Get all users
module.exports.allUsers = async (req, res) => {
    const users = await Users.findAll();
    res.json(new ResponseModel(users));
}

//Get All issuedBooks
module.exports.allIssued = async (req, res) => {
    const issbooks = await Issuedbooks.findAll({
        include: [Users,Books]
    });
    res.json(new ResponseModel(issbooks));
}

//Currently issued books

module.exports.currentissuedbooks = async (req, res) => { 
    
    const currentib = await Issuedbooks.findAll({
        where: {returnDate: null},
        include:[Users,Books]
    });
    res.json(new ResponseModel(currentib))
}

//feedback view
module.exports.viewfeedback = async (req, res) => {
    const feed = await Feedback.findAll({
        include: Users
    });
    res.json(new ResponseModel(feed));
}