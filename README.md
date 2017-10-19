# Selfify for Backbone.js
Helper function for Backbone.js. Selfify passes class context to each class method.

## Instructions
Using Selfify is simple. Just add one line of code inside Backbone.js view's initialize-method:

```
initialize: function() {
  selfify(this);
}
```

## Example

```

var ExampleView = Backbone.View.extend({
    
    names: ['John', 'Jane', 'Jack'],

    initialize: function() {
       selfify(this);  // Selfify by adding this line
    },

    greeting: function(self, name) {
        return 'Hi, ' + name + '!';
    },

    logGreetings: function(self) {
        for (var i in self.names) {
        
            var name = self.names[i];
            var greeting = self.greeting(name);
            
            console.log(greeting);
        }
    },
})


var a = new ExampleView();
a.logGreetings();

> Hi, John!
> Hi, Jane!
> Hi, Jack!

```
