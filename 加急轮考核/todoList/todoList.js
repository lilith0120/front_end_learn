
// 关于todoList的使用提示
function show_tips() {
    let txt = "1.输入待办事项后，请(点击回车/点击旁边的图标)进行添加。\n" +
              "2.请点击右上角的图标进行(编辑/删除)事项，并通过相关提示进行操作。\n" +
              "3.完成待办事项后，可以通过点击事件前的图标将该事件转移到已完成事件。\n" + 
              "4.本页面会为你缓存数据，如果需要彻底清除所有数据，请点击页底版权旁边的图标进行一键清除。";
    alert(txt);
}

// 缓存
var storage=window.localStorage;
var todo_list =new Array();

// 正在完成事件删除的标记
let flag1 = 1;

// 已完成事件删除的标记
let flag2 = 1;

// 正在完成事件编辑的标记
let flag3 = 1;

// 显示两位数的时间
function set_two(num){
    if(num < 10)
        return "0"+num;
    else
        return num;
}

// 点击图片进行添加事件
function submit(){

    if(!flag1 || !flag2 || !flag3)
    {
        alert("请先完成你当下的操作~");
        return;
    }

    let add_thing = document.getElementById("add_thing").value;

    let da = new Date();
    let y = da.getFullYear();
    let mo = da.getMonth() + 1;
    mo = set_two(mo);
    let d = da.getDate();
    d = set_two(d);
    let h = da.getHours();
    h = set_two(h);
    let mi = da.getMinutes();
    mi = set_two(mi);
    let s = da.getSeconds();
    s = set_two(s);
    let time = y+'/'+mo+'/'+d+' '+h+':'+mi+':'+s;

    if(add_thing == "")
        alert("Oh, please add something!")
    else{

        // 将数据存入todo_list
        let obj_list = {
            time: time,
            value: add_thing,
            done: false,
        }
        todo_list.push(obj_list);
        storage.setItem("todo_list", JSON.stringify(todo_list));
        //console.log(todo_list);

        document.getElementById("tip1").style.display = "none";
        document.getElementById("add_thing").value = "";
        let load_thing = document.getElementById("load_thing");
        let li = document.createElement("li");

        let photo_name = "ok.png";
        let photo_title = "完成";
        let photo_funtion = "finished(this)";
        li.innerHTML += "<img src=" + photo_name + " title=" + photo_title + " onclick=" + photo_funtion + ">";
        
        let text_id = "text_id";
        let time_id = "time_id";
        li.innerHTML += "<span id=" +text_id + ">" + add_thing + "</span>" + "<span id="+ time_id +">" + time + "</span>";
        
        load_thing.appendChild(li);
        let count = document.getElementById("count1");
        //console.log(count.innerHTML)
        count.innerHTML = parseInt(count.innerHTML) + 1;
    }
}

// 将完成的事件移入完成的框框里
function finished(obj){

    if(!flag1 || !flag2 || !flag3)
    {
        alert("请先完成你当下的操作~");
        return;
    }

    if(!confirm("该事件是否已经完成？")){
        return;
    }

    // 将该事件从正在进行中删除
    let finished = obj.nextElementSibling.innerHTML;
    let before_time = obj.nextElementSibling.nextElementSibling.innerHTML;
    //console.log(before_time.innerHTML);
    let ul = document.getElementById("load_thing");
    ul.removeChild(obj.parentNode);
    let count1 = document.getElementById("count1");
    count1.innerHTML = parseInt(count1.innerHTML) - 1;
    if(parseInt(count1.innerHTML) == 0){
        document.getElementById("tip1").style.display = "block";
    }

    let da = new Date();
    let y = da.getFullYear();
    let mo = da.getMonth() + 1;
    mo = set_two(mo);
    let d = da.getDate();
    d = set_two(d);
    let h = da.getHours();
    h = set_two(h);
    let mi = da.getMinutes();
    mi = set_two(mi);
    let s = da.getSeconds();
    s = set_two(s);
    let time = y+'/'+mo+'/'+d+' '+h+':'+mi+':'+s;

    // 对todo_list进行更新
    for(let i = 0;i < todo_list.length;i++){
        if(todo_list[i].time == before_time){
            todo_list[i].done = true;
            todo_list[i].time = time;
            break;
        }
    }
    storage.setItem("todo_list", JSON.stringify(todo_list));
    //console.log(todo_list);

    document.getElementById("tip2").style.display = "none";
    let finished_thing = document.getElementById("finished_thing");
    let li = document.createElement("li");
    let photo_name = "honor.png";
    li.innerHTML += "<img src=" + photo_name + ">";
    let time_id = "time_id";
    li.innerHTML += finished + "<span id="+ time_id +">" + time + "</span>";

    finished_thing.appendChild(li);
    let count2 = document.getElementById("count2");
    count2.innerHTML = parseInt(count2.innerHTML) + 1;
}

