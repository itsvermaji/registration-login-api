<h1>Registration/Login API </h1>

## Installation
1. Install the dependencies by `npm install`
2. Connect the app with database using the command `mongod --dbpath=path/to/db`
3. Open the Postman app and make a POST request on the url `localhost:3000/api/register`
4. Now check your database via mongodb shell or mongodb compass 
5. User with the above details is now registered in the database.
6. If the user already exists, It will tell you user already registered.

## Sample Screenshots

![Registration Success](https://github.com/itsvermaji/registration-login-api/blob/master/screenshots/registration.png)
Successfull Registration

![Login Success](https://github.com/itsvermaji/registration-login-api/blob/master/screenshots/login-success.png)
Successfull Login

![Login Failed](https://github.com/itsvermaji/registration-login-api/blob/master/screenshots/login-failed.png)
Login Failed



## About this API
* This API provides a secure way to authenticate a user.
* Passwords are hashed before they are stored.
* Name, email ids and passwords are properly validated before storing them (using Joi).


-----------------------------------------------------
<!-- CONTACT -->
## Contact

Deepak - [@linkedin](https://www.linkedin.com/in/deepak-verma-6a5083189/) - deepakverma.pb34@gmail.com - 2018ucp1173@mnit.ac.in

Project Link: [https://github.com/itsvermaji/registration-login-api](https://github.com/itsvermaji/registration-login-api)
