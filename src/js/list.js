
     require.config({
        paths:{
            jQuery:'../lib/jquery-3.2.1',
            ajax_bx:'../lib/ajax_bx'
         
        }

    })
  require(['jQuery','ajax_bx','common'],function(){
             // $('#pageHeader').load('header.html');
             $('#pageFooter').load('footer.html');
    
 let box=document.querySelector('.main_r_x');
 let page=document.querySelector('#page');
 let pi=document.querySelector('#pi');console.log(pi);
let qty=24;
   let status = [200,304];

            // ajax请求
            let xhr = new XMLHttpRequest();
            xhr.onload = function(){
                if(status.includes(xhr.status)){
                    let res = JSON.parse(xhr.responseText);
                    console.log(23444)
            let ul=document.createElement('ul');
            goodes();
                    function goodes(){
            ul.innerHTML= res.data.map(function(item){
                return `
                        <a href="#" class="details"><li data-guid="${item.id}">
                        <h4 class="imt"><img src="${item.img}"></h4>
                        <P>${item.title}</P>
                        <span class="list"><del>${item.listprice}</del></span>
                        <span class="op">${item.ourprice}</span><br/>
                        <i>${item.sale}</i>
                        <i>${item.interact}</i>
                        </li></a>
                `
            }).join('');

            box.innerHTML="";

           box.appendChild(ul);


    }
     
         var change=1;
        pi.onclick=function(){
            if(change==1){
                res.data.sort(function(a,b){
                return a.ourprice-b.ourprice;
                });
          
            goodes();
             change=2;
         //li[span].style.background = "url(../img/a2.png)";
            }else if(change==2){
                res.data.sort(function(a,b){
                return a.ourprice-b.ourprice;
                }).reverse();
               
                goodes();
                change=1;
            //li[span] .style.background = "url(../img/a1.png)";
       
            } 
        } 
         let pageLen=Math.ceil(res.total/res.qty);

                page.innerHTML='';

                for(let i=0;i<pageLen;i++)
                {
                    let span=document.createElement('span');

                    span.innerText=i+1;console.log(span.innerText)

                    if(i===res.page-1){console.log(i)

                        span.className='active';

                    }

                    page.appendChild(span);
                }


     //加码数据 传参
        var params ='';
        var lis = box.getElementsByTagName('li');
        for(var i = 0;i<lis.length;i++){
            lis[i].id = i;
            lis[i].onclick = function(){
               for(var key in res.data[this.id]){
                params += key + '='+encodeURI(res.data[this.id][key])+'&';
               } 
               params=params.slice(0,-1);
                console.log(params);
                location.href = 'goods.html?'+params;
            }
        }


    //          document.onclick=function(e){
        
    //     if(e.target.className=='details'){console.log(555);console.log(2333333)
    //         var data_guid=e.target.parentNode.parentNode.getAttribute("data-guid");
    //         // console.log(data_id)
    //          e.target.href="goods.html?id="+data_guid;
    //     }
    // }







            }
        }  
    xhr.open('get','../api/lists.php',true);
                xhr.send();
  //创建分页
                //点击分页切换
                page.onclick=function(e){
                    if(e.target.tagName.toLowerCase()==='span'){
                        let pageNo=e.target.innerText;console.log(pageNo)

                        xhr.open('get','../api/lists.php?qty='+qty+'&page='+pageNo,true);

                        xhr.send();



                    }
                }
    
})

 