CREATE TABLE IF NOT EXISTS `movie` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  `title` TEXT UNIQUE NOT NULL DEFAULT '',
  `country` TEXT NOT NULL DEFAULT '',
  `director` TEXT NOT NULL DEFAULT '',
  `year` INTEGER NOT NULL,
  `genre` TEXT NOT NULL DEFAULT ''
);

INSERT INTO `movie` (`title`, `country`, `director`, `year`, `genre`) VALUES ('test title', 'test country', 'test director', 2013, 'test genre');