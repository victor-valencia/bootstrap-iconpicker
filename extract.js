function unique(list) {
    var result = [];
    $.each(list, function(i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
}

var a = ["alert","alert-circled","wineglass","woman","wrench","xbox"];

a.sort();
a = unique(a);

var b = document.querySelector("body").innerHTML = "'" + a.join("',</br>'") + "'";
