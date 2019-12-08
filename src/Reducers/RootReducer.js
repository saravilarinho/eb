import React from 'react';

const initialState = {

    users: {
        login: false,
        email: null,
        favorites: {
            movies: [],
            series: [],
            books: [],
        }
    },

    movies: {
        upcoming:null,
        top_rated: null,
        popular: null,
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

        young_adult: [],
        hardcover_fiction: [],
        hardcover_nonfiction: [],
        graphic_books_and_manga: [],
        childrens_middle_grade: [],
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


    individual_entertaiment: [],
    random: {

        ony: false,
        random_content: [],
        type:"",

    }


};


const rootReducer = (state = initialState, action) => {

    if (action.type === 'SIGN_IN') {
        return {
            ...state,
            users: {
                ...state.users,
                login: true,
                email: action.email
            }
        }
    }

    if (action.type === 'SIGN_OUT') {

        return {
            ...state,
            users: {
                ...state.users,
                login: false,
                email: null
            }
        }
    }

    if (action.type === 'FETCH_API') {

        if (action.content === 'random') {


            if (action.type_content === 'movies') {


                let randomnr = Math.floor(Math.random() * ((action.result.results.length - 1) - 0 + 1)) + 0;

                return {
                    ...state,
                    random: {
                        ony: true,
                        random_content: action.result.results[randomnr],
                        type:"movies"
                    }
                }


            }

            if (action.type_content === 'series') {


                let randomnr = Math.floor(Math.random() * ((action.result.results.length - 1) - 0 + 1)) + 0;

                return {
                    ...state,
                    random: {
                        ony: true,
                        random_content: action.result.results[randomnr],
                        type:"series"
                    }
                }


            }

            if (action.type_content === 'books') {

                return {
                    ...state,
                    random: {
                        ony: true,
                        random_content: action.result,
                        type:"books"
                    }
                }


            }

        }


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


                return {
                    ...state,


                    books: {...state.books, young_adult: [...state.books.young_adult, action.result]}
                }

            }


            if (action.content === 'fiction') {

                return {
                    ...state,


                    books: {...state.books, hardcover_fiction: [...state.books.hardcover_fiction, action.result]}
                }
            }

            if (action.content === 'nonFiction') {


                return {
                    ...state,


                    books: {...state.books, hardcover_nonfiction: [...state.books.hardcover_nonfiction, action.result]}
                }

            }

            if (action.content === 'graphicnovelsmanga') {

                return {
                    ...state,


                    books: {
                        ...state.books,
                        graphic_books_and_manga: [...state.books.graphic_books_and_manga, action.result]
                    }
                }

            }

            if (action.content === 'middlegrade') {

                return {
                    ...state,


                    books: {
                        ...state.books,
                        childrens_middle_grade: [...state.books.childrens_middle_grade, action.result]
                    }
                }

            }
        }


    }


    if (action.type === 'FETCH_API_FAIL') {

        if (action.type_content === 'books') {


            if (action.content === 'youngadult') {


                return {
                    ...state,


                    books: {...state.books, young_adult: false}
                }

            }


            if (action.content === 'fiction') {

                return {
                    ...state,


                    books: {...state.books, hardcover_fiction: false}
                }
            }

            if (action.content === 'nonFiction') {


                return {
                    ...state,


                    books: {...state.books, hardcover_nonfiction: false}
                }

            }

            if (action.content === 'graphicnovelsmanga') {

                return {
                    ...state,


                    books: {
                        ...state.books, graphic_books_and_manga: false
                    }
                }

            }

            if (action.content === 'middlegrade') {

                return {
                    ...state,


                    books: {
                        ...state.books,
                        childrens_middle_grade: [...state.books.childrens_middle_grade, action.result]
                    }
                }

            }
        }


    }

    return state;
};


export default rootReducer;