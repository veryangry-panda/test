window.onload=function(){
    //设置背景图片的尺寸
    setSize();

    //判断是否绑定正方账号，然后跳转到指定的页面
    JudgeAccount1();
}

//判断是否绑定正方账号，然后跳转到指定的页面
function JudgeAccount1() {
    document.querySelector("#upload").onclick = function() {
        //从用户的设备获取cookie
        var username = get_cookie_func("username");
        var password = get_cookie_func("password");
        //判断cookie是否存在，不存在进入绑定界面，存在进入验证码界面
        if(username == "" || password == "") {
            window.location.href = "bind.html";
        } else {
            window.location.href = "upload.html";
        }
    }

    document.querySelector("#download").onclick = function() {
        //从用户的设备获取cookie
        var username = get_cookie_func("username");
        var password = get_cookie_func("password");
        //判断cookie是否存在，不存在进入绑定界面，存在进入验证码界面
        if(username == "" || password == "") {
            window.location.href = "bind.html";
        } else {
            window.location.href = "download.html";
        }
    }

    // document.querySelector("#upload").onclick = function() {
    //     window.location.href = "upload.html";
    // }
    // document.querySelector("#download").onclick = function() {
    //     window.location.href = "download.html";
    // }
}

