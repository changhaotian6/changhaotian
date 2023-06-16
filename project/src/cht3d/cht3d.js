
import * as Cesium from 'cesium';
//  所有的鼠标事件
const getAllMouseEvent = () => {
  const ScreenSpaceEventType = {
    LEFT_DOWN: Cesium.ScreenSpaceEventType.LEFT_DOWN,
    LEFT_UP: Cesium.ScreenSpaceEventType.LEFT_UP,
    LEFT_CLICK: Cesium.ScreenSpaceEventType.LEFT_CLICK,
    LEFT_DOUBLE_CLICK: Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK,
    RIGHT_UP: Cesium.ScreenSpaceEventType.RIGHT_UP,
    RIGHT_DOWN: Cesium.ScreenSpaceEventType.RIGHT_DOWN,
    RIGHT_CLICK: Cesium.ScreenSpaceEventType.RIGHT_CLICK,
    MIDDLE_DOWN: Cesium.ScreenSpaceEventType.MIDDLE_DOWN,
    MIDDLE_UP: Cesium.ScreenSpaceEventType.MIDDLE_UP,
    MIDDLE_CLICK: Cesium.ScreenSpaceEventType.MIDDLE_CLICK,
    MOUSE_MOVE: Cesium.ScreenSpaceEventType.MOUSE_MOVE,
    WHEEL: Cesium.ScreenSpaceEventType.WHEEL,
    PINCH_START: Cesium.ScreenSpaceEventType.PINCH_START,
    PINCH_END: Cesium.ScreenSpaceEventType.PINCH_END,
    PINCH_MOVE: Cesium.ScreenSpaceEventType.PINCH_MOVE,
  };
  return ScreenSpaceEventType;
};

// 屏幕事件
const getAllSceneEvent = () => {
  return ["postRender", "postUpdate", "preRender", "preUpdate"];
};

class Cht3d {
  constructor() {
    // viewer
    this.viewer = undefined;
    // 屏幕空间事件处理程序
    this.handler = undefined;
    // 存放用户事件处理器容器
    this.EventHandles = {};
    // 存放事件调用方法容器
    this.Event = {};
    // 场景更新之后以及场景渲染之前立即引发的事件对象
    this.ScenePreRenderEvent = null;
    // 场景更新之后以及场景渲染之前立即引发的事件中的操作函数
    this.ScenePreRenderHandles = [];
    // 摄像机的位置
    this.cameraPosition = null;
    // Scene 场景相关事件
    this.Scene = {};
    // 场景相关事件
    this.SceneHandles = {};
    // 时间相关事件
    this.Clock = {};
    // 时间相关事件
    this.ClockHandles = {};
    // 键盘事件存放容器
    this.ListenKeyboardEvents = {};
  }

  /**
   * 初始化
   * */
  init(viewer) {
    this.viewer = viewer;
    this.ellipsoid = this.viewer.scene.globe.ellipsoid;
    this.registerEvent();
    // 关闭fxaa ;
    // this.viewer.scene.postProcessStages.fxaa.enabled = false;
  }

  registerEvent() {
    // 初始化cesium实例的时候注册所有的鼠标事件
    this.registerMouseEvent();

    // 注册帧监听事件
    this.registerScenePreRenderEvent();

    // 注册cesium时间事件
    this.registerClockEvent();

    // 注册键盘事件
    // this.registerKeyboardEvent();
  }

  // 注册鼠标事件
  registerMouseEvent() {
    if (this.handler) return;
    this.handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);

    // 所有鼠标事件
    const ScreenSpaceEventType = getAllMouseEvent();

