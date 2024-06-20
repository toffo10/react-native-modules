package com.nativemodulesreact;

import android.os.Handler;
import android.os.Looper;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class EventModule extends ReactContextBaseJavaModule {

    EventModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void startEvent() {
        new Handler(Looper.getMainLooper()).postDelayed(new Runnable() {
            @Override
            public void run() {
                sendEvent();
            }
        }, 1500);
    }

    private void sendEvent() {
        WritableMap params = Arguments.createMap();
        params.putString("eventMessage", "Event from Android");

        getReactApplicationContext()
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("CustomEvent", params);
    }

    @NonNull
    @Override
    public String getName() {
        return "EventModule";
    }


    // Metodo richiamato quando qualche listener si connette
    private int listenerCount = 0;

    @ReactMethod
    public void addListener(String eventName) {
        Log.d("EventModule", "addedListener");
        if (listenerCount == 0) {
            // Set up any upstream listeners or background tasks as necessary
        }

        listenerCount += 1;
    }

    // Metodo richiamato quando l'event listener si disconnette
    @ReactMethod
    public void removeListeners(Integer count) {
        Log.d("EventModule", "removedListener");
        listenerCount -= count;
        if (listenerCount == 0) {
            // Remove upstream listeners, stop unnecessary background tasks
        }
    }
}
