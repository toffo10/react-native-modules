//
//  RCTPromiseModule.m
//  NativeModulesReact
//
//  Created by MacBook-Enrico-Toffolatti on 12/06/24.
//

#import "RCTPromiseModule.h"
#import <React/RCTLog.h>

@implementation RCTPromiseModule {
  NSInteger counter;
}

// Without passing in a name this will export the native module name as the Objective-C class name with “RCT” removed
RCT_EXPORT_MODULE();

// To export a module named RCTCalendarModule
RCT_EXPORT_METHOD(createPromiseEvent:(NSString *)name location:(NSString *)location resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  RCTLogInfo(@"Received request");
  RCTLogInfo(@"Name %@, location %@", name, location);
  [NSThread sleepForTimeInterval:3];
  resolve(@(counter++));
  RCTLogInfo(@"Resolved");
}

@end
