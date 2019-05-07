console.log('Get rid of Ads.');
if (document.getElementById("vjs-pause-advertising")) {
	document.getElementById("vjs-pause-advertising").style.overflow = "hidden";
	document.getElementById("vjs-pause-advertising").style.width = "0px";
	document.getElementById("vjs-mandatory-advertisement__a").remove();
}
