import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { pause } from "../thunks/pause";
import { faker } from "@faker-js/faker";

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    fetchFn: async (...args) => {
      //DEV ONLY
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      removePhoto: builder.mutation({
        query: () => {
          return {
            url: "photos",
            method: "DELETE",
          };
        },
      }),
      addPhoto: builder.mutation({
        query: (album) => {
          return {
            url: "photos",
            method: "POST",
            body: {
              url: faker.image.imageUrl(),
              albumId: album.id,
            },
          };
        },
      }),
      fetchPhotos: builder.query({
        query: (album) => {
          return {
            url: "photos",
            params: {
              albumId: album.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} = photosApi;
export { photosApi };
