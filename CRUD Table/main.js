let addCarts = document.querySelectorAll("#addCart");
let creatContent = document.getElementsByTagName("tbody")[0];
let finalTotal = document.getElementById("GrandTotal")
let total = 0;

addCarts.forEach((addCart) => {
    addCart.addEventListener("click", addToCart)
})
function addToCart(element){
    let row = document.createElement("tr");
    elementTarget = element.target;
    parentElement = elementTarget.parentElement;
    grandElement = elementTarget.parentElement.parentElement
    foodImages = grandElement.children[0].src;
    foodTitle = parentElement.children[0].innerText;
    foodPrice = parentElement.children[1].innerText;

    row.innerHTML =`
        <td><input type="checkbox"></td>
        <td><img src="${foodImages}" alt="" height="40px" width="40px"></td>
        <td>${foodTitle}</td>
        <td>${foodPrice}</td>
        <td><input type="number" value="1" id="quantity"></td>
        <td>${foodPrice}</td>
        <td><a href="#" class="btn btn-danger">Remove</a></td> 
    `
    creatContent.append(row)
    let quantity = document.querySelectorAll("#quantity");
    let removeButton = document.querySelectorAll(".btn-danger");
    total = total + Number(foodPrice.replace('$', ""))
    finalTotal.innerHTML = '$' + total

    quantity.forEach((oneQuantity) => {
        oneQuantity.addEventListener("change", upadateQuantity)
    })
    removeButton.forEach(oneButton => {
        oneButton.addEventListener("click", deleteButton)
    });
}
function upadateQuantity(event){
    eventTar = event.target
    tr = eventTar.parentElement.parentElement
    fdPrice = tr.children[3].innerHTML.replace('$', " ");
    totalPrice = fdPrice * eventTar.value
    let prevInputValue = tr.children[5].innerHTML
    tr.children[5].innerHTML = "$" + totalPrice
    total = total + Number(totalPrice) - Number(prevInputValue.replace('$', ""))
    finalTotal.innerHTML = '$' + Number(total)
}
const deleteButton = (value) => {
    deleteTarget = value.target;
    grandParent = deleteTarget.parentElement.parentElement;
    deleteValue = grandParent.children[5].innerHTML
    total = total - deleteValue.replace('$', "");
    finalTotal.innerHTML = '$' + Number(total)
    grandParent.innerHTML = ``
}