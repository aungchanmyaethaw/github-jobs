import axios from "axios";

const BASE_URL = "https://apis.camillerakoto.fr/fakejobs/jobs";

export const getJobs = async (searchTerm, isFullTime, location) => {
  const tempTitle = searchTerm ? `title=${searchTerm}` : "";
  const tempName = searchTerm ? `name=${searchTerm}` : "";
  const tempContent = searchTerm ? `content=${searchTerm}` : "";
  const tempFullTime = isFullTime ? `&fulltime=${isFullTime}` : "";
  const tempCity = location ? `&city=${location}` : "";
  const tempZipcode = location ? `&zipcode=${location}` : "";
  const tempCountry = location ? `&country=${location}` : "";
  try {
    if (location) {
      const [
        response1,
        response2,
        response3,
        response4,
        response5,
        response6,
        response7,
        response8,
        response9,
      ] = await axios.all([
        axios.get(`${BASE_URL}?${tempTitle}${tempFullTime}${tempCity}`),
        axios.get(`${BASE_URL}?${tempTitle}${tempFullTime}${tempZipcode}`),
        axios.get(`${BASE_URL}?${tempTitle}${tempFullTime}${tempCountry}`),
        axios.get(`${BASE_URL}?${tempName}${tempFullTime}${tempCity}`),
        axios.get(`${BASE_URL}?${tempName}${tempFullTime}${tempZipcode}`),
        axios.get(`${BASE_URL}?${tempName}${tempFullTime}${tempCountry}`),
        axios.get(`${BASE_URL}?${tempContent}${tempFullTime}${tempCity}`),
        axios.get(`${BASE_URL}?${tempContent}${tempFullTime}${tempZipcode}`),
        axios.get(`${BASE_URL}?${tempContent}${tempFullTime}${tempCountry}`),
      ]);
      if (response1.data.length > 0) {
        return response1.data;
      }
      if (response2.data.length > 0) {
        return response2.data;
      }
      if (response3.data.length > 0) {
        return response3.data;
      }
      if (response4.data.length > 0) {
        return response4.data;
      }
      if (response5.data.length > 0) {
        return response5.data;
      }
      if (response6.data.length > 0) {
        return response6.data;
      }
      if (response7.data.length > 0) {
        return response7.data;
      }
      if (response8.data.length > 0) {
        return response8.data;
      }
      if (response9.data.length > 0) {
        return response9.data;
      }
      return [];
    } else {
      const [response1, response2, response3] = await axios.all([
        axios.get(`${BASE_URL}?${tempTitle}${tempFullTime}`),
        axios.get(`${BASE_URL}?${tempName}${tempFullTime}`),
        axios.get(`${BASE_URL}?${tempContent}${tempFullTime}`),
      ]);
      if (response1.data.length > 0) {
        return response1.data;
      }
      if (response2.data.length > 0) {
        return response2.data;
      }
      if (response3.data.length > 0) {
        return response3.data;
      }
      return [];
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getSingleJob = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}?id=${id}`);
    return response.data[0];
  } catch (error) {
    throw new Error(error.message);
  }
};
