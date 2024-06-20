package com.nativemodulesreact;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class PromiseModule extends ReactContextBaseJavaModule {
    PromiseModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "PromiseModule";
    }

    @ReactMethod
    public void startPromise(String param1, Promise promise) {
        try {
            Log.d("PromiseModule", String.format("Param1 value: %s", param1));
            Thread.sleep(1500);
            promise.resolve("Returned message from Android");
        } catch (Exception e) {
            promise.reject("Create Event Error", e);
        }
    }
}