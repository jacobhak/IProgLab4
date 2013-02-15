//ExampleViewController Object constructor
function ExampleViewController(view, dishModel,dinnerModel ) {
	
	view.plusButton.click(function(){
		dinnerModel.setNumberOfGuests(dinnerModel.getNumberOfGuests() + 1);
	});
	
	view.minusButton.click(function(){
		dinnerModel.setNumberOfGuests(dinnerModel.getNumberOfGuests() - 1);
	});

	view.starterRemoveButton.click(function(){
		dinnerModel.removeDishFromMenu(dinnerModel.getSelectedDish('starter'));
	});

	view.mainDishRemoveButton.click(function(){
		dinnerModel.removeDishFromMenu(dinnerModel.getSelectedDish('main'));
	});

	view.dessertRemoveButton.click(function(){
		dinnerModel.removeDishFromMenu(dinnerModel.getSelectedDish('dessert'));
	});


}
