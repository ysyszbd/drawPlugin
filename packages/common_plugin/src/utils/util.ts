// 获取dom元素
export function getDom(dom: any, name: string) {
  return dom?.find(name)[0];
}

// 深拷贝
export function deepClone(obj: any, map = new WeakMap()) {
  if (typeof obj !== "object" || obj === null) return obj;
  if (map.has(obj)) return map.get(obj);
  let res: any = Array.isArray(obj) ? [] : {};
  map.set(obj, res);
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key))
      res[key] = deepClone(obj[key], map);
  }
  return res;
}