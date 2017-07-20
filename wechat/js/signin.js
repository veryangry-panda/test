/**
 * Created by 顾志兴 on 2017/7/19.
 */

window.onload=function(){
        //点击获取验证码事件
        document.querySelector(".button_verification").onclick=function(){
            var Account=document.querySelector(".account").value;
            var Password=document.querySelector(".password").value;
            //console.log(Account)
            //console.log(Password)
            if(Account==""||Password==""){
                document.querySelector(".picture_verification").innerHTML="请正确输入密码或账号"
            }else{
                //定义异步对象
                var ajax=new XMLHttpRequest();
                //用post请求数据
                ajax.open('post','signin.php')
                ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                //发送账号和密码
                ajax.send('Account='+Account+'&Password'+Password);
                //注册事件
                ajax.onreadystatechange=function(){
                    if(ajax.readyState==4&&ajax.status==200){
                        console.log(ajax.responseText);
                        //把传送过来的数据转换为json对象
                        var jsOBJ=JSON.parse(ajax.responseText);
                        document.querySelector(".picture_verification").innerHTML=jsOBJ.YZM;
                    }
                }
            }
        }
        //点击submit返回绑定成功
        document.querySelector(".button_submit").onclick=function(){
            //判断是否输入验证码
            var YZM=document.querySelector(".input_verification").firstChild.value;
            //console.log(YZM);
            if(YZM==""){
//					document.querySelector(".input_verification").firstChild.value
                //不做任何提示，后期维护再做
            }else{
                //定义异步对象
                var ajax=new XMLHttpRequest();
                //用get请求
                ajax.open('get','Succes.php');
                //发送请求
                ajax.send();
                //注册事件
                ajax.onreadystatechange=function(){
                    if(ajax.readyState==4&&ajax.status==200){
                        console.log(ajax.responseText);
                        //转化为json对象
                        var jsOBJ=JSON.parse(ajax.responseText);
                        document.querySelector("body").innerHTML=jsOBJ.Succes;
                    }
                }

            }
        }

    }

