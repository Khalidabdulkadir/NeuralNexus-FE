// Central API configuration
export const API_BASE_URL = 'http://127.0.0.1:8000';

export const API_ENDPOINTS = {
  predictor: `${API_BASE_URL}/api/predictor/predict/`,
  survival: `${API_BASE_URL}/api/survival/predict-survival/`,
  imagePredict: `${API_BASE_URL}/api/image_predict/`,
  patients: `${API_BASE_URL}/api/patients/`,
};
