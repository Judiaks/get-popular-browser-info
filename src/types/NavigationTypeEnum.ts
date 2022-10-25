/**
 * 进入页面的方式
 */
export const enum NavigationTypeEnum {
    // 普通进入，包括：点击链接、在地址栏中输入 URL、表单提交、或者通过除下表中 TYPE_RELOAD 和 TYPE_BACK_FORWARD 的方式初始化脚本。
    TYPE_NAVIGATE = 0,

    // 通过刷新进入，包括：浏览器的刷新按钮、快捷键刷新、location.reload()等方法。
    TYPE_RELOAD = 1,

    // 通过操作历史记录进入，包括：浏览器的前进后退按钮、快捷键操作、history.forward()、history.back()、history.go(num)。
    TYPE_BACK_FORWARD = 2,

    // 其他非以上类型的方式进入。
    TYPE_UNDEFINED = 255
}
