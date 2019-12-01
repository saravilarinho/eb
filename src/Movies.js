import React from 'react';
import './Styles/Styles.css'
import HorizontalList from './Components/HorizontalList'



const info_movies =[
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
];




function Movies (){
    return (

        <div>
            <h1 className="titulos pt-3 pb-3">MOVIES</h1>

            <HorizontalList titulo={'Upcoming ...'} info={info_movies} type={'Movie'} listacess={'yes'} content={'Upcoming'}/>

            <HorizontalList titulo={'Top Rated ...'} info={info_movies} type={'Movie'} listacess={'yes'} content={'TopRated'}/>

            <HorizontalList titulo={'Popular ...'} info={info_movies} type={'Movie'} listacess={'yes'} content={'Popular'}/>

            <HorizontalList titulo={'Favorites ...'} info={info_movies} type={'Movie'} listacess={'no'}/>


        </div>
)


}



export default Movies;
