import nodeResolve from '@rollup/plugin-node-resolve'

export default [
  {
    input: ['src/component.js'],
    output: {
      format: 'es',
      dir: 'www'
    },
    plugins: [
      nodeResolve({ browser: true, mainFields: ['browser', 'module'] }),
    ]
  }
]
