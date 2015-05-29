/*
 split multiple vol
*/
var jinglu=require("./jinglu.json");
var out=[];
var splitjinglu=function(entries) {
	var E={},E2={};
	for (var key in entries) {
		var V=entries[key];
		if (V.indexOf(";")>-1){
			V.split(";").map(function(vol,idx){
				var newkey=key;
				if (idx>0) newkey=key+String.fromCharCode(65+idx);
				E[newkey]=vol;
			});
		} else {
			E2[key]=entries[key];
		}
	}
	for (var i in E2) {
		E[i]=E2[i];
	}
	return E;
}

require("fs").writeFileSync("jinglu_vol.json",JSON.stringify(jinglu.map(splitjinglu),""," "),"utf8");