const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// this is a comment
const app = express();
const PORT = 5000;

// add routers here

// application-level middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// router handlers

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.resolve(__dirname, '..build')));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../template.html'));
  });
}

// catch-all route handler
app.use('/', (req, res) => (res.sendStatus(404)));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured' },
  };

  const errObj = Object.assign({}, defaultErr, err);
  return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
