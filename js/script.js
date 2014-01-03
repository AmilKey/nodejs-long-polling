publish.onsubmit = function  () {
	var xhr = new XMLHttpRequest();

	xhr.open("post", "/publish", true);

	xhr.send(JSON.stringify({message: this.elements.message.value}));

	this.elements.message.value = '';
	return false;
};

subscribe();

function subscribe () {
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "/subscribe", true);

	xhr.onload = function  () {
		var li = document.createElement('li');
		li.textContent = this.responseText;
		messages.appendChild(li);

		subscribe();
	};

	xhr.onerror = xhr.onabort = function  () {
		setTimeout(subscribe, 500);
	};

	xhr.send('');
}