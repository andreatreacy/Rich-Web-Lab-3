
let contactsList = [
	{'name':'Kate Green', 'mobile':'0858769009', 'email':'kgreen@gmail.com'},
    {'name':'John Smith', 'mobile':'0867890586', 'email':'jsmith@gmail.com'},
    {'name':'Paul Brown', 'mobile':'0858887945', 'email':'pbrown@gmail.com'},
];

fillTable(contactsList);


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
		var colname = row.insertCell(cellpos);
		colname.innerHTML = contactsList[i].name;
			
		var colmobile = row.insertCell(cellpos+1);
		colmobile.innerHTML = contactsList[i].mobile;
			
		var colemail = row.insertCell(cellpos+2);
		colemail.innerHTML = contactsList[i].email;
    }
}


function filter() 
{
	// Declare variables
	var input, filter, table, tr, cell, i, cellContent;
	  
	input = document.getElementById("filterInput").value;
	table = document.getElementById("contactTable");
	tr = table.getElementsByTagName("tr");

	// loop through the rows in the table and hide the ones that don't match the filter input
	for(i=0; i<tr.length; i++) 
	{
		// only filter by the mobile column
		cell = tr[i].getElementsByTagName("td")[1];
		
		// if cell exists
		if(cell) 
		{
			cellContent = cell.textContent;
			
			// display content if it contains the filter input
			if(cellContent.indexOf(input) > -1) 
			{
				tr[i].style.display = "";
			}
			// hide content if it does not contain the filter input
			else 
			{
				tr[i].style.display = "none";
			}
		}// end outer if
	}//end for
  

}