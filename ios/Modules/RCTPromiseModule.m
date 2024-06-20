//
//  RCTPromiseModule.m
//  NativeModulesReact
//
//  Created by Enrico Toffolatti on 12/06/24.
//

#import "RCTPromiseModule.h"
#import <React/RCTLog.h>

@implementation RCTPromiseModule

// Without passing in a name this will export the native module name as the Objective-C class name with “RCT” removed
RCT_EXPORT_MODULE();

// To export a module named RCTCalendarModule
RCT_EXPORT_METHOD(startPromise:(NSString *)name resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  RCTLogInfo(@"Param1");
  [NSThread sleepForTimeInterval:2];
  resolve(@"Returned message from iOS");
}

@end
