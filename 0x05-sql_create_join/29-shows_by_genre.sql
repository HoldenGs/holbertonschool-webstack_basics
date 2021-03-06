-- Show all shows with a genre or without a genre
SELECT tv_shows.title, tv_genres.name
FROM tv_shows
LEFT OUTER JOIN tv_show_genres
on tv_shows.id = tv_show_genres.show_id
LEFT OUTER JOIN tv_genres
ON tv_show_genres.genre_id = tv_genres.id
ORDER BY tv_shows.title ASC;
