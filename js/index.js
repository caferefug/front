$(function(){
    $('button').on('click',function(){
        $('input').click();
    });
    $('input').on('change',function(e){
        let img=this.files[0];
        if(img!=null){
            const imgName=this.files[0].name;
            $('#txt-imgName').text(imgName);
            let fr=new FileReader();
            fr.onload=function(e){
                $('img').attr('src',e.target.result);
            }
            fr.readAsDataURL(e.target.files[0]);
        }else{
            $('#txt-imgName').text('写真を選択してください')
        }
    })
});