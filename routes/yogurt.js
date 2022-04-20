var express = require('express'); 
const yogurt_controlers= require('../controllers/yogurt'); 
var router = express.Router(); 
 
/* GET yogurt */ 
router.get('/', yogurt_controlers.yogurt_view_all_Page ); 
module.exports = router; 

// GET request for one yogurt. 
router.get('/yogurt/:id', yogurt_controlers.yogurt_detail); 

/* GET detail yogurt page */ 
router.get('/detail', yogurt_controlers.yogurt_view_one_Page); 

/* GET create yogurt page */ 
router.get('/create', yogurt_controlers.yogurt_create_Page); 

/* GET create update page */ 
router.get('/update', yogurt_controlers.yogurt_update_Page); 

/* GET delete yogurt page */ 
router.get('/delete', yogurt_controlers.yogurt_delete_Page); 