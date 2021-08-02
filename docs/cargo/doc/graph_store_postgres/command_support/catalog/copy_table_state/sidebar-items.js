initSidebarItems({"constant":[["all_columns","A tuple of all of the columns on this table"]],"mod":[["columns","Contains all of the columns of this table"],["dsl","Re-exports all of the columns of this table, as well as the table struct renamed to the module name. This is meant to be glob imported for functions which only deal with one table."]],"struct":[["batch_size",""],["dst",""],["duration_ms",""],["entity_type",""],["finished_at",""],["id",""],["next_vid",""],["star","Represents `table_name.*`, which is sometimes needed for efficient count queries. It cannot be used in place of `all_columns`, and has a `SqlType` of `()` to prevent it being used that way"],["started_at",""],["table","The actual table struct"],["target_vid",""]],"type":[["BoxedQuery","Helper type for representing a boxed query from this table"],["SqlType","The SQL type of all of the columns on this table"]]});