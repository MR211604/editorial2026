import { useQuery } from "@tanstack/react-query";
import { getActiveBanner } from "../banner/bannerService";

export const useGetActiveBanner = () => {
  const { data: activeBanner, isLoading: isActiveBannerLoading } = useQuery({
    queryKey: ["activeBanner"],
    queryFn: () => getActiveBanner(),
  });

  return {
    activeBanner,
    isActiveBannerLoading,
  };
};
