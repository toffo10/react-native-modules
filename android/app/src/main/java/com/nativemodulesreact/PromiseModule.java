package com.nativemodulesreact;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class PromiseModule extends ReactContextBaseJavaModule {
    int counter = 0;
    PromiseModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "PromiseModule";
    }

    @ReactMethod
    public void createPromiseEvent(String name, String location, Promise promise) {
        try {
            Thread.sleep(4000);
            promise.resolve(counter++);
        } catch (Exception e) {
            promise.reject("Create Event Error", e);
        }
    }
}