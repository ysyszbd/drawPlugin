/*
 * @LastEditTime: 2023-08-24 14:31:11
 * @Description: 
 */
// import { deepClone, getDom } from "../../utils/util";
// import { ObserverInstance } from "../event/observer";
// import { drawEvents } from "../event/events";

class lineContorl {
  TAG = "Line";
  configData = {
    lineColor: "rgb(8, 175, 252)", // 线条默认颜色
    pointNum: -1, // 线条点数限制。最小不能低于2，低于2则表示无点数限制
  }

  constructor(lineConfig: { pointsNum: number, lineColor: string }) {
    console.log(lineConfig, "lineConfig")
    Object.keys(this.configData).forEach((ele) => {
      console.log(ele, "ele");
      
    })
  }
  
}
export default lineContorl;
