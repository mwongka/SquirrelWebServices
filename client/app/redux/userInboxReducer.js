// ------ ACTIONS FOR USERINBOX REDUCER --------- //
export function updateSortedArticlesByDate (sortedArticles) {
  return {
    type: 'UPDATE_SORTED_USER_ARTICLES',
    sortedArticles
  }
}


// ----- SET HOME REDUCER INITIAL STATE ------ //
//>>>????? HOW TO INITIALIZE BEFORE ???? >>>>>//

const userInboxInitialState = {
  sortedUserArticles: [],
}

// ---- HOME REDUCER FUNCTION -------- //

export default function homeReducer(state = userInboxInitialState, action) {
  switch(action.type) {
    case 'UPDATE_SORTED_USER_ARTICLES' :  
     return {
       ...state, 
       user: action.sortedArticles,
     }

      default: 
      return state
  }
}