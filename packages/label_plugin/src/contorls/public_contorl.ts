/*
 * @LastEditTime: 2023-08-30 15:06:57
 * @Description:
 */
import { resizeTs } from "./common_ts";
class publicContorl {
  canvas: HTMLCanvasElement | null = null;
  context: CanvasRenderingContext2D | null = null;
  domId = "";
  dom: HTMLElement | null = null;
  resizeData: resizeTs = {
    scaleNum: 1,
  };

  constructor(canvas: HTMLCanvasElement, domId: string) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.domId = domId;
    this.dom = document.getElementById(domId);
  }

  // 初始化画板
  initCanvas() {}
  // 图片渲染---暂时不通过canvas渲染图片，canvas渲染图片耗时较长
  drawImg() {}
  // 画板渲染

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
export default publicContorl;
