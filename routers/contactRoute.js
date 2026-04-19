const express = require('express');
const path = require('path');

const router = express.Router();

const contactFile = path.join(__dirname,'..', 'public', 'pages', 'contact.html')

router.get('/', (req, res)=>{
  // res.send("contact route")
  res.sendFile(contactFile)

})

module.exports = router;