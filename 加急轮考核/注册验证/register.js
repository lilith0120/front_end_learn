
// 将所有的注意事项隐藏
let tips = document.getElementsByClassName("tips");
for(let i = 0;i < tips.length;i++){
    tips[i].style.display = "none";
}


// 加载完成，进入第一步
window.addEventListener("load", load);
function load(){
    document.getElementById("register1").style.display = "block";
    document.getElementById("register2").style.display = "none";
    document.getElementById("register3").style.display = "none";
}


// 第一步点击next，进入第二步
document.getElementById("btn1").onclick = function(){

    // 判断用户名是否正确填写
    let user = document.getElementById("i_user").value;
    let tips11 = document.getElementById("tips11").style.display;
    let tips13 = document.getElementById("tips13").style.display;
    if(user == ""){
        document.getElementById("i_user").style.borderColor = "#ff5b5b";
        document.getElementById("tips12").style.display = "block";
        return;
    }
    else if(tips11 == "block" || tips13 == "block"){
        return;
    }

    document.getElementById("register1").style.display = "none";
    document.getElementById("register2").style.display = "block";
    document.getElementById("register3").style.display = "none";
}


// 第二步点击back，进入第一步
document.getElementById("btn12").onclick = function(){
    document.getElementById("register1").style.display = "block";
    document.getElementById("register2").style.display = "none";
    document.getElementById("register3").style.display = "none";
}


// 第二步点击next，进入第三步
document.getElementById("btn2").onclick = function(){

    // 判断邮箱地址是否正确填写
    let email = document.getElementById("i_email").value;
    let tips21 = document.getElementById("tips21").style.display;
    let tips22 = document.getElementById("tips22").style.display;
    if(email == ""){
        document.getElementById("i_email").style.borderColor = "#ff5b5b";
        document.getElementById("tips23").style.display = "block";
        return;
    }
    else if(tips21 == "block" || tips22 == "block"){
        return;
    }

    document.getElementById("register1").style.display = "none";
    document.getElementById("register2").style.display = "none";
    document.getElementById("register3").style.display = "block";
    document.getElementById("hide").style.display = "none";
}


// 第三步点击back，进入第二步
document.getElementById("btn23").onclick = function(){
    document.getElementById("register1").style.display = "none";
    document.getElementById("register2").style.display = "block";
    document.getElementById("register3").style.display = "none";
}


// 第三步点击finish，完成注册
document.getElementById("btn3").onclick = function(){

    // 判断密码和再次输入密码是否正确填写
    let pswd = document.getElementById("i_pswd").value;
    let conpswd = document.getElementById("i_conpswd").value;
    let tips31 = document.getElementById("tips31").style.display;
    let tips33 = document.getElementById("tips33").style.display;
    let tips34 = document.getElementById("tips34").style.display;
    let tips35 = document.getElementById("tips35").style.display;
    let tips36 = document.getElementById("tips36").style.display;
    if(pswd == ""){
        document.getElementById("i_pswd").style.borderColor = "#ff5b5b";
        document.getElementById("tips32").style.display = "block";
        return;
    }
    else if(pswd != conpswd){
        document.getElementById("i_conpswd").style.borderColor = "#ff5b5b";
        document.getElementById("tips37").style.display = "block";
        return;
    }
    else if(tips31 == "block" || tips33 == "block" || tips34 == "block" || tips35 == "block" || tips36 == "block"){
        return;
    }

    alert("Congratulations on your successful email registration!");
}


// 判断用户名格式
document.getElementById("i_user").onfocus = function(){
    document.getElementById("tips1").style.display = "block";
    document.getElementById("tips11").style.display = "none";
    document.getElementById("tips12").style.display = "none";
    document.getElementById("tips13").style.display = "none";
    document.getElementById("i_user").style.borderColor = "#576d75";
}

document.getElementById("i_user").onblur = function(){
    document.getElementById("tips1").style.display = "none";
    let user = document.getElementById("i_user").value;

    if(user == "")
        return;

    let re_head = /^[a-zA-Z]/;
    let re_user = /^[a-zA-Z][a-zA-Z0-9_]{3,9}$/;
    if(!re_head.test(user)){
        document.getElementById("i_user").style.borderColor = "#ff5b5b";
        document.getElementById("tips11").style.display = "block";
    }
    else if(!re_user.test(user)){
        document.getElementById("i_user").style.borderColor = "#ff5b5b";
        document.getElementById("tips13").style.display = "block";
    }
}


