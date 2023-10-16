import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const FEEDBACK_URL = "/feedback";

export const feedbackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // getFeedbacks: build.query({
    //   query: () => {
    //     return {
    //       url: `${FEEDBACK_URL}`,
    //       method: "GET",
    //     };
    //   },
    //   providesTags: [tagTypes.feedback],
    // }),
    getFeedbacks: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${FEEDBACK_URL}`,
          method: "GET",
          params: arg,
        };
      },
      providesTags: [tagTypes.feedback],
    }),
  }),
});

export const { useGetFeedbacksQuery } = feedbackApi;
