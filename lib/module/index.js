import { NativeModules, Platform } from 'react-native';
const LINKING_ERROR = "The package 'react-native-javalib' doesn't seem to be linked. Make sure: \n\n" + Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const Javalib = NativeModules.Javalib ? NativeModules.Javalib : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
export async function multiply(ch) {
  return Javalib.multiply(ch);
}
//# sourceMappingURL=index.js.map