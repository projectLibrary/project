const ResponseModel = require('../../utilities/responseModel');
const tokenHandler = require('../../utilities/tokenHandlers');
const {Users} = require('../../data/models');
const { Latefee } = require('../../data/models');
const { Books } = require('../../data/models');
const { Issuedbooks } = require('../../data/models');

module.exports.returnBook = async (req, res, next) => {
    
    const id=req.params.id;
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


module.exports.lateFee = async (req, res, next) => {
    issuedId=req.params.id;
    const fee = await Latefee.findOne(
        { where: 
            { id:issuedId}
        });
    res.json(new ResponseModel(fee));

}

module.exports.payFee = async (req,res,next)=>{
    const feeId =req.params.id;
    console.log(feeId)
    const isPayed=req.body.isPayed
    await Latefee.update({
        isPayed : isPayed
    },
    {
        where:{
            id : feeId
        }
    })


}