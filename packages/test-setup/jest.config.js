module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^jose/(.*)$': '<rootDir>/node_modules/@windingtree/org.id-auth/node_modules/jose/dist/node/cjs/$1',
  },
};
