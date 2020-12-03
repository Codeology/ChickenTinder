import pandas as pd
import numpy as np
from flask import Flask, request, flash
from flask_cors import CORS
import sqlite3
import init_db
import os
import json

restaurants = pd.read_csv('Dummy Restaurant Dataset - Sheet1.csv')
zones = restaurants.ZONE.unique()
#users = pd.DataFrame(columns=['username', 'password', 'location', 'startUp'])

url = "http://localhost:3000"


heuristic_values = []
maxReviewCount = restaurants['REVIEW_COUNT'].max()
def get_heuristic(rating, review_count): # Calculates heuristic value from rating and numReviews value in a dataframe
    rating_value = (rating / 5) * 50 
    count_value = (review_count / maxReviewCount) * 50 
    return rating_value + count_value
for i in restaurants.index: 
    h_val = get_heuristic(restaurants['YELP_RATING'][i], restaurants['REVIEW_COUNT'][i])
    heuristic_values.append(h_val)

restaurants['HEURISTIC'] = heuristic_values
southSide = restaurants.loc[restaurants['ZONE']=='South Side']
southSide = southSide.sort_values(by=['HEURISTIC'], ascending=False)
northSide = restaurants.loc[restaurants['ZONE']=='North Side']
northSide = northSide.sort_values(by=['HEURISTIC'], ascending=False)
elmwood = restaurants.loc[restaurants['ZONE']=='Elmwood']
elmwood = elmwood.sort_values(by=['HEURISTIC'], ascending=False)
downtown = restaurants.loc[restaurants['ZONE']=='Downtown']
downtown = downtown.sort_values(by=['HEURISTIC'], ascending=False)

app = Flask(__name__)
app.config.from_mapping(DATABASE=os.path.join(app.instance_path, 'flaskr_sqlite'))
cors = CORS(app)
try:
    os.makedirs(app.instance_path)
except OSError:
    pass
init_db.init_app(app)

@app.route("/", methods = ['GET', 'POST'])                                                  # this info will contain a user name, password, and location preference
def preference():
    if request.method == 'POST':
        db = init_db.get_db()
        if 'name' in request.json:
            cur = db.execute('select * from users where GroupPassword={}'.format(request.json['password']))
            entries = cur.fetchall()
            if len(entries) == 0:
                db.execute('insert into swipes (GroupPassword) values ({})'.format(request.json['password']))
                db.commit()
            db.execute('insert into users (UserName, GroupPassword, LocationPreference) values (?, ?, ?)', [request.json['name'], request.json['password'], request.json['location']])
            db.commit()
            cur1 = db.execute('select * from users')    
            cur2 = db.execute('select * from swipes')
            return json.dumps(dict(cur2.fetchone()))
        else:
            cur = db.execute('select * from users where GroupPassword={}'.format(request.json['password']))
            numUsers = len(cur.fetchone())
            cur = db.execute('select * from swipes where GroupPassword={}'.format(request.json['password']))
            numSwipes = dict(cur.fetchone())
            matched = ""
            if numUsers in numSwipes.values():
                matched = str(numSwipes.keys()[numSwipes.values().index(numUsers)])
            if request.json['pref'] == 'noPref':
                if matched != "":
                    return matched
                return restaurants.iloc[request.json['count']].to_json(orient = 'index')
            else:
                if matched != "":
                    return matched
                preferred_location = restaurants.loc[restaurants['ZONE']== request.json['pref']]
                preferred_location = preferred_location.sort_values(by='HEURISTIC', ascending=False)
                return preferred_location.iloc[request.json['count']].to_json(orient = 'index')
        

app.secret_key = 'some secret key'                
if __name__ == "__main__":
    app.run(port="5000")

