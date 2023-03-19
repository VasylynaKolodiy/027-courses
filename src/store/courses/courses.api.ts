import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {getHeaders} from "../../helpers";

export const coursesApi = createApi({
    reducerPath: 'courses/Api',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.wisey.app/api/v1",
        prepareHeaders: (headers) => {
            headers.set("Authorization", getHeaders());
            return headers;
        },
    }),

    endpoints: build => ({
        getCourses: build.query({
            query: () => ({
                url: '/core/preview-courses',
            })
        }),

        getCourse: build.query({
            query: (courseId: string) => ({
                url: `/core/preview-courses/${courseId}`,
            })
        }),
    })
})
export const {
    useGetCoursesQuery,
    useGetCourseQuery
} = coursesApi