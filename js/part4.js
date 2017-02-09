// 百度地图API功能
var map4 = new BMap.Map("map4",{
    enableMapClick: false
});
map4.centerAndZoom(new BMap.Point(119.430632,32.194099), 5);
map4.enableScrollWheelZoom();

var  mapStyle ={
    features: ["road", "building","water","land"],//隐藏地图上的poi
    style : "light"
}
map4.setMapStyle(mapStyle);



function getBoundary(name){
    var bdary = new BMap.Boundary();
    bdary.get(name, function(rs){       //获取行政区域
        //map.clearOverlays();        //清除地图覆盖物
        var count = rs.boundaries.length; //行政区域的点有多少个
        if (count === 0) {
            alert('未能获取当前输入行政区域' + name);
            return ;
        }
        var pointArray = [];
        for (var i = 0; i < count; i++) {
            var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 4, strokeColor: "black",strokeOpacity: 0.7,strokeStyle: "dashed",fillOpacity:0,fillColor: ''}); //建立多边形覆盖物
            map4.addOverlay(ply);  //添加覆盖物
            pointArray = pointArray.concat(ply.getPath());
        }
        map4.setViewport(pointArray);    //调整视野
    });
}

setTimeout(function(){
    getBoundary("镇江市润州区");
    getBoundary("镇江市京口区");
    getBoundary("镇江市丹徒区");
}, 500);
