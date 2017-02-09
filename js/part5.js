/**
 * Created by gaochang on 2016/8/16.
 */
// 创建Map实例---5-1
var bmap5_1 = new BMap.Map('map5-1', {
    enableMapClick: false,
    minZoom: 4
    //vectorMapLevel: 3
});
// 启用滚轮放大缩小
bmap5_1.enableScrollWheelZoom();
bmap5_1.getContainer().style.background = '#081734';
bmap5_1.setMapStyle({
    styleJson:[]
});
bmap5_1.centerAndZoom(new BMap.Point(118.800591,32.071834), 8); // 初始化地图,设置中心点坐标和地图级别


// 创建Map实例---5-2
var bmap5_2 = new BMap.Map('map5-2', {
    enableMapClick: false,
    minZoom: 4
    //vectorMapLevel: 3
});
// 启用滚轮放大缩小
bmap5_2.enableScrollWheelZoom();
bmap5_2.getContainer().style.background = '#081734';
bmap5_2.setMapStyle({
    styleJson:[]
});
bmap5_2.centerAndZoom(new BMap.Point(118.800591,32.071834), 8); // 初始化地图,设置中心点坐标和地图级别


// 创建Map实例---5-3
var bmap5_3 = new BMap.Map('map5-3', {
    enableMapClick: false,
    minZoom: 4
    //vectorMapLevel: 3
});
// 启用滚轮放大缩小
bmap5_3.enableScrollWheelZoom();
bmap5_3.getContainer().style.background = '#081734';
bmap5_3.setMapStyle({
    styleJson:[]
});
bmap5_3.centerAndZoom(new BMap.Point(118.800591,32.071834), 8); // 初始化地图,设置中心点坐标和地图级别
