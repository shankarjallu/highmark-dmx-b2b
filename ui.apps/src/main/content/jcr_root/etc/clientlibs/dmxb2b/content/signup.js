$(function() {
    console.log( "test ready!" );
  //  debugger;

// var optinUrl = '/expcom-api/j/account/optin?';

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
};

 function IsPhone(phone) {
    var d = /[\(\)\[\]\,\.\-+\ ]/g;
    var e = phone.replace(d, '');
    if (e.length !== 10) return false;
    var regex = /^[2-9]{1}[0-9]{2}[2-9]{1}[0-9]{6}/;
    return e.match(regex);
};

$('.submit').click(function(event) {
   
   event.preventDefault();
    var emailVal = $('input[type="email"]').val();
    var teleVal = $('input[type="tele"]').val();

    if(emailVal !== null && emailVal !== "" && teleVal !== null && teleVal !== "" ){
        alert("not empty");
        if(IsEmail(emailVal)){
            console.log("correctemail");

            // var emailUrl = optinUrl + 'type=EMAIL' + '&value=' + emailVal;
			// 	$.ajax({
			// 		type: 'POST',
			// 		contentType: 'application/json',
			// 		url: emailUrl,
			// 		dataType: 'json',

			// 		success: function(data) {},
			// 		error: function(XMLHttpRequest, textStatus, errorThrown) {}
			// 	});
        }else{
            console.log("Please enter correct email");
        }


        if(IsPhone(teleVal)){
            console.log("correct telephone");

            // var emailUrl = optinUrl + 'type=EMAIL' + '&value=' + emailVal;
			// 	$.ajax({
			// 		type: 'POST',
			// 		contentType: 'application/json',
			// 		url: emailUrl,
			// 		dataType: 'json',

			// 		success: function(data) {},
			// 		error: function(XMLHttpRequest, textStatus, errorThrown) {}
			// 	});
        }else{
            console.log("Please enter correct phone");
        }


    }

    
});

});


