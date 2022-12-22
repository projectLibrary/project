const ResponseModel = require('../../utilities/responseModel');
const tokenHandler = require('../../utilities/tokenHandlers');
const {Issuedbooks} = require('../../data/models');
const { Books } = require('../../data/models');

module.exports.applyBook = async (req, res, next) => {
    const bookId =req.params.id;

    //finding count of non-returned books of the user
    const book= await Books.findOne(
        {
            where:{id:bookId}
        });

    console.log(book.id)
    var Count = await Issuedbooks.count(
        {
            where:
            {
                userId: req.user.id,
                returnDate: null
            }
        });
        console.log(Count);
    if (Count > 3) {
       return res.status(400)
       .json(new ResponseModel((null, null, ['User book limit exceeded'])));
    }    
    else {
        const issuedDate= (new Date());
        console.log(issuedDate)
        const  userCategory = req.body.userCategory
        //calculating expected date
        var date = new Date(issuedDate);
        var copy = new Date(date);
        copy.setUTCDate(date.getDate() + 10);
        console.log(date);
        console.log(copy)
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
                        where: {id: req.params.id}
                    }
                )
            }            
            res.json(new ResponseModel(ib));
        }     
            
        



