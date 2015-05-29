/**
replace volname of Q to 函名

*/

var q_vol=require("./q_vol");
var fs=require("fs");
var jinglu=JSON.parse(fs.readFileSync("jinglu_vol.json","utf8"));
var volname={};

var out={};
var parseQ=function(id,q) {
	//var m=q.match(/\?Q  ([' a-z]+?), (['a-z]*)/);
	q=q.replace(/\?Q ([' a-z]+?), (['a-z]*)/,function(m,m1,m2){
		var vname=(m1+'_'+m2).trim();
		if (q_vol[vname]) {
			return q_vol[vname]+"@";
		} else {
			console.log(m)
			return "??"+m;
		}
	})
	return q;
}
for (var i=0;i<jinglu.length;i++) {
	var record=jinglu[i];
	for (var key in record) {
		var recension=key[0];
		if (recension=="Q") {
			record[key]=parseQ(key,record[key]);
		}
	}
}

fs.writeFileSync("jinglu_volok.json",JSON.stringify(jinglu,""," "),"utf8");
//console.log(volname);