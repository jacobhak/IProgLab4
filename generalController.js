//GeneralModelController Object constructor
function GeneralController(dishModel,dinnerModel) {
	this.stage = "starter";
	this.finishButton = $("#finishButton");
	this.editButton = $("#editButton");

	
	var exampleView = new ExampleView($("#exampleView"),dishModel,dinnerModel);
	var exampleViewController = new ExampleViewController(exampleView,dishModel,dinnerModel);
	var finishView = new FinishView($("#preparationsView"),$("#ingredientsView"),dishModel,dinnerModel);
	this.finishButton.click(function(){
		$("#mainBody").hide();
		$("#finishBody").show();
	});
	this.editButton.click(function(){
		$("#finishBody").hide();
		$("#mainBody").show();
	})

}

