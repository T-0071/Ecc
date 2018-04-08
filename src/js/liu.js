/* 
* @Author: Marte
* @Date:   2018-03-30 16:33:54
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-06 13:07:15
*/
document.addEventListener('DOMContentLoaded', function() {console.log(23333)
 let box=document.querySelector('.main_r_x');
 let page=document.querySelector('#page');
let qty=5;
    ajax.get({
        url:'../api/lists.php',
        success:function(res){

            let ul=document.createElement('ul');
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

           box.appendChild(ul);
  //创建分页
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
                //          xhr.open('get','../api/list.php?qty='+qty,true);
                // xhr.send();


                //点击分页切换
                page.onclick=function(e){
                    if(e.target.tagName.toLowerCase()==='span'){
                        let pageNo=e.target.innerText;console.log(pageNo)

                        xhr.open('get','../api/lists.php?qty='+qty+'&page='+pageNo,true);

                        xhr.send();



                    }
                }
         imt=document.querySelectorAll('.imt');
         // imt.onmouseenter=function(){ console.log(23333)
         //    animate(imt,{opacity:0.5})
         //   } 
         //    imt.onmouseleave=function(){
         //    animate(imt,{opacity:1})
         //   }
           
           function add(){

                for(let i=0;i<imt.length;i++){
                    imt[i].onclick=function(){

                        parame(i,data);
                    }
                }
            }
            add();

                function parame(idx,data){

                    var str='';
                    for(var arr in data[idx]){
                        str+=arr+'='+encodeURI(data[idx][arr])+'&';
                    }
                    str=str.slice(0,-1);
                    location.href='datalist.html?'+str;
                }

                




      




        


 



    })
})

 