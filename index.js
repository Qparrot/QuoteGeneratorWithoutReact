document.getElementById('tweet-quote').addEventListener('click', tweet)
document.getElementById('new-quote').addEventListener('click', newQuote)

var random = Math.random();
fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
	.then(res => res.json())
	.then(data => {
		document.getElementById('text').innerHTML = data.quotes[Math.floor(random * data.quotes.length)].quote;
		document.getElementById('author').innerHTML = data.quotes[Math.floor(random * data.quotes.length)].authori;
		document.getElementById('tweet-quote').setAttribute('data-url', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent(document.getElementById('text').innerHTML) + document.getElementById('author'));
		
	});

function tweet()
{
	window.open(event.target.dataset.url, '_blank');
}

function newQuote()
{
var random = Math.random();
fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
	.then(res => res.json())
	.then(data => {
		document.getElementById('text').innerHTML = data.quotes[Math.floor(random * data.quotes.length)].quote;
		document.getElementById('author').innerHTML = data.quotes[Math.floor(random * data.quotes.length)].author;
	});
}
