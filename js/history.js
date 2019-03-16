//http://trunk-hackathon.herokuapp.com/api/{id}/{page}
$(function(){
    $('#getImgBtn').on('click',function(){
        getImg(1,1);
    });
});

const getImg=function(userId,page){
    $.ajax({
        url: "http://hogehoge.herokuapp.com/api/1/1",
        type: "POST",
        dataType: "json"
    }).done((res)=>{
        console.log(res);
        for(let i=0;i<10;i++){
            $('.row-result>div').append('<div class="img-result"></div>');
            $('.img-result').eq(i).show(500);
        }
    }).fail((error)=>{
        let delayTime=0;
        const initApyTime=300;
        for(let i=0;i<10;i++){
            $('.row-result>div').append('<div class="img-wrap"><img src="hondana.jpg" class="img-result center-content"></div>').hide().show(initApyTime+delayTime);
            delayTime+=100;
        }
    })
}