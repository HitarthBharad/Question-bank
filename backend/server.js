const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://hitarthBharad:iamHitarthBharad@question-0ppt8.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const subjectRouter = require('./router/subject')
const chapterRouter = require('./router/chapter')
const questionRouter = require('./router/questions')
const userRouter = require('./router/user')
app.use('/subject',subjectRouter);
app.use('/topic',chapterRouter);
app.use('/user',userRouter);
app.use('/question',questionRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
