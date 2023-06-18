/*
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-17 13:49:01
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-17 15:12:21
 * @FilePath: \project\src\cht3d\Plotting\PlottingShanguangdian\shanguangdian.js
 */

// 闪烁点
export default class Shanguangdian {
  constructor(options) {
    this.id = options.id;
    this.show = options.show;
    this.name = options.name;
    this.position = options.position;
    this.color = options.color || Cesium.Color.RED;
    this.pixelSize = options.pixelSize || 10;
    this.pixelMax = options.pixelMax || 50;
    this.outWidth = options.outWidth || 20;
    this.maxVisibleHeight = options.maxVisibleHeight || 290000;
    this.createMarker();
  }

  createMarker() {
    var pixelSize = this.pixelSize,
      n = true,
      pixelMax = this.pixelMax;
    this.entity = new Cesium.Entity({
      id: this.id,
      show: this.show,
      position: this.position,
      label: {
        //文字标签
        text: this.name,
        font: "12pt Source Han Sans CN",
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        fillColor: new Cesium.Color.fromCssColorString(this.color),
        outlineWidth: 0,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM, //垂直方向以底部来计算标签的位置
        horizontalOrigin: Cesium.VerticalOrigin.Center, //  水平方向位置
        pixelOffset: new Cesium.Cartesian2(0, 35), //偏移量
        disableDepthTestDistance: Number.POSITIVE_INFINITY,
        distanceDisplayCondition: new Cesium.DistanceDisplayCondition(
          0,
          this.maxVisibleHeight
        ),
      },
      point: {
        // 获取或设置数字属性，以像素为单位指定大小。
        pixelSize: new Cesium.CallbackProperty(() => {
          return (
            n
              ? ((pixelSize += 2), pixelSize >= pixelMax && (n = false))
              : ((pixelSize = 10), (n = true)),
            pixelSize
          );
        }, false),
        // 一个数字属性，用于指定轮廓宽度（以像素为单位，值为number类型）
        outlineWidth: this.outWidth,
        // 该属性用于根据距离缩放点
        scaleByDistance: new Cesium.NearFarScalar(1200, 1, 5200, 0.4),
        disableDepthTestDistance: Number.POSITIVE_INFINITY,
        distanceDisplayCondition: new Cesium.DistanceDisplayCondition(
          0,
          this.maxVisibleHeight
        ),
      },
    });
    // 一个属性，指定该点的 Color
    this.setColor(this.color);
    // 一个属性，指定轮廓的颜色
    this.setOutlineColor(this.color);
  }

  setColor(color) {
    const cColor = new Cesium.Color.fromCssColorString(color);
    let markerOpacity = 1,
      a = true;
    this.entity.point.color = new Cesium.CallbackProperty(() => {
      return (
        a
          ? ((markerOpacity -= 0.03), markerOpacity <= 0 && (a = false))
          : ((markerOpacity = 1), (a = true)),
        cColor.withAlpha(markerOpacity)
      );
    }, false);
  }

  setOutlineColor(color) {
    const cColor = new Cesium.Color.fromCssColorString(color);
    let outLineOpacity = 0.7,
      o = true;
    this.entity.point.outlineColor = new Cesium.CallbackProperty(() => {
      return (
        o
          ? ((outLineOpacity -= 0.035), outLineOpacity <= 0 && (o = false))
          : ((outLineOpacity = 0.7), (o = true)),
        cColor.withAlpha(outLineOpacity)
      );
    }, false);
  }

  remove() {
    this.entity = undefined;
  }
}
