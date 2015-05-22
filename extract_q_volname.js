/**
extract volname of Q

*/
var fs=require("fs");
var jinglu=JSON.parse(fs.readFileSync("jinglu.json","utf8"));
var volname={};

var out={};
var parseQ=function(id,q) {
	var m=q.match(/ ([' a-z]+?), (['a-z]*)/);
	var v=q.match(/vol. (\d+)/);
	if (m) {
		var vname=(m[1]+'_'+m[2]).trim();
		if (!volname[vname]) volname[vname]=v[1];

		//console.log(id,m[1],'-',m[2],'vol',v[1]);
	}
}
for (var i=0;i<jinglu.length;i++) {
	var record=jinglu[i];
	for (var key in record) {
		var recension=key[0];
		if (recension=="Q") {
			parseQ(key,record[key]);
		}
	}
}


console.log(volname);