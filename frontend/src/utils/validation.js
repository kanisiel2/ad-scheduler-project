// frontend/src/utils/validation.js
export const isValidTimeRange = (start, end) => new Date(start) < new Date(end);