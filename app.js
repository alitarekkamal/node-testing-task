let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'Ejs',
        nav: ['call-us', 'category', 'about'],
        footer: ['phone: +23330654', 'address: egypt-suez',
            'email: Alitarekkamal@gmail.com'
        ]
    });
});

app.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'Ejs',
        nav: ['call-us', 'category', 'about'],
        body: {
            one: 'frist header on about template',
            two: 'second header on about template',
            three: '3rd header on about template',
            prag1: 'this is about frist pragraph in about template this is about frist pragraph in about templatethis is about frist pragraph in about template this is about frist pragraph in about template  ',
            prag2: 'this is about second pragraph in about template this is about second pragraph in about templatethis is about second pragraph in the template this is the second pragraph in the template'
        },
        footer: ['phone: +23330654', 'address: egypt-suez',
            'email: Alitarekkamal@gmail.com'
        ]
    });
});

app.get('/call-us', (req, res) => {
    res.render('pages/callus', {
        title: 'Ejs-call',
        nav: ['call-us', 'category', 'about'],
        body: {
            one: 'frist header on "call us" template',
            two: 'second header on "call us" template',
            three: '3rd header on "call us" template',
            prag1: 'this is "call us" frist pragraph in "call us" template this is "call us" frist pragraph in "call us" templatethis is "call us" frist pragraph in "call us" template this is "call us" frist pragraph in "call us" template  ',
            prag2: 'this is "call us" second pragraph in "call us" template this is "call us" second pragraph in "call us" templatethis is "call us" second pragraph in the template this is the second pragraph in the template'
        },
        footer: ['phone: +23330654', 'address: egypt-suez',
            'email: Alitarekkamal@gmail.com'
        ]
    });
});

app.get('/category', (req, res) => {
    res.render('pages/category', {
        title: 'Ejs-Category',
        nav: ['call-us', 'category', 'about'],
        body: {
            one: 'frist header on "category" template',
            two: 'second header on "Category" template',
            three: '3rd header on "Category" template',
            prag1: 'this is "Category" frist pragraph in "Category" template this is "Category" frist pragraph in "Category" templatethis is "Category" frist pragraph in "Category" template this is "Category" frist pragraph in "Category" template  ',
            prag2: 'this is "Category" second pragraph in "Category" template this is "Category" second pragraph in "Category" templatethis is "Category" second pragraph in the template this is the second pragraph in the template'
        },
        footer: ['phone: +23330654', 'address: egypt-suez',
            'email: Alitarekkamal@gmail.com'
        ]
    });
});

app.listen(8000, () => console.log('8000 running as a port'));