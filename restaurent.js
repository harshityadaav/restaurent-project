const price=document.getElementById('examplePriceAmount');
console.log(price);
const dish=document.getElementById('exampledishdescription');
console.log(dish);
const table=document.getElementById('table');
console.log(table);
const my_form=document.getElementById('my-form');
console.log(my_form);
const list_items=document.getElementById('table1');
console.log(list_items);
// const ul=document.getElementById('table1')

async function getInformation(){
    try {
        let response= await(axios.get('https://crudcrud.com/api/0214a47fa214470c9fa9d6c026f16f66/Orders'))
    console.log(response.data)
    for(let i=0;i<response.data.length;i++){
                var u_price=response.data[i].userPrice;
                console.log(response.data[i]._id);
                var u_dish=response.data[i].userDish;
                console.log(u_dish);
                var u_table=response.data[i].userTable;
                console.log(u_table);
                let ul=document.getElementById(`${u_table}`)
                const li=document.createElement('li');
                const s=`${u_price} ${u_dish} ${u_table}`;
                li.appendChild(document.createTextNode(s))
                li.setAttribute('id',response.data[i]._id);
                // li.setAttribute('class',inline)
                console.log(li);
                const delete_btn=`<button onclick="deleteFunction(event)">delete</button>`;
                li.innerHTML=li.innerHTML+delete_btn
                
                ul.appendChild(li);
}
    } catch (error) {
        console.log(error)
    }
    
}
// getInformation()
window.addEventListener("DOMContentLoaded",getInformation)

// window.addEventListener("DOMContentLoaded",()=>{axios.get('https://crudcrud.com/api/0214a47fa214470c9fa9d6c026f16f66/Orders')
// .then((response)=>{
//     // console.log(response.data[0].userEmail)
//     for(let i=0;i<response.data.length;i++){
//         var u_price=response.data[i].userPrice;
//         console.log(response.data[i]._id);
//         var u_dish=response.data[i].userDish;
//         console.log(u_dish);
//         var u_table=response.data[i].userTable;
//         console.log(u_table);
//         let ul=document.getElementById(`${u_table}`)
//         const li=document.createElement('li');
//         const s=`${u_price} ${u_dish} ${u_table}`;
//         li.appendChild(document.createTextNode(s))
//         li.setAttribute('id',response.data[i]._id);
//         // li.setAttribute('class',inline)
//         console.log(li);
//         const delete_btn=`<button onclick="deleteFunction(event)">delete</button>`;
//         li.innerHTML=li.innerHTML+delete_btn
        
//         ul.appendChild(li);
//     }
// })
// .catch((err)=>{
//     console.log(err)
// })})

my_form.addEventListener('submit', onSubmit);


function onSubmit(e) {
    e.preventDefault();
    myObj={
        userPrice:price.value,
        userDish:dish.value,
        userTable:table.value
    };
    
    async function postFunction(){
        try {
            const response=await axios.post('https://crudcrud.com/api/0214a47fa214470c9fa9d6c026f16f66/Orders',myObj)
        let u_price=response.data.userPrice;
        console.log(u_price);
        var u_dish=response.data.userDish;
        console.log(u_dish);
        var u_table=response.data.userTable
        let ul=document.getElementById(`${u_table}`)
        const li=document.createElement('li');
        const s=`${u_price} ${u_dish} ${u_table}`;
        li.appendChild(document.createTextNode(s))
        li.setAttribute('id',response.data._id);
        console.log(li);
        const delete_btn=`<button onclick="deleteFunction(event)">delete</button>`;
        li.innerHTML=li.innerHTML+delete_btn
        ul.appendChild(li);
        } catch (error) {
            console.log(error)
        }

        
    }
    postFunction();

    // axios.post('https://crudcrud.com/api/0214a47fa214470c9fa9d6c026f16f66/Orders',myObj)
    // .then((response)=>{
    //     var u_price=response.data.userPrice;
    //     console.log(u_price);
    //     var u_dish=response.data.userDish;
    //     console.log(u_dish);
    //     var u_table=response.data.userTable
    //     let ul=document.getElementById(`${u_table}`)
    //     const li=document.createElement('li');
    //     const s=`${u_price} ${u_dish} ${u_table}`;
    //     li.appendChild(document.createTextNode(s))
    //     li.setAttribute('id',response.data._id);
    //     console.log(li);
    //     const delete_btn=`<button onclick="deleteFunction(event)">delete</button>`;
    //     li.innerHTML=li.innerHTML+delete_btn
    //     ul.appendChild(li);
    // })
    // .catch((err)=>{
    //     document.body.innerHTML=document.body.innerHTML+`<h1>something went wrong</h1>`
    //     console.log(err)})

    price.value="";
    dish.value="";
    table.value=""
  }

//delete request  
async function deleteFunction(event){
    // console.log(event.target.parentNode.id);
    try {
        var ulItems=event.target.parentNode.parentNode;
    var li_item=event.target.parentNode;
    ulItems.removeChild(li_item);
    const response=await axios.delete(`https://crudcrud.com/api/0214a47fa214470c9fa9d6c026f16f66/Orders/${event.target.parentNode.id}`)
    console.log(response)
    } catch (error) {
        console.log(error)
    }
    
    // axios.delete(`https://crudcrud.com/api/0214a47fa214470c9fa9d6c026f16f66/Orders/${event.target.parentNode.id}`)
    // .then((res)=>{console.log(res)})
    // .catch((err)=>{
    //     console.log(err)
    // })
    // localStorage.removeItem(event.target.parentNode.id);
    // const list_item=document.getElementById(email);
    // console.log(list_item);
}  

// use async/await instead of .then and .catch

// async function fun1(){
//     console.log('a');
//     console.log('b');
//     await new Promise((resolve)=>setTimeout(() =>{ 
//         console.log('c');
//         resolve()},
//         1000))
//     await new Promise((resolve)=>setTimeout(() =>{ 
//         console.log('d');
//         resolve()},
//         0))
//     console.log('e');
//     }
//     fun1()