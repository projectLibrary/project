
const ResponseModel = require('../../utilities/responseModel');
const {Books} = require('../../data/models');

// Get all books.
module.exports.getAll = async (req, res) => {
    
    const books = await Books.findAll({
        where: {availability: 'Available'}
    });
    res.json(new ResponseModel(books));
}


// module.exports.getOne = async (req, res) => {
//     const id = req.params.id;
//     const books = await Books.findOne({
//         where: {id: id}
//     });
//     res.json(new ResponseModel(books));
// }

