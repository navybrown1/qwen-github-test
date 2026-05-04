// New York Gasoline Prices Data (May 2025 - May 2026)
// Verified public data sources:
// - NYSERDA Monthly Average Motor Gasoline Prices, New York Statewide regular grade, cents/gallon.
// - EIA Weekly New York Regular Reformulated Retail Gasoline Prices for April 2026, averaged from weekly values.
// - AAA Gas Prices, New York regular current average for May 3, 2026.
// Notes:
// - NYSERDA monthly data is available through March 2026 as of the 04/07/2026 update.
// - April 2026 is an official EIA weekly-derived monthly estimate: (3.958 + 3.989 + 3.907 + 4.049) / 4 = 3.976.
// - May 2026 is not a completed monthly average yet. It is the AAA current New York regular average as of 05/03/2026.

const rawGasPriceData = [
  { month: "May 2025", price: 3.042, source: "NYSERDA monthly statewide average" },
  { month: "Jun 2025", price: 3.065, source: "NYSERDA monthly statewide average" },
  { month: "Jul 2025", price: 3.079, source: "NYSERDA monthly statewide average" },
  { month: "Aug 2025", price: 3.072, source: "NYSERDA monthly statewide average" },
  { month: "Sep 2025", price: 3.129, source: "NYSERDA monthly statewide average" },
  { month: "Oct 2025", price: 3.037, source: "NYSERDA monthly statewide average" },
  { month: "Nov 2025", price: 3.039, source: "NYSERDA monthly statewide average" },
  { month: "Dec 2025", price: 2.986, source: "NYSERDA monthly statewide average" },
  { month: "Jan 2026", price: 2.879, source: "NYSERDA monthly statewide average" },
  { month: "Feb 2026", price: 2.882, source: "NYSERDA monthly statewide average" },
  { month: "Mar 2026", price: 3.482, source: "NYSERDA monthly statewide average" },
  { month: "Apr 2026", price: 3.976, source: "EIA weekly New York regular reformulated average" },
  { month: "May 2026", price: 4.453, source: "AAA New York current average, 05/03/2026", partial: true },
];

export const newYorkGasPrices = rawGasPriceData.map((item, index, data) => ({
  ...item,
  change: index === 0 ? 0 : Number((item.price - data[index - 1].price).toFixed(3)),
}));

export const dataSource = {
  name: "Verified Public Gasoline Price Data",
  note: "Monthly values from May 2025 through March 2026 use NYSERDA statewide regular-grade gasoline averages. April 2026 uses an EIA weekly-derived average. May 2026 is the current AAA New York regular average as of 05/03/2026, not a completed monthly average.",
  recommendedSources: [
    "NYSERDA Monthly Average Motor Gasoline Prices - https://www.nyserda.ny.gov/Energy-Prices/Motor-Gasoline/Monthly-Average-Motor-Gasoline-Prices",
    "EIA Weekly New York Regular Reformulated Retail Gasoline Prices - https://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?f=W&n=PET&s=EMM_EPMRR_PTE_SNY_DPG",
    "AAA Gas Prices, New York - https://gasprices.aaa.com/?state=NY"
  ]
};

// Calculate summary statistics
export const calculateSummary = (data) => {
  const prices = data.map(d => d.price);
  const startPrice = prices[0];
  const endPrice = prices[prices.length - 1];
  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);
  const overallChange = endPrice - startPrice;
  const overallChangePercent = ((overallChange / startPrice) * 100).toFixed(2);
  
  return {
    startPrice: startPrice.toFixed(2),
    endPrice: endPrice.toFixed(2),
    highestPrice: highestPrice.toFixed(2),
    lowestPrice: lowestPrice.toFixed(2),
    overallChange: overallChange.toFixed(2),
    overallChangePercent,
  };
};
