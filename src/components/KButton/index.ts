import { App, Component } from "vue"; // 引入 Vue 的类型
import KButton from "./KButton.vue";

// 实现封装函数并添加类型约束
function withInstall<T extends Component>(
  component: T
): T & { install: (app: App) => void } {
  (component as any).install = (app: App): void => {
    const name = (component as any).name; // 获取组件名称
    if (!name) {
      console.warn("Component is missing a name property!");
    } else {
      app.component(name, component); // 注册组件
    }
  };
  return component as T & { install: (app: App) => void };
}

// 使用封装后的组件
export const KlButton = withInstall(KButton);
export * from "./type";
