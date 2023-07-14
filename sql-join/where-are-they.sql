select "line1",
       "cities"."name" as "cityName",
       "district",
       "countries"."name" as "countryName"
  from "cities"
  join "addresses" using ("cityId")
  join "countries" using ("countryId");
