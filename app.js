require('dotenv').config();
const express = require('express');
const app = express();
const storyController = require('./controllers/storyController');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', storyController.index);
app.post('/generate', storyController.generateStory);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
