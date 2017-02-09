/**
 * Created by gaochang on 2016/8/16.
 */
// 创建Map实例
var bmap = new BMap.Map('map1', {
    enableMapClick: false,
    minZoom: 4
    //vectorMapLevel: 3
});
// 启用滚轮放大缩小
bmap.enableScrollWheelZoom();

bmap.getContainer().style.background = '#081734';
bmap.setMapStyle({
    styleJson:[]
});
bmap.centerAndZoom(new BMap.Point(120.007869,31.830319), 8); // 初始化地图,设置中心点坐标和地图级别




