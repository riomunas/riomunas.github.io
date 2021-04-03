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

	var dataKunjungan = {
		'202101':[300, 443, 443, 434, 440, 304, 044, 444, 134, 433, 343, 430],
		'202102':[200, 242, 242, 422, 240, 204, 044, 224, 132, 232, 222, 220],
		'202103':[300, 543, 543, 435, 540, 304, 044, 554, 445, 543, 353, 530],
		'202104':[450, 744, 744, 447, 740, 454, 544, 774, 247, 744, 474, 740],
		'202105':[360, 893, 893, 938, 890, 369, 699, 889, 548, 843, 383, 830],
		'202106':[380, 233, 233, 332, 230, 383, 833, 223, 742, 243, 323, 230],
		'202107':[200, 642, 642, 426, 640, 204, 044, 664, 236, 632, 262, 620],
		'202108':[600, 896, 896, 968, 890, 609, 099, 889, 648, 846, 686, 860],
		'202109':[800, 368, 368, 683, 360, 806, 066, 336, 893, 398, 838, 380],
		'202110':[100, 781, 781, 817, 780, 108, 088, 778, 367, 761, 171, 710]
	}

	dataTable.forEach(function(data) {
		console.log("asdfasdfasdf asdfasdfas fasdfasdf");
		$("#mytable > tbody").append(
			'<tr>'+
			'<td scope="row">'+data.item+'</td>'+
			'<td><a data-id="'+data.id+'" href="#!" class="btn btn-sm btn-primary">Lihat Chart</a></td>'+
			'</tr>'
		);
	});

    $(".btn").click(function(e){
		var dataID = e.currentTarget.attributes["data-id"].value
		var ctx = document.getElementById('bar-chart');
		console.log("~~> ctx2 : ", ctx);
		new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Aug','Sep','Oct','Nov','Des'],
				datasets: [{
					backgroundColor: "#3e95cd",
					data: dataKunjungan[dataID]
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