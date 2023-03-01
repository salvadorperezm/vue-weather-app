<template>
    <div class="layout">
        <div class="content">
            <slot></slot>
        </div>
        <the-footer />
    </div>
</template>

<script>
import TheFooter from "./TheFooter.vue"

export default {
    components: {
        'the-footer': TheFooter
    }
}
</script>

<style scoped>
.layout {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
}
</style>