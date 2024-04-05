function createCookie(name, value) {
    //var millis = Date.now() + 3600000; //1시간
    //var time = new Date(millis);

    var time = new Date();
    time.setDate( time.getDate() + 1 ); //현재 시간으로부터 + 1일  

    //쿠키생성
    document.cookie = name + "=" + value + "; expires=" + time.toUTCString(); 
}

//쿠키 찾기
function findCookie(find) {

    var coo = document.cookie; //쿠키 얻음
    var arr = coo.split("; "); //쿠키 스플릿

    for(var i = 0; i < arr.length; i++) {
        //console.log(arr[i]);
        if(arr[i].indexOf( find + "=" ) != -1 ) { //indexOf != -1 은 찾았음.
            console.log( arr[i].replace(find + "=", "") ) //쿠키 값 찾기
            return true; //쿠키이름이 있다면 true반환
        }
    }

}