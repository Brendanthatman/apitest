const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		document.getElementsByClassName("lineone").textContent = this.responseText;
	}
});

xhr.open('GET', 'https://zillow-com1.p.rapidapi.com/property?zpid=2080998890');
xhr.setRequestHeader('x-rapidapi-key', 'ab6c56b840msh00dd6e776e7e18ep13c302jsncbe8de164cb2');
xhr.setRequestHeader('x-rapidapi-host', 'zillow-com1.p.rapidapi.com');

xhr.send(data);