const express = require('express');
const app = express();
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' }
];
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Validate that userId is an integer
  if (isNaN(parseInt(userId))) {
    return res.status(400).send('Invalid user ID');
  }
  const id = parseInt(userId);
  const user = users.find(user => user.id === id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});
const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
