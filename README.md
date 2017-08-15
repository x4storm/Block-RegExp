# Block-RegExp [中文说明](./README.cn.md)
Write RegExp in block code, allow space and comment etc. Inspired by coffeescript.

Sometimes, RegExp is hard to write and read. it has no clear struct, we can't comment in important point.

Now, you can write RegExp in JavaScript just like in CoffeeScript:
You can simply write RegExp with backquto, and add space made 含义清晰, also add comment in somewhere you think important with `#`

```javascript
let demoReg = `
  ^ https?  |   # begin with http or https
  ^ ://         # or begin with relative protocal
`
```


# Feature
- [x] allow space in anywhere
- [x] auto eascaping char
- [x] support single line comment
- [ ] support value interplotion
