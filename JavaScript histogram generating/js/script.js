function makeGraph()
{
    var element = document.getElementById("buttonScope");   // Get the <ul> element with id="myList"
    var myButton = document.getElementById("myButton")
    element.removeChild(myButton);

	var userNumsArr = [];

    while (true){
        var quantity = Math.round(+prompt("How many numbers do you wanna print? (from 1 to 10)", 0));
        if (!isNaN(parseFloat(quantity)) && isFinite(quantity) && (0 < quantity) && (quantity < 11)){
            break;
        } else{
        	alert("Don't joke with me! You must enter the NUMBER from 1 to 10!")
            continue;
        }
    };
    for (var i = 0; i < quantity; i++){
    	while (true){
        	var userNum = Math.round(+prompt("Enter your number, please:", 0));
        	if (!isNaN(parseFloat(userNum)) && isFinite(userNum)){
            	break;
        	} else{
            	alert("Don't joke with me! You must enter the NUMBER!")
            	continue;
        	}
    	};

    	userNumsArr.push(userNum);
    }

    var percentage = makePercentage(userNumsArr, findMax(userNumsArr));

    addListElems(userNumsArr, percentage);
}

function findMax(userNumsArr){
    var maxElem = userNumsArr[0];
    for (var i = 1; i < userNumsArr.length; i++){
        if (userNumsArr[i] > maxElem){
            maxElem = userNumsArr[i];
        }
    };
    return maxElem;
}

function makePercentage(userNumsArr, maxElem){
    var percentage = [];
    for (var i = 0; i < userNumsArr.length; i++){
        percentage[i] = (userNumsArr[i]/maxElem).toFixed(2) * 100;
    };
    return percentage;
}

function addListElems(userNumsArr, percentage){
    var arr = ["red","orange","green","blue", "yellow", "aqua", "darkmagenta"]
    for (var i = 0; i < userNumsArr.length; i++){
        var rand = Math.floor(Math.random() * arr.length);
        var newLi = document.createElement('li');
        newLi.innerHTML = userNumsArr[i];
        newLi.style.width = percentage[i] + '%';
        newLi.style.backgroundColor = arr[rand];
        document.getElementById("myList").appendChild(newLi);
    }
}