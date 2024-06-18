import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "buy some milk", isFav: false },
      { id: 2, title: "take a nap", isFav: true },
      { id: 3, title: "take a medical check-up", isFav: false },
    ],
    // name: "Mulugeta Mehari",
  }),
  getters: {
    favs() {
      return this.tasks.filter((t) => t.isFav);
    },
  },
});
