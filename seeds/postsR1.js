
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts').del(),

    // Inserts seed entries
    knex('posts')
      .insert(
        {
          id: 1,
          title: 'My weird cat using my back scratcher to scratch her face.',
          author: 'xScott18x',
          imgUrl: 'http://i.imgur.com/Qn3RXh1.jpg'
        }
    ),
    knex('posts')
      .insert(
        {
          id: 2,
          title: 'TIFU By attacking a Praying Mantis',
          author: 'DeadSa13er',
          imgUrl: 'https://i.imgur.com/qUVP68t.gifv',
        }
    ),
    knex('posts')
      .insert(
        {
          id: 3,
          title: 'She has Talent',
          author: 'LongJohn13',
          imgUrl: 'https://b.thumbs.redditmedia.com/z8HzoJGIhBMorUwQB3tJc4Ri8qgKzLdSTbCPYEdDXbo.jpg',
          description: 'She has ships like battleships'
        }
    ),
    knex('posts')
      .insert(
        {
          id: 4,
          title: 'Laser Mantis',
          author: 'chocolatethunder',
          imgUrl: 'http://i.imgur.com/NJf2wtc.gifv'
        }
    ),
    knex('posts')
      .insert(
        {
          id: 5,
          title: 'LPT: If someone\'s complaining about something in their life, don\'t start with your own complains being bigger than theirs\', only listen.',
          author: 'reddit-yes',
          description: 'Sometimes it\'s tough though. It isn\'t a clear line between sharing a similar experience in an attempt to connect with the person in hopes that they\'ll realize that they\'re not going through this alone and "one upping" them. Obviously I\'m never trying to "one up" them, but I\'m sure it\'s come off that way before.'
        }
    ),
    knex('posts')
      .insert(
        {
          id: 6,
          title: 'Man builds \'Scarlett Johansson\' robot from scratch to "fulfill childhood dream" - and it\'s scarily lifelike',
          author: 'Arzu1982',
          imgUrl: 'http://i.dailymail.co.uk/i/pix/2016/04/01/14/32BACC1700000578-0-image-a-41_1459517666404.jpg',
          description: 'A man realizes his childhood dream at the age of 42 in building a replica of someone who may or may not be Scarlett Johansson'
        }
    ),
    knex('posts')
      .insert(
        {
          id: 7,
          title: 'Shiba Splat',
          author: 'MLE71988',
          imgUrl: 'https://b.thumbs.redditmedia.com/ylJqIrNBFHDp-qWyOFAuklwx-Z1E1lncmiakc8u__1U.jpg'
        }
    ),
    knex('posts')
      .insert(
        {
          id: 8,
          title: 'Stop taking on debt under the guise of "it\'s cheap money"',
          author: 'StandardOP',
          description: 'The worst lies we tell are the ones we tell to ourselves. Don\'t tell yourself you are being smart and taking "cheap money". Debt is never a better idea than paying cash.'
        }
    )
  );
};
