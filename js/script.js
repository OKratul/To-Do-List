let submit =document.getElementById('submit');

submit.addEventListener('click', function (){
    let list = document.getElementById('list').value;
    
    let DateTime = new Date();
    let hrs = DateTime.getHours();
    let min = DateTime.getMinutes();
    let sec =DateTime.getSeconds();
    let month = DateTime.getMonth();
    let dateToday = DateTime.getDate();
    let year = DateTime.getFullYear();
    let details = document.getElementById('detailes').value;

    let totalList = document.querySelector(".total-list");
    let listCard = document.createElement('div');
    listCard.classList.add('list')

    if (list=="", details==""){
        alert("Plese enter List Title and description");
    }else{
        listCard.innerHTML = `
       
             <h3 class="text-center">Your today list</h3>
            <h3 class="title">Title: ${list}</h3>
            <h5>Date: ${dateToday}/${month}/${year}</h5>
            <h5>Time: ${hrs-12}-${min}-${sec} <span id="session"></span></h5>
           <p class="wd">Work Description:- ${details}</p>
           <div> 
                <button class="delete" type="button">Delete</button>
                <button id="edit"  type="button">Edit</button>
                <button id="save" type="button">Save</button>
            </div>  `;

        document.getElementById('list').value = "";
        document.getElementById('detailes').value = "";
        totalList.appendChild(listCard); 
       
        }
    let dele = document.querySelectorAll(".delete");
         for(let i=0; i<dele.length; i++){
            dele[i].addEventListener('click', ()=>{
                totalList.removeChild(listCard);
            })
         } 
       
    
    let wd = document.querySelectorAll('wd');
    let edit = document.getElementById('edit');

    edit.addEventListener('click',function () {
        let title = document.querySelector('.title'); 

        title.contentEditable=true;
        save.style.background="green";
    })

    let save = document.getElementById('save');
    save.addEventListener('click',function () {
        let title = document.querySelector('.title'); 

        title.contentEditable=false;
        save.style.background="transparent";
    })
       
    let listA=document.querySelectorAll(".list");

    
 
    
        
    let session= document.getElementById("session");
    if (hrs >= 12){
        session.innerText="PM";
    }
    else{
        
        session.innerText="AM";
    }
    if (hrs > 12){
        hrs = hrs-12;
    }

  
    
    
} )