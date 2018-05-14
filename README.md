<!-- # README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->
# Sonar-rails
This is a single page application called sonar that queries the Homeflow database and returns the properties that match your search criteria.

A user can click on a property from the search result, to get more information about the selected property.

This project was constructed using following technologies:
- Rails 5
- Bootstrap
- JQuery

<strong>Live version of project is available at<br></strong> https://sonar-rails.herokuapp.com/

## Screen Shot
![Home screen](https://github.com/KKOA/sonar-rails/blob/master/Home.png)
![Search Results view ](https://github.com/KKOA/sonar-rails/blob/master/Search.png)
![Individual Property description](https://github.com/KKOA/sonar-rails/blob/master/property-desc.png)
![Individual Property map](https://github.com/KKOA/sonar-rails/blob/master/property-map.png)


## Setup
<Strong>In order to run this application locally you will need the following: </strong>
- an api-key from Homeflow
- Google Map Embedded Api key

```
git clone https://github.com/KKOA/sonar-rails
cd sonar-rails
bundle install
touch .env
```
Open up the file and assign the revelant api keys to the following
```
HOMEFLOW_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
GOOGLE_MAP_API=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

## Run Application
```
cd sonar-rails
rails s
```

Open browser and enter
http://localhost:3000
and hit return.
