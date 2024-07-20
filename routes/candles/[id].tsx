import { PageProps } from "$fresh/server.ts";
import { getBrand, getCandle } from "../../database/db.ts";

export default function CandlePage(props: PageProps) {
  const id = parseInt(props.params.id);
  const candle = getCandle(id);
  if (!candle) {
    return <div>Candle not found!</div>
  }
  const brand = getBrand(candle.brandID);
  const descriptions = candle.scentDescription.map(item => <span>{item}</span>);
  return (
    <div>
      <h1>{candle.name}</h1>
      <div>
        <div>id: {props.params.id}</div>
        <div>brand: {brand?.name}</div>
        <div>size: {candle.size}</div>
        <div>form: {candle.form}</div>
        <div>season: {candle.season}</div>
        <div>holiday: {candle.holiday}</div>
        <div>scent description: {descriptions}</div>
      </div>
    </div>
  );
}

// TODO: 
// -display all data
// -take pictures and put them on desktop (as many as want at least 5)
