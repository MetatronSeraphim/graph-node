initSidebarItems({"constant":[["SITES_CACHE_TTL","How long to cache information about a deployment site"]],"fn":[["_impl_from_sql_row_for_shard",""],["same_subgraph",""]],"mod":[["unused","Tools for managing unused deployments"]],"struct":[["PRIMARY_SHARD","The name of the primary shard that contains all instance-wide data"],["Shard","The name of a database shard; valid names must match `[a-z0-9_]+`"],["SubgraphStore","Multiplex store operations on subgraphs and deployments between a primary and any number of additional storage shards. The primary contains information about named subgraphs, and how the underlying deployments are spread across shards, while the actual deployment data and metadata is stored in the shards.  Depending on the configuration, the database for the primary and for the shards can be the same database, in which case they are all backed by one connection pool, or separate databases in the same Postgres cluster, or entirely separate clusters. Details of how to configure shards can be found in this document"],["SubgraphStoreInner",""],["WritableStore",""],["WritableSubgraphStore","A wrapper around `SubgraphStore` that only exposes functions that are safe to call from `WritableStore`, i.e., functions that either do not deal with anything that depends on a specific deployment location/instance, or where the result is independent of the deployment instance"]],"trait":[["DeploymentPlacer","Decide where a new deployment should be placed based on the subgraph name and the network it is indexing. If the deployment can be placed, returns the name of the database shard for the deployment and the names of the indexers that should index it. The deployment should then be assigned to one of the returned indexers."]]});