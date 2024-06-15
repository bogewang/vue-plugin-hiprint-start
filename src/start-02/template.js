export default {
  panels: [
    {
      index: 0,
      height: 140,
      width: 210,
      paperHeader: 49.5,
      paperFooter: 780,
      printElements: [
        {
          options: {
            left: 175.5,
            top: 10.5,
            height: 27,
            width: 259,
            title: "HiPrint自定义模块打印插件",
            fontSize: 19,
            fontWeight: "600",
            textAlign: "center",
            lineHeight: 26,
            coordinateSync: true,
            widthHeightSync: true,
            draggable: false,
          },
          printElementType: { title: "自定义文本", type: "text" },
        },
        {
          options: {
            left: 60,
            top: 180,
            height: 56,
            width: 511.5,
            field: "table",
            tableFooterRepeat: "",
            fields: [
              { text: "名称", field: "NAME" },
              { text: "数量", field: "SL" },
              { text: "规格", field: "GG" },
              { text: "条码", field: "TM" },
              { text: "单价", field: "DJ" },
              { text: "金额", field: "JE" },
              { text: "备注", field: "DETAIL" },
            ],
            columns: [
              [
                { title: "名称", align: "center", field: "NAME", width: 100 },
                { title: "数量", align: "center", field: "SL", width: 100 },
                { title: "条码", align: "center", field: "TM", width: 100 },
                { title: "规格", align: "center", field: "GG", width: 100 },
                { title: "单价", align: "center", field: "DJ", width: 100 },
                { title: "金额", align: "center", field: "JE", width: 100 },
                { title: "备注", align: "center", field: "DETAIL", width: 100 },
              ],
            ],
          },
          printElementType: {
            title: "表格",
            type: "table",
          },
        },
      ],
      paperNumberLeft: 565.5,
      paperNumberTop: 819,
    },
  ],
};
