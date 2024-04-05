# ChatGPT Web Applicaion

This is a simple ChatGPT Web Application that allows users to generate stories based on a chosen topic and style using the OpenAI API. Users can choose a topic and select a style from a dropdown menu, and the application generates a story accordingly. Additionally, the generated story can be rewritten in a funny way.

## Features

- Choose a topic from a dropdown menu.
- Select a style for the story generation.
- Generate a story under 500 words based on the selected topic and style.
- Rewrite the generated story in a funny way.

## How to Run the Project

Follow the steps below to set up and run the application locally:

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/bryancanlas/Cheko_Chatgpt_Webapp.git
2. Navigate to the project directory and install dependencies::

   ```bash
   cd Cheko_Chatgpt_Webapp

   npm install
3. Set up your OpenAI API key:
   - Sign up for an account on the OpenAI platform.

   - Generate an API key

   - Replace `'YOUR_OPENAI_API_KEY'` in `.env` file with your actual OpenAI API key.

4. Run the Application locally:

   ```bash
   npm start
5. Visit http://localhost:3000 in your web browser to access the application.

### Usage

1. Access the application in your web browser at `http://localhost:3000`.

2. Select a topic and a style from the dropdown menus.

3. Click the "Generate" button to generate a story.

4. Enjoy the original story and its funny rewrite.

## Deployment

The ChatGPT Web Application can be deployed to any cloud service provider such as Vercel, Heroku, AWS, or DigitalOcean. Make sure to set the environment variables for your API keys in the deployment environment.

## Contributing

Contributions are welcome! If you have any ideas for improvements or new features, feel free to submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- OpenAI for providing access to their powerful language models.

- Node.js, Express.js, and other open-source libraries used in this project.

### Thank you for your consideration!