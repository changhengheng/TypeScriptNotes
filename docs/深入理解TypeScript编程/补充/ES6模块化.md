# ES6模块化

无论什么样的暴露方式，往外暴露的都是一个对象，只不过，暴露的对象形成方式不一样

**默认暴露**

```js
export default {a:100}
```

暴露的是一个对象，这个对象里面是以default为属性名，以default后面的东西为值的对象：

```js
{
    default:{a:100}
}
```

引入的时候，如果是默认暴露，通常我们是这样引入：

```js
import a from './xxx.js'
```

它其实是一个简写方式，全写应该是：

```js
import {default as a} from './xxx.js'
```


由于默认暴露引入的时候如果全写会很麻烦，因此才出现上面我们的简写

**分别暴露**

```js
export const a = 100
export const reqXX = () => {}
```

最终暴露出文件的时候，会自动的把分别暴露的信息封装为一个对象：

```js
{
    a:a,
    reqXX:reqXX
}
```

引入的时候：

```js
import {reqXX} from './xx.js'
import {a} from './xx.js
```

**整体暴露**

```js
const a = 100
const obj = {a:100}
```

最终暴露的就是你export 后面的对象：

```js
export {
	a,
    obj
}
```

引入的时候：

```js
import {a} from './xx.js'
import {obj} from './xx.js'
```

**引入**

无论什么暴露方式，如果你想拿到暴露出文件的整个那个对象，就得这么干

```js
import * as xxx from './xx.js'   
```

**引入并暴露**

指把外部所有的暴露东西合并，然后再一起暴露。

可以这样理解，但是不能这样写，即引入并暴露：先引入，再分别暴露

```js
import {default as trademark} from './trademark'
//简写是import trademark from './trademark.js'
export trademark
```

引入并暴露正确写法

```js
export {default as attr} from './product/attr'
export {default as category} from './product/category'
export {default as spu} from './product/spu'
export * as user from './acl/user'
```

出文件的时候是这样的对象

```js
{
    trademark:{
        remove
    },
    attr:{}
}
```

另，参考[阮一峰](https://es6.ruanyifeng.com/#docs/module)

**import()** 

[ES2020提案](https://github.com/tc39/proposal-dynamic-import) 引入`import()`函数，支持动态加载模块。

`import()`函数就能接受什么参数（主要是模块路径），两者区别主要是后者为动态加载。

`import()`函数可以用在任何地方，不仅仅是模块，非模块的脚本也可以使用。它是运行时执行，也就是说，什么时候运行到这一句，就会加载指定的模块。

由于`import()`返回 Promise 对象，所以需要使用`then()`方法指定处理函数。考虑到代码的清晰，更推荐使用`await`命令。

### 适用场合

下面是`import()`的一些适用场合。

（1）按需加载。

`import()`可以在需要的时候，再加载某个模块。

（2）条件加载

`import()`可以放在`if`代码块，根据不同的情况，加载不同的模块。

（3）动态的模块路径

`import()`允许模块路径动态生成。