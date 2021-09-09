const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
	<h1>Hello world</h1>
	`);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
