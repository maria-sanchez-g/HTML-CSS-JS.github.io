const express = require('express'); //Loads the express library
const router = express.Router(); //Router object created

// define routes here
router.get('/test', (req, res) => {
  res.send('Hello World!');
});

router.get('/test2', (req, res) => {
  res.send('Second test');
});

// export router
module.exports = router; //Makes this router object available to other files.
