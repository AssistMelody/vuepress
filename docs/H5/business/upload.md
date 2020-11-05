
# 上传图片

使用场景为提交寄卖、提交估价、申请退款

## **Usage**

由于此组件为卡片式上传，选中后展示选中图片，因此仅支持一次选中一张图片

```html
<brg-upload @selectChange="getFile" @delete="deleteFile" />
<script>
	export default {
    methods:{
      getFile(e){
        /**
        * {
        *  ptah: 小程序为：http://tmp/wx***.png、H5为：blob:http://10.254.1.180:8080/***
        *  size: 文件大小
        * }
        */
      }
    }
  }
</script>
```

::: tip

由于选中返回的信息仅有图片地址，小程序中可以直接使用`uploadFile`长传

但是H5上传还要获取实际的图片对象，可以构造一个简单的get请求来获取

:::

```javascript
var xhr = new XMLHttpRequest();
xhr.open("get", 'blob:http://10.254.1.180:8081/*****', true);
xhr.responseType = "blob";
xhr.onload = function() {
  if (xhr.status == 200) {
    // 拿到图片资源后再上传
    console.log(xhr.response)
  }
};
xhr.send();
```



## Api

| 属性名        | 类型         | 默认值 | 说明                 | 差异                                   |
| ------------- | ------------ | ------ | -------------------- | -------------------------------------- |
| img-url       | String       |        | 图片地址             |                                        |
| hold-img      | String       |        | 示意图地址           |                                        |
| required      | Boolean      | false  | 必填标记             |                                        |
| @selectChange | EventHandler |        | 参数为选中的文件信息 | 小程序为临时文件地址、H5为Blob资源地址 |
| @delete       | EventHandler |        | 删除事件             |                                        |

