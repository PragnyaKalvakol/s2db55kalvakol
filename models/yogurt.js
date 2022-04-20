const mongoose = require("mongoose") 
const yogurtSchema = mongoose.Schema({ 
 yogurt_flavour: String, 
 yogurt_quantity: Number, 
 yogurt_cost: Number 
}) 
 
module.exports = mongoose.model("yogurt", yogurtSchema) 