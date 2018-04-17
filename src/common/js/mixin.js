export const scrollMixin = {
  methods: {
    scrollPositionBottom (detaiContent) {
      this.$refs[detaiContent].style.bottom = '43px'
      this.$refs.scroll.refresh()
    }
  }
}
