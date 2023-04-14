export default {
  panels: [
    {
      index: 0,
      name: 1,
      height: 70,
      width: 105,
      paperHeader: 0,
      paperFooter: 196.875,
      printElements: [
        { options: { left: 4.5, top: 4.5, height: 189, width: 288, coordinateSync: false, widthHeightSync: false, borderColor: "#ffBB11" }, printElementType: { title: "矩形", type: "rect" } },
        {
          options: {
            left: 10.5,
            top: 15,
            height: 123,
            width: 130.5,
            field: "qrcode",
            testData: "XS888888888",
            fontSize: 12,
            lineHeight: 18,
            textType: "qrcode",
            title: "二维码",
            right: 278.25,
            bottom: 127.5,
            vCenter: 211.5,
            hCenter: 71.25,
          },
          printElementType: { title: "二维码", type: "text" },
        },
        {
          options: {
            left: 151.5,
            top: 21,
            height: 17,
            width: 120,
            testData: "右侧模板",
            fontSize: 16.5,
            fontWeight: "700",
            textAlign: "center",
            hideTitle: true,
            title: "右侧模板",
            right: 262.5,
            bottom: 38,
            vCenter: 202.5,
            hCenter: 29.5,
          },
          printElementType: { title: "右侧模板", type: "text" },
        },
        {
          options: {
            left: 151.5,
            top: 58.5,
            height: 16,
            width: 120,
            field: "orderId",
            testData: "XS888888888",
            fontSize: 6.75,
            fontWeight: "700",
            textAlign: "left",
            textContentVerticalAlign: "middle",
            title: "订单编号",
            right: 133.5,
            bottom: 86.5,
            vCenter: 73.5,
            hCenter: 78.5,
          },
          printElementType: { title: "订单编号", type: "text" },
        },
        {
          options: {
            left: 151.5,
            top: 93,
            height: 16,
            width: 120,
            field: "date",
            testData: "2023-05-01",
            fontSize: 6.75,
            fontWeight: "700",
            textAlign: "left",
            textContentVerticalAlign: "middle",
            title: "业务日期",
            right: 134.25,
            bottom: 122.5,
            vCenter: 74.25,
            hCenter: 114.5,
          },
          printElementType: { title: "业务日期", type: "text" },
        },
        {
          options: {
            left: 151.5,
            top: 124.5,
            height: 16,
            width: 120,
            field: "creator",
            testData: "李四",
            fontSize: 6.75,
            fontWeight: "700",
            textAlign: "left",
            textContentVerticalAlign: "middle",
            title: "制单人",
            right: 137.25,
            bottom: 140.5,
            vCenter: 77.25,
            hCenter: 132.5,
          },
          printElementType: { title: "制单人", type: "text" },
        },
      ],
      paperNumberLeft: 267,
      paperNumberTop: 176,
      paperNumberDisabled: true,
      watermarkOptions: {},
    },
  ],
};