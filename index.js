const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
		'X-RapidAPI-Key': 'ab6c56b840msh00dd6e776e7e18ep13c302jsncbe8de164cb2'
	}
};
fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=43.119%2C-85.559', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		
		document.getElementsByClassName('lineone').innerHTML = response.current.feelslike_f;
	})
	.catch(err => console.error(err));