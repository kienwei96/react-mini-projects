let intitialState = {
    lightValues: [
      { name: 'off', color: 'rgba(0,0,0,1)', action: 'SET_OFF' },
      { name: 'low', color: 'rgba(0,0,0,.6)', action: 'SET_LOW' },
      { name: 'med', color: 'rgba(0,0,0,.4)', action: 'SET_MED' },
      { name: 'high', color: 'rgba(0,0,0,.1)', action: 'SET_HIGH' }
    ], 
    activeLight:{name: 'off', color: 'rgba(0,0,0,1)'},
    numberOfClicks: 0
  }


  export default intitialState;