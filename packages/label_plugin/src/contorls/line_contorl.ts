/*
 * @LastEditTime: 2023-09-22 17:10:51
 * @Description:
 */
// import { deepClone, getDom } from "../../utils/util";
// import { ObserverInstance } from "../event/observer";
// import { drawEvents } from "../event/events";
import { lineDrawConfig } from "./common_ts";
import { SVG } from "@svgdotjs/svg.js";
import { getCurrentInstance } from "vue";
import { ObserverInstance } from "../event/observer";
import { drawEvents } from "../event/events";

class lineContorl {
  TAG = "line";
  configData: { [k: string]: any } = {
    lineColor: "rgb(8, 175, 252)", // 线条默认颜色
    pointsMaxNum: -1, // 线条点数限制。最小不能低于2，低于2则表示无点数限制
    exceed: false, // 线段是否可超出图片区域绘制
  };
  DRAW_SVG: any = null;
  handle_dom: any = null;
  drawConfig: lineDrawConfig = {
    nums: 0, // 当前的操作点下标
    sign: false, // 是否点击创建line
    start: false, // 是否开始创建
    end: false, // 是否结束创建
    points: <any>[], // 绘制元素坐标值
  };
  app: any = getCurrentInstance();
  publicContorl = this.app.appContext.config.globalProperties.$publicContorl;

  constructor(lineConfig: {
    pointsMaxNum: number;
    lineColor?: string;
    exceed: boolean;
  }) {
    this.DRAW_SVG = SVG("#draw_svg");
    Object.keys(this.configData).forEach((ele: string) => {
      if (lineConfig[ele]) {
        this.configData[ele] = lineConfig[ele];
      }
    });
  }
  statusClick(sign: boolean) {
    this.drawConfig.sign = sign;
  }
  drawDownFun(x: number, y: number) {
    console.log("drawDownFun---");
    
    if (!this.publicContorl.drawConfig.sign) return;
    if (this.drawConfig.points.length >= this.configData.pointsMaxNum) {
      console.log(`创建完毕_${this.TAG}`);
      
      ObserverInstance.emit(drawEvents.DRAW_OVER, {
        text: `创建完毕_${this.TAG}`
      });
    }
    if (!this.drawConfig.points.length) this.drawConfig.start = true;
    this.drawConfig.points.push([x, y]);
    this.drawConfig.nums++;
    this.handle_dom = this.drawLine(
      this.drawConfig.points[this.drawConfig.points.length - 1]
    );
  }
  drawMoveFun(x: number, y: number) {
    if (!this.drawConfig.start) return;
    this.handle_dom.attr({
      points: [...this.drawConfig.points, [x, y]],
    });
  }
  // 绘制线条--svg
  drawLine(points: number[][], attr: any = {}) {
    console.log(points, "points", this.DRAW_SVG);
    return this.DRAW_SVG.polyline(points).attr({
      "fill-opacity": 0,
      stroke: "#000",
      "stroke-width": 1,
      "color-rendering": "optimizeQuality",
      "shape-rendering": "geometricprecision",
      id: `assist_line`,
      ...attr,
    });
  }
}
export default lineContorl;
