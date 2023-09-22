import EventEmitter from "eventemitter3";

interface addListener {
  eventName: string;
  fn: (...args: any[]) => void;
}

class SelfObserver extends EventEmitter {
  constructor() {
    super();
  }

  removeAll(context: string) {
    this.removeAllListeners(context);
  }
  removeEvents(context: string, callback: any) {
    this.removeListener(context, callback);
  }

  // 解绑事件
  selfOff<T extends string | symbol>(event: T, context: any): this {
    this.off(event, this.getFn(event, context));
    return this;
  }
  // 获取注册函数
  getFn<T extends string | symbol>(eventName: T, content: string) {
    let events: any = this.listeners(eventName);
    if (Array.isArray(events)) {
      return events.find((item: any) => {
        if (item.content == content) {
          return item.fn;
        }
      });
    } else {
      return events.fn;
    }
  }
  // 集体注册事件
  selfAddListenerList(
    observerListenerList: Array<addListener>,
    content: string
  ) {
    for (let i = 0; i < observerListenerList.length; i++) {
      this.on(
        observerListenerList[i].eventName,
        observerListenerList[i].fn,
        content
      );
    }
  }
  // 集体解绑事件
  selfOffListenerList(eventArgsList: Array<addListener>, content: string) {
    for (let i = 0; i < eventArgsList.length; i++) {
      this.selfOff(eventArgsList[i].eventName, content);
    }
  }
}
// 单例观察者模式
const ObserverInstance = new SelfObserver();

export { ObserverInstance };