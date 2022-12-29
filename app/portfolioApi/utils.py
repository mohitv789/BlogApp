from pymongo import MongoClient
def get_db_handle():
    client = MongoClient('mongodb://localhost:27017')
    db_handle = client["blogapp"]
    return db_handle
def get_collection_handle(db_handle):
    return db_handle["automotive"]