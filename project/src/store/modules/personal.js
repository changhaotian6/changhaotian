import { defineStore } from "pinia";

export const usePersonalStore = defineStore({
  id: "personal",
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
