const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
		'X-RapidAPI-Key': 'ab6c56b840msh00dd6e776e7e18ep13c302jsncbe8de164cb2'
	}
};
fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=43.119&lon=-85.559&units=imperial&lang=en', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)

	})
	.catch(err => console.error(err));