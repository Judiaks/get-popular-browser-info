import {ScreenDirectionTypeEnum} from "../types/ScreenDirectionTypeEnum";
//
// export default (): ScreenDirectionTypeEnum => matchMedia("(orientation: portrait)").matches ? ScreenDirectionTypeEnum.PORTRAIT : ScreenDirectionTypeEnum.LANDSCAPE

// 只有移动端有效
export default (): ScreenDirectionTypeEnum => (window.orientation === 0 || window.orientation == 180) ? ScreenDirectionTypeEnum.PORTRAIT : ScreenDirectionTypeEnum.LANDSCAPE
