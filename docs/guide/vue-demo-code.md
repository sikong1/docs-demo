---
hello: world
---

<script setup>
import { ref } from 'vue'

const count = ref(1)
</script>

# 测试Markdown内部使用vue代码
...
<div>count==<span :class="$style.demo">{{ count }}</span></div>

<button :class="$style.button" @click="count++">点击+1</button>

<style module>
.demo {
    color: red;
}

.button {
  font-weight: bold;
  background-color: #eee;
  padding: 0 10px;
}
</style>