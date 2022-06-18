(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{455:function(t,s,n){"use strict";n.r(s);var a=n(65),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"静态成员"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#静态成员"}},[t._v("#")]),t._v(" 静态成员")]),t._v(" "),n("p",[t._v("静态成员有静态属性和静态方法")]),t._v(" "),n("p",[t._v("在类中通过 static 修饰的属性或方法就是静态的属性或静态的方法。")]),t._v(" "),n("p",[t._v("静态成员在使用的时候是通过类名.的这种语法来调用的")]),t._v(" "),n("p",[t._v("静态成员是属于类的，和实例化对象无关，实例化对象不能使用。静态成员的优点在于不用通过实例化对象而直接可以通过类进行访问。")]),t._v(" "),n("p",[t._v("构造函数是不能通过 static 进行修饰的")]),t._v(" "),n("p",[t._v("语法：")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 静态属性")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类中默认有一个内置的name属性")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" name1"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"李四"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// constructor(name:string){")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this.name = name//Person类的静态属性不能通过this去访问，因为this指向Person的实例化对象，而实例化对象身上没有这个属性，所以会报错：类型“Person”上不存在属性“name”。")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 静态方法")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHi")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你好啊"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" person"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Person "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"法外狂徒张三"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用实例属性")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log(person.name) // 静态属性不能通过实例化对象进行访问")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用示例方法")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// person.sayHi() // 静态方法不能通过实例化对象调用")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 访问类的静态属性")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改类的静态属性")]),t._v("\nPerson"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"许嵩"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用类的静态方法")]),t._v("\nPerson"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHi")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);