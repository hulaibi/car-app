const User = require("../models/User.js");

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate("cars")
      .populate("bought")
      .populate("sell");
    // .populate("car")
    // .populate("buyer")
    // .populate("seller");

    const data = {
      _id: user._id,
      name: user.name,
      picture: user.picture,
      cars: user.cars,
    };

    res.render('./users/profile.ejs', { user });
  } catch (error) {
    console.error("An error has occurred finding a user!", error.message);
  }
};

module.exports = {
  getUserById,
};
