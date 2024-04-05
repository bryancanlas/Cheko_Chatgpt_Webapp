const axios = require('axios');

const openaiApi = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
  }
});

exports.index = (req, res) => {
  res.render('pages/index', { topic: '', style: '', originalStory: '', funnyStory: '' });
};

exports.generateStory = async (req, res) => {
  const { topic, style } = req.body;
  try {
    // Generate original story
    const originalResponse = await openaiApi.post('/completions', {
      model: 'text-davinci-003',
      prompt: `write a story under 500 words about ${topic} in the style of ${style}.`,
      max_tokens: 1000
    });
    const originalStory = originalResponse.data.choices[0].text.trim();

    // Rewrite the story in a funny way
    const funnyResponse = await openaiApi.post('/completions', {
      model: 'text-davinci-003',
      prompt: `rewrite this story in a funny way: ${originalStory}`,
      max_tokens: 1000
    });
    const funnyStory = funnyResponse.data.choices[0].text.trim();

    res.render('pages/index', { topic, style, originalStory, funnyStory });
  } catch (error) {
    console.error('Error:', error);
    res.render('pages/index', { topic: '', style: '', originalStory: 'Failed to generate story.', funnyStory: '' });
  }
};
