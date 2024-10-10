document.getElementById('generate-button').addEventListener('click', function() {
    const userInput = document.getElementById('email-input').value;
    const selectedTone = document.getElementById('tone-select').value;
  
    if (!userInput) {
      alert('Please enter an email topic or content.');
      return;
    }
  
    generateEmailDraft(userInput, selectedTone);
  });
  
  document.getElementById('refine-button').addEventListener('click', function() {
    const draftContent = document.getElementById('email-output').value;
    const selectedTone = document.getElementById('tone-select').value;
  
    if (!draftContent) {
      alert('Please generate a draft first before refining.');
      return;
    }
  
    refineEmailDraft(draftContent, selectedTone);
  });
  
  document.getElementById('send-gmail-button').addEventListener('click', function() {
    const emailOutput = document.getElementById('email-output').value;
  
    if (!emailOutput) {
      alert('Please generate or refine an email draft before sending.');
      return;
    }
  
    // Look for a line starting with "Subject:"
    const emailLines = emailOutput.split('\n');
    let emailSubject = '';
    let emailBody = '';
  
    // Extract "Subject:" if present in the first line, otherwise use a default subject.
    if (emailLines[0].toLowerCase().startsWith('subject:')) {
      emailSubject = emailLines.shift().replace(/^subject:\s*/i, '').trim(); // Remove "Subject:" and leading spaces
    } else {
      emailSubject = 'No Subject'; // Use a default subject if "Subject:" line is missing
    }
  
    emailBody = emailLines.join('\n'); // The rest of the content becomes the body
  
    // Construct the mailto link with pre-filled subject and body
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  
    // Open the link in a new tab
    window.open(mailtoLink, '_blank');
  });
  
  async function generateEmailDraft(userInput, tone) {
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const apiKey = ' '; //Place your secret openAI API key 
  
    const requestBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You are an AI that drafts emails in a ${tone} tone. Please include "Subject:" as the first line of the email with a suggested subject.`
        },
        {
          role: 'user',
          content: `Draft an email about: ${userInput}`
        }
      ],
      max_tokens: 300,
      temperature: 0.7
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(requestBody)
      });
  
      const data = await response.json();
  
      if (response.ok) {
        const generatedText = data.choices[0].message.content.trim();
        document.getElementById('email-output').value = generatedText || 'Generated draft will appear here.';
      } else {
        alert('Error generating draft: ' + (data.error?.message || 'Unknown error.'));
      }
    } catch (error) {
      console.error('Error calling the OpenAI API:', error);
      alert('Failed to generate email draft. Please try again.');
    }
  }
  
  async function refineEmailDraft(draftContent, tone) {
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const apiKey = ' '; // Replace with your own OpenAI API key
  
    const requestBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You are an AI that refines emails in a ${tone} tone. Please ensure that the first line starts with "Subject:" if providing a subject.`
        },
        {
          role: 'user',
          content: `Please refine this email: ${draftContent}`
        }
      ],
      max_tokens: 300,
      temperature: 0.7
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(requestBody)
      });
  
      const data = await response.json();
  
      if (response.ok) {
        const refinedText = data.choices[0].message.content.trim();
        document.getElementById('email-output').value = refinedText || 'Refined draft will appear here.';
      } else {
        alert('Error refining draft: ' + (data.error?.message || 'Unknown error.'));
      }
    } catch (error) {
      console.error('Error calling the OpenAI API for refinement:', error);
      alert('Failed to refine email draft. Please try again.');
    }
  }