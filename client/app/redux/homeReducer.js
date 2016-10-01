// ------ ACTIONS FOR USER REDUCER --------- //
export function updateUser (user) {
  return {
    type: 'UPDATE_USER',
    user
  }
}

export function updateArticles (articles) {
  return {
    type: 'UPDATE_ARTICLES',
    articles
  }
}

export function updateUserArticles (userArticles) {
  return {
    type: 'UPDATE_USER_ARTICLES',
    userArticles
  }
}

export function updateUserFriends (userFriends) {
  return {
    type: 'UPDATE_USER_FRIENDS',
    userFriends
  }
}

export function updateArticlesFromFriends (articlesFromFriends) {
  return {
    type: 'UPDATE_ARTICLES_FROM_FRIENDS',
    articlesFromFriends
  }
}

// ----- SET HOME REDUCER INITIAL STATE ------ //
//>>>????? HOW TO INITIALIZE BEFORE ???? >>>>>//

const homeInitialState = {
  user: {},
  articles: [],
  userArticles: [],
  userFriendsList: [],
  articlesFromFriends: [],
}

// ---- HOME REDUCER FUNCTION -------- //

export default function homeReducer(state = homeInitialState, action) {
  switch(action.type) {
    case 'UPDATE_USER' :  
     return {
       ...state, 
       user: action.user,
     }

     case 'UPDATE_USER_ARTICLES' :  
      return {
        ...state, 
        articles: action.articles,
      }

      case 'UPDATE_USER_ARTICLES' :  
       return {
         ...state, 
         userArticles: action.userArticles,
      }

      case 'UPDATE_USER_ARTICLES' :  
       return {
         ...state, 
         userArticles: action.userFriends,
      }

       case 'UPDATE_ARTICLES_FROM_FRIENDS' :  
       return {
         ...state, 
         ArticlesFromFriends: action.ArticlesFromFriends,
      }
  }
}