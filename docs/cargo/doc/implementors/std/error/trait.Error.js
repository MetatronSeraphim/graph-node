(function() {var implementors = {};
implementors["graph"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"graph/components/server/query/enum.GraphQLServerError.html\" title=\"enum graph::components::server::query::GraphQLServerError\">GraphQLServerError</a>","synthetic":false,"types":["graph::components::server::query::GraphQLServerError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"graph/components/store/enum.StoreError.html\" title=\"enum graph::components::store::StoreError\">StoreError</a>","synthetic":false,"types":["graph::components::store::StoreError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"graph/data/subgraph/enum.SubgraphRegistrarError.html\" title=\"enum graph::data::subgraph::SubgraphRegistrarError\">SubgraphRegistrarError</a>","synthetic":false,"types":["graph::data::subgraph::SubgraphRegistrarError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"graph/data/subgraph/enum.SubgraphAssignmentProviderError.html\" title=\"enum graph::data::subgraph::SubgraphAssignmentProviderError\">SubgraphAssignmentProviderError</a>","synthetic":false,"types":["graph::data::subgraph::SubgraphAssignmentProviderError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"graph/data/subgraph/enum.SubgraphManifestValidationWarning.html\" title=\"enum graph::data::subgraph::SubgraphManifestValidationWarning\">SubgraphManifestValidationWarning</a>","synthetic":false,"types":["graph::data::subgraph::SubgraphManifestValidationWarning"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"graph/data/subgraph/enum.SubgraphManifestValidationError.html\" title=\"enum graph::data::subgraph::SubgraphManifestValidationError\">SubgraphManifestValidationError</a>","synthetic":false,"types":["graph::data::subgraph::SubgraphManifestValidationError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"graph/data/subgraph/enum.SubgraphManifestResolveError.html\" title=\"enum graph::data::subgraph::SubgraphManifestResolveError\">SubgraphManifestResolveError</a>","synthetic":false,"types":["graph::data::subgraph::SubgraphManifestResolveError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"graph/data/subgraph/struct.DifferentMappingApiVersions.html\" title=\"struct graph::data::subgraph::DifferentMappingApiVersions\">DifferentMappingApiVersions</a>","synthetic":false,"types":["graph::data::subgraph::DifferentMappingApiVersions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"graph/data/query/error/enum.QueryExecutionError.html\" title=\"enum graph::data::query::error::QueryExecutionError\">QueryExecutionError</a>","synthetic":false,"types":["graph::data::query::error::QueryExecutionError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"graph/data/query/error/enum.QueryError.html\" title=\"enum graph::data::query::error::QueryError\">QueryError</a>","synthetic":false,"types":["graph::data::query::error::QueryError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"graph/data/schema/enum.SchemaValidationError.html\" title=\"enum graph::data::schema::SchemaValidationError\">SchemaValidationError</a>","synthetic":false,"types":["graph::data::schema::SchemaValidationError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"graph/data/schema/enum.SchemaImportError.html\" title=\"enum graph::data::schema::SchemaImportError\">SchemaImportError</a>","synthetic":false,"types":["graph::data::schema::SchemaImportError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"graph/data/store/scalar/enum.BigIntOutOfRangeError.html\" title=\"enum graph::data::store::scalar::BigIntOutOfRangeError\">BigIntOutOfRangeError</a>","synthetic":false,"types":["graph::data::store::scalar::BigIntOutOfRangeError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"graph/data/subscription/error/enum.SubscriptionError.html\" title=\"enum graph::data::subscription::error::SubscriptionError\">SubscriptionError</a>","synthetic":false,"types":["graph::data::subscription::error::SubscriptionError"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"graph/prelude/trait.Debug.html\" title=\"trait graph::prelude::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"graph/util/futures/enum.TimeoutError.html\" title=\"enum graph::util::futures::TimeoutError\">TimeoutError</a>&lt;T&gt;","synthetic":false,"types":["graph::util::futures::TimeoutError"]},{"text":"impl&lt;E:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"graph/prelude/trait.Debug.html\" title=\"trait graph::prelude::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"graph/ext/futures/enum.CancelableError.html\" title=\"enum graph::ext::futures::CancelableError\">CancelableError</a>&lt;E&gt;","synthetic":false,"types":["graph::ext::futures::CancelableError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"graph/blockchain/enum.IngestorError.html\" title=\"enum graph::blockchain::IngestorError\">IngestorError</a>","synthetic":false,"types":["graph::blockchain::IngestorError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"graph/runtime/struct.DeterministicHostError.html\" title=\"struct graph::runtime::DeterministicHostError\">DeterministicHostError</a>","synthetic":false,"types":["graph::runtime::DeterministicHostError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"graph/runtime/enum.HostExportError.html\" title=\"enum graph::runtime::HostExportError\">HostExportError</a>","synthetic":false,"types":["graph::runtime::HostExportError"]}];
implementors["graph_chain_ethereum"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"graph_chain_ethereum/adapter/enum.EthereumContractCallError.html\" title=\"enum graph_chain_ethereum::adapter::EthereumContractCallError\">EthereumContractCallError</a>","synthetic":false,"types":["graph_chain_ethereum::adapter::EthereumContractCallError"]}];
implementors["graph_core"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"graph_core/subgraph/instance_manager/enum.BlockProcessingError.html\" title=\"enum graph_core::subgraph::instance_manager::BlockProcessingError\">BlockProcessingError</a>","synthetic":false,"types":["graph_core::subgraph::instance_manager::BlockProcessingError"]}];
implementors["graph_graphql"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"graph_graphql/schema/api/enum.APISchemaError.html\" title=\"enum graph_graphql::schema::api::APISchemaError\">APISchemaError</a>","synthetic":false,"types":["graph_graphql::schema::api::APISchemaError"]}];
implementors["graph_server_http"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"graph_server_http/server/enum.GraphQLServeError.html\" title=\"enum graph_server_http::server::GraphQLServeError\">GraphQLServeError</a>","synthetic":false,"types":["graph_server_http::server::GraphQLServeError"]}];
implementors["graph_server_index_node"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"graph_server_index_node/server/enum.IndexNodeServeError.html\" title=\"enum graph_server_index_node::server::IndexNodeServeError\">IndexNodeServeError</a>","synthetic":false,"types":["graph_server_index_node::server::IndexNodeServeError"]}];
implementors["graph_server_metrics"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"graph_server_metrics/enum.PrometheusMetricsServeError.html\" title=\"enum graph_server_metrics::PrometheusMetricsServeError\">PrometheusMetricsServeError</a>","synthetic":false,"types":["graph_server_metrics::PrometheusMetricsServeError"]}];
implementors["graph_store_postgres"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"graph_store_postgres/relational_queries/struct.UnsupportedFilter.html\" title=\"struct graph_store_postgres::relational_queries::UnsupportedFilter\">UnsupportedFilter</a>","synthetic":false,"types":["graph_store_postgres::relational_queries::UnsupportedFilter"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()