import React from "react";

export const fetchRecommendations = async (userID) => {
    try {
      init_api();
      await API.get(`/api/course/recommendations/${userID}/`);
      await API.get(`/api/career/recommendations/${userID}/`);
      await API.get(`/api/college/recommendations/${userID}/`);
      await API.post(`/mark-recommendations-completed/${userID}/`);
    } catch (error) {
      console.error(error);
    }
  };
  