const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {
  const { user, email, pass } = req.body;

  // check if user supply the username and password
  if ((!user && !email) || !pass) {
    return res
      .status(400)
      .json({ message: 'Username/Email and password are required' });
  }

  // use if statement rather

  let identifier;
  if (email) {
    identifier = { email: email.trim().toLowerCase() };
  } else if (user) {
    identifier = { username: user.trim().toLowerCase() };
  } else {
    identifier = null;
  }

  // check if the user that is supplied is found
  const foundUser = await User.findOne(identifier).exec();

  // if user is not found return error
  if (!foundUser) return res.sendStatus(401);

  // evaluate password
  const match = await bcrypt.compare(pass, foundUser.password);

  // check if match
  if (match) {
    const roles = Object.values(foundUser.roles);
    // create JWTs
    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: foundUser.username,
          roles: roles,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1d' }
    );
    const refreshToken = jwt.sign(
      { username: foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' }
    );
    // console.log(refreshToken);
    // Saving refresh Token with current user
    foundUser.refreshToken = refreshToken;
    const result = await foundUser.save();
    // console.log(result);

    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      sameSite: 'None',
      secure: 'true',
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } else {
    res.sendStatus(401);
  }
};

module.exports = { handleLogin };
