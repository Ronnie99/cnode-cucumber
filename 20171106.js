var a = 'abcdehiwafbn';
var c = {};
for (var x in a){
    console.log (x) 
    console.log(a[x])
    for ( var key,value in c){
        console.log(c[key])
        console.log(c[value])
        var x = c[value]
        var  key = a[x]
    }
    
}