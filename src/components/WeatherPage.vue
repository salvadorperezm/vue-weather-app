<template>
    <page-layout>
        <template v-slot:default>
            <section class="content__section">
                <div class="section section__top-container">
                    <div class="section__top">
                        <div class="weather__actions">
                            <div class="weather__current-location">
                                <font-awesome-icon icon="fa-solid fa-location-dot" class="current-location__icon" />
                                <p class="current-location__text">{{ currentLocation }}</p>
                            </div>
                            <font-awesome-icon icon="fa-solid fa-arrows-rotate" class="weather__reload" />
                        </div>
                        <div class="weather__information">
                            <div class="information__text">
                                <h1 class="information__current-temperature">{{ currentTemperature }}&#176;C</h1>
                                <p class="information__feels-like">Feels like {{ currentFeelsLike }}&#176;C</p>
                                <p class="information__weather-type">{{ currentWeatherType }}</p>
                            </div>
                            <img src="../assets/dummy-weather.svg" alt="Dummy Weather" class="information__icon">
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
            currentTemperature: '32',
            currentLocation: 'Managua',
            currentFeelsLike: '32',
            currentWeatherType: 'Scattered clouds'
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

.section__top-container {
    background-color: #5d9be5;
    display: flex;
    justify-content: center;
}

.section__top {
    flex: 1;
    max-width: 1200px;
    height: 100%;
    color: #ffffff;
    display: flex;
    flex-direction: column;
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
    padding: 8px;
}

.current-location__icon {
    width: 21px;
}


.weather__reload {
    padding: 8px;
}

.weather__information {
    justify-self: center;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 32px 32px;
}

.information__current-temperature {
    font-size: 64px;
    font-weight: 400;
    margin-block-end: 16px;
}



.information__feels-like {
    margin-block-end: 8px;
}

.information__icon {
    width: 192px;
}

@media screen and (max-width: 1024px) {
    .section__bottom {
        border-top-right-radius: 16px;
        border-top-left-radius: 16px;
    }

    .current-location__text {
        font-size: 14px;
    }

    .information__feels-like,
    .information__weather-type {
        font-size: 12.25px;
    }

    .information__icon {
        width: 96px;
    }
}
</style>