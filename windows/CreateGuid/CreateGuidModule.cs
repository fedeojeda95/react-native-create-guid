using Microsoft.ReactNative.Managed;
using System;

namespace CreateGuid
{
    [ReactModule("CreateGuid")]
    class CreateGuidModule
    {
        [ReactMethod("createGuid")]
        public void CreateGuid(ReactPromise<JSValue> promise)
        {
            promise.Resolve(Guid.NewGuid().ToString());
        }
    }
}
