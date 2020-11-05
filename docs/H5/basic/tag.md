
# Tag

使用场景为商品，用户等各个地方，各种样式类的标签

## Usage

::: demo
```html
<template>
  <div class="tag-demo">
    <brg-tag class="tag" :tag-type="'brand'" :tag-text="'Channel'" :size="'middle'" />
    <brg-tag class="tag" :tag-type="'brand'" :tag-text="'Channel'" />
  </div>
  <div class="tag-demo">
    <brg-tag class="tag" :tag-type="'market'" :tag-text="'满200减20'" :size="'middle'" />
    <brg-tag class="tag" :tag-type="'market'" :tag-text="'满200减20'" />
  </div>
  <div class="tag-demo">
    <brg-tag class="tag" :tag-type="'user'" :tag-text="'时尚博主'" :size="'middle'" />
    <brg-tag class="tag" :tag-type="'user'" :tag-text="'时尚博主'" />
  </div>
  <div class="tag-demo">
    <brg-tag class="tag" :tag-type="'size'" :tag-text="'44½'" :size="'middle'" />
    <brg-tag class="tag" :tag-type="'size'" :tag-text="'44½'" />
  </div>
  <div class="tag-demo">
    <brg-tag class="tag" :tag-type="'quality'" :tag-text="'9.9新'" :size="'middle'" />
    <brg-tag class="tag" :tag-type="'quality'" :tag-text="'9.9新'" />
  </div>
  <div class="tag-demo">
    <brg-tag class="tag" :tag-type="'reduce'" :tag-text="'直降200元'" :size="'middle'" />
    <brg-tag class="tag" :tag-type="'reduce'" :tag-text="'直降'" />
  </div>
  <div class="tag-demo">
    <brg-tag class="tag" :tag-type="'store'" :tag-text="'国内仓'" :size="'middle'" />
    <brg-tag class="tag" :tag-type="'store'" :tag-text="'国内仓'" />
  </div>
  <div class="tag-demo">
    <brg-tag class="tag" :tag-type="'source'" :tag-text="'海外直邮'" :size="'middle'" />
    <brg-tag class="tag" :tag-type="'source'" :tag-text="'海外直邮'" />
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  .tag-demo{
    display:flex;
    margin-bottom:10px;
  }
  .tag{
    margin-right: 8px;
  }
</style>
```
:::

## Api

| 属性名   | 类型   | 默认值 | 说明                           | 差异 |
| -------- | ------ | ------ | ------------------------------ | ---- |
| tag-type | String |        | 标签类型                       |      |
| tag-text | String |        | 标签文案                       |      |
| size     | String | small  | 标签尺寸 `small`、`middle` |      |

## TagType

| 类型名  | 说明       |
| ------- | ---------- |
| brand   | 品牌标签   |
| user    | 用户标签   |
| coupon  | 优惠券标签 |
| market  | 活动标签   |
| size    | 尺寸       |
| quality | 成色       |
| reduce  | 直降       |
| store   | 库存仓位   |
| source  | 商品来源   |



