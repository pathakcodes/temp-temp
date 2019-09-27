var options = {
	data : {
		"Beverages":["Red Bull Energy Drink", "Lipton Green Tea Bags", "Red Wine", "Nescafe Coffee Powder"],
		"Snacks":["Mixed Vegetables", "Dabur Honey", "Knorr Instant Tomato Soup", "Cadbury Chocolate Bar", "Cadbury Diary Milk", "Kissan Fresh Tomato Ketchup", "Black Olive oil ", "Maggi Masala Noodles", "Lays Potato Chips ", "Kelloggs Chocos", "Cadbury Oreo Biscuit", "Hakka Noodles", "Maggi Cuppa Masala Noodles", "Parle-G", "Treat -Jim Jam Biscuits"],
		"Beauty & Hygiene":["Anti-Dandruff Shampoo", "He Body Spray ", "Light Complete Night Cream", "Santoor Sandal & Turmeric Soap", "Dettol Handwash ", "Colgate Toothpaste", "Oral-B Tooth Brush"],
		"Fruits & Vegetables":["Grapes", "Fresho Tomato", "Potato", "Fresho Palak"],
		"Bakery, Cakes & Dairy":["GoodLife Toned Milk", "Britannia cake -fruity fun", "mother dairy curd ", "Milky Mist Paneer "],
		"Foodgrains, Oil & Masala":["Almonds", "Atta Whole Wheat ", "Saffola Edible Oil", "Black Pepper", "Moong Dal", "Chana Dal", "Urad Dal", "Tata Salt"]
	},
	categories:[
		{
			listLocation: "Beverages",
            header: "-- Beverages --"
		},
		{
			listLocation: "Snacks",
            header: "-- Snacks --"
		},
		{
			listLocation: "Beauty & Hygiene",
            header: "-- Beauty & Hygiene --"
		},
		{
			listLocation: "Fruits & Vegetables",
            header: "-- Fruits & Vegetables --"
		},
		{
			listLocation: "Bakery, Cakes & Dairy",
            header: "-- Bakery, Cakes & Dairy --"
		},
		{
			listLocation:"Foodgrains, Oil & Masala",
	    header: "-- Foodgrains, Oil & Masala --"
		}
	],
	list: {
		maxNumberOfElements:6,
		match: {
			enabled: true
		}
	}
};

$("#itemInput").easyAutocomplete(options);

var addItem = () =>{
	var itemName = document.getElementById("itemInput").value;
	document.getElementById("itemInput").value = "";
	var listItem = '<div class="item white mark border-light-blue margin-button shadow">'+
            '<h2><strong>'+itemName+'</strong></h2>'+'<button class="red-400 icon-text right" onclick="removeItem(this.parentNode)"><i class="icon ion-trash-b"></i></button></div>';       
    document.getElementById("itemList").innerHTML +=  listItem;
}

var removeItem = (element) => {
	element.parentNode.removeChild(element);
}

var exploreStore = () => {
	document.getElementById('exploreView').style.visibility = 'visible';
	document.getElementById('selectView').style.visibility = 'hidden';
}

var startShopping = () => {

	document.getElementById('shopView').style.visibility = 'visible';

	document.getElementById('selectView').style.visibility = 'hidden';
}

var recommendStore = () => {
	document.getElementById('recommendedStores').style.visibility = 'visible';
	document.getElementById('exploreView').innerHTML = 'hidden';
}

// this is function for QR code and data of QR code is in variable "res"
var scan = () => {
        cordova.plugins.barcodeScanner.scan(
          function (result) {
              if(!result.cancelled){
                  var res = result.text;
                  
                  console.log(res) ;
              }
          },
          function (error) {
              alert("error : " + error);
          }
        );
      }