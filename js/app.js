var Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('https://farm6.staticflickr.com/5598/14934282524_344c84246b_q.jpg');
    this.nicknames = ko.observableArray(['T', 'Tabbitha']);

    this.level = ko.computed(function() {
        var level;
        var clicks = this.clickCount();
        if (clicks < 10 ) {
            level = 'newborn';
        } else if (clicks < 50) {
            level = 'kitten';
        } else {
            level = 'Cat';
        };
        return level;
    }, this);
}

var ViewModel = function() {

    this.currentCat = ko.observable( new Cat());

    this.incrementCount = function() {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());
