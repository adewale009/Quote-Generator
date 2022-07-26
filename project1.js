// variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

// quote.append('"I do the very best I know how, the very best I can; and i mean to keep doing so until the end."');
// person.append('Abraham lincoln');

const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others"`,
    person: `Mahata Gandi`,
  },
  {
    quote: `"I do the very best I know how, the very best I can; and i mean to keep doing so until the end."`,
    person: `Abraham lincoln`
  },
  {
    quote: `"Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome while trying to succeed"`,
    person: `Booker T. Washington`,
  },
  {
    quote: `"The purpose of our lives is to be happy"`,
    person: `Dalai Lama`,
  },
  {
    quote: `"Hold on to your dreams of a better life and stay committed to striving to realize it"`,
    person: `Earl G. Graves, Sr`,
  },
  {
    quote: `"If life were predictable it would cease to be life, and be without flavor"`,
    person: `Eleanor Roosevelt`,
  },
  {
    quote: `"The big lesson in life, baby, is never be scared of anyone or anything"`,
    person: `Frank Sinatra`,
  },
  {
    quote: `"All human beings have three lives: public, private, and secret"`,
    person: `Gabriel García Márquez`,
  },
  {
    quote: `"I intend to live life, not just exist"`,
    person: `George Takei`,
  },
  {
    quote: `"A life is not important except in the impact it has on other lives"`,
    person: `Jackie Robinson`,
  },
  {
    quote: `"Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly"`,
    person: `Langston Hughes`,
  },
  {
    quote: `"Sometimes the biggest accomplishment in life is to find yourself"`,
    person: `Luisa Fernanda Cicero`,
  },
  {
    quote: `"Not everything that is faced can be changed, but nothing can be changed until it is faced"`,
    person: `James Baldwin`,
  },
  {
    quote: `"He who is not courageous enough to take risks will accomplish nothing in life"`,
    person: `Muhammad Ali`,
  },
  {
    quote: `"Do not pray for an easy life, pray for the strength to endure a difficult one"`,
    person: `Bruce Lee`,
  },
  {
    quote: `"Get busy living or get busy dying"`,
    person: `Stephen King`,
  },
  {
    quote: `"Real integrity is doing the right thing, knowing that nobody's going to know whether you did it or not"`,
    person: `Oprah Winfrey`,
  },
  {
    quote: `"Throughout life people will make you mad, disrespect you and treat you bad. Let God deal with the things they do, cause hate in your heart will consume you too"`,
    person: `Will smith`,
  },
];

btn.addEventListener("click", function () {

  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
})

 