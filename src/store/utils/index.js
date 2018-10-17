/* 
export const buildRequestActionTypes = (type, namespace) => ({
  [`${type}_REQUEST`]: `${namespace}/${type}_REQUEST`,
  [`${type}_SUCCESS`]: `${namespace}/${type}_SUCCESS`,
  [`${type}_FAILURE`]: `${namespace}/${type}_FAILURE`,
});

export const buildEventActionCreator = type => {
  return (name = '', data = {}) => ({
    type,
    payload: {},
    event: {
      name,
      data,
    },
  });
};
 */

export const buildActionCreator = type => {
  //console.log('buildActionCreator for::', type);

  return (payload = {}) => ({
    type,
    payload,
  });
};

const mapTypeToRequest = type => {
  const typeRequestObject = ({
    request: buildActionCreator(`${type}_REQUEST`),
    success: buildActionCreator(`${type}_SUCCESS`),
    failure: buildActionCreator(`${type}_FAILURE`),
  });
  //console.log('mapTypeToRequest::', typeRequestObject);
  return typeRequestObject;
};

export const buildRequestCreator = (type, requestCallback) => {
  //console.log('buildRequestCreator::', type);

  const requestObj = mapTypeToRequest(type);
  const requestCreator = (payload = {}) => dispatch => requestCallback({ requestObj, payload, dispatch });
  //console.log(requestObject, requestCreator);
  return requestCreator;
};
