function DishPickerViewController(view, dishModel,dinnerModel ) {
	view.ul.children().click(function(e){
		var popView = new PopupView(dishModel.getDish(e.target.id),dishModel,dinnerModel);
		new PopupViewController(popView,dishModel,dinnerModel);
		$('#popup').modal('toggle');
	});
}
