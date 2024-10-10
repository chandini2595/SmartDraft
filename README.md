# SmartDraft

**SmartDraft** is an AI-powered Chrome extension designed to help users draft, refine, and send emails effortlessly. By leveraging advanced AI models, SmartDraft generates complete email drafts based on user input, adjusts the tone to meet specific needs, and integrates seamlessly with Gmail for quick sending.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Features
- **AI-Powered Email Drafting**: Automatically generates email drafts based on the input topic and selected tone (formal, casual, friendly).
- **Refine Drafts**: Allows users to refine the generated drafts to better suit their needs with a single click.
- **Gmail Integration**: Opens the draft directly in Gmail, using the first line as the subject and the rest as the body.
- **Copy to Clipboard**: Quickly copy the generated email content to paste into any other platform or document.
- **User-Friendly Interface**: Simple and intuitive UI designed for seamless interaction and productivity.

## Installation
1. **Clone or Download** this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/smartdraft.git

2. **Navigate** to the cloned folder:
   ```bash
   cd smartdraft

3. **Load the Extension** into Chrome:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer Mode** using the toggle at the top right.
   - Click **Load unpacked** and select the directory where the SmartDraft project is located.

4. **Obtain an API Key** from OpenAI:
   - Visit [OpenAI's API](https://platform.openai.com/) and create an account if you don't have one.
   - Navigate to the API section and generate a new API key.
   - Copy the generated API key for use in the next step.

5. **Update the API Key** in the `popup.js` file:
   - Open `popup.js` in the SmartDraft folder.
   - Replace `YOUR_API_KEY` with your OpenAI API key:
     ```javascript
     const apiKey = 'sk-your-api-key';
     ```
     
6. **Reload the Extension** in Chrome:
   - Go back to `chrome://extensions/`.
   - Click **Reload** next to the SmartDraft extension to apply your changes.
  
## Usage
1. **Open the SmartDraft Extension**:
   - Click on the SmartDraft icon in the Chrome toolbar.

2. **Enter Email Topic**:
   - Input the subject or topic of your email in the provided text area.

3. **Select Tone**:
   - Choose the desired tone for the email: `formal`, `casual`, or `friendly`.

4. **Generate & Refine**:
   - Click **Generate Draft** to create an AI-generated email draft.
   - Click **Refine Email** to adjust the content as needed.

5. **Send or Copy**:
   - Click **Send via Gmail** to open the draft in Gmail with the subject and body pre-filled.
   - Click the **copy** icon to copy the generated draft to your clipboard.

## Technologies Used
- **JavaScript**: Core logic and interaction with the OpenAI API.
- **OpenAI API**: Powers the AI model for generating and refining email drafts.
- **HTML & CSS**: UI design and layout for the Chrome extension popup.
- **Chrome Extension API**: Integrates SmartDraft directly into the Chrome browser for easy access.

