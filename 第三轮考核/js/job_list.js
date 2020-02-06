
$(function(){

    let edit = $(".fa-edit");
    edit.click(function(){

        $(location).attr("href", "http://127.0.0.1:5500/3/edit_job.html");

    });

    let detail = $(".fa-info-circle");
    detail.click(function(){

        $(location).attr("href", "http://127.0.0.1:5500/3/job_detail.html");

    });

    let delt = $(".fa-trash-o");
    delt.click(function(){

        let parent = $(this).parent().parent();
        parent.remove();

    });
});