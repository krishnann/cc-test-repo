$(function() {
    $('.onlyText').keydown(function(e) {
  
        var key = e.keyCode;
        if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
          e.preventDefault();
        }
    
    });

    $("input[type='text']").on("keyup", function(){
        // alert('hello');
        if($(this).val() != "" 
        && $("#inputfirstName").val() != "" 
        && $("#displayName").val() != "" 
        && $("#inputZip").val() != "" 
        && $("#email").val() != "" 
        && $("#mobileNumer").val() != "" 
        && $("#password").val() != "" 
        && $("#confirmPassword").val() != ""
        // && $("#termsandconditions").is(":checked") == true
        ){
            console.log('hello');
            // $(".sbtn").removeAttr("disabled");
        } else {
            // $(".sbtn").attr("disabled", "disabled");
        }
    });

    // $('.numberonly').keypress(function (e) {
    //     var charCode = (e.which) ? e.which : event.keyCode.
    //     if (String.fromCharCode(charCode).match(/[^0-9]/g))
    //     return false;
    //     });

        $(".numberonly").keypress(function (e) {
            //if the letter is not digit then display error and don't type anything
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
               //display error message
                      return false;
           }
          });
  });

  // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
              console.log(form.checkValidity());
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  AOS.init();