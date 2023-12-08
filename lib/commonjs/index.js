"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiply = multiply;
var _reactNative = require("react-native");
const LINKING_ERROR = "The package 'react-native-javalib' doesn't seem to be linked. Make sure: \n\n" + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const Javalib = _reactNative.NativeModules.Javalib ? _reactNative.NativeModules.Javalib : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
async function multiply(ch) {
  return Javalib.multiply(ch);
}
//# sourceMappingURL=index.js.map