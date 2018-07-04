var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('https://farm6.staticflickr.com/5598/14934282524_344c84246b_q.jpg');
    this.level = ko.computed(function() {
        if (this.clickCount() >= 10 ) {
            return 'cat';
        } if (this.clickCount() < 10) {
            return 'kitten';
        };
    }, this);

    this.incrementCount = function() {
        this.clickCount(this.clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());
