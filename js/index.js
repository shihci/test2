window.onload =function(){
    var menuBtn = document.getElementById("menu");
    var menu=document.getElementById("menu_area")
    menuBtn.addEventListener("click",()=>{
        
        menu.style.bottom="0";
        menu.style.height="100%";
    });


    // function getWorkApi(){
    //     return axios.get('./api/data.json');
    // }
    // function getResourceApi(){
    //     return axios.get('./api/WorkData.json');
    // }

    // axios.all([getWorkApi(),getResourceApi()]).then(axios.spread(function(WorkApi,ResourceApi){
    //     let allRs=WorkApi.data;
    //     let allWs=ResourceApi.data;
    //     WorkItems(allWs);

    //     ResourceItems(allRs);
        
        
    //     function Work(value){
    //         let arr=allWs.filter(function(obj){
    //             if (value === 'allWs'){
    //                 return obj;
    //             }
    //             return obj.item ===value;
    //         })
    //         WorkItems(arr);
    //     }

    //     for(var i = 0; i < els.length; i++)
    //     {
    //     console.log(els[i]);
    //     els[i].addEventListener("click",(e)=>{
    //                     Work(e.target.getAttribute("name"));
    //                 console.log(e.target.getAttribute("name"))
    //                 })
    //     }
        




    //     //進入塞選
    //     function resouse(value){
    //         let arr=allRs.filter(function(obj){
    //             if (value === 'allRs'){
    //                 return obj;
    //             }
    //             return obj.item ===value;
    //         })
    //         ResourceItems(arr);
    //     }

    //     for(var j = 0; j < els2.length; j++)
    //     {
    //     els2[j].addEventListener("click",(e)=>{
    //         resouse(e.target.getAttribute("name"));
    //                 console.log(e.target.getAttribute("name"))
    //                 })
    //     }
    //     console.log(allRs);
    //     console.log(allWs);
        
        

    // }))
    // .catch(function(error){
    //     console.log("資料遺失");
    // })

    axios.get("./api/WorkData.json")
    .then(function(res){
        let allWs=res.data;
        //進入塞選
        function Work(value){
                    let arr=allWs.filter(function(obj){
                        if (value === 'allWs'){
                            return obj;
                        }
                        return obj.item ===value;
                    })
                    WorkItems(arr);
                }
        
                for(var i = 0; i < els.length; i++)
                {
                els[i].addEventListener("click",(e)=>{
                                Work(e.target.getAttribute("name"));
                            console.log(e.target.getAttribute("name"))
                            })
                }
                WorkItems(allWs);
 
    })
    .catch(function(error){
        console.log("資料遺失");
    })

    axios.get("./api/data.json")
    .then(function(res){
        let alls=res.data;
        //進入塞選
        function resouse(value){
            let arr=alls.filter(function(obj){
                if (value === 'allRs'){
                    return obj;
                }
                return obj.item ===value;
            })
            ResourceItems(arr);
        }
        //監聽按鈕的name
       
        for(var j = 0; j < els2.length; j++)
        {
        els2[j].addEventListener("click",(e)=>{
            resouse(e.target.getAttribute("name"));
                    console.log(e.target.getAttribute("name"))
                    })
        }
    
         ResourceItems(alls);
 
    })
    .catch(function(error){
        console.log("資料遺失");
    })
   
    let workContent=document.getElementById("workContent");
    let Ws_nav=document.getElementsByClassName("work_nav")[0];
    // let Ws_navItem=Array.from(Ws_nav.children);
    var els = document.getElementsByClassName("testwork");


    function WorkItems(resArr){
        let Work="";
        resArr.forEach((item) => { 
            Work+=`
            <div class="col-6 col-md-4 col-lg-3 col-2_10">
                    <div class="work_item" onclick="window.location.href='workPage1.html';return false">
                        <img src="img/pro_test/pro_sm_1.png" alt="">
                        <div class="hover_inform" >
                            <div class="work_text">
                                <div>${item.item}</div>
                                <div>${item.name}</div>
                            </div>
                        </div>
                    </div>
                </div>
                ` 
        });
        workContent.innerHTML=Work;
    }



    let resourceContent=document.getElementById("resourceContent");
    let Rs_nav=document.getElementsByClassName("resource_nav")[0];
    let els2=document.getElementsByClassName("testResource")
    // let Rs_navItem=Array.from(Rs_nav.children);
    //Resource畫面渲染
    function ResourceItems(resArr){
        let resource="";
        resArr.forEach((item) => { 
            resource+=`
            <div class="col-6 col-md-4 col-lg-3 col-2_10">
                    <div class="resource_item" onclick="window.location.href='workPage1.html';return false">
                        <img src="img/pro_test/rs_beizjp.png" alt="">
                        <div class="hover_resource" >
                            <div class="resource_text">
                                <div class="rs_t1">${item.name}</div>
                                <div class="rs_t2">${item.subtitle}</div>
                                <p class="rs_p">${item.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
                ` 
        });
        resourceContent.innerHTML=resource;
    }


    

}

