window.onload = function() //executes function after window has loaded
{
	//var firstwall= document.getElementById(boundary1);
	//firstwall.addEventListener("mouseover", function(){
		//firstwall.setAttribute("style","background-color: #ff8888;");
		//firstwall.className="youlose";

	//}
	var boundaries = document.querySelectorAll(".boundary");       //select all boundary classes and stores in variable
	var endbutton = document.getElementById('end');
	var startbutton = document.getElementById('start');
	var winlose = document.getElementById('status');
	var cheater = document.getElementById('maze');
	var mouse = event.clientx;
	var left =cheater.offsetLeft;             // offset left


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
	endbutton.addEventListener("mouseover", winorlose);
	function winorlose(){
		if (boundaries[0].getAttribute('style') === 'background-color:#ff8888')
		{
			winlose.textContent="YOU LOSE. CLICK THE 'S' TO RESTART ";
		}
		else{
			winlose.textContent="YOU WIN. CLICK THE 'S' TO RESTART";
		}
	}
	
	startbutton.onclick = function(){
		for (var counter=0; counter < boundaries.length-1; counter++)
			boundaries[counter].setAttribute('style', 'boundary');
	}

	startbutton.setAttribute('mouseout',ischeater);
	
	
	function ischeater(){

		if (mouse < left){
			winlose.textContent="YOU LOSE";
			function winorlose();
		}

	}


}
