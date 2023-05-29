import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'x-access-token': import.meta.env.VITE_X_ACCESS_TOKEN,
}

const baseUrl = 'https://api.coinranking.com/v2'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (limit) => createRequest(`/coins?limit=${limit}`)
        })
    })
})

export const {
    useGetCryptosQuery
} = cryptoApi;