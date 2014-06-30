function nameList(){
	var thisList = document.myCheckListForm.myListName.value;
	document.getElementById("title").innerHTML = thisList;
	$(".name").remove();

}

var i = 0;

function createList(){

	i++;
	var listItem = document.myCheckListForm.checkListItem.value;

	var listed = '<div id="item' + i + '"><input type="checkbox" onclick="crossedOut(\'item'+ i + '\')" />' + listItem + '</div>';

	document.getElementById("checkList").innerHTML += listed;

}

function crossedOut( item ){
	document.getElementById( item ).className = "checked-off";
}