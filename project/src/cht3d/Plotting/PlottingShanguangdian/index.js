/*
 * @Description:
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-17 13:24:24
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-17 15:17:00
 * @FilePath: \project\src\cht3d\Plotting\PlottingShanguangdian\index.js
 */
import * as Cesium from 'cesium'
import { radiansToCartesian3 } from '@/utils/cesium'
import Shanguangdian from './Shanguangdian'

class PlottingShanguangdian {
  /**
   * @param {string} options.id id
   * @param {array} options.position 经纬度
   * @param {string} options.color 颜色
   * @param {string} options.name 名称
   * @param {string} options.collectionName 这个实体要存放的集合名称
   * @param {string} options.maxVisibleHeight 最大可见高度
   * @param {boolean} options.showEntity 是否显示这个实体
   * @param {string} options.time 动画运动一次所用时间
   * */
  constructor(cht3d, options) {
    this.cht3d = cht3d;
    this.options = options;
    this.entity = null;
    this.init();
  }

  init() {
    // 创建实体
    this.createEntity();
  }

  // 创建闪光点
  createEntity() {
    this.shanguangdian = new Shanguangdian({
      id: this.options.id,
      show: this.options.showEntity,
      position: radiansToCartesian3(this.options.position),
      name: this.options.name,
      color: this.options.color,
      maxVisibleHeight: this.options.maxVisibleHeight,
    });
    this.entity = this.getCollection(this.options.collectionName).entities.add(
      this.shanguangdian.entity
    );
  }

  // 获取集合对象（不存在执行创建）
  getCollection(collectionName) {
    let collectionArr = this.cht3d.viewer.dataSources.getByName(collectionName);
    if (!collectionArr.length) {
      const entityCollection = new Cesium.CustomDataSource(collectionName);
      this.cht3d.viewer.dataSources.add(entityCollection);
      return entityCollection;
    }
    return collectionArr[0];
  }

  // 删除实体
  removeEntity() {
    this.entity.show = false;
    this.getCollection(this.options.collectionName).entities.remove(
      this.entity
    );
  }

  destroy() {
    this.removeEntity();
  }
}

export default PlottingShanguangdian;