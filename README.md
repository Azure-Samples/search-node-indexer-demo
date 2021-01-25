# Search-NodeJS-Indexer-Demo

This Node.js code sample for [Azure Cognitive Search](https://docs.microsoft.com/azure/search/) demonstrates how to create and use a search indexer that retrieves data from an Azure SQL database. This code pre-dates the JavaScript SDK and uses the [Search Service REST APIs](https://docs.microsoft.com/rest/api/searchservice/) to create, configure, and run the indexer.

This sample also includes a simple React UI to query results.

## Status: archived

This sample is now archived and will no longer be updated. For JavaScript code samples targeting the [Azure Cognitive Search client libraries (Azure SDK for JavaScript)](https://docs.microsoft.com/javascript/api/overview/azure/search-documents-readme), see [Browse Samples](https://docs.microsoft.com/samples/browse/?products=azure-cognitive-search&languages=javascript) on docs.microsoft.com.

## To get started

1. git clone <https://github.com/Azure-Samples/AzureSearchNodeJSIndexerDemo.git>
2. `npm install`
3. `npm install -g http-server`
4. populate `config.js` with your search service URL & api key
5. `npm run indexDocuments`
6. `npm run build`
7. `npm run start_server`
8. direct your browser at <http://localhost:8080/index.html>

Step five will run a script that creates an index, data source, and indexer. This indexer will scrape an Azure SQL database, provided by Microsoft, and automatically push all rows into your search index.

## About this project

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.