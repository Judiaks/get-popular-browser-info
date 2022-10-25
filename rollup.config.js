import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript'
import pkg from './package.json'

const buildDictPath = (exportType) => 'dist/get-popular-browser-info.' + exportType + '.js'

export default [
    // UMD for browser-friendly build
    {
        input: 'src/index.ts',
        output: {
            name: 'get-popular-browser-info',
            file: buildDictPath('umd'),
            format: 'umd'
        },
        plugins: [
            resolve(),
            commonjs(),
            typescript()
        ]
    },
    // CommonJS for Node and ES module for bundlers build
    {
        input: 'src/index.ts',
        external: ['ms'],
        plugins: [
            typescript()
        ],
        output: [
            {file: buildDictPath('cjs'), format: 'cjs'},
            {file: buildDictPath('esm'), format: 'es'},
            {file: pkg.main, format: 'es'},
        ]
    }
]

