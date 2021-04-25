module.exports = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'Ticket Booking',
        description: 'Ticket booking service',
        contact: {
            name: 'Nikhil Bharadwaj',
            email: 'nikhilbharadwaj38@gmail.com',
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    servers: [
        {
            url: `http://localhost:${process.env.PORT || 8080}/`,
            description: 'Local server'
        }
    ],
    tags: [
        {
            name: 'CRUD operations'
        }
    ],
    paths: {
        '/ticket-booking/fetch/{id}': {
            get: {
                tags: ['CRUD operations'],
                description: 'Get users',
                operationId: 'getUsers',
                security: [
                    {
                        basicAuth: []
                    }
                ],
                parameters: [
                    {
                        name: 'authorization',
                        in: 'query',
                        schema: {
                            type: 'string',
                            default: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InRpbWVzdGFtcCI6MTYxOTI4Njc1OTEwNH0sImlhdCI6MTYxOTI4Njc1OX0.wyHf6j_PnzSS-mmMxkaafTiTItMA65RqRkuYB0p7Kk0'
                        },
                        required: true,
                        description: 'Authorization token for api access'
                    },
                    {
                        name: 'id',
                        in: 'path',
                        schema: {
                            type: 'string',
                        },
                        required: true
                    }
                ],
                responses: {
                    '200': {
                        description: 'Users were obtained',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/TicketBooking'
                                }
                            }
                        }
                    },
                    '400': {
                        description: 'Missing parameters',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error'
                                },
                                example: {
                                    error: 'id is empty',
                                }
                            }
                        }
                    },
                    '401': {
                        description: 'Authentication failed',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error'
                                },
                                example: {
                                    error: 'AUTHENTICATION_FAILED',
                                }
                            }
                        }
                    },
                    '404': {
                        description: 'Data not found',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error'
                                },
                                example: {
                                    error: 'Booking details not found',
                                }
                            }
                        }
                    },
                    '500': {
                        description: 'Internal server error',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error'
                                },
                                example: {
                                    error: 'Error occured while fetching booking details',
                                }
                            }
                        }
                    }
                }
            },
        },
        '/ticket-booking/confirm': {
            post: {
                tags: ['CRUD operations'],
                description: 'Confirm ticket booking',
                operationId: 'confirm',
                parameters: [
                    {
                        name: 'authorization',
                        in: 'query',
                        schema: {
                            type: 'string',
                            default: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InRpbWVzdGFtcCI6MTYxOTI4Njc1OTEwNH0sImlhdCI6MTYxOTI4Njc1OX0.wyHf6j_PnzSS-mmMxkaafTiTItMA65RqRkuYB0p7Kk0'
                        },
                        required: true,
                        description: 'Authorization token for api access'
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/TicketBookingConfirm'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    '200': {
                        description: 'Users were obtained',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/TicketBooking'
                                }
                            }
                        }
                    },
                    '400': {
                        description: 'Missing parameters',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error'
                                },
                                example: {
                                    error: 'id is empty',
                                }
                            }
                        }
                    },
                    '401': {
                        description: 'Authentication failed',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error'
                                },
                                example: {
                                    error: 'AUTHENTICATION_FAILED',
                                }
                            }
                        }
                    },
                    '404': {
                        description: 'Data not found',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error'
                                },
                                example: {
                                    error: 'Booking details not found',
                                }
                            }
                        }
                    },
                    '500': {
                        description: 'Internal server error',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error'
                                },
                                example: {
                                    error: 'Error occured while fetching booking details',
                                }
                            }
                        }
                    }
                }
            }
        },
        '/ticket-booking/update': {
            put: {
                tags: ['CRUD operations'],
                description: 'Update ticket booking',
                operationId: 'update',
                parameters: [
                    {
                        name: 'authorization',
                        in: 'query',
                        schema: {
                            type: 'string',
                            default: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InRpbWVzdGFtcCI6MTYxOTI4Njc1OTEwNH0sImlhdCI6MTYxOTI4Njc1OX0.wyHf6j_PnzSS-mmMxkaafTiTItMA65RqRkuYB0p7Kk0'
                        },
                        required: true,
                        description: 'Authorization token for api access'
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/TicketBooking'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    '200': {
                        description: 'Users were obtained',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/TicketBooking'
                                }
                            }
                        }
                    },
                    '400': {
                        description: 'Missing parameters',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error'
                                },
                                example: {
                                    error: 'id is empty',
                                }
                            }
                        }
                    },
                    '401': {
                        description: 'Authentication failed',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error'
                                },
                                example: {
                                    error: 'AUTHENTICATION_FAILED',
                                }
                            }
                        }
                    },
                    '404': {
                        description: 'Data not found',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error'
                                },
                                example: {
                                    error: 'Booking details not found',
                                }
                            }
                        }
                    },
                    '500': {
                        description: 'Internal server error',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error'
                                },
                                example: {
                                    error: 'Error occured while fetching booking details',
                                }
                            }
                        }
                    }
                }
            }
        },
        '/ticket-booking/cancel/{id}': {
            delete: {
                tags: ['CRUD operations'],
                description: 'Cancel ticket booking',
                operationId: 'cancel',
                parameters: [
                    {
                        name: 'authorization',
                        in: 'query',
                        schema: {
                            type: 'string',
                            default: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InRpbWVzdGFtcCI6MTYxOTI4Njc1OTEwNH0sImlhdCI6MTYxOTI4Njc1OX0.wyHf6j_PnzSS-mmMxkaafTiTItMA65RqRkuYB0p7Kk0'
                        },
                        required: true,
                        description: 'Authorization token for api access'
                    },
                    {
                        name: 'id',
                        in: 'path',
                        schema: {
                            type: 'string',
                        },
                        required: true
                    }
                ],
                responses: {
                    '200': {
                        description: 'Users were obtained',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Success'
                                },
                                example: {
                                    success: 'Booking cancelled successfully'
                                }
                            }
                        }
                    },
                    '400': {
                        description: 'Missing parameters',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error'
                                },
                                example: {
                                    error: 'id is empty',
                                }
                            }
                        }
                    },
                    '401': {
                        description: 'Authentication failed',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error'
                                },
                                example: {
                                    error: 'AUTHENTICATION_FAILED',
                                }
                            }
                        }
                    },
                    '404': {
                        description: 'Data not found',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error'
                                },
                                example: {
                                    error: 'Booking details not found',
                                }
                            }
                        }
                    },
                    '500': {
                        description: 'Internal server error',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error'
                                },
                                example: {
                                    error: 'Error occured while fetching booking details',
                                }
                            }
                        }
                    }
                }
            }
        },
        '/analytics/visited?from={from}&to={to}&method={method}': {
            get: {
                tags: ['Analytics'],
                description: 'Get visited audience analytics',
                operationId: 'visitedAnalytics',
                security: [
                    {
                        basicAuth: []
                    }
                ],
                parameters: [
                    {
                        name: 'authorization',
                        in: 'query',
                        schema: {
                            type: 'string',
                            default: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InRpbWVzdGFtcCI6MTYxOTI4Njc1OTEwNH0sImlhdCI6MTYxOTI4Njc1OX0.wyHf6j_PnzSS-mmMxkaafTiTItMA65RqRkuYB0p7Kk0'
                        },
                        required: true,
                        description: 'Authorization token for api access'
                    },
                    {
                        name: 'from',
                        in: 'query',
                        schema: {
                            type: 'string',
                            default: '2021-01-01'
                        },
                        required: true
                    },
                    {
                        name: 'to',
                        in: 'query',
                        schema: {
                            type: 'string',
                            default: '2021-09-01'
                        },
                        required: true
                    },
                    {
                        name: 'method',
                        in: 'query',
                        schema: {
                            type: 'string',
                            default: 'aggregate'
                        },
                        required: false
                    }
                ],
                responses: {
                    '200': {
                        description: 'Users were obtained',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/VisitedAnalytics'
                                }
                            }
                        }
                    },
                    '400': {
                        description: 'Missing parameters',
                        content: {
                            'application/json': {
                                schema: {
                                    anyOf: [
                                        { $ref: '#/components/schemas/FromError' },
                                        { $ref: '#/components/schemas/ToError' }
                                    ]
                                },
                            }
                        }
                    },
                    '401': {
                        description: 'Authentication failed',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error'
                                },
                                example: {
                                    error: 'AUTHENTICATION_FAILED',
                                }
                            }
                        }
                    },
                    '404': {
                        description: 'Data not found',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error'
                                },
                                example: {
                                    error: 'Analytics not found',
                                }
                            }
                        }
                    },
                    '500': {
                        description: 'Internal server error',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error'
                                },
                                example: {
                                    error: 'Error occured while fetching booking details',
                                }
                            }
                        }
                    }
                }
            },
        },
        '/analytics/earned?from={from}&to={to}&method={method}': {
            get: {
                tags: ['Analytics'],
                description: 'Get earned amount analytics',
                operationId: 'earnedAnalytics',
                security: [
                    {
                        basicAuth: []
                    }
                ],
                parameters: [
                    {
                        name: 'authorization',
                        in: 'query',
                        schema: {
                            type: 'string',
                            default: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InRpbWVzdGFtcCI6MTYxOTI4Njc1OTEwNH0sImlhdCI6MTYxOTI4Njc1OX0.wyHf6j_PnzSS-mmMxkaafTiTItMA65RqRkuYB0p7Kk0'
                        },
                        required: true,
                        description: 'Authorization token for api access'
                    },
                    {
                        name: 'from',
                        in: 'query',
                        schema: {
                            type: 'string',
                            default: '2021-01-01'
                        },
                        required: true
                    },
                    {
                        name: 'to',
                        in: 'query',
                        schema: {
                            type: 'string',
                            default: '2021-09-01'
                        },
                        required: true
                    },
                    {
                        name: 'method',
                        in: 'query',
                        schema: {
                            type: 'string',
                            default: 'aggregate'
                        },
                        required: false
                    }
                ],
                responses: {
                    '200': {
                        description: 'Users were obtained',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/EarnedAnalytics'
                                }
                            }
                        }
                    },
                    '400': {
                        description: 'Missing parameters',
                        content: {
                            'application/json': {
                                schema: {
                                    anyOf: [
                                        { $ref: '#/components/schemas/FromError' },
                                        { $ref: '#/components/schemas/ToError' }
                                    ]
                                }
                            }
                        }
                    },
                    '401': {
                        description: 'Authentication failed',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error'
                                },
                                example: {
                                    error: 'AUTHENTICATION_FAILED',
                                }
                            }
                        }
                    },
                    '404': {
                        description: 'Data not found',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error'
                                },
                                example: {
                                    error: 'Analytics not found',
                                }
                            }
                        }
                    },
                    '500': {
                        description: 'Internal server error',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error'
                                },
                                example: {
                                    error: 'Error occured while fetching booking details',
                                }
                            }
                        }
                    }
                }
            },
        }
    },
    components: {
        schemas: {
            TicketBookingConfirm: {
                type: 'object',
                properties: {
                    "customerName": {
                        type: 'string',
                        example: "Nikhil"
                    },
                    "performanceTitle": {
                        type: 'string',
                        example: "Avengers End Game"
                    },
                    "performanceTime": {
                        type: 'date',
                        example: "2021-05-25T17:50:16.691Z"
                    },
                    "ticketPrice": {
                        type: 'number',
                        example: 300
                    }
                }
            },
            TicketBooking: {
                type: 'object',
                properties: {
                    "_id": {
                        type: 'string',
                        example: "6084674772fb63236de75afb"
                    },
                    "customerName": {
                        type: 'string',
                        example: "Nikhil"
                    },
                    "performanceTitle": {
                        type: 'string',
                        example: "Avengers End Game"
                    },
                    "performanceTime": {
                        type: 'date',
                        example: "2021-05-25T17:50:16.691Z"
                    },
                    "ticketPrice": {
                        type: 'number',
                        example: 300
                    },
                    "creationDate": {
                        type: 'date',
                        example: "2021-04-25T11:07:32.632Z"
                    },
                    "__v": {
                        type: 'number',
                        example: 0
                    }
                }
            },
            Error: {
                type: 'object',
                properties: {
                    error: {
                        type: 'string'
                    }
                }
            },
            Success: {
                type: 'object',
                properties: {
                    success: {
                        type: 'string'
                    }
                }
            },
            Visits: {
                type: 'object',
                properties: {
                    month: {
                        type: 'string',
                        example: 'April'
                    },
                    summaryVisits: {
                        type: 'number',
                        example: 40
                    }
                }
            },
            Earns: {
                type: 'object',
                properties: {
                    month: {
                        type: 'string',
                        example: 14000
                    },
                    summaryProfit: {
                        type: 'number'
                    }
                }
            },
            VisitedAnalytics: {
                type: 'array',
                items: {
                    $ref: '#/components/schemas/Visits',
                }
            },
            EarnedAnalytics: {
                type: 'array',
                items: {
                    $ref: '#/components/schemas/Earns',
                }
            },
            FromError: {
                type: 'object',
                properties: {
                    error: {
                        type: 'string',
                        example: 'From date is empty'
                    }
                }
            },
            ToError: {
                type: 'object',
                properties: {
                    error: {
                        type: 'string',
                        example: 'To date is empty'
                    }
                }
            }
        },
        securitySchemes: {
            basicAuth: {
                type: "http",
                schema: 'basic',
            }
        }
    },
    security: [
        {
            basicAuth: []
        }
    ],
};