const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
  res.send("contact route")
})

module.exports = router;