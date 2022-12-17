const express = require('express');

const bodyParser = require('body-parser');
const userRoutes = require('./apps/routes/userRoutes');
const librarianRoutes = require('./apps/routes/librarianRoutes');
const loginRoutes = require('./apps/routes/loginRegisterRoutes');
const dotEnv = require('dotenv');
const authMiddleware = require('./middleware/authMiddlware')
const cors = require('cors');

dotEnv.config();

const app = express();


app.use(cors({origin: '*'}));
app.use(bodyParser.json({inflate: true}));
app.use(authMiddleware);
app.use('/api/v1',loginRoutes);
app.use('/api/user',userRoutes);
app.use('/api/user', librarianRoutes);



app.listen(80);