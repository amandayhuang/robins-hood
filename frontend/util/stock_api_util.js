export const fetchStock = stockId =>(
    $.ajax({
        url: `/api/stocks/${stockId}`,
        method: 'GET',
        data: stockId
    })
)