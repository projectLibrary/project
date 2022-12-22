const ResponseModel = require('../../utilities/responseModel');
const tokenHandler = require('../../utilities/tokenHandlers');
const {Users} = require('../../data/models');
const { Latefee } = require('../../data/models');
const { Books } = require('../../data/models');
const { Issuedbooks } = require('../../data/models');

module.exports.returnBookGet=async (req, res, next) => {
    const id=req.params.id;
    const Ib = await Issuedbooks.findOne(
        { where: 
            { id:id}
        }); 
}
//returning book and generating fine
module.exports.returnBookPost = async (req, res, next) => {
    
    const id=req.body.issuedId;
    const returnDate=req.body.returnDate;
    console.log(returnDate);
    const userId=req.user.id
    
    const Ib = await Issuedbooks.findOne(
        { where: 
            { id:id}
        });
     await Issuedbooks.update(
            {
                returnDate:returnDate
            },
            {
                where: {id:id}
            }
        );

    const bookId=Ib.bookId;    
    const expectedreturnDate=Ib.expectedreturnDate;
    var date1 = new Date(expectedreturnDate);
    var date2 = new Date(returnDate);

    if (returnDate > expectedreturnDate){
    var time_difference = date2.getTime() - date1.getTime();
    var days_difference = time_difference / (1000 * 60 * 60 * 24);
    console.log(days_difference);
    var fine=days_difference * 5
    console.log(fine)
    }
    else{
    fine = 0;
    }
    //latfee db
    var fee= await Latefee.create({
        issuedId:id,
        userId:userId,
        delayDays:days_difference,
        fee:fine
    
    });
    
    await Books.update(
        { availability:"Available" },
        { where: {id:bookId}});

        res.json(new ResponseModel(fee));
    
} 

//displaying fine
module.exports.lateFee = async (req, res, next) => {
    const id=req.params.id
    console.log("Idddddddd: ", id);
    const fee = await Latefee.findOne(
        { where: 
            { id:id}
        });
    res.json(new ResponseModel(fee));

}
//fee payment
module.exports.lateFeePost = async (req,res,next)=>{
    const feeId =req.body.id;
    console.log("id",feeId)
    const isPayed=req.body.isPayed
    console.log(isPayed);
    await Latefee.update({
        isPayed : isPayed
    },
    {
        where:{
            id : feeId
        }
    })
}