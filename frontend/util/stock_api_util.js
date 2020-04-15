export const fetchStock = stockId =>(
    $.ajax({
        url: `/api/stocks/${stockId}`,
        method: 'GET',
        async: false,
        data: stockId
    })
)

export const fetchAllStocks = () => (
    $.ajax({
        url: `/api/stocks/`,
        method: 'GET',
        async: false
    })
)