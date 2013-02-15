function FinishView(preparationsParent, ingredientsParent,dishModel,dinnerModel) {
	
	this.starterHeading = $("#starterHeading");
	this.starterDescription = $("#starterDescription");
	this.mainDishHeading = $("#mainDishHeading");
	this.mainDishDescription = $("#mainDishDescription");
	this.dessertHeading = $("#dessertHeading");
	this.dessertDescription = $("#dessertDescription")
	this.ingredientsTableBody = $("#ingredientsTableBody");
	
	//Creating the components dynamically. Here we create the following HTML content:
	//
	//<div class="row">
	//  Total menu price <span id="totalPrice"></span>
	//</div>
	//
	//and add it to the the exampleView 
	var starter = dishModel.getDish(dinnerModel.getSelectedDish('starter'));
	var main = dishModel.getDish(dinnerModel.getSelectedDish('main'));
	var dessert = dishModel.getDish(dinnerModel.getSelectedDish('dessert'));
	if (!(typeof starter === 'undefined')) {
		$('#starterHeading').append(starter.name);
		$('#starterDescription').append(starter.description);
	};
	if (!(typeof main === 'undefined')) {
		$('#mainDishHeading').append(main.name);
		$('#mainDishDescription').append(main.description);		
	};
	if (!(typeof dessert === 'undefined')) {
		$('#dessertHeading').append(dessert.name);
		$('#dessertDescription').append(dessert.description);		
	};

	//mainDishHeading.html = "Main :" + menu[1].name;
/*	
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
*	
	/*****************************************  
	      Observer implementation    
	*****************************************/
	
	//Register an observer to the model
	dinnerModel.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
//		this.numberOfGuests.html(dinnerModel.getNumberOfGuests());
//		this.totalPrice.html(dinnerModel.getTotalMenuPrice());
	}
}