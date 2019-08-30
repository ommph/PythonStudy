$(function(){

	/*点击加号弹出菜单内容*/
	$(".f-touchstartjia").click(function(){
		$(".f_touchstartjia_content").toggle();
	})

	$(".guanzhu_default").click(function(){
		$(this).find("span").text(' 已关注');
		$(".f_guanzhu_sucess").show();
		setTimeout(function(){
			$(".f_guanzhu_sucess").hide();
		},3000)
	})

	$(".renling_default").click(function(){
		$(".renling").show();
		$(this).hide();
	})


 // $(".f_touchstartspeak").on({
 //        touchstart: function(e){
 //        	$(this).css({
 //        		"background":"#e46d4a",
 //        		"color":"#fff"
 //        	});
 //        	$(this).text("松开结束");
 //        	$(".f_speak").show();
 //           e.preventDefault();
 //        },
 //        touchmove: function(e){ 
 //        	$(".f_speak").hide();
 //        	$(this).css({
 //        		"background":"#fff",
 //        		"color":"#e46d4a"
 //        	});
 //        	$(this).text("按住说话");
 //        	e.preventDefault();
 //        }
 //    })


 /*点击更多消息显示的内容*/
 $("#more_message").click(function(){
 	$(".f-morecontent").slideDown();
 })


 /*消息列表长按弹窗信息内容*/
 var timeOutEvent=0;
 var num;
 var cityName;
  $(".f_messagelist").on({
        touchstart: function(e){
          timeOutEvent = setTimeout("longPress()",500); 
          num = $(this).index();
          e.preventDefault();

        },
        touchmove: function(){
           clearTimeout(timeOutEvent); 
           timeOutEvent = 0;
        },
        touchend: function(){
            clearTimeout(timeOutEvent);
        }
    })

   


     $("#confirm").click(function(){ 
          $(".f_messagewrap").find('.f_messagelist:eq('+num+')').remove()
         $(".f_message_pop").hide();
        $("#TB_overlayBG").hide();
    
     
  })


  $("#z-cancel").click(function(){
  	 $("#TB_overlayBG").hide();
     $(".f_message_pop").hide();
  })


  /*车牌查询弹出省份*/
  $("#btn").click(function(){
    $(".f_pnumber_pop").toggle();    
  })


  $(".f_pnumber_pop").find(".z_pnumber_list ul li").click(function(){
    cityName = $(this).html();
    $("#btn").val(cityName);
    $(".f_pnumber_pop").hide();   
})

  /*认领结果点击好之后的效果*/
  $("#renling_confirm").click(function(){
    $(".renlingansert_overlay").show();
    $(".f_rlpop").show();
  })

  $(".z_renlinganser_good").click(function(){
    $(".renlingansert_overlay").hide();
    $(".f_rlpop").hide();
  })

  /*点击设置手机和短信的交互*/
  $(".circle ").click(function(){
    $(this).hide();
    $(".circle_right").show();
    $(".f_reset_telbtn").css("background","#999");
  })

   $(".circle_right").click(function(){
    $(this).hide();
    $(".circle").show();
    $(".f_reset_telbtn").css("background","#e46d4a");
  })

    $(".z_smscircle ").click(function(){
    $(this).hide();
    $(".z_smscircleright").show();
    $(".z_sms").css("background","#999");
  })

   $(".z_smscircleright").click(function(){
    $(this).hide();
    $(".z_smscircle").show();
    $(".z_sms").css("background","#e46d4a");
  })



// $(".cht_listcontent").click(function(){
//     var index = 1;
//     var ele = document.getElementById("myaudio"+index);
//     alert(ele);
// })
    

    
})






function longPress(){ 
    timeOutEvent = 0; 
    $("#TB_overlayBG").show();
    $(".f_message_pop").show();
}


 // function autoPlay(){
	// var myAuto = document.getElementById('myaudio');
	// myAuto.play();
	// }

function autoPlay1(index){
  var myAuto = document.getElementById(index);
  myAuto.play();

    // var index = 1;
    // var ele = document.getElementById("myaudio"+index);
    // alert(ele);

    //  if(ele != null)
    //   {      
    //   index += 1;      
    //   ele = document.getElementById("myaudio"+index);      
    //   ele.play();
    //   }


     
   
  }


 






