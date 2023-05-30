const verifyToken = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) {
    res.status(401).send("You are not authenticated");
  }
  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) {
      res.status(403).send("Token is invalid");
    }

    req.userId = payload.id;
    req.isSeller = payload.isSeller;
  });
};

module.exports = verifyToken;
