initSidebarItems({"constant":[["FAKE_NETWORK_SHARED",""],["STRING_PREFIX_SIZE","The size of string prefixes that we index. This is chosen so that we will index strings that people will do string comparisons like `=` or `!=` on; if text longer than this is stored in a String attribute it is highly unlikely that they will be used for exact string operations. This also makes sure that we do not put strings into a BTree index that’s bigger than Postgres’ limit on such strings which is about 2k"]],"enum":[["ColumnType","This is almost the same as graph::data::store::ValueType, but without ID and List; with this type, we only care about scalar types that directly correspond to Postgres scalar types"]],"fn":[["make_dummy_site","This is only used for tests to allow them to create a `Site` that does not originate in the database"],["set_account_like",""]],"mod":[["chain_support","Support for tests"]],"struct":[["BlockRange","The range of blocks for which an entity is valid. We need this struct to bind ranges into Diesel queries."],["BlockRangeContainsClause","Generate the clause that checks whether `block` is in the block range of an entity"],["Catalog","Information about what tables and columns we have in the database"],["Column",""],["Connection","A wrapper for a database connection that provides access to functionality that works only on the primary database"],["EVENT_TAP",""],["EVENT_TAP_ENABLED","Tests set this to true so that `send_store_event` will store a copy of each event sent in `EVENT_TAP`"],["EnumType","A user-defined enum"],["Layout",""],["LayoutCache","Cache layouts for some time and refresh them when they expire. Refreshing happens one at a time, and the cache makes sure we minimize blocking while a refresh happens, favoring using an expired layout over a refreshed one."],["Namespace","A namespace (schema) in the database"],["SqlName","A string we use as a SQL name for a table or column. The important thing is that SQL names are snake cased. Using this type makes it easier to spot cases where we use a GraphQL name like ‘bigThing’ when we should really use the SQL version ‘big_thing’"],["Table",""]]});