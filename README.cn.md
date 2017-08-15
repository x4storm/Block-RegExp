# Block-RegExp (正则表达式块级语法) [English](./README.md)
在块级字符串中书写正则表达式，允许使用任意数量的空格，支持注释、插值、自定义代换等特性。受 CoffeeScript 的 Block Regular Expressions 启发而创建。

某些情况下，正则表达式是既难以编写又不利于阅读的。因为它结构紧凑，无法轻易划分出各重要组成部分，并且无法在关键得地方插入注释。

现在，你可以像在 CoffeeScript 中写正则表达式一样了：  
你可以将正则表达式放置在多行字符串中，添加任意的空白使结构更加优雅清晰，支持以 `#` 开头的单行注释。

```javascript
let demoReg = `# flags = img
  ^ https?  |   # begin with http or https
  ^ ://         # or begin with relative protocal
`
```

# 特性
- [x] 允许任意的空白
- [x] 自动转义
- [x] 支持单行注释和魔术注释
- [ ] 支持插值
- [ ] 支持自定义代换
