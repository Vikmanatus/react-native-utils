@objc(Utils)
class Utils: NSObject {

  @objc(multiply:withB:withResolver:withRejecter:)
  func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    resolve(a*b)
  }
    
    @objc(divide:withB:withCallback:)
    func divide(a: Float, b:Float, callback: RCTResponseSenderBlock) -> Void {
        callback([a/b])
    }
}
