//
//  RCTEventModule.h
//  NativeModulesReact
//
//  Created by Enrico Toffolatti on 12/06/24.
//

#import <React/RCTEventEmitter.h>
#import <React/RCTBridgeModule.h>
@interface RCTEventModule : RCTEventEmitter <RCTBridgeModule>
@end
