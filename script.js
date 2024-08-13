// Retrieve todoList from localStorage or initialize it
let todoList = JSON.parse(localStorage.getItem('todoList')) || [
    {
        item: 'Become Keshav Coder',
        dueDate: '12/12/2024',
    },
    {
        item: 'Front End Developer',
        dueDate: '13/12/2024',
    },
    {
        item: `I'll be MERN stack developer`,
        dueDate: '1/1/2025',
    },
];

//First we have to call when page will load then second/=====
displayItems();


let addTodo = () => {
    let userElement = document.querySelector("#userInput").value;
    let dateElement = document.querySelector("#todo-date").value;

    // Add the new item to the todoList
    todoList.push({ item: userElement, dueDate: dateElement });

    // Save updated todoList to localStorage
    localStorage.setItem('todoList', JSON.stringify(todoList));

    // Clear the input fields
    document.querySelector("#userInput").value = '';
    document.querySelector("#todo-date").value = '';

    // Display updated list
    // Then Second when Btn will click/=====
    displayItems();
}



function displayItems() {
    let containerElement = document.querySelector(".todo-container");

    let newHtml = "";

    //first you have to Altrate by Acumulator pattern
    for (let i = 0; i < todoList.length; i++) {

        // let item = todoList[i].item;
        // let dueDate = todoList[i].dueDate;

        // above 2 code by de-Struchring
        let { item, dueDate } = todoList[i];

        //here we will put all html     //you have already initializat newHtml outside of the loop
        newHtml = newHtml + `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button id="btn-delete" onclick="deleteItem(${i})";>Delete</button>
        `;
    }

    containerElement.innerHTML = newHtml;
}

function deleteItem(index) {
    // Remove the item from the list
    todoList.splice(index, 1);

    // Update the local storage
    localStorage.setItem('todoList', JSON.stringify(todoList));

    // Re-render the list
    displayItems();
}
