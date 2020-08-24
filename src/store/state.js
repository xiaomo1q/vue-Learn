let defaultCity = '上海'
try {
  if (localStorage.title) {
    defaultCity = localStorage.title
  }
} catch (e) {}

export default {
  // 基础数据源
  // 使用localStorage实现信息保存
  val: defaultCity
}
