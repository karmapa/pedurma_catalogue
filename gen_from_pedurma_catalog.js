/**
  input1 : Perdurma catalog by Paul G. Hackett
  input2 : bampo mapping of editions

*/
var fs=require("fs");
var jinglu=JSON.parse(fs.readFileSync("jinglu.json","utf8"));
var tsv=fs.readFileSync("bampo.tsv","utf8").split(/\r?\n/);

var out=[];
for (var i=1;i<tsv.length;i++) {
	var items=tsv[i].split("\t");
	console.log(items)
}
// cone missing 149, 273, 274, 364, 373, 422, 429, 981
//lithang missing 592,593,681


