

// get elements
const newItem = document.getElementById("new-item");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("list");

// add event listener to form
addBtn.addEventListener("click", function(e) {
	// prevent default form submission
	e.preventDefault();
	
	// create new li element
	const li = document.createElement("li");
	
	// create new span element for text content
	const span = document.createElement("span");
	span.textContent = newItem.value;
	li.appendChild(span);
	
	// create new button element for delete action
	const deleteBtn = document.createElement("button");
	deleteBtn.textContent = "Delete";
    deleteBtn.style.backgroundColor = "red"
    deleteBtn.style.color = "white"
	deleteBtn.addEventListener("click", function() {
		list.removeChild(li);
	});
	li.appendChild(deleteBtn);
	
	// add new li element to list
	list.appendChild(li);
	
	// clear input field
	newItem.value = "";
});
