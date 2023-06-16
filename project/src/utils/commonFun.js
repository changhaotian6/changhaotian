import cht3d from "../cht3d/cht3d";
export default {
  install(app) {
    app.config.globalProperties.$cht3d = cht3d;
  },
};
