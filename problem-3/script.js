
const user_api = 'https://api.github.com/users';

getUsers();

async function getUsers()
{
	let response = await fetch(user_api);
	let data = await response.json();
	console.log(typeof(data));
	
	let username = data[0].login;
	document.getElementById("username").textContent = username;
	
	let img = data[0].avatar_url;
	document.getElementById("image").src = img;
	
	
	let userDetails_api = data[0].url;
	console.log(userDetails_api);
	getUserDetails(userDetails_api);
	
	let userRepos_api = data[0].repos_url;
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
	
	// empty the table to enter the new data
	//clearTable(table);
	
    for(let i=0; i<data.length; i++)
	{
		// insert the new row at the end of the table
		let row = repoTable.insertRow(-1);
		
		var repoData = row.insertCell();
		repoData.innerHTML = data[i].name + "<br><br>" + data[i].description;
    }
	/*
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
	*/
}
  