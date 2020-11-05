# Switch

目前的使用场景通常为用户设置中，如隐私设置

## H5的使用

组件中注册了`model`属性，因此在H5中可以直接使用`v-model` 进行数据绑定

::: demo
```html
<template>
  <div class="switch-demo">
    <brg-switch v-model="status"/><br/>
    <p>status:{{status}}</p>
  </div>
</template>
<script>
export default {
  data(){
      return {
          status:true
      }
  }
}
</script>
<style>
 
</style>
```
:::


## 小程序的使用

由于小程序中自定义`model`无法在内部进行`props`的数据处理,  可以使用下面两种方法进行数据绑定

> 使用`sync`修饰符

```html
<brg-switch :value.sync="status" />
```

> 监听事件切换status

```html
<brg-switch :value="status" @change="status = $event" />
```



::: tip

小程序的方法通用适用H5

:::

## Api

| 属性名  | 类型        | 默认值 | 说明         | 差异 |
| ------- | ----------- | ------ | ------------ | ---- |
| value   | Boolean     | false  | 开启关闭状态 |      |
| @change | EventHandle |        | 切换事件     |      |

