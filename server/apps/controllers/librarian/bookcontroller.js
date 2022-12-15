const {Books} = require('../../../data/models');
const ResponseModel = require('../../../utilities/responseModel');
const ResponseModel = require('../../../utilities/tokenHandlers');
const {Authors} = require('../../../data/models');



// Get all books
module.exports.getAll = async (req, res) => {
    const Books = await Books.findAll( );
    res.json(new ResponseModel(Books));
}

//add books
module.exports.create = async (req, res) => {
    try{
        const {bookname, summary} = req.body;
        const firstname = req.body.authorname;

        //fetching author id;
        const author = await Authors.findOne({where: {firstname}})
    
        // Check if book already exists.
        const bookExists = await Books.findOne({where: {bookname: bookname}});
        if(bookExists){
            return res.status(400)
                .json(new ResponseModel(null, null, ['Book already exists.']));
        }

        var user = await Books.create({
            bookname: bookname,
            summary: summary,
            authorId: authorname
        });
        res.json(new ResponseModel(user));
    }
    catch(err){
        console.log(err);
        res.status(500).json(new ResponseModel(null, null, ['Unable to create user.']));
    }
}