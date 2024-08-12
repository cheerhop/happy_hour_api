# Example happy hour API

## Sample Requests:
- Search for bars: {q: "bar"}
- Search for pizza places: {q: "applebees"}

## Sample Response for [Applebees happy hour](https://cheerhop.com/us/ca/santa-ana/applebees-grill-bar) && [BJ's Happy hour](https://cheerhop.com/us/ca/anaheim/bjs-restaurant):
```
JSON
{
  "locations": [
    {
      "street": "Buford, WY 82052, USA",
      "lat": 41.1236875,
      "lng": -105.3022921
    },
    {
      "street": "Buellton, CA 93427, USA",
      "lat": 34.613597,
      "lng": -120.1926505
    }
  ],
  "venues": [
    {
      "name": "Applebees Grill & Bar",
      "locations": [
        {
          "city": "Santa Ana",
          "state": "ca",
          "lat": 33.86735899088974,
          "lng": -117.7474300155228,
          "slug": "applebees-grill-bar",
          "url": "https://cheerhop.com/us/ca/santa-ana/applebees-grill-bar"
        }
      ]
    },
    {
      "name": "BJ’s Restaurant & Brewhouse",
      "locations": [
        {
          "city": "ANAHEIM",
          "state": "ca",
          "lat": 33.8672432,
          "lng": -117.7474622,
          "slug": "bjs-restaurant-brewhouse",
          "url": "https://cheerhop.com/us/ca/anaheim/bjs-restauran"
        }
      ]
    }
  ]
}
```
