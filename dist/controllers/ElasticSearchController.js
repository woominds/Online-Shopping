"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSuggestions = exports.search = exports.initiateElasticSearch = void 0;
const ElasticSearch_1 = __importDefault(require("../db/ElasticSearch"));
let indexname = 'produits';
var payload = {
    "index": indexname,
    "body": {
        "settings": {
            "analysis": {
                "analyzer": {
                    "indexing_analyzer": {
                        "tokenizer": "whitespace",
                        "filter": ["lowercase", "edge_ngram_filter"]
                    },
                    "search_analyze": {
                        "tokenizer": "whitespace",
                        "filter": "lowercase"
                    }
                },
                "filter": {
                    "edge_ngram_filter": {
                        "type": "edge_ngram",
                        "min_gram": 1,
                        "max_gram": 20
                    }
                }
            }
        },
        "mappings": {
            "properties": {
                "suggest": {
                    "type": "completion"
                },
                "title": {
                    "type": "text",
                    "analyzer": "indexing_analyzer",
                    "search_analyzer": "search_analyze"
                },
                "price": {
                    "type": "double"
                },
                "category": {
                    "type": "keyword",
                    "analyzer": "indexing_analyzer",
                    "search_analyzer": "search_analyze"
                },
                "sexe_category": {
                    "type": "keyword"
                },
                "image": {
                    "type": "text"
                },
                "description": {
                    "type": "text",
                    "analyzer": "indexing_analyzer",
                    "search_analyzer": "search_analyze"
                }
            }
        }
    }
};
exports.initiateElasticSearch = (req, res) => {
    ElasticSearch_1.default.indices.create(payload, function (error, response) {
        // var data_array = [];
        // data_array.push(
        //     { index:  { _index: indexname, _type: 'world', _id: 1 } },
        //     { city: 'Chandigarh', state: 'Chandigarh', country: 'India' }
        // )
        // data_array.push(
        //     { index:  { _index: indexname, _type: 'world', _id: 1 } },
        //     { city: 'Chandler', state: 'Quebec', country: 'Canada' }
        // ) 
        // elasticClient.bulk({
        //     body: data_array
        // });
        res.json({ result: response, error: error });
    });
};
exports.search = (req, res) => {
    ElasticSearch_1.default.search({
        index: indexname,
        body: {
            query: {
                multi_match: {
                    query: req.query.search,
                    fields: ["title", "description", "category"],
                    operator: "and",
                    fuzziness: "AUTO",
                    prefix_length: 0
                }
            }
        }
    }, function (error, response) {
        if (error)
            res.json({ result: error });
        res.json({ result: response.hits.hits });
    });
};
exports.getSuggestions = (req, res) => {
    return ElasticSearch_1.default.search({
        index: indexname,
        body: {
            suggest: {
                productsuggest: {
                    prefix: req.query.query,
                    completion: { field: 'suggest',
                        fuzzy: {
                            fuzziness: 2
                        }
                    },
                }
            }
        }
    }, function (error, response) {
        if (error)
            res.json({ result: error });
        res.json((response.suggest.productsuggest[0].options).map((el) => el._source));
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxhc3RpY1NlYXJjaENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9FbGFzdGljU2VhcmNoQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx3RUFBZ0Q7QUFHaEQsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFBO0FBQzFCLElBQUksT0FBTyxHQUFFO0lBQ1gsT0FBTyxFQUFFLFNBQVM7SUFDbEIsTUFBTSxFQUFFO1FBQ04sVUFBVSxFQUFFO1lBQ1YsVUFBVSxFQUFFO2dCQUNWLFVBQVUsRUFBRTtvQkFDVixtQkFBbUIsRUFBRTt3QkFDbkIsV0FBVyxFQUFFLFlBQVk7d0JBQ3pCLFFBQVEsRUFBRyxDQUFDLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQztxQkFDOUM7b0JBQ0QsZ0JBQWdCLEVBQUU7d0JBQ2hCLFdBQVcsRUFBRSxZQUFZO3dCQUN6QixRQUFRLEVBQUcsV0FBVztxQkFDdkI7aUJBQ0g7Z0JBQ0QsUUFBUSxFQUFFO29CQUNQLG1CQUFtQixFQUFFO3dCQUNsQixNQUFNLEVBQUUsWUFBWTt3QkFDcEIsVUFBVSxFQUFFLENBQUM7d0JBQ2IsVUFBVSxFQUFFLEVBQUU7cUJBQ2Y7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0YsVUFBVSxFQUFDO1lBQ1AsWUFBWSxFQUFDO2dCQUNYLFNBQVMsRUFBRTtvQkFDTCxNQUFNLEVBQUUsWUFBWTtpQkFDdkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLE1BQU0sRUFBRSxNQUFNO29CQUNkLFVBQVUsRUFBQyxtQkFBbUI7b0JBQzlCLGlCQUFpQixFQUFFLGdCQUFnQjtpQkFDdEM7Z0JBRUQsT0FBTyxFQUFFO29CQUNMLE1BQU0sRUFBRSxRQUFRO2lCQUNuQjtnQkFFRCxVQUFVLEVBQUU7b0JBQ1IsTUFBTSxFQUFFLFNBQVM7b0JBQ2pCLFVBQVUsRUFBQyxtQkFBbUI7b0JBQzlCLGlCQUFpQixFQUFFLGdCQUFnQjtpQkFDdEM7Z0JBRUQsZUFB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