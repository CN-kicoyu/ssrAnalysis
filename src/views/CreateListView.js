// charAt() 方法可返回指定位置的字符,slice() 方法可从已有的数组中返回选定的元素。
const camelize = str => str.charAt(0).toUpperCase() + str.slice(1)

// 导出带参函数，返回对象
export default function createListView (type) {
  return {
    name: `${type}-stories-view`,

    asyncData ({ store }) {
      return store.dispatch('FETCH_LIST_DATA', { type })
    },

    title: camelize(type),

    // {}对象里面可以加入函数定义，等同于render: function (h)
    // 得到数据后渲染ItemList列表
    render (h) {
      return h(ItemList, {props: { type}})
    }
  }
}