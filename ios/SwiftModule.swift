//
//  SwiftFile.swift
//  NativeModulesReact
//
//  Created by MacBook-Enrico-Toffolatti on 18/06/24.
//

import Foundation
// CalendarManager.swift

@objc(SwiftModule)
class SwiftModule: NSObject {

  var counter = 0;
  
  @objc(swiftNativeMethod:resolver:rejecter:)
  func swiftNativeMethod(_ name: String, resolver resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock){
    counter = counter + 1;
    sleep(3);
    resolve(counter);
  }

 @objc
 func constantsToExport() -> [String: Any]! {
   return ["someKey": "someValue"]
 }

}
