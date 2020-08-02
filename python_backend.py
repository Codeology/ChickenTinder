import pandas as pd
import numpy as np
from flask import Flask, request
import requests

restaurants = pd.read_csv('Dummy Restaurant Dataset - Sheet1.csv')
zones = restaurants.ZONE.unique()


url = "http://localhost:9000"

heuristic_values = []
maxReviewCount = restaurants['REVIEW COUNT'].max()
def get_heuristic(rating, review_count): # Calculates heuristic value from rating and numReviews value in a dataframe
    rating_value = (rating / 5) * 50 
    count_value = (review_count / maxReviewCount) * 50 
    return rating_value + count_value
for i in restaurants.index: 
    h_val = get_heuristic(restaurants['YELP RATING'][i], restaurants['REVIEW COUNT'][i])
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

#listen for which area user prefers
preferred_zone = restaurants

app = Flask(__name__)
@app.route("/", methods = ['GET', 'POST']) # this info will contain a user name, password, and location preference
def preference():
    if request.method == 'POST':
        if request.json['location'] == 'south side':
            preferred_zone = southSide
        elif request.json['location'] =='north side':
            preferred_zone = northSide
        elif request.json['location'] == 'elmwood':
            preferred_zone = elmwood
        elif request.json['location'] == 'downtown':
            preferred_zone = downtown
        requests.post(url, restaurant_info_dict[0])


num_users = 1

# preferred_zone = downtown #FOR EXAMPLE

restaurant_info_dict = preferred_zone.to_dict(orient='records')

i = 1 # which restaurant we are on

num_preferred_restaurants = len(restaurant_info_dict)

# send back restaurant data

restaurant_to_send = restaurant_info_dict
choices = []

@app.route("/", methods = ['GET', 'POST'])
def swipe():
    if request.method == 'POST':
        restaurant_choice = request.json['choice']
        choices.append(restaurant_choice)
        if i < num_preferred_restaurants:
            if len(choices) == num_users:
                restaurant_info_dict[i]['swipes'] = sum(choices)
                if sum(choices) == num_users:
                    restaurant_info_dict[i]['match'] = 1
                    requests.post(url, data=restaurant_info_dict[i])
                else:
                    if (i+1) == num_preferred_restaurants:
                        restaurant_info_dict[i]['match'] = 2
                        requests.post(url, data=restaurant_info_dict[i])
                    else:
                        restaurant_info_dict[i+1]['match'] = 0
                        requests.post(url, data=restaurant_info_dict[i + 1])
        

                
if __name__ == "__main__":
    app.run()

