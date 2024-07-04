import axios from 'axios';

const API_KEY = '167cd3543b7edd44d042d14bd29f0854';

export const fetchWeather = async (city: string) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data: ", error);
    throw error;
  }
};
