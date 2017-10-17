# Overloop tech test (derived from the brilliant and useful MEAN reference app http://mean.io)

## Prerequisites
* Node.js - Download and Install [Node.js](http://www.nodejs.org/download/). You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm
* Tested on node v6.9.0

## Quick Install

 The quickest way to get started with the Overloop tech test is to clone the project and utilize it like this:

  Install dependencies:

    $ npm install

  To start the server you can use:

    $ node server.js
    
  Then open a browser and go to:

    http://localhost:3000

## Which bit of code does what?
  * The Model, /app/models/article.js - Where we define our object schema.
  * The Controller, /app/controllers/articles.js - Where we take care of our backend logic.
  * NodeJS Routes, /config/routes.js - Where we define our REST service routes.
  * AngularJs Routes, /public/js/config.js - Where we define our CRUD routes.
  * The AngularJs Service, /public/js/services/articles.js - Where we connect to our REST service.
  * The AngularJs Controller, /public/js/controllers/articles.js - Where we take care of our frontend logic.
  * The AngularJs Views Folder, /public/views/articles - Where we keep our CRUD views.


## What do I need to do?

The current application allows users to create and edit articles, which consist of a title and a body. There is also a way to see all the articles in the system.

The changes we'd like you to make are the following:
Currently an article has a title and content. We need to extend that model to store for each article a list of territories in which that article is available. The idea is similar to the way some YouTube videos might not be available in some countries.
So for example, one article might be available in France, Germany and Belgium.
Another article might be available in France, Belgium and UK.
The user needs to be able to see which territories an article is available in and be able to update that as well.

If you get that to work, then we need to create a way for a user to enter one or more territories and show the user all the articles that are available in all of those territories.
So in the above example, if the user entered Germany, only the first article would be returned.
If the user entered France, both articles would be returned.
If the user entered France and Belgium it would still return both articles.
If the user entered France and UK, only the second article would be returned.

Don't worry if you don't get all of that to work (obviously great if you do), the point is to see how you approach a problem like that. A system that works but only fulfils part of the requirements is preferable over a system that does not work but tries to fulfil more requirements.


## Credits
  * Inspired by the great work of the people at [Mean.io] (http://mean.io)
  * Inspired by the great work of [Madhusudhan Srinivasa](https://github.com/madhums/)

## License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
