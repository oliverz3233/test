import fetch, { FormData, fileFromSync } from 'node-fetch';

uploadButton.addEventListener("submit", function(e) {
	e.preventDefault();

	const userFile = document.getElementbyId('file').files[0];
	
	const form = new FormData();
	form.append('user-file', userFile, 'user-file.jpg');
	
	fetch('https://ingestion.edgeimpulse.com/api/training/anomaly', {
	method: 'POST',
	headers: {
	  'x-api-key': 'ei_5cf10097b6661fc9e5067e0934358cd93bf5a4c7e839e08087aad2e571c2e4ef',
	  'Content-Type': 'multipart/form-data'
	},
	body: form
	});
});
