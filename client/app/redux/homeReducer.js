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

// export function updateUserFollowingFriends (userFriends) {
//   return {
//     type: 'UPDATE_USER_FRIENDS',
//     userFriends
//   }
// }

export function updateArticlesFromFriends (articlesFromFriends) {
  console.log(articlesFromFriends, 'inside reducer inceptioning')
  return {
    type: 'UPDATE_ARTICLES_FROM_FRIENDS',
    articlesFromFriends
  }
}

export function updateArticlesFromFriendsRef (ref) {
  return {
    type: 'UPDATE_ARTICLE_REF',
    ref,
  }
}

// ----- SET HOME REDUCER INITIAL STATE ------ //
//>>>????? HOW TO INITIALIZE BEFORE ???? >>>>>//

const homeInitialState = {
  user: {},
  articles: [],
  userArticles: [],
  userFollowingList: [],
  articlesFromFriends: [],
  articlesFromFreindsRef: {},
}

// ---- HOME REDUCER FUNCTION -------- //

export default function homeReducer(state = homeInitialState, action) {
  switch(action.type) {
    case 'UPDATE_USER' :  
     return {
       ...state, 
       user: action.user,
     }

     case 'UPDATE_ARTICLES' :  
      return {
        ...state, 
        articles: action.articles,
      }

      case 'UPDATE_USER_ARTICLES' :  
       return {
         ...state, 
         userArticles: action.userArticles,
      }

      // case 'UPDATE_USER_FRIENDS' :  
      //  return {
      //    ...state, 
      //    userFollowingList: action.userFriends,
      // }

      case 'UPDATE_ARTICLES_FROM_FRIENDS' :  
       return {
         ...state, 
         articlesFromFriends: action.articlesFromFriends,
      }

      case 'UPDATE_ARTICLE_REF' : 
         return {
          articlesFromFreindsRef: action.ref,
         }

      default: 
      return state
  }
}