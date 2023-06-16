import { defineStore } from "pinia";

export const useProfileStore = defineStore({
  id: "profile",
  state: () => {
    return {
      activeMenu: "",
    };
  },
  actions: {
    setActiveMenu(activeMenu) {
      this.activeMenu = activeMenu;
    },
  },
});
