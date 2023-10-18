import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const USER_URL = "/user";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    userRegistration: build.mutation({
      query: (loginData) => ({
        url: `${USER_URL}/signup`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    userOwnProfile: build.query({
      query: () => ({
        url: `${USER_URL}/profile`,
        method: "GET",
      }),
      providesTags: [tagTypes.user, tagTypes.booking],
    }),

    updateUsersOwnProfile: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/profile`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    userChangePassword: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/change-password`,
        method: "PATCH",
        data: data,
      }),
    }),
  }),
});

export const {
  useUserLoginMutation,
  useUserRegistrationMutation,
  useUserOwnProfileQuery,
  useUpdateUsersOwnProfileMutation,
  useUserChangePasswordMutation,
} = userApi;
