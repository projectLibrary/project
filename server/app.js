const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./apps/routes/bookRoutes');
// const userRoutes = require('./apps/user/routes');
const dotEnv = require('dotenv');
//const authMiddleware = require('./middleware/authMiddlware');
// const cors = require('cors');
dotEnv.config();
const app = express();
// app.use(cors({origin: '*'}));
//app.use(authMiddleware);
app.use(bodyParser.json({inflate: true}));
app.use('/user', bookRoutes);
// app.use('/api/v1/user', userRoutes);

app.listen(80);