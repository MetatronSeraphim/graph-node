initSidebarItems({"struct":[["Array","Growable array backed by an `ArrayBuffer`. See https://www.assemblyscript.org/memory.html#array-layout"],["ArrayBuffer","Module related to AssemblyScript version >=v0.19.2. All `to_asc_bytes`/`from_asc_bytes` only consider the #data/content/payload not the #header, that’s handled on `AscPtr`. Header in question: https://www.assemblyscript.org/memory.html#common-header-layout Similar as JS ArrayBuffer, “a generic, fixed-length raw binary data buffer”. See https://www.assemblyscript.org/memory.html#arraybuffer-layout"],["AscString","Asc std string: “Strings are encoded as UTF-16LE in AssemblyScript” See https://www.assemblyscript.org/memory.html#string-layout"],["TypedArray","A typed, indexable view of an `ArrayBuffer` of Asc primitives. In Asc it’s an abstract class with subclasses for each primitive, for example `Uint8Array` is `TypedArray<u8>`. Also known as `ArrayBufferView`. See https://www.assemblyscript.org/memory.html#arraybufferview-layout"]]});