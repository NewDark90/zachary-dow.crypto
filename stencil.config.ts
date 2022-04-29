import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { inlineSvg } from 'stencil-inline-svg';
import { terser } from "rollup-plugin-terser";

// https://stenciljs.com/docs/config

export const config: Config = {
    globalStyle: 'src/global/app.scss',
    globalScript: 'src/global/app.ts',
    taskQueue: 'async',
    hashFileNames: false,
    //sourceMap: true,
    outputTargets: [
        {
            type: 'www',
            // comment the following line to disable service workers in production
            serviceWorker: false,
            baseUrl: 'https://zachary-dow.crypto',
            buildDir: "build",
            prerenderConfig: './prerender.config.ts',
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
            //terser()
        ]
    },
    plugins: [
        sass(),
        inlineSvg()
    ]
};
