Vue.createApp({
  data() {
    return {
      isNight: false,
      titleNight: "Good Night",
      titleMorning: "Good Morning",
      bodyNight: "body--night",
      buttonNight: "button--night",
    };
  },
  methods: {
    toggleLight() {
      const button = this.$refs.myElement;

      if ((this.isNight = !this.isNight)) {
        document.title = this.titleNight;
        document.body.classList.add(this.bodyNight);
        button.classList.add(this.buttonNight);
      } else {
        document.title = this.titleMorning;
        document.body.classList.remove(this.bodyNight);
        button.classList.remove(this.buttonNight);
      }
    },
  },
}).mount("#app");
