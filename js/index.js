window.addEventListener("load", function () {
    // 鼠标经过轮播图显示按钮
    var arrow_l = document.querySelector(".arrow-l");
    var arrow_r = document.querySelector(".arrow-r");
    var pic = document.querySelector(".pic");
    pic.addEventListener("mouseenter", function () {
        arrow_l.style.display = "block";
        arrow_r.style.display = "block";
        // 鼠标经过轮播图停止自动播放
        clearInterval(timer);
        timer = null;
    });
    pic.addEventListener("mouseleave", function () {
        arrow_l.style.display = "none";
        arrow_r.style.display = "none";
        // 鼠标离开恢复定时器自动播放
        timer = setInterval(function () {
            arrow_r.click();
        }, 2000);
    });

    //动态生成小圆圈
    var ul = pic.querySelector("ul");
    var ol = pic.querySelector(".circle");
    var picWidth = pic.offsetWidth;
    for (var i = 0; i < ul.children.length; i++) {
        // 创建一个li
        var li = document.createElement("li");
        // 记录每个小圆圈的索引号 自定义属性
        li.setAttribute("index", i);
        // 把li插入到ol里面
        ol.appendChild(li);
        // 生成li的同时绑定点击事件 排他思想
        li.addEventListener("click", function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = "";
            }
            this.className = "current";
            // 点击小圆圈移动图片
            var index = this.getAttribute("index");
            //当我们点击了某个li 要把这个li的索引号给circle 和 num
            num = index;
            circle = index;
            // console.log(picWidth);
            // console.log(index);
            animate(ul, -index * picWidth);
        });
    }
    // 默认把ol的第一个li类名改为current
    ol.children[0].className = "current";
    // 克隆第一张图片li放到ul最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    // 点击右侧按钮 图片向右滚动一张
    var num = 0;
    // 设置一个变量代表小圆圈
    var circle = 0;
    // 设置节流阀 flag
    var flag = true;
    arrow_r.addEventListener("click", function () {
        if (flag) {
            flag = false;
            // 如果走到了最后一张图片 切换为第一张图片
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;

            animate(ul, -num * picWidth, function () {
                flag = true; //节流阀打开
            });

            // 小圆圈跟随右按钮改变
            circle++;
            if (circle == 3) {
                circle = 0;
            }
            for (var i = 0; i < ol.children.length; i++) {
                // 先清除所有小圆圈的样式
                ol.children[i].className = "";
                // 给当前小圆圈current类
                ol.children[circle].className = "current";
            }
        }
    });

    // 点击左侧按钮 图片向右滚动一张
    var num = 0;
    // 设置一个变量代表小圆圈
    var circle = 0;
    arrow_l.addEventListener("click", function () {
        if (flag) {
            flag = false;
            // 如果走到了第一张图片 切换为最后一张图片
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * picWidth;
            }
            num--;

            animate(ul, -num * picWidth, function () {
                flag = true; //打开节流阀
            });
            // 小圆圈跟随左按钮改变

            if (circle == 0) {
                circle = 3;
            }
            circle--;
            for (var i = 0; i < ol.children.length; i++) {
                // 先清除所有小圆圈的样式
                ol.children[i].className = "";
                // 给当前小圆圈current类
                ol.children[circle].className = "current";
            }
        }
    });

    // 定时自动播放功能
    var timer = setInterval(function () {
        // 手动调用点击事件
        arrow_r.click();
    }, 2000);
});
