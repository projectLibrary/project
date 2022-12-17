
const ResponseModel = require('../utilities/responseModel');
const tokenHandler = require('../utilities/tokenHandlers');



module.exports = (req, res, next) => {
    // if(!req.url.startsWith('/api/v1/user')){
    //     return next();
    // }
    console.log(req.url);
    console.log("auth middleware");
    let token = req.headers['authorization'];
    token = token ? token.split(' ')[1] : null;
    if(!token){
        return res.status(401)
            .json(new ResponseModel(null, null, ['Unauthorized.']));
    }

    try{
        const tokenResult = tokenHandler.verifyToken(token);
        req.user = tokenResult;
        return next();
    }
    catch(err){
        return res.status(401)
            .json(new ResponseModel(null, null, ['Unauthorized.']));
    }
}