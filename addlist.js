function addList(myTable) 
{
            var table = document.getElementById(myTable);

            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);

          	var b=document.getElementById('txt1').value;
		 	var cell1 = row.insertCell(0);
            var element1 = document.createElement("input");
            element1.type = "text";
            element1.style.width="100%";
            element1.name = "txtbox[]";
            element1.value=b;
            cell1.appendChild(element1);
 			var cell2 = row.insertCell(1);
            var element2 = document.createElement("input");
            element2.type = "checkbox";
            element2.name="chkbox[]";
            cell2.appendChild(element2);
			document.getElementById('txt1').value=" ";
			document.getElementById('pTotal').innerHTML= rowCount + 1;
}
