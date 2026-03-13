import { STATIC_ARTISTS, STATIC_GALLERY_IMAGES, STATIC_PRINTS } from "@/lib/static-data";

type StaticHookResult<T> = {
  data: T;
  isLoading: boolean;
  isError: boolean;
  error: null;
};

function buildStaticResult<T>(data: T): StaticHookResult<T> {
  return {
    data,
    isLoading: false,
    isError: false,
    error: null,
  };
}

export function useArtists() {
  return buildStaticResult(STATIC_ARTISTS);
}

export function useGallery() {
  return buildStaticResult(STATIC_GALLERY_IMAGES);
}

export function usePrints() {
  return buildStaticResult(STATIC_PRINTS);
}
