// import { render, screen } from '@testing-library/react';
// import WeatherDisplay from './WeatherDisplay';
// import { vi } from 'vitest';

// // Mock the API call
// vi.mock('../api/weatherApi', () => ({
//   fetchWeather: vi.fn(() => Promise.resolve({
//     name: 'Tokyo',
//     weather: [{ description: 'clear sky' }],
//     main: { temp: 25 }
//   })),
// }));

// test('renders weather information', async () => {
//   render(<WeatherDisplay city="Tokyo" />);
//   const cityName = await screen.findByText(/Tokyo/i);
//   const weatherDescription = await screen.findByText(/clear sky/i);
//   const temperature = await screen.findByText(/25/i);

//   expect(cityName).toBeInTheDocument();
//   expect(weatherDescription).toBeInTheDocument();
//   expect(temperature).toBeInTheDocument();