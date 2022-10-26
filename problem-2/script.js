
// link to api
const api = 'https://jsonplaceholder.typicode.com/posts';


getData();

async function getData()
{
	// get data from api
	let response = await fetch(api);
	let data = await response.json();
	getTitles(data);
}


// get titles with 6 or more words
function getTitles(data)
{
	// create an array of titles
	let titles = data.map((obj) => obj.title);
	
	// store only the titles with 6 or more words in the array
	let titlesWithMoreWords = titles.filter(checkNumWords);
	console.log("Titles With 6 or More Words:");
	console.log(titlesWithMoreWords);
	
	// get a word count of the body words
	getBodyWords(data);
}


// get a word count of the body words
function getBodyWords(data)
{
	// create an array of bodies
	let body = data.map((obj) => obj.body);
	
	// put all body words into one array and sort them
	let bodyWords = body.map(x => x.split(" "))
	.reduce((accumulator, current) => accumulator.concat(current), [])
	.sort();
	
	// array to hold the Word Frequency Map
	let wordMap = [];
	
	// count the frequency of each word in bodyWords
	bodyWords.forEach(countWords);
	console.log("Word Frequency Map :");
	console.log(wordMap);
	
	
	// count how many times word occurs
	function countWords(word)
	{
		// add 1 to count if word is already in wordMap
		if(word in wordMap)
		{
			wordMap[word] = wordMap[word]+1;
		}
		// add the word to wordMap with a count of 1
		else
		{
			wordMap[word] = 1;
		}
	}
}



// return the titles with 6 or more words
function checkNumWords(title) 
{
	// find the number of words in the title
	let num = title.split(' ').filter(function(n) { return n != '' }).length;
	
	// only add the title if it contains 6 or more words
	if(num >= 6)
	{
		return title;
	}
}

