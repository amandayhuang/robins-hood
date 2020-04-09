export const createTrade = (trade) =>(
    $.ajax({
        url:`/api/users/${trade.user_id}/trades`,
        method: 'POST',
        data: { trade }
    })
)

export const fetchTrades = userId =>(
    $.ajax({
        url: `/api/users/${userId}/trades`,
        method: "GET"
    })
)