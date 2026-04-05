import { useQuery } from "@tanstack/react-query";
import { getLastActiveBanner } from "../banner/bannerService";

export const useGetLastActiveBanner = () => {
  const { data: lastActiveBanner, isLastActiveBannerLoading } = useQuery({
    queryKey: ["banner"],
    queryFn: () => getLastActiveBanner(),
  });

  return {
    lastActiveBanner,
    isLastActiveBannerLoading,
  };
};
