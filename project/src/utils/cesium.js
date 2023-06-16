/*
 * @Descripttion:
 * @version:
 * @Author: changhaotian6@163.com
 * @Date: 2021-09-01 17:12:15
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-16 14:26:26
 */
import * as Cesium from "cesium";

// 屏幕坐标（Cartesian2）转世界坐标（Cartesian3）
export const cartesian2ToCartesian3 = (cartesian2) => {
  const viewer = window.earths[0].czm.viewer;
  const ellipsoid = viewer.scene.globe.ellipsoid;
  const cartesian3 = viewer.camera.pickEllipsoid(cartesian2, ellipsoid);
  return cartesian3;
};
// 世界坐标（Cartesian3）转角度(经纬度)
export const cartesian3ToRadians = (cartesian3) => {
  // 先转弧度
  const cartographic = Cesium.Cartographic.fromCartesian(cartesian3);
  // 再转角度
  const longitude = Cesium.Math.toDegrees(cartographic.longitude); // 弧度 -> 角度
  const latitude = Cesium.Math.toDegrees(cartographic.latitude); // 弧度 -> 角度
  const height = Math.floor(cartographic.height); // 米
  return [longitude, latitude, Number(height.toFixed(2))];
};

// 角度(经纬度)转世界坐标（Cartesian3）
export const radiansToCartesian3 = (position) => {
  return Cesium.Cartesian3.fromDegrees(...position);
};

// 矩形标绘对角两点（经纬度）获取矩形四角（经纬度）
export const rectangleTwoToFourRadians = (pnt1, pnt2) => {
  var xmin = Math.min(pnt1[0], pnt2[0]);
  var xmax = Math.max(pnt1[0], pnt2[0]);
  var ymin = Math.min(pnt1[1], pnt2[1]);
  var ymax = Math.max(pnt1[1], pnt2[1]);
  var tl = [xmin, ymax];
  var tr = [xmax, ymax];
  var br = [xmax, ymin];
  var bl = [xmin, ymin];
  return [tl, tr, br, bl];
};

//计算两个点的距离(米)
export const distance = (positions) => {
  const [lngLat1, lngLat2] = positions;
  var radLat1 = (lngLat1[1] * Math.PI) / 180.0;
  var radLat2 = (lngLat2[1] * Math.PI) / 180.0;
  var a = radLat1 - radLat2;
  var b = (lngLat1[0] * Math.PI) / 180.0 - (lngLat2[0] * Math.PI) / 180.0;
  var s =
    2 *
    Math.asin(
      Math.sqrt(
        Math.pow(Math.sin(a / 2), 2) +
          Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)
      )
    );
  s = s * 6378.137;
  s = Math.round(s * 10000) / 10;
  return s;
};

// 判断是不是经纬度
export const isLonLat = (point) => {
  if (!Array.isArray(point)) return false;
  const isLon = /^(\d{1,2}\.?\d*|1[0-7]?\d{1}\.?\d*|180\.?0*)$/.test(point[0]);
  if (!isLon) return false;
  const isLat = /^([0-8]?\d{1}\.?\d*|90\.?0*)$/.test(point[1]);
  if (!isLat) return false;
  return true;
};

/**
 * @description 根据起点经纬度和距离返回终点经纬度
 * @param {*} lng 经度 122
 * @param {*} lat 纬度 24
 * @param {*} brng 方位角 0~360度
 * @param {*} dist 90000距离(米)
 *
 */
