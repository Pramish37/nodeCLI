const mongoose = require('mongoose');
const { db } = require('./model');

mongoose.connect("mongodb+srv://spaice:spaice9876@cluster0.tquz8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connection is successful..."))
.catch((err) => console.log( err));


const PostMessage = require('./model');

//adding product **works
const addProduct = (product) => {
  PostMessage.create(product).then(product => {
    console.info('New Product Added');
    db.close();
  })
}

//finding product by sku **works
const findProduct = (sku) => {
  PostMessage.find({sku: sku})
  .then(product =>{
    console.info(product);
    db.close();
  })
}

//Listing all products of all warehouses **works
const listProduct = () => {
  PostMessage.find()
  .then(product =>{
    console.info(product);
    console.info(`${product.length} products available in total!`);
    db.close();
  })
}

//List all warehouses only
const allWarehouse = () => {
  
  PostMessage.find({__v: 0})
  .select({warehouse:1})
  .then(product =>{
    console.info(product);
    console.info(`${product.length} warehouses available!`);
    db.close();
  })
}

//List all Products of named warehouse **works
const warehouseOnly = (num) => {
  PostMessage.find({warehouse: num})
  .then(product =>{
    console.info(product);
    console.info(`${product.length} products available!`);
    db.close();
  })
}


//Stock=updating product#-adding **works
const addStock = (sku, amount) =>{
  PostMessage.updateOne({sku}, { $inc: {stock: amount }}, {useFindAndModify: false})
  .then(product =>{
    console.info(product);
    console.info(`Stock of ${sku} has increased by ${amount}!`)
    db.close();
  })}

//Unstock=updating product#-substracting **works
const remStock = (sku, amount) =>{
  PostMessage.updateOne({sku}, { $inc: {stock: -amount }}, {useFindAndModify: false})
  .then(product =>{
    console.info(product);
    console.info(`Stock of ${sku} has decreased by ${amount}!`)
    db.close();
  })}


module.exports = {
  addProduct, findProduct, listProduct, allWarehouse, warehouseOnly, addStock,remStock
};

