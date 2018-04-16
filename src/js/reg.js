 document.addEventListener('DOMContentLoaded',function(){

        let username = document.querySelector('#username');
        let password = document.querySelector('#password');
        let paw = document.querySelector('#paw');
        let yzm = document.querySelector('#yzm');
        let tel= document.querySelector('#tel');
        let y_zm = document.querySelector('#y_zm');
        let btn = document.querySelector('.btn');
        let cc = document.querySelector('.cc');
        let output = document.querySelector('.output');
        let rel = document.querySelector('.rel');
        let res = document.querySelector('.res');

        tel.onblur=function(){
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
                data:{
                    username:_username,
                    type:'type'
                },
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


 var str='abcdefghijklmnopqrstuvwxyz0123456789';
              btn.onblur=function(){
                       vs();
               }
                     vs();
                      function vs(){                    
                    var _code='';
                  for(var i=0;i<4;i++){
                    var index=parseInt(Math.random()*str.length);
                          _code+=str[index];
                        }
                  
                         y_zm.innerHTML=_code.toUpperCase();
                             
                       }

                       yzm.onblur=function(){
                        var _yzm = yzm.value;
                        var yzms=y_zm.value;
                        if(_yzm === ''){
                          output.innerHTML = '请输入验证码';
                            return false;
                        }
                        if(_yzm === yzms){
                            // alert('验证正确')
                         output.innerHTML = '验证正确';
                            return true;
                       }
                        else{
                         output.innerHTML = '验证错误';
                            return false;
                        }


                                   }
                 var _password;
                password.onblur = function() {
                   _password = password.value;
                    var res = /^[^\s]{8,20}$/
                    if(!res.test(_password)) {
                        output.innerHTML = '密码长度不少于8不大于20';
                        return false;
                    }
                }

            paw.onblur = function() {
                 var _password = password.value;
                    var _paw = paw.value;
                    if(_password != _paw) {
                        output.innerHTML = '两次密码输入不一致';
                        return false;
                    }
                }



        //注册
        btn.onclick = function(){

            let _username = username.value;

            let _password = password.value;
             let _paw = paw.value;
            ajax({
                url:'../api/reg.php',
                data:{
                    username:_username,
                    password:_password,
                     paw:_paw,
                    type:'resl'
                },
                success:function(resl){
                    if(resl =='success'){ console.log(resl)
                      output.innerHTML = '注册成功！';
                     location.href='login.html';
                     
                    }
                    else{ 
                    output.innerHTML="注册失败";
                    

                       
                    }
                }
            })
    
    }

















    })


