
$(function(){

    let back = $(".fa-arrow-left");
    back.click(function(){

        $(location).attr("href", "http://127.0.0.1:5500/3/job_list.html");
        
    });
    
    let check = $("#check input[type='checkbox']");
    function can_check(){

        let have = $("tr").length;
        if(have == 1){
            check.attr("disabled", true);
        }
        else{

            check.attr("disabled", false);
            check.click(function(){

                if(check.prop("checked")){
                    $("input[type='checkbox']").prop("checked", true);
                }
                else{
                    $("input[type='checkbox']").prop("checked", false);
                }
            });
            
            
        }
    }
    can_check();

    $("#delt").click(function(){
        check.prop("checked", false);
        $("input[type='checkbox']:checked").parent().parent().remove();
    });
});