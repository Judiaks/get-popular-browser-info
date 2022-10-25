import {BrowserTypeEnum} from "../types/BrowserTypeEnum";

export default (): BrowserTypeEnum => {
    const includesChrome = userAgentIncludesString('Chrome')
    const includesChromium = userAgentIncludesString('Chromium')
    const includesOPR = userAgentIncludesString('OPR')
    const includesEdg = userAgentIncludesString('Edg')
    const includesSamsungBrowser = userAgentIncludesString('SamsungBrowser')
    const includesSafari = userAgentIncludesString('Safari')
    const includesAndroid = userAgentIncludesString('Android')
    const includesUCBrowser = userAgentIncludesString('UCBrowser')
    const includesFirefox = userAgentIncludesString('Firefox')
    const includesSeamonkey = userAgentIncludesString('Seamonkey')
    const includesAppleWebKit = userAgentIncludesString('AppleWebKit')
    const includesTrident = userAgentIncludesString('trident')
    // 单个判断的放前面，需要排除单个的组合判断放后面
    if (includesUCBrowser) {
        return BrowserTypeEnum.UC
    } else if (includesSamsungBrowser) {
        return BrowserTypeEnum.SAMSUNG
    } else if (includesOPR) {
        return BrowserTypeEnum.OPERA
    } else if (includesEdg) {
        return BrowserTypeEnum.EDGE
    } else if (includesTrident) {
        return BrowserTypeEnum.IE
    } else if (includesChrome && !includesChromium) {
        return BrowserTypeEnum.CHROME
    } else if (includesSafari && !includesChrome) {
        return BrowserTypeEnum.SAFARI
    } else if (includesFirefox && !includesSeamonkey) {
        return BrowserTypeEnum.FIREFOX
    } else if (includesAndroid && includesAppleWebKit && !includesChrome) {
        return BrowserTypeEnum.ANDROID
    } else {
        return BrowserTypeEnum.UNKNOW
    }
}


const userAgentIncludesString = (str: string): boolean => navigator.userAgent.indexOf(str) !== -1
