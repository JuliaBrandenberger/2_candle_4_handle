import { getAllCandles, getBrand } from "../database/db.ts";
import {Brand, Candle, Data} from "../database/candle-data.ts";

export default function ViewCandles() {
  const candles: readonly Candle[] = getAllCandles();
  const tableData = candles.map(item => {
    const {name, brandID, season, id, year, holiday} = item;
    const brand = getBrand(brandID);
    return (
      <tr>
        <td><a href={"/candles/" + id}>{name}</a></td>
        <td>{brand?.name}</td>
        <td>{season}</td>
        <td>{holiday}</td>
        <td>{year}</td>
      </tr>
    );
  });
  return (
    <div>
      <table>
        <tr>
          <th>NAME</th>
          <th>BRAND</th>
          <th>SEASON</th>
          <th>HOLIDAY</th>
          <th>YEAR</th>
        </tr>
        {tableData}
      </table>
      <a href="/">Back to Main</a>
    </div>
  );
}
