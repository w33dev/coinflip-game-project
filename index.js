const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


const db = require('./config/keys').mongoURL;

// routers
const userRouter = require('./routes/userRouter');
const historyRouter = require('./routes/historyRouter');
const statsRouter = require('./routes/statsRouter');

app.use('/api/user', userRouter);
app.use('/api/history', historyRouter);
app.use('/api/stats', statsRouter);

mongoose.connect(db)
        .then(() => console.log('[Database] connected!'))
        .catch(err => console.log(err))

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is running on port ${port}`));