// 点击图片进行编辑工作
function edit_some(){

    if(!flag1 || !flag2)
    {
        alert("请先完成你当下的操作~");
        return;
    }

    let count1 = document.getElementById("count1");
    if(parseInt(count1.innerHTML) == 0){
        alert("当前没有可以编辑的事件~");
        return;
    }

    if(flag3 == 1)
    {
        alert("选择要修改的事件，并再次点击按钮修改。");
        let li = document.getElementById("load_thing").getElementsByTagName("li");
        for(let i = 0;i < li.length;i++){
            let radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "edit_txt";
            li[i].appendChild(radio);
        }
        flag3 = 0;
    }
    else{
        let ul = document.getElementById("load_thing");
        let li = ul.getElementsByTagName("li");
        if(confirm("是否确定要修改事件？")){
            for(let i = li.length - 1;i >= 0;i--){
                if(li[i].children[3].checked){
                    let before_time = li[i].children[2].innerHTML;
                    //console.log(before_time.innerHTML);
                    let txt = li[i].children[1].innerHTML;
                    //console.log(txt);
                    let new_txt = prompt("请对事件进行修改：", txt);
                    if(new_txt == "" || new_txt == null){
                        alert("事件内容不能为空！");
                        new_txt = txt;
                    }
                    li[i].children[1].innerHTML = new_txt;

                    // 对todo_list进行数据更新
                    for(let j = 0;j < todo_list.length;j++){
                        if(todo_list[j].time == before_time){
                            todo_list[j].value = new_txt;
                            break;
                        }
                    }
                    storage.setItem("todo_list", JSON.stringify(todo_list));
                    //console.log(todo_list);
                    break;
                }
            }
        }
        for(let i = li.length - 1;i >= 0;i--){
            li[i].removeChild(li[i].children[3]);
        }
        flag3 = 1;
    }
}

// 点击图片进行正在完成事件的批量删除
function delete_some1(){

    if(!flag2 || !flag3)
    {
        alert("请先完成你当下的操作~");
        return;
    }

    let count1 = document.getElementById("count1");
    if(parseInt(count1.innerHTML) == 0){
        alert("当前没有可以删除的事件~");
        return;
    }

    if(flag1 == 1)
    {
        alert("选择要删除的事件，并再次点击按钮删除。");
        let li = document.getElementById("load_thing").getElementsByTagName("li");
        for(let i = 0;i < li.length;i++){
            let check = document.createElement("input");
            check.type = "checkbox";
            li[i].appendChild(check);
        }
        flag1 = 0;
    }
    else{
        let ul = document.getElementById("load_thing");
        let li = ul.getElementsByTagName("li");
        let count1 = document.getElementById("count1");
        if(confirm("是否确定要删除事件？")){
            for(let i = li.length - 1;i >= 0;i--){
                if(li[i].children[3].checked){

                    // 对todo_list进行数据更新
                    let before_time = li[i].children[2].innerHTML;
                    //console.log(before_time);
                    for(let j = 0;j < todo_list.length;j++){
                        if(todo_list[j].time == before_time){
                            todo_list.splice(j, 1);
                            break;
                        }
                    }
                    storage.setItem("todo_list", JSON.stringify(todo_list));
                    //console.log(todo_list);

                    ul.removeChild(li[i]);
                    count1.innerHTML = parseInt(count1.innerHTML) - 1;
                }
                else{
                    li[i].removeChild(li[i].children[3]);
                    //console.log(li[i].children[3]);
                }
            }
        }
        else{
            for(let i = li.length - 1;i >= 0;i--){
                li[i].removeChild(li[i].children[3]);
            }
        }
        flag1 = 1;
        if(parseInt(count1.innerHTML) == 0){
            document.getElementById("tip1").style.display = "block";
        }
    }
}

