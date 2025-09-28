const express = require('express'); //Loads the express library
const router = express.Router(); //Router object created

// define routes here
router.get('/Miniproject1', (req, res) => {
  res.send('Hello World!');
});

// export router
module.exports = router; //Makes this router object available to other files.