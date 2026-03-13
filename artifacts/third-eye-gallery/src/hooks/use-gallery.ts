import { 
  useGetArtists, 
  useGetGalleryImages, 
  useGetArtPrints 
} from "@workspace/api-client-react";

// Re-exporting generated hooks for clean semantic imports within the frontend
export function useArtists() {
  return useGetArtists();
}

export function useGallery() {
  return useGetGalleryImages();
}

export function usePrints() {
  return useGetArtPrints();
}
