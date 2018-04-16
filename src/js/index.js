// document.addEventListener('DOMContentLoaded',()=>{
    require.config({
        paths:{
            jQuery:'../lib/jquery-3.2.1',
            ajax_bx:'../lib/ajax_bx'
        }

    })


    require(['jQuery','ajax_bx'],function(){
        $('#pageHeader').load('html/header.html');
        
             $('#pageFooter').load('html/footer.html');

        var page = document.getElementById('page');
        // spArr是一个类数组，索引值对应每一个span标签
        var sp = page.children;
        // console.log(sp);
        var i=0;
        showTu();
        // 显示图片与圆圈的函数（）
       
        function showTu(){
            i++;
           
            var j=i-1;
            if(j<=0){
             
                j=5;
                
            }
             // sp[j-1].style.background = '#ff0';
            if(i>5){
              
                i=1;
            }

            tupian.src = '../img/h' +i + '.jpg';
            // console.log(tupian)
            // 同时显示对应的小圆圈
              sp[j-1].style.background = '#fff';
            sp[i-1].style.background = '#999';
         
        }
        // 定时轮播时间
        var timer = setInterval(showTu,2000);
        // 鼠标移上去暂停
        tupian.onmouseover = function(){
            clearInterval(timer);
        }
        // 鼠标移走，轮播继续
        tupian.onmouseout = function(){
            timer = setInterval(showTu,2000);
        }
        // 给每个span标签绑定点击事件
        
        // 点击函数
        function getClk(){
            
            clearInterval(timer);
    
            sp[i-1].style.background = '#fff';
            // 添加点击的圆圈的背景颜色
            this.style.background = '#999';
            // 并获取当前点击小圆圈的位置
            var _number = this.className;
            _number = _number.charAt(1);
            console.log('this.className:',_number,typeof(_number));
            tupian.src = '../img/h' +_number + '.jpg';
         
            i = _number;
            timer = setInterval(showTu,2000);
            
        }


        var tab=document.querySelector('.tab');
  
         var tabItem = tab.children[0].children;
          // console.log(tabItem)
         var tabContent = tab.children[1].children;
         // console.log( tabContent)
         for(var i=0;i<tabItem.length;i++){
            if(i>0){
                 tabContent[i].style.display='none';
            }
            tabItem[i].onmouseover=function(){
                var idx;
                for(var i=0;i<tabItem.length;i++){
                    if(tabItem[i]===this){
                        idx=i;
                    }
                    tabItem[i].className="";

                    tabContent[i].style.display='none';
                }
                this.className="active";

                tabContent[idx].style.display="block";
            }
         }


let ulss=document.querySelector('.ulss');
    ajax.get({
        url:'../api/home.php',
        success:function(data){

            let ul=document.createElement('ul');
            ul.innerHTML=data.map(function(item){
                if(item.category=='a'){

                    return `
                        <li>

                        <h4 class="iml">
                        <img src="${item.img}"></h4>
                        <p class="title">${item.title}</p>
                        <span class="price">￥${item.price}</span>
                        </li>`
                
                }
              
            }).join('');

        ulss.appendChild(ul);

            iml=document.getElementsByClassName('iml');
      

                for(let i=0;i<iml.length;i++){
                    iml[i].onclick=function(){

                        parame(i,data);
                    }
                }
                function parame(idx,data){

                    var str='';
                    for(var arr in data[idx]){
                        str+=arr+'='+encodeURI(data[idx][arr])+'&';
                    }
                    str=str.slice(0,-1);
                    location.href='list.html?'+str;
                }
    }

    })


let ulo=document.querySelector('.ulo');
    ajax.get({
        url:'../api/home.php',
        success:function(data){
            let ul=document.createElement('ul');
            ul.innerHTML=data.map(function(item){
                if(item.category=='b'){

                    return `
                        <li>

                        <h4 class="iml">
                        <img src="${item.img}"></h4>
                        <p class="title">${item.title}</p>
                        <span class="price">￥${item.price}</span>
                        </li>`
                
                }
              
            }).join('');

          ulo.appendChild(ul);
            iml=document.getElementsByClassName('iml');
        
                for(let i=0;i<iml.length;i++){
                    iml[i].onclick=function(){

                        parame(i,data);
                    }
                }
                function parame(idx,data){

                    var str='';
                    for(var arr in data[idx]){
                        str+=arr+'='+encodeURI(data[idx][arr])+'&';
                    }
                    str=str.slice(0,-1);
                    location.href='list.html?'+str;
                }
    }

    })


        let ulx=document.querySelector('.ulx');

    ajax.get({
        url:'../api/home.php',
        success:function(data){

            let ul=document.createElement('ul');
            ul.innerHTML=data.map(function(item){
                if(item.category=='a'){

                    return `
                        <li>

                        <h4 class="iml">
                        <img src="${item.img}"></h4>
                        <p class="title">${item.title}</p>
                        <span class="price">￥${item.price}</span>
                        </li>`
                
                }
              
            }).join('');

        ulx.appendChild(ul);

            iml=document.getElementsByClassName('iml');
     

                for(let i=0;i<iml.length;i++){
                    iml[i].onclick=function(){

                        parame(i,data);
                    }
                }
                function parame(idx,data){

                    var str='';
                    for(var arr in data[idx]){
                        str+=arr+'='+encodeURI(data[idx][arr])+'&';
                    }
                    str=str.slice(0,-1);
                    location.href='list.html?'+str;
                }

    }

    })


        let ulp=document.querySelector('.ulp');
            ajax.get({
                url:'../api/home.php',
                success:function(data){
                    let ul=document.createElement('ul');
                    ul.innerHTML=data.map(function(item){
                        if(item.category=='b'){

                    return `
                        <li>

                        <h4 class="iml">
                        <img src="${item.img}"></h4>
                        <p class="title">${item.title}</p>
                        <span class="price">￥${item.price}</span>
                        </li>`
                
                }
              
            }).join('');

          ulp.appendChild(ul);

            iml=document.getElementsByClassName('iml');
                for(let i=0;i<iml.length;i++){
                    iml[i].onclick=function(){

                        parame(i,data);
                    }
                }

                function parame(idx,data){

                    var str='';
                    for(var arr in data[idx]){
                        str+=arr+'='+encodeURI(data[idx][arr])+'&';
                    }
                    str=str.slice(0,-1);
                    location.href='list.html?'+str;
                }
    }

    })
        let ulf=document.querySelector('.ulf');

            ajax.get({
                url:'../api/home.php',
                success:function(data){
            let ul=document.createElement('ul');
            ul.innerHTML=data.map(function(item){
                if(item.category=='a'){

                    return `
                        <li>

                        <h4 class="iml">
                        <img src="${item.img}"></h4>
                        <p class="title">${item.title}</p>
                        <span class="price">￥${item.price}</span>
                        </li>`
                }
              
            }).join('');

        ulf.appendChild(ul);
            iml=document.getElementsByClassName('iml');
       
                for(let i=0;i<iml.length;i++){
                    iml[i].onclick=function(){

                        parame(i,data);
                    }
                }
                function parame(idx,data){

                    var str='';
                    for(var arr in data[idx]){
                        str+=arr+'='+encodeURI(data[idx][arr])+'&';
                    }
                    str=str.slice(0,-1);
                    location.href='list.html?'+str;
                }

                



    }

    })


        let ula=document.querySelector('.ula');
            ajax.get({
                url:'../api/home.php',

        success:function(data){
            let ul=document.createElement('ul');
            ul.innerHTML=data.map(function(item){
                if(item.category=='b'){

                    return `
                        <li>

                        <h4 class="iml">
                        <img src="${item.img}"></h4>
                        <p class="title">${item.title}</p>
                        <span class="price">￥${item.price}</span>
                        </li>`
                
                }
              
            }).join('');

          ula.appendChild(ul);
            iml=document.getElementsByClassName('iml');
    

                for(let i=0;i<iml.length;i++){
                    iml[i].onclick=function(){

                        parame(i,data);
                    }
                }
                function parame(idx,data){

                    var str='';
                    for(var arr in data[idx]){
                        str+=arr+'='+encodeURI(data[idx][arr])+'&';
                    }
                    str=str.slice(0,-1);
                    location.href='list.html?'+str;
                }
    }

    })


let upr=document.querySelector('.upr');


    ajax.get({
        url:'../api/home.php',
        // data:{category:a},
        success:function(data){

            let ul=document.createElement('ul');
            ul.innerHTML=data.map(function(item){
                if(item.category=='a'){

                    return `
                        <li>

                        <h4 class="iml">
                        <img src="${item.img}"></h4>
                        <p class="title">${item.title}</p>
                        <span class="price">￥${item.price}</span>
                        </li>`
                
                }
              
            }).join('');

        upr.appendChild(ul);
            iml=document.getElementsByClassName('iml');
                for(let i=0;i<iml.length;i++){
                    iml[i].onclick=function(){

                        parame(i,data);
                    }
                }
                function parame(idx,data){

                    var str='';
                    for(var arr in data[idx]){
                        str+=arr+'='+encodeURI(data[idx][arr])+'&';
                    }
                    str=str.slice(0,-1);
                    location.href='list.html?'+str;
                }

    }

    })


let upl=document.querySelector('.upl');
    ajax.get({
        url:'../api/home.php',
        success:function(data){
            let ul=document.createElement('ul');
            ul.innerHTML=data.map(function(item){
                if(item.category=='b'){

                    return `
                        <li>

                        <h4 class="iml">
                        <img src="${item.img}"></h4>
                        <p class="title">${item.title}</p>
                        <span class="price">￥${item.price}</span>
                        </li>`
                
                }
              
            }).join('');

          upl.appendChild(ul);
            iml=document.getElementsByClassName('iml');
       
                for(let i=0;i<iml.length;i++){
                    iml[i].onclick=function(){

                        parame(i,data);
                    }
                }
                function parame(idx,data){
                    var str='';
                    for(var arr in data[idx]){
                        str+=arr+'='+encodeURI(data[idx][arr])+'&';
                    }
                    str=str.slice(0,-1);
                    location.href='list.html?'+str;
                }
    }

    })



    })
