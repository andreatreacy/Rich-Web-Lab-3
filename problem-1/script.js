
// list of contacts to make the table
let contactsList = [
	{'name':'Kate Green', 'mobile':'0858769009', 'email':'kgreen@gmail.com'},
    {'name':'John Smith', 'mobile':'0867890586', 'email':'jsmith@gmail.com'},
    {'name':'Paul Brown', 'mobile':'0858887945', 'email':'pbrown@gmail.com'},
];

// add contact data to the table
fillTable(contactsList);



// add a listener to the add contact button
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", validate);


// validate the details of the added contact
function validate() 
{
	// Validate the Name
	
	let nameInput = document.getElementById("nameInput").value;
	let nameValid = true;
	
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
	// if name input is not valid
	else
	{
		nameValid = false;
	}
	
	
	// Validate the Mobile Number
	
	let mobileInput = document.getElementById("mobileInput").value;
	let mobileValid = true;
	
	// check if the mobile number is the right length
	if(mobileInput.length == 10)
	{
		for(let i=0; i<mobileInput.length; i++)
		{
			// check that the input is only numbers
			if(isNaN(mobileInput[i]))
			{
				mobileValid = false;
			}
		}
	}
	// if mobile input is not valid
	else
	{
		mobileValid = false;
	}
	
	
	// Validate the Email Address
	
	let emailInput = document.getElementById("emailInput").value;
	let emailValid = true;
	
	// regex for correct email format
	let emailFormat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	
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


// add the new contact to the list
function addContact(nameInput, mobileInput, emailInput)
{	
	// create new contact object
	let newContact = {
		name: nameInput,
		mobile: mobileInput,
		email: emailInput
	};
	
	// add new contact to contactsList
	contactsList.push(newContact);
	
	// reload the table with the new contact
	fillTable(contactsList);
}








// sort the table by the name column
function sort()
{	
	let isSorted = true;

	// check if the table is already sorted in ascending order
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


// add data to the table
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




// filter the table by mobile number
function filter()
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



