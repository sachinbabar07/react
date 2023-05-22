export default {
    setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: [
        'node_modules',
        './test/unit/setupTests.js'
    ],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/ts-jest',
    },
}