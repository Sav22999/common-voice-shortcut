function goTo(url_address)
{
	// go to url_address page
	var lang=document.getElementsByClassName("language")[0].value;
    var creating=browser.tabs.create({url:url_address.replace("{{**{{lang}}**}}",lang)});
    creating.then(console.log("Creata"), console.log("Errore"));
}

function setLanguage()
{
	// get the UI language
	var uiLanguage = browser.i18n.getUILanguage();
	lang=uiLanguage.split("-");
	document.getElementsByClassName("language")[0].value=lang[0].toLowerCase();
}

setLanguage();

// button click events
document.getElementsByClassName("speak")[0].onclick=function(e){goTo('https://voice.mozilla.org/{{**{{lang}}**}}/speak');setLanguage();};
document.getElementsByClassName("listen")[0].onclick=function(e){goTo('https://voice.mozilla.org/{{**{{lang}}**}}/listen');};
// button onmouseover events
document.getElementsByClassName("speak")[0].onmouseover=function(){document.getElementById("speak-button").style.fill="#FFFFFF";};
document.getElementsByClassName("listen")[0].onmouseover=function(){document.getElementById("listen-button").style.fill="#FFFFFF";};
// button onmouseout events
document.getElementsByClassName("speak")[0].onmouseout=function(){document.getElementById("speak-button").style.fill="#FF4F5E";};
document.getElementsByClassName("listen")[0].onmouseout=function(){document.getElementById("listen-button").style.fill="#59CBB7";};