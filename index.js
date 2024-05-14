const fs = require('fs');

// Function to read the JSON file and extract mobile phone numbers
function extractMobileNumbers() {
  fs.readFile('contact.json', 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    try {
      const contacts = JSON.parse(data);
      const mobileNumbers = contacts.map(contact => contact['Mobile Phone']).filter(phone => phone !== "");
      console.log("Extracted Mobile Phone Numbers:", mobileNumbers);
    } catch (err) {
      console.error("Error parsing JSON:", err);
    }
  });
}

// Call the function to extract mobile phone numbers
extractMobileNumbers();
