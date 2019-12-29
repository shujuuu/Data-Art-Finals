chrome.webNavigation.onCompleted.addListener(function () {

  chrome.history.search({
    text: '',
    maxResults: 20
  }, function (data) {
    console.log(data);

    chrome.browserAction.onClicked.addListener(function (tab) {
      var tabId = tab.id;
      console.log('clicked browserAction in tab id: ', tabId);
      var message = data;
      chrome.tabs.sendMessage(tabId, message);
    });
  });
}, {
  url: [{
    urlMatches: 'https://www.nytimes.com/'
  }]
});
