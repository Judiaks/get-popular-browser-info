/**
 * 获取浏览器信息
 */
import {BrowserInfo} from "../types/BrowserInfo";
import getBrowserTimestamp from "./getBrowserTimestamp";
import getBrowserType from "./getBrowserType";
import getBrowserVersion from "./getBrowserVersion";
import getOs from "./getOs";
import getScreenDirection from "./getScreenDirection";
import getInternetSpeed from "./getInternetSpeed";
import getMaxESVersion from "./getMaxESVersion";
import getNavigationType from "./getNavigationType";

export default (projectName: string = ''): Partial<BrowserInfo> => {
    const browserInfo: Partial<BrowserInfo> = {}
    browserInfo.browserTimestamp = getBrowserTimestamp()
    browserInfo.browserTimezoneOffset = new Date().getTimezoneOffset()
    browserInfo.browserType = getBrowserType()
    browserInfo.browserVersion = getBrowserVersion(browserInfo.browserType)
    browserInfo.os = getOs()
    browserInfo.isMobile = /mobile/i.test(navigator.userAgent)
    browserInfo.platform = navigator.platform
    browserInfo.language = navigator.language
    browserInfo.clientWidth = innerWidth
    browserInfo.clientHeight = innerHeight
    browserInfo.screenDirection = getScreenDirection()
    browserInfo.internetSpeed = getInternetSpeed()
    browserInfo.supportSessionStorage = 'sessionStorage' in window
    browserInfo.supportLocalStorage = 'localStorage' in window
    browserInfo.supportIndexDB = 'indexedDB' in window
    browserInfo.maxESVersion = getMaxESVersion()
    browserInfo.navigationType = getNavigationType()
    browserInfo.projectName = projectName
    return browserInfo
}
