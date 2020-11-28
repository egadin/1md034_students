/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
"use strict";
var socket = io();

var vm = new Vue({
  el: "#mapAndButton",
  data: {
    customerInfo: {},
    orderedBurger: {},  
    orders: {}
  },
  methods: {
    getNext: function() {
      var lastOrder = Object.keys(this.orders).reduce(function(last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function (event) {
      parseForm(vm);
      console.log("info och burgers", this.customerInfo, this.orderedBurger)
      socket.emit("addOrder", {
          orderId: this.orders.T.details.orderId,
          details: {
              x: this.orders.T.details.x,
              y: this.orders.T.details.y,
              orderItems: this.orderedBurger, //fix this
              customerInfo: this.customerInfo,
          },
      });
    },
    displayOrder: function (event) {
      var offset = {
          x: event.currentTarget.getBoundingClientRect().left,
          y: event.currentTarget.getBoundingClientRect().top
      };
      console.log("display order")
      this.orders = {
        "T": {
          details: {
              orderId: this.getNext(),
              x: event.clientX - 10 - offset.x,
              y: event.clientY - 10 - offset.y,
          },   
      }};
    }
  }
});

window.addEventListener("load", () => {
  function renderMenuItem(item)
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

  var myElement = document.getElementById("wrapper");

  food.forEach((item, i) => {
    var listItem = renderMenuItem(item);
    listItem.style.gridColumn = (i + 1) + " / span " + (i + 1);
    myElement.appendChild(listItem);
  });
  var myButton = document.getElementById("submit");

  //myButton.addEventListener("click", parseForm);
});


function parseForm(vm){
  var customerInformation = [document.getElementById("fullname").value,document.getElementById("email").value,document.getElementById("payment").value,document.querySelector('input[name="gender"]:checked').value];
  var orderedBurgers = document.querySelectorAll('input[name="burgerCheckb"]:checked');
  var orderlist = document.getElementById("order");
  orderlist.appendChild(document.createTextNode("Personal information"));
  customerInformation.forEach((info) => {
    var pinfo = document.createElement("li");
    pinfo.appendChild(document.createTextNode(info));
    orderlist.appendChild(pinfo);
  });
  orderlist.appendChild(document.createTextNode("Order information"));
  orderedBurgers.forEach((burger) => {
    var burgerI = document.createElement("li");
    console.log(burgerI.id)
    burgerI.appendChild(document.createTextNode(burger.id));
    orderlist.appendChild(burgerI);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  });
  vm.customerInfo = customerInformation;
  console.log("orderer burgers", orderedBurgers)
  vm.orderedBurger = [...orderedBurgers].map(item => item.id)
  console.log("info i parser", vm.customerInfo, vm.orderedBurger)
}

function createNewCheckboxt(name, id){
    var checkbox = document.createElement('input');
    checkbox.type= 'checkbox';
    checkbox.name = name;
    checkbox.id = id;
    return checkbox;
}