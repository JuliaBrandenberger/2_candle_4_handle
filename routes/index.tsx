export default function Home() {
  return (
    <div class="parent">
      <div class="sidebar">
        <h1 class="sidebar-title">Browse Candles</h1>
        <ul>
          <li>Candles in Alphabetical Order</li>
          <li>Candles by Season</li>
          <li>Candles by Holiday</li>
          <li>All Halloween Candles</li>
        </ul>
      </div>
      <div class="">
        <h1 class="">Welcome to Too Candle For Handle</h1>
        <h2>All the candle you can handle <span class="andmore">AND more!</span></h2>
        <p class="">A candle database for candle fanatics. </p>
        <ul>
          <li><a href="/add-candle">Add a Candle to Database</a></li>
          <li><a href="/add-brand">Add a Brand to Database</a></li>
          <li>View Candles</li>
        </ul>
        <div>
          <h1>What is this?</h1>
          <p>This is an online hub for candle collectors to showcase items in their collection and view the candles in others' collections.</p>
        </div>
      </div>
    </div>
  );
}
