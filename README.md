###路由
###合成事件
## console.log = ()=>{}
https://blog.csdn.net/u012246458/article/details/53665597
https://www.cnblogs.com/renhui/p/10137421.html
https://blog.csdn.net/zhangyalong_android/article/details/79724532
https://www.cnblogs.com/qunxiadexiaoxiangjiao/p/9446956.html

https://www.cnblogs.com/mengfangui/p/10505500.html 性能优化


### React 杂碎

组件通信

    props 
    callback

    context

    eventbus/发布订阅

    redux
    比如react-redux的<Provider />，就是通过Context提供一个全局态的store

    ref

ref 延申  ref 获取的是组件  function组件不能用 vue ref也是组件 $el是真实DOM

    下面是几个适合使用 refs 的情况：
    管理焦点，文本选择或媒体播放。
    触发强制动画。
    集成第三方 DOM 库。

    字符串(已废弃)
    回调函数
    React.createRef() （React16.3提供）
    http://www.cnblogs.com/mengff/p/9554779.html

长列表优化

react-window
https://react-window.now.sh/#/examples/list/fixed-size

react-virtualized
https://bvaughn.github.io/react-virtualized/#/components/List


图片懒加载

react 页面可以懒加载 原理 jsonp

 React.lazy 组件可以懒加载  16.6 新特性

 React.Fragment 减少div 16.2 以上

记得移除监听 定时器 之类的

uglifyify
shouldComponentUpdate
React.PureComponent  浅比较


据说能提高性能
不可变数据的力量
使用不可变数据结构




