mainimg = document.getElementById("mainImg");

var imgsrc = ["test.jpg", "test1.gif", "test2.jpg"];
let cnt = 0;


function changeImg(){
    if(cnt == imgsrc.length){
        cnt = 0;
    }
    mainimg.src = imgsrc[cnt++];
}

// setInterval(changeImg, 1000);
