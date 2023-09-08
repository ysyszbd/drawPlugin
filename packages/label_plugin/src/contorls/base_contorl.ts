/*
 * @LastEditTime: 2023-09-08 14:59:53
 * @Description:
 */
import { resizeTs } from "./common_ts";
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

  constructor(drawCanvas: HTMLCanvasElement, domId: string, handleCanvas: HTMLCanvasElement) {
    this.drawCanvas = drawCanvas;
    this.drawContext = drawCanvas.getContext("2d");
    this.handleCanvas = handleCanvas;
    this.handleContext = handleCanvas.getContext("2d") as CanvasRenderingContext2D;
    this.domId = domId;
    this.dom = document.getElementById(domId);
  }

  // 初始化画板
  initCanvas() {}
  // 图片渲染---暂时不通过canvas渲染图片，canvas渲染图片耗时较长
  drawImg() {}
  // 画板渲染
  // 绘制圆点
  drawPoint(x: number, y: number) {
    const ctx = this.handleContext as CanvasRenderingContext2D;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(255, 0, 0, 0.8)";
    ctx.fill();
    ctx.strokeStyle = "red";
    ctx.stroke();
  }
  // 绘制线条
  // 绘制矩形

  // 拖拽画板

  // 放大、缩小
  resizeWheel(e: any) {
    e = window.event || e;
    // debugger
    let down = e.wheelDelta ? e.wheelDelta < 0 : e.detail > 0;
    if (!down) {
      // console.log("鼠标滚轮向下放大---------");
      this.resizeData.scaleNum = (Number(this.resizeData.scaleNum) + 0.02).toFixed(2) as unknown as number;
      this.dom!.style.transform = "scale(" + this.resizeData.scaleNum + ")"; //scale()在这里要使用拼接的方式才能生效
      this.dom!.style.transformOrigin = "0 0";
    } else {
      // console.log("鼠标滚轮向上缩小++++++++++");
      if (this.resizeData.scaleNum == 0.01) {
        this.resizeData.scaleNum = 0.01;
        return;
      } else {
        this.resizeData.scaleNum = (Number(this.resizeData.scaleNum) - 0.02).toFixed(2) as unknown as number;
      }
      this.dom!.style.transform = "scale(" + this.resizeData.scaleNum + ")"; //scale()在这里要使用拼接的方式才能生效。
      this.dom!.style.transformOrigin = "0 0";
    }
    return false;
  }
}
export default baseContorl;
