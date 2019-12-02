import React from 'react';


const initialState = {

    users: {
        login: false,
        name: null,
        favorites: {
            movies: [],
            series: [],
            books: [],
        }
    },

    movies: {
        upcoming: [
            {
                popularity: 243.884,
                vote_count: 5169,
                video: false,
                poster_path: "/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
                id: 429617,
                adult: false,
                backdrop_path: "/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
                original_language: "en",
                original_title: "Spider-Man: Far from Home",
                genre_ids: [
                    28,
                    12,
                    878
                ],
                title: "Spider-Man: Far from Home",
                vote_average: 7.6,
                overview: "Peter Parker and hid friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural didasters and destruction throughout the continent.",
                release_date: "2019-06-28"
            },
            {
                popularity: 372.496,
                vote_count: 339,
                video: false,
                poster_path: "/qdfARIhgpgZOBh3vfNhWS4hmSo3.jpg",
                id: 330457,
                adult: false,
                backdrop_path: "/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg",
                original_language: "en",
                original_title: "Frozen II",
                genre_ids: [
                    12,
                    16,
                    35,
                    10402,
                    10751
                ],
                title: "Frozen II",
                vote_average: 7,
                overview: "Elsa, Anna, Kridtoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.",
                release_date: "2019-11-20"
            },
            {
                popularity: 187.622,
                vote_count: 5994,
                video: false,
                poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
                id: 475557,
                adult: false,
                backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
                original_language: "en",
                original_title: "Joker",
                genre_ids: [
                    80,
                    18,
                    53
                ],
                title: "Joker",
                vote_average: 8.4,
                overview: "During the 1980s, a failed stand-up comedian id driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
                release_date: "2019-10-02"
            },
            {
                popularity: 204.545,
                vote_count: 2790,
                video: false,
                poster_path: "/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
                id: 466272,
                adult: false,
                backdrop_path: "/nGJpQCAn2NKeDoEflLI5DIvsqoQ.jpg",
                original_language: "en",
                original_title: "Once Upon a Time... in Hollywood",
                genre_ids: [
                    35,
                    18,
                    53
                ],
                title: "Once Upon a Time... in Hollywood",
                vote_average: 7.6,
                overview: "A faded televidion actor and hid stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
                release_date: "2019-07-25"
            },
            {
                popularity: 101.575,
                vote_count: 3698,
                video: false,
                poster_path: "/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
                id: 420818,
                adult: false,
                backdrop_path: "/nRXO2SnOA75OsWhNhXstHB8ZmI3.jpg",
                original_language: "en",
                original_title: "The Lion King",
                genre_ids: [
                    12,
                    18
                ],
                title: "The Lion King",
                vote_average: 7.1,
                overview: "Simba idolizes hid father, King Mufasa, and takes to heart hid own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of hid own. The battle for Pride Rock id ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what id rightfully hid.",
                release_date: "2019-07-12"
            },
            {
                popularity: 158.394,
                vote_count: 700,
                video: false,
                poster_path: "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
                id: 290859,
                adult: false,
                backdrop_path: "/riTANvQ8GKmQbgtC1ps3OfkU43A.jpg",
                original_language: "en",
                original_title: "Terminator: Dark Fate",
                genre_ids: [
                    28,
                    878
                ],
                title: "Terminator: Dark Fate",
                vote_average: 6.3,
                overview: "Decades after Sarah Connor prevented Judgment Day, a lethal new Terminator id sent to eliminate the future leader of the residtance. In a fight to save mankind, battle-hardened Sarah Connor teams up with an unexpected ally and an enhanced super soldier to stop the deadliest Terminator yet.",
                release_date: "2019-10-23"
            },
            {
                popularity: 135.746,
                vote_count: 10,
                video: false,
                poster_path: "/4I0CQfnMy6sRR7QhgqsXR16Tmid.jpg",
                id: 645541,
                adult: false,
                backdrop_path: "/sxPycUAaLJJGq2lhhgzR96ePaO0.jpg",
                original_language: "en",
                original_title: "Ellipse",
                genre_ids: [
                    878
                ],
                title: "Ellipse",
                vote_average: 3.6,
                overview: "A man and hid dog are stranded on a volatile, oval-shaped planet and are forced to adapt and escape before time destroys them both.",
                release_date: "2019-11-05"
            },
            {
                popularity: 111.632,
                vote_count: 481,
                video: false,
                poster_path: "/zBhv8rsLOfpFW2M5b6wW78Uoojs.jpg",
                id: 540901,
                adult: false,
                backdrop_path: "/mBBJ3N3an8FLkp0ZpGgIJwHKhBP.jpg",
                original_language: "en",
                original_title: "Hustlers",
                genre_ids: [
                    35,
                    80,
                    18
                ],
                title: "Hustlers",
                vote_average: 6.2,
                overview: "A crew of savvy former strip club employees band together to turn the tables on their Wall Street clients.",
                release_date: "2019-09-12"
            },
            {
                popularity: 110.353,
                vote_count: 686,
                video: false,
                poster_path: "/fapXd3v9qTcNBTm39ZC4KUVQDNf.jpg",
                id: 423204,
                adult: false,
                backdrop_path: "/k2WyDw2NTUIWnuEs5gT7wgrCQg6.jpg",
                original_language: "en",
                original_title: "Angel Has Fallen",
                genre_ids: [
                    28
                ],
                title: "Angel Has Fallen",
                vote_average: 5.8,
                overview: "After the events in the previous film, Secret Service agent Mike Banning finds himself framed for an assassination attempt on the President. Pursued by hid own agency and the FBI, Banning races to clear hid name and uncover the real terroridt threat which has set its sights on Air Force One.",
                release_date: "2019-08-21"
            },
            {
                popularity: 81.518,
                vote_count: 697,
                video: false,
                poster_path: "/uTALxjQU8e1lhmNjP9nnJ3t2pRU.jpg",
                id: 453405,
                adult: false,
                backdrop_path: "/c3F4P2oauA7IQmy4hM0OmRt2W7d.jpg",
                original_language: "en",
                original_title: "Gemini Man",
                genre_ids: [
                    28,
                    53
                ],
                title: "Gemini Man",
                vote_average: 5.7,
                overview: "Ageing assassin, Henry Brogen tries to get out of the business but finds himself in the ultimate battle—fighting hid own clone who id 25 years younger than him, and at the peak of hid abilities.",
                release_date: "2019-10-02"
            },
            {
                popularity: 106.728,
                vote_count: 398,
                video: false,
                poster_path: "/vOl6shtL0wknjaid6JdKCpcHvg8.jpg",
                id: 567609,
                adult: false,
                backdrop_path: "/j8uPZSPjKYzHlN2B4NhPQVWWZ5x.jpg",
                original_language: "en",
                original_title: "Ready or Not",
                genre_ids: [
                    35,
                    27,
                    9648,
                    53
                ],
                title: "Ready or Not",
                vote_average: 6.8,
                overview: "A bride's wedding night takes a sinidter turn when her eccentric new in-laws force her to take part in a terrifying game.",
                release_date: "2019-08-21"
            },
            {
                popularity: 106.006,
                vote_count: 2166,
                video: false,
                poster_path: "/zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
                id: 474350,
                adult: false,
                backdrop_path: "/8moTOzunF7p40oR5XhlDvJckOSW.jpg",
                original_language: "en",
                original_title: "It Chapter Two",
                genre_ids: [
                    18,
                    27
                ],
                title: "It Chapter Two",
                vote_average: 6.8,
                overview: "27 years after overcoming the malevolent supernatural entity Pennywide, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
                release_date: "2019-09-04"
            },
            {
                popularity: 131.762,
                vote_count: 214,
                video: false,
                poster_path: "/r15SUgzjL8bablcdEkHk9T7TSRl.jpg",
                id: 480042,
                adult: false,
                backdrop_path: "/ygWKYTu7OnZKF9H5NsgjL9iURGV.jpg",
                original_language: "en",
                original_title: "Escape Plan: The Extractors",
                genre_ids: [
                    28,
                    53
                ],
                title: "Escape Plan: The Extractors",
                vote_average: 4.7,
                overview: "After security expert Ray Breslin id hired to rescue the kidnapped daughter of a Hong Kong tech mogul from a formidable Latvian pridon, Breslin's girlfriend id also captured. Now he and hid team must pull off a deadly rescue midsion to confront their sadidtic foe and save the hostages before time runs out.",
                release_date: "2019-06-20"
            },
            {
                popularity: 40.674,
                vote_count: 13577,
                video: false,
                poster_path: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
                id: 283995,
                adult: false,
                backdrop_path: "/aJn9XeesqsrSLKcHfHP4u5985hn.jpg",
                original_language: "en",
                original_title: "Guardians of the Galaxy Vol. 2",
                genre_ids: [
                    28,
                    12,
                    35,
                    878
                ],
                title: "Guardians of the Galaxy Vol. 2",
                vote_average: 7.7,
                overview: "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
                release_date: "2017-04-19"
            },
            {
                popularity: 90.891,
                vote_count: 33,
                video: false,
                poster_path: "/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
                id: 546554,
                adult: false,
                backdrop_path: "/cjTQSwcsfVdirSFSHNBXRGkxmWa.jpg",
                original_language: "en",
                original_title: "Knives Out",
                genre_ids: [
                    35,
                    9648,
                    53
                ],
                title: "Knives Out",
                vote_average: 7.7,
                overview: "When renowned crime novelidt Harlan Thrombey id found dead at hid estate just after hid 85th birthday, the inquiditive and debonair Detective Benoit Blanc id mysteriously enlidted to investigate. From Harlan's dysfunctional family to hid devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death.",
                release_date: "2019-11-27"
            },
            {
                popularity: 96.981,
                vote_count: 94,
                video: false,
                poster_path: "/4E2lyUGLEr3yH4q6kJxPkQUhX7n.jpg",
                id: 568012,
                adult: false,
                backdrop_path: "/iGnCzXEx0cFlUbpyAMeHwHWhPhx.jpg",
                original_language: "ja",
                original_title: "ワンピーススタンピード",
                genre_ids: [
                    28,
                    12,
                    16
                ],
                title: "One Piece: Stampede",
                vote_average: 7.3,
                overview: "One Piece: Stampede id a stand-alone film that celebrates the anime's 20th Anniversary and takes place outside the canon of the \"One Piece\" TV series. Monkey D. Luffy and hid Straw Hat pirate crew are invited to a massive Pirate Festival that brings many of the most iconic characters from throughout the franchide to participate in competition with the Straw Hats to find Roger's treasure. It also pits the Straw Hats against a new enemy named Bullet, a former member of Roger's crew.",
                release_date: "2019-08-09"
            },
            {
                popularity: 61.968,
                vote_count: 2017,
                video: false,
                poster_path: "/kvpNZAQow5es1tSY6XW2jAZuPPG.jpg",
                id: 384018,
                adult: false,
                backdrop_path: "/qAhedRxRYWZAgZ8O8pHIl6QHdD7.jpg",
                original_language: "en",
                original_title: "Fast & Furious Presents: Hobbs & Shaw",
                genre_ids: [
                    28,
                    12,
                    35
                ],
                title: "Fast & Furious Presents: Hobbs & Shaw",
                vote_average: 6.6,
                overview: "Ever since US Diplomatic Security Service Agent Hobbs and lawless outcast Shaw first faced off, they just have swapped smacks and bad words. But when cyber-genetically enhanced anarchidt Brixton's ruthless actions threaten the future of humanity, both join forces to defeat him. (A spin-off of “The Fate of the Furious,” focusing on Johnson's Luke Hobbs and Statham's Deckard Shaw.)",
                release_date: "2019-08-01"
            },
            {
                popularity: 78.119,
                vote_count: 4202,
                video: false,
                poster_path: "/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
                id: 420817,
                adult: false,
                backdrop_path: "/rVqY0Bo4Npf6EIONUROxjYAJfmD.jpg",
                original_language: "en",
                original_title: "Aladdin",
                genre_ids: [
                    12,
                    35,
                    14,
                    10749,
                    10751
                ],
                title: "Aladdin",
                vote_average: 7.1,
                overview: "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a widecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest widhes come true.",
                release_date: "2019-05-22"
            },
            {
                popularity: 64.066,
                vote_count: 130,
                video: false,
                poster_path: "/r5WnfZPYAVhBA9FuZGn6THWaGHD.jpg",
                id: 458897,
                adult: false,
                backdrop_path: "/a0xTB1vBxMGt6LGG4N7k1wO9lfL.jpg",
                original_language: "en",
                original_title: "Charlie's Angels",
                genre_ids: [
                    28,
                    12,
                    35
                ],
                title: "Charlie's Angels",
                vote_average: 6.4,
                overview: "When a systems engineer blows the whidtle on a dangerous technology, Charlie's Angels from across the globe are called into action, putting their lives on the line to protect society.",
                release_date: "2019-11-14"
            },
            {
                popularity: 97.421,
                vote_count: 8373,
                video: false,
                poster_path: "/jpfkzbIXgKZqCZAkEkFH2VYF63s.jpg",
                id: 920,
                adult: false,
                backdrop_path: "/a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg",
                original_language: "en",
                original_title: "Cars",
                genre_ids: [
                    12,
                    16,
                    35,
                    10751
                ],
                title: "Cars",
                vote_average: 6.7,
                overview: "Lightning McQueen, a hotshot rookie race car driven to succeed, didcovers that life id about the journey, not the finidh line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Pidton Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
                release_date: "2006-06-08"
            }
        ],

        top_rated: [
        {
        popularity: 243.884,
        vote_count: 5169,
        video: false,
        poster_path: "/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
        id: 429617,
        adult: false,
        backdrop_path: "/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
        original_language: "en",
        original_title: "Spider-Man: Far from Home",
        genre_ids: [
            28,
            12,
            878
        ],
        title: "Spider-Man: Far from Home",
        vote_average: 7.6,
        overview: "Peter Parker and hid friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural didasters and destruction throughout the continent.",
        release_date: "2019-06-28"
    },
    {
        popularity: 372.496,
        vote_count: 339,
        video: false,
        poster_path: "/qdfARIhgpgZOBh3vfNhWS4hmSo3.jpg",
        id: 330457,
        adult: false,
        backdrop_path: "/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg",
        original_language: "en",
        original_title: "Frozen II",
        genre_ids: [
            12,
            16,
            35,
            10402,
            10751
        ],
        title: "Frozen II",
        vote_average: 7,
        overview: "Elsa, Anna, Kridtoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.",
        release_date: "2019-11-20"
    },
    {
        popularity: 187.622,
        vote_count: 5994,
        video: false,
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        id: 475557,
        adult: false,
        backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
        original_language: "en",
        original_title: "Joker",
        genre_ids: [
            80,
            18,
            53
        ],
        title: "Joker",
        vote_average: 8.4,
        overview: "During the 1980s, a failed stand-up comedian id driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        release_date: "2019-10-02"
    },
    {
        popularity: 204.545,
        vote_count: 2790,
        video: false,
        poster_path: "/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
        id: 466272,
        adult: false,
        backdrop_path: "/nGJpQCAn2NKeDoEflLI5DIvsqoQ.jpg",
        original_language: "en",
        original_title: "Once Upon a Time... in Hollywood",
        genre_ids: [
            35,
            18,
            53
        ],
        title: "Once Upon a Time... in Hollywood",
        vote_average: 7.6,
        overview: "A faded televidion actor and hid stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
        release_date: "2019-07-25"
    },
    {
        popularity: 101.575,
        vote_count: 3698,
        video: false,
        poster_path: "/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
        id: 420818,
        adult: false,
        backdrop_path: "/nRXO2SnOA75OsWhNhXstHB8ZmI3.jpg",
        original_language: "en",
        original_title: "The Lion King",
        genre_ids: [
            12,
            18
        ],
        title: "The Lion King",
        vote_average: 7.1,
        overview: "Simba idolizes hid father, King Mufasa, and takes to heart hid own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of hid own. The battle for Pride Rock id ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what id rightfully hid.",
        release_date: "2019-07-12"
    },
    {
        popularity: 158.394,
        vote_count: 700,
        video: false,
        poster_path: "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
        id: 290859,
        adult: false,
        backdrop_path: "/riTANvQ8GKmQbgtC1ps3OfkU43A.jpg",
        original_language: "en",
        original_title: "Terminator: Dark Fate",
        genre_ids: [
            28,
            878
        ],
        title: "Terminator: Dark Fate",
        vote_average: 6.3,
        overview: "Decades after Sarah Connor prevented Judgment Day, a lethal new Terminator id sent to eliminate the future leader of the residtance. In a fight to save mankind, battle-hardened Sarah Connor teams up with an unexpected ally and an enhanced super soldier to stop the deadliest Terminator yet.",
        release_date: "2019-10-23"
    },
    {
        popularity: 135.746,
        vote_count: 10,
        video: false,
        poster_path: "/4I0CQfnMy6sRR7QhgqsXR16Tmid.jpg",
        id: 645541,
        adult: false,
        backdrop_path: "/sxPycUAaLJJGq2lhhgzR96ePaO0.jpg",
        original_language: "en",
        original_title: "Ellipse",
        genre_ids: [
            878
        ],
        title: "Ellipse",
        vote_average: 3.6,
        overview: "A man and hid dog are stranded on a volatile, oval-shaped planet and are forced to adapt and escape before time destroys them both.",
        release_date: "2019-11-05"
    },
    {
        popularity: 111.632,
        vote_count: 481,
        video: false,
        poster_path: "/zBhv8rsLOfpFW2M5b6wW78Uoojs.jpg",
        id: 540901,
        adult: false,
        backdrop_path: "/mBBJ3N3an8FLkp0ZpGgIJwHKhBP.jpg",
        original_language: "en",
        original_title: "Hustlers",
        genre_ids: [
            35,
            80,
            18
        ],
        title: "Hustlers",
        vote_average: 6.2,
        overview: "A crew of savvy former strip club employees band together to turn the tables on their Wall Street clients.",
        release_date: "2019-09-12"
    },
    {
        popularity: 110.353,
        vote_count: 686,
        video: false,
        poster_path: "/fapXd3v9qTcNBTm39ZC4KUVQDNf.jpg",
        id: 423204,
        adult: false,
        backdrop_path: "/k2WyDw2NTUIWnuEs5gT7wgrCQg6.jpg",
        original_language: "en",
        original_title: "Angel Has Fallen",
        genre_ids: [
            28
        ],
        title: "Angel Has Fallen",
        vote_average: 5.8,
        overview: "After the events in the previous film, Secret Service agent Mike Banning finds himself framed for an assassination attempt on the President. Pursued by hid own agency and the FBI, Banning races to clear hid name and uncover the real terroridt threat which has set its sights on Air Force One.",
        release_date: "2019-08-21"
    },
    {
        popularity: 81.518,
        vote_count: 697,
        video: false,
        poster_path: "/uTALxjQU8e1lhmNjP9nnJ3t2pRU.jpg",
        id: 453405,
        adult: false,
        backdrop_path: "/c3F4P2oauA7IQmy4hM0OmRt2W7d.jpg",
        original_language: "en",
        original_title: "Gemini Man",
        genre_ids: [
            28,
            53
        ],
        title: "Gemini Man",
        vote_average: 5.7,
        overview: "Ageing assassin, Henry Brogen tries to get out of the business but finds himself in the ultimate battle—fighting hid own clone who id 25 years younger than him, and at the peak of hid abilities.",
        release_date: "2019-10-02"
    },
    {
        popularity: 106.728,
        vote_count: 398,
        video: false,
        poster_path: "/vOl6shtL0wknjaid6JdKCpcHvg8.jpg",
        id: 567609,
        adult: false,
        backdrop_path: "/j8uPZSPjKYzHlN2B4NhPQVWWZ5x.jpg",
        original_language: "en",
        original_title: "Ready or Not",
        genre_ids: [
            35,
            27,
            9648,
            53
        ],
        title: "Ready or Not",
        vote_average: 6.8,
        overview: "A bride's wedding night takes a sinidter turn when her eccentric new in-laws force her to take part in a terrifying game.",
        release_date: "2019-08-21"
    },
    {
        popularity: 106.006,
        vote_count: 2166,
        video: false,
        poster_path: "/zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
        id: 474350,
        adult: false,
        backdrop_path: "/8moTOzunF7p40oR5XhlDvJckOSW.jpg",
        original_language: "en",
        original_title: "It Chapter Two",
        genre_ids: [
            18,
            27
        ],
        title: "It Chapter Two",
        vote_average: 6.8,
        overview: "27 years after overcoming the malevolent supernatural entity Pennywide, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
        release_date: "2019-09-04"
    },
    {
        popularity: 131.762,
        vote_count: 214,
        video: false,
        poster_path: "/r15SUgzjL8bablcdEkHk9T7TSRl.jpg",
        id: 480042,
        adult: false,
        backdrop_path: "/ygWKYTu7OnZKF9H5NsgjL9iURGV.jpg",
        original_language: "en",
        original_title: "Escape Plan: The Extractors",
        genre_ids: [
            28,
            53
        ],
        title: "Escape Plan: The Extractors",
        vote_average: 4.7,
        overview: "After security expert Ray Breslin id hired to rescue the kidnapped daughter of a Hong Kong tech mogul from a formidable Latvian pridon, Breslin's girlfriend id also captured. Now he and hid team must pull off a deadly rescue midsion to confront their sadidtic foe and save the hostages before time runs out.",
        release_date: "2019-06-20"
    },
    {
        popularity: 40.674,
        vote_count: 13577,
        video: false,
        poster_path: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
        id: 283995,
        adult: false,
        backdrop_path: "/aJn9XeesqsrSLKcHfHP4u5985hn.jpg",
        original_language: "en",
        original_title: "Guardians of the Galaxy Vol. 2",
        genre_ids: [
            28,
            12,
            35,
            878
        ],
        title: "Guardians of the Galaxy Vol. 2",
        vote_average: 7.7,
        overview: "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
        release_date: "2017-04-19"
    },
    {
        popularity: 90.891,
        vote_count: 33,
        video: false,
        poster_path: "/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
        id: 546554,
        adult: false,
        backdrop_path: "/cjTQSwcsfVdirSFSHNBXRGkxmWa.jpg",
        original_language: "en",
        original_title: "Knives Out",
        genre_ids: [
            35,
            9648,
            53
        ],
        title: "Knives Out",
        vote_average: 7.7,
        overview: "When renowned crime novelidt Harlan Thrombey id found dead at hid estate just after hid 85th birthday, the inquiditive and debonair Detective Benoit Blanc id mysteriously enlidted to investigate. From Harlan's dysfunctional family to hid devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death.",
        release_date: "2019-11-27"
    },
    {
        popularity: 96.981,
        vote_count: 94,
        video: false,
        poster_path: "/4E2lyUGLEr3yH4q6kJxPkQUhX7n.jpg",
        id: 568012,
        adult: false,
        backdrop_path: "/iGnCzXEx0cFlUbpyAMeHwHWhPhx.jpg",
        original_language: "ja",
        original_title: "ワンピーススタンピード",
        genre_ids: [
            28,
            12,
            16
        ],
        title: "One Piece: Stampede",
        vote_average: 7.3,
        overview: "One Piece: Stampede id a stand-alone film that celebrates the anime's 20th Anniversary and takes place outside the canon of the \"One Piece\" TV series. Monkey D. Luffy and hid Straw Hat pirate crew are invited to a massive Pirate Festival that brings many of the most iconic characters from throughout the franchide to participate in competition with the Straw Hats to find Roger's treasure. It also pits the Straw Hats against a new enemy named Bullet, a former member of Roger's crew.",
        release_date: "2019-08-09"
    },
    {
        popularity: 61.968,
        vote_count: 2017,
        video: false,
        poster_path: "/kvpNZAQow5es1tSY6XW2jAZuPPG.jpg",
        id: 384018,
        adult: false,
        backdrop_path: "/qAhedRxRYWZAgZ8O8pHIl6QHdD7.jpg",
        original_language: "en",
        original_title: "Fast & Furious Presents: Hobbs & Shaw",
        genre_ids: [
            28,
            12,
            35
        ],
        title: "Fast & Furious Presents: Hobbs & Shaw",
        vote_average: 6.6,
        overview: "Ever since US Diplomatic Security Service Agent Hobbs and lawless outcast Shaw first faced off, they just have swapped smacks and bad words. But when cyber-genetically enhanced anarchidt Brixton's ruthless actions threaten the future of humanity, both join forces to defeat him. (A spin-off of “The Fate of the Furious,” focusing on Johnson's Luke Hobbs and Statham's Deckard Shaw.)",
        release_date: "2019-08-01"
    },
    {
        popularity: 78.119,
        vote_count: 4202,
        video: false,
        poster_path: "/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
        id: 420817,
        adult: false,
        backdrop_path: "/rVqY0Bo4Npf6EIONUROxjYAJfmD.jpg",
        original_language: "en",
        original_title: "Aladdin",
        genre_ids: [
            12,
            35,
            14,
            10749,
            10751
        ],
        title: "Aladdin",
        vote_average: 7.1,
        overview: "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a widecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest widhes come true.",
        release_date: "2019-05-22"
    },
    {
        popularity: 64.066,
        vote_count: 130,
        video: false,
        poster_path: "/r5WnfZPYAVhBA9FuZGn6THWaGHD.jpg",
        id: 458897,
        adult: false,
        backdrop_path: "/a0xTB1vBxMGt6LGG4N7k1wO9lfL.jpg",
        original_language: "en",
        original_title: "Charlie's Angels",
        genre_ids: [
            28,
            12,
            35
        ],
        title: "Charlie's Angels",
        vote_average: 6.4,
        overview: "When a systems engineer blows the whidtle on a dangerous technology, Charlie's Angels from across the globe are called into action, putting their lives on the line to protect society.",
        release_date: "2019-11-14"
    },
    {
        popularity: 97.421,
        vote_count: 8373,
        video: false,
        poster_path: "/jpfkzbIXgKZqCZAkEkFH2VYF63s.jpg",
        id: 920,
        adult: false,
        backdrop_path: "/a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg",
        original_language: "en",
        original_title: "Cars",
        genre_ids: [
            12,
            16,
            35,
            10751
        ],
        title: "Cars",
        vote_average: 6.7,
        overview: "Lightning McQueen, a hotshot rookie race car driven to succeed, didcovers that life id about the journey, not the finidh line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Pidton Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
        release_date: "2006-06-08"
    }
],
        popular:  [
    {
        popularity: 243.884,
        vote_count: 5169,
        video: false,
        poster_path: "/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
        id: 429617,
        adult: false,
        backdrop_path: "/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
        original_language: "en",
        original_title: "Spider-Man: Far from Home",
        genre_ids: [
            28,
            12,
            878
        ],
        title: "Spider-Man: Far from Home",
        vote_average: 7.6,
        overview: "Peter Parker and hid friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural didasters and destruction throughout the continent.",
        release_date: "2019-06-28"
    },
    {
        popularity: 372.496,
        vote_count: 339,
        video: false,
        poster_path: "/qdfARIhgpgZOBh3vfNhWS4hmSo3.jpg",
        id: 330457,
        adult: false,
        backdrop_path: "/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg",
        original_language: "en",
        original_title: "Frozen II",
        genre_ids: [
            12,
            16,
            35,
            10402,
            10751
        ],
        title: "Frozen II",
        vote_average: 7,
        overview: "Elsa, Anna, Kridtoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.",
        release_date: "2019-11-20"
    },
    {
        popularity: 187.622,
        vote_count: 5994,
        video: false,
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        id: 475557,
        adult: false,
        backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
        original_language: "en",
        original_title: "Joker",
        genre_ids: [
            80,
            18,
            53
        ],
        title: "Joker",
        vote_average: 8.4,
        overview: "During the 1980s, a failed stand-up comedian id driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        release_date: "2019-10-02"
    },
    {
        popularity: 204.545,
        vote_count: 2790,
        video: false,
        poster_path: "/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
        id: 466272,
        adult: false,
        backdrop_path: "/nGJpQCAn2NKeDoEflLI5DIvsqoQ.jpg",
        original_language: "en",
        original_title: "Once Upon a Time... in Hollywood",
        genre_ids: [
            35,
            18,
            53
        ],
        title: "Once Upon a Time... in Hollywood",
        vote_average: 7.6,
        overview: "A faded televidion actor and hid stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
        release_date: "2019-07-25"
    },
    {
        popularity: 101.575,
        vote_count: 3698,
        video: false,
        poster_path: "/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
        id: 420818,
        adult: false,
        backdrop_path: "/nRXO2SnOA75OsWhNhXstHB8ZmI3.jpg",
        original_language: "en",
        original_title: "The Lion King",
        genre_ids: [
            12,
            18
        ],
        title: "The Lion King",
        vote_average: 7.1,
        overview: "Simba idolizes hid father, King Mufasa, and takes to heart hid own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of hid own. The battle for Pride Rock id ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what id rightfully hid.",
        release_date: "2019-07-12"
    },
    {
        popularity: 158.394,
        vote_count: 700,
        video: false,
        poster_path: "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
        id: 290859,
        adult: false,
        backdrop_path: "/riTANvQ8GKmQbgtC1ps3OfkU43A.jpg",
        original_language: "en",
        original_title: "Terminator: Dark Fate",
        genre_ids: [
            28,
            878
        ],
        title: "Terminator: Dark Fate",
        vote_average: 6.3,
        overview: "Decades after Sarah Connor prevented Judgment Day, a lethal new Terminator id sent to eliminate the future leader of the residtance. In a fight to save mankind, battle-hardened Sarah Connor teams up with an unexpected ally and an enhanced super soldier to stop the deadliest Terminator yet.",
        release_date: "2019-10-23"
    },
    {
        popularity: 135.746,
        vote_count: 10,
        video: false,
        poster_path: "/4I0CQfnMy6sRR7QhgqsXR16Tmid.jpg",
        id: 645541,
        adult: false,
        backdrop_path: "/sxPycUAaLJJGq2lhhgzR96ePaO0.jpg",
        original_language: "en",
        original_title: "Ellipse",
        genre_ids: [
            878
        ],
        title: "Ellipse",
        vote_average: 3.6,
        overview: "A man and hid dog are stranded on a volatile, oval-shaped planet and are forced to adapt and escape before time destroys them both.",
        release_date: "2019-11-05"
    },
    {
        popularity: 111.632,
        vote_count: 481,
        video: false,
        poster_path: "/zBhv8rsLOfpFW2M5b6wW78Uoojs.jpg",
        id: 540901,
        adult: false,
        backdrop_path: "/mBBJ3N3an8FLkp0ZpGgIJwHKhBP.jpg",
        original_language: "en",
        original_title: "Hustlers",
        genre_ids: [
            35,
            80,
            18
        ],
        title: "Hustlers",
        vote_average: 6.2,
        overview: "A crew of savvy former strip club employees band together to turn the tables on their Wall Street clients.",
        release_date: "2019-09-12"
    },
    {
        popularity: 110.353,
        vote_count: 686,
        video: false,
        poster_path: "/fapXd3v9qTcNBTm39ZC4KUVQDNf.jpg",
        id: 423204,
        adult: false,
        backdrop_path: "/k2WyDw2NTUIWnuEs5gT7wgrCQg6.jpg",
        original_language: "en",
        original_title: "Angel Has Fallen",
        genre_ids: [
            28
        ],
        title: "Angel Has Fallen",
        vote_average: 5.8,
        overview: "After the events in the previous film, Secret Service agent Mike Banning finds himself framed for an assassination attempt on the President. Pursued by hid own agency and the FBI, Banning races to clear hid name and uncover the real terroridt threat which has set its sights on Air Force One.",
        release_date: "2019-08-21"
    },
    {
        popularity: 81.518,
        vote_count: 697,
        video: false,
        poster_path: "/uTALxjQU8e1lhmNjP9nnJ3t2pRU.jpg",
        id: 453405,
        adult: false,
        backdrop_path: "/c3F4P2oauA7IQmy4hM0OmRt2W7d.jpg",
        original_language: "en",
        original_title: "Gemini Man",
        genre_ids: [
            28,
            53
        ],
        title: "Gemini Man",
        vote_average: 5.7,
        overview: "Ageing assassin, Henry Brogen tries to get out of the business but finds himself in the ultimate battle—fighting hid own clone who id 25 years younger than him, and at the peak of hid abilities.",
        release_date: "2019-10-02"
    },
    {
        popularity: 106.728,
        vote_count: 398,
        video: false,
        poster_path: "/vOl6shtL0wknjaid6JdKCpcHvg8.jpg",
        id: 567609,
        adult: false,
        backdrop_path: "/j8uPZSPjKYzHlN2B4NhPQVWWZ5x.jpg",
        original_language: "en",
        original_title: "Ready or Not",
        genre_ids: [
            35,
            27,
            9648,
            53
        ],
        title: "Ready or Not",
        vote_average: 6.8,
        overview: "A bride's wedding night takes a sinidter turn when her eccentric new in-laws force her to take part in a terrifying game.",
        release_date: "2019-08-21"
    },
    {
        popularity: 106.006,
        vote_count: 2166,
        video: false,
        poster_path: "/zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
        id: 474350,
        adult: false,
        backdrop_path: "/8moTOzunF7p40oR5XhlDvJckOSW.jpg",
        original_language: "en",
        original_title: "It Chapter Two",
        genre_ids: [
            18,
            27
        ],
        title: "It Chapter Two",
        vote_average: 6.8,
        overview: "27 years after overcoming the malevolent supernatural entity Pennywide, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
        release_date: "2019-09-04"
    },
    {
        popularity: 131.762,
        vote_count: 214,
        video: false,
        poster_path: "/r15SUgzjL8bablcdEkHk9T7TSRl.jpg",
        id: 480042,
        adult: false,
        backdrop_path: "/ygWKYTu7OnZKF9H5NsgjL9iURGV.jpg",
        original_language: "en",
        original_title: "Escape Plan: The Extractors",
        genre_ids: [
            28,
            53
        ],
        title: "Escape Plan: The Extractors",
        vote_average: 4.7,
        overview: "After security expert Ray Breslin id hired to rescue the kidnapped daughter of a Hong Kong tech mogul from a formidable Latvian pridon, Breslin's girlfriend id also captured. Now he and hid team must pull off a deadly rescue midsion to confront their sadidtic foe and save the hostages before time runs out.",
        release_date: "2019-06-20"
    },
    {
        popularity: 40.674,
        vote_count: 13577,
        video: false,
        poster_path: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
        id: 283995,
        adult: false,
        backdrop_path: "/aJn9XeesqsrSLKcHfHP4u5985hn.jpg",
        original_language: "en",
        original_title: "Guardians of the Galaxy Vol. 2",
        genre_ids: [
            28,
            12,
            35,
            878
        ],
        title: "Guardians of the Galaxy Vol. 2",
        vote_average: 7.7,
        overview: "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
        release_date: "2017-04-19"
    },
    {
        popularity: 90.891,
        vote_count: 33,
        video: false,
        poster_path: "/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
        id: 546554,
        adult: false,
        backdrop_path: "/cjTQSwcsfVdirSFSHNBXRGkxmWa.jpg",
        original_language: "en",
        original_title: "Knives Out",
        genre_ids: [
            35,
            9648,
            53
        ],
        title: "Knives Out",
        vote_average: 7.7,
        overview: "When renowned crime novelidt Harlan Thrombey id found dead at hid estate just after hid 85th birthday, the inquiditive and debonair Detective Benoit Blanc id mysteriously enlidted to investigate. From Harlan's dysfunctional family to hid devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death.",
        release_date: "2019-11-27"
    },
    {
        popularity: 96.981,
        vote_count: 94,
        video: false,
        poster_path: "/4E2lyUGLEr3yH4q6kJxPkQUhX7n.jpg",
        id: 568012,
        adult: false,
        backdrop_path: "/iGnCzXEx0cFlUbpyAMeHwHWhPhx.jpg",
        original_language: "ja",
        original_title: "ワンピーススタンピード",
        genre_ids: [
            28,
            12,
            16
        ],
        title: "One Piece: Stampede",
        vote_average: 7.3,
        overview: "One Piece: Stampede id a stand-alone film that celebrates the anime's 20th Anniversary and takes place outside the canon of the \"One Piece\" TV series. Monkey D. Luffy and hid Straw Hat pirate crew are invited to a massive Pirate Festival that brings many of the most iconic characters from throughout the franchide to participate in competition with the Straw Hats to find Roger's treasure. It also pits the Straw Hats against a new enemy named Bullet, a former member of Roger's crew.",
        release_date: "2019-08-09"
    },
    {
        popularity: 61.968,
        vote_count: 2017,
        video: false,
        poster_path: "/kvpNZAQow5es1tSY6XW2jAZuPPG.jpg",
        id: 384018,
        adult: false,
        backdrop_path: "/qAhedRxRYWZAgZ8O8pHIl6QHdD7.jpg",
        original_language: "en",
        original_title: "Fast & Furious Presents: Hobbs & Shaw",
        genre_ids: [
            28,
            12,
            35
        ],
        title: "Fast & Furious Presents: Hobbs & Shaw",
        vote_average: 6.6,
        overview: "Ever since US Diplomatic Security Service Agent Hobbs and lawless outcast Shaw first faced off, they just have swapped smacks and bad words. But when cyber-genetically enhanced anarchidt Brixton's ruthless actions threaten the future of humanity, both join forces to defeat him. (A spin-off of “The Fate of the Furious,” focusing on Johnson's Luke Hobbs and Statham's Deckard Shaw.)",
        release_date: "2019-08-01"
    },
    {
        popularity: 78.119,
        vote_count: 4202,
        video: false,
        poster_path: "/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
        id: 420817,
        adult: false,
        backdrop_path: "/rVqY0Bo4Npf6EIONUROxjYAJfmD.jpg",
        original_language: "en",
        original_title: "Aladdin",
        genre_ids: [
            12,
            35,
            14,
            10749,
            10751
        ],
        title: "Aladdin",
        vote_average: 7.1,
        overview: "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a widecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest widhes come true.",
        release_date: "2019-05-22"
    },
    {
        popularity: 64.066,
        vote_count: 130,
        video: false,
        poster_path: "/r5WnfZPYAVhBA9FuZGn6THWaGHD.jpg",
        id: 458897,
        adult: false,
        backdrop_path: "/a0xTB1vBxMGt6LGG4N7k1wO9lfL.jpg",
        original_language: "en",
        original_title: "Charlie's Angels",
        genre_ids: [
            28,
            12,
            35
        ],
        title: "Charlie's Angels",
        vote_average: 6.4,
        overview: "When a systems engineer blows the whidtle on a dangerous technology, Charlie's Angels from across the globe are called into action, putting their lives on the line to protect society.",
        release_date: "2019-11-14"
    },
    {
        popularity: 97.421,
        vote_count: 8373,
        video: false,
        poster_path: "/jpfkzbIXgKZqCZAkEkFH2VYF63s.jpg",
        id: 920,
        adult: false,
        backdrop_path: "/a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg",
        original_language: "en",
        original_title: "Cars",
        genre_ids: [
            12,
            16,
            35,
            10751
        ],
        title: "Cars",
        vote_average: 6.7,
        overview: "Lightning McQueen, a hotshot rookie race car driven to succeed, didcovers that life id about the journey, not the finidh line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Pidton Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
        release_date: "2006-06-08"
    }
    ],
    },




    series: {
        tv_on_the_air: [
            {
                original_name: "The Mandalorian",
                genre_ids: [
                    10759,
                    10765
                ],
                name: "The Mandalorian",
                popularity: 483.439,
                origin_country: [
                    "US"
                ],
                vote_count: 138,
                first_air_date: "2019-11-12",
                backdrop_path: "/o7qi2v4uWQ8bZ1tW3KI0Ztn2epk.jpg",
                original_language: "en",
                id: 82856,
                vote_average: 7.7,
                overview: "Set after the fall of the Empire and before the emergence of the First Order, we follow the travails of a lone gunfighter in the outer reaches of the galaxy far from the authority of the New Republic.",
                poster_path: "/BbNvKCuEF4SRzFXR16aK6ISFtR.jpg"
            },
            {
                original_name: "Rute e Sara",
                genre_ids: [
                    16,
                    35,
                    10759,
                    10765
                ],
                name: "Rute and Sara",
                popularity: 287.955,
                origin_country: [
                    "US"
                ],
                vote_count: 1522,
                first_air_date: "2013-12-02",
                backdrop_path: "/mzzHr6g1yvZ05Mc7hNj3tUdy2bM.jpg",
                original_language: "en",
                id: 60625,
                vote_average: 8.6,
                overview: "Sara is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young granddaughter Rute in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
                poster_path: "/qJdfO3ahgAMf2rcmhoqngjBBZW1.jpg"
            },
            {
                original_name: "Arrow",
                genre_ids: [
                    80,
                    18,
                    9648,
                    10759
                ],
                name: "Arrow",
                popularity: 201.192,
                origin_country: [
                    "US"
                ],
                vote_count: 2861,
                first_air_date: "2012-10-10",
                backdrop_path: "/dXTyVDTIgeByvUOUEiHjbi8xX9A.jpg",
                original_language: "en",
                id: 1412,
                vote_average: 5.8,
                overview: "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.",
                poster_path: "/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg"
            },
            {
                original_name: "The Walking Dead",
                genre_ids: [
                    18,
                    10759,
                    10765
                ],
                name: "The Walking Dead",
                popularity: 117.014,
                origin_country: [
                    "US"
                ],
                vote_count: 4380,
                first_air_date: "2010-10-31",
                backdrop_path: "/wXXaPMgrv96NkH8KD1TMdS2d7iq.jpg",
                original_language: "en",
                id: 1402,
                vote_average: 7.3,
                overview: "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
                poster_path: "/reKs8y4mPwPkZG99ZpbKRhBPKsX.jpg"
            },
            {
                original_name: "The Simpsons",
                genre_ids: [
                    16,
                    35
                ],
                name: "The Simpsons",
                popularity: 155.001,
                origin_country: [
                    "US"
                ],
                vote_count: 2253,
                first_air_date: "1989-12-17",
                backdrop_path: "/f5uNbUC76oowt5mt5J9QlqrIYQ6.jpg",
                original_language: "en",
                id: 456,
                vote_average: 7.2,
                overview: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
                poster_path: "/yTZQkSsxUFJZJe67IenRM0AEklc.jpg"
            },
            {
                original_name: "The Flash",
                genre_ids: [
                    18,
                    10765
                ],
                name: "The Flash",
                popularity: 161.44,
                origin_country: [
                    "US"
                ],
                vote_count: 3015,
                first_air_date: "2014-10-07",
                backdrop_path: "/6ZdQTBy20HzWudZthAV7NkZWfIb.jpg",
                original_language: "en",
                id: 60735,
                vote_average: 6.7,
                overview: "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.",
                poster_path: "/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
            },
            {
                original_name: "His Dark Materials",
                genre_ids: [
                    18,
                    10765
                ],
                name: "His Dark Materials",
                popularity: 145.47,
                origin_country: [
                    "GB"
                ],
                vote_count: 72,
                first_air_date: "2019-11-03",
                backdrop_path: "/9yKCJTOh9m3Lol2RY3kw99QPH6x.jpg",
                original_language: "en",
                id: 68507,
                vote_average: 7.8,
                overview: "Lyra is an orphan who lives in a parallel universe in which science, theology and magic are entwined. Lyra's search for a kidnapped friend uncovers a sinister plot involving stolen children, and turns into a quest to understand a mysterious phenomenon called Dust. She is later joined on her journey by Will, a boy who possesses a knife that can cut windows between worlds. As Lyra learns the truth about her parents and her prophesied destiny, the two young people are caught up in a war against celestial powers that ranges across many worlds.",
                poster_path: "/xOjRNnQw5hqR1EULJ2iHkGwJVA4.jpg"
            },
            {
                original_name: "Supernatural",
                genre_ids: [
                    18,
                    9648,
                    10765
                ],
                name: "Supernatural",
                popularity: 141.577,
                origin_country: [
                    "US"
                ],
                vote_count: 2056,
                first_air_date: "2005-09-13",
                backdrop_path: "/o9OKe3M06QMLOzTl3l6GStYtnE9.jpg",
                original_language: "en",
                id: 1622,
                vote_average: 7.4,
                overview: "When they were boys, Sam and Dean Winchester lost their mother to a mysterious and demonic supernatural force. Subsequently, their father raised them to be soldiers. He taught them about the paranormal evil that lives in the dark corners and on the back roads of America ... and he taught them how to kill it. Now, the Winchester brothers crisscross the country in their '67 Chevy Impala, battling every kind of supernatural threat they encounter along the way. ",
                poster_path: "/KoYWXbnYuS3b0GyQPkbuexlVK9.jpg"
            },
            {
                original_name: "4 Blocks",
                genre_ids: [
                    18
                ],
                name: "4 Blocks",
                popularity: 151.886,
                origin_country: [
                    "DE"
                ],
                vote_count: 45,
                first_air_date: "2017-05-08",
                backdrop_path: "/jEdce7g6VZHMoJ7DANX8NFQkVAW.jpg",
                original_language: "de",
                id: 71641,
                vote_average: 4.7,
                overview: "Based in Neukölln, Berlin Toni manages the daily business of dealing with the Arabic gangs and ends up wanting to leave his old life behind for his family, but as expected, its never that simple.",
                poster_path: "/jVObyxtNxuPbG5czuKvm7pW56EV.jpg"
            },
            {
                original_name: "Family Guy",
                genre_ids: [
                    16,
                    35
                ],
                name: "Family Guy",
                popularity: 101.521,
                origin_country: [
                    "US"
                ],
                vote_count: 1729,
                first_air_date: "1999-01-31",
                backdrop_path: "/pH38r4TWTqq7Mcs6XAlwgzNUeJe.jpg",
                original_language: "en",
                id: 1434,
                vote_average: 6.5,
                overview: "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
                poster_path: "/gBGUL1UTUNmdRQT8gA1LUV4yg39.jpg"
            },
            {
                original_name: "South Park",
                genre_ids: [
                    16,
                    35
                ],
                name: "South Park",
                popularity: 119.558,
                origin_country: [
                    "US"
                ],
                vote_count: 1197,
                first_air_date: "1997-08-13",
                backdrop_path: "/mSDKNVvDfitFE6Fb6fSSl5DQmgS.jpg",
                original_language: "en",
                id: 2190,
                vote_average: 7.8,
                overview: "Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.",
                poster_path: "/v9zc0cZpy5aPSfAy6Tgb6I1zWgV.jpg"
            },
            {
                original_name: "Grey's Anatomy",
                genre_ids: [
                    18
                ],
                name: "Grey's Anatomy",
                popularity: 104.384,
                origin_country: [
                    "US"
                ],
                vote_count: 1127,
                first_air_date: "2005-03-27",
                backdrop_path: "/edmk8xjGBsYVIf4QtLY9WMaMcXZ.jpg",
                original_language: "en",
                id: 1416,
                vote_average: 6.4,
                overview: "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
                poster_path: "/jnsvc7gCKocXnrTXF6p03cICTWb.jpg"
            },
            {
                original_name: "Law & Order: Special Victims Unit",
                genre_ids: [
                    80,
                    18
                ],
                name: "Law & Order: Special Victims Unit",
                popularity: 108.283,
                origin_country: [
                    "US"
                ],
                vote_count: 736,
                first_air_date: "1999-09-20",
                backdrop_path: "/cD9PxbrdWYgL7MUpD9eOYuiSe2P.jpg",
                original_language: "en",
                id: 2734,
                vote_average: 6.5,
                overview: "In the criminal justice system, sexually-based offenses are considered especially heinous. In New York City, the dedicated detectives who investigate these vicious felonies are members of an elite squad known as the Special Victims Unit. These are their stories.",
                poster_path: "/6t6r1VGQTTQecN4V0sZeqsmdU9g.jpg"
            },
            {
                original_name: "See",
                genre_ids: [
                    18,
                    10759,
                    10765
                ],
                name: "See",
                popularity: 97.826,
                origin_country: [
                    "US"
                ],
                vote_count: 92,
                first_air_date: "2019-11-01",
                backdrop_path: "/8TOkxONO3TEeJRuZWb0hG7SboyV.jpg",
                original_language: "en",
                id: 80752,
                vote_average: 7.8,
                overview: "A virus has decimated humankind. Those who survived emerged blind. Centuries later when twins are born with the mythic ability to see, their father must protect his tribe against a threatened queen.",
                poster_path: "/g3JsScc7mQCfc3e5e5rXwu7xVVP.jpg"
            },
            {
                original_name: "ダウンタウンのガキの使いやあらへんで！",
                id: 72974,
                name: "Downtown no Gaki no Tsukai ya Arahende!!",
                popularity: 97.91,
                vote_count: 6,
                vote_average: 9.8,
                first_air_date: "1989-10-03",
                poster_path: "/tNL2KBNPX707zDIvEhAuUjS1P91.jpg",
                genre_ids: [
                    35
                ],
                original_language: "ja",
                backdrop_path: "/juYauXAJViA7Zle5ZIprZEY66hz.jpg",
                overview: "A Japanese variety show hosted by popular Japanese owarai duo, Downtown, with comedian Hōsei Tsukitei (formerly known as Hōsei Yamasaki) and owarai duo Cocorico co-hosting.",
                origin_country: [
                    "JP"
                ]
            },
            {
                original_name: "Supergirl",
                genre_ids: [
                    28,
                    12,
                    18,
                    878
                ],
                name: "Supergirl",
                popularity: 85.579,
                origin_country: [
                    "US"
                ],
                vote_count: 1099,
                first_air_date: "2015-10-26",
                backdrop_path: "/3x1lVyxtsLKsZyR2E3qRe1EAXG4.jpg",
                original_language: "en",
                id: 62688,
                vote_average: 6,
                overview: "Twenty-four-year-old Kara Zor-El, who was taken in by the Danvers family when she was 13 after being sent away from Krypton, must learn to embrace her powers after previously hiding them. The Danvers teach her to be careful with her powers, until she has to reveal them during an unexpected disaster, setting her on her journey of heroism.",
                poster_path: "/4ka8vAzAFUZFKxWyfGfwVcSXuZo.jpg"
            },
            {
                original_name: "ハンターｘハンター",
                genre_ids: [
                    16,
                    35,
                    18,
                    10759
                ],
                name: "Hunter x Hunter",
                popularity: 81.113,
                origin_country: [
                    "JP"
                ],
                vote_count: 167,
                first_air_date: "2011-10-02",
                backdrop_path: "/ye4oayd3csx8psElvvQPdO2fgdD.jpg",
                original_language: "ja",
                id: 46298,
                vote_average: 8.2,
                overview: "Twelve-year-old Gon Freecss one day discovers that the father he had always been told was dead was alive and well. His Father, Ging, is a Hunter—a member of society's elite with a license to go anywhere or do almost anything. Gon, determined to follow in his father's footsteps, decides to take the Hunter Examination and eventually find his father to prove himself as a Hunter in his own right. But on the way, he learns that there is more to becoming a Hunter than previously thought, and the challenges that he must face are considered the toughest in the world.",
                poster_path: "/yWBcBIO9OrF3E85C5Arols6QNnG.jpg"
            },
            {
                original_name: "The Blacklist",
                genre_ids: [
                    80,
                    18,
                    9648
                ],
                name: "The Blacklist",
                popularity: 92.518,
                origin_country: [
                    "US"
                ],
                vote_count: 1108,
                first_air_date: "2013-09-23",
                backdrop_path: "/fHwiAqIKragaCbNJo9Qs4lrccIN.jpg",
                original_language: "en",
                id: 46952,
                vote_average: 7,
                overview: "Raymond \"Red\" Reddington, one of the FBI's most wanted fugitives, surrenders in person at FBI Headquarters in Washington, D.C. He claims that he and the FBI have the same interests: bringing down dangerous criminals and terrorists. In the last two decades, he's made a list of criminals and terrorists that matter the most but the FBI cannot find because it does not know they exist. Reddington calls this \"The Blacklist\". Reddington will co-operate, but insists that he will speak only to Elizabeth Keen, a rookie FBI profiler.",
                poster_path: "/bgbQCW4fE9b6wSOSC6Fb4FfVzsW.jpg"
            },
            {
                original_name: "Fear the Walking Dead",
                genre_ids: [
                    18,
                    10759
                ],
                name: "Fear the Walking Dead",
                popularity: 66.472,
                origin_country: [
                    "US"
                ],
                vote_count: 1097,
                first_air_date: "2015-08-23",
                backdrop_path: "/7r4FieFH6Eh6S55hi8c9LOiFENg.jpg",
                original_language: "en",
                id: 62286,
                vote_average: 6.3,
                overview: "What did the world look like as it was transforming into the horrifying apocalypse depicted in \"The Walking Dead\"? This spin-off set in Los Angeles, following new characters as they face the beginning of the end of the world, will answer that question.",
                poster_path: "/lZMb3R3e5vqukPbeDMeyYGf2ZNG.jpg"
            },
            {
                original_name: "Galileo",
                genre_ids: [
                    99
                ],
                name: "Galileo",
                popularity: 105.526,
                origin_country: [
                    "DE"
                ],
                vote_count: 3,
                first_air_date: "1998-11-30",
                backdrop_path: "/wtONQBI3nbqFNOT2RoXXBgckMeX.jpg",
                original_language: "de",
                id: 75415,
                vote_average: 4,
                overview: "This daily German magazine show delivers interesting facts on numerous topics centering around technology, life, and bizarre knowledge.",
                poster_path: "/diwwxmW87Mv47UkA2YQ0MliRlON.jpg"
            }
        ],

        top_rated: [
            {
                original_name: "The Mandalorian",
                genre_ids: [
                    10759,
                    10765
                ],
                name: "The Mandalorian",
                popularity: 483.439,
                origin_country: [
                    "US"
                ],
                vote_count: 138,
                first_air_date: "2019-11-12",
                backdrop_path: "/o7qi2v4uWQ8bZ1tW3KI0Ztn2epk.jpg",
                original_language: "en",
                id: 82856,
                vote_average: 7.7,
                overview: "Set after the fall of the Empire and before the emergence of the First Order, we follow the travails of a lone gunfighter in the outer reaches of the galaxy far from the authority of the New Republic.",
                poster_path: "/BbNvKCuEF4SRzFXR16aK6ISFtR.jpg"
            },
            {
                original_name: "Rick and Morty",
                genre_ids: [
                    16,
                    35,
                    10759,
                    10765
                ],
                name: "Rick and Morty",
                popularity: 287.955,
                origin_country: [
                    "US"
                ],
                vote_count: 1522,
                first_air_date: "2013-12-02",
                backdrop_path: "/mzzHr6g1yvZ05Mc7hNj3tUdy2bM.jpg",
                original_language: "en",
                id: 60625,
                vote_average: 8.6,
                overview: "Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
                poster_path: "/qJdfO3ahgAMf2rcmhoqngjBBZW1.jpg"
            },
            {
                original_name: "Arrow",
                genre_ids: [
                    80,
                    18,
                    9648,
                    10759
                ],
                name: "Arrow",
                popularity: 201.192,
                origin_country: [
                    "US"
                ],
                vote_count: 2861,
                first_air_date: "2012-10-10",
                backdrop_path: "/dXTyVDTIgeByvUOUEiHjbi8xX9A.jpg",
                original_language: "en",
                id: 1412,
                vote_average: 5.8,
                overview: "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.",
                poster_path: "/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg"
            },
            {
                original_name: "The Walking Dead",
                genre_ids: [
                    18,
                    10759,
                    10765
                ],
                name: "The Walking Dead",
                popularity: 117.014,
                origin_country: [
                    "US"
                ],
                vote_count: 4380,
                first_air_date: "2010-10-31",
                backdrop_path: "/wXXaPMgrv96NkH8KD1TMdS2d7iq.jpg",
                original_language: "en",
                id: 1402,
                vote_average: 7.3,
                overview: "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
                poster_path: "/reKs8y4mPwPkZG99ZpbKRhBPKsX.jpg"
            },
            {
                original_name: "The Simpsons",
                genre_ids: [
                    16,
                    35
                ],
                name: "The Simpsons",
                popularity: 155.001,
                origin_country: [
                    "US"
                ],
                vote_count: 2253,
                first_air_date: "1989-12-17",
                backdrop_path: "/f5uNbUC76oowt5mt5J9QlqrIYQ6.jpg",
                original_language: "en",
                id: 456,
                vote_average: 7.2,
                overview: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
                poster_path: "/yTZQkSsxUFJZJe67IenRM0AEklc.jpg"
            },
            {
                original_name: "The Flash",
                genre_ids: [
                    18,
                    10765
                ],
                name: "The Flash",
                popularity: 161.44,
                origin_country: [
                    "US"
                ],
                vote_count: 3015,
                first_air_date: "2014-10-07",
                backdrop_path: "/6ZdQTBy20HzWudZthAV7NkZWfIb.jpg",
                original_language: "en",
                id: 60735,
                vote_average: 6.7,
                overview: "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.",
                poster_path: "/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
            },
            {
                original_name: "His Dark Materials",
                genre_ids: [
                    18,
                    10765
                ],
                name: "His Dark Materials",
                popularity: 145.47,
                origin_country: [
                    "GB"
                ],
                vote_count: 72,
                first_air_date: "2019-11-03",
                backdrop_path: "/9yKCJTOh9m3Lol2RY3kw99QPH6x.jpg",
                original_language: "en",
                id: 68507,
                vote_average: 7.8,
                overview: "Lyra is an orphan who lives in a parallel universe in which science, theology and magic are entwined. Lyra's search for a kidnapped friend uncovers a sinister plot involving stolen children, and turns into a quest to understand a mysterious phenomenon called Dust. She is later joined on her journey by Will, a boy who possesses a knife that can cut windows between worlds. As Lyra learns the truth about her parents and her prophesied destiny, the two young people are caught up in a war against celestial powers that ranges across many worlds.",
                poster_path: "/xOjRNnQw5hqR1EULJ2iHkGwJVA4.jpg"
            },
            {
                original_name: "Supernatural",
                genre_ids: [
                    18,
                    9648,
                    10765
                ],
                name: "Supernatural",
                popularity: 141.577,
                origin_country: [
                    "US"
                ],
                vote_count: 2056,
                first_air_date: "2005-09-13",
                backdrop_path: "/o9OKe3M06QMLOzTl3l6GStYtnE9.jpg",
                original_language: "en",
                id: 1622,
                vote_average: 7.4,
                overview: "When they were boys, Sam and Dean Winchester lost their mother to a mysterious and demonic supernatural force. Subsequently, their father raised them to be soldiers. He taught them about the paranormal evil that lives in the dark corners and on the back roads of America ... and he taught them how to kill it. Now, the Winchester brothers crisscross the country in their '67 Chevy Impala, battling every kind of supernatural threat they encounter along the way. ",
                poster_path: "/KoYWXbnYuS3b0GyQPkbuexlVK9.jpg"
            },
            {
                original_name: "4 Blocks",
                genre_ids: [
                    18
                ],
                name: "4 Blocks",
                popularity: 151.886,
                origin_country: [
                    "DE"
                ],
                vote_count: 45,
                first_air_date: "2017-05-08",
                backdrop_path: "/jEdce7g6VZHMoJ7DANX8NFQkVAW.jpg",
                original_language: "de",
                id: 71641,
                vote_average: 4.7,
                overview: "Based in Neukölln, Berlin Toni manages the daily business of dealing with the Arabic gangs and ends up wanting to leave his old life behind for his family, but as expected, its never that simple.",
                poster_path: "/jVObyxtNxuPbG5czuKvm7pW56EV.jpg"
            },
            {
                original_name: "Family Guy",
                genre_ids: [
                    16,
                    35
                ],
                name: "Family Guy",
                popularity: 101.521,
                origin_country: [
                    "US"
                ],
                vote_count: 1729,
                first_air_date: "1999-01-31",
                backdrop_path: "/pH38r4TWTqq7Mcs6XAlwgzNUeJe.jpg",
                original_language: "en",
                id: 1434,
                vote_average: 6.5,
                overview: "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
                poster_path: "/gBGUL1UTUNmdRQT8gA1LUV4yg39.jpg"
            },
            {
                original_name: "South Park",
                genre_ids: [
                    16,
                    35
                ],
                name: "South Park",
                popularity: 119.558,
                origin_country: [
                    "US"
                ],
                vote_count: 1197,
                first_air_date: "1997-08-13",
                backdrop_path: "/mSDKNVvDfitFE6Fb6fSSl5DQmgS.jpg",
                original_language: "en",
                id: 2190,
                vote_average: 7.8,
                overview: "Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.",
                poster_path: "/v9zc0cZpy5aPSfAy6Tgb6I1zWgV.jpg"
            },
            {
                original_name: "Grey's Anatomy",
                genre_ids: [
                    18
                ],
                name: "Grey's Anatomy",
                popularity: 104.384,
                origin_country: [
                    "US"
                ],
                vote_count: 1127,
                first_air_date: "2005-03-27",
                backdrop_path: "/edmk8xjGBsYVIf4QtLY9WMaMcXZ.jpg",
                original_language: "en",
                id: 1416,
                vote_average: 6.4,
                overview: "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
                poster_path: "/jnsvc7gCKocXnrTXF6p03cICTWb.jpg"
            },
            {
                original_name: "Law & Order: Special Victims Unit",
                genre_ids: [
                    80,
                    18
                ],
                name: "Law & Order: Special Victims Unit",
                popularity: 108.283,
                origin_country: [
                    "US"
                ],
                vote_count: 736,
                first_air_date: "1999-09-20",
                backdrop_path: "/cD9PxbrdWYgL7MUpD9eOYuiSe2P.jpg",
                original_language: "en",
                id: 2734,
                vote_average: 6.5,
                overview: "In the criminal justice system, sexually-based offenses are considered especially heinous. In New York City, the dedicated detectives who investigate these vicious felonies are members of an elite squad known as the Special Victims Unit. These are their stories.",
                poster_path: "/6t6r1VGQTTQecN4V0sZeqsmdU9g.jpg"
            },
            {
                original_name: "See",
                genre_ids: [
                    18,
                    10759,
                    10765
                ],
                name: "See",
                popularity: 97.826,
                origin_country: [
                    "US"
                ],
                vote_count: 92,
                first_air_date: "2019-11-01",
                backdrop_path: "/8TOkxONO3TEeJRuZWb0hG7SboyV.jpg",
                original_language: "en",
                id: 80752,
                vote_average: 7.8,
                overview: "A virus has decimated humankind. Those who survived emerged blind. Centuries later when twins are born with the mythic ability to see, their father must protect his tribe against a threatened queen.",
                poster_path: "/g3JsScc7mQCfc3e5e5rXwu7xVVP.jpg"
            },
            {
                original_name: "ダウンタウンのガキの使いやあらへんで！",
                id: 72974,
                name: "Downtown no Gaki no Tsukai ya Arahende!!",
                popularity: 97.91,
                vote_count: 6,
                vote_average: 9.8,
                first_air_date: "1989-10-03",
                poster_path: "/tNL2KBNPX707zDIvEhAuUjS1P91.jpg",
                genre_ids: [
                    35
                ],
                original_language: "ja",
                backdrop_path: "/juYauXAJViA7Zle5ZIprZEY66hz.jpg",
                overview: "A Japanese variety show hosted by popular Japanese owarai duo, Downtown, with comedian Hōsei Tsukitei (formerly known as Hōsei Yamasaki) and owarai duo Cocorico co-hosting.",
                origin_country: [
                    "JP"
                ]
            },
            {
                original_name: "Supergirl",
                genre_ids: [
                    28,
                    12,
                    18,
                    878
                ],
                name: "Supergirl",
                popularity: 85.579,
                origin_country: [
                    "US"
                ],
                vote_count: 1099,
                first_air_date: "2015-10-26",
                backdrop_path: "/3x1lVyxtsLKsZyR2E3qRe1EAXG4.jpg",
                original_language: "en",
                id: 62688,
                vote_average: 6,
                overview: "Twenty-four-year-old Kara Zor-El, who was taken in by the Danvers family when she was 13 after being sent away from Krypton, must learn to embrace her powers after previously hiding them. The Danvers teach her to be careful with her powers, until she has to reveal them during an unexpected disaster, setting her on her journey of heroism.",
                poster_path: "/4ka8vAzAFUZFKxWyfGfwVcSXuZo.jpg"
            },
            {
                original_name: "ハンターｘハンター",
                genre_ids: [
                    16,
                    35,
                    18,
                    10759
                ],
                name: "Hunter x Hunter",
                popularity: 81.113,
                origin_country: [
                    "JP"
                ],
                vote_count: 167,
                first_air_date: "2011-10-02",
                backdrop_path: "/ye4oayd3csx8psElvvQPdO2fgdD.jpg",
                original_language: "ja",
                id: 46298,
                vote_average: 8.2,
                overview: "Twelve-year-old Gon Freecss one day discovers that the father he had always been told was dead was alive and well. His Father, Ging, is a Hunter—a member of society's elite with a license to go anywhere or do almost anything. Gon, determined to follow in his father's footsteps, decides to take the Hunter Examination and eventually find his father to prove himself as a Hunter in his own right. But on the way, he learns that there is more to becoming a Hunter than previously thought, and the challenges that he must face are considered the toughest in the world.",
                poster_path: "/yWBcBIO9OrF3E85C5Arols6QNnG.jpg"
            },
            {
                original_name: "The Blacklist",
                genre_ids: [
                    80,
                    18,
                    9648
                ],
                name: "The Blacklist",
                popularity: 92.518,
                origin_country: [
                    "US"
                ],
                vote_count: 1108,
                first_air_date: "2013-09-23",
                backdrop_path: "/fHwiAqIKragaCbNJo9Qs4lrccIN.jpg",
                original_language: "en",
                id: 46952,
                vote_average: 7,
                overview: "Raymond \"Red\" Reddington, one of the FBI's most wanted fugitives, surrenders in person at FBI Headquarters in Washington, D.C. He claims that he and the FBI have the same interests: bringing down dangerous criminals and terrorists. In the last two decades, he's made a list of criminals and terrorists that matter the most but the FBI cannot find because it does not know they exist. Reddington calls this \"The Blacklist\". Reddington will co-operate, but insists that he will speak only to Elizabeth Keen, a rookie FBI profiler.",
                poster_path: "/bgbQCW4fE9b6wSOSC6Fb4FfVzsW.jpg"
            },
            {
                original_name: "Fear the Walking Dead",
                genre_ids: [
                    18,
                    10759
                ],
                name: "Fear the Walking Dead",
                popularity: 66.472,
                origin_country: [
                    "US"
                ],
                vote_count: 1097,
                first_air_date: "2015-08-23",
                backdrop_path: "/7r4FieFH6Eh6S55hi8c9LOiFENg.jpg",
                original_language: "en",
                id: 62286,
                vote_average: 6.3,
                overview: "What did the world look like as it was transforming into the horrifying apocalypse depicted in \"The Walking Dead\"? This spin-off set in Los Angeles, following new characters as they face the beginning of the end of the world, will answer that question.",
                poster_path: "/lZMb3R3e5vqukPbeDMeyYGf2ZNG.jpg"
            },
            {
                original_name: "Galileo",
                genre_ids: [
                    99
                ],
                name: "Galileo",
                popularity: 105.526,
                origin_country: [
                    "DE"
                ],
                vote_count: 3,
                first_air_date: "1998-11-30",
                backdrop_path: "/wtONQBI3nbqFNOT2RoXXBgckMeX.jpg",
                original_language: "de",
                id: 75415,
                vote_average: 4,
                overview: "This daily German magazine show delivers interesting facts on numerous topics centering around technology, life, and bizarre knowledge.",
                poster_path: "/diwwxmW87Mv47UkA2YQ0MliRlON.jpg"
            }
        ],

        popular: [
            {
                original_name: "The Mandalorian",
                genre_ids: [
                    10759,
                    10765
                ],
                name: "The Mandalorian",
                popularity: 483.439,
                origin_country: [
                    "US"
                ],
                vote_count: 138,
                first_air_date: "2019-11-12",
                backdrop_path: "/o7qi2v4uWQ8bZ1tW3KI0Ztn2epk.jpg",
                original_language: "en",
                id: 82856,
                vote_average: 7.7,
                overview: "Set after the fall of the Empire and before the emergence of the First Order, we follow the travails of a lone gunfighter in the outer reaches of the galaxy far from the authority of the New Republic.",
                poster_path: "/BbNvKCuEF4SRzFXR16aK6ISFtR.jpg"
            },
            {
                original_name: "Rick and Morty",
                genre_ids: [
                    16,
                    35,
                    10759,
                    10765
                ],
                name: "Rick and Morty",
                popularity: 287.955,
                origin_country: [
                    "US"
                ],
                vote_count: 1522,
                first_air_date: "2013-12-02",
                backdrop_path: "/mzzHr6g1yvZ05Mc7hNj3tUdy2bM.jpg",
                original_language: "en",
                id: 60625,
                vote_average: 8.6,
                overview: "Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
                poster_path: "/qJdfO3ahgAMf2rcmhoqngjBBZW1.jpg"
            },
            {
                original_name: "Arrow",
                genre_ids: [
                    80,
                    18,
                    9648,
                    10759
                ],
                name: "Arrow",
                popularity: 201.192,
                origin_country: [
                    "US"
                ],
                vote_count: 2861,
                first_air_date: "2012-10-10",
                backdrop_path: "/dXTyVDTIgeByvUOUEiHjbi8xX9A.jpg",
                original_language: "en",
                id: 1412,
                vote_average: 5.8,
                overview: "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.",
                poster_path: "/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg"
            },
            {
                original_name: "The Walking Dead",
                genre_ids: [
                    18,
                    10759,
                    10765
                ],
                name: "The Walking Dead",
                popularity: 117.014,
                origin_country: [
                    "US"
                ],
                vote_count: 4380,
                first_air_date: "2010-10-31",
                backdrop_path: "/wXXaPMgrv96NkH8KD1TMdS2d7iq.jpg",
                original_language: "en",
                id: 1402,
                vote_average: 7.3,
                overview: "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
                poster_path: "/reKs8y4mPwPkZG99ZpbKRhBPKsX.jpg"
            },
            {
                original_name: "The Simpsons",
                genre_ids: [
                    16,
                    35
                ],
                name: "The Simpsons",
                popularity: 155.001,
                origin_country: [
                    "US"
                ],
                vote_count: 2253,
                first_air_date: "1989-12-17",
                backdrop_path: "/f5uNbUC76oowt5mt5J9QlqrIYQ6.jpg",
                original_language: "en",
                id: 456,
                vote_average: 7.2,
                overview: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
                poster_path: "/yTZQkSsxUFJZJe67IenRM0AEklc.jpg"
            },
            {
                original_name: "The Flash",
                genre_ids: [
                    18,
                    10765
                ],
                name: "The Flash",
                popularity: 161.44,
                origin_country: [
                    "US"
                ],
                vote_count: 3015,
                first_air_date: "2014-10-07",
                backdrop_path: "/6ZdQTBy20HzWudZthAV7NkZWfIb.jpg",
                original_language: "en",
                id: 60735,
                vote_average: 6.7,
                overview: "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.",
                poster_path: "/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
            },
            {
                original_name: "His Dark Materials",
                genre_ids: [
                    18,
                    10765
                ],
                name: "His Dark Materials",
                popularity: 145.47,
                origin_country: [
                    "GB"
                ],
                vote_count: 72,
                first_air_date: "2019-11-03",
                backdrop_path: "/9yKCJTOh9m3Lol2RY3kw99QPH6x.jpg",
                original_language: "en",
                id: 68507,
                vote_average: 7.8,
                overview: "Lyra is an orphan who lives in a parallel universe in which science, theology and magic are entwined. Lyra's search for a kidnapped friend uncovers a sinister plot involving stolen children, and turns into a quest to understand a mysterious phenomenon called Dust. She is later joined on her journey by Will, a boy who possesses a knife that can cut windows between worlds. As Lyra learns the truth about her parents and her prophesied destiny, the two young people are caught up in a war against celestial powers that ranges across many worlds.",
                poster_path: "/xOjRNnQw5hqR1EULJ2iHkGwJVA4.jpg"
            },
            {
                original_name: "Supernatural",
                genre_ids: [
                    18,
                    9648,
                    10765
                ],
                name: "Supernatural",
                popularity: 141.577,
                origin_country: [
                    "US"
                ],
                vote_count: 2056,
                first_air_date: "2005-09-13",
                backdrop_path: "/o9OKe3M06QMLOzTl3l6GStYtnE9.jpg",
                original_language: "en",
                id: 1622,
                vote_average: 7.4,
                overview: "When they were boys, Sam and Dean Winchester lost their mother to a mysterious and demonic supernatural force. Subsequently, their father raised them to be soldiers. He taught them about the paranormal evil that lives in the dark corners and on the back roads of America ... and he taught them how to kill it. Now, the Winchester brothers crisscross the country in their '67 Chevy Impala, battling every kind of supernatural threat they encounter along the way. ",
                poster_path: "/KoYWXbnYuS3b0GyQPkbuexlVK9.jpg"
            },
            {
                original_name: "4 Blocks",
                genre_ids: [
                    18
                ],
                name: "4 Blocks",
                popularity: 151.886,
                origin_country: [
                    "DE"
                ],
                vote_count: 45,
                first_air_date: "2017-05-08",
                backdrop_path: "/jEdce7g6VZHMoJ7DANX8NFQkVAW.jpg",
                original_language: "de",
                id: 71641,
                vote_average: 4.7,
                overview: "Based in Neukölln, Berlin Toni manages the daily business of dealing with the Arabic gangs and ends up wanting to leave his old life behind for his family, but as expected, its never that simple.",
                poster_path: "/jVObyxtNxuPbG5czuKvm7pW56EV.jpg"
            },
            {
                original_name: "Family Guy",
                genre_ids: [
                    16,
                    35
                ],
                name: "Family Guy",
                popularity: 101.521,
                origin_country: [
                    "US"
                ],
                vote_count: 1729,
                first_air_date: "1999-01-31",
                backdrop_path: "/pH38r4TWTqq7Mcs6XAlwgzNUeJe.jpg",
                original_language: "en",
                id: 1434,
                vote_average: 6.5,
                overview: "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
                poster_path: "/gBGUL1UTUNmdRQT8gA1LUV4yg39.jpg"
            },
            {
                original_name: "South Park",
                genre_ids: [
                    16,
                    35
                ],
                name: "South Park",
                popularity: 119.558,
                origin_country: [
                    "US"
                ],
                vote_count: 1197,
                first_air_date: "1997-08-13",
                backdrop_path: "/mSDKNVvDfitFE6Fb6fSSl5DQmgS.jpg",
                original_language: "en",
                id: 2190,
                vote_average: 7.8,
                overview: "Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.",
                poster_path: "/v9zc0cZpy5aPSfAy6Tgb6I1zWgV.jpg"
            },
            {
                original_name: "Grey's Anatomy",
                genre_ids: [
                    18
                ],
                name: "Grey's Anatomy",
                popularity: 104.384,
                origin_country: [
                    "US"
                ],
                vote_count: 1127,
                first_air_date: "2005-03-27",
                backdrop_path: "/edmk8xjGBsYVIf4QtLY9WMaMcXZ.jpg",
                original_language: "en",
                id: 1416,
                vote_average: 6.4,
                overview: "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
                poster_path: "/jnsvc7gCKocXnrTXF6p03cICTWb.jpg"
            },
            {
                original_name: "Law & Order: Special Victims Unit",
                genre_ids: [
                    80,
                    18
                ],
                name: "Law & Order: Special Victims Unit",
                popularity: 108.283,
                origin_country: [
                    "US"
                ],
                vote_count: 736,
                first_air_date: "1999-09-20",
                backdrop_path: "/cD9PxbrdWYgL7MUpD9eOYuiSe2P.jpg",
                original_language: "en",
                id: 2734,
                vote_average: 6.5,
                overview: "In the criminal justice system, sexually-based offenses are considered especially heinous. In New York City, the dedicated detectives who investigate these vicious felonies are members of an elite squad known as the Special Victims Unit. These are their stories.",
                poster_path: "/6t6r1VGQTTQecN4V0sZeqsmdU9g.jpg"
            },
            {
                original_name: "See",
                genre_ids: [
                    18,
                    10759,
                    10765
                ],
                name: "See",
                popularity: 97.826,
                origin_country: [
                    "US"
                ],
                vote_count: 92,
                first_air_date: "2019-11-01",
                backdrop_path: "/8TOkxONO3TEeJRuZWb0hG7SboyV.jpg",
                original_language: "en",
                id: 80752,
                vote_average: 7.8,
                overview: "A virus has decimated humankind. Those who survived emerged blind. Centuries later when twins are born with the mythic ability to see, their father must protect his tribe against a threatened queen.",
                poster_path: "/g3JsScc7mQCfc3e5e5rXwu7xVVP.jpg"
            },
            {
                original_name: "ダウンタウンのガキの使いやあらへんで！",
                id: 72974,
                name: "Downtown no Gaki no Tsukai ya Arahende!!",
                popularity: 97.91,
                vote_count: 6,
                vote_average: 9.8,
                first_air_date: "1989-10-03",
                poster_path: "/tNL2KBNPX707zDIvEhAuUjS1P91.jpg",
                genre_ids: [
                    35
                ],
                original_language: "ja",
                backdrop_path: "/juYauXAJViA7Zle5ZIprZEY66hz.jpg",
                overview: "A Japanese variety show hosted by popular Japanese owarai duo, Downtown, with comedian Hōsei Tsukitei (formerly known as Hōsei Yamasaki) and owarai duo Cocorico co-hosting.",
                origin_country: [
                    "JP"
                ]
            },
            {
                original_name: "Supergirl",
                genre_ids: [
                    28,
                    12,
                    18,
                    878
                ],
                name: "Supergirl",
                popularity: 85.579,
                origin_country: [
                    "US"
                ],
                vote_count: 1099,
                first_air_date: "2015-10-26",
                backdrop_path: "/3x1lVyxtsLKsZyR2E3qRe1EAXG4.jpg",
                original_language: "en",
                id: 62688,
                vote_average: 6,
                overview: "Twenty-four-year-old Kara Zor-El, who was taken in by the Danvers family when she was 13 after being sent away from Krypton, must learn to embrace her powers after previously hiding them. The Danvers teach her to be careful with her powers, until she has to reveal them during an unexpected disaster, setting her on her journey of heroism.",
                poster_path: "/4ka8vAzAFUZFKxWyfGfwVcSXuZo.jpg"
            },
            {
                original_name: "ハンターｘハンター",
                genre_ids: [
                    16,
                    35,
                    18,
                    10759
                ],
                name: "Hunter x Hunter",
                popularity: 81.113,
                origin_country: [
                    "JP"
                ],
                vote_count: 167,
                first_air_date: "2011-10-02",
                backdrop_path: "/ye4oayd3csx8psElvvQPdO2fgdD.jpg",
                original_language: "ja",
                id: 46298,
                vote_average: 8.2,
                overview: "Twelve-year-old Gon Freecss one day discovers that the father he had always been told was dead was alive and well. His Father, Ging, is a Hunter—a member of society's elite with a license to go anywhere or do almost anything. Gon, determined to follow in his father's footsteps, decides to take the Hunter Examination and eventually find his father to prove himself as a Hunter in his own right. But on the way, he learns that there is more to becoming a Hunter than previously thought, and the challenges that he must face are considered the toughest in the world.",
                poster_path: "/yWBcBIO9OrF3E85C5Arols6QNnG.jpg"
            },
            {
                original_name: "The Blacklist",
                genre_ids: [
                    80,
                    18,
                    9648
                ],
                name: "The Blacklist",
                popularity: 92.518,
                origin_country: [
                    "US"
                ],
                vote_count: 1108,
                first_air_date: "2013-09-23",
                backdrop_path: "/fHwiAqIKragaCbNJo9Qs4lrccIN.jpg",
                original_language: "en",
                id: 46952,
                vote_average: 7,
                overview: "Raymond \"Red\" Reddington, one of the FBI's most wanted fugitives, surrenders in person at FBI Headquarters in Washington, D.C. He claims that he and the FBI have the same interests: bringing down dangerous criminals and terrorists. In the last two decades, he's made a list of criminals and terrorists that matter the most but the FBI cannot find because it does not know they exist. Reddington calls this \"The Blacklist\". Reddington will co-operate, but insists that he will speak only to Elizabeth Keen, a rookie FBI profiler.",
                poster_path: "/bgbQCW4fE9b6wSOSC6Fb4FfVzsW.jpg"
            },
            {
                original_name: "Fear the Walking Dead",
                genre_ids: [
                    18,
                    10759
                ],
                name: "Fear the Walking Dead",
                popularity: 66.472,
                origin_country: [
                    "US"
                ],
                vote_count: 1097,
                first_air_date: "2015-08-23",
                backdrop_path: "/7r4FieFH6Eh6S55hi8c9LOiFENg.jpg",
                original_language: "en",
                id: 62286,
                vote_average: 6.3,
                overview: "What did the world look like as it was transforming into the horrifying apocalypse depicted in \"The Walking Dead\"? This spin-off set in Los Angeles, following new characters as they face the beginning of the end of the world, will answer that question.",
                poster_path: "/lZMb3R3e5vqukPbeDMeyYGf2ZNG.jpg"
            },
            {
                original_name: "Galileo",
                genre_ids: [
                    99
                ],
                name: "Galileo",
                popularity: 105.526,
                origin_country: [
                    "DE"
                ],
                vote_count: 3,
                first_air_date: "1998-11-30",
                backdrop_path: "/wtONQBI3nbqFNOT2RoXXBgckMeX.jpg",
                original_language: "de",
                id: 75415,
                vote_average: 4,
                overview: "This daily German magazine show delivers interesting facts on numerous topics centering around technology, life, and bizarre knowledge.",
                poster_path: "/diwwxmW87Mv47UkA2YQ0MliRlON.jpg"
            }
        ]


    },

    books: [

    ]



};



const rootReducer = (state = initialState, action) => {

    return state
};

export default rootReducer;