var yogurt = require('../models/yogurt'); 
 
// List of all yogurt 
exports.yogurt_list = async function(req, res) { 
    try{ 
        theyogurt = await yogurt.find(); 
        res.send(theyogurt); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific yogurt. 
exports.yogurt_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await yogurt.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle yogurt create on POST. 
exports.yogurt_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new yogurt(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.yogurt_flavour = req.body.yogurt_flavour; 
    document.yogurt_quantity = req.body.yogurt_quantity; 
    document.yogurt_cost = req.body.yogurt_cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle yogurt delete on DELETE. 
exports.yogurt_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await yogurt.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle yogurt update form on PUT. 
exports.yogurt_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Costume.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.yogurt_flavour)  
               toUpdate.yogurt_flavour = req.body.yogurt_flavour; 
        if(req.yogurt_quantity) toUpdate.yogurt_quantity = req.body.yogurt_quantity; 
        if(req.body.yogurt_cost) toUpdate.yogurt_cost = req.body.yogurt_cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 


// VIEWS 
// Handle a show all view 
exports.yogurt_view_all_Page = async function(req, res) { 
    try{ 
        theyogurt = await yogurt.find(); 
        res.render('yogurt', { title: 'yogurt Search Results', results: theyogurt }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle a show one view with id specified by query 
exports.yogurt_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await yogurt.findById( req.query.id) 
        res.render('yogurtdetail',  
{ title: 'yogurt Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a yogurt. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.yogurt_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('yogurtcreate', { title: 'yogurt Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a yogurt. 
// query provides the id 
exports.yogurt_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await yogurt.findById(req.query.id) 
        res.render('yogurtupdate', { title: 'yogurt Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.yogurt_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await yogurt.findById(req.query.id) 
        res.render('yogurtdelete', { title: 'yogurt Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 