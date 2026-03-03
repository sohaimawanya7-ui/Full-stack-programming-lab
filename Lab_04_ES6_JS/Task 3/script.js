$(document).ready(function(){

    function validateEmail(email){
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        return pattern.test(email);
    }

    $("input").blur(function(){

        if($(this).val().trim() === ""){
            $(this).addClass("error");
        } else {
            $(this).removeClass("error");
        }

        if($(this).attr("id") === "email"){
            if(!validateEmail($(this).val())){
                $(this).addClass("error");
            }
        }
    });

    $("#myForm").submit(function(e){
        e.preventDefault();

        let isValid = true;

        $("input").each(function(){
            if($(this).val().trim() === ""){
                $(this).addClass("error");
                isValid = false;
            }
        });

        if(isValid){
            $("#successMsg")
                .text("Form Submitted Successfully!")
                .fadeIn(500)
                .delay(2000)
                .fadeOut(500);

            $("#myForm")[0].reset();
        }
    });

});