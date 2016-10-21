function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

function ajax(type, url){
    return new Promise(function(resolve, reject){
        var http_request = new XMLHttpRequest();
        http_request.open(type, "http://127.0.0.1:8000/"+ url);
        http_request.onload = function() {
            if (http_request.status === 200){
                resolve(JSON.parse(http_request.response));
            } else {
                reject(Error(http_request.statusText));
            }
        };
        http_request.onerror = function(){
            reject(Error("network error"));
        };
        http_request.send();
    });
}
export default ajax;
