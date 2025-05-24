<p align="center"><img src="./images/logo.png"/></p>

<br>

# Car App

Application for sell and buy cars from users.

<br>

# Description

A Buy and Sell website built with the MEN Stack enables users to register, list cars, and purchase vehicles. It uses MongoDB for CRUD operations across Car, User, and Transaction models, with secure authentication and dynamic EJS views. Users can browse cars, complete transactions, and view profiles with transaction history.

<br>

# Getting started

### Deployed link:

https://car-app-ddel.onrender.com/ <br>

### Planning materials

#### trello:

![trello](./planning-materials/trello.png)
<br>

#### ERD:

![ERD](./planning-materials/ERD.png)
<br>

#### WireFrame:

![WireFrame](./planning-materials/WireFrame.png)

#### UserStory:

[UserStory](./planning-materials/User-Stories.md)

<br>

# ScreenShots

<img src='./images/screenShots/Screenshot 2025-05-24 112559.png'   />
<br>
<br>
<img src='./images/screenShots/Screenshot 2025-05-24 112645.png'  />
<br>
<br>
<img src='./images/screenShots/Screenshot 2025-05-24 112702.png'   />
<br>
<br>
<img src='./images/screenShots/Screenshot 2025-05-24 112719.png'   />
<br>
<br>
<img src='./images/screenShots/Screenshot 2025-05-24 113823.png'   />
<br>
<br>

# How to Run

1.  Clone the repository.
2.  Install dependencies: `npm i`
3.  Start the server: `npm start`
4.  Open the application in your browser at `http://localhost:3000`

<br>

# File Structure

### **controllers**: Contains the route handlers for the application.

- `authController.js`: Handles authentication routes. <br>
  - `registerUser`: Registers a new user.<br>
  - `signInUser`: Signs in an existing user. <br>
  - `signOutUser`: Signs out the current user. <br>
  - `updatePassword`: Updates the user's password. <br>
- `carController.js`: Handles car routes. <br>
  - `addCar`: Adds a new car. <br>
  - `getAllCars`: Retrieves all cars. <br>
  - `getCarById`: Retrieves a car by its ID. <br>
  - `updateCarById`: Updates a car by its ID. <br>
  - `deleteCarById`: Deletes a car by its ID. <br>
- `tranController.js`: Handles transaction routes.<br>
  - `getAllTran`: Retrieves all transactions. <br>
  - `buyCar`: Handles the purchase of a car. <br>
- `userController.js`: Handles user routes. <br>
  - `getUserById`: Retrieves a user by their ID. <br>
  - `getUserPro`: Retrieves a user's profile. <br>

#### **db**: Contains the database connection.

#### **models**: Contains the database models.

- `Car.js`: Car model. <br>
  - `model`: Car model (String, required). <br>
  - `year`: Year of manufacture (Number, required). <br>
  - `condition`: Condition of the car (String, required).<br>
  - `isAvailable`: Availability status (Boolean, required). <br>
  - `owner`: Owner of the car (ObjectId, ref: "User"). <br>
  - `price`: Price of the car (Number, required).<br>
- `Transaction.js`: Transaction model.<br>
  - `car`: Reference to the Car model (ObjectId, required). <br>
  - `buyer`: Reference to the User model (ObjectId, required).<br>
  - `seller`: Reference to the User model (ObjectId, required). <br>
  - `date`: Date of the transaction (Date, default: Date.now). <br>
  - `price`: Price of the car (Number, required). <br>
  - `location`: Location of the transaction (String, required). <br>
- `User.js`: User model. <br>
  - `name`: User's name (String, required). <br>
  - `email`: User's email (String, required). <br>
  - `password`: User's password (String, required). <br>
  - `phone`: User's phone number (String). <br>
  - `cars`: Array of references to Car models (ObjectId).
  - `bought`: Array of references to Transaction models (ObjectId). <br>
  - `sell`: Array of references to Transaction models (ObjectId).

#### **routes**: Contains the routes for the application.

- `authRouter.js`: Authentication routes.<br>
  - `/sign-up` (POST): Registers a new user. <br>
  - `/sign-up` (GET): Renders the sign-up form.<br>
  - `/sign-in` (POST): Signs in an existing user. <br>
  - `/sign-in` (GET): Renders the sign-in form. <br>
  - `/sign-out` (GET): Signs out the current user. <br>
  - `/:id` (PUT): Updates the user's password. <br>
  - `/:id/update-password` (GET): Renders the update password form. <br>
- `carRouter.js`: Car routes. <br>
  - `/new` (GET): Renders the form to add a new car. <br>
  - `/edit/:id` (GET): Renders the form to edit a car.<br>
  - `/new` (POST): Adds a new car. <br>
  - `/all` (GET): Retrieves all cars. <br>
  - `/:id` (GET): Retrieves a car by its ID. <br>
  - `/update` (POST): Updates a car. <br>
  - `/delete` (POST): Deletes a car. <br>
- `tranRouter.js`: Transaction routes. <br>
  - `/buy/:id` (GET): Renders the form to buy a car. <br>
  - `/buy` (POST): Handles the purchase of a car. <br>
  - `/all` (GET): Retrieves all transactions. <br>
- `userRouter.js`: User routes. <br>
  - `/:id` (GET): Retrieves a user by their ID. <br>
  - `/:id` (GET): Retrieves a user's profile.

#### **styles**: Contains the CSS styles for the application.

- `style.css`: CSS styles.

#### **views**: Contains the EJS templates for the application.

- `auth`: Authentication templates.<br>
- `cars`: Car templates. <br>
- `transactions`: Transaction templates. <br>
- `users`: User templates.<br>

#### **main**: Contains the main templates for the application.
- `index.ejs`: Index template. <br>
- `.env`: Contains the environment variables. (did not push it.) <br>
- `.gitignore`: Specifies intentionally untracked files that Git should ignore.<br>
- `package.json`: Contains metadata about the project, such as the name, version, and dependencies. <br>
- `server.js`: The main entry point for the application.

# Technologies Used

■ [excalidraw](https://excalidraw.com/) <br>
■ [draw.io](https://app.diagrams.net) <br>

■ HTML<br>
■ CSS<br>
■ JavaScript <br>

■ MEN Stack:

- MongoDB
- Express.js
- Node.js

■ npm dependencies:

- bcrypt":^6.0.0 <br>
- "dotenv":^16.5.0 <br>
- "ejs": "^3.1.10 <br>
- "express": "^5.1.0 <br>
- "express-session": "^1.18.1 <br>
- "method-override": "^3.0.0 <br>
- "mongoose": "^8.15.0 <br>
- "morgan": "^1.10.0 <br>
- "nodemon": "^3.1.10"
  <br>

# Future Enhancements

1. Enhance UI/UX.
2. Add bidding and renting functionalities.
3. real-time user chat system.
