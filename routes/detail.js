const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/:id', (req, res) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate token' });
    }
    res.json({ message: `Details for ID: ${req.params.id}`, user: decoded });
  });
});

module.exports = router;
