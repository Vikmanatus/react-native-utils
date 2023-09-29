#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(Utils, NSObject)

RCT_EXTERN_METHOD(multiply:(float)a withB:(float)b
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

RCT_EXTERN_METHOD(divide:(float)a withB:(float)b
                 withCallback:(RCTResponseSenderBlock)resolve)


@end
