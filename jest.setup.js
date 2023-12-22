import mockRNDeviceInfo from "react-native-device-info/jest/react-native-device-info-mock";

jest.mock("react-native-device-info", () => mockRNDeviceInfo);

// In your Jest setup file (e.g., setupTests.js)
jest.mock("react-native-network-logger", () => {
  // Mocking the necessary functionality for testing
  return {
    // Mock Logger module
    Logger: {
      enable: jest.fn(),
      disable: jest.fn(),
      clearLogs: jest.fn(),
      getLogs: jest.fn(),
    },
    // Mock NetworkRequestInfo module
    NetworkRequestInfo: {
      // Add any methods or properties you need for testing
    },
    // Mock any other modules or exports used by react-native-network-logger
    // For example, if it imports 'react-native' modules, you might mock them as well
  };
});
