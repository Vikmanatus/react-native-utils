import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-utils' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const Utils = NativeModules.Utils
  ? NativeModules.Utils
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

/**
 * Multiplies first number with second number
 * @param a - First number
 * @param b - Second number
 * @returns A promise containing the multiplication of `a` and `b`
 */
export function multiply(a: number, b: number): Promise<number> {
  return Utils.multiply(a, b);
}

/**
 * Divides first number with second number
 * @param a - First number
 * @param b - Second number
 * @returns A callback containing the multiplication of `a` and `b`
 */
export function divide(
  a: number,
  b: number,
  callback: (result: number) => void
): Promise<number> {
  return Utils.divide(a, b, (result: number) => {
    callback(result);
  });
}
