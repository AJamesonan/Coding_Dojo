SELECT * FROM world.countries;
SELECT name, language, percentage 
FROM countries 
JOIN languages ON code = country_code
WHERE language = 'Slovene'
ORDER BY percentage DESC;

SELECT countries.name, count(cities.name) AS cities
FROM countries 
JOIN cities ON code = country_code
GROUP BY countries.name
ORDER BY cities DESC;

SELECT cities.name, cities.population, country_id 
FROM cities
WHERE country_id = 136 AND population > 500000
ORDER BY population DESC;

SELECT name, language, percentage
FROM countries
JOIN languages ON code = country_code
WHERE percentage > 89
ORDER BY percentage DESC;

SELECT name, surface_area, population
FROM countries
WHERE surface_area < 501 AND population > 100000;

SELECT name, government_form, capital, life_expectancy
FROM countries
WHERE government_form = 'Constitutional Monarchy' AND capital > 200 AND life_expectancy > 75;

SELECT countries.name AS country_name, cities.name AS city_name, cities.district, cities.population
FROM countries
JOIN cities ON countries.id = cities.country_id 
WHERE countries.name = 'Argentina' AND cities.district = 'Buenos Aires' AND cities.population > 500000;

SELECT countries.region, count(name) AS countries
FROM countries 
GROUP BY countries.region
ORDER BY countries DESC;