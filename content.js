// alert("hello world");
chrome.runtime.onMessage.addListener(
  function (message, sender, sendResponse) {
    console.log(message);
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

    let nytHead = document.getElementsByClassName('balancedHeadline');
    let nytTitle1 = document.getElementsByClassName('css-1qwxefa esl82me0');
    let nytTitle2 = document.getElementsByClassName('css-n2blzn esl82me0');
    let nytTitle3 = document.getElementsByClassName('css-1w0yruz esl82me0');
    let nytTitle4 = document.getElementsByClassName('css-n2blzn esl82me0');
    let nytTitle5 = document.getElementsByClassName('css-1ez5fsm esl82me1');
    let nytTitle6 = document.getElementsByClassName('css-n2blzn esl82me0');
    let nytPar = document.getElementsByClassName('css-1pfq5u e1n8kpyg0');

    let titleArr = [];
    let outline;
    message.forEach(function (page, i) {
      outline = {
        "Page Title": page.title,
        "Page URL": page.url,
        "Last Visit": milliConv(Date.now() - page.lastVisitTime)
      }
      // console.log(i);
      // console.log(page.title);
      // console.log(page.url);
      // console.log(page.visitCount);
      // console.log(page.lastVisitTime);
      // console.log(Date.now() - page.lastVisitTime);
      // console.log(milliConv(Date.now() - page.lastVisitTime));

      console.log(outline);
    });
    let user = "Shuju Seached For "
    nytHead[0].innerHTML = user + message[0].title;
    nytTitle1[0].innerHTML = user + message[1].title;
    nytTitle1[1].innerHTML = user + message[2].title;
    nytTitle1[2].innerHTML = user + message[3].title;
    nytTitle2[0].innerHTML = user + message[4].title;
    nytTitle2[1].innerHTML = user + message[5].title;
    nytTitle2[2].innerHTML = user + message[6].title;
    nytTitle3[0].innerHTML = user + message[7].title;
    nytTitle3[1].innerHTML = user + message[8].title;
    nytTitle3[2].innerHTML = user + message[9].title;
    nytTitle3[3].innerHTML = user + message[10].title;
    nytTitle3[4].innerHTML = user + message[11].title;
    nytTitle4[3].innerHTML = user + message[12].title;
    nytTitle4[2].innerHTML = user + message[13].title;
    nytTitle4[1].innerHTML = user + message[14].title;
    nytTitle5[1].innerHTML = user + message[15].title;
    nytTitle5[0].innerHTML = user + message[16].title;
    nytTitle6[0].innerHTML = user + message[17].title;
    nytTitle6[1].innerHTML = user + message[18].title;
    nytTitle6[2].innerHTML = user + message[19].title;
    nytTitle6[3].innerHTML = user + message[20].title;
  });
