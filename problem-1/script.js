
let contactsList = [
    {'name':'John Smith', 'mobile':'0867890586', 'email':'jsmith@gmail.com'},
    {'name':'Kate Green', 'mobile':'0858769009', 'email':'kgreen@gmail.com'},
    {'name':'Paul Brown', 'mobile':'0858887945', 'email':'pbrown@gmail.com'},
];

fillTable(contactsList);


function fillTable(data)
{
    let table = document.getElementById('contactTable');
	//table.innerHTML = '';
	
    for(let i=0; i<data.length; i++)
	{
		// insert the new row at the end of the table
		let row = table.insertRow(-1);
		
		let cellpos = 0;
		var colname = row.insertCell(cellpos);
		colname.innerHTML = data[i].name;
			
		var colmobile = row.insertCell(cellpos+1);
		colmobile.innerHTML = data[i].mobile;
			
		var colemail = row.insertCell(cellpos+2);
		colemail.innerHTML = data[i].email;
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