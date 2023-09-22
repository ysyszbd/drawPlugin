/*
 * @LastEditTime: 2023-09-22 18:04:58
 * @Description:
 */
import { resizeTs } from "./common_ts";
import { getCurrentInstance } from "vue";
class baseContorl {
  // 图形绘制canvas
  drawCanvas: HTMLCanvasElement | null = null;
  drawContext: CanvasRenderingContext2D | null = null;
  // 操作绘制canvas
  handleCanvas: HTMLCanvasElement | null = null;
  handleContext: CanvasRenderingContext2D | null = null;
  // 绘制组件dom
  domId = "";
  dom: HTMLElement | null = null;
  // 缩放数据
  resizeData: resizeTs = {
    scaleNum: 1,
  };
  app: any = getCurrentInstance();
  publicContorl = this.app.appContext.config.globalProperties.$publicContorl;

  constructor(
    drawCanvas: HTMLCanvasElement,
    domId: string,
    handleCanvas: HTMLCanvasElement
  ) {
    this.drawCanvas = drawCanvas;
    this.drawContext = drawCanvas.getContext("2d");
    this.handleCanvas = handleCanvas;
    this.handleContext = handleCanvas.getContext(
      "2d"
    ) as CanvasRenderingContext2D;
    this.domId = domId;
    this.dom = document.getElementById(domId);
  }

  // 初始化画板
  initCanvas() {}
  // 图片渲染---暂时不通过canvas渲染图片，canvas渲染图片耗时较长
  drawImg() {}
  // 画板渲染
  // 绘制圆点
  drawPoint(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    attr: any = {}
  ) {
    // canvas操作
    // const ctx = this.handleContext as CanvasRenderingContext2D;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI, true);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();
    // svg操作
    // svg_dom.circle(8).attr({
    //   id: `assist_circle`,
    //   fill: "red",
    //   "fill-opacity": "1",
    //   cx: x,
    //   cy: y,
    //   type: this.publicContorl.drawConfig.type,
    //   ...attr,
    // });
  }
  // 绘制线条
  drawLine(svg_dom: any, points: number[][], attr: any = {}) {
    return svg_dom.polyline(points).attr({
      fill: "#999",
      "fill-opacity": 0,
      stroke: "#999",
      "stroke-width": 1,
      "color-rendering": "optimizeQuality",
      "shape-rendering": "geometricprecision",
      id: `assist_line`,
      ...attr,
    });
  }
  // 绘制矩形

  // 拖拽画板

  // 放大、缩小
  resizeWheel(e: any) {
    e = window.event || e;
    // debugger
    let down = e.wheelDelta ? e.wheelDelta < 0 : e.detail > 0;
    if (!down) {
      // console.log("鼠标滚轮向下放大---------");
      this.resizeData.scaleNum = (
        Number(this.resizeData.scaleNum) + 0.02
      ).toFixed(2) as unknown as number;
      this.dom!.style.transform = "scale(" + this.resizeData.scaleNum + ")"; //scale()在这里要使用拼接的方式才能生效
      this.dom!.style.transformOrigin = "0 0";
    } else {
      // console.log("鼠标滚轮向上缩小++++++++++");
      if (this.resizeData.scaleNum == 0.01) {
        this.resizeData.scaleNum = 0.01;
        return;
      } else {
        this.resizeData.scaleNum = (
          Number(this.resizeData.scaleNum) - 0.02
        ).toFixed(2) as unknown as number;
      }
      this.dom!.style.transform = "scale(" + this.resizeData.scaleNum + ")"; //scale()在这里要使用拼接的方式才能生效。
      this.dom!.style.transformOrigin = "0 0";
    }
    return false;
  }
}
export default baseContorl;
