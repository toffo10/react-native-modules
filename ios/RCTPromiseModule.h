//
//  RCTPromiseModule.h
//  NativeModulesReact
//
//  Created by MacBook-Enrico-Toffolatti on 12/06/24.
//
#define RCTPromiseModule_h
#import <React/RCTBridgeModule.h>
@interface RCTPromiseModule : NSObject <RCTBridgeModule>
-(int)createPromiseEvent;

@end
