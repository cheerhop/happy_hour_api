const https = require('https');

const url = 'https://cheerhop.com/api/search/bar';
const query = "applebees"; // Searching for applebees happy hours. Replace with your desired query

const postData = JSON.stringify({ q: query });

const options = {
  hostname: url.hostname,
  port: 443, // HTTPS uses port 443
  path: url.pathname,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': postData.length,
  },
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);   

  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end',   
 () => {
    try {
      const parsedData = JSON.parse(data);
      console.log('Locations:', parsedData.locations);
      console.log('Venues:', parsedData.venues);
    } catch (error) {
      console.error('Error parsing response:', error.message);
    }
  });
});

req.on('error', (error) => {
  console.error('Error making request:', error.message);
});

req.write(postData);
req.end();
