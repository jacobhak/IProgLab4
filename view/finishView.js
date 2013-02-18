function FinishView(preparationsParent, ingredientsParent,dishModel,dinnerModel) {
	
	this.starterHeading = $("#starterHeading");
	this.starterDescription = $("#starterDescription");
	this.mainDishHeading = $("#mainDishHeading");
	this.mainDishDescription = $("#mainDishDescription");
	this.dessertHeading = $("#dessertHeading");
	this.dessertDescription = $("#dessertDescription")
	this.ingredientsTableBody = $("#ingredientsTableBody");
	
	setupDescription();
	setupIngredients();

	dinnerModel.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
		clear();
		setupDescription();
		setupIngredients();
	}
	function setupDescription() {
		var starter = dishModel.getDish(dinnerModel.getSelectedDish('starter'));
		var main = dishModel.getDish(dinnerModel.getSelectedDish('main'));
		var dessert = dishModel.getDish(dinnerModel.getSelectedDish('dessert'));
		if (!(typeof starter === 'undefined')) {
			$('#starterHeading').append("Starter: " + starter.name);
			$('#starterDescription').append(starter.description);
		};
		if (!(typeof main === 'undefined')) {
			$('#mainDishHeading').append("Main: " + main.name);
			$('#mainDishDescription').append(main.description);		
		};
		if (!(typeof dessert === 'undefined')) {
			$('#dessertHeading').append("Dessert: " + dessert.name);
			$('#dessertDescription').append(dessert.description);		
		};
	}
	function setupIngredients() {
		var ingredients = dinnerModel.getAllIngredients();
		for (var i = ingredients.length - 1; i >= 0; i--) {
			var ingredient = ingredients[i];
			var tr = $("<tr>");
			tr.append('<td>'+ingredient.name+'</td>');
			tr.append('<td>'+ingredient.quantity*dinnerModel.getNumberOfGuests()+'</td>');		
			tr.append('<td>'+ingredient.price*dinnerModel.getNumberOfGuests()+'</td>');
			$("#ingredientsTableBody").append(tr);
		};
	}
	function clear() {
		$("#starterHeading").empty();
		$("#starterDescription").empty();
		$("#mainDishHeading").empty();
		$("#mainDishDescription").empty();
		$("#dessertHeading").empty();
		$("#dessertDescription").empty();
		$("#ingredientsTableBody").empty();
	}
}