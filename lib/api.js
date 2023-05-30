const fetcher = async ({ url, method, body, json = true }) => {
    const res = await fetch(url, {
        method,
        body: body && JSON.stringify(body),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
    if (!res.ok) {
        throw new Error('API Error')
    }
    const data = json ? await res.json() : null
    return data
}

export const sendEmail = (email) => {
    return fetcher({ url: '/api/sendemail', method: 'post', body: email, json: false })
}