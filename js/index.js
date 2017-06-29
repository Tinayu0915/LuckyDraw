$(function(){
        var ind=0;
        var i=0;
        var click_status=false;
        var click_num;
        var User=[
            {angle:720,prize:"300M流量"},
            {angle:765,prize:"100M流量"},
            {angle:810,prize:"500M流量"},
            {angle:855,prize:"30元话费"},
            {angle:900,prize:"300M流量"},
            {angle:945,prize:"100M流量"},
            {angle:990,prize:"500M流量"},
            {angle:1035,prize:"30元话费"}          
        ];
        var record=[];
        if($.cookie("click_num")==undefined ||$.cookie("click_num")==''){
            click_num=5;
            $.cookie("click_num",click_num,{expires:1});
            $(".text2 span").html(click_num);
        }else if($.cookie("click_num")==0){
             click_num=$.cookie("click_num");
            $(".text2 span").html(click_num);
            $(".pointer").css({"background":'url(image/pointer_grey.png)'});
        }else{
            click_num=$.cookie("click_num");
            $(".text2 span").html(click_num);
        }
        $("body").on("click",".delete",function(){
            $(".cover").hide()
        });
        $("body").on("click",".confirmation",function(){
            $(".cover").hide()
        })
        $(".pointer").on("click",function(){
            if(click_status==false){
               ind=parseInt(Math.random()*8);
                click_status=true;
                set=setInterval(function(){
                    if(i<=User[ind].angle){
                        i=i+45;
                        $(".circle").css({"transform":'rotate('+i+'deg)'});
                    }else{
                        clearInterval(set);
                        
                        click_num--;
                    $.cookie("click_num",click_num,{expires:1});
                        $(".text2 span").html(click_num);
                        if(click_num>0){    
                        }else{
                        $(".pointer").css({"background":'url(image/pointer_grey.png)'})
                        };                          
                        i=0;
                        switch(ind){
                            case 0:
                            $(".pop-up").css({"background":'url(image/04.png)'})
                            $(".cover").show();
                            record.push(User[ind].prize)
                            break;
                            case 1:
                            $(".pop-up").css({"background":'url(image/02.png)'})
                            $(".cover").show();
                            record.push(User[ind].prize)
                            break;
                            case 2:
                            $(".pop-up").css({"background":'url(image/03.png)'})
                            $(".cover").show();
                            record.push(User[ind].prize)
                            break; 
                            case 3:
                               $(".pop-up").css({"background":'url(image/01.png)'})
                            $(".cover").show();
                            record.push(User[ind].prize)
                            break;
                            case 4:
                            $(".pop-up").css({"background":'url(image/04.png)'})
                            $(".cover").show();
                            record.push(User[ind].prize)
                            break;
                            case 5:
                            $(".pop-up").css({"background":'url(image/02.png)'})
                            $(".cover").show();
                                record.push(User[ind].prize)
                            break;
                            case 6:
                            $(".pop-up").css({"background":'url(image/03.png)'})
                            $(".cover").show();
                            record.push(User[ind].prize)
                            break;
                            case 7:
                            $(".pop-up").css({"background":'url(image/01.png)'})
                            $(".cover").show();
                            record.push(User[ind].prize)
                            break;
                        };
                        click_status=false
                    }
            },1000/24);
            console.log(record);
            if(click_num>0){    
                        }else{
                           click_status=true;
                           clearInterval(set);
                        }    
            }
            
        })
        
        $(".rules").on("click",function(){
            
            $(".rules-cover").show();
        })
        $(".rules-cross").on("click",function(){
            $(".rules-cover").hide()
        })
        
        $(".record").on("click",function(){
            location.href="#"
        })
      	
    
    })
            
