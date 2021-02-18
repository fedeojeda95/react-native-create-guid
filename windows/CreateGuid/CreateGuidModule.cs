using Microsoft.ReactNative.Managed;
using System;

namespace CreateGuid
{
    [ReactModule("CreateGuid")]
    public sealed class CreateGuidModule
    {
        [ReactMethod("createGuid")]
        public string CreateGuid()
        {
            return Guid.NewGuid().ToString();
        }
    }
}
