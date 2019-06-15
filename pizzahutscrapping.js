var casper = require('casper').create();

var fs = require('fs');

casper.start('https://www.pizzahut.es/');

casper.thenOpen('https://www.pizzahut.es/pizza', function() {

    var pizzaHut = this.evaluate(function() {

        var imgs = document.querySelectorAll(".item-container");

        function Pizza (imgUrl, pizzaName, pizzaText) {
           this.imgUrl = imgUrl;
           this.pizzaName = pizzaName;
           this.pizzaText = pizzaText;
        }

        var pizzas = [];

        for (var i = 0; i < imgs.length; i++) {
            var element = imgs[i];

            var url = element.getElementsByTagName("img")[0].src;
            var name = element.getElementsByTagName("div")[0].getElementsByTagName("div")[0].getElementsByTagName("h3")[0].innerText;
            var text = element.getElementsByTagName("div")[0].getElementsByTagName("div")[0].getElementsByTagName("p")[0].innerText;

            var pizzaObj = new Pizza(url, name, text);
            pizzas.push(pizzaObj);
        }

        return JSON.stringify(pizzas);

    });

    
    this.echo(pizzaHut);

    fs.write("pizzahut.json", pizzaHut);
    
});

casper.run(function() {
    this.exit();
});