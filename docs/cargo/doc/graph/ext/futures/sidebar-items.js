initSidebarItems({"enum":[["CancelableError",""]],"struct":[["CancelGuard","Cancels any guarded futures and streams when dropped."],["CancelHandle","A shared handle to a guard, used to add more cancelables. The handle may outlive the guard, if `cancelable` is called with a handle to a dropped guard, then the future or stream it is immediately canceled."],["Cancelable","A cancelable stream or future."],["Canceled",""],["DummyCancelGuard","An implementor of `Canceler` that never cancels, making `cancelable` a noop."],["NeverCancel",""],["SharedCancelGuard","A cancelation guard that can be canceled through a shared reference such as an `Arc`."]],"trait":[["CancelToken",""],["Canceler","A `CancelGuard` or `SharedCancelGuard`."],["FutureExtension",""],["StreamExtension",""]]});