/*
 * @Description:
 * @Author: CcSimple
 * @Github: https://github.com/CcSimple
 * @Date: 2023-02-09 13:32:39
 * @LastEditors: CcSimple
 * @LastEditTime: 2023-02-09 23:38:03
 */
import { reactive, computed, toRefs } from "vue";
import { getHiprintPrintTemplate } from "../utils/template-helper";

/**
 * vue3 组合式函数
 * 把一些逻辑抽离出来，方便复用
 * 返回 使用方 可用的方法和数据
 */
export function usePaper(key) {
  // 数据
  const state = reactive({
    curPaper: {
      type: "二等分",
      width: 210,
      height: 140,
    },
    paperTypes: {
      '一等分': {
        width: 210,
        height: 280,
      },
      '二等分': {
        width: 210,
        height: 140,
      },
      '三等分': {
        width: 210,
        height: 93,
      }
    },
    paperTypes2: {
      'A4横向': {
        width: 297,
        height: 210,
      },
      'A5横向': {
        width: 210,
        height: 148,
      },
      '二等分横向': {
        width: 140,
        height: 210,
      }
    },
    paperTypes3: {
      '小票(48mm)': {
        width: 48,
        height: 160,
      },
      '小票(80mm)': {
        width: 80,
        height: 160,
      },
      '小票(110mm)': {
        width: 110,
        height: 160,
      }
    },
    // 自定义纸张
    paperPopVisible: false,
    paperWidth: "210",
    paperHeight: "140",
  });
  // 计算属性
  const curPaperType = computed(() => {
    let type = "other";
    let types = state.paperTypes;
    for (const key in types) {
      let item = types[key];
      let { width, height } = state.curPaper;
      if (item.width === width && item.height === height) {
        type = key;
      }
    }
    return type;
  });
  const tp = () => {
    return getHiprintPrintTemplate(key);
  };
  // 方法
  const showPaperPop = () => {
    state.paperPopVisible = true;
  };
  const hidePaperPop = () => {
    state.paperPopVisible = false;
  };
  const setPaper = (type, value) => {
    try {
      if (Object.keys(state.paperTypes).includes(type)) {
        state.curPaper = { type: type, width: value.width, height: value.height };
        tp().setPaper(value.width, value.height);
      } else {
        state.curPaper = { type: "other", width: value.width, height: value.height };
        tp().setPaper(value.width, value.height);
      }
    } catch (error) {
      alert(`操作失败: ${error}`);
    }
  };
  const setPaperOther = () => {
    let value = {};
    value.width = state.paperWidth;
    value.height = state.paperHeight;
    state.paperPopVisible = false;
    setPaper("other", value);
  };
  // 暴露给使用方
  return {
    ...toRefs(state),
    curPaperType,
    showPaperPop,
    hidePaperPop,
    setPaper,
    setPaperOther,
  };
}
