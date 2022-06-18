module.exports = {
    title: 'TypeScriptNotes',
    dest: './dist',
    base: '/TypeScriptNotes/',
    repo:
        'https://github.com/changhengheng/TypeScriptNotes',
    themeConfig: {
        lastUpdated: '上次更新',
        smoothScroll: true,
        nav: [
            {
                text: 'typeScriptNotes',
                link: 'https://github.com/changhengheng/TypeScriptNotes',
            },
        ],
        sidebar: [
            {
                title: '0.准备工作',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    ['/sgg/准备工作/1.安装TS', '安装TS'],
                    ['/sgg/准备工作/2.第一个TS', '第一个TS'],
                    ['/sgg/准备工作/3.VSCode自动编译TS', 'VSCode自动编译TS'],
                    ['/sgg/准备工作/4.类型注解', '类型注解'],
                    ['/sgg/准备工作/5.接口', '接口'],
                    ['/sgg/准备工作/6.类', '类'],
                    ['/sgg/准备工作/7.使用webpack打包TS', '使用webpack打包TS'],
                ]
            },
            {
                title: '1.基础类型',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    ['/sgg/1.基础类型/1.布尔值', '布尔值'],
                    ['/sgg/1.基础类型/2.数字', '数字'],
                    ['/sgg/1.基础类型/3.字符串', '字符串'],
                    ['/sgg/1.基础类型/4.基础类型赋值的问题', '基础类型赋值的问题'],
                    ['/sgg/1.基础类型/5.undefined和null', 'undefined和null'],
                    ['/sgg/1.基础类型/6.数组和元组', '数组和元组'],
                    ['/sgg/1.基础类型/7.枚举', '枚举'],
                    ['/sgg/1.基础类型/8.any和void', 'any和void'],
                    ['/sgg/1.基础类型/9.object', 'object'],
                    ['/sgg/1.基础类型/10.联合类型', '联合类型'],
                    ['/sgg/1.基础类型/11.类型断言', '类型断言'],
                    ['/sgg/1.基础类型/12.类型推断', '类型推断'],
                ]
            },
            {
                title: '2.接口',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/sgg/2.接口/',
                    ['/sgg/2.接口/1.接口', '接口'],
                    ['/sgg/2.接口/2.函数类型', '函数类型'],
                    ['/sgg/2.接口/3.类类型', '类类型'],
                ]
            },
            {
                title: '3.类',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    ['/sgg/3.类/1.类', '类'],
                    ['/sgg/3.类/2.继承', '继承'],
                    ['/sgg/3.类/3.多态', '多态'],
                    ['/sgg/3.类/4.成员修饰符', '成员修饰符'],
                    ['/sgg/3.类/5.readonly修饰符', 'readonly修饰符'],
                    ['/sgg/3.类/6.存取器', '存取器'],
                    ['/sgg/3.类/7.静态成员', '静态成员'],
                    ['/sgg/3.类/8.抽象类', '抽象类'],
                ]
            },
            {
                title: '4.函数',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    ['/sgg/4.函数/1.函数', '类'],
                    ['/sgg/4.函数/2.可选参数和默认参数', '可选参数和默认参数'],
                    ['/sgg/4.函数/3.剩余参数', '剩余参数'],
                    ['/sgg/4.函数/4.函数重载', '函数重载'],
                ]
            },
            {
                title: '5.泛型',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    ['/sgg/5.泛型/1.泛型', '泛型'],
                    ['/sgg/5.泛型/2.多个泛型参数的函数', '多个泛型参数的函数'],
                    ['/sgg/5.泛型/3.泛型接口', '泛型接口'],
                    ['/sgg/5.泛型/4.泛型类', '泛型类'],
                    ['/sgg/5.泛型/5.泛型约束', '泛型约束'],
                ]
            },
            {
                title: '6.其他',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    ['/sgg/6.其他/1.声明文件', '声明文件'],
                    ['/sgg/6.其他/2.内置对象', '内置对象'],
                ]
            },
            {
                title: '7.补充',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    ['/sgg/7.补充/类型声明空间和变量声明空间', '类型声明空间和变量声明空间'],
                    ['/sgg/7.补充/JS类的复习', 'JS类的复习'],
                ]
            },
        ]
    }
}