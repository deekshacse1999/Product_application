function change()
 {
	var p1=document.getElementById("p1");
	var g1=document.getElementById("g1");
	var s1=document.getElementById("s1");
	var x=Number(p1.value);
	var y=Number(g1.value);
	var z=(((y/x)*100)+x);
	s1.value=z;

}