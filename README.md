# nodejs Basic crud Exmaple
#Orm comments
This comment is install squelize globally and available to use squilize cli commands. 
npm install --save-dev sequelize-cli

#inicialize Squalize to your project its create three folder for your Project
1>Config
2>Seeders 
4>Model
Command:
npx sequelize-cli init

#models
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
This will create model with some attribute given in this example

# migrate table:-
npx sequelize-cli db:migrate
use to create new table in db


