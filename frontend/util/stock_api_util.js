export const fetchStock = stockId =>(
    $.ajax({
        url: `/api/stocks/${stockId}`,
        method: 'GET',
        async: false,
        data: stockId
    })
)