//ExampleView Object constructor
function ExampleView(parent,dishModel,dinnerModel) {
	this.setupCurrentMenu = function() {
		var starter = dishModel.getDish(dinnerModel.getSelectedDish('starter'));
		var main = dishModel.getDish(dinnerModel.getSelectedDish('main'));
		var dessert = dishModel.getDish(dinnerModel.getSelectedDish('dessert'));
		$('#currentMenuList').empty();
		if (!(typeof starter === 'undefined')) {
			this.starterRemoveButton = $("<button>");
			setupDishElement(starter, this.starterRemoveButton);
		};
		if (!(typeof main === 'undefined')) {
			this.mainDishRemoveButton = $("<button>");
			setupDishElement(main, this.mainDishRemoveButton);			
		};
		if (!(typeof dessert === 'undefined')) {
			this.dessertRemoveButton = $("<button>");
			setupDishElement(dessert, this.dessertRemoveButton);			
		};
	}	
	// Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)
	this.numberOfGuests = $("#numberOfGuests");
	this.totalPrice = $("#totalPrice");
	this.plusButton = $("#plusGuest");
	this.minusButton = $("#minusGuest");
	this.starterRemoveButton = $("<button>");
	this.mainDishRemoveButton = $("<button>");
	this.dessertRemoveButton = $("<button>");


	//div we just store in temporary variable because we won't need it later
	var div = $("<div>");
	//we set the constant text
	div.html("Total menu price ");
	//and we add the row class
	div.addClass("row");
	//total prace we store in object variable (using this) so we can access it later
	this.totalPrice = $("<span>");
	//we set the id of the total price span
	this.totalPrice.attr("id","totalPrice");
	//we add total price span to the div
	div.append(this.totalPrice);
	//finally we add the div to the parent container
	parent.append(div);
	
	//Set the inital values of the components
	this.numberOfGuests.html(dinnerModel.getNumberOfGuests());
	this.totalPrice.html(dinnerModel.getTotalMenuPrice());

	this.setupCurrentMenu();
	
	/*****************************************  
	      Observer implementation    
	*****************************************/
	
	//Register an observer to the model
	dinnerModel.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
		this.numberOfGuests.html(dinnerModel.getNumberOfGuests());
		this.totalPrice.html(dinnerModel.getTotalMenuPrice());
		if (arg === 'menu') {
			this.setupCurrentMenu();
			new ExampleViewController(this,dishModel,dinnerModel);
		}
	}

	function setupDishElement(dish, button) {
		var li = $('<li>');
		var div = $('<span>');
		var img = $('<img>');
		//var button = $('<button>');
		img.attr('src',"images/" +dish.image);
		img.attr('class','img-rounded dinnerMenuImage');
		div.append(img);
		div.append(dish.type +": " +dish.name+" Cost: "+
			dishModel.getCostForDish(dinnerModel.getSelectedDish('starter')));
		setupButton(button);
		div.append(button);

		li.append(div);
		$('#currentMenuList').append(li);
	}
	function setupButton(button) {
		button.empty();
		button.attr('type','button');
		button.attr('class','btn btn-danger');
		var icon = $('<i>');
		icon.attr('class','icon-remove');
		button.append(icon);
	}
}
 
