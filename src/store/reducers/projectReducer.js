const iniState = {
  projects: [
    {id: '1', title: 'help me find peach', conent: 'contenido'},
    {id: '2', title: 'collect all the stars', conent: 'contenido'},
    {id: '3', title: 'egg hunt', conent: 'contenido'}
  ]
}

const projectReducer = (state = iniState, action) => {
  switch(action.type) {
    case 'CREATE_PROJECT':
      console.log('created_project', action.project)


  }
  return state;
}

export default projectReducer;