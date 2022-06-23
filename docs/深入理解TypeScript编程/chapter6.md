## 对象进阶
映射类型

## 对象类型操作符（只适用于对象类型）

## 键入类型

键入类型用于在某个类型结构中查找某个具体的键，获取该键对应的类型。

获得的类型可以配合type声明为一个单独的新类型进行注解，也可以用来实现嵌套式的声明。

```ts
type APIResponse = {
  user: {
    userId: string
    friendList: {
      count: number
      friends: {
        firstName: string
        lastName: string
      }[]
    }
  }
}
// 键入类型的语法
type FriendList = APIResponse['user']['friendList']// 获取了friendList的类型，然后声明成了单独的FriendList类型

// 使用生成的新类型注解
function renderFriendList(friendList: FriendList) {
  // ...
}
```

任何结构（对象、类构造方法或类的实例）和数组都可以键入。

通过加入查找属性的类型时，只能使用方括号运算符，不能使用点运算符。

## keyof运算符

keyof运算符获取对象类型的所有键，生成一个字符串字面量类型的并集。

**注意**：该操作符只适用于对象类型，且返回值是字符串类型的。

### 键入运算符和keyof运算符

结合使用这两种对象类型运算符可以实现对类型安全的读值函数，读取对象中指定键的值。它们的优势是可以准确、安全地描述结构类型。

注意：

## Record类型

Record类型是TS内置的类型

`Record<Keys, Type>`用于构造一个映射的对象类型。其属性键为`Keys`，用来约束映射中对象的键的类型（单独的值也可以是一种类型）；其属性值为`Type`，用来约束映射中对象的值的类型。可用于将一种类型（联合类型、接口等等均可）的属性映射到另一种类型（即新的映射的对象类型）。

例子：

```ts
// 定义一个CatInfo接口
interface CatInfo {
  age: number;
  breed: string;
}
// 定义一个CatName类型
type CatName = "miffy" | "boris" | "mordred";
 
// 使用Record类型构造一个新类型，这个类型的键为CatName，值为CatInfo
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
 
cats.boris;
```

## 映射类型

和索引签名一样，一个对象最多可以有一个映射类型。

映射类型用于在对象的键和值的类型之间建立映射（即对象的键和值应该分别对应什么类型，不对应就报错）。

映射类型建立在索引签名的语法之上，用于声明未提前声明的属性的类型。

映射类型是一种通用类型，通常配合`in`和`keyof`操作符实现遍历键的操做来创建类型：

```ts
type OptionsFlags<Type> = { // 声明一个泛型Type
  // 索引签名，所有的property对应的值都被限定为boolean类型
  [Property in keyof Type]: boolean; // keyof将获取Type类型的所有的键，然后形成一个并集，in操作符会遍历匹配其中的Property属性
};

// 声明一个类型，将用于对键进行约束
type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

// 使用通过泛型注解的映射类型OptionsFlags通过FeatureFlags对键进行约束，生成新的FeatureOptions类型
type FeatureOptions = OptionsFlags<FeatureFlags>;
```



### in操作符

https://www.typescriptlang.org/docs/handbook/release-notes/overview.html?

对于`n in x`表达式，其中 `n` 是字符串字面量或字符串字面量类型， `x` 是联合类型。返回布尔值。

### 映射修饰符

### 一些内置的映射类型

**Record<Keys, Values>**
An object with keys of type Keys and values of type Values
**Partial<Object>**
Marks every field in Object as optional
**Required<Object>**
Marks every field in Object as nonoptional
**Readonly<Object>**
Marks every field in Object as read-only
**Pick<Object, Keys>**
Returns a subtype of Object, with just the given Keys