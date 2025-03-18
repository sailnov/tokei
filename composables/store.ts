import { format } from 'date-fns'

type WeatherData = {
    // 発表省庁
    publishingOffice: string
    // 発表日時
    reportDatetime: string
    weathers: {
        today: WeatherCode
        tomorrow: WeatherCode
        dayAfterTomorrow: WeatherCode
    }
    // 降水確率
    precipitationProbability: {
        today: {
            q1: number
            q2: number
            q3: number
            q4: number
        }
        tomorrow: {
            q1: number
            q2: number
            q3: number
            q4: number
        }
    }
    // 気温
    temperature: {
        today: {
            min: number
            max: number
        }
        tomorrow: {
            min: number
            max: number
        }
    }
}

export const useStore = defineStore('tokeiSettings', {
    state: () => {
        return {
            // 気象庁JSONで使用する予報区コード デフォルトは東京都
            _areaCode: '130000' as AreaCode,
            // 天気予報データ
            _weatherData: null as WeatherData | null,
        }
    },
    persist: [
        {
            storage: piniaPluginPersistedstate.localStorage(),
            pick: ['_areaCode'],
        },
    ],
    getters: {
        areaCode: state => state._areaCode,
        weatherData: state => state._weatherData,
    },
    actions: {
        async fetchWeatherData(areaCode: AreaCode) {
            // 気象庁APIから天気予報データを取得する
            const TARGET_URL = `https://www.jma.go.jp/bosai/forecast/data/forecast/${areaCode}.json`
            const response = await fetch(TARGET_URL)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            // TODO
        },
        setAreaCode(areaCode: AreaCode) {
            this.fetchWeatherData(areaCode).then(() => {
                this._areaCode = areaCode
            })
        },
        setWeatherData(weatherData: WeatherData) {
            this._weatherData = weatherData
        },
    },
})
