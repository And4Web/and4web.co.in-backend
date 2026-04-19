const express = require('express');
const path = require('path');

const router = express.Router();

const projectsFile = path.join(__dirname,'..', 'public', 'pages', 'projects.html')

router.get('/', (req, res)=>{
  // res.send("projects route")
   res.sendFile(projectsFile)
})

module.exports = router;