import {BrowserTypeEnum} from "./BrowserTypeEnum";
import {NavigationTypeEnum} from "./NavigationTypeEnum";
import {ScreenDirectionTypeEnum} from "./ScreenDirectionTypeEnum";

export interface BrowserInfo {
    // 浏览器当前时间戳，用来和后端服务器判断，看用户是否修改了本地时间
    browserTimestamp: number

    // 浏览器时间时区偏移，负数是东区，正数是西区，单位是分钟，60分钟 = 1个时区
    browserTimezoneOffset: number,

    // 浏览器类型
    browserType: BrowserTypeEnum

    // 浏览器版本
    browserVersion: number

    // 操作系统内核
    os: string

    // 是否手机
    isMobile: boolean

    // 操作平台
    platform: string,

    // 语言
    language: string

    // 可视窗口宽度，单位：px
    clientWidth: number

    // 可视窗口高度，单位：px
    clientHeight: number

    // 屏幕方向
    screenDirection: ScreenDirectionTypeEnum

    // 网速，目前只有谷歌有，单位：kb
    internetSpeed: number

    // 是否支持sessionStorage
    supportSessionStorage: boolean

    // 是否支持localStorage
    supportLocalStorage: boolean

    // 是否支持indexDB
    supportIndexDB: boolean

    // ES的支持情况（用户没打ES补丁到全局时结果准确）（返回数值方便用户去比较）(5开始)
    maxESVersion: number

    // 进入页面的方式
    navigationType: NavigationTypeEnum,

    // 项目名称
    projectName: string
}
