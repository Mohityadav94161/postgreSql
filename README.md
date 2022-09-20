# postgreSql
### Steps to use api

1. PostgreSQL JDBC Driver (viable with PostgreSQL 9.4+)
2. Download the most recent driver (JDBC 4.2) from: https://jdbc.postgresql.org/download.html

3. Setup the PostgreSQL pqAdmin
4. Make a new dataBase or you can use default one i.e postgre
5. Make a table with required fields, here i build table with entries (name , address , phno , id)

    <t/> a. here name , address , phno is of text.<br/>
    <t/> b. id is of <b>Integer</b> type.
    <t/> here <b>phno </b> is phone number.
    
6. Now open database.js file and fill the entries .
  ``` host: "localhost",
  user: "postgres",
  port: 2000,   ---> // your port no
  password: "",   --->//here is your password
  database: "firstDb", ---->// dbbase name 
  ```
  
  
7. Open api.js , at <b>line no. 6 , </b>
  ``` const table = 'myusers'; ----> //table name in which you wants to perform action```
<h2>Note : All the data will be shown in Json format </h2>
<t>
<h3>Now you can perform actions like</h3>
  <t/> <li>get all users</li>
  <t/> <li>add new users (you can try using postman)</li>
  <t/> <li>get user by id</li>
</t>
 
