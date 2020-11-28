/*function renderMenuItem(item)
  {
    var itemBox = document.createElement("box");
    itemBox.className = "item";
    var header = document.createElement("h3");
    var headerText = document.createTextNode(item.name);
    header.appendChild(headerText);
    itemBox.append(header);

    var itemImg = document.createElement("img");
    itemImg.src = item.img;
    itemBox.append(itemImg);
    var itemList = document.createElement("ul");
    var klist = document.createElement("li");
    var kcal = document.createTextNode(item.kCal + " kCal");
    klist.appendChild(kcal);
    itemList.appendChild(klist);
    if (item.lactose==true){
      var llist = document.createElement("li");
      var la = document.createTextNode("Lactose");
      llist.appendChild(la);
      itemList.appendChild(llist);
    }
    if (item.gluten==true){
      var glist = document.createElement("li");
      var gl = document.createTextNode("Gluten");
      glist.appendChild(gl);
      itemList.appendChild(glist);
    }
    itemBox.append(itemList);
    itemBox.append(createNewCheckboxt('burgerCheckb', item.name));
    return itemBox;
}

function parseForm(){
  var customerInformation = [document.getElementById("fullname").value,document.getElementById("email").value,document.getElementById("streetname").value,document.getElementById("housenumber").value,document.getElementById("payment").value,document.querySelector('input[name="gender"]:checked').value];
  var orderedBurgers = document.querySelectorAll('input[name="burgerCheckb"]:checked');
  console.log(customerInformation, orderedBurgers)
  var orderlist = document.getElementById("order");
  orderlist.appendChild(document.createTextNode("Personal information"));
  customerInformation.forEach((info) => {
    var pinfo = document.createElement("li");
    pinfo.appendChild(document.createTextNode(info));
    orderlist.appendChild(pinfo);  //borde vÃ¤l funka?
  });
  orderlist.appendChild(document.createTextNode("Order information"));
  orderedBurgers.forEach((burger) => {
    var burgerI = document.createElement("li");
    burgerI.appendChild(document.createTextNode(burger.id));
    orderlist.appendChild(burgerI);  //borde vÃ¤l funka?
  });
}

function createNewCheckboxt(name, id){
    var checkbox = document.createElement('input');
    checkbox.type= 'checkbox';
    checkbox.name = name;
    checkbox.id = id;
    return checkbox;
}
*/