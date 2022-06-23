# 类

ES6 通过 class 关键字可以定义一个类，是一个语法糖。

class 的构成：

- constructor 构造方法，其中 this 指向其实例化对象

类通过 new 以构造函数的方式调用创建实例对象来使用。

类是一个函数，类本身指向其构造函数（类===其构造函数，完全相等，完全是同一个东西）。

类既然是一个函数，也就有 prototype 属性，类中直接定义的所有方法都定义在类的 prototype 属性上（公有方法），这些方法可以直接由其实例调用，因为实例的隐式原型就是其构造函数的显式原型（其实只有一个原型）。

原型对象的 constructor 属性指向类本身，也就是构造函数。（想那个双向链接的图）

### constructor 方法（定义公有属性）

`constructor()`方法是类（构造函数）的默认方法，通过`new`命令生成对象实例时，自动调用该方法。一个类必须有`constructor()`方法，如果没有显式定义，一个空的`constructor()`方法会被默认添加。

`constructor()`方法默认返回实例对象（即`this`）。

类必须使用`new`调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用`new`也可以执行。

### 类的实例

使用 new 生成类的实例。不用 new 直接以函数的方式调用类会报错。

实例的属性除非显式定义在其本身（即定义在`this`对象上），否则都是定义在原型上（即定义在`class`上，类相当于实例的原型）。

类的所有实例共享一个原型对象。

### 取值函数（getter）和存值函数（setter）

在“类”的内部可以使用`get`和`set`关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。

```js
class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return "getter";
  }
  set prop(value) {
    console.log("setter: " + value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop;
// 'getter'
```

存值函数和取值函数是设置在属性的 Descriptor 对象上的。

### 属性表达式

类的属性名，可以采用表达式。

### Class 表达式

与函数一样，类也可以使用表达式的形式定义。

```js
const MyClass = class Me {
  getClassName() {
    return Me.name;
  }
};
```

上面代码使用表达式定义了一个类。需要注意的是，这个类的名字是`Me`，但是`Me`只在 Class 的内部可用，指代当前类。在 Class 外部，这个类只能用`MyClass`引用。

如果类的内部没用到的话，可以省略`Me`，也就是可以写成下面的形式。

```javascript
const MyClass = class {
  /* ... */
};
```

**this 的指向**

类的方法内部如果含有`this`，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错。

## 静态方法

类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上`static`关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

注意，如果静态方法包含`this`关键字，这个`this`指的是类，而不是实例。

静态方法可以与非静态方法重名。

父类的静态方法，可以被子类继承。

```javascript
class Foo {
  static classMethod() {
    return "hello";
  }
}

class Bar extends Foo {}

Bar.classMethod(); // 'hello'
```

上面代码中，父类`Foo`有一个静态方法，子类`Bar`可以调用这个方法。

静态方法也是可以从`super`对象上调用的。

## 实例属性的新写法

实例属性除了定义在`constructor()`方法里面的`this`上面，也可以定义在类的最顶层。这时，不需要在实例属性前面加上`this`。

```javascript
class IncreasingCounter {
  _count = 0; // 实例属性
  get value() {
    console.log("Getting the current value!");
    return this._count;
  }
  increment() {
    this._count++;
  }
}
```

## 静态属性

静态属性指的是 Class 本身的属性，即`Class.propName`，而不是定义在实例对象（`this`）上的属性。

```javascript
class Foo {}

Foo.prop = 1;
Foo.prop; // 1
```

上面的写法为`Foo`类定义了一个静态属性`prop`。

