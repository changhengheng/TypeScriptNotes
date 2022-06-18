# 函数

函数可以赋值给变量……（待补充）

TS多数情况下无法推断出参数的类型，只在少数特殊情况下能根据上下文推导出来，因此应该显示注解。

返回值类型可以推导出来，不过也可以显示注解。

**声明函数的方式**

1. 具名函数
2. 函数表达式
3. 构造函数
4. 箭头函数
5. 箭头函数简写方式

**可选和默认参数**

代码规范：必要参数放在前面，可选参数放在后面，默认参数没有限制

```ts
function log(message: string = "法外狂徒张三", userId?: string): void {
    console.log(userId ? `你的ID是${userId}` : `你好啊，${message}`);
  }
log();
```

较之可选参数，更常使用默认参数

**剩余参数**

如果函数接收一组固定参数，方便起见可以使用一个数组传入：

```ts
function sum(numbers: number[]): number{
    return numbers.reduce((total,n)=> total+n,0)
}
sum([1,2,3,4]) // 10
```

如果参数数量不定（可变参数函数），可以使用剩余参数：

```ts
funciton sumVaria(...numbers: number[]): number{
    console.log(numbers)// 编译器基于你传入的参数创建的数组  (3) [1, 2, 3]
    return numbers.reduce((total,n)=> total+n,0)
}
sumVaria(1, 2, 3);// 10
// 注释：剩余参数的类型是一个纯number成员的数组，这个数组由你传入的参数组成，这个数组的名字是numbers，它由编译器创建，可以在函数体内使用。并不是说要你传入一个数组。
```

注意：一个函数只能有一个剩余参数

**调用签名**

不仅函数的参数和返回值可以进行类型注解，函数本身也可以进行类型注解。TS标识函数类型的句法叫做调用签名（也叫类型签名）。

一个典型的调用签名：

```ts
(numbers: number) => number // (参数: 参数类型) => 返回值类型
```

使用调用签名注解一个函数（以函数表达式的方式为例）：

```ts
let sumVaria1: (number: number) => void = function (
	...numbers: number[]
): void {
    console.log(numbers);
};
```

注意：

1. 调用签名没有定义函数的函数体，无法推导返回值类型，所以返回值类型必须显示注解
2. 调用签名质包含类型层面的代码（参数、this、返回值、剩余参数、可选参数），因此无法表示默认值（值层面代码）

**类型层面和值层面代码**

类型层面代码指只有类型和类型运算符的代码，除此之外都是值层面代码。

**函数类型重载**

简写的调用签名：

```ts
type Log = (message: string,userId?: string) => void
```

全写的调用签名：

```ts
type Log = {
    (message: string,userId?: string): void
}
```

一般情况下，推荐使用简写。函数重载时推荐使用全写。

**重载函数**指的是具有多个调用签名的函数。

TS支持动态（输出类型即返回值类型取决于输入类型，而且输入类型即形参类型不唯一）重载函数声明：

```ts
// 声明两个重载的函数声明
type Reserve = {
	(from: Date, to: Date, destination: string): Reservation 
	(from: Date, destination: string): Reservation 
}
// 
```

**泛型**

也称泛型参数，简称泛型。指在类型层面市价约束的占位类型，也称多态类型参数。

泛型（或泛型参数）类似于一个占位符，类型检查器将根据上下文（通过类型推断）填充同一泛型为具体的类型。

泛型以尖括号声明，可以类比type关键字理解。泛型也可以同时声明多个，在尖括号中以逗号分隔：

```ts
function sum1<N, S>(number1: N, string1: S, numberOrString1: N | S): void {
    console.log(numberOrString1, number1, string1);
}
sum1(1, "法外狂徒张三", 1);
sum1(1, "法外狂徒张三", "李四");
```

注意：

1. 泛型也可在类型别名、类和接口中使用
2. 只要可能就应该使用泛型，这样写出的代码更具一般性，可重复使用，而且简单扼要

**泛型别名**

类型别名中只有一个地方可以使用泛型，即紧随类型别名的名称之后、赋值运算符之前：

```ts
type MyEvent<T> = {
    target:T
    type:string
}
```

使用泛型进行注解：

```ts

```

