const express = require('express');
const path = require('path');

const router = express.Router();

const articlesFile = path.join(__dirname,'..', 'public', 'pages', 'articles.html')

router.get('/', (req, res)=>{
  // res.send("articles route")
  res.sendFile(articlesFile)
})

module.exports = router;