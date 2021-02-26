import { analysisRenderConfig, analysisDataRender } from './util';

export default {
    props: {
        constructure: {
            type: Object,
            default: () => {}
        }
    },
    render: function (h, context) {
        let configData = analysisDataRender([ this.constructure ]);
        let configArr = analysisRenderConfig(configData, h);
        if (configArr.length > 1) {
            return h(
                'div',
                null,
                configArr
            );
        } else {
            return configArr[0];
        }
    },
    data: function () {
        return {};
    },
    methods: {},
    mounted() {},
    components: {}
};