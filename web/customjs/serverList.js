$(document).ready(function() {

	var url = document.URL;
	var dcOS = url.substring(url.lastIndexOf('=') + 1);
	// alert("id: " + id);
	document.getElementById("showServerList").innerHTML = dcOS;

	// alert("Calling function");

	getServerList(dcOS);

	function getServerList(dcOS) {

		var dcurl;
		// alert("DC: " + dcOS);
		if (dcOS == "EDCWindows") {
			dcurl = "customjs/edcWindows.json";
		} else if (dcOS == "EDCUnix") {
			dcurl = "customjs/edcUnix.json";
		} else if (dcOS == "EDCLinux") {
			dcurl = "customjs/edcLinux.json";
		} else if (dcOS == "EDCMacOS") {
			dcurl = "customjs/edcMac.json";
		}
		// alert("dcurl: " + dcurl);
		$.getJSON(dcurl, function(json) {
			var tr;
			for (var i = 0; i < json.length; i++) {
				tr = $('<tr/>');
				var serverName = json[i].server;
				//alert(serverName)
				tr.append("<td> <a href='ServerDetails.html?serverName=" +serverName+ "'>" + json[i].server + "</a></td>");
				tr.append("<td>" + json[i].ip + "</td>");
				$('table').append(tr);
			}
		});

	}

});