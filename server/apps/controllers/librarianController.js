
const ResponseModel = require('../../utilities/responseModel');
const {Issuedbooks, Users} = require('../../data/models');

//Get all users
module.exports.allUsers = async (req, res) => {
    const users = await Users.findAll();
    res.json(new ResponseModel(users));
}

// Get all issued books.
module.exports.allIssued = async (req, res) => { 
    const issbooks = await Issuedbooks.findAll();
    res.json(new ResponseModel(issbooks));
}

//Currently issued books

module.exports.currentib = async (req, res) => {   
    const currentib = await Issuedbooks.findAll({
        where: {returnDate: null}
    });
    res.json(new ResponseModel(currentib));
}



// module.exports.getOne = async (req, res) => {
//     const id = req.params.id;
//     const books = await Books.findOne({
//         where: {id: id}
//     });
//     res.json(new ResponseModel(books));
// }

