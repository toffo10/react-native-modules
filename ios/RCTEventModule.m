//
//  RCTEventModule.m
//  NativeModulesReact
//
//  Created by MacBook-Enrico-Toffolatti on 12/06/24.
//

#import "RCTEventModule.h"
#import <React/RCTLog.h>

@implementation RCTEventModule {
  bool hasListeners;
}

// Without passing in a name this will export the native module name as the Objective-C class name with “RCT” removed
RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents {
    return @[@"EventReminder"];
}

// Will be called when this module's first listener is added.
-(void)startObserving {
  hasListeners = YES;
  RCTLogInfo(@"New listener");
  // Set up any upstream listeners or background tasks as necessary
}

// Will be called when this module's last listener is removed, or on dealloc.
-(void)stopObserving {
  hasListeners = NO;
  RCTLogInfo(@"Listener removed");
  // Remove upstream listeners, stop unnecessary background tasks
}

RCT_EXPORT_METHOD(executeEvent:(NSString *)eventName)
{
  RCTLogInfo(@"Called executeEvent");
  if (hasListeners) {// Only send events if anyone is listening
    [self sendEventWithName:@"EventReminder" body:@{@"eventProperty": eventName}];
  }
}

@end
