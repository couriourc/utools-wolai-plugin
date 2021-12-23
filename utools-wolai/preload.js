window.exports = {
  "features.code": {
    // 注意：键对应的是 plugin.json 中的 features.code
    mode: "none", // 用于无需 UI 显示，执行一些简单的代码
    args: {
      // 进入插件时调用
      enter: (action) => {
        // action = { code, type, payload }
        window.utools.hideMainWindow();

        let wolaiWebUrl = "https://www.wolai.com/login";
        window.utools.onPluginReady(() => {
          utools.ubrowser
            .goto(wolaiWebUrl)
            .run({ width: 1000, height: 600 })
            .then((res) => {
              console.log(res);
            });
        });
        // do some thing
        window.utools.outPlugin();
      },
    },
  },
};
