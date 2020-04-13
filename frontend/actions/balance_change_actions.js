import * as BalanceChangeAPIUtil from '../util/balance_change_util';

export const RECEIVE_BALANCE_CHANGES = "RECEIVE_BALANCE_CHANGES";

const receiveBalanceChanges = (balance_changes) => ({
    type: RECEIVE_BALANCE_CHANGES,
    balance_changes
});


export const fetchBalanceChanges = userId => dispatch => {
    return BalanceChangeAPIUtil.fetchBalanceChanges(userId)
        .then(userId => dispatch(receiveBalanceChanges(userId)));
};
