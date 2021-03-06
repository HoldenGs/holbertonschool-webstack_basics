-- Show all shows with a genre
SELECT tv_genres.name, COUNT(tv_show_genres.show_id) AS number_shows
FROM tv_genres
LEFT OUTER JOIN tv_show_genres
ON tv_genres.id = tv_show_genres.genre_id
GROUP BY tv_genres.name
ORDER BY number_shows DESC;
