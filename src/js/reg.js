 document.addEventListener('DOMContentLoaded',function(){

        let username = document.querySelector('#username');
        let password = document.querySelector('#password');
         let yzm = document.querySelector('#yzm');
          let tel= document.querySelector('#tel');
          let yz = document.querySelector('.yz');
        let btn = document.querySelector('.btn');
        let cc = document.querySelector('.cc');
        let output = document.querySelector('.output');

        let rel = document.querySelector('.rel');
        // let group = username.parentNode;

       let res = document.querySelector('.res');





        tel.onblur = function() {
        let _tel=tel.value
        let reg=/^1[34578]\d{9}$/i;
        if(!reg.test(_tel)) {
            res.innerHTML = '手机号不合法';


            return false;
            res.style.display="block";
        }
    }

        username.onblur = function(){

            let _username = username.value;

           
        if(_username !== '') {



            ajax({
                url:'../api/reg.php',
                data:{username:_username},
                success:function(data){
                    console.log(data)
                    if(data === 'success'){
                        res.innerHTML = '';
                    }else{
                       
                        cc.style.display="block";
                        cc.innerHTML = _username +'已注册'
                    }
                }
            })
        }
    }

  

     // _password;
    password.onblur = function() {
      let _password = password.value;
        var reg = /^\S{6,20}$/
        if(!reg.test(_password)) {
            output.innerHTML = '密码长度不少于6不大于20';
            return false;
        }
    }

paw.onblur = function() {
    let _password = password.value;
        var _paw = paw.value;
        if(_password != _paw) {
            output.innerHTML = '两次密码输入不一致';
        }
    }

function add() {

        //声明一个变量来存放随机验证码
        var sum = '1234567890ab';

        //利用for循环遍历生成四位数的验证码
        for(var i = 0; i < 4; i++) {
            var num = parseInt(Math.random() * 10);

            sum += num;

        }
        yz.innerHTML = sum;
    }
    add();

    btn.onclick = function() {
        add();
    }

    yzm.onblur = function() {
        //判断输入的验证码与生成的验证码是否一致
        if(yzm.value != yz.innerHTML) {
            //清空输入框的值
            yzm.value = '';
            output.innerHTML = '验证码输入有误请重新输入';
            add();
        }
    }



        //注册
        btn.onclick = function(){

            let _username = username.value;

            let _password = password.value;

            
            ajax({
                url:'../api/reg.php',
                data:{
                    username:_username,
                    password:_password,
                    type:'reg'
                },
                success:function(data){
                    console.log(data)
                    if(data =='success'){ 
                        output.innerHTML="注册失败，请稍后再试"
                    }else{

                        reg.innerHTML = '注册成功！';
                        location.href='login.html';
                        

                    }
                }
            })
        }

















    })


