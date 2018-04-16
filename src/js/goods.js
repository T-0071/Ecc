

// document.addEventListener('DOMContentLoaded', function() {

     require.config({
        paths:{
            jQuery:'../lib/jquery-3.2.1',
            ajax_bx:'../lib/ajax_bx',
            zoom:'../lib/jquery.zoom/jquery.gdsZoom'
        },
        shim:{
            zoom:['jQuery']
        }

    })
  require(['jQuery','ajax_bx','zoom','common'],function(){
        $('#pageHeader').load('header.html');

             $('#pageFooter').load('footer.html');
 jQuery(function($){
            $('.goods').gdsZoom({
                position:'right',
                
            });

            $('.smallList').on('click','img',function(){
                $('.goods img').attr({
                    src:this.src,
                    'data-big':this.dataset.big || this.src
                })
            })
        });

            //获取传过来的参数
            var res=location.search;
            res=res.slice(1);
            res=res.split('&');

            var date={};
            res.forEach(function(item){

                var arr=item.split('=');
                date[arr[0]]=decodeURI(arr[1]);


            })
            console.log(date)
            var Bimg = document.getElementById('Bimg');
                //把从列表页转过来的参数图片写入 id为Bimg的img中
                var Bi = document.getElementById('Bi');
                Bimg.src = date.img;
                Bi.src = date.img;
                var title=document.getElementById('title');
                var price=document.getElementById('list');
                var pl=document.getElementById('our');
                title.innerHTML=date.title;
                price.innerHTML=date.listprice;
                 pl.innerHTML=date.ourprice;


                //商品计算
                var num1 = document.getElementById('num1');
                var num2 = document.getElementById('num2');
              
                var prices = parseInt(date.ourprice);
                    var res = num1.value*prices;
                    console.log(num1.value);
                   num2.innerHTML = prices + '  <strong> &times; </strong> '+num1.value+' = '+res+'元'; 
                num1.onclick = function(){
                    //获取输入的值
                    // 计算
                    if(num1.value<=0){
                        num1.value=0;
                        return;
                    }
                       var res = num1.value*prices;
                    console.log(num1.value);
                   num2.innerHTML = prices + '  <strong> &times; </strong> '+num1.value+' = '+res+'元'; 
                }


        let btn = document.getElementsByClassName('btn')[0];
          btn.onclick = function(e){  
            var goodlist = Cookie.get('goodlist') || [];
            // console.log(goodslist)

            if(typeof goodlist === 'string'){
                goodlist = JSON.parse(goodlist);
                console.log(goodlist)
            }
                var idx;
                var guid=date.id;
                // 查找goodlist中是否已经添加过当前商品
                var has = goodlist.some(function(g,i){
                    // 遍历goodlist，当得到一个true时，终止遍历
                    idx = i;
                    return g.guid === guid;
                });

                if(has){
                    // 如果存在，则qty++
                    goodlist[idx].qty++;
                }else{
                    // 获取商品信息
                    var goodr = {
                        guid:guid,
                        title:date.title,
                        img:date.img,
                        ourprice:date.ourprice,
                        // 商品数量
                        qty:num1.value
                    }
                    // 当当前商品写入goodslist
                    goodlist.push(goodr);
                    
                }
                console.log(66666)
                document.cookie = 'goodlist='+ JSON.stringify(goodlist); 

            }
     

})