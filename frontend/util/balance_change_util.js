export const fetchBalanceChanges = userId => (
    $.ajax({
        url: `/api/users/${userId}/balance_changes`,
        method: 'GET'
    })
)