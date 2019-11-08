$(document).ready(function () {
    $('#signupForm').validate({
        // 表单验证规则
        rules: {
            username: {
                required: true,
                minlength: 3
            },
            password: {
                required: true,
                minlength: 6,
                maxlength: 16
            },
            confirm_password: {
                required: true,
                minlength: 6,
                maxlength: 16,
                equalTo: '#password'
            }
        },
        // 表单提示信息
        messages: {
            username: {
                required: "请输入用户名",
                minlength: "用户名最少由 3 个字符组成"
            },
            password: {
                required: "请输入密码",
                minlength: "密码长度不能小于 5 个字符"
            },
            confirm_password: {
                required: "请输入密码",
                minlength: "密码长度不能小于 5 个字符",
                equalTo: "两次密码输入不一致"
            }
        },

        // 表单提交方式
        submitHandler: function (form) {


            // jQuery 给我们提供了一个方法
            // serialize() 快速从表单中获取数据的方法
            // $(form).serialize()

            $(form).serialize()
            alert("注册成功！")

            $.ajax({
                url: '../server/register.php',
                type: 'POST',
                data: $(form).serialize(),
                error: function () {
                    console.log('出错了')
                }
            })

            window.location.href = 'http://localhost/xiaomi/dist/pages/login.html'

        }
    })
})