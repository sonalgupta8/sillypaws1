const express = require('express');
const app = express();
const userRouter = require('./routers/userRouter');
const courseRouter = require('./routers/courseRouter');
const utilRouter = require('./routers/utils');
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.static('uploads'));

app.use('/user', userRouter);
app.use('/course', courseRouter);
app.use('/util', utilRouter);

app.get('/home', (req, res) => {
    console.log('client request on server');
    res.send('Request on home');
})

app.listen(port, () => {
    console.log(`Server started on port on localhost : ${port}`)
})