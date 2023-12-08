
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNJavalibSpec.h"

@interface Javalib : NSObject <NativeJavalibSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Javalib : NSObject <RCTBridgeModule>
#endif

@end
