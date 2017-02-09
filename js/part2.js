/**
 * Created by gaochang on 2016/8/17.
 */
var map2 = new BMap.Map("map2", {
    enableMapClick: false,
});    // 创建Map实例
map2.centerAndZoom(new BMap.Point(119.59738,32.714414), 8);  // 初始化地图,设置中心点坐标和地图级别
map2.addControl(new BMap.MapTypeControl());   //添加地图类型控件
map2.setCurrentCity("江苏省");          // 设置地图显示的城市 此项是必须设置的
map2.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
map2.setMapStyle({
    styleJson: [
        {
            featureType: 'highway',
            elementType: 'geometry',
            stylers: {
                visibility: 'off'
            }
        }, {
            featureType: 'highway',
            elementType: 'geometry.fill',
            stylers: {
                visibility: 'off'
            }
        }, {
            featureType: 'highway',
            elementType: 'labels',
            stylers: {
                visibility: 'off'
            }
        },
    ]});