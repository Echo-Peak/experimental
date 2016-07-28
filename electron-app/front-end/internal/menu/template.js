var template = [{
    label: '4',
    id: '4'
  }, {
    label: '5',
    id: '5'
  }, {
    label: '1',
    id: '1'
  }, {
    label: 'middle',
    id: '10',
    position: 'before=5'
  }, {
    label: 'end',
    id: '11'
  }, {
    label: 'front',
    id: '9'
  }, {
    label: '2',
    id: '2'
  },

  {
    label: 'stuff',
    id: '3',
    role: 'stuff',
    submenu: [{
      label: 'click',
      click: function() {
        console.log('clicked')
      },
      accelerator: 'Shift+B',
    }]
  }
];

module.exports = template
