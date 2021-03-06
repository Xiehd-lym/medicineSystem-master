const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack')
module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        proxy: {
            '/zwz': {
                target: 'http://127.0.0.1:8081',
                ws: true
            },
            '/foo': {
                target: '<other_url>'
            }
        },
        disableHostCheck: true
    },
    productionSourceMap: false,
    configureWebpack: {
        externals: {
            vue: 'Vue',
            'vue-i18n': 'VueI18n',
            axios: 'axios',
            'vue-router': 'VueRouter',
            vuex: 'Vuex',
            'view-design': 'iview',
            apexcharts: 'ApexCharts',
            'vue-apexcharts': 'VueApexCharts',
            xlsx: 'XLSX',
            dplayer: 'DPlayer',
            'print-js': 'printJS',
            html2canvas: 'html2canvas',
            'vue-json-pretty': 'VueJsonPretty',
            'vue-lazyload': 'VueLazyload',
            'js-cookie': 'Cookies',
            vuedraggable: 'vuedraggable',
            viewerjs: 'Viewer'
        },
        plugins: [
            new CompressionPlugin({
                test: /\.js$|\.html$|\.css/,
                threshold: 10240
            })
        ]
    }
}