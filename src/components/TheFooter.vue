<template>
    <footer class="footer">
        <nav class="nav">
            <div class="icon" v-for="link in links" :key="link.name">
                <font-awesome-icon :icon="link.icon" class="icon__image" />
                <small class="icon__title">{{ link.name }}</small>
            </div>
        </nav>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    name: 'Weather',
                    icon: 'fa-solid fa-sun'

                },
                {
                    name: 'Forecast',
                    icon: 'fa-solid fa-temperature-half'
                },
                {
                    name: 'Settings',
                    icon: 'fa-solid fa-sliders'
                }
            ]
        }
    }
}
</script>

<style scoped>
.footer {
    border-block-start: 1px solid #ededed;
    padding-block: 8px;
}

.nav {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    gap: 16px;
}

.icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-block: 12px;
}

.icon:hover {
    border-radius: 5px;
    background-color: #eeeeee;
    cursor: pointer;

}

.icon__image {
    margin-block-end: 10px;
}

.icon__title {
    color: #353539;
    font-size: 14px;
}
</style>