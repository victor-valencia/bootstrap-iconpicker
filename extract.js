function unique(list) {
    var result = [];
    $.each(list, function(i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
}

var a = [];

a.sort();
a = unique(a);

var b = document.querySelector("body").innerHTML = "'" + a.join("',</br>'") + "'";


//For MaterialDesign
var a = [];
$('i.zmdi').each(function(v){
	a.push($(this).attr('class').replace('zmdi ','').replace(' zmdi-hc-fw',''));
});
console.log(a);
var b = document.querySelector("body").innerHTML = "'" + a.join("',</br>'") + "'";
