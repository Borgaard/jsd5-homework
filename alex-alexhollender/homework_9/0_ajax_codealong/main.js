'use strict';

var httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = responseMethod;

function responseMethod() {
	if (httpRequest.readyState === 4) {
		if (httpRequest.status === 200) {
			console.log(httpRequest.responseText);
		} else {
			console.log('There was a problem with the request.');
		}
	}
}

httpRequest.open('GET', 'http://data.consumerfinance.gov/api/views.json');

httpRequest.send();