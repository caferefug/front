$(function(){
    $.ajax({
        url: "https://trunk-hackathon.herokuapp.com/feedback.php?tero_id=1",
        type:'GET',
    }).done((res)=>{
        console.log(res);
    }).fail((res)=>{

    });
});