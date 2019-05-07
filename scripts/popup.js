// import ext from "./utils/ext";

let changeColor = document.getElementById('changeColor');
var color = '';
var myVar = ''
changeColor.onclick = function(element) {
  clearInterval(myVar);
  myVar = setInterval(function() {
    var letters = '0123456789ABCDEF';
    color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor ="'+color+
        '";document.getElementById("vjs-pause-advertising").style.overflow = "hidden"'+
        ';document.getElementById("vjs-pause-advertising").style.width = "0px";'+
        'document.getElementById("vjs-mandatory-advertisement__a").remove();'
        }
      );
    });
  }, 100);
};

let regularColor = document.getElementById('regularColor');
regularColor.onclick = function(element) {
  clearInterval(myVar);
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'document.body.style.backgroundColor = "white"'}
    );
  });

};

