[![Build Status](http://img.shields.io/travis/pikesley/wtfismygenericthing.svg?style=flat-square)](https://travis-ci.org/pikesley/wtfismygenericthing)
[![Dependency Status](http://img.shields.io/gemnasium/pikesley/wtfismygenericthing.svg?style=flat-square)](https://gemnasium.com/pikesley/wtfismygenericthing)
[![Coverage Status](http://img.shields.io/coveralls/pikesley/wtfismygenericthing.svg?style=flat-square)](https://coveralls.io/r/pikesley/wtfismygenericthing)
[![Code Climate](http://img.shields.io/codeclimate/github/pikesley/wtfismygenericthing.svg?style=flat-square)](https://codeclimate.com/github/pikesley/wtfismygenericthing)
[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://pikesley.mit-license.org)

# WTF IS MY GENERIC THING?

Mostly an excuse for me to learn JavaScript TBH. See it in action [here](http://wtfismybbctbqtopic.herokuapp.com/)

## How to use it

You'll want a bit of customisation or it'll be a bit shit

### Data

There are some sample data files in [data](data/). The key ones are:

#### `headings.yml`

A list of titles, one of which will be randomly chosen. Probably something along the lines of

```yaml
headings:
  - Stop what you're doing and look at this, my blockchain strategy is
```

Note: EVERYTHING gets upcased when it's rendered, it's just easier that way

#### `templates.yml`

A list of skeletons for the robots to randomly select and then populate, with hilarious effect. Maybe

```yaml
templates:
  - to use @animals and @people to mine bitcoins
```

or similar

Note: those _@placeholder_ words are important, more later

#### `responses.yml`

One of these will be randomly picked as the text for the 'Give me another' link.

```yaml
responses:
  - this is shit, try again
```

you know the sort of thing

### Populate the templates

The rest of the data files will be used to populate the templates. I've used the convention of one-file-per-list, but the code does not care TBH - you can mash them all into the same YAML file as long as they're namespaced like this

```yaml
animals:
  - dogs
  - cats

people:
  - Edsger Dijkstra
  - Beyoncé
```

#### Repeated placeholders

You can have something like `@things and also @things` in a template, which will replace each occurrence with a different item from `things` _as long as there are enough items in `things` to cover the bet_. More on How Not To Fuck Things Up below

#### Recursive templates

It's perfectly cromulent to put _@placeholders_ in these files, so you can have:

```yaml
things:
  - @adjective bananas

adjective:
  - furry
  - straight
```

or whatever. In theory, this works to arbitrary depth ([the tests](https://github.com/pikesley/wtfismygenericthing/blob/00c571eaf9904a70720f663144993300f4b86887/spec/javascripts/wtfismygenericthing_spec.js#L86-L110) go 2 levels down, at least) but it will presumably explode in your face if you attempt to take the piss. Speaking of which:

### Caveats

I can think of at least these things that will make it not work:

* Nesting templates to stupid depths, as mentioned above
* Using a particular _@placeholder_ **more times than there are items in that list** - items are removed from the lists as they're subbed into the template. On that note:
* Using a _@placeholder_ **for which you have no items at all** - it blew up for me because of a stupid typo
* Circular templating - if you do this kind of thing

```yaml
templates:
  - all the @things

things:
  - some @stuff

stuff:
  - with @things
```

then you clearly cannot be helped

## Config

There's also