    for (let EventType in ScreenSpaceEventType) {
      this.EventHandles[EventType] = [];

      this.Event[EventType] = (handle) => {
        // 添加销毁事件
        handle.destroy = () => {
          const index = this.EventHandles[EventType].findIndex(
            (h) => h == handle
          );
          this.EventHandles[EventType].splice(index, 1);
        };

        // 归类到相对应事件类型列表中
        this.EventHandles[EventType].push(handle);

        return handle;
      };

      this.handler.setInputAction((e) => {
        let pick = null;

        if (e.position) {
          // 获取拾取坐标的信息
          pick = this.viewer.scene.pick(e.position);
        }

        // 执行事件
        const Handles = this.EventHandles[EventType];
        for (let i = 0, len = Handles.length; i < len; i++) {
          if (typeof Handles[i] === "function") {
            Handles[i]({
              e,
              pick,
            });
          }
        }
      }, ScreenSpaceEventType[EventType]);
    }
  }

  // 注销鼠标事件
  unRegisterMouseEvent() {
    this.EventHandles = {};

    const ScreenSpaceEventType = getAllMouseEvent();
    for (let EventType in ScreenSpaceEventType) {
      this.handler.removeInputAction(ScreenSpaceEventType[EventType]);
    }
  }

  // 场景更新之后以及场景渲染之前立即引发的事件(添加帧监听回调)
  registerScenePreRenderEvent() {
    const allSceneEventType = getAllSceneEvent();

    allSceneEventType.forEach((eventType) => {
      this.SceneHandles[eventType] = [];
      const Handles = this.SceneHandles[eventType];
      this.Scene[eventType] = (callback) => {
        callback.destroy = () => {
          const index = Handles.findIndex((h) => h == callback);
          Handles.splice(index, 1);
        };
        Handles.push(callback);
        return callback;
      };

      this.viewer.scene[eventType].addEventListener((...params) => {
        // 执行全部要监听的回调
        const Handles = this.SceneHandles[eventType];
        for (let i = 0, len = Handles.length; i < len; i++) {
          if (typeof Handles[i] === "function") {
            Handles[i](...params);
          }
          // console.log(i);
        }
        if (eventType === "preRender") {
          // 实时缓存当前相机位置
          this.cameraPosition = new Cesium.EllipsoidalOccluder(
            Cesium.Ellipsoid.WGS84,
            this.viewer.camera.position
          );
        }
      });
    });
  }

  // 注销用户帧监听事件
  unRegisterScenePreRenderEvent() {
    this.SceneHandles = {};
  }

  // 注册cesium时间事件
  registerClockEvent() {
    const allSceneEventType = ["onTick"];
    let prev = 0;

    allSceneEventType.forEach((eventType) => {
      this.ClockHandles[eventType] = [];
      const Handles = this.ClockHandles[eventType];
      this.Clock[eventType] = (callback) => {
        callback.destroy = () => {
          const index = Handles.findIndex((h) => h == callback);
          Handles.splice(index, 1);
        };
        Handles.push(callback);
        return callback;
      };
      this.viewer.clock.onTick.addEventListener((res) => {
        // 节流操作，(0.05)50ms执行一次
        if (res.currentTime.secondsOfDay - prev < 0.15) {
          return;
        }
        prev = res.currentTime.secondsOfDay;
        // 执行全部要监听的回调
        const Handles = this.ClockHandles[eventType];
        if (Handles.length) {
          const curr = this.viewer.clock.currentTime.secondsOfDay;
          Handles.forEach((callback) => {
            if (typeof callback === "function") {
              callback(res, curr);
            }
          });
          // for (let i = 0, len = Handles.length; i < len; i++) {
          //   // 当循环的时候删除进行判断
          //   if (typeof Handles[i] === "function") {
          //     Handles[i](res, curr);
          //   }
          // }
        }
      });
    });
  }

  // 注销用户帧监听事件
  unRegisterClockEvent() {
    this.ClockHandles = {};
  }
  /**
   * 判断一个点是否在在地球的正面
   * @param point {[lng, lat, alt]|Cartesian3|Cartesian2} 坐标点
   *
   */
  isEarthFront(cartesian3, entity) {
    // if (!(cartesian3 instanceof Cesium.Cartesian3)) {
    //   return console.error('需要传递cartesian3类型的值！ -- cht3d.js')
    // }

    if (!entity) {
      const visible = this.cameraPosition.isPointVisible(cartesian3);
      return visible;
    }
    const visible = this.cameraPosition.isPointVisible(cartesian3);

    const frustum = this.viewer.camera.frustum;
    const cullingVolume = frustum.computeCullingVolume(
      this.viewer.camera.position,
      this.viewer.camera.direction,
      this.viewer.camera.up
    );
    let boundingSphere = new Cesium.BoundingSphere();
    this.viewer.dataSourceDisplay.getBoundingSphere(
      entity,
      false,
      boundingSphere
    );
    const intersection = cullingVolume.computeVisibility(boundingSphere);
    console.log(visible, intersection, "-----");
    return intersection === 1;
  }

  // 监听键盘事件
  registerKeyboardEvent() {
    // this.onKeyboard = (callback, key = 'all') => {
    //   if (!this.ListenKeyboardEvents[key]) {
    //     this.ListenKeyboardEvents[key] = [];
    //   }
    //   const Events = this.ListenKeyboardEvents[key];
    //   callback.destroy = () => {
    //     const index = Events.findIndex(h => h == callback);
    //     Handles.splice(index, 1);
    //   }
    //   Events.push(callback);
    //   return callback;
    // }
    // document.onkeydown = (event) => {
    //   const keyName = event.key;
    //   this.ListenKeyboardEvents[keyName] && this.ListenKeyboardEvents[keyName].forEach(callback => callback(keyName))
    //   this.ListenKeyboardEvents['all'] && this.ListenKeyboardEvents['all'].forEach(callback => callback(keyName));
    // };
  }

  unRegisterKeyboardEvent() {
    // document.onkeydown = null;
    // this.ListenKeyboardEvents = {};
  }

  // 获取集合对象（不存在执行创建）
  getCollection(collectionName) {
    let collectionArr = this.viewer.dataSources.getByName(collectionName);
    if (collectionArr.length) return collectionArr[0];
    const collection = new Cesium.CustomDataSource(collectionName);
    this.viewer.dataSources.add(collection);
    return collection;
  }

  // 获取相机位置
  getCameraPosition() {
    var camera = this.viewer.camera;
    var cartographic =
      this.viewer.scene.globe.ellipsoid.cartesianToCartographic(
        camera.position
      );
    var lat = Cesium.Math.toDegrees(cartographic.latitude);
    var lng = Cesium.Math.toDegrees(cartographic.longitude);
    var alt = cartographic.height;
    var paramObj = {
      center: {
        lat: lat,
        lng: lng,
        alt: alt,
      },
      cartesian3: this.cameraPosition.cameraPosition,
      rph: {
        heading: camera.heading,
        pitch: camera.pitch,
        roll: camera.roll,
      },
    };
    return paramObj;
  }

  destroy() {
    // 注意顺序
    this.ScenePreRenderEvent && this.ScenePreRenderEvent.call();
    this.unRegisterMouseEvent();
    this.unRegisterScenePreRenderEvent();
    this.unRegisterKeyboardEvent();
    this.unRegisterClockEvent();
    this.EventHandles = {};
    this.handler && this.handler.destroy();
    this.viewer && this.viewer.destroy();
  }
}

export { Cht3d };

const cht3d = new Cht3d();
export default cht3d;
