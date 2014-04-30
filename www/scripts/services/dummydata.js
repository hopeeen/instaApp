        app.factory('dummyData', function() {

            return {
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
                
                
                getAchievements: function(){
                  var achievements = [{name: 'Sultanahmet District', points: '100', description: ' Neighborhoods; Historic Walking Areas The old section of Istanbul where you can find many attractions including Topkapi Palace and the Blue Mosque.'},
                      {name: 'Kariye Museum', points: '10', description: 'The Chora Church (Turkish Kariye Müzesi, Camii yahut Kilisesi — variously the Chora Museum, Mosque or Church) is considered to be one of the most beautiful examples of a Byzantine church. The church is situated in the western, Erdinekapı district of İstanbul. In the 16th century, the church was converted into a mosque by the Ottomon rulers, and it became a secularised museum in 1948. The interior of the building is covered with fine mosaics and frescoes.' },
                      {name: 'Rustem Pasha Mosque', points: '10', description: 'One of the smaller mosques in the city, it was built by Rustem Pasa in 1561 and is noted for the very fine tiles covering the interior and exterior walls.'},
                      {name: 'Rahmi M. Koch Museum', points: '10', description: 'The Rahmi M Koç Museum is the first major museum in Turkey dedicated to the history of Transport, Industry and Communications. Housed in magnificent buildings - themselves prime examples of industrial archaeology - on the shore of the historic Golden Horn, the collection contains thousands of items from gramophone needles to full size ships and aircraft.'},
                      {name: 'Drink an Efes at Espace', points: '10', description: 'Go to Espace Restaurant and drink an Efes.'},
                      {name: 'Suleymaniye Mosque', points: '10', description: 'Famed architect Sinan built this majestic structure for one of the greatest rulers of the Ottoman Empire. Although this mosque is less ornate, there are many similarities between it and the Hagia Sophia since the same architect was responsible for both.'},
                      {name: 'Blue Mosque', points: '15', description: 'Visit the famous Blue Mosque.'},
                      {name: 'Taksim', points: '10', description: 'Visit Taksim Square.'},
                      {name: 'Hagia Sophia Museum', points: '20', description: 'This architectural marvel displays 30 million gold tiles throughout its interior, and a wide, flat dome which was a bold engineering feat at the time it was constructed in the 6th century.'},
                      {name: 'Bosphorus bridge', points: '10', description: 'Visit the Bosphorus bridge.'},
                      {name: 'Basilica Cistern', points: '10', description: '"Sunken Palace", or Yerebatan Sarnıcı - "Sunken Cistern") is located in opposite of Sultan Ahmed Mosque (Blue Mosque). its a nice, mysterious place, in which you feel, you are in old epochs.'},
                      {name: 'Sakip Sabanci Museum', points: '10', description: 'Museum.'},
                      {name: 'Giycek Old Time Photo Studio', points: '10', description: 'Giycek Old Time Photo Studio is the one & only old time photo studio in Istanbul and it is based in Galata district very close to both Galata Tower and Tunel Square on Istiklal Street. Our issue is to provide fun, original, unforgettable experience and long lasting memory of Istanbul for Istanbul travellers. We have a wide range of costumes of different periods during Ottoman Era under the concepts of Dynasty, Millitary and much more.'},
                      {name: 'Topkapi Palace', points: '10', description: 'Topkapı Palace was the main residence of the sultan and his court.It was initially the seat of goverments as well as the imperial residence.Even though access was strictly regulated,inhabitans of the place rarely had to venture out since the palace functioned almost as an autonomous entity,a city within a city.'},
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
