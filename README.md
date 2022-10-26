[get-popular-browser-info] is a javascript lib for analyse your website user's browsers.It provide browser type, browser version and more popular properties, wtf it only 4 Kb.

# installation
```js
npm install -S get-popular-browser-info
```

# usage
```js
import getPopularBrowserInfo from 'get-popular-browser-info'
const popularBrowserInfo = getPopularBrowserInfo('your project name')
then upload popularBrowserInfo object to your server
```
if you want to use other js type, find in 'get-popular-browser-info/dist'

# property

| prop | example           | describe                                                       |
|------|-------------------|----------------------------------------------------------------|
|browserTimestamp      | 1666687780316     | get client timestamp for compare with server                  |
|browserTimezoneOffset      | -480              | unit is minute,east is negative,west is positive               |
|browserType      | "chrome"          | the last packing browser                                       |
|browserVersion      | 96                | main browser version, not include decimal                      |
|os      | "Win10"           | client system                                                  |
|isMobile      | false             | is a mobile device                                             |
|platform      | "Win32"           | client platform                                                |
|language      | "en"              | browser using language                                         |
|clientWidth      | 1500              | browser window width                                           |
|clientHeight      | 1000              | browser window height                                          |
|screenDirection      | "landscape"       | screen "landscape" or "portrait", only mobile device effective |
|internetSpeed      | 1280              | internet speed,unit is Kb                                      |
|supportSessionStorage      | true              | can use session storage                                        |
|supportLocalStorage      | true              | can use local storage                                          |
|supportIndexDB      | true              | can use index DB                                               |
|maxESVersion      | 13                | from 5 to 13                                                   |
|navigationType      | 0                 | how into this page,equal performance.navigation.type                                      |
|projectName      | your project name | when you have more front end projects, it need                 |

