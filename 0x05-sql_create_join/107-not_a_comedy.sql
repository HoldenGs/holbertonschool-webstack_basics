-- Select all tv shows that aren't linked to Comedy
SELECT DISTINCT tv_shows.title
FROM tv_shows
LEFT OUTER JOIN tv_show_genres
ON tv_shows.id = tv_show_genres.show_id
LEFT OUTER JOIN tv_genres
ON tv_show_genres.genre_id = tv_genres.id
WHERE tv_genres.name != 'Comedy' OR tv_genres.name IS NULL
ORDER BY tv_shows.title ASC;
