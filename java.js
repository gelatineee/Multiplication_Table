function results(){
	 
  var col = parseInt(document.getElementById("col").value);
  console.log(col);
  var row = parseInt(document.getElementById("row").value);
  console.log(row);
  
  
  var Container = "<table border='3' id='tab'>";
  
  for (var i = 1; i <= row; i++){ 
    Container += "<tr>";
		for (var x = 1; x <= col; x++) {
			Container += "<td id='tab1'>"+ (i*x) + "</td>";
		}
	  Container += "</tr>";
  }
  Container += "</table>";
  document.getElementById("multiplicationTable").innerHTML = Container;
}

function bgcolor(){
	var color=document.getElementById("bgcolor").value;

	document.getElementById("tab").style.backgroundColor = color;
} 

function txtcolor(){
	var color=document.getElementById("txcolor").value;

	document.getElementById("tab").style.color = color;
}