import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const TUTOR_URL = "/tutor";

export const tutorApi: any = baseApi.injectEndpoints({
  endpoints: (build) => ({
    tutorLogin: build.mutation({
      query: (loginData: any) => ({
        url: `${TUTOR_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.tutor],
    }),
    tutorRegistration: build.mutation({
      query: (registrationData) => ({
        url: `${TUTOR_URL}/signup`,
        method: "POST",
        data: registrationData,
      }),
      invalidatesTags: [tagTypes.tutor],
    }),
    allTutorsByUser: build.query({
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
      query: (id: string) => ({
        url: `${TUTOR_URL}/single-tutor/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.tutor, tagTypes.booking],
    }),

    tutorOwnProfile: build.query({
      query: () => ({
        url: `${TUTOR_URL}/profile`,
        method: "GET",
      }),
      providesTags: [tagTypes.tutor, tagTypes.booking],
    }),

    updateOwnProfile: build.mutation({
      query: (data) => ({
        url: `${TUTOR_URL}/profile/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.tutor],
    }),

    tutorChangePassword: build.mutation({
      query: (data) => ({
        url: `${TUTOR_URL}/change-password`,
        method: "PATCH",
        data: data,
      }),
    }),
  }),
});

export const {
  useTutorLoginMutation,
  useAllTutorsByUserQuery,
  useSingleTutorByUserQuery,
  useTutorRegistrationMutation,
  useTutorOwnProfileQuery,
  useUpdateOwnProfileMutation,
  useTutorChangePasswordMutation,
} = tutorApi;
