import pymongo
from pymongo import MongoClient

client = MongoClient("localhost", 27017)
db = client.sakila

films = {
    "$and": [
        {"$or": [{"rating": "NC-17"}, {"rating": "R"}]},
        {
            "$or": [
                {"title": {"$regex": ".*FREAKY.*"}},
                {"title": {"$regex": ".*TERMINATOR.*"}},
            ]
        },
    ]
}

pipeline = [
    {"$match": films},
    {
        "$lookup": {
            "from": "category",
            "localField": "category",
            "foreignField": "_id",
            "as": "category_info",
        }
    },
    {
        "$lookup": {
            "from": "actor",
            "localField": "actors",
            "foreignField": "_id",
            "as": "actor_info",
        }
    },
    {
        "$match": {
            "$or": [{"category_info.name": "Horror"}, {"category_info.name": "Sci-Fi"}]
        }
    },
    {"$match": {"actor_info.first_name": "Uma"}},
]

cursor = db.film.aggregate(pipeline)

for document in cursor:
    print(document)
