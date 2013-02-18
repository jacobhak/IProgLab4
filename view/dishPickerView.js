function DishPickerView(stage, parent, dishModel, dinnerModel) {
	this.stage = stage;
	var dishes = dishModel.getDishes(this.stage);
	console.log(dishes);
	this.ul = $('<ul>');
	this.ul.attr('class','thumbnails');
	for (i = 0; i<dishes.length;i++) {
		console.log(dishes[i]);
		var li = $('<li>');
		var img = $('<img>');
		var a = $('<a>');
		li.attr('class','span2');
		img.attr('id',dishes[i].id);
		a.attr('href','#');
		a.attr('class','thumbnail');
		img.attr('src',"images/"+dishes[i].image);
		a.append(img);
		li.append(a);
		this.ul.append(li);
	}
	parent.append(this.ul);
}