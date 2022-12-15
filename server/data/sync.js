const {Users} = require('./models');
const {Categories} = require('./models');
const {Authors} = require('./models');
const {Books} = require('./models');
const {Issuedbooks} = require('./models');
const {Latefee} = require('./models');
const {Feedback} = require('./models');

//Sync models with database.
// Users.sync({alter: true});
// Categories.sync({alter: true});
// Authors.sync({alter: true});
// Books.sync({alter: true});
// Issuedbooks.sync({alter: true});
//  Latefee.sync({alter: true});
Feedback.sync({alter: true});
