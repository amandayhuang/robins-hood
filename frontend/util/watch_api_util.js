export const createWatch = (watch) => (
    $.ajax({
        url: `/api/users/${watch.user_id}/watches`,
        method: 'POST',
        data: { watch }
    })
)

export const fetchWatches = userId => (
    $.ajax({
        url: `/api/users/${userId}/watches`,
        method: "GET"
    })
)

export const deleteWatch = (watchId) => (
    $.ajax({
        url: `/api/watches/${watchId}`,
        method: 'DELETE'
    })
)