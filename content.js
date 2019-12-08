console.log("Chrome extension is running!");

let links = document.querySelectorAll('a');
for (var i = 0; i < links.length; i++) {
    links[i].style['background-color'] = '#ff0000';
}
let imgs = document.querySelectorAll('img');
for (var i = 0; i < imgs.length; i++) {
    links[i].style['background-color'] = '#ff0000';
}
let titles = document.getElementsByClassName('balancedHeadline');
let titles2 = document.getElementsByClassName('esl82me0');
for (var i = 0; i < titles.length; i++) {
    links[i].style['background-color'] = '#ff0000';
}
console.log(links.length, imgs.length, titles.length);
// Listen for messages
chrome.runtime.onMessage.addListener(loadBrowserHistory);

// Handle the message --> sample code from Shiffman
function loadBrowserHistory(request, sender, sendResponse) {
    // Now if the message matches "browser action"
    if (request.message === "browser action") {
        // Change the background color again
        var elts = document.getElementsByTagName('p');
        for (var i = 0; i < elts.length; i++) {
            elts[i].style['background-color'] = '#F0C';
        }
        // Send a message back!
        chrome.runtime.sendMessage({
            "message": "thank you"
        });
    }
}