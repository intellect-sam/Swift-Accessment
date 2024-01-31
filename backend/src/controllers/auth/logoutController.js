const User = require('../../models/User');

const handleLogout = async (req, res) => {
  // on client, also delete the accesstoken
  const cookies = req.cookies;

  // check if theres cookies here
  if (!cookies?.jwt) return res.sendStatus(204); // no content to send back
  const refreshToken = cookies.jwt;

  // check if the user that is supplied is found
  const foundUser = await User.findOne({ refreshToken }).exec();
  if (!foundUser) {
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    res.sendStatus(204);
  }

  // Delete the RefreshToken in the DB
  foundUser.refreshToken = '';
  const result = await foundUser.save();
  console.log(result);

  res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true }); // secure true only serves in https
  res.status(204).json({ message: 'logout successfully' });
};

module.exports = { handleLogout };
