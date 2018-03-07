-- SELECT all cities rows with a states_id name matching california
SELECT id, name
FROM cities
WHERE  state_id = (
    SELECT id
    FROM states
    WHERE name = 'California'
)
ORDER BY id ASC;
