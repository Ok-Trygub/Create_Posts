import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_BASE_URL} from '../../utils/API_CONFIG';


export const postsApi = createApi({
    reducerPath: 'postsApi',
    tagTypes: ['Posts'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),

    endpoints: (build) => ({
        getPosts: build.query({
            query: () => `posts`,
            providesTags: (result) => {
                return result
                    ? [
                        ...result.map(({id}) => ({type: 'Posts', id})),
                        {type: 'Posts', id: 'LIST'},
                    ]
                    : [{type: 'Posts', id: 'LIST'}]
            }
        }),

        getPostById: build.query({
            query: (postId = 1) => `posts/${postId}`
        }),


        createPost: build.mutation({
            query: (data) => ({
                url: 'posts',
                method: 'POST',
                body: {
                    userId: 1,
                    ...data
                }
            }),
            invalidatesTags: [{type: 'Posts', id: 'LIST'}]
        }),


        getPostComments: build.query({
            query: (postId = 1) => `posts/${postId}/comments`
        }),


        editPost: build.mutation({
            query: (data) => {
                const {id, ...dataPost} = data
                return {
                    url: `posts/${id}`,
                    method: 'PUT',
                    body: {
                        ...dataPost
                    }
                }
            },
            invalidatesTags: [{type: 'Posts', id: 'LIST'}]
        }),


        deletePost: build.mutation({
            query: (id = 1) => ({
                url: `posts/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [{type: 'Posts', id: 'LIST'}]
        })
    })
});


export const {
    useGetPostsQuery,
    useGetPostByIdQuery,
    useCreatePostMutation,
    useDeletePostMutation,
    useEditPostMutation,
    useGetPostCommentsQuery
} = postsApi;
