
const user_api = 'https://api.github.com/users';


let searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", search);

async function search()
{
	let searchInput = document.getElementById("searchInput").value;
	console.log(searchInput);
	
	let response = await fetch(user_api);
	let data = await response.json();
	let pos = 0;
	let i = 0;
	let matchFound = 0;
	
	while(i<data.length && matchFound == 0)
	{
		if(data[i].login == searchInput)
		{
			// hide the error div if inputs are valid
			let inputError = document.getElementById("error");
			inputError.style.display = "none";
			
			pos = i;
			getUser(pos);
			matchFound = 1;
			//break;
		}
		i++;
    }
	
	if(matchFound == 0)
	{
		let inputError = document.getElementById("error");
		inputError.style.display = "block";
	}
}


async function getUser(pos)
{
	let response = await fetch(user_api);
	let data = await response.json();
	
	let username = data[pos].login;
	document.getElementById("username").textContent = username;
	
	let img = data[pos].avatar_url;
	document.getElementById("image").src = img;
	
	
	let userDetails_api = data[pos].url;
	console.log(userDetails_api);
	getUserDetails(userDetails_api);
	
	let userRepos_api = data[pos].repos_url;
	getUserRepos(userRepos_api);
}


async function getUserDetails(userDetails_api)
{
	let response = await fetch(userDetails_api);
	let data = await response.json();
	console.log(data);
	let name = data.name;
	document.getElementById("name").textContent = name;
	
	let email = data.email;
	if(email == null)
	{
		document.getElementById("email").textContent = "null";
	}
	else
	{
		document.getElementById("email").textContent = email;
	}
	
	//let user_location = data.location;
	//document.getElementById("location").textContent = user_location;
	
	let noGists = data.public_gists;
	document.getElementById("noGists").textContent = noGists;
}



  
async function getUserRepos(userRepos_api)
{
	let response = await fetch(userRepos_api);
	let data = await response.json();
	console.log(data);
	console.log(data.length);
	
	let repoTable = document.getElementById('repoTable');
	
	
    for(let i=0; i<data.length; i++)
	{
		// insert the new row at the end of the table
		let row = repoTable.insertRow(-1);
		
		let repoData = row.insertCell();
		repoData.innerHTML = data[i].name + "<br><br>" + data[i].description;
    }
}
  