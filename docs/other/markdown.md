# Markdown 扩展 {#markdown-extensions}



::: danger 注意，注意，注意
VitePress 带有内置的 Markdown 扩展。当前文档对应的是官方 [1.0.0-rc.40](https://vitepress.dev/zh/guide/markdown) 版。

考虑到很多项目在开发时，时常遇到网络限制情况，导致网站无法访问，所以配置了一个本地访问的入口，大家根据项目实际情况及时更新[官方文档](https://github.com/vuejs/vitepress/edit/main/docs/zh/guide/markdown.md)。
:::



## 标题锚点 {#header-anchors}

标题会自动应用锚点。可以使用 `markdown.anchor` 选项配置锚点的渲染。

### 自定义锚点 {#custom-anchors}

要为标题指定自定义锚点而不是使用自动生成的锚点，请向标题添加后缀：

```
# 使用自定义锚点 {#my-anchor}
```

。。。