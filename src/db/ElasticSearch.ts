var elasticsearch = require('elasticsearch');

var elasticClient = new elasticsearch.Client({
    host: 'https://akbligwzev:9yetpsc27@app-outmind-3799119117.eu-central-1.bonsaisearch.net:443',
    log: 'info'
});

export default elasticClient;