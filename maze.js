window.onload = function() //executes function after window has loaded
{
	//var firstwall= document.getElementById(boundary1);
	//firstwall.addEventListener("mouseover", function(){
		//firstwall.setAttribute("style","background-color: #ff8888;");
		//firstwall.className="youlose";

	//}
	var boundaries = document.querySelectorAll(".boundary");       //select all boundary classes and stores in variable
		for (var counter=0; counter < boundaries.length-1; counter++)  // loops through all the divs
		{
			boundaries[counter].addEventListener("mouseover",redWalls);             // listens for mouse to touch walls and applies redWalls function
		}
	function redWalls()                                            // function to turn walls red if first wall is touched
	{
		for (var redcount= 0; redcount < boundaries.length-1; redcount++)
		{
				boundaries[redcount].setAttribute('style','background-color:#ff8888');
		}
			

	}

}
