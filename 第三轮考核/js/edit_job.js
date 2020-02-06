
$(function(){

    let job_btn = $("#job_btn");
    job_btn.click(function(){

        //$(location).attr("href", "http://127.0.0.1:5500/3/job_list.html");
        return;

    });

    let da = new Date();
    let y = da.getFullYear();
    let m = (da.getMonth() + 1).toString().padStart(2, "0");
    let d = da.getDate().toString().padStart(2, "0");
    let job_ddl = $("input[name='job_deadline']");
    job_ddl.attr("min", y+"-"+m+"-"+d);

    let back = $(".fa-arrow-left");
    back.click(function(){

        $(location).attr("href", "http://127.0.0.1:5500/3/job_list.html");
        
    });

});