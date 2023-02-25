const newItem = document.getElementById("new-item");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("list");


addBtn.addEventListener("click", function(e) {

    e.preventDefault();

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = newItem.value;
    li.appendChild(span);


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function(){
        list.removeChild(li);
    });
    li.appendChild(deleteBtn);

    newItem.value = "";
})