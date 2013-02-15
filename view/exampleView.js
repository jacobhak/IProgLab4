//ExampleView Object constructor
function ExampleView(parent,dishModel,dinnerModel) {
	
	// Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)
	this.numberOfGuests = $("#numberOfGuests");
	this.totalPrice = $("#totalPrice");
	this.plusButton = $("#plusGuest");
	this.minusButton = $("#minusGuest");
	
	//Creating the components dynamically. Here we create the following HTML content:
	//
	//<div class="row">
	//  Total menu price <span id="totalPrice"></span>
	//</div>
	//
	//and add it to the the exampleView 
	
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

	setupCurrentMenu();
	
	/*****************************************  
	      Observer implementation    
	*****************************************/
	
	//Register an observer to the model
	dinnerModel.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
		this.numberOfGuests.html(dinnerModel.getNumberOfGuests());
		this.totalPrice.html(dinnerModel.getTotalMenuPrice());
	}
	function setupCurrentMenu() {
		var starter = dishModel.getDish(dinnerModel.getSelectedDish('starter'));
		var main = dishModel.getDish(dinnerModel.getSelectedDish('main'));
		var dessert = dishModel.getDish(dinnerModel.getSelectedDish('dessert'));
		if (!(typeof starter === 'undefined')) {
			setupDishElement(starter);
		};
		if (!(typeof main === 'undefined')) {
		};
		if (!(typeof dessert === 'undefined')) {
		};
	}
	function setupDishElement(dish) {
		var li = $('<li>');
		var div = $('<span>');
		var img = $('<img>');
		var button = $('<button>');
		img.attr('src',"images/" +dish.image);
		img.attr('class','img-rounded dinnerMenuImage');
		div.append(img);
		div.append(dish.type +": " +dish.name+" Cost: "+
			dishModel.getCostForDish(dinnerModel.getSelectedDish('starter')));
		button.attr('type','button');
		button.attr('class','btn btn-danger');
		var icon = $('<i>');
		icon.attr('class','icon-remove');
		button.append(icon);
		div.append(button);
		li.append(div);
		$('#currentMenuList').append(li);
	}
}
 
