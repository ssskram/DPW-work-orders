import * as user from './user'
import * as types from './types'
import * as facilities from './facilities'
import * as myRequests from './myRequests'
import * as allRequests from './allRequests'
import * as openRequest from './openRequest'
import * as issues from './issues'

export interface ApplicationState {
    user: types.user,
    facilities: types.facilities,
    myRequests: types.myRequests,
    allRequests: types.allRequests
    openRequest: types.openRequest,
    issues: types.issues
}

export const reducers = {
    user: user.reducer,
    facilities: facilities.reducer,
    myRequests: myRequests.reducer,
    allRequests: allRequests.reducer,
    openRequest: openRequest.reducer,
    issues: issues.reducer
}

export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}