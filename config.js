var config = {};

// provide an admin API key for your search service
// Admin rights are required for creating objects
config.apiKey = "";

// provide a query API key for read-only access to the index
config.queryKey = "";

// provide the URL for your search service
config.serviceURL = "https://yourServiceHere.search.windows.net";

config.dataSourceName = "usgs-datasource";

config.indexerName ="usgs-indexer";

config.indexName = "features";

config.apiVersion = "2020-06-30";

config.connectionString = "Server=tcp:azs-playground.database.windows.net,1433;Database=usgs;User ID=reader;Password=EdrERBt3j6mZDP;Trusted_Connection=False;Encrypt=True;Connection Timeout=30;";

config.tableName = "GeoNamesRI";

config.dataSourceType = "azuresql"; 

config.maxFailedItems = 10;

config.maxFailedItemsPerBatch = 5;

config.base64EncodeKeys = false;

module.exports = config;
