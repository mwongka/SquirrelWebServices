// ------ ACTIONS FOR INPUTBAR REDUCER --------- //
export function updateInput (newInput) {
    console.log(newInput, 'NEW');
  return {
    type: 'UPDATE_INPUT',
    newInput
  }
}

export function updateOwner (owner) {
  return {
    type: 'UPDATE_OWNER',
    owner
  }
}


// ----- SET INPUTBAR REDUCER INITIAL STATE ------ //
//>>>????? HOW TO INITIALIZE BEFORE ???? >>>>>//

const inputBarInitialState = {
  input: '',
  owner: '',
  // user: {},
  // friendsFollowing: [],
}

// ---- HOME INPUT BAR REDUCER FUNCTION -------- //

export default function inputBarReducer(state = inputBarInitialState, action) {
  switch(action.type) {
    case 'UPDATE_INPUT' :  
     return {
       ...state, 
       input: action.newInput,
     }

     case 'UPDATE_OWNER' :
      return {
        ...state,
        owner: action.owner,
      }

      default: 
      return state
  }
}