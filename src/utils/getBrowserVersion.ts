import {BrowserTypeEnum} from "../types/BrowserTypeEnum";

export default (browserType: BrowserTypeEnum): number => {
    switch (browserType) {
        case BrowserTypeEnum.UC :
            // 不知道
            return findVersionFromUserAgent('UBrowser')
        case BrowserTypeEnum.SAMSUNG :
            // 不知道
            return findVersionFromUserAgent('SamsungBrowser')
        case BrowserTypeEnum.OPERA :
            return findVersionFromUserAgent('Opera')
        case BrowserTypeEnum.EDGE :
            return findVersionFromUserAgent('Edg')
        case BrowserTypeEnum.IE :
            return getIEVersion()
        case BrowserTypeEnum.CHROME :
            return findVersionFromUserAgent('Chrome')
        case BrowserTypeEnum.SAFARI :
            return findVersionFromUserAgent('Safari')
        case BrowserTypeEnum.FIREFOX :
            return findVersionFromUserAgent('Firefox')
        case BrowserTypeEnum.ANDROID :
            // 不知道
            return findVersionFromUserAgent('Android')
        default:
            return 0;
    }
}

const findVersionFromUserAgent = (findStr: string): number => Number((navigator.userAgent.match(new RegExp('\\b(' + findStr + ')\\/(\\d+)', 'i')) || [])[2])

const getIEVersion = (): number => {
    let userAgent = navigator.userAgent;
    let isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    let isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        let reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        let fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return 7;
        } else if (fIEVersion == 8) {
            return 8;
        } else if (fIEVersion == 9) {
            return 9;
        } else if (fIEVersion == 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }
    } else if (isIE11) {
        return 11; //IE11
    } else {
        return 0;
    }
}
