const { join } = require('path');

const config = (...path) => join(__dirname, '../', ...(path || []));
const root = (...path) => join(__dirname, '../../', ...(path || []));

module.exports = {
  preset: 'ts-jest',
  transform: {
    '\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: root('tsconfig.json'),
    },
  },
  runner: 'groups',
  rootDir: root('src'),
  testRegex: '.*(/tests/|/.*/tests/).*\\.test\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: [config('test/setupFiles.ts')],
  setupFilesAfterEnv: [config('test/setupFilesAfterEnv.ts')],
};
