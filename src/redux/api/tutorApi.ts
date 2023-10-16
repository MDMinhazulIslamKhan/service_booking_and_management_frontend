import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const TUTOR_URL = "/tutor";

export const tutorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    tutorLogin: build.mutation({
      query: (loginData) => ({
        url: `${TUTOR_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.tutor],
    }),
    allTutorsBuUser: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${TUTOR_URL}/all-tutors`,
          method: "GET",
          params: arg,
        };
      },
      providesTags: [tagTypes.tutor, tagTypes.booking],
    }),
    singleTutorByUser: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${TUTOR_URL}/single-tutor/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.tutor, tagTypes.booking],
    }),
  }),
});

export const {
  useTutorLoginMutation,
  useAllTutorsBuUserQuery,
  useSingleTutorByUserQuery,
} = tutorApi;
