
const api = 'https://jsonplaceholder.typicode.com/todos';

getData();

async function getData()
{
	let response = await fetch(api);
	let data = await response.json();
	console.log(data);

	// create an array of titles
	let titles = data.map((obj) => obj.title);
	
	// store only the titles with 6 or more words in the array
	let titlesWithMoreWords = titles.filter(checkNumWords);
	console.log(titlesWithMoreWords);
}



function checkNumWords(titles) 
{
	// find the number of words in the title
	let num = titles.split(' ').filter(function(n) { return n != '' }).length;
	
	// only add the title if it contains 6 or more words
	if(num >= 6)
	{
		return titles;
	}
}


