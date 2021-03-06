import { combineReducers } from 'redux';
import uiReducer from './ui.reducer';
import articleReducer from './articles.reducer';
import authReducer from './auth.reducer';
import loginReducer from './users/login.reducer';
import resetPasswordReducer from './resetPassword.reducer';
import applyPasswordReducer from './applyPassword.reducer';
import author from './authorprofile.reducer';
import profileReducer from './profile.reducer';
import likeAndDislike from './likeAndDislike.reducer';
import notificationsReducer from './notifications.reducer';

import searchReducer from './article/search.reducer';
import optInOptOutEmailReducer from './optInOptOutEmail.reducer';
import optInOptOutAppReducer from './optInOptOutApp.reducer';
import bookmarkedArticles from './bookmarks.reducer';
import ratingReducer from './ratingArticle/rating.reducer';
import chatReducer from './users/chat.reducers';

export default combineReducers({
  ui: uiReducer,
  article: articleReducer,
  auth: authReducer,
  login: loginReducer,
  resetPassword: resetPasswordReducer,
  applyPassword: applyPasswordReducer,
  author,
  profile: profileReducer,
  search: searchReducer,
  optInOptOutApp: optInOptOutAppReducer,
  optInOptOutEmail: optInOptOutEmailReducer,
  bookmarkedArticles,
  likeAndDislike,
  rating: ratingReducer,
  chats: chatReducer,
  allNotifications: notificationsReducer,
});
