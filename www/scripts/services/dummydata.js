        app.factory('dummyData', function() {

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
                
                    getInterest: function() {
                    var interests = [{
                            interestName: 'Blue Moske',
                            interestLocation: 'Istanbul',
                            interestRating: '5.0',
                            imgname: 'redmoske',
                            coordinates: {
                                lat: 63.40850844459906,
                                lng: 10.4425048828125,
                            }
                        },
                        {
                            interestName: 'Red Moske',
                            interestLocation: 'Istanbul',
                            interestRating: '6.0',
                            imgname: 'redmoske'

                        },
                        {
                            interestName: 'Pink Moske',
                            interestLocation: 'Istanbul',
                            interestRating: '3.0',
                            imgname: 'pinkmoske'

                        },
                        {
                            interestName: 'Brown Moske',
                            interestLocation: 'Istanbul',
                            interestRating: '1.0',
                            imgname: 'brownmoske'

                        }];
                    return interests;
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
                getAchievements: function(){
                  var achievements = [{name: 'The swimmer', points: '100', description: 'Take a swim somewhere in Istanbul.'},
                      {name: 'Kariye Museum', points: '10', description: 'The Chora Church (Turkish Kariye Müzesi, Camii yahut Kilisesi — variously the Chora Museum, Mosque or Church) is considered to be one of the most beautiful examples of a Byzantine church. The church is situated in the western, Erdinekapı district of İstanbul. In the 16th century, the church was converted into a mosque by the Ottomon rulers, and it became a secularised museum in 1948. The interior of the building is covered with fine mosaics and frescoes.' },
                      {name: 'Rustem Pasha Mosque', points: '10', description: 'One of the smaller mosques in the city, it was built by Rustem Pasa in 1561 and is noted for the very fine tiles covering the interior and exterior walls.'},
                      {name: 'Rahmi M. Koch Museum', points: '10', description: 'The Rahmi M Koç Museum is the first major museum in Turkey dedicated to the history of Transport, Industry and Communications. Housed in magnificent buildings - themselves prime examples of industrial archaeology - on the shore of the historic Golden Horn, the collection contains thousands of items from gramophone needles to full size ships and aircraft.'},
                      {name: 'Drink an Efes at Espace', points: '10', description: 'Go to Espace Restaurant and drink an Efes.'},
                      {name: 'Suleymaniye Mosque', points: '10', description: 'Famed architect Sinan built this majestic structure for one of the greatest rulers of the Ottoman Empire. Although this mosque is less ornate, there are many similarities between it and the Hagia Sophia since the same architect was responsible for both.'},
                      {name: 'Blue Mosque', points: '15', description: 'Visit the famous Blue Mosque.'},
                      {name: 'Taksim', points: '10', description: 'Visit Taksim Square.'},
                      {name: 'The king of Efes', points: '20', description: 'Drink all the Efes!'},
                      {name: 'Bosphorus bridge', points: '10', description: 'Visit the Bosphorus bridge.'},
                      {name: 'Asia or Europe? Guess Ill do both.', points: '30', description: 'Visit both Asia and Europe at the same day.'}
                    
                    ];
                  return achievements;
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
