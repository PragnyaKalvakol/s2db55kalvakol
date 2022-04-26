const mongoose = require("mongoose") 
const yogurtSchema = mongoose.Schema({ 
 yogurt_flavour: {
     type: String,
     required: true
 },
 yogurt_quantity: {
     type: Number,
     min: 2,
     max: 2000
 },
 yogurt_cost: Number 
}) 
 
module.exports = mongoose.model("yogurt", yogurtSchema) 