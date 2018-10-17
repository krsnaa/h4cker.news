import hackerNewsApi from 'services/hackerNewsApi';
import { buildRequestCreator } from 'store/utils';

const NS = '@hackerNewsReader/story';

export const actionTypes = {
  FETCH_STORY_IDS: `${NS}/FETCH_STORY_IDS`,
  FETCH_STORIES: `${NS}/FETCH_STORIES`,
};

const actions = {

  fetchStoryIds: buildRequestCreator(actionTypes.FETCH_STORY_IDS, ({ requestObj, payload, dispatch }) => {
    //console.log('fetchStoryIds()::', requestObj, payload, dispatch);
    
    dispatch(requestObj.request(payload));
    //return hackerNewsApi.getTopStoryIds()
    //return hackerNewsApi.getTopStoryIds()
    return hackerNewsApi.getNewStoryIds()
      .then(storyIds => {
        dispatch(requestObj.success({ storyIds }));
        dispatch(actions.fetchStories({ storyIds, page: 0 }));
        return storyIds;
      })
      .catch(err => dispatch(requestObj.failure(err)));
  }),

  fetchStories: buildRequestCreator(actionTypes.FETCH_STORIES, ({ requestObj, payload, dispatch }) => {
    //console.log('fetchStories()::', requestObj, payload, dispatch);

    const { storyIds, page } = payload;
    dispatch(requestObj.request(payload));
    return hackerNewsApi.getStoriesByPage(storyIds, page)
      .then(stories => dispatch(requestObj.success({ stories })))
      .catch(err => dispatch(requestObj.failure(err)));
  }),
};

export default actions;
