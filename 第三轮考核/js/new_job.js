
$(function(){

    let job_name = $("#job_name");
    let job_deadline = $("#job_deadline");
    let job_explain = $("#job_explain");

    let da = new Date();
    let y = da.getFullYear();
    let m = (da.getMonth() + 1).toString().padStart(2, "0");
    let d = da.getDate().toString().padStart(2, "0");
    let time = y+"-"+m+"-"+d;
    job_deadline.attr("min", time);
    
    let job_btn = $("#job_btn");
    job_btn.click(function(){

        if(job_name.val() != "" && job_deadline.val() != "") {
            let json_data = {
                "taskName": job_name.val(),
                "taskContent": job_explain.val(),
                "startDate": time,
                "deadline": job_deadline.val(),
            }
            console.log(json_data);
    
            $.ajax({
                url: "/Administrators/tasks",
                type: "POST",
                data: json_data,
                dataType: 'json',
    
                success: function(data) {
                    let id = data.taskId;
                    //...这个地方后端还没搞，我自己先搁这
                    job_name.val("");
                    job_deadline.val("");
                    job_explain.val("");
                }
            });
        }
    });

});