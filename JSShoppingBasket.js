var orderItems = [];
var orderItemsRow = [];

function addProduct() {
	var newOrder = [];
	var newOrderNotEdited = [];
	var productName = document.getElementById("ProductName").value; 
	var quantity = document.getElementById("Quantity").value; 
	var latestPriceValue = document.getElementById("LatestPrice").value; 
	var latestPrice = "£" + parseFloat(latestPriceValue).toFixed(2);
	
	if(productName === null || productName === undefined || productName === ""){
		alert("Please enter a valid product name");
		return;
	}
	if(quantity === null || quantity === undefined || quantity === "" || isNaN(quantity)){
		alert("Please enter a valid quantity");
		return;
	}
	if(latestPriceValue === null || latestPriceValue === undefined || latestPriceValue === "" || isNaN(latestPriceValue)){
		alert("Please enter a valid price");
		return;
	}
	newOrder.push(productName, quantity, latestPrice);
	newOrderNotEdited.push(productName, quantity, latestPriceValue);
	orderItemsRow.push(newOrderNotEdited);
	var newOrderJoined = newOrder.join("</td><td width='25%'>");
	orderItems.push(newOrderJoined);
	
	showOrderItems();
	getNoOfItems();
	getTotalPrice();
}

function getNoOfItems() {
	var numberOfItems = 0;
	for(var i=0; i < orderItems.length;i++){
		numberOfItems++;
	}
	document.getElementById('NoItems').value = numberOfItems;
}

function getTotalPrice() {
	var totalPrice = 0;
	for(var i=0; i < orderItemsRow.length;i++){
		totalPrice = totalPrice + parseInt(orderItemsRow[i][1] * orderItemsRow[i][2]);
	}
	document.getElementById('TotalPrice').value = "£" + totalPrice.toFixed(2);
}

function showOrderItems() {
	document.getElementById("rowForValues").innerHTML = "<tr><td width='25%'>" + orderItems.join("</td></tr><tr><td width='25%'>") + "</td><td><input type='button' value='Remove' onclick='removeProduct(this)'></td></tr>";
	document.getElementById("ProductName").value = ""; 
	document.getElementById("Quantity").value = ""; 
	document.getElementById("LatestPrice").value = "";
}

function reloadTable() {
	document.getElementById("rowForValues").innerHTML = '';
	document.getElementById("rowForValues").innerHTML = '<tr><td>' + orderItems.join("</td></tr><tr><td>") + '</td></tr>';
	getNoOfItems();
	getTotalPrice();
}

function clearBasket() {
	orderItems = [];
	orderItemsRow = [];
	reloadTable();
	getTotalPrice();
}

function removeProduct(r) {
	var i = r.parentNode.parentNode.rowIndex;
		orderItemsRow.splice(i);
		orderItems.splice(i);
		document.getElementById("rowForValues").deleteRow(i);
		console.log(orderItems);
	
	reloadTable();
}
/*


function editItem(r) {


}

function editSave(r) {


}

function save() {


}

*/