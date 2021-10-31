window.addEventListener("load", function () {
    // 手机号验证区域
    var inp_phone = document.querySelector(".phone");
    var info_phone = document.querySelector(".info_phone");

    inp_phone.onblur = function () {
        if (this.value.length == 11) {
            info_phone.className = "sucess info_phone";
            info_phone.innerHTML = "输入格式正确";
        } else if (this.value.length == 0) {
            info_phone.className = "notice info_phone";
            info_phone.innerHTML = "请输入手机号";
        } else {
            info_phone.className = "error info_phone";
            info_phone.innerHTML = "手机号码格式不正确，请重新输入";
        }
    };

    // 短信验证码验证区域

    var message = document.querySelector(".message");
    var info_message = document.querySelector(".info_message");

    message.onblur = function () {
        if (this.value.length == 6) {
            info_message.className = "sucess info_message";
            info_message.innerHTML = "输入格式正确";
        } else if (this.value.length == 0) {
            info_message.className = "notice info_message";
            info_message.innerHTML = "请输入6位短信验证码";
        } else {
            info_message.className = "error info_message";
            info_message.innerHTML = "验证码不正确，请重新输入";
        }
    };

    // 密码格式验证区域
    var pwd = document.querySelector(".pwd");
    var info_pwd = document.querySelector(".info_pwd");

    pwd.onblur = function () {
        if (this.value.length >= 6) {
            info_pwd.className = "sucess info_pwd";
            info_pwd.innerHTML = "输入格式正确";
        } else if (this.value.length == 0) {
            info_pwd.className = "notice info_pwd";
            info_pwd.innerHTML = "请输入密码，不少于6位数";
        } else {
            info_pwd.className = "error info_pwd";
            info_pwd.innerHTML = "密码不能少于6位，请重新输入";
        }
    };
});
