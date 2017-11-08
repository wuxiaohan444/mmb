/**
 * Created by HUCC on 2017/11/2.
 */

function getid() {
    var search = location.search;
    search = search.slice(1);
    var arr = search.split("&");
    var Arr = arr[0].split("=");
    var id = Arr[1];
    return id;
}

