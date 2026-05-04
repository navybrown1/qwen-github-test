// New York Gasoline Prices Data (May 2025 - May 2026)
// NOTE: This is SAMPLE DATA for dashboard demonstration purposes.
// Replace with verified EIA or AAA monthly data before publication.
// Source reference: U.S. Energy Information Administration (EIA), AAA Gas Prices

export const newYorkGasPrices = [
  { month: "May 2025", price: 3.45, change: 0 },
  { month: "Jun 2025", price: 3.52, change: 0.07 },
  { month: "Jul 2025", price: 3.68, change: 0.16 },
  { month: "Aug 2025", price: 3.59, change: -0.09 },
  { month: "Sep 2025", price: 3.42, change: -0.17 },
  { month: "Oct 2025", price: 3.38, change: -0.04 },
  { month: "Nov 2025", price: 3.29, change: -0.09 },
  { month: "Dec 2025", price: 3.15, change: -0.14 },
  { month: "Jan 2026", price: 3.22, change: 0.07 },
  { month: "Feb 2026", price: 3.35, change: 0.13 },
  { month: "Mar 2026", price: 3.48, change: 0.13 },
  { month: "Apr 2026", price: 3.62, change: 0.14 },
  { month: "May 2026", price: 3.58, change: -0.04 },
];

export const dataSource = {
  name: "Sample Data for Demonstration",
  note: "This data is for dashboard demonstration only. Replace with verified EIA or AAA monthly data before publication.",
  recommendedSources: [
    "U.S. Energy Information Administration (EIA) - https://www.eia.gov/petroleum/gasdiesel/",
    "AAA Gas Prices - https://gasprices.aaa.com/",
    "New York State Energy Research and Development Authority"
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
