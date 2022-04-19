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
            dir: "www",
            baseUrl: 'https://zachary-dow.crypto',
            serviceWorker: null,
            buildDir: "build",
            copy: [
                {
                    src: '../node_modules/cryptocurrency-icons/svg/color/**/*.svg',
                    dest: 'assets/cryptocurrency-icons/svg/color',
                },
            ]
        },
        {
            type: 'www',
            dir: "www-ipfs",
            baseUrl: 'https://zachary-dow.crypto',
            serviceWorker: false,
            buildDir: ".",
            copy: [
                {
                    src: '../node_modules/cryptocurrency-icons/svg/color/**/*.svg',
                    dest: '.',
                },
                {
                    src: '../www-ipfs/assets/**',
                    dest: ".",
                },
            ]
        },
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
