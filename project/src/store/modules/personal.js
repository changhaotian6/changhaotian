import { defineStore } from "pinia";

export const usePersonalStore = defineStore({
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
