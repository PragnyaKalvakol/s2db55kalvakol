const mongoose = require("mongoose") 
const yogurtSchema = mongoose.Schema({ 
 yogurt_flavour: String, 
 yogurt_quantity: String, 
 yogurt_cost: Number 
}) 
 
module.exports = mongoose.model("yogurt", 
yogurtSchema) 