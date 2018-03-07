-- Select all rows with a non-empty name field
SELECT score, name
FROM second_table
WHERE name IS NOT NULL
ORDER BY score DESC;
