# Car App

# **User Stories:**
[User-Stories](./planning-materials/User-Stories.md) 

## ERD
![ERD](./planning-materials/ERD.png)


## WireFrame
![wire](./planning-materials/WireFrame.png)

## Description

This is a car application that allows users to buy & sell cars and transactions.

## How to Run

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Start the server: `npm start`
4.  Open the application in your browser at `http://localhost:4000`

## File Structure

# **controllers**: Contains the route handlers for the application.

-`authController.js`: Handles authentication routes.<br />
-`registerUser`: Registers a new user.<br />
-`signInUser`: Signs in an existing user.<br />
-`signOutUser`: Signs out the current user.<br />
-`updatePassword`: Updates the user's password.<br />
-`carController.js`: Handles car routes.<br />
-`addCar`: Adds a new car.<br />
-`getAllCars`: Retrieves all cars.<br />
-`getCarById`: Retrieves a car by its ID.<br />
-`updateCarById`: Updates a car by its ID.<br />
-`deleteCarById`: Deletes a car by its ID.<br />
-`tranController.js`: Handles transaction routes.<br />
-`getAllTran`: Retrieves all transactions.<br />
-`buyCar`: Handles the purchase of a car.<br />
-`userController.js`: Handles user routes.<br />
-`getUserById`: Retrieves a user by their ID.<br />
-`getUserPro`: Retrieves a user's profile.<br />

# **db**: Contains the database connection. 

# **models**: Contains the database models.

-`Car.js`: Car model.<br />
-`model`: Car model (String, required). <br />
-`year`: Year of manufacture (Number, required). <br />
-`condition`: Condition of the car (String, required).<br />
-`isAvailable`: Availability status (Boolean, required).<br />
-`owner`: Owner of the car (ObjectId, ref: "User").<br />
-`price`: Price of the car (Number, required).<br />
-`Transaction.js`: Transaction model.<br />
-`car`: Reference to the Car model (ObjectId, required).<br />
-`buyer`: Reference to the User model (ObjectId, required).<br />
-`seller`: Reference to the User model (ObjectId, required).<br />
-`date`: Date of the transaction (Date, default: Date.now).<br />
-`price`: Price of the car (Number, required).<br />
-`location`: Location of the transaction (String, required).<br />
-`User.js`: User model.<br />
-`name`: User's name (String, required).<br />
-`email`: User's email (String, required).<br />
-`password`: User's password (String, required).<br />
-`phone`: User's phone number (String).<br />
-`cars`: Array of references to Car models (ObjectId).<br />
-`bought`: Array of references to Transaction models (ObjectId).<br />
-`sell`: Array of references to Transaction models (ObjectId).<br />

# **routes**: Contains the routes for the application.

-`authRouter.js`: Authentication routes.<br />
-`/sign-up` (POST): Registers a new user.<br />
-`/sign-up` (GET): Renders the sign-up form.<br />
-`/sign-in` (POST): Signs in an existing user.<br />
-`/sign-in` (GET): Renders the sign-in form.<br />
-`/sign-out` (GET): Signs out the current user.<br />
-`/:id` (PUT): Updates the user's password.<br />
-`/:id/update-password` (GET): Renders the update password form.<br />
-`carRouter.js`: Car routes.<br />
-`/new` (GET): Renders the form to add a new car.<br />
-`/edit/:id` (GET): Renders the form to edit a car.<br />
-`/new` (POST): Adds a new car.<br />
-`/all` (GET): Retrieves all cars.<br />
-`/:id` (GET): Retrieves a car by its ID.<br />
-`/update` (POST): Updates a car.<br />
-`/delete` (POST): Deletes a car.<br />
-`tranRouter.js`: Transaction routes.<br />
-`/buy/:id` (GET): Renders the form to buy a car.<br />
-`/buy` (POST): Handles the purchase of a car.<br />
-`/all` (GET): Retrieves all transactions.<br />
-`userRouter.js`: User routes.<br />
-`/:id` (GET): Retrieves a user by their ID.<br />
-`/:id` (GET): Retrieves a user's profile.<br />

# **styles**: Contains the CSS styles for the application.

-`style.css`: CSS styles.<br />

# **views**: Contains the EJS templates for the application.

-`auth`: Authentication templates.<br />
-`cars`: Car templates.<br />
-`transactions`: Transaction templates.<br />
-`users`: User templates.<br />
-`index.ejs`: Index template.<br />
-`.env`: Contains the environment variables.<br />
-`.gitignore`: Specifies intentionally untracked files that Git should ignore.<br />
-`package-lock.json`: Records the exact versions of dependencies used in the project.<br />
-`package.json`: Contains metadata about the project, such as the name, version, and dependencies.<br />
-`README.md`: This file, providing information about the project.<br />
-`server.js`: The main entry point for the application.<br />
