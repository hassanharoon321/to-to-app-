var list = document.getElementById("list")

function addToDo(){
    var todo_item = document.getElementById("todo-item");

    //Add Item Section
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)

    li.setAttribute("class","li-text")

    //Delete Button
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delBtn.setAttribute("class","btn btn-outline-danger li-btn")
    delBtn.appendChild(delText)
    delBtn.setAttribute("onclick","deleteItem(this)")

    //edit button
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)

    editBtn.setAttribute("class","btn btn-outline-warning li-btn")
    editBtn.setAttribute("onclick","editItem(this)")

    li.appendChild(editBtn)
    li.appendChild(delBtn)
    
    //ul tum append karloo li or us kai text ko
    list.appendChild(li)

    //mai jab bh first input value do us kai bad wo empty hoo jai
    todo_item.value = ""
}

function deleteItem(get){
    get.parentNode.remove();

}

function deleteAll(){
    list.innerHTML = " "
}


function editItem(get){
    var val = get.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit Value",val)

    get.parentNode.firstChild.nodeValue = editValue
}



//document.getElementbyId("id")  ==> Ye html se id leta hai

//document.craeteElement("button")  ==> ye Html ka opening or closing tag bnata hai

//document.craeteTextNode("Submit")  ==> ye text hai jo kai koi se bh tag kai beech mai likhtay hai

//button.appendChild(submit)  ==> ye value dalta hai html kai opening or closing tag klai beech mai

//deleteButton.setAttribute("class","color")  ==> ye class or onclick ko karta hai is kai andar jo type karoo kai <li (here)> 
//wo is li kai right bracket mai jayga

//.parentNode ==> kisi bh element kai parent ko get karta hai

//.remove()  ==> eik function hai jo kai remove kar daita hai