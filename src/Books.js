import React from 'react';
import './Styles/Styles.css'
import HorizontalList from './Components/HorizontalList'



const info_movies =[
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
                    title: "\"I Give You My Body . . .\"",
                    subtitle: "How I Write Sex Scenes",
                    authors: [
                        "Diana Gabaldon"
                    ],
                    publisher: "Dell",
                    publishedDate: "2016-08-16",
                    description: "NEW YORK TIMES BESTSELLER • For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
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
                    title: "\"I Give You My Body . . .\"",
                    subtitle: "How I Write Sex Scenes",
                    authors: [
                        "Diana Gabaldon"
                    ],
                    publisher: "Dell",
                    publishedDate: "2016-08-16",
                    description: "NEW YORK TIMES BESTSELLER • For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
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
                    title: "\"I Give You My Body . . .\"",
                    subtitle: "How I Write Sex Scenes",
                    authors: [
                        "Diana Gabaldon"
                    ],
                    publisher: "Dell",
                    publishedDate: "2016-08-16",
                    description: "NEW YORK TIMES BESTSELLER • For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
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
                    title: "\"I Give You My Body . . .\"",
                    subtitle: "How I Write Sex Scenes",
                    authors: [
                        "Diana Gabaldon"
                    ],
                    publisher: "Dell",
                    publishedDate: "2016-08-16",
                    description: "NEW YORK TIMES BESTSELLER • For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
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
                    title: "\"I Give You My Body . . .\"",
                    subtitle: "How I Write Sex Scenes",
                    authors: [
                        "Diana Gabaldon"
                    ],
                    publisher: "Dell",
                    publishedDate: "2016-08-16",
                    description: "NEW YORK TIMES BESTSELLER • For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
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
                    title: "\"I Give You My Body . . .\"",
                    subtitle: "How I Write Sex Scenes",
                    authors: [
                        "Diana Gabaldon"
                    ],
                    publisher: "Dell",
                    publishedDate: "2016-08-16",
                    description: "NEW YORK TIMES BESTSELLER • For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
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
                    title: "\"I Give You My Body . . .\"",
                    subtitle: "How I Write Sex Scenes",
                    authors: [
                        "Diana Gabaldon"
                    ],
                    publisher: "Dell",
                    publishedDate: "2016-08-16",
                    description: "NEW YORK TIMES BESTSELLER • For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
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
                    title: "\"I Give You My Body . . .\"",
                    subtitle: "How I Write Sex Scenes",
                    authors: [
                        "Diana Gabaldon"
                    ],
                    publisher: "Dell",
                    publishedDate: "2016-08-16",
                    description: "NEW YORK TIMES BESTSELLER • For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
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
                    title: "\"I Give You My Body . . .\"",
                    subtitle: "How I Write Sex Scenes",
                    authors: [
                        "Diana Gabaldon"
                    ],
                    publisher: "Dell",
                    publishedDate: "2016-08-16",
                    description: "NEW YORK TIMES BESTSELLER • For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
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
                    title: "\"I Give You My Body . . .\"",
                    subtitle: "How I Write Sex Scenes",
                    authors: [
                        "Diana Gabaldon"
                    ],
                    publisher: "Dell",
                    publishedDate: "2016-08-16",
                    description: "NEW YORK TIMES BESTSELLER • For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
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
                    title: "\"I Give You My Body . . .\"",
                    subtitle: "How I Write Sex Scenes",
                    authors: [
                        "Diana Gabaldon"
                    ],
                    publisher: "Dell",
                    publishedDate: "2016-08-16",
                    description: "NEW YORK TIMES BESTSELLER • For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
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
                    title: "\"I Give You My Body . . .\"",
                    subtitle: "How I Write Sex Scenes",
                    authors: [
                        "Diana Gabaldon"
                    ],
                    publisher: "Dell",
                    publishedDate: "2016-08-16",
                    description: "NEW YORK TIMES BESTSELLER • For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
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
                    title: "\"I Give You My Body . . .\"",
                    subtitle: "How I Write Sex Scenes",
                    authors: [
                        "Diana Gabaldon"
                    ],
                    publisher: "Dell",
                    publishedDate: "2016-08-16",
                    description: "NEW YORK TIMES BESTSELLER • For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
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
                    title: "\"I Give You My Body . . .\"",
                    subtitle: "How I Write Sex Scenes",
                    authors: [
                        "Diana Gabaldon"
                    ],
                    publisher: "Dell",
                    publishedDate: "2016-08-16",
                    description: "NEW YORK TIMES BESTSELLER • For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
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
                    title: "\"I Give You My Body . . .\"",
                    subtitle: "How I Write Sex Scenes",
                    authors: [
                        "Diana Gabaldon"
                    ],
                    publisher: "Dell",
                    publishedDate: "2016-08-16",
                    description: "NEW YORK TIMES BESTSELLER • For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
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
                    title: "\"I Give You My Body . . .\"",
                    subtitle: "How I Write Sex Scenes",
                    authors: [
                        "Diana Gabaldon"
                    ],
                    publisher: "Dell",
                    publishedDate: "2016-08-16",
                    description: "NEW YORK TIMES BESTSELLER • For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
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
                    title: "\"I Give You My Body . . .\"",
                    subtitle: "How I Write Sex Scenes",
                    authors: [
                        "Diana Gabaldon"
                    ],
                    publisher: "Dell",
                    publishedDate: "2016-08-16",
                    description: "NEW YORK TIMES BESTSELLER • For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
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
                    title: "\"I Give You My Body . . .\"",
                    subtitle: "How I Write Sex Scenes",
                    authors: [
                        "Diana Gabaldon"
                    ],
                    publisher: "Dell",
                    publishedDate: "2016-08-16",
                    description: "NEW YORK TIMES BESTSELLER • For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
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
                    title: "\"I Give You My Body . . .\"",
                    subtitle: "How I Write Sex Scenes",
                    authors: [
                        "Diana Gabaldon"
                    ],
                    publisher: "Dell",
                    publishedDate: "2016-08-16",
                    description: "NEW YORK TIMES BESTSELLER • For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
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
                    title: "\"I Give You My Body . . .\"",
                    subtitle: "How I Write Sex Scenes",
                    authors: [
                        "Diana Gabaldon"
                    ],
                    publisher: "Dell",
                    publishedDate: "2016-08-16",
                    description: "NEW YORK TIMES BESTSELLER • For writers looking to make sure their next physical interlude on the page inspires readers to share the moment rather than to laugh at it, bestselling author Diana Gabaldon divulges the writing secrets behind the sex scenes in her wildly popular Outlander novels. “Ask me to your bed,” he said. “I shall come to ye.” In this revealing compendium, acclaimed writer Diana Gabaldon shares her invaluable lessons for creating an immersive reading experience, from evoking a mood to using the power of emotions to communicate physical intimacy. You’ll learn the difference between gratuitous sex and genuine encounters that move the story forward, and how to handle less-than-savory acts that nevertheless serve a narrative purpose. Gabaldon also notes that sex can be conveyed instead of described. With such tips as “The Rule of Three” for involving the senses, handy lists of naughty euphemisms (with instructions for use), and Gabaldon’s own examples from the Outlander novels, “I Give You My Body . . .” is a master class in writing to draw readers in and keep them riveted to the page.",
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
];





function Books (){
    return (

        <div>
                <h1 className="titulos pt-3 pb-3">BOOKS</h1>

            <HorizontalList titulo={'Young Adult...'} info={info_movies} type={'Book'} listacess={'no'}/>

            <HorizontalList titulo={'Fiction ...'} info={info_movies} type={'Book'} listacess={'no'}/>

            <HorizontalList titulo={'NonFiction ...'} info={info_movies} type={'Book'} listacess={'no'} />

            <HorizontalList titulo={'Graphic Novels & Manga ...'} info={info_movies} type={'Book'} listacess={'no'}/>


        </div>
)


}



export default Books;
