import api from "./api";

export const getAchievements = () => api.get("/achievements")
export const claimAchievement = (data) => api.patch("/achievements/claim", data)