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

	dataTable.forEach(function(data) {
		console.log("asdfasdfasdf asdfasdfas fasdfasdf");
		$("#mytable > tbody").append(
			'<tr>'+
			'<td scope="row">'+data.item+'</td>'+
			'<td><a href="#!" class="btn btn-sm btn-primary">Lihat Chart</a></td>'+
			'</tr>'
		);
	});

    $(".btn").click(function(){
    	var ctx = document.getElementById('bar-chart');
		console.log("~~> ctx1 : ", ctx);
		new Chart(ctx, {
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
        $("#myModal").modal('show');
    });
});