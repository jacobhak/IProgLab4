function PopupViewController(view,dishModel,dinnerModel) {
	view.chooseButton.click(function(){
		dinnerModel.addDishToMenu(view.dish.id);
		$('#popup').modal('toggle');
	});
}
