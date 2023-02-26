<template>
    <page-layout>
        <template v-slot:default>
            <section class="content__section">
                <div class="section section__top">
                    <div class="weather__actions">
                        <div class="weather__current-location">
                            <font-awesome-icon icon="fa-solid fa-location-dot" />
                            <p>{{ currentLocation }}</p>
                        </div>
                        <div class="weather__reload">
                            <font-awesome-icon icon="fa-solid fa-arrows-rotate" />
                        </div>
                    </div>
                </div>
                <div class="section section__bottom">
                    <h2>Weather Page Bottom</h2>
                </div>
            </section>
        </template>
    </page-layout>
</template>

<script>
import PageLayout from "./PageLayout.vue"
export default {
    components: {
        'page-layout': PageLayout
    },
    data() {
        return {
            currentTemperate: '32',
            currentLocation: 'Managua'
        }
    }
}
</script>

<style scoped>
.content__section {
    border: 1px solid blue;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.section {
    flex: 1;
}

.section__top {
    background-color: #5d9be5;
}

.section__bottom {
    border: 1px solid red;
    background-color: #fff;
    overflow: hidden;
}

.weather__actions,
.weather__current-location {
    display: flex;
    align-items: center;
}

.weather__actions {
    justify-content: space-between;
    padding: 16px 24px;
}

.weather__current-location {

    gap: 8px;
}

@media screen and (max-width: 1024px) {
    .section__bottom {
        border-top-right-radius: 16px;
        border-top-left-radius: 16px;
    }
}
</style>