chrome.runtime.onInstalled.addListener(function() {
	// alert("Success! Hooray~");
});

chrome.webRequest.onBeforeRequest.addListener(function(details) {
	return {cancel: true}; 
}, {urls: ["http://www.kantv6.com/index.php/Customize/list?*"]}, ["blocking"]);
