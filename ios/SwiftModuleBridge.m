//
//  SwiftModuleBridge.m
//  NativeModulesReact
//
//  Created by Enrico Toffolatti on 19/06/24.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(SwiftModule, NSObject)

RCT_EXTERN_METHOD(swiftPromiseMethod:(NSString *)name resolver:(RCTPromiseResolveBlock *)resolve rejecter:(RCTPromiseRejectBlock *)rejecter)

RCT_EXTERN_METHOD(swiftEventMethod:(NSString *)name)

@end
