var getBrowserTimestamp = (function () { return Date.now(); });

var BrowserTypeEnum;
(function (BrowserTypeEnum) {
    BrowserTypeEnum["CHROME"] = "chrome";
    BrowserTypeEnum["EDGE"] = "edge";
    BrowserTypeEnum["IE"] = "ie";
    BrowserTypeEnum["FIREFOX"] = "firefox";
    BrowserTypeEnum["SAFARI"] = "safari";
    BrowserTypeEnum["OPERA"] = "opera";
    BrowserTypeEnum["UC"] = "uc";
    BrowserTypeEnum["SAMSUNG"] = "samsung";
    BrowserTypeEnum["ANDROID"] = "android";
    BrowserTypeEnum["UNKNOW"] = "unknow";
})(BrowserTypeEnum || (BrowserTypeEnum = {}));

var getBrowserType = (function () {
    var includesChrome = userAgentIncludesString('Chrome');
    var includesChromium = userAgentIncludesString('Chromium');
    var includesOPR = userAgentIncludesString('OPR');
    var includesEdg = userAgentIncludesString('Edg');
    var includesSamsungBrowser = userAgentIncludesString('SamsungBrowser');
    var includesSafari = userAgentIncludesString('Safari');
    var includesAndroid = userAgentIncludesString('Android');
    var includesUCBrowser = userAgentIncludesString('UCBrowser');
    var includesFirefox = userAgentIncludesString('Firefox');
    var includesSeamonkey = userAgentIncludesString('Seamonkey');
    var includesAppleWebKit = userAgentIncludesString('AppleWebKit');
    var includesTrident = userAgentIncludesString('trident');
    // 单个判断的放前面，需要排除单个的组合判断放后面
    if (includesUCBrowser) {
        return BrowserTypeEnum.UC;
    }
    else if (includesSamsungBrowser) {
        return BrowserTypeEnum.SAMSUNG;
    }
    else if (includesOPR) {
        return BrowserTypeEnum.OPERA;
    }
    else if (includesEdg) {
        return BrowserTypeEnum.EDGE;
    }
    else if (includesTrident) {
        return BrowserTypeEnum.IE;
    }
    else if (includesChrome && !includesChromium) {
        return BrowserTypeEnum.CHROME;
    }
    else if (includesSafari && !includesChrome) {
        return BrowserTypeEnum.SAFARI;
    }
    else if (includesFirefox && !includesSeamonkey) {
        return BrowserTypeEnum.FIREFOX;
    }
    else if (includesAndroid && includesAppleWebKit && !includesChrome) {
        return BrowserTypeEnum.ANDROID;
    }
    else {
        return BrowserTypeEnum.UNKNOW;
    }
});
var userAgentIncludesString = function (str) { return navigator.userAgent.indexOf(str) !== -1; };

var getBrowserVersion = (function (browserType) {
    switch (browserType) {
        case BrowserTypeEnum.UC:
            // 不知道
            return findVersionFromUserAgent('UBrowser');
        case BrowserTypeEnum.SAMSUNG:
            // 不知道
            return findVersionFromUserAgent('SamsungBrowser');
        case BrowserTypeEnum.OPERA:
            return findVersionFromUserAgent('Opera');
        case BrowserTypeEnum.EDGE:
            return findVersionFromUserAgent('Edg');
        case BrowserTypeEnum.IE:
            return getIEVersion();
        case BrowserTypeEnum.CHROME:
            return findVersionFromUserAgent('Chrome');
        case BrowserTypeEnum.SAFARI:
            return findVersionFromUserAgent('Safari');
        case BrowserTypeEnum.FIREFOX:
            return findVersionFromUserAgent('Firefox');
        case BrowserTypeEnum.ANDROID:
            // 不知道
            return findVersionFromUserAgent('Android');
        default:
            return 0;
    }
});
var findVersionFromUserAgent = function (findStr) { return Number((navigator.userAgent.match(new RegExp('\\b(' + findStr + ')\\/(\\d+)', 'i')) || [])[2]); };
var getIEVersion = function () {
    var userAgent = navigator.userAgent;
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return 7;
        }
        else if (fIEVersion == 8) {
            return 8;
        }
        else if (fIEVersion == 9) {
            return 9;
        }
        else if (fIEVersion == 10) {
            return 10;
        }
        else {
            return 6; //IE版本<=7
        }
    }
    else if (isIE11) {
        return 11; //IE11
    }
    else {
        return 0;
    }
};

