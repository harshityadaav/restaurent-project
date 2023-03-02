async function addExpense(event) {
    try {
    event.preventDefault();
    const expense = event.target.amount.value;
    const description = event.target.descrip.value;
    const selecting = event.target.category.value;
    const obj = {
        expense,
        description,
        selecting
    }
        const response = await axios.post("https://crudcrud.com/api/b00b38daea3141cfb661d52a73861e9e/addProduct", obj)

        showUserOnScreen(response.data)
        console.log(response) 

    }
    catch (err) {
        console.log(err)
    }
}

window.addEventListener("DOMContentLoaded", () => {
    async function reload() {
        try {
            const response = await axios.get("https://crudcrud.com/api/b00b38daea3141cfb661d52a73861e9e/addProduct")

            for (let i = 0; i < response.data.length; i++) {
                showUserOnScreen(response.data[i])
            }
        }
        catch (err) {
            console.log(err)
        }

    }
    reload()
})

function showUserOnScreen(user) {
    let parentNode;
    if (user.selecting == "Electronics") {
        parentNode = document.getElementById('listOfUser1');
    }
    else if (user.selecting = "FoodItem") {
        parentNode = document.getElementById('listOfUser2');
    }
    const childHTML = `<li id=${user._id}> ${user.expense} - ${user.description} - ${user.selecting}
        <button onclick = deleteUser('${user._id}')> Delete User </button>
        </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;

}

async function deleteUser(userId) {
    try {
        const response = await axios.delete(`https://crudcrud.com/api/b00b38daea3141cfb661d52a73861e9e/addproduct/${userId}`)
        console.log(response)
        removeUserFromScreen(userId)
    }
    catch (err) {
        console.log(err)
    }
}

function removeUserFromScreen(userId) {
    const childNodeToBeDeleted = document.getElementById(userId)
    if (childNodeToBeDeleted) {
        childNodeToBeDeleted.parentNode.removeChild(childNodeToBeDeleted)
    }
}