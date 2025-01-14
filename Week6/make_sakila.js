db = connect('mongodb://localhost/sakila');
db.film.insertMany ([
	{
		"_id" : 69,
		"title" : "BEVERLY OUTLAW",
		"description" : "A Fanciful Documentary of a Womanizer And a Boat who must Defeat a Madman in The First Manned Space Station",
        "actors" : [13],
        "release_year" : 2006,
		"length" : 85,
        "category": 5,
		"rating" : "R",
		"special_features" : "Trailers",
	},
	{
		"_id" : 199,
		"title" : "CUPBOARD SINNERS",
		"description" : "A Emotional Reflection of a Frisbee And a Boat who must Reach a Pastry Chef in An Abandoned Amusement Park",
        "actors" : [3,26,35],
        "release_year" : 2006,
		"length" : 56,
        "category": 14,
		"rating" : "NC-17",
		"special_features" : "Behind the Scenes",
	},
	{
		"_id" : 232,
		"title" : "DIRTY ACE",
		"description" : "A Action-Packed Character Study of a Forensic Psychologist And a Girl who must Build a Dentist in The Outback",
        "actors" : [55,57],
		"release_year" : 2006,
		"length" : 147,
        "category":11,
		"rating" : "PG-13",
		"special_features" : "Commentaries,Deleted Scenes,Behind the Scenes",
	},
	{
		"_id" : 309,
		"title" : "FEUD FROGMEN",
		"description" : "A Brilliant Reflection of a Database Administrator And a Mad Cow who must Chase a Woman in The Canadian Rockies",
        "actors" : [131,4,36],
		"release_year" : 2006,
		"length" : 98,
        "category": 11,
		"rating" : "R",
		"special_features" : "Trailers,Commentaries,Deleted Scenes,Behind the Scenes",
	},
	{
		"_id" : 310,
		"title" : "FEVER EMPIRE",
		"description" : "A Insightful Panorama of a Cat And a Boat who must Defeat a Boat in The Gulf of Mexico",
        "actors" : [13,36],
		"release_year" : 2006,
		"length" : 158,
        "category": 14,
		"rating" : "R",
		"special_features" : "Commentaries,Deleted Scenes",
	},
	{
		"_id" : 333,
		"title" : "FREAKY POCUS",
		"description" : "A Fast-Paced Documentary of a Pastry Chef And a Crocodile who must Chase a Squirrel in The Gulf of Mexico",
        "actors" : [13,26,36],
		"release_year" : 2006,
		"length" : 126,
        "category": 11,
		"rating" : "NC-17",
		"special_features" : "Trailers,Behind the Scenes",
	},
	{
		"_id" : 355,
		"title" : "GHOSTBUSTERS ELF",
		"description" : "A Thoughtful Epistle of a Dog And a Feminist who must Chase a Composer in Berlin",
        "actors" : [2,101,26],
		"release_year" : 2006,
		"length" : 101,
        "category": 14,
		"rating" : "R",
		"special_features" : "Trailers,Deleted Scenes,Behind the Scenes",
	},
	{
		"_id" : 381,
		"title" : "GRINCH MASSAGE",
		"description" : "A Intrepid Display of a Madman And a Feminist who must Pursue a Pioneer in The First Manned Space Station",
        "actors" : [131,55],
		"release_year" : 2006,
		"length" : 150,
        "category": 5,
		"rating" : "NC-17",
		"special_features" : "Trailers",
	},
	{
		"_id" : 424,
		"title" : "HOLOCAUST HIGHBALL",
		"description" : "A Awe-Inspiring Yarn of a Composer And a Man who must Find a Robot in Soviet Georgia",
        "actors" : [43,3],
		"release_year" : 2006,
		"length" : 149,
        "category": 14,
		"rating" : "R",
		"special_features" : "Deleted Scenes",
	},
	{
		"_id" : 493,
		"title" : "KANE EXORCIST",
		"description" : "A Epic Documentary of a Composer And a Robot who must Overcome a Car in Berlin",
        "actors" : [36,73],
		"release_year" : 2006,
		"length" : 92,
        "category": 14,
		"rating" : "R",
		"special_features" : "Trailers,Commentaries",
	},
	{
		"_id" : 938,
		"title" : "VELVET TERMINATOR",
		"description" : "A Lacklusture Tale of a Pastry Chef And a Technical Writer who must Confront a Crocodile in An Abandoned Amusement Park",
        "actors" : [101],
		"release_year" : 2006,
		"length" : 173,
        "category": 11,
		"rating" : "NC-17",
		"special_features" : "Behind the Scenes",
	}
]);
db.actor.insertMany ([
    {
        "_id" : 2,
        "first_name" : "NICK",
        "last_name" : "WAHLBERG",
    },
    {
        "_id" : 3,
        "first_name" : "ED",
        "last_name" : "CHASE",
    },
    {
        "_id" : 4,
        "first_name" : "JENNIFER",
        "last_name" : "DAVIS",
    },
    {
        "_id" : 13,
        "first_name" : "UMA",
        "last_name" : "WOOD",
    },
    {
        "_id" : 26,
        "first_name" : "RIP",
        "last_name" : "CRAWFORD",
    },
    {
        "_id" : 35,
        "first_name" : "JUDY",
        "last_name" : "DEAN",
    },
    {
        "_id" : 36,
        "first_name" : "BURT",
        "last_name" : "DUKAKIS",
    },
    {
        "_id" : 40,
        "first_name" : "JOHNNY",
        "last_name" : "CAGE",
    },
    {
        "_id" : 43,
        "first_name" : "KIRK",
        "last_name" : "JOVOVICH",
    },
    {
        "_id" : 55,
        "first_name" : "FAY",
        "last_name" : "KILMER",
    },
    {
        "_id" : 57,
        "first_name" : "JUDE",
        "last_name" : "CRUISE",
    },
    {
        "_id" : 73,
        "first_name" : "GARY",
        "last_name" : "PENN",
    },
    {
        "_id" : 101,
        "first_name" : "UMA",
        "last_name" : "DAVIS",
    },
    {
        "_id" : 131,
        "first_name" : "JANE",
        "last_name" : "JACKMAN",
    }
]);
db.category.insertMany ([
    {
        "_id" : 1,
        "name" : "Action"
    },
    {
        "_id" : 2,
        "name" : "Animation"
    },
    {
        "_id" : 3,
        "name" : "Children"
    },
    {
        "_id" : 4,
        "name" : "Classics"
    },
    {
        "_id" : 5,
        "name" : "Comedy"
    },
    {
        "_id" : 6,
        "name" : "Documentary"
    },
    {
        "_id" : 7,
        "name" : "Drama"
    },
    {
        "_id" : 8,
        "name" : "Family"
    },
    {
        "_id" : 9,
        "name" : "Foreign"
    },
    {
        "_id" : 10,
        "name" : "Games"
    },
    {
        "_id" : 11,
        "name" : "Horror"
    },
    {
        "_id" : 12,
        "name" : "Music"
    },
    {
        "_id" : 13,
        "name" : "New"
    },
    {
        "_id" : 14,
        "name" : "Sci-Fi"
    },
    {
        "_id" : 15,
        "name" : "Sports"
    },
    {
        "_id" : 16,
        "name" : "Travel"
    }
]);
