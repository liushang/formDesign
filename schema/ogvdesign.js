import { analysisRenderConfig, analysisDataRender } from './util';

export default {
    props: {
        constructure: {
            type: Object,
            default: () => {}
        }
        // registerConfig: {
        //     type: Array,
        //     default: () => [{
        //         name: 'aaa',
        //         path: './views/test-component/a.vue'
        //     }]
        // }
    },
    // template: `<div>${analysisConfig(this.configData)}</div>`,
    render: function (h, context) {
        let configData = analysisDataRender([ this.constructure ]);
        let configArr = analysisRenderConfig(configData, h);
        /* eslint-disable */
        return (
            configArr[0]
        );
    },
    // render: function (h) {
    //     return (
    //         <aaa level={1} onClick={console.log(1231)} >
    //             <span>Hello</span> world!
    //         </aaa>
    //     );
    // },
    data: function () {
        return {};
    },
    methods: {},
    mounted() {},
    components: {}
};