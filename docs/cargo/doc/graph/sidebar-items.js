initSidebarItems({"fn":[["block_on","Runs the future on the current thread. Panics if not within a tokio runtime."],["spawn","Aborts on panic."],["spawn_allow_panic",""],["spawn_blocking","Aborts on panic."],["spawn_blocking_allow_panic","Does not abort on panic, panics result in an `Err` in `JoinHandle`."],["spawn_thread","Spawns a thread with access to the tokio runtime. Panics if the thread cannot be spawned."]],"macro":[["constraint_violation",""],["ensure",""],["entity",""],["impl_slog_value",""],["object","Creates a `graphql_parser::query::Value::Object` from key/value pairs."]],"mod":[["blockchain","The `blockchain` module exports the necessary traits and data structures to integrate a blockchain into Graph Node. A blockchain is represented by an implementation of the `Blockchain` trait which is the centerpiece of this module."],["cheap_clone","`CheapClone` trait."],["components","Traits and types for all system components. The Graph network nodes are internally structured as a layers of reusable components with non-blocking communication, with each component having a corresponding trait defining it’s interface."],["data","Common data types used throughout The Graph."],["ext","Extension traits for external types."],["ipfs_client",""],["log","Logging utilities"],["mock","Module with mocks for different parts of the system."],["prelude","A prelude that makes all system component traits and data types available."],["runtime","Facilities for creating and reading objects on the memory of an AssemblyScript (Asc) WASM module. Objects are passed through the `asc_new` and `asc_get` methods of an `AscHeap` implementation. These methods take types that implement `To`/`FromAscObj` and are therefore convertible to/from an `AscType`."],["task_spawn","Wrapper for spawning tasks that abort on panic, which is our default. The functions in this module should be used to execute futures, serving as a facade to the underlying executor implementation which currently is tokio. This serves a few purposes:"],["util","Utilities."]]});