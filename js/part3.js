/**
 * Created by gaochang on 2016/8/16.
 */
// 创建Map实例
var bmap3 = new BMap.Map("map3");    // 创建Map实例
bmap3.addControl(new BMap.MapTypeControl());   //添加地图类型控件
bmap3.setCurrentCity("南京");          // 设置地图显示的城市 此项是必须设置的
bmap3.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

bmap3.setMapStyle({
    styleJson:[
        {
            "featureType": "background",
            "elementType": "all",
            "stylers": {
                "color": "#ffffff",
                "visibility": "on"
            }
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": {
                "visibility": "off"
            }
        },
        {
            "featureType": "subway",
            "elementType": "all",
            "stylers": {
                "visibility": "on"
            }
        },
        {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": {
                "visibility": "on"
            }
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": {
                "visibility": "off"
            }
        }
    ]
});
bmap3.centerAndZoom(new BMap.Point(118.801741,32.06498), 13); // 初始化地图,设置中心点坐标和地图级别

