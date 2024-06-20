//
//  SwiftFile.swift
//  NativeModulesReact
//
//  Created by Enrico Toffolatti on 18/06/24.
//

import Foundation
// CalendarManager.swift

@objc(SwiftModule)
class SwiftModule: RCTEventEmitter {

  @objc(swiftPromiseMethod:resolver:rejecter:)
  func swiftPromiseMethod(_ name: String, resolver resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock){
    sleep(1);
    resolve("Returned message from Swift");
  }
  
  @objc(swiftEventMethod:)
  func swiftEventMethod(_ name: String){
    sendEvent(withName: "SwiftEvent", body: ["eventMessage": "Event from Swift"])
  }

  override func supportedEvents() -> [String]! {
    return ["SwiftEvent"]
  }

  @objc(requiresMainQueueSetup)
  override static func requiresMainQueueSetup() -> Bool {
    return false
  }

}
