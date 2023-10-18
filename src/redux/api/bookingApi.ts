import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BOOKING_URL = "/booking";

export const bookingApi: any = baseApi.injectEndpoints({
  endpoints: (build) => ({
    tutorBooking: build.mutation({
      query: (data) => ({
        url: `${BOOKING_URL}`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.booking, tagTypes.user, tagTypes.tutor],
    }),
    cancelBooking: build.mutation({
      query: (id) => ({
        url: `${BOOKING_URL}/cancel/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.booking, tagTypes.user, tagTypes.tutor],
    }),

    ownBooking: build.query({
      query: () => ({
        url: `${BOOKING_URL}/get-my-bookings`,
        method: "GET",
      }),
      providesTags: [tagTypes.user, tagTypes.booking, tagTypes.tutor],
    }),
  }),
});

export const {
  useTutorBookingMutation,
  useOwnBookingQuery,
  useCancelBookingMutation,
} = bookingApi;
