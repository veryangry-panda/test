/**
 * Created by Administrator on 2017/7/21 0021.
 */
//      获取屏幕宽高作为背景的大小
window.onload=function() {
    var winWidth = 0;
    var winHeight = 0;

    function findsize() {
        if (window.innerWidth) {
            winWidth = window.innerWidth;
        }
        else if ((document.body) && (document.body.clientWidth)) {
            winWidth = document.body.clientWidth;
        }
        findsize();
        console.log(winWidth);
        console.log(winHeight);
        var elen = document.getElementById("bg2");
        elen.style.backgroundSize = winWidth + 'px' + winHeight + 'px';
    }
}
//使用AJAX请求从服务器请求JSON，解析json并动态生成表格
    function setform() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "run_json_demo.txt", true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
//                将json解析为js对象或js数组
                myObj = JSON.parse(this.responseText);
//                用dom堆表格
                var table = document.createElement("table");
                table.className = 'table';
                var thead = document.createElement("thead");
                table.appendChild(thead);
                var tr = document.createElement("tr");
                thead.appendChild(tr);
                var th = document.createElement("th");
//                此处的"跑操次数”、"跑操时间"被body中的th1，th2覆盖
                th.innerHTML = "跑操次数";
                tr.appendChild(th);
                var th = document.createElement("th");
                th.innerHTML = "跑操时间";
                tr.appendChild(th);
                var tbody = document.createElement("tbody");
                table.appendChild(tbody);
//                假设解析的json文件分times、time两个“数组”，分别记录次数和时间。
                for (var j = 0; j < myObj.time.length; j++) {
                    var tr = document.createElement("tr");
                    var td = document.createElement("td");
                    td.innerHTML = myObj.times[j];
                    tr.appendChild(td);
                    var td = document.createElement("td");
                    td.innerHTML = myObj.time[j];
                    tr.appendChild(td);
                    tbody.appendChild(tr);
                }
//                实现相邻两行涂色不同
                var rows = table.getElementsByTagName("tr");
                for (var m = 0; m < rows.length; m++) {
                    if (m % 2 == 1) {
                        rows[m].className = "color1";
                    }
                    else {
                        rows[m].className = "color2";
                    }
                }
                document.getElementById("data").appendChild(table);
            }
        }
    }
    setform();