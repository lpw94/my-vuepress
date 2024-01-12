---
title: es6  Map对象
date: 2024-01-11 14:30:52
permalink: /pages/379b41/
categories:
  - blog
tags:
  - 
---

## es6  Map对象

```
// 定义一个Map对象
let map = new Map();

// 添加元素到Map对象中
map.set("key1", "value1");
map.set("key2", "value2");

// 获取Map对象的大小
let size = map.size;
console.log("Map对象的大小为：" + size);

// 判断Map对象是否包含指定的key
let containsKey = map.has("key1");
console.log("Map对象是否包含key1：" + containsKey);

// 获取指定key的值
let value = map.get("key1");
console.log("key1对应的值为：" + value);

// 删除指定key的元素
map.delete("key1");

// 清空Map对象
map.clear();

// 判断Map对象是否为空
let isEmpty = map.size === 0;
console.log("Map对象是否为空：" + isEmpty);

```
以上是map 对象实例