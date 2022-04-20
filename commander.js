const program = require('commander');
const { prompt } = require('inquirer');

const {addProduct, findProduct, listProduct, allWarehouse, warehouseOnly, addStock, remStock} = require('./index.js');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Your product name?'
    },
    {
        type: 'input',
        name: 'warehouse',
        message: 'Warehouse name?'
    },
    {
        type: 'input',
        name: 'sku',
        message: 'Product unique code?'
    },
    {
        type: 'input',
        name: 'stock',
        message: 'How many unit you have?'
    },
]

program
.version('1.0.0')
.description('Node.js cli project')

program
.command('add') //works**
.alias('a')
.description('Add a product')
.action(() => {
    prompt(questions).then(answer => addProduct(answer))
});

program
.command('find <sku>')//works**
.alias('f')
.description('find a product')
.action(sku => findProduct(sku));

program
.command('list')//works**
.alias('l')
.description('List all Products!')
.action(() => {
        listProduct()
});

program
.command('fetch all warehouses')
.alias('lw')
.description('List all warehouses only!')
.action(() => {
        allWarehouse()
});

program//works**
.command('show <warehouse>')
.alias('w')
.description('List all Products of a specified warehouse!')
.action(num => {
        warehouseOnly(num)
});

program//works**
.command('stock <sku> <amount>')
.alias('u')
.description('product qty stock!')
.action((sku, amount) => {
        addStock(sku, amount)
});
program//works**
.command('unstock <sku> <amount>')
.alias('r')
.description('product qty unstock!')
.action((sku, amount) => {
        remStock(sku, amount)
});

program.parse(process.argv);