目前，只有这种写法可行，因为 ES6 明确规定，Class 内部只有静态方法，没有静态属性。现在有一个[提案](https://github.com/tc39/proposal-class-fields)提供了类的静态属性，写法是在实例属性的前面，加上`static`关键字。

## 私有方法和私有属性

私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。

# class 的继承

Class 可以通过`extends`关键字实现继承，让子类继承父类的属性和方法。

```javascript
class Point {}

class ColorPoint extends Point {}
```

上面示例中，`Point`是父类，`ColorPoint`是子类，它通过`extends`关键字，继承了`Point`类的所有属性和方法。

```javascript
class Point {
  /* ... */
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + " " + super.toString(); // 调用父类的toString()
  }
}
```

上面示例中，`constructor()`方法和`toString()`方法内部，都出现了`super`关键字。`super`在这里表示父类的构造函数，用来新建一个父类的实例对象。

ES6 规定，子类必须在`constructor()`方法中调用`super()`，否则就会报错。这是因为子类自己的`this`对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，添加子类自己的实例属性和方法。如果不调用`super()`方法，子类就得不到自己的`this`对象。

ES6 的继承机制，则是先将父类的属性和方法，加到一个空的对象上面，然后再将该对象作为子类的实例，即“继承在前，实例在后”。这就是为什么 ES6 的继承必须先调用`super()`方法，因为这一步会生成一个继承父类的`this`对象，没有这一步就无法继承父类。

注意，这意味着新建子类实例时，父类的构造函数必定会先运行一次。

另一个需要注意的地方是，在子类的构造函数中，只有调用`super()`之后，才可以使用`this`关键字，否则会报错。这是因为子类实例的构建，必须先完成父类的继承，只有`super()`方法才能让子类实例继承父类。

如果子类没有定义`constructor()`方法，这个方法会默认添加，并且里面会调用`super()`。也就是说，不管有没有显式定义，任何一个子类都有`constructor()`方法。

除了私有属性，父类的所有属性和方法，都会被子类继承，其中包括静态方法。私有属性只能在定义它的 class 里面使用。

## super 关键字

`super`这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。

第一种情况，`super`作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次`super`函数。`super`内部的`this`指的是子类的实例，因此子类构造函数中的`super()`相当于`父类.prototype.constructor.call(this)`。

作为函数时，`super()`只能用在子类的构造函数之中，用在其他地方就会报错。

第二种情况，`super`作为对象时，在普通方法（非静态方法）中，指向父类的原型对象；在静态方法中，指向父类。这里需要注意，由于`super`指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过`super`调用的。如果属性定义在父类的原型对象上，`super`就可以取到。

ES6 规定，在子类普通方法中通过`super`调用父类的方法时，方法内部的`this`指向当前的子类实例。由于`this`指向子类实例，所以如果通过`super`对某个属性赋值，这时`super`就是`this`，赋值的属性会变成子类实例的属性。

如果`super`作为对象，用在静态方法之中，这时`super`将指向父类，而不是父类的原型对象。

另外，在子类的静态方法中通过`super`调用父类的方法时，方法内部的`this`指向当前的子类，而不是子类的实例。

使用`super`的时候，必须显式指定是作为函数、还是作为对象使用，否则会报错。

最后，由于对象总是继承其他对象的，所以可以在任意一个对象中，使用`super`关键字。

# 公有、私有、静态和特权

公有属性和公有方法：

- 给实例化对象创建的属性和方法被称作为公有属性和公有方法

私有属性和私有方法：

- 声明在构造函数里的属性和方法被称作为私有属性和私有方法

静态方法和静态属性：

- 把设置在构造函数上的属性和方法称作为静态属性和静态方法

特权方法：

- 直接设置给实例化对象的方法被称作为特权方法

## [#](https://www.outofeverything.cn/原生JS/JS高级/25.公有私有静态和特权.html#代码示例)代码示例

```html
<body>
  <script>
    function Car(color, speed) {
      //公有属性
      this.color = color;
      this.speed = speed;

      //私有属性
      var num = 0;
      //私有方法
      function fn() {}
      //特权方法
      this.win = function () {
        console.log("天窗");
      };
    }

    //公有方法
    Car.prototype.run = function () {
      console.log("走你~");
    };

    //静态属性
    Car.name = "宝马";
    //静态方法
    Car.do = function () {
      console.log("拉货");
    };
    var car1 = new Car("red", 200);
  </script>
</body>
```

## class 总结

class 中直接定义的方法（不加 static）是定义在了 class 的 prototype 属性上，因此实例可以调用，这是公有方法

class 中实例的属性可以通过 this 对象显式定义在实例上（在 constructor 中，this 指向实例对象），这是公有属性

- 实例属性有一种新写法，可以直接写在类的最顶层。这时，不需要在实例属性前面加上`this`。（公有属性）

使用 static 关键字定义的方法由 class 直接调用，实例不能调用，这是静态方法

- 静态方法中如果有 this，这个 this 指向类，而不是类的实例（因为它是由类调用的）

- 静态方法与非静态方法可以重名

- 父类的静态方法可以被子类继承，也就是说子类可以调用

- 静态方法也可以从 super 对象上调用（必须在子类的静态方法中，此时 super 的对象用法指向父类）

静态属性指的是 Class 本身的属性，即`Class.propName`，而不是定义在实例对象（`this`）上的属性。现在只有这种写法，但是有一个 static 的新提案

```javascript
// 老写法
class Foo {
  // ...
}
// 添加静态属性
Foo.prop = 1;

// 静态属性新写法
class Foo {
  static prop = 1;
}
```

私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。这是常见需求，有利于代码的封装，但 ES6 不提供，只能通过变通方法模拟实现。

目前，有一个[提案](https://github.com/tc39/proposal-private-methods)，为`class`加了私有属性。方法是在属性名之前，使用`#`表示。私有属性，只能在类的内部使用。在类的外部，读取私有属性，就会报错。这种写法不仅可以写私有属性，还可以用来写私有方法。

## super 中 this 的隐式转换

> 第二种情况，super 作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。

> ES6 规定，在子类普通方法中通过 super 调用父类的方法时，方法内部的 this 指向当前的子类实例。

这两句话连在一起，不矛盾！意思就是：

意思是：

> 在子类普通方法中通过 super 调用父类的方法时

`super`指向父类的原型对象，但是父类的方法中的`this`指向当前的子类实例。

```ini
super.x = 3;
```

这里`super`指向父类的原型对象，没错！

但是底层并不是直接执行

```elm
A.prototype.x = 3
```

而是转换了底层的`this`,最终效果类似于：

```abnf
this = 3
```

代码验证：

```scala
class A {
  constructor() {
    this.x = 1
  }
}

class B extends A {
  constructor() {
    super()
    this.x = 2
    Object.defineProperty(A.prototype, 'x', {
      set: function(val) {
        console.log(this, val)
         //B {x: 2} 3,证明对super的赋值最终作用到了B {x: 2}身上，也就是新生成的实例，this
      }
    })
    super.x = 3
    console.log(this.x) // 3
  }
}

let b = new B()
```

你再看看阮老师举的函数调用的例子，这个例子就更清楚了，因为函数可以用 `call`

![clipboard.png](https://segmentfault.com/img/bV8KnT?w=601&h=495)

代码：

```scala
class A {
  constructor() {
    this.x = 1
  }
  print() {
    console.log(this.x)
  }
}

class B extends A {
  constructor() {
    super()
    this.x = 2
  }
  m() {
    // super.print()//上下两句等价的，所以上面这句隐含转换了this
    super.print.call(this)
  }
}

let b = new B()
b.m() // 2
super.print()` 等价于`super.print.call(this)`，因为底层隐含转换了`this
```

所以，最终有了下面的解释：

> 由于 this 指向子类实例，所以如果通过 super 对某个属性赋值，这时 super 就是 this（因为底层把 super 转换成了 this），赋值的属性会变成子类实例的属性。

## Class 的继承总结

- Class 通过`extends`关键字实现继承，让子类继承父类的属性和方法。

- `super`这个关键字，既可以当作函数使用，也可以当作对象使用。

  - `super`作为函数调用时，代表父类的构造函数。
  - 子类的构造函数必须执行一次`super`函数。因为 ES6 的继承机制，是先将父类的属性和方法，加到一个空的对象上面，然后再将该对象作为子类的实例，即“继承在前，实例在后”。因为子类自己的`this`对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，添加子类自己的实例属性和方法。如果不调用`super()`方法，子类就得不到自己的`this`对象。这就是为什么 ES6 的继承必须先调用`super()`方法，因为这一步会生成一个继承父类的`this`对象，没有这一步就无法继承父类。注意，这意味着新建子类实例时，父类的构造函数必定会先运行一次。

  - 在子类的构造函数 constructor 中，只有调用`super()`之后，才可以使用`this`关键字，否则会报错。这是因为子类实例的构建，必须先完成父类的继承，而只有`super()`方法才能让子类实例继承父类。此时，`super`虽然代表了父类`A`的构造函数，但是返回的是子类`B`的实例，即`super`内部的`this`指的是`B`的实例。这一步通常用来基于父类构造函数的数据更新子类继承的数据，因为 this 指向子类的实例，所以使用这种方式只需传入数据，而不用重写一遍父类构造函数的代码。
  - 如果子类没有定义`constructor()`方法，这个方法会默认添加，并且里面会调用`super()`。也就是说，不管有没有显式定义，任何一个子类都有`constructor()`方法。
  - 有了子类的定义，就可以生成子类的实例了。
  - 除了私有属性，父类的所有属性和方法，都会被子类继承，其中包括静态方法，子类继承的静态方法也是由子类本身调用的，实例不能使用。
  - 作为函数时，`super()`只能用在子类的构造函数之中，用在其他地方就会报错。

- 第二种情况，`super`作为对象时：

  - 在普通方法中，指向父类的原型对象。
    - 由于`super`指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过`super`调用的。如果属性定义在父类的原型对象上，`super`就可以取到。
    - ES6 规定，在子类普通方法中通过`super`调用父类的方法时，方法内部的`this`指向当前的子类实例。由于`this`指向子类实例，所以如果通过`super`对某个属性赋值，这时`super`就是`this`，赋值的属性会变成子类实例的属性。（隐式转换了 this）
  - 如果`super`作为对象，用在静态方法之中，这时`super`将指向父类。
    - 在子类的静态方法中通过`super`调用父类的方法时，方法内部的`this`指向当前的子类，而不是子类的实例。

- 使用`super`的时候，必须显式指定是作为函数、还是作为对象使用，否则会报错（不能直接打印 super，因为没有指定类型）。

  - 最后，由于对象总是继承其他对象的，所以可以在任意一个对象中，使用`super`关键字。
