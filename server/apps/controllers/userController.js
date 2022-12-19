const { Users } = require('../../data/models');
const {Books} = require('../../data/models');
const ResponseModel = require('../../utilities/responseModel');
const TokenHandlers = require('../../utilities/tokenHandlers');
const { Issuedbooks } = require('../../data/models');
const { Feedback } = require('../../data/models');


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
            where:
                { userId: req.user.id }
        });
    res.json(new ResponseModel(Mybooks));
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

//apply books
applyBook = async (req, res, next) => {
    const bookId = req.params.id;
    const returnDate = null;
    //finding count of non-returned books of the user
    const book= await Books.findOne(
        {
         where:{id:bookId}
        });
    var Count = await Issuedbooks.count(
        {
            where:
            {
                id: req.user.id,
                returnDate: returnDate
            }
        });
    console.log(Count);
    if (Count > 3) {
        return res.status(400)
            .json(new ResponseModel((null, null, ['User book limit exceeded'])));
    }
    else {
        const { bookname, userCategory, issuedDate, } = req.body;
        //calculating expected date
        var date = new Date(issuedDate);
        var copy = new Date(date);
        copy.setUTCDate(date.getDate() + 10);
        console.log(date);
        console.log(copy)
        //adding issuedbook details to the Database
        var ib = await Issuedbooks.create({
            bookname: book.bookname,
            userCategory: userCategory,
            issuedDate: issuedDate,
            expectedreturnDate: copy,
            userId: req.user.id,
            bookId: bookId,

        });
        //changing the book status as Not available
        await Books.update(
            {
                availability: "Not available"
            },
            {
                where: { id: req.params.id }
            }
        )
    }
    res.json(new ResponseModel(ib));
}



module.exports = { getUserProfile, getMyBook, feedbackCreate, applyBook }