
let contactsList = [
	{'name':'Kate Green', 'mobile':'0858769009', 'email':'kgreen@gmail.com'},
    {'name':'John Smith', 'mobile':'0867890586', 'email':'jsmith@gmail.com'},
    {'name':'Paul Brown', 'mobile':'0858887945', 'email':'pbrown@gmail.com'},
];


fillTable(contactsList);




let addButton = document.getElementById("addButton");
addButton.addEventListener("click", validate);

function validate() 
{
	// Validate the Name
	
	let nameInput = document.getElementById("nameInput").value;
	console.log(nameInput);
	  
	console.log(/^[a-zA-Z]+$/.test(nameInput[0]));
	let nameValid = true;
	
	console.log(nameInput.length);
	// check if name input is not blank and has no more than 20 characters
	if(nameInput.length <= 20 && nameInput.length != 0)
	{
		for(let i=0; i<nameInput.length; i++)
		{
			if(/^[a-zA-Z]+$/.test(nameInput[i]) != true && nameInput[i] != " ")
			{
				nameValid = false;
			}
		}
	}
	else
	{
		nameValid = false;
	}
	
	
	// Validate the Mobile Number
	
	let mobileInput = document.getElementById("mobileInput").value;
	let mobileValid = true;
	
	console.log(isNaN("e"));
	if(mobileInput.length == 10)
	{
		for(let i=0; i<mobileInput.length; i++)
		{
			if(isNaN(mobileInput[i]))
			{
				mobileValid = false;
			}
		}
	}
	else
	{
		mobileValid = false;
	}
	console.log(">");
	console.log(mobileValid);
	
	
	// Validate the Email Address
	
	let emailInput = document.getElementById("emailInput").value;
	let emailValid = true;
	console.log(emailInput.length);
	
	// regex for correct email format
	let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	
	// if emailInput is not the correct format or is the wrong length it is not valid
	if(!emailInput.match(emailFormat) || emailInput.length >= 40 || emailInput.length == 0)
	{
		emailValid = false;
	}
	
	
	
	// if all inputs are valid, add the contact
	if(nameValid == true && mobileValid == true && emailValid == true)
	{
		// hide the error div if inputs are valid
		let inputError = document.getElementById("error");
		inputError.style.display = "none";
		
		// clear the input fields
		document.getElementById("nameInput").value = "";
		document.getElementById("mobileInput").value = "";
		document.getElementById("emailInput").value = "";
		
		// add the new contact
		addContact(nameInput, mobileInput, emailInput);
	}
	// if all inputs are not valid, display the error div
	else
	{
		let inputError = document.getElementById("error");
		inputError.style.display = "block";
	}
}



function addContact(nameInput, mobileInput, emailInput)
{
	console.log("adding");
	
	let newContact = {
		name: nameInput,
		mobile: mobileInput,
		email: emailInput
	};
	
	contactsList.push(newContact);
	fillTable(contactsList);
	
}








// sort the table by the name column
function sort(contactsList)
{	
	let isSorted = true;

	// check if the table is alread sorted in ascending order
	for(let i=0; i<contactsList.length-1; i++) 
	{
		if(contactsList[i].name > contactsList[i+1].name) 
		{
			isSorted = false;
			break;
		}
	}
			
	// if it is not, sort it in ascending order
	if(isSorted == false)
	{
		contactsList.sort((a, b) => (a.name > b.name) ? 1 : -1);
		fillTable(contactsList);
	}
	// if it is, sort it in descending order
	else
	{
		contactsList.reverse();
		fillTable(contactsList);
	}
}













// remove all the rows from the table except the header row
function clearTable(table) 
{
    let rows = table.rows;
    let i = rows.length;
	
    while(--i)
	{
        table.deleteRow(i);
    }
}



function fillTable(contactsList)
{
    let table = document.getElementById('contactTable');
	
	// empty the table to enter the new data
	clearTable(table);
	
    for(let i=0; i<contactsList.length; i++)
	{
		// insert the new row at the end of the table
		let row = table.insertRow(-1);
		
		let cellpos = 0;
		let colname = row.insertCell(cellpos);
		colname.innerHTML = contactsList[i].name;
			
		let colmobile = row.insertCell(cellpos+1);
		colmobile.innerHTML = contactsList[i].mobile;
			
		let colemail = row.insertCell(cellpos+2);
		colemail.innerHTML = contactsList[i].email;
    }
}





function filter(contactsList)
{
	// get the search input
	let input = document.getElementById("filterInput").value;
	
	// empty array to store search matches
	let resultList = [];
	
	// go through contactsList
	for(let i=0; i<contactsList.length; i++) 
	{
		let mobile = contactsList[i].mobile;
		
		// if the input appears in an element, add the element to resultList
		if(mobile.includes(input))
		{
			resultList.push(contactsList[i]);
		}
		
		// if no results are found, display the noResult div
		if(resultList.length === 0)
		{
			let noResult = document.getElementById("noResult");
			noResult.style.display = "block";
		}
		// if results are found, hide the noResult div
		else
		{
			let noResult = document.getElementById("noResult");
			noResult.style.display = "none";
		}
	}
	
	// fill the table with the search results
	fillTable(resultList);
}



