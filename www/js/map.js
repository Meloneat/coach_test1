/*重要问题指南*/
/*  2016/11/23 今天解决了一个昨天遇到的问题，那就是浏览器调试成功的情况下，ionic build android 到真机上去无法成功，
//  显示为空白页，我后来查询到三种解决办法：
//  1. 打开目录下platforms下的android文件夹下的AndroidManifest.xml文件,添加<uses-permission android:name="android.permission.INTERNET" />(使应用获得networking APIs的使用权限)
        然而本版本已重复该语句；
        更多 Android uses-permission 权限列表详解请进：http://www.jb51.net/article/49639.htm
//  2. 将百度的引用apk的"api"修改为"getscript"
//  3. 增加控件cordova-plugin-whitelist（链接：http://www.cnblogs.com/liyujun1988/p/5581994.html）
        原因是cordova 5.x的版本增加了“Content-Security-Policy”用于解决安全访问的问题。
        默认情况下，只能访问本机资源。
//  调试结果证明，方法3可以解决该问题，并且本机cordova版本为6.3.1，增加whitelist控件后的其他影响将继续观察；
*/
var map = new BMap.Map("container");
var point = new BMap.Point(119.009, 30.900);//定位
var my_location = new BMap.Geolocation()
var marker = new BMap.Marker(point);        // 创建标注
/*  我会设置：
    No1:一个按钮显示我的方位
    No2：缩进的按钮
    No3: 本人胡旭的位置
    No4：一个可输入文本框，可找寻饭馆
*/
var navopt = [{type:BMAP_NAVIGATION_CONTROL_LARGE},{type:BMAP_NAVIGATION_CONTROL_SMALL}
                ,{type:BMAP_NAVIGATION_CONTROL_PAN},{type:BMAP_NAVIGATION_CONTROL_ZOOM}]
                //信息窗口参数
                //信息窗口参数
var infopt = {
  width : 250,     // 信息窗口宽度
  height: 100,     // 信息窗口高度
  title : "Hello"  // 信息窗口标题
}
var infoWindow = new BMap.InfoWindow("World", infopt);  // 创建信息窗口对象

//alert("nihao");
// context
map.centerAndZoom(point,9);
map.addControl(new BMap.OverviewMapControl());          //缩略地图控件
map.addControl(new BMap.NavigationControl(navopt[0]));  //地图平移缩放控件
/* 发现一个问题，地图平移缩放空间用不了 */

map.addControl(new BMap.GeolocationControl());          //定位控件,针对移动端
map.addOverlay(marker);                               // 将标注添加到地图中
map.openInfoWindow(infoWindow,point);      // 将信息窗口添加到地图中