export const calculatingTargetPoints = (lng, lat, brng, dist) => {
  var a = 6378137;
  var b = 6356752.3142;
  var f = 1 / 298.257223563;

  var lon1 = lng * 1;
  var lat1 = lat * 1;
  var s = dist;
  var alpha1 = brng * (Math.PI / 180);
  var sinAlpha1 = Math.sin(alpha1);
  var cosAlpha1 = Math.cos(alpha1);
  var tanU1 = (1 - f) * Math.tan(lat1 * (Math.PI / 180));
  var cosU1 = 1 / Math.sqrt(1 + tanU1 * tanU1),
    sinU1 = tanU1 * cosU1;
  var sigma1 = Math.atan2(tanU1, cosAlpha1);
  var sinAlpha = cosU1 * sinAlpha1;
  var cosSqAlpha = 1 - sinAlpha * sinAlpha;
  var uSq = (cosSqAlpha * (a * a - b * b)) / (b * b);
  var A = 1 + (uSq / 16384) * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
  var B = (uSq / 1024) * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
  var sigma = s / (b * A),
    sigmaP = 2 * Math.PI;
  while (Math.abs(sigma - sigmaP) > 1e-12) {
    var cos2SigmaM = Math.cos(2 * sigma1 + sigma);
    var sinSigma = Math.sin(sigma);
    var cosSigma = Math.cos(sigma);
    var deltaSigma =
      B *
      sinSigma *
      (cos2SigmaM +
        (B / 4) *
          (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) -
            (B / 6) *
              cos2SigmaM *
              (-3 + 4 * sinSigma * sinSigma) *
              (-3 + 4 * cos2SigmaM * cos2SigmaM)));
    sigmaP = sigma;
    sigma = s / (b * A) + deltaSigma;
  }

  var tmp = sinU1 * sinSigma - cosU1 * cosSigma * cosAlpha1;
  var lat2 = Math.atan2(
    sinU1 * cosSigma + cosU1 * sinSigma * cosAlpha1,
    (1 - f) * Math.sqrt(sinAlpha * sinAlpha + tmp * tmp)
  );
  var lambda = Math.atan2(
    sinSigma * sinAlpha1,
    cosU1 * cosSigma - sinU1 * sinSigma * cosAlpha1
  );
  var C = (f / 16) * cosSqAlpha * (4 + f * (4 - 3 * cosSqAlpha));
  var L =
    lambda -
    (1 - C) *
      f *
      sinAlpha *
      (sigma +
        C *
          sinSigma *
          (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));

  var revAz = Math.atan2(sinAlpha, -tmp); // final bearing

  // var lngLatObj = { lng: lon1 + L * (180 / Math.PI), lat: lat2 * (180 / Math.PI) }
  var lngLatObj = [lon1 + L * (180 / Math.PI), lat2 * (180 / Math.PI)];
  return lngLatObj;
};

// 获取集合对象（不存在执行创建）
export const getCollection = (ls3d, collectionName, show = true) => {
  let collectionArr = ls3d.viewer.dataSources.getByName(collectionName);
  if (!collectionArr.length) {
    const entityCollection = new Cesium.CustomDataSource(collectionName);
    ls3d.viewer.dataSources.add(entityCollection);
    entityCollection.show = show;
    return entityCollection;
  }
  collectionArr[0].show = show;
  return collectionArr[0];
};
/**
 * @description: 飞行定位到一个笛卡尔空间直角坐标点位置
 * @param {Cartesian3} destination 目标点 Cartesian3
 * @param {Number} heading  默认=0.0   偏航角 正北,由正北向东偏向为正
 * @param {*} pitch  =-90     俯仰角 垂直向下， ENU局部坐标系中XY平面的旋转角度，平面下为负，上为正，
 * @param {*} range    =0.0   距目标点距离
 * @param {*} duration =3   持续时间
 * @param {*} callBack =null   回调函数，定位完成后执行
 */
export const flyToPoint = (
  viewer,
  destination,
  heading = 0.0,
  pitch = -45,
  range = 0.0,
  duration = 3,
  callBack = null
) => {
  let boundingSphere = new Cesium.BoundingSphere(destination, 0.0);
  viewer.camera.flyToBoundingSphere(boundingSphere, {
    duration: duration,
    maximumHeight: undefined,
    complete: function () {
      if (callBack) {
        callBack();
      }
    },
    cancel: function () {
      console.log("定位取消！");
    },
    offset: {
      heading: Cesium.Math.toRadians(heading),
      pitch: Cesium.Math.toRadians(pitch),
      range: range,
    },
  });
};

/**
 * @description: 飞行定位到一个经纬度位置
 * @param  {number} options.lat 经度
 * @param  {number} options.lon 纬度
 * @param  {number} options.height 高度 以米为单位
 * @param  {number} options.heading 方位角(偏航角) 正北,由正北向东偏向为正
 * @param  {number} options.pitch 俯仰角 垂直向下， ENU局部坐标系中XY平面的旋转角度，平面下为负，上为正，
 * @param  {number} options.roll 滚动角
 * @param  {number} options.duration 飞行时长
 */

export const flyTo = (options) => {
  const {
    lat,
    lon,
    height = 200000,
    heading = 360,
    pitch = -90,
    roll = 0,
    duration = 1,
  } = options;

  const viewer = window.CesiumViewer;
  if (!viewer) {
    console.error("未初始化cesium实例,请检查.");
    return;
  }

  viewer.scene.camera.flyTo({
    destination: new Cesium.Cartesian3.fromDegrees(lat, lon, height),
    orientation: {
      heading: Cesium.Math.toRadians(heading), //方位角
      pitch: Cesium.Math.toRadians(pitch), //俯仰角
      roll: Cesium.Math.toRadians(roll), //滚动角
    },
    duration,
  });
};
