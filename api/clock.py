from flask.globals import request



from flask import Flask
from flask import request
from pprint import pprint
from bson import json_util
from flask.wrappers import Request
import pymongo



from pymongo import collection
app = Flask(__name__)

client = pymongo.MongoClient("mongodb+srv://m001-student:m001122@cluster0.34cov.mongodb.net/factsbook?retryWrites=true&w=majority", ssl=True,ssl_cert_reqs='CERT_NONE')
db = client.globalclock
collaction=db['userinfo']


@app.route('/adduser',methods=['POST'])
def adduser():
    b1=db.userinfo.find({}).count()
    id=str(b1 + 1)
    formData=request.get_json()
    db.userinfo.insert_one({'uemail':formData['email'],'upassword':formData['password']}) 
    print(request.get_json())
    return {"add" : "success"}



@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True)