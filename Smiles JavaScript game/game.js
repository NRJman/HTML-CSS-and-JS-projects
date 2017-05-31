var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var width_pos = 0;
var height_pos = 0;
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];

function generateFaces(){
	var i = 0;
	while (i < numberOfFaces) {
		picture = document.createElement("img");
		picture.src = "smile.png";
		width_pos = Math.floor(Math.random()*(400 - 0) + 0);
		height_pos = Math.floor(Math.random()*(400 - 0) + 0);
		picture.setAttribute("style", "position:absolute;")
		picture.style.left = width_pos + "px";
		picture.style.top = height_pos + "px";
		theLeftSide.appendChild(picture);
		i++;
	}
	leftSideImages = theLeftSide.cloneNode(true);
	leftSideImages.removeChild(leftSideImages.lastChild);
	theRightSide.appendChild(leftSideImages);

	theLeftSide.lastChild.onclick = function nextLevel(event){
		numberOfFaces += 5;
		event.stopPropagation();

		while (theLeftSide.firstChild){
			theLeftSide.removeChild(theLeftSide.firstChild);
		}

		while (theRightSide.firstChild){
			theRightSide.removeChild(theRightSide.firstChild);
		}

		generateFaces();
	}

	theBody.onclick = function gameOver(event){
		alert('Game over!');
		theBody.onclick = null;
		theLeftSide.lastChild.onclick = null;
	}
}