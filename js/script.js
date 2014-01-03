publish.onsubmit = function  () {
	var xhr = new XMLHttpRequest();

	xhr.open("post", "/publish", true);

	xhr.send(JSON.stringify({message: this.elements.message.value}));

	this.elements.message.value = '';
	return false;
};