import { FreshContext } from "$fresh/server.ts";

// Jokes courtesy of https://punsandoneliners.com/randomness/programmer-jokes/
const JOKES = [
  "Why do Java developers often wear glasses? They can't C#.",
  "A SQL query walks into a bar, goes up to two tables and says “can I join you?”",
  "Wasn't hard to crack Forrest Gump's password. 1forrest1.",
  "I love pressing the F5 key. It's refreshing.",
  "Called IT support and a chap from Australia came to fix my network connection.  I asked “Do you come from a LAN down under?”",
  "There are 10 types of people in the world. Those who understand binary and those who don't.",
  "Why are assembly programmers often wet? They work below C level.",
  "My favourite computer based band is the Black IPs.",
  "What programme do you use to predict the music tastes of former US presidential candidates? An Al Gore Rhythm.",
  "An SEO expert walked into a bar, pub, inn, tavern, hostelry, public house.",
];

export const handler = (_req: Request, _ctx: FreshContext): Response => {
  const randomIndex = Math.floor(Math.random() * JOKES.length);
  const body = JOKES[randomIndex];
  return new Response(body);
};

// An api is a way for someone to interact with your program
// in this program , its an array of jokes, the way a programmer can interact
// you go to particular url and you will see a joke
// that's how ppl can interact with theser jokes

// for candle database, if someone goes to candle/add and passes in approrpaite
// info that's how a user interacts with my program
// an artibrary user can't just go in and add a candle
// there has to be a method that the program provides for the user to do that