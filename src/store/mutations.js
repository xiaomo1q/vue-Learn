export default {
  changeCity(state, val) {
    state.val = val
    // 信息更新
    try {
      localStorage.val = val
    } catch (e) {

    }
  }
}
