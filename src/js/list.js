/* 
* @Author: Marte
* @Date:   2018-03-30 16:33:54
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-06 21:00:34
*/
document.addEventListener('DOMContentLoaded', function() {
 let box=document.querySelector('.main_r_x');
 let page=document.querySelector('#page');
 let pi=document.querySelector('#pi');
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
                        <li>
                        <h4 class="imt"><img src="${item.img}"></h4>
                        <P>${item.title}</P>
                        <span class="list"><del>${item.listprice}</del></span>
                        <span class="op">${item.ourprice}</span><br/>
                        <i>${item.sale}</i>
                        <i>${item.interact}</i>
                        </li>
                `
            }).join('');

            box.innerHTML="";

           box.appendChild(ul);
}

     //加码数据
        var params ='';
        // console.log(params);
        var lis = box.getElementsByTagName('li');
        // console.log(lis);
        for(var i = 0;i<lis.length;i++){
            lis[i].id = i;
            console.log(lis[i].id);
            lis[i].onclick = function(){
               for(var key in res[this.id]){
                // console.log(key,resl[this.id][key]);
                params += key + '='+encodeURI(res[this.id][key])+'&';
               } 
               params=params.slice(0,-1);
                console.log(params);
                // location.href = '01_商品详情页面.html?'+params;
                location.href = 'goods.html?'+params;
            }
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

 