// 判断邮箱格式
document.getElementById("i_email").onfocus = function(){
    document.getElementById("tips2").style.display = "block";
    document.getElementById("tips21").style.display = "none";
    document.getElementById("tips22").style.display = "none";
    document.getElementById("tips23").style.display = "none";
    document.getElementById("i_email").style.borderColor = "#576d75";
}

document.getElementById("i_email").onblur = function(){
    document.getElementById("tips2").style.display = "none";
    let email = document.getElementById("i_email").value;
    //console.log(email);

    if(email == "")
        return;

    let re_head = /^[a-zA-Z]/;
    let re_email = /^[a-zA-Z][a-zA-Z0-9_]*@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)+$/;
    if(!re_head.test(email)){
        document.getElementById("i_email").style.borderColor = "#ff5b5b";
        document.getElementById("tips21").style.display = "block";
    }
    else if(!re_email.test(email)){
        document.getElementById("i_email").style.borderColor = "#ff5b5b";
        document.getElementById("tips22").style.display = "block";
    }
}


// 判断密码格式
document.getElementById("i_pswd").onfocus = function(){
    document.getElementById("tips3").style.display = "block";
    document.getElementById("tips31").style.display = "none";
    document.getElementById("tips32").style.display = "none";
    document.getElementById("tips33").style.display = "none";
    document.getElementById("tips34").style.display = "none";
    document.getElementById("tips35").style.display = "none";
    document.getElementById("tips36").style.display = "none";
    document.getElementById("i_pswd").style.borderColor = "#576d75";
}

document.getElementById("i_pswd").onblur = function(){
    document.getElementById("tips3").style.display = "none";
    let pswd = document.getElementById("i_pswd").value;
    let conpswd = document.getElementById("i_conpswd").value;

    if(pswd == "")
        return;

    // 判断密码的长度是否符合要求
    let re_length = /^.{9,15}$/;

    // 判断密码是否有重复字符
    let re_double = /(.).*\1/;

    // 判断密码中的数字是否在[2,8]之间
    let re_num = /(0|1|9)/;

    // 判断密码中是否含有三个大写字母
    let re_alpha = /([A-Z]{1})/g;
    let cnt = pswd.match(re_alpha);

    // 判断密码中是否含有四种特殊字符
    let re_special = /(#|&|\*|\?)/;

    if(!re_length.test(pswd)){
        document.getElementById("i_pswd").style.borderColor = "#ff5b5b";
        document.getElementById("tips33").style.display = "block";
    }
    else if(re_double.test(pswd)){
        document.getElementById("i_pswd").style.borderColor = "#ff5b5b";
        document.getElementById("tips31").style.display = "block";
    }
    else if(re_num.test(pswd)){
        document.getElementById("i_pswd").style.borderColor = "#ff5b5b";
        document.getElementById("tips35").style.display = "block";
    }
    else if(cnt == null || cnt.length < 3){
        document.getElementById("i_pswd").style.borderColor = "#ff5b5b";
        document.getElementById("tips34").style.display = "block";
    }
    else if(!re_special.test(pswd)){
        document.getElementById("i_pswd").style.borderColor = "#ff5b5b";
        document.getElementById("tips36").style.display = "block";
    }

    if(pswd == conpswd){
        document.getElementById("tips37").style.display = "none";
        document.getElementById("i_conpswd").style.borderColor = "#576d75";
    }
}


// 判断再次输入密码格式
document.getElementById("i_conpswd").onfocus = function(){
    document.getElementById("tips37").style.display = "none";
    document.getElementById("i_conpswd").style.borderColor = "#576d75";
}

document.getElementById("i_conpswd").onblur = function(){
    let pswd = document.getElementById("i_pswd").value;
    let conpswd = document.getElementById("i_conpswd").value;

    if(conpswd == "" || pswd != conpswd){
        document.getElementById("i_conpswd").style.borderColor = "#ff5b5b";
        document.getElementById("tips37").style.display = "block";
    }
}


// 判断是否显示/隐藏密码
let pswd = document.getElementById("i_pswd");
document.getElementById("show").onclick = function(){
    pswd.type = "text";
    document.getElementById("hide").style.display = "inline-block";
    document.getElementById("show").style.display = "none";
};
document.getElementById("hide").onclick = function(){
    pswd.type = "password";
    document.getElementById("hide").style.display = "none";
    document.getElementById("show").style.display = "inline-block";
}
