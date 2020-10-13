<!--
 * @Author: your name
 * @Date: 2020-10-03 02:25:22
 * @LastEditTime: 2020-10-06 01:29:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learning-summary/17读书笔记/TS.md
-->
# TypeScript

## 元组与数组
为什么需要元组？有了数组不就足够了？
* 数组
```js
let list: number[] = [1, 2]
```
* 元组
```js
let list: [number, number] = [1, 2]
```

## 联合类型

## 类型断言
类似于C#中的类型强制转换
```js
let str: any = '123456'
(str as string).length
```

## 接口
* 接口声明
* 可选属性 ?
* 只读属性 readonly
* 额外的类型检查（字符串索引签名）
* 函数类型
* 可索引类型
* 接口继承接口 extends
* 类实现接口 implements
* 接口继承类 extends

问题：
* 对值所具有的结构进行类型检查
* 判断何时使用readonly与const
  如果作为变量则使用const
  如果作为属性则使用readonly
* option bags模式是啥?
* 额外属性检查
  添加一个字符串索引签名
  对象赋值给另外一个变量（对于复制的对象字面量，如包含方法和内部状态）
* 与抽象类的区别
  相同：都是只包含方法签名不包含方法实现
  不同：抽象类必须在派生类中实现
```js
interface dto {
  code: number,
  success: boolean,
  info: any,
  data: any,
  optional?: any,
  readonly x: number
}
```

## 类
* 类声明
* 类继承
  类可以实现接口，implements
  类可以继承抽象类
  类可以继承类
* 公共，私有，保护
* readonly修饰符
* 参数属性
* 存储器
* 静态类型 static修饰符
* 抽象类

## 函数
* 函数类型
* 推断类型
* 可选参数
* 默认参数
* 剩余参数
* this问题
* 重载
问题：
* 如何处理副作用？
* 函数的参数个数是确定的，rest怎么办？

## 泛型 T
* 泛型声明
* 使用泛型变量（泛型函数）
* 泛型类型（泛型接口）
* 泛型类
* 泛型约束 T extends Other

问题：
* 泛型与any的不同

## 枚举 enum
* 枚举声明

## 类型推论
* 基础类型推论
* 通用类型推论（最差结果就是联合类型）
* 上下文类型

## 类型兼容性
结构类型与名义类型形成对比
如果x要兼容y，那么y至少具有与x相同的属性
* 接口 x|y，x=y，则x必须是y的子类型
* 类 x|y，x=y，则x必须是y的子类型
* 函数参数 funx|funy，funx=funy，则funx参数必须是funy参数的父类型
* 函数返回值 funx|funy，funx=funy，则funx返回值必须是funy返回值的子类型

## 高级类型
* 交叉类型 A & B & C
* 联合类型 A | B
  我们只能访问此联合类型的所有类型里共有的成员


## TS选项
* allowJS checkJs