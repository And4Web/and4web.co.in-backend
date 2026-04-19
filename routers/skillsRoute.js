const express = require('express');
const path = require('path');

const router = express.Router();

const skillsFile = path.join(__dirname,'..', 'public', 'pages', 'skills.html')

router.get('/', (req, res)=>{
  // res.send("skills route")
  // console.log(skillsFile)
  res.sendFile(skillsFile)
})

module.exports = router;