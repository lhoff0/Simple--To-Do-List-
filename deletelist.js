function deleteList(myTable) 
{
           
            var table = document.getElementById(myTable);
            var rowCount = table.rows.length;
            for(var i=0; i<rowCount; i++) {
                var row = table.rows[i];
                var chkbox = row.cells[1].childNodes[0];
                if(chkbox != null && chkbox.checked === true) {
                    table.deleteRow(i);
                    rowCount--;
                    i--;
				}
        	}
}
     