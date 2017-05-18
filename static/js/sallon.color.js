/**
 * Created by yubo on 2017/5/3.
 */
;(function($){
    var html = '<div class="sallon_color" style="display:none;">'+
        '<div class="sallon_top">'+
        '<input type="text" class ="sallonInput"  id="colorPicker"><a href="" class="sallon_clearColor">清除颜色</a>'+
        '</div>'+
        '<p class="sallon_flag">主题颜色</p>'+
        '<div class="sallon_bgs">'+
        '<a style="background-color:#ffffff;border-width:1px;" c="ffffff">&nbsp;</a>'+
        '<a style="background-color:#000000;border-width:1px;" c="000000">&nbsp;</a>'+
        '<a style="background-color:#eeece1;border-width:1px;" c="eeece1">&nbsp;</a>'+
        '<a style="background-color:#1f497d;border-width:1px;" c="1f497d">&nbsp;</a>'+
        '<a style="background-color:#4f81bd;border-width:1px;" c="4f81bd">&nbsp;</a>'+
        '<a style="background-color:#c0504d;border-width:1px;" c="c0504d">&nbsp;</a>'+
        '<a style="background-color:#9bbb59;border-width:1px;" c="9bbb59">&nbsp;</a>'+
        '<a style="background-color:#8064a2;border-width:1px;" c="8064a2">&nbsp;</a>'+
        '<a style="background-color:#4bacc6;border-width:1px;" c="4bacc6">&nbsp;</a>'+
        '<a style="background-color:#f79646;border-width:1px;" c="f79646">&nbsp;</a>'+
        '</div>'+
        '<div class="sallon_bgs" style="padding-top:6px;">'+
        '<a style="background-color:#f2f2f2;border-top-width:1px;" c="f2f2f2">&nbsp;</a>'+
        '<a style="background-color:#7f7f7f;border-top-width:1px;" c="7f7f7f">&nbsp;</a>'+
        '<a style="background-color:#ddd9c3;border-top-width:1px;" c="ddd9c3">&nbsp;</a>'+
        '<a style="background-color:#c6d9f0;border-top-width:1px;" c="c6d9f0">&nbsp;</a>'+
        '<a style="background-color:#dbe5f1;border-top-width:1px;" c="dbe5f1">&nbsp;</a>'+
        '<a style="background-color:#f2dcdb;border-top-width:1px;" c="f2dcdb">&nbsp;</a>'+
        '<a style="background-color:#ebf1dd;border-top-width:1px;" c="ebf1dd">&nbsp;</a>'+
        '<a style="background-color:#e5e0ec;border-top-width:1px;" c="e5e0ec">&nbsp;</a>'+
        '<a style="background-color:#dbeef3;border-top-width:1px;" c="dbeef3">&nbsp;</a>'+
        '<a style="background-color:#fdeada;border-top-width:1px;" c="fdeada">&nbsp;</a>'+
        '<a style="background-color:#d8d8d8" c="d8d8d8">&nbsp;</a>'+
        '<a style="background-color:#595959" c="595959">&nbsp;</a>'+
        '<a style="background-color:#c4bd97" c="c4bd97">&nbsp;</a>'+
        '<a style="background-color:#8db3e2" c="8db3e2">&nbsp;</a>'+
        '<a style="background-color:#b8cce4" c="b8cce4">&nbsp;</a>'+
        '<a style="background-color:#e5b9b7" c="e5b9b7">&nbsp;</a>'+
        '<a style="background-color:#d7e3bc" c="d7e3bc">&nbsp;</a>'+
        '<a style="background-color:#ccc1d9" c="ccc1d9">&nbsp;</a>'+
        '<a style="background-color:#b7dde8" c="b7dde8">&nbsp;</a>'+
        '<a style="background-color:#fbd5b5" c="fbd5b5">&nbsp;</a>'+
        '<a style="background-color:#bfbfbf" c="bfbfbf">&nbsp;</a>'+
        '<a style="background-color:#3f3f3f" c="3f3f3f">&nbsp;</a>'+
        '<a style="background-color:#938953" c="938953">&nbsp;</a>'+
        '<a style="background-color:#548dd4" c="548dd4">&nbsp;</a>'+
        '<a style="background-color:#95b3d7" c="95b3d7">&nbsp;</a>'+
        '<a style="background-color:#d99694" c="d99694">&nbsp;</a>'+
        '<a style="background-color:#c3d69b" c="c3d69b">&nbsp;</a>'+
        '<a style="background-color:#b2a2c7" c="b2a2c7">&nbsp;</a>'+
        '<a style="background-color:#92cddc" c="92cddc">&nbsp;</a>'+
        '<a style="background-color:#fac08f" c="fac08f">&nbsp;</a>'+
        '<a style="background-color:#a5a5a5" c="a5a5a5">&nbsp;</a>'+
        '<a style="background-color:#262626" c="262626">&nbsp;</a>'+
        '<a style="background-color:#494429" c="494429">&nbsp;</a>'+
        '<a style="background-color:#17365d" c="17365d">&nbsp;</a>'+
        '<a style="background-color:#366092" c="366092">&nbsp;</a>'+
        '<a style="background-color:#953734" c="953734">&nbsp;</a>'+
        '<a style="background-color:#76923c" c="76923c">&nbsp;</a>'+
        '<a style="background-color:#5f497a" c="5f497a">&nbsp;</a>'+
        '<a style="background-color:#31859b" c="31859b">&nbsp;</a>'+
        '<a style="background-color:#e36c09" c="e36c09">&nbsp;</a>'+
        '<a style="background-color:#7f7f7f" c="7f7f7f">&nbsp;</a>'+
        '<a style="background-color:#0c0c0c" c="0c0c0c">&nbsp;</a>'+
        '<a style="background-color:#1d1b10" c="1d1b10">&nbsp;</a>'+
        '<a style="background-color:#0f243e" c="0f243e">&nbsp;</a>'+
        '<a style="background-color:#244061" c="244061">&nbsp;</a>'+
        '<a style="background-color:#632423" c="632423">&nbsp;</a>'+
        '<a style="background-color:#4f6128" c="4f6128">&nbsp;</a>'+
        '<a style="background-color:#3f3151" c="3f3151">&nbsp;</a>'+
        '<a style="background-color:#205867" c="205867">&nbsp;</a>'+
        '<a style="background-color:#974806" c="974806">&nbsp;</a>'+
        '</div>'+
        '<p class="sallon_flag">标准颜色</p>'+
        '<div class="sallon_bgs">'+
        '<a style="background-color:#c00000;border-width:1px;" c="c00000">&nbsp;</a>'+
        '<a style="background-color:#ff0000;border-width:1px;" c="ff0000">&nbsp;</a>'+
        '<a style="background-color:#ffc000;border-width:1px;" c="ffc000">&nbsp;</a>'+
        '<a style="background-color:#ffff00;border-width:1px;" c="ffff00">&nbsp;</a>'+
        '<a style="background-color:#92d050;border-width:1px;" c="92d050">&nbsp;</a>'+
        '<a style="background-color:#00b050;border-width:1px;" c="00b050">&nbsp;</a>'+
        '<a style="background-color:#00b0f0;border-width:1px;" c="00b0f0">&nbsp;</a>'+
        '<a style="background-color:#0070c0;border-width:1px;" c="0070c0">&nbsp;</a>'+
        '<a style="background-color:#002060;border-width:1px;" c="002060">&nbsp;</a>'+
        '<a style="background-color:#7030a0;border-width:1px;" c="7030a0">&nbsp;</a>'+
        '</div>'+
        '</div>';
    var colorPicker = function(_this,_default,_id){
        $.minicolors = {
            defaults: {
                animationSpeed: 50,
                animationEasing: 'swing',
                change: null,
                changeDelay: 0,
                control: 'hue',
                defaultValue: '',
                format: 'hex',
                hide: null,
                hideSpeed: 100,
                inline: false,
                keywords: '',
                letterCase: 'lowercase',
                opacity: false,
                position: 'bottom left',
                show: null,
                showSpeed: 100,
                theme: 'default',
                swatches: []
            }
        };

        $("#"+_id+" .sallonInput").minicolors({
            defaultValue:_default,
            change: function(value, opacity) {
                //TODO 输出选中颜色
                a_choose(_this,value)
            }
        });
    }
    var colorInput = {
        zIndex:9999,
        html : "<div style='display:inline-block;width:24px;height:24px;vertical-align: middle;border-radius:" +
        " 5px;border: 1px solid #eee;'></div>",
        initColor : function(_input,_color,_id){
            $(_input).wrap(this.html).css("display","none");
            $(_input).parent().css({
                "background-color":_color
            })
            $(_input).val(_color);
            $(_input).parent().on("click",function(){
                showSallonColorBox(this,_id);
            });
            var _this = $(_input).parent();
            /*绑定a的输出值*/
            this._bindA(_this,_id);
        },
        _bindA:function(_this,_id){
            $("#"+_id).find(".sallon_bgs a").each(function(){
                $(this).on("click",function(){
                    var c = $(this).attr("c");
                    $("#"+_id+" .sallonInput").minicolors("value","#"+c);
                    a_choose(_this,"#"+c);
                })
            })
        }
    }
    var showSallonColorBox = function(_this,_id){
        //初始化颜色选择框上面的color picker
        var _default = $(_this).find("input").val() != undefined?$(_this).find("input").val():"#FFFFFF";
        colorPicker(_this,_default,_id);
        //显示在对应的地方
        var t = $(_this).offset().top+17;//top
        var l = $(_this).offset().left-8;//left
        $("#"+_id+" .sallon_color").css({
            top:t+"px",
            left:l+"px",
            "z-index":colorInput.zIndex
        }).show(function(){
            $(document).on("click",function(e){
                var target = e.target;
                if($(target).parents(".sallon_color").length == 0){
                    $(".sallon_color").hide(function(){
                        $(document).off("click");
                        // destroyAll();
                    });
                }
            })
        });
    }
    function _initSallonDiv(_this,_id){
        //将颜色选择框初始化到body里面并隐藏
        if($("#sallon_color").length==0){
            var di = "<div id='"+_id+"'>"+html+"</div>"
            $("body").append(di);
        }
        var _default = $(_this).find("input").val() != undefined?$(_this).find("input").val():"#FFFFFF";
        //初始化颜色选择框，并且绑定点击事件
        colorInput.initColor($(_this),_default,_id);
    }
    /*输出颜色*/
    function a_choose(_this,_color){
        console.log(_this)
        $(_this).css({
            "background-color":_color
        })
        $(_this).find(">input").val(_color);
    }
    $.fn.sallonColor = function(){
        //页面加载完成，现初始化input框
        var id = "sallon"+parseInt(Math.random()*10000);
        _initSallonDiv($(this),id);
    }

})(jQuery);

