var initialCats = [
        {
            name: "Cat 1",
            imgSrc: "https://farm6.staticflickr.com/5598/14934282524_344c84246b_q.jpg",
            clickCount: 0,
            nicknames: ['mike', 'pike']
        },

        {
            name: "Cat 2",
            imgSrc: "https://farm9.staticflickr.com/8110/8594699278_dd256c10fd_q.jpg",
            clickCount: 0,
            nicknames: ['mike', 'pike']
        },

        {
            name: "Cat 3",
            imgSrc: "https://farm4.staticflickr.com/3946/14934292534_32b0302f2d_q.jpg",
            clickCount: 0,
            nicknames: ['mike', 'pike']

        },

        {
            name: "Cat 4",
            imgSrc: "https://farm6.staticflickr.com/5512/14410052054_6296fd600f_q.jpg",
            clickCount: 0,
            nicknames: ['mike', 'pike']

        },

        {
            name: "Cat 5",
            imgSrc: "https://farm7.staticflickr.com/6092/6330704947_dd7e1b453c_q.jpg",
            clickCount: 0,
            nicknames: ['mike', 'pike']

        }
    ];

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nicknames = ko.observableArray(data.nicknames);

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
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        console.log('hi');
        self.catList.push( new Cat(catItem) );
    });

    this.currentCat = ko.observable( this.catList()[0] );

    this.incrementCount = function() {
        this.clickCount(this.clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());
