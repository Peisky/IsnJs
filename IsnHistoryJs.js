var token = "@@@";
alert(token);
function init() {
	var bootstrapcdn  = document.createElement('link');
	bootstrapcdn.link= 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css';
	bootstrapcdn.rel="stylesheet";
	bootstrapcdn.integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u";
	bootstrapcdn.crossorigin="anonymous";
	var bootstrapjscdn  = document.createElement('link');
	bootstrbootstrapjscdnapcdn.link= 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css';
	bootstrapjscdn.rel="stylesheet";
	bootstrapjscdn.integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u";
	bootstrapjscdn.crossorigin="anonymous";
	var jq = document.createElement('scritp');
	jq.script = 'https://code.jquery.com/jquery-3.3.1.min.js';
	document.head.appendChild(bootstrapcdn);
	document.head.appendChild(bootstrapjscdn);
	document.head.appendChild(jq);

    document.body.innerHTML = '';
    document.body.append('<div id="login">Login</div>');
	document.body.append('<div id="dateOpt"></div>');
	document.body.append('<div id ="dialog"><table><thead><tr><td width="25px" height="21px">#</td> <td width="198px" height="21px">日期</td> <td width="98px" height="21px">備註</td> <td width="78px" height="21px">注额</td> <td width="107px" height="21px">收入/支出</td> <td width="54px" height="21px">佣金</td> <td width="75px" height="21px">餘額</td></tr></thead><tbody id="historybody"></tbody></table></div>')
	var d = new Date();
	var d0 = new Date();
	d0.setMonth(d.getMonth() - 1);
	var d1 = new Date();
	d1.setMonth(d.getMonth() - 2);
	var a = "<a class='Bdate' data-oid='" + d1.getYear() + d1.getMonth() + "'>" + d1.getMonth() + "/" + d1.getYear() + "</a>|";
	a = a + "<a class='Bdate' data-oid='" + d0.getYear() + d0.getMonth() + "'>" + d0.getMonth() + "/" + d0.getYear() + "</a>|";
    a = a + "<a class='Bdate' data-oid='" + d.getYear() + d.getMonth() + "'>" + d.getMonth() + "/" + d.getYear() + "</a>|";
    
	$('#dateOpt').html(a);
	$('.Bdate').on('click', function () { GetHistroyList($(this).data('oid')) });
	$('#login').on('click', function () { Login() });
}



	function GetHistroyList(month) {
		var url = 'http://www.isn99.com/membersite-api/api/statement/list/' + date + '?_=' + new Date();

		$.ajax({
			type: 'GET',
			url: url,
			headers: {
				"Authorization": "Bearer " + token,
			}
		}).done(function (data) {




		});

	}

	function Login(){
		var logindata = {username:"g8g8g8g8",password:"qq2222"};
		var url = 'http://www.isn99.com/membersite-api/api/member/authenticate';
		$.ajax({
			type: 'POST',
			url: url,
			data:logindata,
			})
			.done(function (data) {
				if(data.success){
					alert(data.responseMessage);
				}else{
					token = data.token;
				}
			});
	}

	function GetHistory(date) {
		var url = 'http://www.isn99.com/membersite-api/api/statement/list/' + date + '?_=' + new Date();

		$.ajax({
			type: 'GET',
			url: url,
			headers: {
				"Authorization": "Bearer " + token,
			}
		}).done(function (data) {
			$("#historybody").html("");
			$.each(data, function (index, obj) {
				var tr = $("<tr></tr>")
				.append("<td>" + index + "</td>")
				.append("<td>" + obj.betDateServer + "<br/>編號:" + obj.betId + "</td>")
				.append("<td>" + obj.marketTypeName + "</td>")
				.append("<td>" + obj.leagueName + "<br/>" + obj.eventName + "<br/>" + obj.name + "[" + obj.handicap + "]@" + obj.odds + "</td>")
				.append("<td>" + obj.stake + "</td>")
				.append("<td>" + obj.winLoss + "</td>")
				.append("<td>" + obj.commission + "</td>")
				.append("<td>" + obj.status + "</td>")
				$("#historybody").append(tr);
			});

		});
	}
	function MakeGameInfo(obj){



	}


