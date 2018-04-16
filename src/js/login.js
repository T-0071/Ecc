     document.addEventListener('DOMContentLoaded',function(){

        let username = document.querySelector('#username');
        let password = document.querySelector('#password');
        let btnReg = document.querySelector('.dd');
        let regl = document.querySelector('.regl');
        btnReg.onclick=function(){
            let _username=username.value;
            let _password=password.value;

            ajax({

                url:'../api/login.php',
                data:{
                    username:_username,
                    password:_password
                },
                success:function(data){
                    // console.log(data)

                    if(data === 'success'){
                        location.href='../index.html';
                    }else if(data === 'fail'){
                        regl.innerHTML='登录失败！';

                    }
                }
            })
        }











})