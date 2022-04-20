var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var yogurt_controller = require('../controllers/yogurt'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a yogurt.  
router.post('/yogurt', yogurt_controller.yogurt_create_post); 
 
// DELETE request to delete yogurt. 
router.delete('/yogurt/:id', yogurt_controller.yogurt_delete); 
 
// PUT request to update yogurt. 
router.put('/yogurt/:id', yogurt_controller.yogurt_update_put); 
 
// GET request for one yogurt. 
router.get('/yogurt/:id', yogurt_controller.yogurt_detail); 
 
// GET request for list of all yogurt items. 
router.get('/yogurt', yogurt_controller.yogurt_list); 
 
module.exports = router; 