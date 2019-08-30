wx.ready(function () {

  // 3 智能接口
  var voice = {
    localId: '',
    serverId: ''
  };

  document.querySelector('#startRecord').addEventListener("touchstart",startRecord );
  document.querySelector('#startRecord').addEventListener("touchmove",moveSpeak) ;
  document.querySelector('#startRecord').addEventListener("touchend",stopRecord) ;

function startRecord(){
  wx.startRecord({
      cancel: function () {
        alert('用户拒绝授权录音');
      }
    });
       //改变背景颜色            
          $(this).css({
            "background":"#e46d4a",
            "color":"#fff"
          });
          $(this).text("松开结束");
          $(".f_speak").show();

};

function moveSpeak(){
   $(".f_speak").hide(); 
    $(this).css({
            "background":"#fff",
            "color":"#e46d4a"
          });
    $(this).text("按住说话");
  };
  
 
function stopRecord(){
             //停止录音
           wx.stopRecord({
              success: function (res) {
                voice.localId = res.localId;
              },
              fail: function (res) {
                alert(JSON.stringify(res));
              }
            });       

           //松开手指隐藏
          $(".f_speak").hide();
          $(this).css({
            "background":"#fff",
            "color":"#e46d4a"
          });
          $(this).text("按住说话");

           //上传语音         
          wx.uploadVoice({
          localId: voice.localId,
          success: function (res) {
            console.log('上传语音成功，serverId 为' + res.serverId);
            voice.serverId = res.serverId;
          }
        });  

 };
   
});

