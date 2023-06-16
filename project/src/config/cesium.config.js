/*
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-15 14:21:38
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-16 14:08:59
 * @FilePath: \project\src\config\cesium.config.js
 */
const config =  {
  // 天地图矢量注记
  TDT_VECTOR_ANNOTATION: "http://{s}.tianditu.gov.cn/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0" +
  "&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}" +
  "&style=default.jpg&tk=" + import.meta.env.VUE_APP_TDT_TOKEN,
};

export default config;