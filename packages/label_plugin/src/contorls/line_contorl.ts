/*
 * @LastEditTime: 2023-09-08 15:53:05
 * @Description: 
 */
// import { deepClone, getDom } from "../../utils/util";
// import { ObserverInstance } from "../event/observer";
// import { drawEvents } from "../event/events";
import { lineDrawConfig } from "./common_ts";
class lineContorl {
  TAG = "Line";
  configData: { [k: string]: any } = {
    lineColor: "rgb(8, 175, 252)", // 线条默认颜色
    pointsMaxNum: -1, // 线条点数限制。最小不能低于2，低于2则表示无点数限制
    exceed: false, // 线段是否可超出图片区域绘制
  }
  drawConfig: lineDrawConfig = {
    sign: false, // 是否点击创建line
    start: false, // 是否开始创建
    end: false, // 是否结束创建
    points: <any>[], // 绘制元素坐标值
  }

  constructor(lineConfig: { pointsMaxNum: number, lineColor?: string, exceed: boolean }) {
    Object.keys(this.configData).forEach((ele: string) => {
      if (lineConfig[ele]) {
        this.configData[ele] = lineConfig[ele]
      }
    })
  }
  statusClick(sign: boolean) {
    this.drawConfig.sign = sign;
  }
  downFun(ctx: CanvasRenderingContext2D, x: number, y: number) {
    if (!this.drawConfig.sign || this.drawConfig.points.length >= this.configData.pointsMaxNum) return;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.stroke();
    ctx.save();
    this.drawConfig.points.push([x, y]);
    
  }
  moveFun(ctx: CanvasRenderingContext2D, x: number, y: number) {
    console.log(x, y);
    
    ctx.beginPath();
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
export default lineContorl;
