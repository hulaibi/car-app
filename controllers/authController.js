const bcrypt = require("bcrypt");
const User = require("../models/User.js");
// EJS page
const registerUser = async (req, res) => {
  try {
    console.log(req.body.email);
    const userInDatabase = await User.findOne({ email: req.body.email });
    if (userInDatabase) {
      return res.send("Username already taken!");
    }

    if (req.body.password !== req.body.confirmPassword) {
      return res.send("Password and Confirm Password must match");
    }

    const hashedPassword = bcrypt.hashSync(req.body.password, 12);

    let user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      phone: req.body.phone,
    });

    req.session.user = {
      email: user.email,
      _id: user._id,
      name: user.name,
    };

    res.render("./auth/thanks.ejs", { user });
  } catch (error) {
    console.error("An error has occurred registering a user!", error.message);
  }
};

const signInUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
     
      let error =
        "No user has been registered with that email. Please sign up!";
      return res.render("./auth/sign-in.ejs", { error });
    }

    const validPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!validPassword) {
    
      let error = "Incorrect password! Please try again.";
      return res.render("./auth/sign-in.ejs", { error });
    }

    req.session.user = {
      email: user.email,
      _id: user._id,
      name: user.name,
    };

    res.redirect("/");
  } catch (error) {
    console.error("An error has occurred signing in a user!", error.message);
  }
};

const signOutUser = (req, res) => {
  try {
    req.session.destroy();
    res.redirect("/");
  } catch (error) {
    console.error("An error has occurred signing out a user!", error.message);
  }
};

const updatePassword = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.send("No user with that ID exists!");
    }

    const validPassword = bcrypt.compareSync(
      req.body.oldPassword,
      user.password
    );
    if (!validPassword) {
      return res.send("Your old password was not correct! Please try again.");
    }

    if (req.body.newPassword !== req.body.confirmPassword) {
      return res.send("Password and Confirm Password must match");
    }

    const hashedPassword = bcrypt.hashSync(req.body.newPassword, 12);

    user.password = hashedPassword;
    await user.save();

    res.send(`Your password has been updated, ${user.name}!`);
  } catch (error) {
    console.error(
      "An error has occurred updating a user's password!",
      error.message
    );
  }
};

module.exports = {
  registerUser,
  signInUser,
  signOutUser,
  updatePassword,
};
