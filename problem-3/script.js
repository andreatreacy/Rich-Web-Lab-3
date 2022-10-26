
// link to user api
const user_api = 'https://api.github.com/users';

// put a listener on the search buttom
let searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", search);


// find the user from the search
async function search()
{
	let searchInput = document.getElementById("searchInput").value;
	console.log(searchInput);
	
	// get data from api
	let response = await fetch(user_api);
	let data = await response.json();
	
	let pos = 0;
	let i = 0;
	let matchFound = 0;
	
	// search the users for a match
	while(i<data.length && matchFound == 0)
	{
		if(data[i].login == searchInput)
		{
			// hide the error div if a match is found
			let inputError = document.getElementById("error");
			inputError.style.display = "none";
			
			pos = i;
			
			// find the details of the user at this position
			getUser(pos, data);
			
			// exit while loop
			matchFound = 1;
		}
		
		i++;
    }
	
	// if a match is not found, display error div
	if(matchFound == 0)
	{
		let inputError = document.getElementById("error");
		inputError.style.display = "block";
	}
}


// get the user
function getUser(pos, data)
{	
	// get username
	let username = data[pos].login;
	document.getElementById("username").textContent = username;
	
	// get user image
	let img = data[pos].avatar_url;
	document.getElementById("image").src = img;
	
	// get the link to the user's details api
	let userDetails_api = data[pos].url;
	
	// get the user's details
	getUserDetails(userDetails_api);
	
	// get the link to the user's repos api
	let userRepos_api = data[pos].repos_url;
	
	// get the user's repos
	getUserRepos(userRepos_api);
}


// get the user's details
async function getUserDetails(userDetails_api)
{
	let response = await fetch(userDetails_api);
	let data = await response.json();
	
	// get name
	let name = data.name;
	document.getElementById("name").textContent = name;
	
	// get email
	let email = data.email;
	
	// if emaill is null write null instead of a blank space
	if(email == null)
	{
		document.getElementById("email").textContent = "null";
	}
	else
	{
		document.getElementById("email").textContent = email;
	}
	
	// get location
	let user_location = data['location'];
	
	// if user_location is null write null instead of a blank space
	if(user_location == null)
	{
		document.getElementById("location").textContent = "null";
	}
	else
	{
		document.getElementById("location").textContent = user_location;
	}
	
	// get number of gists
	let noGists = data.public_gists;
	document.getElementById("noGists").textContent = noGists;
}



// get the user's repos
async function getUserRepos(userRepos_api)
{
	// get data from user repos api
	let response = await fetch(userRepos_api);
	let data = await response.json();
	
	let repoTable = document.getElementById('repoTable');
	
	// add the repo details as rows to the repo table
    for(let i=0; i<data.length; i++)
	{
		// insert the new row at the end of the table
		let row = repoTable.insertRow(-1);
		
		let repoData = row.insertCell();
		repoData.innerHTML = data[i].name + "<br><br>" + data[i].description;
    }
}
  