const API_URL = {
  LOGIN: process.env.REACT_APP_LOGIN_URL,
  CREATE_MEMBERSHIP: process.env.REACT_APP_CREATE_MEMBERSHIP_URL,
  SEARCH_MEMBERSHIP: process.env.REACT_APP_SEARCH_MEMBERSHIP_URL,
  PARTICIPANT_LIST: process.env.REACT_APP_GET_PARTICIPANT_LIST,
  PARTICIPANTS_BY_MOSQUE_AND_SESSION:
    process.env.REACT_APP_GET_PARTICIPANT_LIST_BY_MOSQUE_AND_SESSION,
  MOSQUE_LIST_BY_ACTIVE_SESSION: process.env.REACT_APP_GET_MOSQUE_LIST_BY_ACTIVE_SESSION,
};

export { API_URL };