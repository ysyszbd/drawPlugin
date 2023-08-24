/*
 * @LastEditTime: 2023-08-24 16:52:41
 * @Description: 用来导出组件代码
 */

import { deepClone, getDom } from "@/utils/util";
import lineContorl from "@/graphics/contorls/line_contorl";
import publicContorl from "@/graphics/contorls/public_contorl";

export const UTILS = {
  deepClone, getDom
}
export const GRAPH = {
  lineContorl,
  publicContorl
}
