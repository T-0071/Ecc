document.addEventListener('DOMContentLoaded', function() {

  jQuery(function($){
                  $('#pageFooter').load('footer.html');

        });
         
        var carList = document.getElementById('carList');
        var subPrice = document.querySelector('.subPrice');console.log(subPrice)
        var btnClear = document.getElementById('btnClear');
        var goodlist;

        render();
        function render(){
        
            // 获取cookie
            // goodlist = Cookie.get('goodlist');
        goodlist = Cookie.get('goodlist') ;   
            if(goodlist.length === 0){
                goodlist = [];
            }else{
                goodlist = JSON.parse(goodlist)
            }
            console.log(goodlist);
            // 商品金额
            var total = 0;


            // 根据数据生成html结构
            var ul = document.createElement('ul');
            ul.innerHTML = goodlist.map(function(goodr){
                 var singleTotal = goodr.ourPrice*goodr.qty;
                // 计算总价
                total += goodr.ourprice * goodr.qty;

                return `
                <li data-guid="${goodr.guid}">  
                        <img src="${goodr.img}">
                        <h4>${goodr.title}</h4>
                        <div class="qtys"><button class="minus">-</button>${goodr.qty}<button class="add">+</button></div>  
                        <p class="price">${goodr.ourprice}<span>&times;</span>${goodr.qty}</p>
                        <span class="btn-close">&times;</span> 
                    </li>`
            }).join('');
 
            // 写入前先清空
            carList.innerHTML = '';
            carList.appendChild(ul);

            // 计算总价
            subPrice.innerHTML = total.toFixed(2);
        }

        // 清空购物车
        btnClear.onclick = function(){
            Cookie.remove('goodlist');

            // 清空购物车后重新渲染页面
            render();

            return false;
        }

        // 删除单个商品
        // 找出cookie中的当前商品，并删除
        // 重新写入cookie
        carList.onclick = function(e){
            e = e || window.event;

            var target = e.target || e.srcElement;

            if(target.className === 'btn-close'){
                // 获取当前li
                var currentLi = target.parentNode;

                // 先获取guid
                var guid = currentLi.getAttribute('data-guid');
                // console.log(12333)
                for(var i=0;i<goodlist.length;i++){
                    if(goodlist[i].guid === guid){
                        goodlist.splice(i,1);

                        break;
                    }

                }

                // 重新写入cookie
                // 字符串
                Cookie.set('goodlist',JSON.stringify(goodlist));

                render();
                    return false;

                
            }

            //商品数量的减操作
       if(target.className == 'minus'){
            //获取到当前li
            var currentLi = target.parentNode.parentNode;
            console.log(currentLi);
            var guid = currentLi.getAttribute('data-guid'); 
            for(var i = 0;i<goodlist.length;i++){
                if(goodlist[i].guid === guid){
                    //商品数量的减一
                    var count = goodlist[i].qty--;
                    //当数量少于等于1时，删除cookie。
                    if(count<=1){
                        goodlist.splice(i,1);
                    }
                    break;
                }
            }
            //重新写入cookie
            Cookie.set('goodlist',JSON.stringify(goodlist));
            //刷新界面
            render();
            return false;
       }


              //商品数量的增加操作
       if(target.className == 'add'){
            //获取到当前li
            var currentLi = target.parentNode.parentNode;
            console.log(currentLi);
            var guid = currentLi.getAttribute('data-guid'); 
            for(var i = 0;i<goodlist.length;i++){
                if(goodlist[i].guid === guid){
                    //商品数量的增加
                    var count = goodlist[i].qty++;
                    break;
                }
            }
            //重新写入cookie
            Cookie.set('goodlist',JSON.stringify(goodlist));
            //刷新界面
            render();
            return false;
       }
        }
let gou=document.querySelector('.gou');
ajax.get({
        url:'../api/car.php',
        success: function(data) {
            console.log(data)
            //创建一个ul
            var ul = document.createElement('ul');
            ul.innerHTML = data.map(function(item) {
                return `
                    <li>
                    <h4 class="imgR"><img  src="${item.img}"></h4>
                    <p class="title">${item.title}</P><br/>
                    <p class="lists">￥${item.listprice}</P>
                    <p class="ours">E宠价：<del>￥${item.ourprice}</del></P>
                    </li>
                            `
            }).join('');
             gou.appendChild(ul);
        }
})


let wu=document.querySelector('.wu');
ajax.get({
        url:'../api/car.php',
        success: function(data) {
            console.log(data)
            //创建一个ul
            var ul = document.createElement('ul');
            ul.innerHTML = data.map(function(item) {
                return `
                    <li>
                    <h4 class="imgt"><img  src="${item.img}"></h4>
                    <p class="title">${item.title}</P><br/>
                    <p class="lists">￥${item.listprice}</P>
                    <p class="ours">E宠价：<del>￥${item.ourprice}</del></P>
                    </li>
                            `
            }).join('');
             wu.appendChild(ul);
        }
})



})