// 点击图片进行已完成事件的批量删除
function delete_some2(){

    if(!flag1 || !flag3)
    {
        alert("请先完成你当下的操作~");
        return;
    }

    let count2 = document.getElementById("count2");
    if(parseInt(count2.innerHTML) == 0){
        alert("当前没有可以删除的事件~");
        return;
    }

    if(flag2 == 1)
    {
        alert("选择要删除的事件，并再次点击按钮删除。");
        let li = document.getElementById("finished_thing").getElementsByTagName("li");
        for(let i = 0;i < li.length;i++){
            let check = document.createElement("input");
            check.type = "checkbox";
            li[i].appendChild(check);
        }
        flag2 = 0;
    }
    else{
        let ul = document.getElementById("finished_thing");
        let li = ul.getElementsByTagName("li");
        let count2 = document.getElementById("count2");
        if(confirm("是否确定要删除事件？")){
            for(let i = li.length - 1;i >= 0;i--){
                if(li[i].children[2].checked){

                    // 对todo_list进行数据更新
                    let before_time = li[i].children[1].innerHTML;
                    //console.log(before_time);
                    for(let j = 0;j < todo_list.length;j++){
                        if(todo_list[j].time == before_time){
                            todo_list.splice(j, 1);
                            break;
                        }
                    }
                    storage.setItem("todo_list", JSON.stringify(todo_list));
                    //console.log(todo_list);

                    ul.removeChild(li[i]);
                    count2.innerHTML = parseInt(count2.innerHTML) - 1;
                }
                else{
                    li[i].removeChild(li[i].children[2]);
                    //console.log(li[i].children[2]);
                }
            }
        }
        else{
            for(let i = li.length - 1;i >= 0;i--){
                li[i].removeChild(li[i].children[2]);
            }
        }
        flag2 = 1;
        if(parseInt(count2.innerHTML) == 0){
            document.getElementById("tip2").style.display = "block";
        }
    }
}

//一键清除所有的数据
function delete_all() {

    if(!flag1 || !flag2 || !flag3)
    {
        alert("请先完成你当下的操作~");
        return;
    }

    let ul1 = document.getElementById("load_thing");
    let ul2 = document.getElementById("finished_thing");
    let li1 = ul1.getElementsByTagName("li");
    let li2 = ul2.getElementsByTagName("li");
    let count1 = document.getElementById("count1");
    let count2 = document.getElementById("count2");
    if(confirm("是否确定要删除所有事件？")){

        // 清除缓存
        storage.clear();
        todo_list.length = 0;
        //console.log(todo_list);

        for(let i = li1.length - 1;i >= 0;i--){
            ul1.removeChild(li1[i]);
        }
        for(let i = li2.length - 1;i >= 0;i--){
            ul2.removeChild(li2[i]);
        }
        count1.innerHTML = 0;
        count2.innerHTML = 0;
        document.getElementById("tip1").style.display = "block";
        document.getElementById("tip2").style.display = "block";
    }
}

// 读取缓存
function load(){

    let load_count = document.getElementById("count1");
    let finished_count = document.getElementById("count2");
    let count1 = 0;
    let count2 = 0;
    let list = JSON.parse(storage.getItem("todo_list"));

    if(list != null){
        for(let i = 0;i < list.length;i++){

            todo_list.push(list[i]);
            
            if(list[i].done == false){
                let ul1 = document.getElementById("load_thing");
                document.getElementById("tip1").style.display = "none";

                let li1 = document.createElement("li");
                let photo_name = "ok.png";
                let photo_title = "完成";
                let photo_funtion = "finished(this)";
                li1.innerHTML += "<img src=" + photo_name + " title=" + photo_title + " onclick=" + photo_funtion + ">";
                    
                let time = list[i].time;
                let add_thing = list[i].value;
                let text_id = "text_id";
                let time_id = "time_id";
                li1.innerHTML += "<span id=" +text_id + ">" + add_thing + "</span>" + "<span id="+ time_id +">" + time + "</span>";
                    
                ul1.appendChild(li1);
                count1++;
            }
            else{
                let ul2 = document.getElementById("finished_thing");
                document.getElementById("tip2").style.display = "none";
        
                let li2 = document.createElement("li");
                let photo_name = "honor.png";
                li2.innerHTML += "<img src=" + photo_name + ">";

                let time = list[i].time;
                let finished = list[i].value;
                let time_id = "time_id";
                li2.innerHTML += finished + "<span id="+ time_id +">" + time + "</span>";

                ul2.appendChild(li2);
                count2++;
            }
        }
        load_count.innerHTML = count1;
        finished_count.innerHTML = count2;
    }
}

// 事件监听
window.addEventListener("load", load);
document.getElementById("delete_all").onclick = delete_all;
document.getElementById("add_thing").onkeypress = function (event){ 
    if(event.keyCode === 13){ 
        submit(); 
    } 
};
