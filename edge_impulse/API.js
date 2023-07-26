function upload(filename) {
  import fetch, { FormData, fileFromSync } from 'node-fetch';

  const form = new FormData();
  form.append('data', fileFromSync(filename + '.wav'));
  
  fetch('https://ingestion.edgeimpulse.com/api/training/anomaly', {
      method: 'POST',
      headers: {
          'x-api-key': 'ei_5cf10097b6661fc9e5067e0934358cd93bf5a4c7e839e08087aad2e571c2e4ef',
          'Content-Type': 'multipart/form-data'
      },
      body: form
  });
}
