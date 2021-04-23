## How to run this API
1. Install the dependencies by `npm install`
2. Connect the app with database using the command `mongod --dbpath=path/to/db`
3. Open the Postman app and make a POST request on the url `localhost:3000/api/register`
4. Now check your database via mongodb shell or mongodb compass 
5. User with the above details is now registered in the database.
6. If the user already exists, It will tell you user already registered.


-----------------------------------------------------

## About this API
=> This API provides a secure way to authenticate a user.
=> Passwords are hashed before they are stored.
=> name, email ids and passwords are properly validated before storing them (using Joi).