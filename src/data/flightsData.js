import { v4 as uuidv4 } from 'uuid';

export const flights = [];

// Generate a random number between min (inclusive) and max (inclusive)
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Generate a random date string between today and 30 days later
const getRandomDate = () => {
  const today = new Date();
  const endDate = new Date();
  endDate.setDate(today.getDate() + 30); // 30 days later
  const randomDate = new Date(
    today.getTime() + Math.random() * (endDate.getTime() - today.getTime())
  );
  return randomDate.toISOString().split('T')[0];
};

for (let i = 0; i < 50; i++) {
  const id = uuidv4();
  const stops = getRandomNumber(0, 2);
  const duration = getRandomNumber(7, 30);
  const date = getRandomDate();
  const price = getRandomNumber(700, 3000);

  flights.push({ id, stops, duration, date, price });
}
