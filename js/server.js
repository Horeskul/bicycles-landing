import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
const PORT = 3000;

// Body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Endpoint to handle form submissions
app.post('/submit', (req, res) => {
  const formData = req.body;
  const dataLine = `${formData.name}\t${formData.surname}\t${formData.phone}\t${formData.email}\n`;

  // Store the form data in a text file (formData.txt)
  fs.appendFile('formData.txt', dataLine, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      res.status(500).send('Server error');
    } else {
      console.log('Form data saved:', dataLine);
      res.status(200).send('Form submission successful');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
