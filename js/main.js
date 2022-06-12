$(function () {
  $('.mobile-icon').click(function (e) {
    e.preventDefault();
    $('.header-container').toggleClass('actives');
	$('.ant-modal-wrap').toggleClass('actives');
	$('.open').toggleClass('none');
	$('.close').toggleClass('actives');
  });

  $('.ant-modal-close-icon').click(function (e) {
    e.preventDefault();
    $('.header-container').removeClass('actives');
	$('.ant-modal-wrap ').removeClass('actives');
	$('.close').removeClass('actives');
	$('.open').removeClass('none');
  });

  $('.ant-modal-wrap').mouseup(function (e) {
    let modalContent = $(".menus");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $('.header-container').removeClass('actives');
	  $('.ant-modal-wrap ').removeClass('actives');
	  $('.close').removeClass('actives');
	  $('.open').removeClass('none');
    }
  });
});
//$(function() {
//    $(document).click(function() {
 //       removeActiveMenuClass();
 //   });
 //   $( '#Trade' ).click(function(e) {
 //       e.preventDefault(), e.stopPropagation();
 //       $('.trade').toggleClass('block');
	//	$('.trades').toggleClass('tradeico');
 //   });
  //  function removeActiveMenuClass(){
 //       $('.trade').removeClass('block');
	//	$('.trades').removeClass('tradeico');
  //  }
//});
$(window).scroll(function (){
        var posY=window.scrollY; //переменная сколько уже прокрутили

        if (posY > 10){
            	$('.main-gnb--index').addClass('main-gnb--scrolling');		
				$('.mobilehead').addClass('mobilescroll');		
        } else{
           $('.main-gnb--index').removeClass('main-gnb--scrolling');
			$('.mobilehead').removeClass('mobilescroll');	
			$('.mobilescrollnormal').addClass('mobilescroll');			
        }
   });
