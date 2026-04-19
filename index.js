const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extends: true}));
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));
app.use(express.static('public'))

app.get('/', (req, res)=>{
  res.send("hello world!")
})

app.get('/test', (req, res)=>{
  res.status(200).json({"message": "test successful"})
})


const skillsRouter = require('./routers/skillsRoute');
const projectsRouter = require('./routers/projectsRoute');
const articlesRouter = require('./routers/articlesRoute');
const contactRouter = require('./routers/contactRoute');

app.use('/skills', skillsRouter);
app.use('/contact', contactRouter);
app.use('/articles', articlesRouter);
app.use('/projects', projectsRouter);


app.listen(PORT, ()=>{
  console.log(`Server running on ${PORT}`)
})