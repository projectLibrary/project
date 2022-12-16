const express = require('express');

const bodyParser = require('body-parser');
const publicRoutes = require('./apps/routes/loginRegisterRoutes');

const bookRoutes = require('./apps/routes/bookRoutes');
const dotEnv = require('dotenv');
//const authMiddleware = require('./middleware/authMiddlware');
// const cors = require('cors');


dotEnv.config();

const app = express();

// app.use(cors({origin: '*'}));
//app.use(authMiddleware);
app.use(bodyParser.json({inflate: true}));

//app.use('/user', publicRoutes);
app.use('/user', bookRoutes);

app.listen(80);