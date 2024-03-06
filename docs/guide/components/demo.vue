<template>
    <div>
        count==<span class="demo">{{ count }}</span>
        <br />
        <br />
        <button @click="addCount">点击+1</button>
    </div>
</template>

<script>
export default {
    name: 'demo-vue',
    data() {
        return {
            count: 1
        }
    },
    methods: {
        addCount() {
            this.count++;
        }
    }
}
</script>

<style scoped>
.demo {
    color: red;
}

button {
    background-color: #eee;
    padding: 0 10px;
    font-weight: bold;
}
</style>
