//http://trunk-hackathon.herokuapp.com/api/{id}/{page}
// //static/画像名
const BASE_URL="https://f25c46ee.ngrok.io/static/";
let windowHeight=0;
let fstCard=0;
let endCard=10;
let cardNum=10;
let userId=null;
$(function(){
    liff.init(
        data => {
          // Now you can call LIFF API
          userId = data.context.userId;
        },
        err => {
          // LIFF initialization failed
        }
      );      
    $('#loading').hide();
    if(userId!=null){
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
            getImg(1,userId);
        });
    }
});

const getImg=function(userId,page){
    $('#loading').show();
    $.ajax({
        url: "https://trunk-hackathon.herokuapp.com/history.php?page=1&tero_id="+userId,
        type: "GET",
    }).done((res)=>{
        $('#loading').hide();
        let imgName=res;
        let delayTime=0;
        const initAplyTime=200;
        for(let i=fstCard;i<endCard;i++){
            $('.row-result div[class^="col-"]').append('<div class="img-wrap"><img src='+BASE_URL+imgName[i].data+' class="img-result center-content"></div>');
        }
        for(let i=fstCard;i<fstCard+10;i++){
            $('.img-wrap').eq(i).delay(initAplyTime+delayTime).fadeIn(initAplyTime);
            delayTime+=200;
        }
    }).fail((error)=>{
        $('#loading').hide();
        console.log('データを取得できませんでした');
    })
}