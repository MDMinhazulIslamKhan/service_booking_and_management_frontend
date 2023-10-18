import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BOOKING_URL = "/booking";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    tutorBooking: build.mutation({
      query: (data) => ({
        url: `${BOOKING_URL}`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.booking, tagTypes.user, tagTypes.tutor],
    }),
  }),
});

export const { useTutorBookingMutation } = bookingApi;
