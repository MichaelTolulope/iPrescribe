
import { recentPatients } from "../data/data";

export const fetchRecentPatients = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return recentPatients;
};
