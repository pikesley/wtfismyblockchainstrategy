describe('Generated page', function() {
  it('populates the elements', function() {
    loadFixtures('thing.html');
    data = {
      'adjective': [ 'angry' ],
      'containers': [ 'buckets' ],
      'headings': [ 'My Generic Thing shall be' ],
      'responses': [ 'Nope, try again' ],
      'templates': [ 'to put @things into @containers' ],
      'things': [ '@adjective cats' ]
    }
    populate(data)
    expect($('#title').text()).toEqual('My Generic Thing shall be')
    expect($('#thing').text()).toEqual('to put angry cats into buckets')
    expect($('#generate').text()).toEqual('Nope, try again')
  })
})
