/**
 * Created by lenovo on 2017/5/22.
 */
;(function($){
    $.extend({
        alert:function(config){
           var config=$.extend({
               header:[],
               section:null,
               footer:[],
               left:0,
               top:40,
               width:360,
               height:439
           },config);
           var left=config.left-config.width/2+8;
           var alertBox=null;
           if(!$(".mark").size()){
               alertBox=$("<div class='mark'></div>").css({"width":config.width,"height":config.height,"left":left,"top":config.top}).appendTo("#wrap");
           }else{
               $(".mark").css({"width":config.width,"height":config.height,"left":left,"top":config.top});
           }
           $(document).on("click",function(){
               $(".mark").remove();
           })
        },
        hover:function(config){
            var config=$.extend({
                headerImg:"",
                userName:"",
                description:"",
                left:0
            },config);
            var alertBox=null;
            if(!$(".hover").size()){
                alertBox=$("<div class='hover'></div>").css({"left":config.left+30}).appendTo("#wrap");
            }else{
                $(".hover").css({"left":config.left+30});
            }
            $(".leftNav").on("mouseleave",function(){
                $(".hover").remove();
            })
        }
    })
})(jQuery);