luigi
=====

Developer web-UI

To get started:

    sudo npm install -g yo grunt-cli bower
    sudo npm install -g karma
    npm install  
    bower install  

To run the application:

    grunt serve [--force]

Testing
------

To start karma (from Luigi directory):

    karma start

To run tests:

    karma run


Errors
------
If you get 
   TypeError: Cannot read property 'stdout' of undefined

Run:
   gem install compass
