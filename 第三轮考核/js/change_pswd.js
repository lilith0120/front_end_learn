
$(function(){

    let o_pswd = $("input[name='o_pswd']");
    let n_pswd = $("input[name='n_pswd']");
    let rn_pswd = $("input[name='rn_pswd']");

    n_pswd.blur(function() {
        if(n_pswd.val() != rn_pswd.val()) {
            $("#error_same").fadeIn();
        }
        else if(n_pswd.val() == rn_pswd.val()) {
            $("#error_same").fadeOut();
        }
    });

    rn_pswd.blur(function() {
        if(n_pswd.val() != rn_pswd.val()) {
            $("#error_same").fadeIn();
        }
        else if(n_pswd.val() == rn_pswd.val()) {
            $("#error_same").fadeOut();
        }
    });

    $("#pswd_btn").click(function() {
        if(o_pswd.val() == "" || n_pswd.val() == "") {
            return;
        }

        if($("#error_same").is(':hidden') && $("#error_wrong").is(':hidden')) {
            let json_data = {
                "passWord": $("input[name='n_pswd']").val(),
            }
            //console.log(json_data);

            $.ajax({
                url: "/users",
                type: "PUT",
                data: json_data,
                dataType: 'json',
            });

            $("#page").hide();
            $("#change").fadeIn(3000).fadeOut(1000, function() {
                $("#page").fadeIn();
                $(".input_pswd").val("");
            });
        }
    });
});