function DishPickerViewController(view, dishModel,dinnerModel ) {
	view.ul.children().click(function(e){
		console.log("clicked a child " +e.target.id);
		var popView = new PopupView(dishModel.getDish(e.target.id),dishModel,dinnerModel);
		new PopupViewController(popView,dishModel,dinnerModel);
		$('#popup').modal();
	});
}
