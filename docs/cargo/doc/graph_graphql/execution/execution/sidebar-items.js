initSidebarItems({"fn":[["cache_key",""],["coerce_argument_values","Coerces argument values into GraphQL values."],["collect_fields","Collects fields from selection sets. Returns a map from response key to fields. There will typically be a single field for a response key. If there are multiple, the overall execution logic will effectively merged them into the output for the response key."],["collect_fields_inner",""],["complete_value","Ensures that a value matches the expected return type."],["does_fragment_type_apply","Determines whether a fragment is applicable to the given object type."],["execute_field","Executes a field."],["execute_root_selection_set","Executes the root selection set of a query."],["execute_root_selection_set_uncached",""],["execute_selection_set","Executes a selection set, requiring the result to be of the given object type."],["execute_selection_set_to_map",""],["get_field",""],["get_named_type",""],["object_or_interface",""],["resolve_abstract_type","Resolves an abstract type (interface, union) into an object type based on the given value."],["resolve_field_value","Resolves the value of a field."],["resolve_field_value_for_list_type","Resolves the value of a field that corresponds to a list type."],["resolve_field_value_for_named_type","Resolves the value of a field that corresponds to a named type."]],"struct":[["CACHED_SUBGRAPH_IDS",""],["CACHE_ALL",""],["ExecutionContext","Contextual information passed around during query execution."],["HashableQuery",""],["QUERY_BLOCK_CACHE",""],["QUERY_BLOCK_CACHE_SHARDS","In how many shards (mutexes) the query block cache is split. Ideally this should divide 256 so that the distribution of queries to shards is even."],["QUERY_CACHE_BLOCKS",""],["QUERY_CACHE_MAX_MEM","Maximum total memory to be used by the cache. Each block has a max size of `QUERY_CACHE_MAX_MEM` / (`QUERY_CACHE_BLOCKS` * `GRAPH_QUERY_BLOCK_CACHE_SHARDS`). The env var is in MB."],["QUERY_CACHE_STALE_PERIOD",""],["QUERY_HERD_CACHE",""],["QUERY_LFU_CACHE",""],["QUERY_LFU_CACHE_SHARDS",""],["WeightedResult",""]]});