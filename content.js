// alert("hello world");
chrome.runtime.onMessage.addListener(
  function (message, sender, sendResponse) {
    // console.log(message);
    // console.log("sent from tab.id=", sender.tab.id);

    function milliConv(milli) {
      let t = [1, 1000, 60, 60];
      //milli,second,minute,hour
      for (i = 1; i < 4; i++) {
        t[i] = t[i - 1] * t[i];
      }

      if (milli < t[1]) {
        return "now"
      } else if (milli < t[2]) {
        return Math.round(milli / t[1]) + " second"
      } else if (milli < t[3]) {
        return Math.round(milli / t[2]) + " minute"
      } else {
        return Math.round(milli / t[3]) + " hour"
      }
    }

    // let h2 = document.getElementsByTagName('h2');
    let titles1 = document.querySelectorAll('h2.css-km70tz.esl82me0');
    let titles2 = document.querySelectorAll('h2.css-1qwxefa.esl82me0');
    let titles3 = document.querySelectorAll('h2.css-14bttnj.esl82me0');
    let titles4 = document.querySelectorAll('h2.css-n2blzn.esl82me0');
    let titles5 = document.querySelectorAll('h2.css-o2lisy.esl82me0');
    let titles6 = document.querySelectorAll('h2.css-1m5bs2v.esl82me0');
    let titles7 = document.querySelectorAll('h2.css-n2blzn.esl82me0');
    let titles8 = document.querySelectorAll('span.balancedHeadline');

    let browserHistoryArr = [];
    let placeHolderArr = [];
    let outline;

    titles1.forEach(titleHolder => placeHolderArr.push(titleHolder));
    titles2.forEach(titleHolder => placeHolderArr.push(titleHolder));
    titles3.forEach(titleHolder => placeHolderArr.push(titleHolder));
    titles4.forEach(titleHolder => placeHolderArr.push(titleHolder));
    titles5.forEach(titleHolder => placeHolderArr.push(titleHolder));
    titles6.forEach(titleHolder => placeHolderArr.push(titleHolder));
    titles7.forEach(titleHolder => placeHolderArr.push(titleHolder));
    titles8.forEach(titleHolder => placeHolderArr.push(titleHolder));
    // console.log(placeHolderArr);

    message.forEach(function (page, i) {
      outline = {
        "Page Title": page.title,
        "Page URL": page.url,
        "Last Visit": milliConv(Date.now() - page.lastVisitTime)
      }
      browserHistoryArr.push(page.title);
      // console.log(i);
      // console.log(page.title);
      // console.log(page.url);
      // console.log(page.visitCount);
      // console.log(page.lastVisitTime);
      // console.log(Date.now() - page.lastVisitTime);
      // console.log(milliConv(Date.now() - page.lastVisitTime));

      // console.log(outline);
    });
    console.log(browserHistoryArr);
    // placeHolderArr.forEach(function (holder) {
    //   holder.innerHTML = browserHistoryArr;
    // })
    for (let i = 0; i < placeHolderArr.length; i++) {
      placeHolderArr[i].innerHTML = "Shuju Checked " + browserHistoryArr[i];
    }
  });
