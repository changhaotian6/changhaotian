<!--
 * @Description:vv
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-16 15:24:30
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-16 21:49:57
 * @FilePath: \project\src\components\common\OverlayHtml\index.vue
-->
<template>
  <div
    class="overlay-html-container"
    ref="OverlayHtmlRef"
    :style="{ display: isVisible ? 'block' : 'none' }"
  >
    <slot></slot>
  </div>
</template>

<script>
import * as Cesium from "cesium";
import {
  ref,
  toRefs,
  getCurrentInstance,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
} from "vue";
export default {
  name: "overlay-html",
  props: {
    position: [Array], // 经纬度
    pixelOffset: {
      // 窗口定位偏移量 [left, top]  对应下面pixelOffsetPosition
      type: Array,
      default: () => [0, 0],
    },
    pixelOffsetPosition: {
      type: Array,
      default: () => ["left", "top"],
    },
    autoHidden: {
      // 指定 HTML 在地球背面时是否自动隐藏。
      type: Boolean,
      default: true,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    popinfo: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { proxy } = getCurrentInstance();

    const OverlayHtmlRef = ref(null);
    let {
      position: htmlPosition,
      pixelOffset: htmlPixelOffset,
      autoHidden: htmlAutoHidden,
      visible: isVisible,
      pixelOffsetPosition,
    } = toRefs(props);

    // 帧监听事件
    let preRender = null;

    // 实时坐标位置
    let htmlPointCartesian3 = computed(() => {
      return Cesium.Cartesian3.fromDegrees(
        htmlPosition.value[0],
        htmlPosition.value[1]
      );
    });

    /**
     * @description 为容器设置属性
     **/
    const setPropsForElement = (porp, value) => {
      OverlayHtmlRef.value.style[porp] = value;
    };

    /**
     * @description 控制弹窗显隐
     * @param {Boolean} visible
     **/
    const setVisible = (visible) => {
      setPropsForElement("display", visible ? "block" : "none");
    };

    /**
     * @description 获取屏幕坐标
     * @param {Cartestian3} cartestian3 空间直角坐标点
     * */
    const getScreenPosition = (cartestian3) => {
      return Cesium.SceneTransforms.wgs84ToWindowCoordinates(
        proxy.$cht3d.viewer.scene,
        cartestian3
      );
    };

    /**
     * @description 控制弹窗定位
     * @param {Cartesian2} position 屏幕坐标
     **/
    const setPosition = (position) => {
      if (position) {
        const [X, Y] = pixelOffsetPosition.value;
        let x = position.x + htmlPixelOffset.value[0];
        let y = position.y + htmlPixelOffset.value[1];
        if (Y === "bottom") {
          const clientHeight = document.body.clientHeight;
          y = clientHeight - y;
        }
        setPropsForElement(X, x + "px");
        setPropsForElement(Y, y + "px");
      }
    };

    // 由父组件控制窗口显示隐藏的方法
    const visibleChange = (visible) => {
      setVisible(visible);
      setPosition(getScreenPosition(htmlPointCartesian3.value));
    };

    watch(
      htmlPosition,
      (v) => {
        setPosition(getScreenPosition(htmlPointCartesian3.value));
      },
      { deep: true }
    );

    watch(isVisible, (v) => {
      visibleChange(v);
    });

    onMounted(() => {
      // 挂载自定义元素
      proxy.$cht3d.viewer.cesiumWidget.container.appendChild(
        OverlayHtmlRef.value
      );
      setPosition(getScreenPosition(htmlPointCartesian3.value));
      // 相机移动开始事件中监听场景渲染前事件
      preRender = proxy.$cht3d.Scene.preRender(() => {
        if (!isVisible) return;
        // 判断传入的点是否在地球的背阴面 背阴面不显示，反之更新屏幕坐标定位值
        const isPointVisible = new Cesium.EllipsoidalOccluder(
          Cesium.Ellipsoid.WGS84,
          proxy.$cht3d.viewer.camera.position
        ).isPointVisible(htmlPointCartesian3.value);

        setVisible(isPointVisible);
        if (isPointVisible)
          setPosition(getScreenPosition(htmlPointCartesian3.value));
      });
    });

    onBeforeUnmount(() => {
      preRender && preRender.destroy();
      OverlayHtmlRef.value.remove();
    });

    return {
      OverlayHtmlRef,
      isVisible,
      htmlPointCartesian3,
      htmlPosition,
      htmlPixelOffset,
      pixelOffsetPosition,
    };
  },
};
</script>

<style lang="scss" scoped>
.overlay-html-container {
  position: absolute;
}

</style>
