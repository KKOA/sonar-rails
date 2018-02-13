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
![Individual Property](https://github.com/KKOA/sonar-rails/blob/master/Property.png)


## Setup
<Strong>In order to run this application locally you will need the following: </strong>
- an api-key from Homeflow
<!-- - an api-key for Google maps  -->

You need assign api key to the following environment variables
<!-- GOOGLE_MAP_KEY -->
- HOMEFLOW_KEY

The key name must match the ones used in
<br>app/controllers/home_controller.rb.
```
git clone https://github.com/KKOA/sonar-rails
cd sonar-rails
bundle install
```

## Run Application
```
cd sonar
rails s
```

Open browser and enter
http://localhost:3000
and hit return.
