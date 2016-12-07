var myData = {};

$.get('https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD', function(data) {
	var myData = data;
	console.log(data);
	console.log(JSON.stringify(data));
});


/*
$.ajax({
    url: "https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD",
    data: {
        format: "json"
    },
    success: function(response) {
        console.log(response.data[4][1]);
    }
});
*/