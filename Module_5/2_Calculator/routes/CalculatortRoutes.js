const express = require('express'); //Loads the express library
const router = express.Router(); //Router object created

// define routes here
router.get('/add', (req, res) => {
  res.send('Add');
});

// export router
module.exports = router; //Makes this router object available to other files.