var getOs = (function () {
    var sUserAgent = navigator.userAgent;
    var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
    var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
    if (isMac)
        return "Mac";
    var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
    if (isUnix)
        return "Unix";
    var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
    if (isLinux)
        return "Linux";
    if (isWin) {
        var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
        if (isWin2K)
            return "Win2000";
        var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
        if (isWinXP)
            return "WinXP";
        var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
        if (isWin2003)
            return "Win2003";
        var isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
        if (isWinVista)
            return "WinVista";
        var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
        if (isWin7)
            return "Win7";
        var isWin10 = sUserAgent.indexOf("Windows NT 10") > -1 || sUserAgent.indexOf("Windows 10") > -1;
        if (isWin10)
            return "Win10";
    }
    return "unknow";
});

var ScreenDirectionTypeEnum;
(function (ScreenDirectionTypeEnum) {
    ScreenDirectionTypeEnum["PORTRAIT"] = "portrait";
    ScreenDirectionTypeEnum["LANDSCAPE"] = "landscape";
})(ScreenDirectionTypeEnum || (ScreenDirectionTypeEnum = {}));

//
// export default (): ScreenDirectionTypeEnum => matchMedia("(orientation: portrait)").matches ? ScreenDirectionTypeEnum.PORTRAIT : ScreenDirectionTypeEnum.LANDSCAPE
// 只有移动端有效
var getScreenDirection = (function () { return (window.orientation === 0 || window.orientation == 180) ? ScreenDirectionTypeEnum.PORTRAIT : ScreenDirectionTypeEnum.LANDSCAPE; });

// @ts-ignore
var getInternetSpeed = (function () { var _a, _b; return ((_b = (_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.connection) === null || _b === void 0 ? void 0 : _b.downlink) * 1024 / 8 || 0; });

var getMaxESVersion = (function () {
    // 从小到大返回，减少打特定补丁的概率
    if (!('Promise' in window && 'Symbol' in window)) {
        return 5;
    }
    else if (!Array.prototype.includes) {
        return 6;
    }
    else if (!Object.getOwnPropertyDescriptors) {
        return 7;
    }
    else if (!Promise || !Promise.prototype.finally) {
        return 8;
    }
    else if (!Object.fromEntries) {
        return 9;
    }
    else if (!Promise || !Promise.allSettled) {
        return 10;
    }
    else if (!('WeakRef' in window)) {
        return 11;
    }
    else if (!('hasOwn' in Object)) {
        return 12;
    }
    return 13;
});

var getNavigationType = (function () { return performance.navigation.type; });

var getPopularBrowserInfo = (function (projectName) {
    if (projectName === void 0) { projectName = ''; }
    var browserInfo = {};
    browserInfo.browserTimestamp = getBrowserTimestamp();
    browserInfo.browserTimezoneOffset = new Date().getTimezoneOffset();
    browserInfo.browserType = getBrowserType();
    browserInfo.browserVersion = getBrowserVersion(browserInfo.browserType);
    browserInfo.os = getOs();
    browserInfo.isMobile = /mobile/i.test(navigator.userAgent);
    browserInfo.platform = navigator.platform;
    browserInfo.language = navigator.language;
    browserInfo.clientWidth = innerWidth;
    browserInfo.clientHeight = innerHeight;
    browserInfo.screenDirection = getScreenDirection();
    browserInfo.internetSpeed = getInternetSpeed();
    browserInfo.supportSessionStorage = 'sessionStorage' in window;
    browserInfo.supportLocalStorage = 'localStorage' in window;
    browserInfo.supportIndexDB = 'indexedDB' in window;
    browserInfo.maxESVersion = getMaxESVersion();
    browserInfo.navigationType = getNavigationType();
    browserInfo.projectName = projectName;
    return browserInfo;
});

export { getPopularBrowserInfo as default };
