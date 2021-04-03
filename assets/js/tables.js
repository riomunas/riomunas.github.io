$(document).ready(function(){
	var table = document.getElementById('mytable');
	var dataTable = [
		{'item':'Akomodasi Hotel Bintang', 'id':'202101'},
		{'item':'Akomodasi Non Bintang', 'id':'202102'},
		{'item':'Kamar Hotel Bintang', 'id':'202103'},
		{'item':'Kamar Non Bintang', 'id':'202104'},
		{'item':'Kamar Bintang Terjual', 'id':'202105'},
		{'item':'Kamar Non Bintang Terjual', 'id':'202106'},
		{'item':'Perjalanan Wisatawan Nusantara (*)', 'id':'202107', 'desc':'*(Total wisatawan di DTW berbayar, Paket Wisata, Pokdarwis)'},
		{'item':'Perjalanan Wisatawan Mancanegara (*)', 'id':'202108', 'desc':'*(Total wisatawan di DTW berbayar, Paket Wisata, Pokdarwis)'},
		{'item':'Daya Tarik Wisata', 'id':'202109'},
		{'item':'Restoran dan Rumah Makan', 'id':'202110'},
	];

	/*CHART*/
	//google
	// // Load the Visualization API and the corechart package.
 //      google.charts.load('current', {'packages':['corechart']});

 //      // Set a callback to run when the Google Visualization API is loaded.
 //      google.charts.setOnLoadCallback(drawChart);

 //      // Callback that creates and populates a data table,
 //      // instantiates the pie chart, passes in the data and
 //      // draws it.
 //      function drawChart() {

 //        // Create the data table.
 //        var data = new google.visualization.DataTable();
 //        data.addColumn('string', 'Topping');
 //        data.addColumn('number', 'Jumlah Kunjungan');
 //        data.addRows([
 //          ['Jan', 300],
 //          ['Feb', 140],
 //          ['Mar', 345],
 //          ['Apr', 478],
 //          ['Mei', 568],
 //          ['Jun', 876],
 //          ['Jul', 793],
 //          ['Aug', 934],
 //          ['Sep', 131],
 //          ['Oct', 120],
 //          ['Nov', 123],
 //          ['Des', 90]
 //        ]);

 //        // Set chart options
 //        var options = {
 //        	'width':600, 
 //        	'height':300
 //        };

 //        // Instantiate and draw our chart, passing in some options.
 //        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
 //        chart.draw(data, options);
 //      }


		// var chart = new CanvasJS.Chart("chartContainer", {
		// 	animationEnabled: true,
		// 	theme: "light2", // "light1", "light2", "dark1", "dark2"
		// 	title:{
		// 		text: "Top Oil Reserves"
		// 	},
		// 	axisY: {
		// 		title: "Reserves(MMbbl)"
		// 	},
		// 	data: [{        
		// 		type: "column",  
		// 		showInLegend: true, 
		// 		legendMarkerColor: "grey",
		// 		legendText: "MMbbl = one million barrels",
		//         //color:"red",
		// 		dataPoints: [      
		// 			{ y: 300878, label: "Venezuela" },
		// 			{ y: 266455,  label: "Saudi" },
		// 			{ y: 169709,  label: "Canada" },
		// 			{ y: 158400,  label: "Iran" },
		// 			{ y: 142503,  label: "Iraq" },
		// 			{ y: 101500, label: "Kuwait" },
		// 			{ y: 97800,  label: "UAE" },
		// 			{ y: 80000,  label: "Russia" }
		// 		]
		// 	}]
		// });
		// chart.render();


		new Chart(document.getElementById("bar-chart"), {
			type: 'bar',
			data: {
				labels: ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Aug','Sep','Oct','Nov','Des'],
				datasets: [{
					backgroundColor: "#3e95cd",
					data: [300, 140, 345, 478, 568, 876, 793, 934, 131, 120, 123, 90]
				}]
			},
			options: {
				legend: { display: false },
				title: {
					display: true
				}
			}
		});

	/*END CHART*/

	dataTable.forEach(function(data) {
		$("#mytable > tbody").append(
			'<tr>'+
			'<td scope="row">'+data.item+'</td>'+
			'<td><a href="#!" class="btn btn-sm btn-primary">Lihat Chart</a></td>'+
			'</tr>'
		);
	});

    $(".btn").click(function(){
        $("#myModal").modal('show');
    });
});