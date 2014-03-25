'use strict';
angular.module('istanbulApp')
        .factory('dummyData', function() {

            return {
                getSubjects: function() {
                    var subjects = [{
                            name: 'Matematikk 2',
                            id: 1,
                            code: 'TDAT4200',
                            queueActive: true,
                            exercises: [
                                {
                                    name: '1',
                                    approved: true,
                                    mandatory: false,
                                    deadline: new Date,
                                    comment: "Test"
                                },
                                {
                                    name: '2',
                                    approved: false,
                                    mandatory: true,
                                    deadline: new Date,
                                    comment: "Test"
                                },
                                {
                                    name: '3',
                                    approved: true,
                                    mandatory: true,
                                    deadline: new Date,
                                    comment: "Test"
                                },
                                {
                                    name: '4',
                                    approved: false,
                                    mandatory: true,
                                    deadline: new Date,
                                    comment: "Test"
                                },
                                {
                                    name: '5',
                                    approved: false,
                                    mandatory: false,
                                    deadline: new Date,
                                    comment: "Test"
                                },
                                {
                                    name: '6',
                                    approved: true,
                                    mandatory: true,
                                    deadline: new Date,
                                    comment: "Test"
                                },
                                {
                                    name: '7',
                                    approved: false,
                                    mandatory: true,
                                    deadline: new Date,
                                    comment: "Test"
                                },
                                {
                                    name: '8',
                                    approved: true,
                                    mandatory: true,
                                    deadline: new Date,
                                    comment: "Test"
                                },
                                {
                                    name: '9',
                                    approved: true,
                                    mandatory: false,
                                    deadline: new Date,
                                    comment: "Test"
                                },
                                {
                                    name: '10',
                                    approved: false,
                                    mandatory: true,
                                    deadline: new Date,
                                    comment: "Test"
                                },
                                {
                                    name: '11',
                                    approved: false,
                                    mandatory: false,
                                    deadline: new Date,
                                    comment: "Test"
                                },
                                {
                                    name: '12',
                                    approved: true,
                                    mandatory: true,
                                    deadline: new Date,
                                    comment: "Test"
                                },
                                {
                                    name: '13',
                                    approved: true,
                                    mandatory: true,
                                    deadline: new Date,
                                    comment: "Test"
                                },
                                {
                                    name: '14',
                                    approved: true,
                                    mandatory: true,
                                    deadline: new Date,
                                    comment: "Test"
                                },
                                {
                                    name: '15',
                                    approved: true,
                                    mandatory: false,
                                    deadline: new Date,
                                    comment: "Test"
                                }
                            ]
                        }, {
                            id: 2,
                            name: 'Programmering Grunnkurs',
                            code: 'TDAT1223',
                            queueActive: false,
                            exercises: [
                                {
                                    name: '1',
                                    approved: false,
                                    mandatory: true,
                                    deadline: new Date,
                                    comment: "Test"
                                },
                                {
                                    name: '2',
                                    approved: false,
                                    mandatory: false,
                                    deadline: new Date,
                                    comment: "Test"
                                }
                            ]
                        }, {
                            id: 3,
                            name: 'Databaser med videregående programmering',
                            code: 'TDAT2123',
                            queueActive: true,
                            exercises: [
                                {
                                    name: '1',
                                    approved: true,
                                    mandatory: true,
                                    deadline: new Date,
                                    comment: "Test"
                                },
                                {
                                    name: '2',
                                    approved: true,
                                    mandatory: true,
                                    deadline: new Date,
                                    comment: "Test"
                                }
                            ]
                        }, {
                            id: 4,
                            name: 'Sannsynlighet',
                            code: 'TDAT2122',
                            queueActive: false,
                            exercises: [
                                {
                                    name: '1',
                                    approved: false,
                                    mandatory: true,
                                    deadline: new Date,
                                    comment: "Test"

                                },
                                {
                                    name: '2',
                                    approved: true,
                                    mandatory: false,
                                    deadline: new Date,
                                    comment: "Test"
                                }
                            ]
                        }, {
                            id: 5,
                            name: 'HTML',
                            code: 'TDAT4444',
                            queueActive: false,
                            exercises: [
                                {
                                    name: '1',
                                    approved: false,
                                    mandatory: true,
                                    deadline: new Date,
                                    comment: "Test"

                                },
                                {
                                    name: '2',
                                    approved: true,
                                    mandatory: false,
                                    deadline: new Date,
                                    comment: "Test"
                                }
                            ]
                        }];
                    return subjects;
                },
                getAccounts: function() {
                    var accounts = [{
                            id: '1',
                            firstname: 'Jonas',
                            surname: 'Aklestad'

                        },
                        {
                            id: '2',
                            firstname: 'Jøran',
                            surname: 'Bjerksetmyr'
                        },
                        {
                            id: '3',
                            firstname: 'Daniel',
                            surname: 'Fiskvik'
                        },
                        {
                            id: '4',
                            firstname: 'Tony',
                            surname: 'Hesvjevik'
                        }];
                    return accounts;
                },
                getExercises: function() {
                    var exercises = [{
                            id: '1'
                        },
                        {
                            id: '2'
                        },
                        {
                            id: '3'
                        },
                        {
                            id: '4'
                        },
                        {
                            id: '5'
                        }];
                    return exercises;
                },
                
                getElements: function() {
                    var queueElement = [
                        
                        {
                            time: '10:00',
                            comment: 'Godkjenning',
                            location: [
                                {
                                    table: '2',
                                    floor: 'labben'
                                }
                            ],
                            exercises: [
                                {
                                    id: '1'
                                },
                                {
                                    id: '2'
                                },
                                {
                                    id: '4'
                                }
                            ],
                            accounts: [
                                {
                                    firstname: 'Jonas',
                                    lastname: 'Aklestad'
                                },
                                {
                                    firstname: 'Jøran',
                                    lastname: 'Bjerksetmyr'
                                },
                                {
                                    firstname: 'Daniel',
                                    lastname: 'Fiskvik'
                                },
                                {
                                    firstname: 'Tony',
                                    lastname: 'Hesjevik'
                                }
                            ]
                        },
                        {
                            time: '11:00',
                            comment: 'Hjelp',
                            location: [
                                {
                                    table: '8',
                                    floor: 'thilde-kontoret'
                                }
                            ],
                            exercises: [
                                {
                                    id: '5'
                                },
                                {
                                    id: '7'
                                },
                                {
                                    id: '9'
                                }
                            ],
                            accounts: [
                                {
                                    firstname: 'Jostein',
                                    lastname: 'Bever'
                                },
                                {
                                    firstname: 'Marthe',
                                    lastname: 'Kyrus'
                                },
                                {
                                    firstname: 'Nina',
                                    lastname: 'Minash'
                                }
                            ]
                        }
                        
                    ];
                    return queueElement;
                }
            };
        });
