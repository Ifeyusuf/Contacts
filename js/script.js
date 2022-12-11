let input= document.querySelector("#input");

input.addEventListener ("keyup", () =>{
    let input= document.querySelector("#input").value;
    input.toLowerCase();

    let list= document.querySelectorAll(".list-item");
     
    for (i = 0; i < list.length; i++){

        if (!list[i].textContent.toLowerCase().includes(input)){
            list[i].style.display = "none"
        }
        
        else{
            list[i].style.display = "block"
        }
    }
})