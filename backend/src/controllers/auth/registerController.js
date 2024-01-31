const User = require('../../models/User');
const bcrypt = require('bcrypt');
const validator = require('email-validator');
const sendMailController = require('./sendMailController');

const handleNewuser = async (req, res) => {
  const { user, pass, email } = req.body;

  const checkDetails = !req.body
    ? 'username, email and password is required'
    : !user?.trim()
    ? 'Username is required'
    : !pass?.trim()
    ? 'Password is required'
    : !email?.trim()
    ? 'Valid Email address is required'
    : null;

  if (checkDetails) return res.status(400).json({ message: checkDetails });

  // check for duplicate usernames in the db
  const duplicate = await User.findOne({
    $and: [{ username: user }, { email: email }],
  }).exec();
  if (duplicate)
    return res.status(409).json({ message: ` This username and email exist` });

  try {
    // encrypt the password
    if (!validator.validate(email)) {
      return res.status(401).json({ message: 'Enter a valid email' });
    }
    const hashedPass = await bcrypt.hash(pass, 10);

    // Store and create new user
    const result = await User.create({
      username: user,
      password: hashedPass,
      email: email,
    });
    sendMailController(email);

    console.log(result);
    res.status(201).json({ success: `New user ${user} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err);
  }
};
module.exports = { handleNewuser };
