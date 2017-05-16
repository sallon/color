# color
# 一个简单的颜色选择器，自主开发！
##################################
#一、操作流程
1、页面加载完成，现初始化input框
{
    1>给input包一个div
    2>隐藏当前input
    3>给div绑定一个click事件 showSallonPicker
}
2、方法 showSallonPicker
showSallonPicker{
    1、先获取当前初始化的这个div的背景色，也就是里面包含的input的val（）===》_default；
    2、初始化sallonPicker中的colorPicker（），并且将获取到的_default初始化进去
    3、初始化完成colorPicker之后还要给清除颜色的按钮绑定清除事件 clearColor();
    4、显示sallonPicker
    5、绑定常用颜色a的click事件 a_choose();
}
3、方法  a_choose
a_choose{
    1、输出当前c的值
    2、将c的值初始化到colorpicker
    3、将c的值返回设置到div的背景色，并且将c值写入到div包含的input value
    4、隐藏sallonPicker
    5、destroy colorPicker
}
4、方法clearColor
clearColor(){
    1、清除colorpicker里面的颜色设置为空
    2、将div的背景色设置为空，并清除input的值
    3、隐藏sallonPicker
    4、destroy colorPicker
}
