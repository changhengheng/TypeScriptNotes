(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{473:function(s,t,e){"use strict";e.r(t);var n=e(65),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"vscode-自动编译-ts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vscode-自动编译-ts"}},[s._v("#")]),s._v(" VSCode 自动编译 TS")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('1). 生成配置文件tsconfig.json\n    tsc --init\n2). 修改tsconfig.json配置\n    "outDir": "./js",\n    "strict": false,\n3). 启动监视任务:\n    终端 -> 运行任务 -> 监视tsconfig.json\n4). 新建一个index.html文件，引入编译后的js文件，然后用 vsc open with live serve 即可\n')])])]),e("p",[e("code",[s._v("tsconfig.json")]),s._v(" 文件的同级目录里至少需要保留一个 "),e("code",[s._v(".ts")]),s._v(" 格式的文件，否则该配置文件会报错。")]),s._v(" "),e("p",[s._v("可能出现的 bug")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("error TS5058: The specified path does not exist\n")])])]),e("p",[s._v("原因：修改了 vscode 默认的系统终端类型")]),s._v(" "),e("p",[s._v("解决：设置-终端-改成默认的终端即可")])])}),[],!1,null,null,null);t.default=a.exports}}]);