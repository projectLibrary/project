const express = require('express');
const bodyParser = require('body-parser');
//const publicRoutes = require('./apps/public/routes');
//const userRoutes = require('./apps/user/routes');
const librarianRoutes = require('./apps/librarian/routes');
const dotEnv = require('dotenv');
//const authMiddleware = require('./middleware/authMiddlware')
const cors = require('cors');

dotEnv.config();

const app = express();

app.use(cors({origin: '*'}));
//app.use(authMiddleware);
app.use(bodyParser.json({inflate: true}));

// app.use('/api/v1', publicRoutes);
// app.use('/api/v1/user', userRoutes);
app.use('/librarian', librarianRoutes);

app.listen(80);