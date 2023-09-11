select "countries"."name" as "country",
       count("countryId") as "totalCities"
  from "cities"
  join "countries" using ("countryId")
  group by "countryId"
  order by "countries"."name" desc;
