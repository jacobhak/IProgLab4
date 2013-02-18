function DishPickerViewController(view, dishModel,dinnerModel ) {
	view.ul.children().click(function(e){
		console.log("clicked a child " +e.target.id);
		new PopupView(dishModel.getDish(e.target.id),dishModel,dishModel);
	})
}