/*
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-17 13:40:37
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-17 13:43:21
 * @FilePath: \project\src\cht3d\Plotting.js
 */
import PlottingCommon from './PlottingCommon';
import PlottingShanguangdian from './PlottingShanguangdian';

class Plotting extends PlottingCommon {
  constructor(ls3d, options) {
    super(ls3d);

    this.options = options;
    // 事件操作
    this.EventHandles = [];
    this.entity = null;
    this.createPlotting(this.options.plotType)
  }
}
