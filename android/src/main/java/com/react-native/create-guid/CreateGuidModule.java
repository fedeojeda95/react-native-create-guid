package com.reactnative.createguid;

import java.util.UUID;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class CreateGuidModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public CreateGuidModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "CreateGuid";
    }

    @ReactMethod
    public void createGuid(Promise promise) {
        UUID uuid = UUID.randomUUID();
        String uuidInString = uuid.toString();
        promise.resolve(uuidInString);
    }
}
