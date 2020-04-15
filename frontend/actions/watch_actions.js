import * as WatchAPIUtil from '../util/watch_api_util';

export const RECEIVE_WATCHES = "RECEIVE_WATCHES";
export const RECEIVE_WATCH = "RECEIVE_WATCH";
export const REMOVE_WATCH = "REMOVE_WATCH";

const receiveWatches = watches => ({
    type: RECEIVE_WATCHES,
    watches
})

const receiveWatch = watch => ({
    type: RECEIVE_WATCH,
    watch
})

const removeWatch = watchId =>({
    type: REMOVE_WATCH,
    watchId
})


export const createWatch = (watch) => dispatch => {
    return WatchAPIUtil.createWatch(watch)
        .then(watch => dispatch(receiveWatch(watch)));
}

export const fetchWatches = userId => dispatch => (
    WatchAPIUtil.fetchWatches(userId)
        .then(watches => dispatch(receiveWatches(watches)))
)

export const deleteWatch = watchId => dispatch => (
    WatchAPIUtil.deleteWatch(watchId)
        .then(watch => dispatch(removeWatch(watch)))
)