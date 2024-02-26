Vue.createApp({
  data() {
    return {
      redSlider: 50,
      greenSlider: 50,
      blueSlider: 50,
    };
  },

  computed: {
    setColor() {
      return (
        "#" +
        this.rangeValueToHex(this.redSlider) +
        this.rangeValueToHex(this.greenSlider) +
        this.rangeValueToHex(this.blueSlider)
      );
    },

    setBackgroundColor() {
      document.body.style.backgroundColor = this.setColor;
    },
  },

  methods: {
    rangeValueToHex(value) {
      value = Number.parseInt(value);
      return ("0" + value.toString(16)).substr(-2);
    },
  },
}).mount("#app");
