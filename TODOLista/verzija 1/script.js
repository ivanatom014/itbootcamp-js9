let liTasks = document.querySelectorAll("li");


 liTasks.forEach(li =>{
    li.addEventListener("click", ()=>{

        // 1.nacin 

        if(li.style.textDecoration == 'line-through'){
            li.style.textDecoration = 'none';
       }
        else{
            li.style.textDecoration = 'line-through';
        }
        

     //   li.classList.toggle("precrtaj")

        
    });
})

