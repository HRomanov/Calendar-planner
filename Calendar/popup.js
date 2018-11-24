
 function show(){
	document.getElementById('window').style.display = 'block';			
	document.getElementById('wrap').style.display = 'block'; 	
}

 function close_pp(){
	document.getElementById('window').style.display = 'none';			
	document.getElementById('wrap').style.display = 'none'; 
}


function get_td(){
	var table = document.getElementById('calendar');
	var target = event.target;	

// // проверка содержимого ячейки
// 	// for (var i=0,len=cells.length; i<len; i++){
// 	//     cells[i].onclick = function(){
// 	//         console.log(this.innerHTML);
// 	// 	}
// 	// }
		
	show();

	document.getElementById("submit_click").onclick = function() {output()};
		function output() {
			var input_event = document.forms["event_form"].elements["input_event"].value;
			var input_date = document.forms["event_form"].elements["input_date"].value;
			var input_names = document.forms["event_form"].elements["input_names"].value;
			var input_description = document.forms["event_form"].elements["input_description"].value;
			return target.innerHTML += '<br>' + input_event + 
								'<br>' + input_date + 
								'<br>' + input_names + 
								'<br>' + input_description;
		} 
}

