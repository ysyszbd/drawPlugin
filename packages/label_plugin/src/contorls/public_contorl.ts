/*
 * @LastEditTime: 2023-09-07 10:21:29
 * @Description:
 */
import { resizeTs } from "./common_ts";
class publicContorl {
  canvas: HTMLCanvasElement | null = null;
  context: CanvasRenderingContext2D | null = null;
  domId = "";
  dom: HTMLElement | null = null;
  drawConfig = {
    type: "",    // 当前操作的图形类型
    sign: false, // 当前是否处于操作进行中的状态
    status: "edit", // 当前是什么状态  edit：编辑；add：创建
  }
  TAG = "public"

  constructor() {
    // this.canvas = canvas;
    // this.context = canvas.getContext("2d");
    // this.domId = domId;
    // this.dom = document.getElementById(domId);
  }

  // 初始化画板
  initCanvas() {}
  // 图片渲染---暂时不通过canvas渲染图片，canvas渲染图片耗时较长
  drawImg() {}
  // 画板渲染

  // 操作状态记录
  recordFun(type: string, sign: boolean, status: string) {
    this.drawConfig.type = type;
    this.drawConfig.sign = sign;
    this.drawConfig.status = status;
    console.log(this, this.TAG);
    
  }
}
export default publicContorl;
