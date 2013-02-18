function PopupView(dish,dishModel,dinnerModel) {

	this.popupDishName = $("#popupDishName");
	this.dishImage = $("#dishImage");
	this.popupPriceAndGuests = $("#popupPriceAndGuests");
	this.ingredientBody = $("#ingredientBody");
	this.preparationBody = $("#preparationBody");
	
	setupImage();
	setupPopupDishName(dish);
	setupPopupPriceAndGuests(dish);
	setupIngredientBody(dish);
	setupPreparationBody(dish);

	function setupImage() {

		$("#dishImage").attr('src',"images/" +dish.image);
		$("#dishImage").attr('class','img-rounded dinnerMenuImage');
	}

	function setupPopupPriceAndGuests(dish) {
		var price = dishModel.getCostForDish(dish.id);
		var guests = dinnerModel.getNumberOfGuests();
		var span = $("<span>");
		span.append("Price: "+price+" for "+guests+" persons.");
		$("#popupPriceAndGuests").append(span);
	}

	function setupIngredientBody(dish) {
		var ingredients = dish.ingredients;
		for (var i = ingredients.length - 1; i >= 0; i--) {
			var ingredient = ingredients[i];
			var tr = $("<tr>");
			tr.append('<td>'+ingredient.name+'</td>');
			tr.append('<td>'+ingredient.quantity*dinnerModel.getNumberOfGuests()+'</td>');
			tr.append('<td>'+ingredient.unit+'</td>');
			$("#ingredientBody").append(tr);
		};
	}

	function setupPreparationBody(dish) {
		var paragraph = $("<p>");
		paragraph.append(dish.description);
		$("#preparationBody").append(paragraph);
	}

	function setupPopupDishName(dish) {
		$("#popupDishName").append('<h2>'+dish.name+'</h2>');
	}
	
	function clear() {
		$("#popupDishName").empty();
		$("#dishImage").empty();
		$("#popupPriceAndGuests").empty();
		$("#ingredientBody").empty();
		$("#preparationBody").empty();
	}
}
