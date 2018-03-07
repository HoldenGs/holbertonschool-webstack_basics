-- List rows in second_table by Top score descending
SELECT score, name
FROM second_table
WHERE score >= 10
ORDER BY score DESC;