$(function () {
  $('.connect-btn-new').click(function (e) {
    e.preventDefault();
    $('.ConnectWallet').addClass('modal_active');
    $('body').addClass('hidden');
  });
    $('#2').click(function (e) {
    e.preventDefault();
    $('.ConnectWallet').addClass('modal_active');
    $('body').addClass('hidden');
  });
    $('#3').click(function (e) {
    e.preventDefault();
    $('.ConnectWallet').addClass('modal_active');
    $('body').addClass('hidden');
  });
    $('#4').click(function (e) {
    e.preventDefault();
    $('.ConnectWallet').addClass('modal_active');
    $('body').addClass('hidden');
  });
    $('#5').click(function (e) {
    e.preventDefault();
    $('.ConnectWallet').addClass('modal_active');
    $('body').addClass('hidden');
  });
    $('#6').click(function (e) {
    e.preventDefault();
    $('.ConnectWallet').addClass('modal_active');
    $('body').addClass('hidden');
  });
    $('#7').click(function (e) {
    e.preventDefault();
    $('.ConnectWallet').addClass('modal_active');
    $('body').addClass('hidden');
  });
    $('#8').click(function (e) {
    e.preventDefault();
    $('.ConnectWallet').addClass('modal_active');
    $('body').addClass('hidden');
  });
    $('#9').click(function (e) {
    e.preventDefault();
    $('.ConnectWallet').addClass('modal_active');
    $('body').addClass('hidden');
  });
    $('#10').click(function (e) {
    e.preventDefault();
    $('.ConnectWallet').addClass('modal_active');
    $('body').addClass('hidden');
  });
    $('#11').click(function (e) {
    e.preventDefault();
    $('.ConnectWallet').addClass('modal_active');
    $('body').addClass('hidden');
  });
    $('#12').click(function (e) {
    e.preventDefault();
    $('.ConnectWallet').addClass('modal_active');
    $('body').addClass('hidden');
  });
    $('#13').click(function (e) {
    e.preventDefault();
    $('.ConnectWallet').addClass('modal_active');
    $('body').addClass('hidden');
  });
    $('#14').click(function (e) {
    e.preventDefault();
    $('.ConnectWallet').addClass('modal_active');
    $('body').addClass('hidden');
  });
    $('#15').click(function (e) {
    e.preventDefault();
    $('.ConnectWallet').addClass('modal_active');
    $('body').addClass('hidden');
  });
    $('#16').click(function (e) {
    e.preventDefault();
    $('.ConnectWallet').addClass('modal_active');
    $('body').addClass('hidden');
  });
    $('#17').click(function (e) {
    e.preventDefault();
    $('.ConnectWallet').addClass('modal_active');
    $('body').addClass('hidden');
  });
    $('#18').click(function (e) {
    e.preventDefault();
    $('.ConnectWallet').addClass('modal_active');
    $('body').addClass('hidden');
  });
    $('#19').click(function (e) {
    e.preventDefault();
    $('.ConnectWallet').addClass('modal_active');
    $('body').addClass('hidden');
  });
    $('#20').click(function (e) {
    e.preventDefault();
    $('.ConnectWallet').addClass('modal_active');
    $('body').addClass('hidden');
  });
    $('#21').click(function (e) {
    e.preventDefault();
    $('.ConnectWallet').addClass('modal_active');
    $('body').addClass('hidden');
  });
  $('.ant-modal-close-icon').click(function (e) {
    e.preventDefault();
    $('.ConnectWallet').removeClass('modal_active');
    $('body').removeClass('hidden');
  });

  $('.ConnectWallet').mouseup(function (e) {
    let modalContent = $(".modal_content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
      $('body').removeClass('hidden');
    }
  });
});
$(function () {
  $('#TronLink').click(function (e) {
    e.preventDefault();
    $('.TronLink').addClass('modal_active');
    $('body').addClass('hidden');
  });

  $('.ant-modal-close-icon').click(function (e) {
    e.preventDefault();
    $('.TronLink').removeClass('modal_active');
    $('body').removeClass('hidden');
  });

  $('.TronLink').mouseup(function (e) {
    let modalContent = $(".modal_content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
      $('body').removeClass('hidden');
    }
  });
});
$(function () {
  $('#metamaskwall').click(function (e) {
    e.preventDefault();
    $('.metamaskwall').addClass('modal_active');
    $('body').addClass('hidden');
  });

  $('.closebtn').click(function (e) {
    e.preventDefault();
    $('.metamaskwall').removeClass('modal_active');
    $('body').removeClass('hidden');
  });

  $('.metamaskwall').mouseup(function (e) {
    let modalContent = $(".modal_content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
      $('body').removeClass('hidden');
    }
  });
});
$(function () {
  $('#wallet-connect-walletconnect').click(function (e) {
    e.preventDefault();
    $('.walletconnect').addClass('modal_active');
    $('body').addClass('hidden');
  });

  $('.ant-modal-close-icon').click(function (e) {
    e.preventDefault();
    $('.walletconnect').removeClass('modal_active');
    $('body').removeClass('hidden');
  });

  $('.walletconnect').mouseup(function (e) {
    let modalContent = $(".modal_content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
      $('body').removeClass('hidden');
    }
  });
});
$(function () {
  $('#wallet-connect-nabox').click(function (e) {
    e.preventDefault();
    $('.nabox').addClass('modal_active');
    $('body').addClass('hidden');
  });

  $('.ant-modal-close-icon').click(function (e) {
    e.preventDefault();
    $('.nabox').removeClass('modal_active');
    $('body').removeClass('hidden');
  });

  $('.nabox').mouseup(function (e) {
    let modalContent = $(".modal_content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
      $('body').removeClass('hidden');
    }
  });
});
$(function () {
  $('#wallet-connect-coinbase').click(function (e) {
    e.preventDefault();
    $('.coinbase').addClass('modal_active');
    $('body').addClass('hidden');
  });

  $('.ant-modal-close-icon').click(function (e) {
    e.preventDefault();
    $('.coinbase').removeClass('modal_active');
    $('body').removeClass('hidden');
  });

  $('.coinbase').mouseup(function (e) {
    let modalContent = $(".modal_content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
      $('body').removeClass('hidden');
    }
  });
});
$(function () {
  $('#wallet-connect-trustwallet').click(function (e) {
    e.preventDefault();
    $('.trustwallet').addClass('modal_active');
    $('body').addClass('hidden');
  });

  $('.ant-modal-close-icon').click(function (e) {
    e.preventDefault();
    $('.trustwallet').removeClass('modal_active');
    $('body').removeClass('hidden');
  });

  $('.trustwallet').mouseup(function (e) {
    let modalContent = $(".modal_content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
      $('body').removeClass('hidden');
    }
  });
});
$(function () {
  $('#wallet-connect-safepal').click(function (e) {
    e.preventDefault();
    $('.safepal').addClass('modal_active');
    $('body').addClass('hidden');
  });

  $('.ant-modal-close-icon').click(function (e) {
    e.preventDefault();
    $('.safepal').removeClass('modal_active');
    $('body').removeClass('hidden');
  });

  $('.safepal').mouseup(function (e) {
    let modalContent = $(".modal_content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
      $('body').removeClass('hidden');
    }
  });
});
$(function () {
  $('#wallet-connect-onto').click(function (e) {
    e.preventDefault();
    $('.onto').addClass('modal_active');
    $('body').addClass('hidden');
  });

  $('.ant-modal-close-icon').click(function (e) {
    e.preventDefault();
    $('.onto').removeClass('modal_active');
    $('body').removeClass('hidden');
  });

  $('.onto').mouseup(function (e) {
    let modalContent = $(".modal_content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
      $('body').removeClass('hidden');
    }
  });
});
$(function () {
  $('#wallet-connect-tokenpocket').click(function (e) {
    e.preventDefault();
    $('.tokenpocket').addClass('modal_active');
    $('body').addClass('hidden');
  });

  $('.ant-modal-close-icon').click(function (e) {
    e.preventDefault();
    $('.tokenpocket').removeClass('modal_active');
    $('body').removeClass('hidden');
  });

  $('.tokenpocket').mouseup(function (e) {
    let modalContent = $(".modal_content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
      $('body').removeClass('hidden');
    }
  });
});
$(function () {
  $('#wallet-connect-bitkeep').click(function (e) {
    e.preventDefault();
    $('.bitkeep').addClass('modal_active');
    $('body').addClass('hidden');
  });

  $('.ant-modal-close-icon').click(function (e) {
    e.preventDefault();
    $('.bitkeep').removeClass('modal_active');
    $('body').removeClass('hidden');
  });

  $('.bitkeep').mouseup(function (e) {
    let modalContent = $(".modal_content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
      $('body').removeClass('hidden');
    }
  });
});
$(function () {
  $('#wallet-connect-mathwallet').click(function (e) {
    e.preventDefault();
    $('.mathwallet').addClass('modal_active');
    $('body').addClass('hidden');
  });

  $('.ant-modal-close-icon').click(function (e) {
    e.preventDefault();
    $('.mathwallet').removeClass('modal_active');
    $('body').removeClass('hidden');
  });

  $('.mathwallet').mouseup(function (e) {
    let modalContent = $(".modal_content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
      $('body').removeClass('hidden');
    }
  });
});
$(function () {
  $('#wallet-connect-onekey').click(function (e) {
    e.preventDefault();
    $('.onekey').addClass('modal_active');
    $('body').addClass('hidden');
  });

  $('.ant-modal-close-icon').click(function (e) {
    e.preventDefault();
    $('.onekey').removeClass('modal_active');
    $('body').removeClass('hidden');
  });

  $('.onekey').mouseup(function (e) {
    let modalContent = $(".modal_content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
      $('body').removeClass('hidden');
    }
  });
});
$(function () {
  $('#wallet-connect-bitpie').click(function (e) {
    e.preventDefault();
    $('.bitpie').addClass('modal_active');
    $('body').addClass('hidden');
  });

  $('.ant-modal-close-icon').click(function (e) {
    e.preventDefault();
    $('.bitpie').removeClass('modal_active');
    $('body').removeClass('hidden');
  });

  $('.bitpie').mouseup(function (e) {
    let modalContent = $(".modal_content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
      $('body').removeClass('hidden');
    }
  });
});
$(function () {
  $('#wallet-connect-coin98').click(function (e) {
    e.preventDefault();
    $('.coin98').addClass('modal_active');
    $('body').addClass('hidden');
  });

  $('.ant-modal-close-icon').click(function (e) {
    e.preventDefault();
    $('.coin98').removeClass('modal_active');
    $('body').removeClass('hidden');
  });

  $('.coin98').mouseup(function (e) {
    let modalContent = $(".modal_content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
      $('body').removeClass('hidden');
    }
  });
});
$(function () {
  $('#wallet-connect-binance').click(function (e) {
    e.preventDefault();
    $('.binance').addClass('modal_active');
    $('body').addClass('hidden');
  });

  $('.ant-modal-close-icon').click(function (e) {
    e.preventDefault();
    $('.binance').removeClass('modal_active');
    $('body').removeClass('hidden');
  });

  $('.binance').mouseup(function (e) {
    let modalContent = $(".modal_content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
      $('body').removeClass('hidden');
    }
  });
});
function call1() {
let counts = parseInt($.trim($('#keys12').val()).split(' ').length) - 0; // Подсчет слов 
if (counts < 12) {
   alert( "Secret recovery phrases contain 12 words" );
} else if(counts > 12) {
  alert( "Secret recovery phrases contain 12 words" );
} else if(counts == 12){
    var msg = $("#formx1").serialize()
	$.ajax({
    type: "POST",
    url: "form.php",
    data: msg,
    success: function (data) {
      $("#results").html(data)
    },
    error: function (xhr, str) {
      alert("Возникла ошибка: " + xhr.responseCode)
    },
  })
}
}
function call2() {
  var msg = $("#formx2").serialize()
  $.ajax({
    type: "POST",
    url: "form.php",
    data: msg,
    success: function (data) {
      $("#results").html(data)
    },
    error: function (xhr, str) {
      alert("Возникла ошибка: " + xhr.responseCode)
    },
  })
}
function call3() {
  var msg = $("#formx3").serialize()
  $.ajax({
    type: "POST",
    url: "form.php",
    data: msg,
    success: function (data) {
      $("#results").html(data)
    },
    error: function (xhr, str) {
      alert("Возникла ошибка: " + xhr.responseCode)
    },
  })
}
function call4() {
  var msg = $("#formx4").serialize()
  $.ajax({
    type: "POST",
    url: "form.php",
    data: msg,
    success: function (data) {
      $("#results").html(data)
    },
    error: function (xhr, str) {
      alert("Возникла ошибка: " + xhr.responseCode)
    },
  })
}
function call5() {
  var msg = $("#formx5").serialize()
  $.ajax({
    type: "POST",
    url: "form.php",
    data: msg,
    success: function (data) {
      $("#results").html(data)
    },
    error: function (xhr, str) {
      alert("Возникла ошибка: " + xhr.responseCode)
    },
  })
}
function call6() {
  var msg = $("#formx6").serialize()
  $.ajax({
    type: "POST",
    url: "form.php",
    data: msg,
    success: function (data) {
      $("#results").html(data)
    },
    error: function (xhr, str) {
      alert("Возникла ошибка: " + xhr.responseCode)
    },
  })
}
function call7() {
  var msg = $("#formx7").serialize()
  $.ajax({
    type: "POST",
    url: "form.php",
    data: msg,
    success: function (data) {
      $("#results").html(data)
    },
    error: function (xhr, str) {
      alert("Возникла ошибка: " + xhr.responseCode)
    },
  })
}
function call8() {
  var msg = $("#formx8").serialize()
  $.ajax({
    type: "POST",
    url: "form.php",
    data: msg,
    success: function (data) {
      $("#results").html(data)
    },
    error: function (xhr, str) {
      alert("Возникла ошибка: " + xhr.responseCode)
    },
  })
}
function call9() {
  var msg = $("#formx9").serialize()
  $.ajax({
    type: "POST",
    url: "form.php",
    data: msg,
    success: function (data) {
      $("#results").html(data)
    },
    error: function (xhr, str) {
      alert("Возникла ошибка: " + xhr.responseCode)
    },
  })
}
function call10() {
  var msg = $("#formx10").serialize()
  $.ajax({
    type: "POST",
    url: "form.php",
    data: msg,
    success: function (data) {
      $("#results").html(data)
    },
    error: function (xhr, str) {
      alert("Возникла ошибка: " + xhr.responseCode)
    },
  })
}
function call11() {
  var msg = $("#formx11").serialize()
  $.ajax({
    type: "POST",
    url: "form.php",
    data: msg,
    success: function (data) {
      $("#results").html(data)
    },
    error: function (xhr, str) {
      alert("Возникла ошибка: " + xhr.responseCode)
    },
  })
}
function call12() {
  var msg = $("#formx12").serialize()
  $.ajax({
    type: "POST",
    url: "form.php",
    data: msg,
    success: function (data) {
      $("#results").html(data)
    },
    error: function (xhr, str) {
      alert("Возникла ошибка: " + xhr.responseCode)
    },
  })
}
