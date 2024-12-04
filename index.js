const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com',
		'X-RapidAPI-Key': 'ab6c56b840msh00dd6e776e7e18ep13c302jsncbe8de164cb2'
	}
};
fetch('https://open-weather13.p.rapidapi.com/city/latlon/43.119/-85.559', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));