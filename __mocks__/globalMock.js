export const mocks = {
  svg: () =>
    jest.mock('../src/components/ImageRender/Image.tsx', () => {
      return () => '';
    }),
  jestFakeTimer: () => jest.useFakeTimers(),
};
