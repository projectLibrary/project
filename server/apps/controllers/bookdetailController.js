const {Books} = require('../../data/models');
const ResponseModel = require('../../utilities/responseModel');

module.exports.getOne = async(req,res)=>{
    const id = req.params.id;
    const books = await Books.findOne({
        where:{id: id}
    });
    res.json(new ResponseModel(books));
}