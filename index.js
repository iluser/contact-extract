const fs = require('fs');

const extractCellNumbers = () => {
  fs.readFile('kontak.vcf', 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    const lines = data.split('\n');
    const contacts = [];
    let currentName = '';

    lines.forEach(line => {
      if (line.startsWith('N:')) {
        currentName = line.split(';')[1].trim();
      }
      if (line.startsWith('TEL;TYPE=cell')) {
        const number = line.split(':')[1].trim();
        contacts.push({ name: currentName, number: number });
      }
    });
    // Save the extracted cell phone numbers to contact.json
    fs.writeFile('contact.json', JSON.stringify(contacts, null, 2), (err) => {
      if (err) {
        console.error("Error writing to file:", err);
        return;
      }
      console.log("Cell phone numbers saved to contact.json");
    });
  });
};

// Call the function to extract cell phone numbers
extractCellNumbers();