function ajax(type, url){
    var http_request = new XMLHttpRequest();
    http_request.open(type, "http://127.0.0.1:8000/"+ url);
    http_request.send(null);
    http_request.onreadystatechange = function(){
        var done = 4,
            ok = 200;
        if (http_request.readyState === done){
            if (http_request.status === ok){
                console.log(http_request.responseText);
            } else {
                console.log("ERROR: ", http_request.status);
            }
        }
    }
    console.log(url);
}

export default ajax;
