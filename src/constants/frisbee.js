import Frisbee from 'frisbee';

let api = new Frisbee({
  baseURI: 'https://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  }
});
export const frisbeeApi = api;
