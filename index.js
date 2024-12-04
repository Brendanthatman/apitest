const url = 'https://open-weather13.p.rapidapi.com/city/latlon/43.119/-85.559';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ab6c56b840msh00dd6e776e7e18ep13c302jsncbe8de164cb2',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = fetch(url, options);
	const result = response.json();
	console.log(result);

	const data = result.results;

	let city = result.name;	

	document.getElementsByClassName('lineone').innerHTML = city;


} catch (error) {
	console.error(error);
}