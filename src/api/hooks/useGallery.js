import { useQuery } from "@tanstack/react-query";
import { getInstagramPosts } from "../gallery/galleryService";

export const useInstagramPosts = () => {
  const { data: allInstagramPosts, isLoading: isAllInstagramPostsLoading } =
    useQuery({
      queryKey: ["instagramPosts"],
      queryFn: () => getInstagramPosts(),
    });

  return {
    allInstagramPosts,
    isAllInstagramPostsLoading,
  };
};
