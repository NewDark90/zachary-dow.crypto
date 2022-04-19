import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { inlineSvg } from 'stencil-inline-svg';

// https://stenciljs.com/docs/config

export const config: Config = {
    globalStyle: 'src/global/app.scss',
    globalScript: 'src/global/app.ts',
    taskQueue: 'async',
    outputTargets: [
        {
            type: 'www',
            // comment the following line to disable service workers in production
            serviceWorker: null,
            baseUrl: 'https://zachary-dow.crypto',
            buildDir: "build",
            copy: [
                {
                    src: '../node_modules/cryptocurrency-icons/svg/color/**/*.svg',
                    dest: 'assets/cryptocurrency-icons/svg/color',
                },
            ]
        }
    ],
    rollupPlugins: {
        after: [
            nodePolyfills(),
        ]
    },
    plugins: [
        sass(),
        inlineSvg()
    ]
};
