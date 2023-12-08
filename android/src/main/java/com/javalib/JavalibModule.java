package com.javalib;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import android.util.Log;
import com.example.libkmm.DeviceInfo;

@ReactModule(name = JavalibModule.NAME)
public class JavalibModule extends ReactContextBaseJavaModule {
  public static final String NAME = "Javalib";

  public JavalibModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }


  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  public void multiply(String ch, Promise promise) {
    DeviceInfo deviceInfo = new DeviceInfo();
    String result = ch + deviceInfo.getDeviceInfo();
    Log.w("ConcatenatedString", result);
    promise.resolve(result);
  }
}
