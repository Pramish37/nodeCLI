# nodeCLI 
This project is a CLI project written in node.js!

The project stores products in different warehouses according to user's wish. Displays them, can be updated the number 
of availble qty. It uses sku number to keep each item unique which makes it easy to find their details every time user wants.

It uses Inquirer.js, Commander.js and Mongodb as a database!


Some infos:-
title, is name of product.
warehouse#, is catergory of product. It is represented using 6 digits in this project. Default warehouse# is 111111.
sku, is 4 digit unique code that is required to enter a product into database.
skock, is quantity of a product one wants to enter. Default value is zero(0).




There are 7 commands that are used to do various tasks: 

#first
-node commander add
-this commander adds data to the database.

#second
-node commander find <sku>
-use the sku number of any product you entered to it. 

#third
-node commander list
-use this command to see all the product in your database. It displays all products from all warehouses.

#fourth
-node commander fetch all warehouse
-use this commander to see all the warehouse only. It displays warehouse# of each product with __id given by mongodb itself.

#fifth
-node commander show <warehouse>
-use a warehouse#(for ex, 111111). This command will diplay all the products available in that particular warehouse.
  
#sixth
 -node commander stock <sku> <amount>
 -sku number goes in <sku> place(for ex, 4011). Number goes in amount, by which you want to increase your stock.
  
#seventh
-node commander unstock <sku> <amount>
-Similar to above, sku number goes in place of <sku> (for ex, 4011). Number goes in amount, by which you want to decrease your stock.
  
 
 The best way to find if commands are working is to ckeck by using command (#second)-node commander find <sku>, after every operation.
 If changes have been applied you will easily be able to see it after running above command.
  
  
 Thank you!
  
  















