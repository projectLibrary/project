const {Books} = require('../../data/models');
const ResponseModel = require('../../utilities/responseModel');
const tokenHandlers = require('../../utilities/tokenHandlers');
const {Authors} = require('../../data/models');
const {Categories} = require('../../data/models');
const { Sequelize } = require('sequelize');

// Get all books
module.exports.getAllBooks = async (req, res) => {
    const books = await Books.findAll({
        include: [Authors, Categories]  
        });
    res.json(new ResponseModel(books));
    
}
//add books
module.exports.addBook = async (req, res) => {
    console.log(req.body);

    try{
        const bookname = req.body.bookname;
        const summary = req.body.summary;
        const firstname = req.body.firstname;
        const lastname =req.body.lastname;
        const category=req.body.category
        

        const bookExists = await Books.findOne({where: {bookname: bookname}});

        if(bookExists){
            return res.status(400)
                .json(new ResponseModel(null, null, ['Book already exists.']));
        }

        else{
         var author = await Authors.findOne({where: {firstname:firstname,lastname:lastname}})
         if(!author){
             // create author.
             author = await Authors.create({
                firstname:firstname,
                lastname:lastname

             })
         }
        const categoryname = await Categories.findOne({where:{name:category}})
        console.log(categoryname);
        var books = await Books.create({
            bookname: bookname,
            summary: summary,
            availability:'Available',
            authorId: author.dataValues.id,
            categoryId:categoryname.dataValues.id
        });
        res.json(new ResponseModel(Books));

    }
}
    catch(err){
        console.log(err);
        res.status(500).json(new ResponseModel(null, null, ['Unable to create book.']));
    }
}
//delete books
module.exports.deleteBook = async (req, res, next) => {
    let id = req.params.id;
    let bookFromDb = await Books.findByPk(id);
    if (bookFromDb != null) {
        await Books.destroy({
            where: {
                id:id
            }
        });
        res.json(new ResponseModel(bookFromDb));
    }
}
//updatebooks
module.exports.updateBook = async (req, res, next) => {
 let id = req.params.id;
 const book = await Books.findByPk(id);
 const {bookname, summary} = req.body;
 const firstname = req.body.firstname;
 const lastname =req.body.lastname;
 const categoryname=req.body.categoryname

 var author = await Authors.findOne({where: {firstname:firstname,lastname:lastname}})
 if(!author){
     // create author.
 author=  await Authors.create({
        firstname:firstname,
        lastname:lastname

     })
 }
 const category = await Categories.findOne({where:{name:categoryname}});
 await Books.update({
    bookname: bookname,
    summary: summary,
    availability:'Available',
    authorId: author.dataValues.id,
    categoryId:category.dataValues.id
},
{
    where:{id:id}
});
}
