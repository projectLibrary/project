
const ResponseModel = require('../../utilities/responseModel');
const { Feedback, Users } = require('../../data/models');

//feedback creation
module.exports.create = async (req, res) => {
    const id = req.params.id;
    const feed = req.body.feedback;
    try{
        const feedback = await Feedback.create({
            userId: req.params.id,
            feedback: feed,          
        });
        return res.json(new ResponseModel(feedback));
    }
    catch(err){
        console.log(err);
        res.status(500).json(new ResponseModel(null, null, ['Unable to send feedback.']));
    }
}

//view feedback for librarian

// module.exports.viewfeedback = async (req, res) => {
//     const feed = await Feedback.findAll();
//     res.json(new ResponseModel(feed));
// }

module.exports.viewfeedback = async (req, res) => {
    const feed = await Feedback.findAll({
        include: Users
    });
    
    res.json(new ResponseModel(feed));
}

