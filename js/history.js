//http://trunk-hackathon.herokuapp.com/api/{id}/{page}
// //static/画像名
const BASE_URL="";
let windowHeight=0;
let fstCard=0;
let endCard=10;
let cardNum=10;
$(function(){
    getImg(1,1);
    //リロード時ajaxで全権取得
    $(window).bottom({proximity: 0.10});
    $(window).bind('bottom',function(){
        var obj=$(this);
        fstCard+=10;
        if(cardNum<=10){
            endCard=cardNum;
        }else{
            endCard+=10;
            cardNum-10;
        }
        getImg(1,1);
    });
});

const getImg=function(userId,page){
    $.ajax({
        url: "https://trunk-hackathon.herokuapp.com/history.php?page=1&tero_id=1",
        type: "GET",
    }).done((res)=>{
        console.log(res);
        let imgName=res.data;
        let delayTime=0;
        const initAplyTime=200;
        for(let i=fstCard;i<endCard;i++){
            $('.row-result div[class^="col-"]').append('<div class="img-wrap"><img src='+BASE_URL+imgName+' class="img-result center-content"></div>');
        }
        for(let i=fstCard;i<fstCard+10;i++){
            $('.img-wrap').eq(i).delay(initAplyTime+delayTime).fadeIn(initAplyTime);
            delayTime+=200;
        }
    }).fail((error)=>{
        let delayTime=0;
        const initAplyTime=200;
        for(let i=fstCard;i<endCard;i++){
            $('.row-result div[class^="col-"]').append('<div class="img-wrap"><img src='+BASE_URL+' class="img-result center-content"></div>');
        }
        for(let i=fstCard;i<endCard;i++){
            $('.img-wrap').eq(i).delay(initAplyTime+delayTime).fadeIn(initAplyTime);
            delayTime+=200;
        }
    })
}