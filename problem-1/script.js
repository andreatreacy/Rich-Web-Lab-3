
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
		console.log(i);
		console.log(data[i].name);
		
		// insert the new row at the end of the table
		let row = table.insertRow(-1);
		
		let cellpos = 0;
			var colname = row.insertCell(cellpos);
			colname.innerHTML = data[i].name;
			
			var colmobile = row.insertCell(cellpos+1);
			colmobile.innerHTML = data[i].mobile;
			
			var colemail = row.insertCell(cellpos+2);
			colemail.innerHTML = data[i].email;
		
		console.log(data[i].mobile);
		
		
		/*
        let colname = 'name-${i}';
        let colmobile = 'mobile-${i}';
        let colemail = 'email-${i}';

        var row = '<tr><td>${data[i].name}</td><td>${data[i].mobile}</td><td>${data[i].email}</td></tr>';
        table.innerHTML += row;*/
    }
}


function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("contactTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for(i=0; i<tr.length; i++) 
  {
    td = tr[i].getElementsByTagName("td")[0];
    if(td) 
	{
      txtValue = td.textContent || td.innerText;
	  
      if (txtValue.toUpperCase().indexOf(filter) > -1) 
	  {
        tr[i].style.display = "";
      } 
	  else 
	  {
        tr[i].style.display = "none";
      }
    }// end outer if
  }//end for
}