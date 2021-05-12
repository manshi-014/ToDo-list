var input = document.getElementById("input")
var item = document.getElementById("item")
var btn = document.getElementById("btn")

btn.addEventListener("click",function(){
    var create = document.createElement('p')
    create.innerText = input.value
    create.classList.add('p-style')
    item.appendChild(create)
    input.value = ''
    var button = document.createElement('button')
    button.innerText = "Delete"
    button.classList.add('del-btn')
    item.appendChild(button)
    button.addEventListener("click",()=>{
       create.innerText = null
       button.style.display = "none"
    })
})
 