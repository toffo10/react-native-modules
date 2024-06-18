#import <UIKit/UIKit.h>

#import "AppDelegate.h"
#import <React/RCTLog.h>

int main(int argc, char *argv[])
{
  @autoreleasepool {
    RCTLogInfo(@"App lanciata");
    return UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));
  }
}
