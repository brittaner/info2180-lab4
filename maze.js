window.onload = function() //executes function after window has loaded
{
	//var firstwall= document.getElementById(boundary1);
	//firstwall.addEventListener("mouseover", function(){
		//firstwall.setAttribute("style","background-color: #ff8888;");
		//firstwall.className="youlose";

	//}
	var boundaries = document.querySelector(".boundary"); //select all boundary classes
	boundaries[0].addEventListener("mouseover",redWalls); // listens for mouse to touch walls of first boundary
	function redWalls() // function to turn walls red if first wall is touched
	{
		boundaries[0].setAttribute("class","youlose");
	}

}
