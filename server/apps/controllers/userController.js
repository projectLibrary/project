const { Users } = require('../../data/models');
const {Books} = require('../../data/models');
const ResponseModel = require('../../utilities/responseModel');
const TokenHandlers = require('../../utilities/tokenHandlers');
const { Issuedbooks } = require('../../data/models');
const { Feedback } = require('../../data/models');



//get all avilable books from
getAllBooks = async (req, res) => {
    const availability = "Available"
    const books = await Books.findAll({
        where:{availability: availability}
    }        
     );
    res.json(new ResponseModel(books));
}

// Get user profile
getUserProfile = async (req, res) => {
    console.log(req.user);
    try {
        const Profile = await Users.findOne(
            {
                where:
                    { id: req.user.id }
            });
        res.json(new ResponseModel(Profile));
    }
    catch (err) {
        res.send(err);
    }
}

// Get user book history
getMyBook = async (req, res) => {

    console.log(req.user);
    const Mybooks = await Issuedbooks.findAll(
        {
            
            where:{ userId: req.user.id },
            include: Books
        });
    res.json(new ResponseModel(Mybooks));
    console.log(Mybooks);
}

//feedback creation

feedbackCreate = async (req, res) => {
    const id = req.user.id;
    const feed = req.body.feedback;
    try {
        const feedback = await Feedback.create({
            userId: req.user.id,
            feedback: feed,
        });
        return res.json(new ResponseModel(feedback));
    }
    catch (err) {
        console.log(err);
        res.status(500).json(new ResponseModel(null, null, ['Unable to send feedback.']));
    }

}
//apply book get 
getOneBookDetails = async (req, res) => {
    const id = req.params.id;
    const books = await Books.findOne({
        where: {id: id}
    });
    console.log(books);
    res.json(new ResponseModel(books));
}
//apply books
applyBook = async (req, res, next) => {
    const bookId = req.body.bookId;
    const userCategory = req.body.userCategory;
    console.log(bookId);
    
    
    //finding count of non-returned books of the user
    const book = await Books.findOne(
    {
        where:{id:bookId}
    });
    var Count = await Issuedbooks.count(
        {
            where:
            {
                userId: req.user.id,
                returnDate: null
            }
        });
        console.log(Count);
    if (Count >= 3) {
       return res.status(200)
       .json(new ResponseModel(null, null, ['User book limit exceeded']));
    }    
    else {
        const issuedDate = (new Date());
        //calculating expected date
        var date = new Date(issuedDate);
        var copy = new Date(date);
        copy.setUTCDate(date.getDate() + 10);
        console.log(date);
        console.log(copy);
        //adding issuedbook details to the Database
        var ib = await Issuedbooks.create({
                userCategory: userCategory,
                issuedDate: issuedDate,
                expectedreturnDate:copy, 
                userId: req.user.id,
                bookId: bookId,

            });
            //changing the book status as Not available
                await Books.update(
                    {
                        availability:"Not available"
                    },
                    {
                        where: {id: bookId}
                    }
                )
            }            
            res.json(new ResponseModel(ib));
        }     
            

module.exports = { getUserProfile, getMyBook, feedbackCreate, applyBook,getOneBookDetails,getAllBooks }