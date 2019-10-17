import elasticClient from '../db/ElasticSearch';
import {Request, Response} from 'express';

let indexname = 'produits'
var payload ={
  "index": indexname,
  "body": {  
    "settings": {
      "analysis": {
        "analyzer": {
          "indexing_analyzer": {
            "tokenizer": "whitespace",
            "filter":  ["lowercase", "edge_ngram_filter"]
          },
          "search_analyze": {
            "tokenizer": "whitespace",
            "filter":  "lowercase"
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
    "mappings":{
        "properties":{
          "suggest": {
                "type": "completion"
            },
            "title": {
                "type": "text",
                "analyzer":"indexing_analyzer",
                "search_analyzer": "search_analyze"
            }
            ,
            "price": {
                "type": "double"
            }
            ,
            "category": {
                "type": "keyword",
                "analyzer":"indexing_analyzer",
                "search_analyzer": "search_analyze"
            }
            ,
            "sexe_category": {
                "type": "keyword"
            }
            ,
            "image": {
                "type": "text"
            }
            ,
            "description": {
                "type": "text",
                "analyzer":"indexing_analyzer",
                "search_analyzer": "search_analyze"
            }
        }
    }
  }
}


export let initiateElasticSearch = (req: Request, res: Response) => {
    elasticClient.indices.create(payload, function(error: any, response: any){
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
        res.json({result: response, error: error});
    });
};

export let search = (req: Request, res: Response) => {
    elasticClient.search({
      index: indexname,
      body: {
        query: {
          multi_match: {
            query: req.query.search,
            fields: ["title", "description", "category"],
            operator: "and",
            fuzziness: "AUTO",
            prefix_length : 0
          }
        }
      }
    }, function (error: any, response: any) {
        if(error)
            res.json({result: error});
        res.json({result: response.hits.hits}); 
      
    })
};


export let getSuggestions = (req: Request, res: Response) => {
    return elasticClient.search({
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
  }, 
    function (error: any, response: any) {
        if(error)
            res.json({result: error}); 
        res.json((response.suggest.productsuggest[0].options).map((el: any) => el._source)); 
    })
};