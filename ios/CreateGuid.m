#import "CreateGuid.h"

static NSString *errorDomain = @"CreateGuid";

@implementation CreateGuid

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(createGuid:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
    NSString *UUID = [[NSUUID UUID] UUIDString];
    if (UUID) {
        resolve(UUID);
    } else {
        NSError *error = [[NSError alloc] initWithDomain:errorDomain code:1 userInfo:@{ NSLocalizedDescriptionKey:@"Guid could not be created!" }];
        reject(nil, nil, error);
    }
}

@end
