import React from 'react';
import MiniatureEntertaiment from "../Components/MiniatureEntertaiment";


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
        upcoming: {
            results: [],
            page: '',
            total_results: '',
            dates: {},
            total_pages: ''
        },

        top_rated: {
            results: [],
            page: '',
            total_results: '',
            dates: {},
            total_pages: ''
        },
        popular: {
            results: [],
            page: '',
            total_results: '',
            dates: {},
            total_pages: ''
        },
    },


    series: {
        tv_on_the_air: {
            results: [],
            page: '',
            total_results: '',
            dates: {},
            total_pages: ''
        },

        top_rated: {
            results: [],
            page: '',
            total_results: '',
            dates: {},
            total_pages: ''
        },

        popular: {
            results: [],
            page: '',
            total_results: '',
            dates: {},
            total_pages: ''
        }


    },

    books: {

        young_adult: [{
            kind: "books#volumes",
            totalItems: 1,
            items: [
                {
                    volumeInfo: {
                        title: "",
                        description: "",
                        industryIdentifiers: [
                            {
                                type: "",
                                identifier: ""
                            },
                            {
                                type: "",
                                identifier: ""
                            }
                        ],

                        imageLinks: {
                            smallThumbnail: "",
                            thumbnail: ""
                        },

                    },

                }
            ]
        },],
        hardcover_fiction: [
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            }
        ],
        hardcover_nonfiction: [
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            }
        ],
        graphic_books_and_manga: [
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "Socorro",
                            subtitle: "quero ajuda",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            }
        ],
        childrens_middle_grade: [
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            }
        ],
        all_bestsellers: [
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            },
            {
                kind: "books#volumes",
                totalItems: 1,
                items: [
                    {
                        kind: "books#volume",
                        id: "B81wDAAAQBAJ",
                        etag: "o5vaKsHHfSU",
                        selfLink: "https://www.googleapis.com/books/v1/volumes/B81wDAAAQBAJ",
                        volumeInfo: {
                            title: "I Give You My Body ",
                            subtitle: "How I Write Sex Scenes",
                            authors: [
                                "Diana Gabaldon"
                            ],
                            publisher: "Dell",
                            publishedDate: "2016-08-16",
                            description: "For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780399178573"
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0399178570"
                                }
                            ],
                            readingModes: {
                                text: true,
                                image: false
                            },
                            pageCount: 118,
                            printType: "BOOK",
                            categories: [
                                "Language Arts & Disciplines"
                            ],
                            averageRating: 4.5,
                            ratingsCount: 2,
                            maturityRating: "MATURE",
                            allowAnonLogging: true,
                            contentVersion: "1.6.5.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false
                            },
                            imageLinks: {
                                smallThumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail: "http://books.google.com/books/content?id=B81wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            },
                            language: "en",
                            previewLink: "http://books.google.pt/books?id=B81wDAAAQBAJ&printsec=frontcover&dq=isbn:9780399178573&hl=&cd=1&source=gbs_api",
                            infoLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ"
                        },
                        saleInfo: {
                            country: "PT",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            retailPrice: {
                                amount: 3.13,
                                currencyCode: "EUR"
                            },
                            buyLink: "https://play.google.com/store/books/details?id=B81wDAAAQBAJ&rdid=book-B81wDAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    },
                                    retailPrice: {
                                        amountInMicros: 3130000.0,
                                        currencyCode: "EUR"
                                    }
                                }
                            ]
                        },
                        accessInfo: {
                            country: "PT",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                            epub: {
                                isAvailable: true,
                                acsTokenLink: "http://books.google.pt/books/download/I_Give_You_My_Body-sample-epub.acsm?id=B81wDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                            },
                            pdf: {
                                isAvailable: false
                            },
                            webReaderLink: "http://play.google.com/books/reader?id=B81wDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false
                        },
                        searchInfo: {
                            "textSnippet": "With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in ..."
                        }
                    }
                ]
            }
        ],


    },

    isbns: {
        ya: [],
        hf: [],
        hnf: [],
        gbam: [],
        cmg: [],
        abs: []


    },


    individual_entertaiment: [],


};


const rootReducer = (state = initialState, action) => {

    if (action.type === 'FETCH_API') {


        if (action.type_content === 'individual') {


            return {
                ...state,
                individual_entertaiment: action.result
            }
        }


        if (action.type_content === 'movies') {

            if (action.content === 'upcoming') {
                return {
                    ...state,


                    movies: {...state.movies, upcoming: action.result}
                }
            }
            if (action.content === 'top_rated') {
                return {
                    ...state,


                    movies: {...state.movies, top_rated: action.result}
                }
            }

            if (action.content === 'popular') {
                return {
                    ...state,


                    movies: {...state.movies, popular: action.result}
                }
            }

        }


        if (action.type_content === 'series') {

            if (action.content === 'tv_on_the_air') {
                return {
                    ...state,


                    series: {...state.series, tv_on_the_air: action.result}
                }
            }


            if (action.content === 'top_rated') {
                return {
                    ...state,


                    series: {...state.series, top_rated: action.result}
                }
            }

            if (action.content === 'popular') {
                return {
                    ...state,


                    series: {...state.series, popular: action.result}
                }
            }

        }

        if (action.type_content === 'books') {


            if (action.content === 'youngadult') {

            }


            if (action.content === 'fiction') {

                console.log('fiction')

            }

            if (action.content === 'nonFiction') {

                console.log('nonFiction')


            }

            if (action.content === 'graphicnovelsmanga') {

                console.log('graphicnovelsmanga')


            }

            if (action.content === 'middlegrade') {

                console.log('middlegrade')


            }
        }


    }

    if (action.type === 'FETCH_API_ISBNS') {


        if (action.type_content === 'books') {


            let isbnarray = [];

            if (action.content === 'youngadult') {


                action.result.results.map(item => {


                    isbnarray.push({
                        sbn13: item.book_details[0].primary_isbn13,
                        isbn10: item.book_details[0].primary_isbn13
                    })


                })
            }

            return {
                ...state,


                isbns: {...state.isbns, ya: isbnarray}


            }

        }
    }
    return state;
};


export default rootReducer;