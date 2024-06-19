//
//  SwiftModuleBridge.m
//  NativeModulesReact
//
//  Created by MacBook-Enrico-Toffolatti on 19/06/24.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(SwiftModule, NSObject)

RCT_EXTERN_METHOD(swiftNativeMethod:(NSString *)name resolver:(RCTPromiseResolveBlock *)resolve rejecter:(RCTPromiseRejectBlock *)rejecter)

@end
