


    app.value('NEW_TODO_ID', -1);

    app.service('mapService', function () {
      var map;
      this.setMap = function (myMap) {
        map = myMap;
      };
      this.getMap = function () {
        if (map) return map;
        throw new Error("Map not defined");
      };
      this.getLatLng = function () {
        var center = map.getCenter();
        return {
          lat: center.lat(),
          lng: center.lng()
        };
      };
    });

    app.service('todosService', function ($filter) {
      // nextId and list both have mock starting data
      this.nextId = 4;
      this.items = [
        {
          id: 1,
          completed: false,
          title: 'Play Tennis',
          desc: '',
          lat: 43.09278984218124,
          lng: -89.36774236078266
        }, {
          id: 2,
          completed: true,
          title: 'Buy Groceries',
          desc: 'Steak, Pasta, Spinach',
          lat: 43.06487353914984,
          lng: -89.41749499107603
        }, {
          id: 3,
          completed: false,
          title: 'Picnic Time',
          desc: 'Hang out with friends',
          lat: 43.0869882068853,
          lng: -89.42141638065578
        }
      ];
      this.filter = {};
      this.filtered = function () {
        return $filter('filter')(this.items, this.filter);
      };
      this.remainingCount = function () {
        return $filter('filter')(this.items, {completed: false}).length;
      };
      this.getTodoById = function (todoId) {
        var todo, i;
        for (i = this.items.length - 1; i >= 0; i--) {
          todo = this.items[i];
          if (todo.id === todoId) {
            return todo;
          }
        }
        return false;
      };
      this.addTodo = function (title, desc, lat, lng) {
        var newTodo = {
          id: this.nextId++,
          completed: false,
          title: title,
          desc: desc,
          lat: lat,
          lng: lng
        };
        this.items.push(newTodo);
      };
      this.updateTodo = function (todoId, title, desc, lat, lng, comp) {
        var todo = this.getTodoById(todoId);
        if (todo) {
          todo.title = title;
          todo.desc = desc;
          todo.lat = lat;
          todo.lng = lng;
          todo.completed = comp;
          todo.id = this.nextId++;
        }
      };
      this.prune = function () {
        var flag = false, i;
        for (var i = this.items.length - 1; i >= 0; i--) {
          if (this.items[i].completed) {
            flag = true;
            this.items.splice(i, 1);
          }
        }
        if (flag) this.nextId++;
      };
    });

    app.service('markersService', function () {
      this.markers = [];
      this.getMarkerByTodoId = function (todoId) {
        var marker, i;
        for (i = this.markers.length - 1; i >= 0; i--) {
          marker = this.markers[i];
          if (marker.get("id") === todoId) {
            return marker;
          }
        }
        return false;
      };
    });

    app.service('infoWindowService', function (mapService) {
      var infoWindow;
      this.data = {};
      this.registerInfoWindow = function (myInfoWindow) {
        infowindow = myInfoWindow;
      };
      this.setData = function (todoId, todoTitle, todoDesc) {
        this.data.id = todoId;
        this.data.title = todoTitle;
        this.data.desc = todoDesc;
      };
      this.open = function (marker) {
        infowindow.open(mapService.getMap(), marker);
      };
      this.close = function () {
        if (infowindow) {
          infowindow.close();
          this.data = {};
        }
      };
    });

    app.service('mapControlsService', function (infoWindowService, markersService, NEW_TODO_ID) {
      this.editTodo = false;
      this.editTodoId = NEW_TODO_ID;
      this.newTodo = function () {
        this.editTodoById();
      };
      this.editTodoById = function (todoId) {
        this.editTodoId = todoId || NEW_TODO_ID;
        this.editTodo = true;
      };
      this.openInfoWindowByTodoId = function (todoId) {
        var marker = markersService.getMarkerByTodoId(todoId);
        if (marker) {
          infoWindowService.setData(todoId, marker.getTitle(), marker.get("desc"));
          infoWindowService.open(marker);
          return; 
        }
      };
    });

    app.controller('EditTodoCtrl', function ($scope, mapService, todosService, infoWindowService, mapControlsService, NEW_TODO_ID) {
      var editPinImage,
        editMarker;

      $scope.editTodo = {};

      // editMarker Setup Start

      editPinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + "55FF00",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));

      editMarker = new google.maps.Marker({
        title: "Drag Me",
        draggable: true,
        clickable: false,
        icon: editPinImage,
        position: new google.maps.LatLng(0, 0)
      });   

      function editMarkerDragCallback (scope, myMarker) {
        return function () {
          var pos = myMarker.getPosition();
          scope.editTodo.lat = pos.lat();
          scope.editTodo.lng = pos.lng();
          if(!scope.$$phase) scope.$apply();
        };
      }
      google.maps.event.addListener(editMarker, 'drag', editMarkerDragCallback($scope, editMarker));

      function editMarkerDblClickCallback (scope) {
        return function () {
          scope.$apply(function () {
            scope.submitTodo();
          });
        };
      }
      google.maps.event.addListener(editMarker, 'dblclick', editMarkerDblClickCallback($scope));

      $scope.$watch('editTodo.lat + editTodo.lng', function (newValue, oldValue) {
        if (newValue !== oldValue) { 
          var pos = editMarker.getPosition(),
            latitude = pos.lat(),
            longitude = pos.lng();
          if ($scope.editTodo.lat !== latitude || $scope.editTodo.lng !== longitude)
            editMarker.setPosition(new google.maps.LatLng($scope.editTodo.lat || 0, $scope.editTodo.lng || 0));
        }
      });

      // editMarker Setup End

      $scope.$watch('controls.editTodo + controls.editTodoId', function () {
        var pos, todo = mapControlsService.editTodoId !== NEW_TODO_ID && todosService.getTodoById(mapControlsService.editTodoId);
        infoWindowService.close();
        if (mapControlsService.editTodo) {
          if (todo) {
            $scope.editTodo = {
              id: todo.id,
              title: todo.title,
              desc: todo.desc,
              lat: todo.lat,
              lng: todo.lng,
              comp: todo.completed,
              saveMsg: "Update Todo",
              cancelMsg: "Discard Changes"
            };
          } else {
            pos = mapService.getLatLng();
            $scope.editTodo = {
              id: NEW_TODO_ID,
              lat: pos.lat,
              lng: pos.lng,
              saveMsg: "Save Todo",
              cancelMsg: "Discard Todo"
            };
          }
          editMarker.setMap(mapService.getMap());
        } 
      });

      $scope.submitTodo = function () { 
        if ($scope.editTodoForm.$valid) {
          if ($scope.editTodo.id === NEW_TODO_ID)
            addTodo();
          else
            editTodo();
        }
      }

      $scope.resetCloseTodoForm = function () {
        editMarker.setMap(null);
        mapControlsService.editTodo = false;
        mapControlsService.editTodoId = NEW_TODO_ID;
        $scope.editTodo = {};
      }

      function addTodo () {
        todosService.addTodo(
          $scope.editTodo.title, 
          $scope.editTodo.desc, 
          $scope.editTodo.lat, 
          $scope.editTodo.lng);
        $scope.resetCloseTodoForm();
      }

      function editTodo () {
        todosService.updateTodo(
          $scope.editTodo.id, 
          $scope.editTodo.title, 
          $scope.editTodo.desc, 
          $scope.editTodo.lat, 
          $scope.editTodo.lng, 
          $scope.editTodo.comp);
        $scope.resetCloseTodoForm();
      }
    });

    app.directive('todoMaps', function ($compile) {
      return {
        controller: function ($scope, $location, mapService, mapControlsService, infoWindowService, todosService, markersService) {
          if ($location.path() === '') {
            $location.path('/');
          }

          $scope.location = $location;
          $scope.infow = infoWindowService;
          $scope.controls = mapControlsService;

          this.registerInfoWindow = function (myInfoWindow) {
            infoWindowService.registerInfoWindow(myInfoWindow);
          };

          this.registerMap = function (myMap) {
            mapService.setMap(myMap);
            $scope.todos = todosService;
          };

          $scope.$watch('location.path()', function (path) {
            todosService.filter = (path === '/active') ?
              { completed: false } : (path === '/completed') ?
              { completed: true } : null;
          });

          $scope.$watch('location.path() + todos.nextId + todos.remainingCount()', function () {
            var i,
              todos = todosService.filtered(),
              map = mapService.getMap(),
              todoId,
              marker,
              markers = markersService.markers,
              markerId,
              uniqueTodos = {};

            function addMarkerByTodoIndex (todoIndex) {
              var marker,
                markerOptions,
                todo = todos[todoIndex];

              markerOptions = {
                map: map,
                title: todo.title,
                position: new google.maps.LatLng(todo.lat, todo.lng)
              };
              marker = new google.maps.Marker(markerOptions);
              marker.setValues({
                id: todo.id,
                desc: todo.desc
              });
              markersService.markers.push(marker);

              function markerClickCallback (scope, todoId) {
                return function () {
                  scope.$apply(function () {
                    mapControlsService.openInfoWindowByTodoId(todoId);
                  });
                };
              }
              google.maps.event.addListener(marker, 'click', markerClickCallback($scope, todo.id));

              function markerDblClickCallback (scope, todoId) {
                return function () {
                  scope.$apply(function () {
                    mapControlsService.editTodoById(todoId);
                  });
                };
              }
              google.maps.event.addListener(marker, 'dblclick', markerDblClickCallback($scope, todo.id));
            }

            for (i = todos.length - 1; i >= 0; i--) {
              uniqueTodos[todos[i].id] = i;
            }  

            for (i = markers.length - 1; i >= 0; i--) {
              marker = markers[i];
              markerId = marker.get("id");
              if (uniqueTodos[markerId] !== undefined) {
                delete uniqueTodos[markerId];
              } else {
                marker.setMap(null);
                markers.splice(i,1);
              }
            }

            for (todoId in uniqueTodos) {
              if (uniqueTodos.hasOwnProperty(todoId)) {
                addMarkerByTodoIndex(uniqueTodos[todoId]);
              }
            }
          });
        },
        link: function (scope, elem, attrs, ctrl) {
          var mapOptions,
            latitude = attrs.latitude,
            longitude = attrs.longitude,
            infoWindowTemplate,
            infoWindowElem,
            infowindow,
            todosControlTemplate,
            todosControlElem,
            editTodoControlTemplate,
            editTodoControlElem,
            mapStyles,
            map;

          latitude = latitude && parseFloat(latitude, 10) || 43.074688;
          longitude = longitude && parseFloat(longitude, 10) || -89.384294;

          infoWindowTemplate = document.getElementById('infoWindowTemplate').innerHTML.trim();
          infoWindowElem = $compile(infoWindowTemplate)(scope);
          infowindow = new google.maps.InfoWindow({
            content: infoWindowElem[0]
          });

          ctrl.registerInfoWindow(infowindow);

          mapStyles = [{
            featureType: 'water',
            stylers: [
              {hue: '#000b0'},
              {invert_lightness: 'false'},
              {saturation: -30}
            ]
          }];

          mapOptions = {
            zoom: 12,
            disableDefaultUI: false,
            center: new google.maps.LatLng(latitude, longitude),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: mapStyles
          };

          google.maps.visualRefresh = true;

          map = new google.maps.Map(elem[0], mapOptions);

          ctrl.registerMap(map);

          todosControlTemplate = document.getElementById('todosControlTemplate').innerHTML.trim();
          todosControlElem = $compile(todosControlTemplate)(scope);
          map.controls[google.maps.ControlPosition.TOP_LEFT].push(todosControlElem[0]);

          editTodoControlTemplate = document.getElementById('editTodoControlTemplate').innerHTML.trim();
          editTodoControlElem = $compile(editTodoControlTemplate)(scope);
          map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(editTodoControlElem[0]);
        }
      };
    });  
