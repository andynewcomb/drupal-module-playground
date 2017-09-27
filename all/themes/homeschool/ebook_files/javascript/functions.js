
//Login page functions################################
function displayIntro() {
    var display=document.getElementById('whatIs').style.display;

    if (display == 'block') {
        document.getElementById('whatIs').style.display = "none";
    } else {
        document.getElementById('whatIs').style.display = "block";
    }
    
}

function displayTerms() {
    var display=document.getElementById('terms').style.display;

    if (display == 'block') {
        document.getElementById('terms').style.display = "none";
	document.getElementById('showhide').innerHTML = "+ Show Terms of Use and Privacy Policy";
    } else {
        document.getElementById('terms').style.display = "block";
	document.getElementById('showhide').innerHTML = "- Hide Terms of Use and Privacy Policy";
    }
    
}

function toggleAnswer(id) {
	var display=document.getElementById(id).style.display;

    if (display == 'block') {
	document.getElementById(id).style.display = "none";
	document.getElementById(id + 'IMG').src = "./pics/showAnswer.gif";
    } else {
        document.getElementById(id).style.display = "block";
	document.getElementById(id + 'IMG').src = "./pics/hideAnswer.gif";
    }

}
function toggle2cents(id) {
	var display=document.getElementById(id).style.display;

    if (display == 'block') {
	document.getElementById(id).style.display = "none";
    } else {
        document.getElementById(id).style.display = "block";
    }

}


//###################################################




//TOC dropdown menu#################################
// Copyright 2006-2007 javascript-array.com

var timeout	= 500;
var closetimer	= 0;
var ddmenuitem	= 0;

// open hidden layer
function mopen(id)
{	
	// cancel close timer
	mcancelclosetime();

	// close old layer
	if(ddmenuitem) ddmenuitem.style.display = 'none';

	// get new layer and show it
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.display = 'block';

}
// close showed layer
function mclose()
{
	if(ddmenuitem) ddmenuitem.style.display = 'none';
}

// go close timer
function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}

// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

// close layer when click-out
 
//####################################################

