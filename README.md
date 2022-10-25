# install
```js
npm install -S get-popular-browser-info
```

# use
```js
import getPopularBrowserInfo from 'get-popular-browser-info'
const popularBrowserInfo = getPopularBrowserInfo('your project name')
then unload popularBrowserInfo object to your server
```

# information

| prop | example           | describe                                                       |
|------|-------------------|----------------------------------------------------------------|
|browserTimestamp      | 1666687780316     | get client timestamp for compare width server                  |
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

