const {Users,Authors} = require('./models');

// Sync models with database.
Users.sync({alter: true});
//Categories.sync({alter: true});
Authors.sync({alter: true});
//Books.sync({alter: true});
//Issuedbooks.sync({alter: true});
 //Latefee.sync({alter: true});
//Feedback.sync({alter: true});
