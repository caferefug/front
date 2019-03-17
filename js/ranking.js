let lineChart;
$(function(){
    const ctx=$('#feedback-graph').attr('id');
    $('canvas').attr('height',"250px");
    let datas=[];
    let names=[];
    for(let i=0;i<10;i++){
        names.push('a');
    }
    $('header button').on('click',function(){
        $('header button').addClass('deactive');
        $('article').addClass('hidden');
        let i=$('header button').index(this);
        $(this).removeClass('deactive');
        $('article').eq(i).removeClass('hidden');
    });
    $.ajax({
        url: "https://trunk-hackathon.herokuapp.com/ranking.php",
        type: "GET",
    }).done((res)=>{
        $('#loading').hide();
        console.log(res);
        for(let i=0;i<10;i++){
            datas[i]=res[i].score;
            if(res[i].user_name!=false){
                names[i]=res[i].user_name
            }else{
                names[i]="名無し"
            }
        }
        for(let i=0;i<10;i++){
            $('.ranking-area .content').append('<div class="content-item">'+(i+1)+'位'+'<br>'+names[i]+'<br>'+datas[i]+'票</div>');
        }
        lineChart=new Chart(ctx, {
            type: 'bar',
            data:{
                labels: names,
                datasets:[{
                    label: names,
                    data: datas,
                    backgroundColor: "#ffffff",
                }]
            }
        });
    }).fail((error)=>{
        $('#loading').hide();
        console.log('データを取得できませんでした')
    })
    //document.getElementById('feedback-graph').addEventListener('click',(e)=> console.log(lineChart.getElementsAtEvent(e)))
});