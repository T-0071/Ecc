
document.addEventListener('DOMContentLoaded',()=>{

        function goods(){
            var tabte = tabs.children[0].children;
             // console.log( tabte)

             var tabConte = tabs.children[1].children;
             console.log( tabConte)

            // 1）初始化
            //tabte[0].className = 'active';
            for(var i=0;i<tabte.length;i++){
                if(i>0){
                    tabConte[i].style.display = 'none';
                }

                // 绑定点击事件
                tabte[i].onmouseover = function(){
                    // * 高亮显示当前tab
                    // 遍历去除其他高亮
                    // （关键：获取点击的index值）
                    var idx;
                    for(var i=0;i<tabte.length;i++){
                        if(tabte[i] === this){
                            idx = i;
                        }

                        // 去除其他高亮
                        tabte[i].className = '';

                        // 隐藏其他图片
                        tabConte[i].style.display = 'none';
                    }

                    // 高亮当前
                    this.className = 'active';


                    // * 切换相应的图片，隐藏其他图片
                    tabConte[idx].style.display = 'block';

                }
            }
        }


             var tabs=document.querySelector('.tabs');
              
                goods();

             var tabs=document.querySelector('.tabc');
            
                goods();

                 var tabs=document.querySelector('.tabn');
            
                goods();
                 var tabs=document.querySelector('.tabo');
               
                goods();
             
})