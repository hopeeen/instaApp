/*! angular-google-maps 1.0.15 2014-03-05
 *  AngularJS directives for Google Maps
 *  git: https://github.com/nlaplante/angular-google-maps.git
 */
function InfoBox(a) {
    a = a || {}, google.maps.OverlayView.apply(this, arguments), this.content_ = a.content || "", this.disableAutoPan_ = a.disableAutoPan || !1, this.maxWidth_ = a.maxWidth || 0, this.pixelOffset_ = a.pixelOffset || new google.maps.Size(0, 0), this.position_ = a.position || new google.maps.LatLng(0, 0), this.zIndex_ = a.zIndex || null, this.boxClass_ = a.boxClass || "infoBox", this.boxStyle_ = a.boxStyle || {}, this.closeBoxMargin_ = a.closeBoxMargin || "2px", this.closeBoxURL_ = a.closeBoxURL || "http://www.google.com/intl/en_us/mapfiles/close.gif", "" === a.closeBoxURL && (this.closeBoxURL_ = ""), this.infoBoxClearance_ = a.infoBoxClearance || new google.maps.Size(1, 1), "undefined" == typeof a.visible && (a.visible = "undefined" == typeof a.isHidden ? !0 : !a.isHidden), this.isHidden_ = !a.visible, this.alignBottom_ = a.alignBottom || !1, this.pane_ = a.pane || "floatPane", this.enableEventPropagation_ = a.enableEventPropagation || !1, this.div_ = null, this.closeListener_ = null, this.moveListener_ = null, this.contextListener_ = null, this.eventListeners_ = null, this.fixedWidthSet_ = null
}
function ClusterIcon(a, b) {
    a.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView), this.cluster_ = a, this.className_ = a.getMarkerClusterer().getClusterClass(), this.styles_ = b, this.center_ = null, this.div_ = null, this.sums_ = null, this.visible_ = !1, this.setMap(a.getMap())
}
function Cluster(a) {
    this.markerClusterer_ = a, this.map_ = a.getMap(), this.gridSize_ = a.getGridSize(), this.minClusterSize_ = a.getMinimumClusterSize(), this.averageCenter_ = a.getAverageCenter(), this.markers_ = [], this.center_ = null, this.bounds_ = null, this.clusterIcon_ = new ClusterIcon(this, a.getStyles())
}
function MarkerClusterer(a, b, c) {
    this.extend(MarkerClusterer, google.maps.OverlayView), b = b || [], c = c || {}, this.markers_ = [], this.clusters_ = [], this.listeners_ = [], this.activeMap_ = null, this.ready_ = !1, this.gridSize_ = c.gridSize || 60, this.minClusterSize_ = c.minimumClusterSize || 2, this.maxZoom_ = c.maxZoom || null, this.styles_ = c.styles || [], this.title_ = c.title || "", this.zoomOnClick_ = !0, void 0 !== c.zoomOnClick && (this.zoomOnClick_ = c.zoomOnClick), this.averageCenter_ = !1, void 0 !== c.averageCenter && (this.averageCenter_ = c.averageCenter), this.ignoreHidden_ = !1, void 0 !== c.ignoreHidden && (this.ignoreHidden_ = c.ignoreHidden), this.enableRetinaIcons_ = !1, void 0 !== c.enableRetinaIcons && (this.enableRetinaIcons_ = c.enableRetinaIcons), this.imagePath_ = c.imagePath || MarkerClusterer.IMAGE_PATH, this.imageExtension_ = c.imageExtension || MarkerClusterer.IMAGE_EXTENSION, this.imageSizes_ = c.imageSizes || MarkerClusterer.IMAGE_SIZES, this.calculator_ = c.calculator || MarkerClusterer.CALCULATOR, this.batchSize_ = c.batchSize || MarkerClusterer.BATCH_SIZE, this.batchSizeIE_ = c.batchSizeIE || MarkerClusterer.BATCH_SIZE_IE, this.clusterClass_ = c.clusterClass || "cluster", -1 !== navigator.userAgent.toLowerCase().indexOf("msie") && (this.batchSize_ = this.batchSizeIE_), this.setupStyles_(), this.addMarkers(b, !0), this.setMap(a)
}
function inherits(a, b) {
    function c() {
    }
    c.prototype = b.prototype, a.superClass_ = b.prototype, a.prototype = new c, a.prototype.constructor = a
}
function MarkerLabel_(a, b) {
    this.marker_ = a, this.handCursorURL_ = a.handCursorURL, this.labelDiv_ = document.createElement("div"), this.labelDiv_.style.cssText = "position: absolute; overflow: hidden;", this.eventDiv_ = document.createElement("div"), this.eventDiv_.style.cssText = this.labelDiv_.style.cssText, this.eventDiv_.setAttribute("onselectstart", "return false;"), this.eventDiv_.setAttribute("ondragstart", "return false;"), this.crossDiv_ = MarkerLabel_.getSharedCross(b)
}
function MarkerWithLabel(a) {
    a = a || {}, a.labelContent = a.labelContent || "", a.labelAnchor = a.labelAnchor || new google.maps.Point(0, 0), a.labelClass = a.labelClass || "markerLabels", a.labelStyle = a.labelStyle || {}, a.labelInBackground = a.labelInBackground || !1, "undefined" == typeof a.labelVisible && (a.labelVisible = !0), "undefined" == typeof a.raiseOnDrag && (a.raiseOnDrag = !0), "undefined" == typeof a.clickable && (a.clickable = !0), "undefined" == typeof a.draggable && (a.draggable = !1), "undefined" == typeof a.optimized && (a.optimized = !1), a.crossImage = a.crossImage || "http" + ("https:" === document.location.protocol ? "s" : "") + "://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png", a.handCursor = a.handCursor || "http" + ("https:" === document.location.protocol ? "s" : "") + "://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur", a.optimized = !1, this.label = new MarkerLabel_(this, a.crossImage, a.handCursor), google.maps.Marker.apply(this, arguments)
}
(function() {
    _.intersectionObjects = function(a, b, c) {
        var d;
        return null == c && (c = void 0), d = _.map(a, function(a) {
            return _.find(b, function(b) {
                return null != c ? c(a, b) : _.isEqual(a, b)
            })
        }), _.filter(d, function(a) {
            return null != a
        })
    }
}).call(this), function() {
    !function() {
        var a;
        return a = angular.module("google-maps", []), a.factory("debounce", ["$timeout", function(a) {
                return function(b) {
                    var c;
                    return c = 0, function() {
                        var d, e, f;
                        return f = this, d = arguments, c++, e = function(a) {
                            return function() {
                                return a === c ? b.apply(f, d) : void 0
                            }
                        }(c), a(e, 0, !0)
                    }
                }
            }])
    }()
}.call(this), function() {
    this.ngGmapModule = function(a, b) {
        var c, d;
        return null == b && (b = function() {
        }), "string" == typeof a && (a = a.split(".")), c = this[d = a.shift()] || (this[d] = {}), c.ngGmapModule || (c.ngGmapModule = this.ngGmapModule), a.length ? c.ngGmapModule(a, b) : b.call(c)
    }
}.call(this), function() {
    angular.module("google-maps").factory("array-sync", ["add-events", function(a) {
            var b;
            return b = function(b, c, d) {
                var e, f, g;
                return f = c.$eval(d), e = a(b, {set_at: function(a) {
                        var c;
                        return c = b.getAt(a), c && c.lng && c.lat ? (f[a].latitude = c.lat(), f[a].longitude = c.lng()) : void 0
                    }, insert_at: function(a) {
                        var c;
                        return c = b.getAt(a), c && c.lng && c.lat ? f.splice(a, 0, {latitude: c.lat(), longitude: c.lng()}) : void 0
                    }, remove_at: function(a) {
                        return f.splice(a, 1)
                    }}), g = c.$watch(d, function(a) {
                    var c, d, e, f, g, h, i, j;
                    if (g = b, a) {
                        for (c = 0, h = g.getLength(), e = a.length, d = Math.min(h, e), f = void 0; d > c; )
                            i = g.getAt(c), f = a[c], (i.lat() !== f.latitude || i.lng() !== f.longitude) && g.setAt(c, new google.maps.LatLng(f.latitude, f.longitude)), c++;
                        for (; e > c; )
                            f = a[c], g.push(new google.maps.LatLng(f.latitude, f.longitude)), c++;
                        for (j = []; h > c; )
                            g.pop(), j.push(c++);
                        return j
                    }
                }, !0), function() {
                    return e && (e(), e = null), g ? (g(), g = null) : void 0
                }
            }
        }])
}.call(this), function() {
    angular.module("google-maps").factory("add-events", ["$timeout", function(a) {
            var b, c;
            return b = function(b, c, d) {
                return google.maps.event.addListener(b, c, function() {
                    return d.apply(this, arguments), a(function() {
                    }, !0)
                })
            }, c = function(a, c, d) {
                var e;
                return d ? b(a, c, d) : (e = [], angular.forEach(c, function(c, d) {
                    return e.push(b(a, d, c))
                }), function() {
                    return angular.forEach(e, function(a) {
                        return _.isFunction(a) && a(), null !== a.e && _.isFunction(a.e) ? a.e() : void 0
                    }), e = null
                })
            }
        }])
}.call(this), function() {
    var a = [].indexOf || function(a) {
        for (var b = 0, c = this.length; c > b; b++)
            if (b in this && this[b] === a)
                return b;
        return-1
    };
    this.ngGmapModule("oo", function() {
        var b;
        return b = ["extended", "included"], this.BaseObject = function() {
            function c() {
            }
            return c.extend = function(c) {
                var d, e, f;
                for (d in c)
                    e = c[d], a.call(b, d) < 0 && (this[d] = e);
                return null != (f = c.extended) && f.apply(0), this
            }, c.include = function(c) {
                var d, e, f;
                for (d in c)
                    e = c[d], a.call(b, d) < 0 && (this.prototype[d] = e);
                return null != (f = c.included) && f.apply(0), this
            }, c
        }()
    })
}.call(this), function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, b = {}.hasOwnProperty, c = function(a, c) {
        function d() {
            this.constructor = a
        }
        for (var e in c)
            b.call(c, e) && (a[e] = c[e]);
        return d.prototype = c.prototype, a.prototype = new d, a.__super__ = c.prototype, a
    };
    this.ngGmapModule("directives.api.managers", function() {
        return this.ClustererMarkerManager = function(b) {
            function d(b, c, e) {
                this.clear = a(this.clear, this), this.draw = a(this.draw, this), this.removeMany = a(this.removeMany, this), this.remove = a(this.remove, this), this.addMany = a(this.addMany, this), this.add = a(this.add, this);
                var f;
                d.__super__.constructor.call(this), f = this, this.opt_options = e, this.clusterer = null != e && void 0 === c ? new MarkerClusterer(b, void 0, e) : null != e && null != c ? new MarkerClusterer(b, c, e) : new MarkerClusterer(b), this.clusterer.setIgnoreHidden(!0), this.$log = directives.api.utils.Logger, this.noDrawOnSingleAddRemoves = !0, this.$log.info(this)
            }
            return c(d, b), d.prototype.add = function(a) {
                return this.clusterer.addMarker(a, this.noDrawOnSingleAddRemoves)
            }, d.prototype.addMany = function(a) {
                return this.clusterer.addMarkers(a)
            }, d.prototype.remove = function(a) {
                return this.clusterer.removeMarker(a, this.noDrawOnSingleAddRemoves)
            }, d.prototype.removeMany = function(a) {
                return this.clusterer.addMarkers(a)
            }, d.prototype.draw = function() {
                return this.clusterer.repaint()
            }, d.prototype.clear = function() {
                return this.clusterer.clearMarkers(), this.clusterer.repaint()
            }, d
        }(oo.BaseObject)
    })
}.call(this), function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, b = {}.hasOwnProperty, c = function(a, c) {
        function d() {
            this.constructor = a
        }
        for (var e in c)
            b.call(c, e) && (a[e] = c[e]);
        return d.prototype = c.prototype, a.prototype = new d, a.__super__ = c.prototype, a
    };
    this.ngGmapModule("directives.api.managers", function() {
        return this.MarkerManager = function(b) {
            function d(b) {
                this.handleOptDraw = a(this.handleOptDraw, this), this.clear = a(this.clear, this), this.draw = a(this.draw, this), this.removeMany = a(this.removeMany, this), this.remove = a(this.remove, this), this.addMany = a(this.addMany, this), this.add = a(this.add, this);
                var c;
                d.__super__.constructor.call(this), c = this, this.gMap = b, this.gMarkers = [], this.$log = directives.api.utils.Logger, this.$log.info(this)
            }
            return c(d, b), d.prototype.add = function(a, b) {
                return this.handleOptDraw(a, b, !0), this.gMarkers.push(a)
            }, d.prototype.addMany = function(a) {
                var b, c, d, e;
                for (e = [], c = 0, d = a.length; d > c; c++)
                    b = a[c], e.push(this.add(b));
                return e
            }, d.prototype.remove = function(a, b) {
                var c, d;
                return this.handleOptDraw(a, b, !1), b ? (c = void 0, null != this.gMarkers.indexOf ? c = this.gMarkers.indexOf(a) : (d = 0, _.find(this.gMarkers, function(b) {
                    d += 1, b === a && (c = d)
                })), null != c ? this.gMarkers.splice(c, 1) : void 0) : void 0
            }, d.prototype.removeMany = function() {
                var a, b, c, d, e;
                for (d = this.gMarkers, e = [], b = 0, c = d.length; c > b; b++)
                    a = d[b], e.push(this.remove(a));
                return e
            }, d.prototype.draw = function() {
                var a, b, c, d, e, f, g, h, i, j = this;
                for (a = [], h = this.gMarkers, c = function(b) {
                    return b.isDrawn ? void 0 : b.doAdd ? b.setMap(j.gMap) : a.push(b)
                }, d = 0, f = h.length; f > d; d++)
                    b = h[d], c(b);
                for (i = [], e = 0, g = a.length; g > e; e++)
                    b = a[e], i.push(this.remove(b, !0));
                return i
            }, d.prototype.clear = function() {
                var a, b, c, d;
                for (d = this.gMarkers, b = 0, c = d.length; c > b; b++)
                    a = d[b], a.setMap(null);
                return delete this.gMarkers, this.gMarkers = []
            }, d.prototype.handleOptDraw = function(a, b, c) {
                return b === !0 ? (a.setMap(c ? this.gMap : null), a.isDrawn = !0) : (a.isDrawn = !1, a.doAdd = c)
            }, d
        }(oo.BaseObject)
    })
}.call(this), function() {
    this.ngGmapModule("directives.api.utils", function() {
        return this.AsyncProcessor = {handleLargeArray: function(a, b, c, d, e, f) {
                var g;
                return null == e && (e = 100), null == f && (f = 0), void 0 === a || a.length <= 0 ? void d() : (g = function() {
                    var h, i;
                    for (h = e, i = f; h-- && i < a.length; )
                        b(a[i]), ++i;
                    return i < a.length ? (f = i, null != c && c(), setTimeout(g, 1)) : d()
                })()
            }}
    })
}.call(this), function() {
    this.ngGmapModule("directives.api.utils", function() {
        return this.ChildEvents = {onChildCreation: function() {
            }}
    })
}.call(this), function() {
    this.ngGmapModule("directives.api.utils", function() {
        return this.GmapUtil = {getLabelPositionPoint: function(a) {
                var b, c;
                return void 0 === a ? void 0 : (a = /^([\d\.]+)\s([\d\.]+)$/.exec(a), b = a[1], c = a[2], b && c ? new google.maps.Point(b, c) : void 0)
            }, createMarkerOptions: function(a, b, c, d) {
                var e;
                return null == d && (d = void 0), null == c && (c = {}), e = angular.extend({}, c, {position: null != c.position ? c.position : new google.maps.LatLng(a.latitude, a.longitude), icon: null != c.icon ? c.icon : b, visible: null != c.visible ? c.visible : null != a.latitude && null != a.longitude}), null != d && (e.map = d), e
            }, createWindowOptions: function(a, b, c, d) {
                return null != c && null != d ? angular.extend({}, d, {content: null != d.content ? d.content : c, position: null != d.position ? d.position : angular.isObject(a) ? a.getPosition() : new google.maps.LatLng(b.coords.latitude, b.coords.longitude)}) : d ? d : void 0
            }, defaultDelay: 50}
    })
}.call(this), function() {
    var a = {}.hasOwnProperty, b = function(b, c) {
        function d() {
            this.constructor = b
        }
        for (var e in c)
            a.call(c, e) && (b[e] = c[e]);
        return d.prototype = c.prototype, b.prototype = new d, b.__super__ = c.prototype, b
    };
    this.ngGmapModule("directives.api.utils", function() {
        return this.Linked = function(a) {
            function c(a, b, c, d) {
                this.scope = a, this.element = b, this.attrs = c, this.ctrls = d
            }
            return b(c, a), c
        }(oo.BaseObject)
    })
}.call(this), function() {
    this.ngGmapModule("directives.api.utils", function() {
        var a;
        return this.Logger = {logger: void 0, doLog: !1, info: function(b) {
                return a.doLog ? null != a.logger ? a.logger.info(b) : console.info(b) : void 0
            }, error: function(b) {
                return a.doLog ? null != a.logger ? a.logger.error(b) : console.error(b) : void 0
            }}, a = this.Logger
    })
}.call(this), function() {
    this.ngGmapModule("directives.api.utils", function() {
        return this.ModelsWatcher = {didModelsChange: function(a, b) {
                var c, d;
                return _.isArray(a) ? a === b ? !1 : (d = _.intersectionObjects(a, b).length !== b.length, c = !0, d || (c = a.length !== b.length), c) : (directives.api.utils.Logger.error("models property must be an array newValue of: " + a.toString() + " is not!!"), !1)
            }}
    })
}.call(this), function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, b = {}.hasOwnProperty, c = function(a, c) {
        function d() {
            this.constructor = a
        }
        for (var e in c)
            b.call(c, e) && (a[e] = c[e]);
        return d.prototype = c.prototype, a.prototype = new d, a.__super__ = c.prototype, a
    };
    this.ngGmapModule("directives.api.models.child", function() {
        return this.MarkerLabelChildModel = function(b) {
            function d(b, c) {
                this.destroy = a(this.destroy, this), this.draw = a(this.draw, this), this.setPosition = a(this.setPosition, this), this.setZIndex = a(this.setZIndex, this), this.setVisible = a(this.setVisible, this), this.setAnchor = a(this.setAnchor, this), this.setMandatoryStyles = a(this.setMandatoryStyles, this), this.setStyles = a(this.setStyles, this), this.setContent = a(this.setContent, this), this.setTitle = a(this.setTitle, this), this.getSharedCross = a(this.getSharedCross, this);
                var e, f, g;
                d.__super__.constructor.call(this), e = this, this.marker = b, this.marker.set("labelContent", c.labelContent), this.marker.set("labelAnchor", this.getLabelPositionPoint(c.labelAnchor)), this.marker.set("labelClass", c.labelClass || "labels"), this.marker.set("labelStyle", c.labelStyle || {opacity: 100}), this.marker.set("labelInBackground", c.labelInBackground || !1), c.labelVisible || this.marker.set("labelVisible", !0), c.raiseOnDrag || this.marker.set("raiseOnDrag", !0), c.clickable || this.marker.set("clickable", !0), c.draggable || this.marker.set("draggable", !1), c.optimized || this.marker.set("optimized", !1), c.crossImage = null != (f = c.crossImage) ? f : document.location.protocol + "//maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png", c.handCursor = null != (g = c.handCursor) ? g : document.location.protocol + "//maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur", this.markerLabel = new MarkerLabel_(this.marker, c.crossImage, c.handCursor), this.marker.set("setMap", function(a) {
                    return google.maps.Marker.prototype.setMap.apply(this, arguments), e.markerLabel.setMap(a)
                }), this.marker.setMap(this.marker.getMap())
            }
            return c(d, b), d.include(directives.api.utils.GmapUtil), d.prototype.getSharedCross = function(a) {
                return this.markerLabel.getSharedCross(a)
            }, d.prototype.setTitle = function() {
                return this.markerLabel.setTitle()
            }, d.prototype.setContent = function() {
                return this.markerLabel.setContent()
            }, d.prototype.setStyles = function() {
                return this.markerLabel.setStyles()
            }, d.prototype.setMandatoryStyles = function() {
                return this.markerLabel.setMandatoryStyles()
            }, d.prototype.setAnchor = function() {
                return this.markerLabel.setAnchor()
            }, d.prototype.setVisible = function() {
                return this.markerLabel.setVisible()
            }, d.prototype.setZIndex = function() {
                return this.markerLabel.setZIndex()
            }, d.prototype.setPosition = function() {
                return this.markerLabel.setPosition()
            }, d.prototype.draw = function() {
                return this.markerLabel.draw()
            }, d.prototype.destroy = function() {
                return null != this.markerLabel.labelDiv_.parentNode && null != this.markerLabel.eventDiv_.parentNode ? this.markerLabel.onRemove() : void 0
            }, d
        }(oo.BaseObject)
    })
}.call(this), function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, b = {}.hasOwnProperty, c = function(a, c) {
        function d() {
            this.constructor = a
        }
        for (var e in c)
            b.call(c, e) && (a[e] = c[e]);
        return d.prototype = c.prototype, a.prototype = new d, a.__super__ = c.prototype, a
    };
    this.ngGmapModule("directives.api.models.child", function() {
        return this.MarkerChildModel = function(b) {
            function d(b, c, d, e, f, g, h, i) {
                var j, k = this;
                this.index = b, this.model = c, this.parentScope = d, this.gMap = e, this.defaults = g, this.doClick = h, this.gMarkerManager = i, this.watchDestroy = a(this.watchDestroy, this), this.setLabelOptions = a(this.setLabelOptions, this), this.isLabelDefined = a(this.isLabelDefined, this), this.setOptions = a(this.setOptions, this), this.setIcon = a(this.setIcon, this), this.setCoords = a(this.setCoords, this), this.destroy = a(this.destroy, this), this.maybeSetScopeValue = a(this.maybeSetScopeValue, this), this.createMarker = a(this.createMarker, this), this.setMyScope = a(this.setMyScope, this), j = this, this.iconKey = this.parentScope.icon, this.coordsKey = this.parentScope.coords, this.clickKey = this.parentScope.click(), this.labelContentKey = this.parentScope.labelContent, this.optionsKey = this.parentScope.options, this.labelOptionsKey = this.parentScope.labelOptions, this.myScope = this.parentScope.$new(!1), this.myScope.model = this.model, this.setMyScope(this.model, void 0, !0), this.createMarker(this.model), this.myScope.$watch("model", function(a, b) {
                    return a !== b ? k.setMyScope(a, b) : void 0
                }, !0), this.$log = directives.api.utils.Logger, this.$log.info(j), this.watchDestroy(this.myScope)
            }
            return c(d, b), d.include(directives.api.utils.GmapUtil), d.prototype.setMyScope = function(a, b, c) {
                return null == b && (b = void 0), null == c && (c = !1), this.maybeSetScopeValue("icon", a, b, this.iconKey, this.evalModelHandle, c, this.setIcon), this.maybeSetScopeValue("coords", a, b, this.coordsKey, this.evalModelHandle, c, this.setCoords), this.maybeSetScopeValue("labelContent", a, b, this.labelContentKey, this.evalModelHandle, c), this.maybeSetScopeValue("click", a, b, this.clickKey, this.evalModelHandle, c), this.createMarker(a, b, c)
            }, d.prototype.createMarker = function(a, b, c) {
                var d = this;
                return null == b && (b = void 0), null == c && (c = !1), this.maybeSetScopeValue("options", a, b, this.optionsKey, function(a, b) {
                    var c;
                    return void 0 === a ? void 0 : (c = "self" === b ? a : a[b], void 0 === c ? c = void 0 === b ? d.defaults : d.myScope.options : c)
                }, c, this.setOptions)
            }, d.prototype.evalModelHandle = function(a, b) {
                return void 0 === a ? void 0 : "self" === b ? a : a[b]
            }, d.prototype.maybeSetScopeValue = function(a, b, c, d, e, f, g) {
                var h, i;
                return null == g && (g = void 0), void 0 === c ? (this.myScope[a] = e(b, d), void(f || null != g && g(this.myScope))) : (i = e(c, d), h = e(b, d), h === i || this.myScope[a] === h || (this.myScope[a] = h, f) ? void 0 : (null != g && g(this.myScope), this.gMarkerManager.draw()))
            }, d.prototype.destroy = function() {
                return this.myScope.$destroy()
            }, d.prototype.setCoords = function(a) {
                return a.$id === this.myScope.$id && void 0 !== this.gMarker ? null != a.coords ? null == this.scope.coords.latitude || null == this.scope.coords.longitude ? void this.$log.error("MarkerChildMarker cannot render marker as scope.coords as no position on marker: " + JSON.stringify(this.model)) : (this.gMarker.setPosition(new google.maps.LatLng(a.coords.latitude, a.coords.longitude)), this.gMarker.setVisible(null != a.coords.latitude && null != a.coords.longitude), this.gMarkerManager.remove(this.gMarker), this.gMarkerManager.add(this.gMarker)) : this.gMarkerManager.remove(this.gMarker) : void 0
            }, d.prototype.setIcon = function(a) {
                return a.$id === this.myScope.$id && void 0 !== this.gMarker ? (this.gMarkerManager.remove(this.gMarker), this.gMarker.setIcon(a.icon), this.gMarkerManager.add(this.gMarker), this.gMarker.setPosition(new google.maps.LatLng(a.coords.latitude, a.coords.longitude)), this.gMarker.setVisible(a.coords.latitude && null != a.coords.longitude)) : void 0
            }, d.prototype.setOptions = function(a) {
                var b, c = this;
                if (a.$id === this.myScope.$id && (null != this.gMarker && (this.gMarkerManager.remove(this.gMarker), delete this.gMarker), null != (b = a.coords) ? b : "function" == typeof a.icon ? a.icon(null != a.options) : void 0))
                    return this.opts = this.createMarkerOptions(a.coords, a.icon, a.options), delete this.gMarker, this.gMarker = this.isLabelDefined(a) ? new MarkerWithLabel(this.setLabelOptions(this.opts, a)) : new google.maps.Marker(this.opts), this.gMarkerManager.add(this.gMarker), google.maps.event.addListener(this.gMarker, "click", function() {
                        return c.doClick && null != c.myScope.click ? c.myScope.click() : void 0
                    })
            }, d.prototype.isLabelDefined = function(a) {
                return null != a.labelContent
            }, d.prototype.setLabelOptions = function(a, b) {
                return a.labelAnchor = this.getLabelPositionPoint(b.labelAnchor), a.labelClass = b.labelClass, a.labelContent = b.labelContent, a
            }, d.prototype.watchDestroy = function(a) {
                var b = this;
                return a.$on("$destroy", function() {
                    var a;
                    return null != b.gMarker && (b.gMarkerManager.remove(b.gMarker), delete b.gMarker), a = void 0
                })
            }, d
        }(oo.BaseObject)
    })
}.call(this), function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, b = {}.hasOwnProperty, c = function(a, c) {
        function d() {
            this.constructor = a
        }
        for (var e in c)
            b.call(c, e) && (a[e] = c[e]);
        return d.prototype = c.prototype, a.prototype = new d, a.__super__ = c.prototype, a
    };
    this.ngGmapModule("directives.api.models.child", function() {
        return this.WindowChildModel = function(b) {
            function d(b, c, d, e, f, g, h, i, j, k) {
                this.element = j, null == k && (k = !1), this.destroy = a(this.destroy, this), this.hideWindow = a(this.hideWindow, this), this.getLatestPosition = a(this.getLatestPosition, this), this.showWindow = a(this.showWindow, this), this.handleClick = a(this.handleClick, this), this.watchCoords = a(this.watchCoords, this), this.watchShow = a(this.watchShow, this), this.createGWin = a(this.createGWin, this), this.scope = b, this.opts = c, this.mapCtrl = e, this.markerCtrl = f, this.isIconVisibleOnClick = d, this.initialMarkerVisibility = null != this.markerCtrl ? this.markerCtrl.getVisible() : !1, this.$log = directives.api.utils.Logger, this.$http = g, this.$templateCache = h, this.$compile = i, this.createGWin(), null != this.markerCtrl && this.markerCtrl.setClickable(!0), this.handleClick(), this.watchShow(), this.watchCoords(), this.needToManualDestroy = k, this.$log.info(this)
            }
            return c(d, b), d.include(directives.api.utils.GmapUtil), d.prototype.createGWin = function() {
                var a, b, c = this;
                return null == this.gWin && null != this.markerCtrl && (a = null != this.opts ? this.opts : {}, b = null != this.element && _.isFunction(this.element.html) ? this.element.html() : this.element, this.opts = null != this.markerCtrl ? this.createWindowOptions(this.markerCtrl, this.scope, b, a) : {}), null != this.opts && void 0 === this.gWin ? (this.gWin = this.opts.boxClass && window.InfoBox && "function" == typeof window.InfoBox ? new window.InfoBox(this.opts) : new google.maps.InfoWindow(this.opts), google.maps.event.addListener(this.gWin, "closeclick", function() {
                    return null != c.markerCtrl && c.markerCtrl.setVisible(c.initialMarkerVisibility), null != c.scope.closeClick ? c.scope.closeClick() : void 0
                })) : void 0
            }, d.prototype.watchShow = function() {
                var a = this;
                return this.scope.$watch("show", function(b, c) {
                    return b !== c ? b ? a.showWindow() : a.hideWindow() : null != a.gWin && b && !a.gWin.getMap() ? a.showWindow() : void 0
                }, !0)
            }, d.prototype.watchCoords = function() {
                var a, b = this;
                return a = null != this.markerCtrl ? this.scope.$parent : this.scope, a.$watch("coords", function(a, c) {
                    return a !== c ? null == a ? b.hideWindow() : null == a.latitude || null == a.longitude ? void b.$log.error("WindowChildMarker cannot render marker as scope.coords as no position on marker: " + JSON.stringify(b.model)) : b.gWin.setPosition(new google.maps.LatLng(a.latitude, a.longitude)) : void 0
                }, !0)
            }, d.prototype.handleClick = function() {
                var a = this;
                return null != this.markerCtrl ? google.maps.event.addListener(this.markerCtrl, "click", function() {
                    var b;
                    return null == a.gWin && a.createGWin(), b = a.markerCtrl.getPosition(), null != a.gWin && (a.gWin.setPosition(b), a.gWin.open(a.mapCtrl)), a.initialMarkerVisibility = a.markerCtrl.getVisible(), a.markerCtrl.setVisible(a.isIconVisibleOnClick)
                }) : void 0
            }, d.prototype.showWindow = function() {
                var a = this;
                if (this.scope.templateUrl) {
                    if (this.gWin)
                        return this.$http.get(this.scope.templateUrl, {cache: this.$templateCache}).then(function(b) {
                            var c, d;
                            return d = a.scope.$new(), angular.isDefined(a.scope.templateParameter) && (d.parameter = a.scope.templateParameter), c = a.$compile(b.data)(d), a.gWin.setContent(c[0]), a.gWin.open(a.mapCtrl)
                        })
                } else if (null != this.gWin)
                    return this.gWin.open(this.mapCtrl)
            }, d.prototype.getLatestPosition = function() {
                return null != this.gWin && null != this.markerCtrl ? this.gWin.setPosition(this.markerCtrl.getPosition()) : void 0
            }, d.prototype.hideWindow = function() {
                return null != this.gWin ? this.gWin.close() : void 0
            }, d.prototype.destroy = function() {
                var a;
                return this.hideWindow(this.gWin), null != this.scope && this.needToManualDestroy && this.scope.$destroy(), delete this.gWin, a = void 0
            }, d
        }(oo.BaseObject)
    })
}.call(this), function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, b = {}.hasOwnProperty, c = function(a, c) {
        function d() {
            this.constructor = a
        }
        for (var e in c)
            b.call(c, e) && (a[e] = c[e]);
        return d.prototype = c.prototype, a.prototype = new d, a.__super__ = c.prototype, a
    };
    this.ngGmapModule("directives.api.models.parent", function() {
        return this.IMarkerParentModel = function(b) {
            function d(b, c, d, e, f) {
                var g, h = this;
                this.scope = b, this.element = c, this.attrs = d, this.mapCtrl = e, this.$timeout = f, this.linkInit = a(this.linkInit, this), this.onDestroy = a(this.onDestroy, this), this.onWatch = a(this.onWatch, this), this.watch = a(this.watch, this), this.validateScope = a(this.validateScope, this), this.onTimeOut = a(this.onTimeOut, this), g = this, this.$log = directives.api.utils.Logger, this.validateScope(b) && (this.doClick = angular.isDefined(d.click), null != b.options && (this.DEFAULTS = b.options), this.$timeout(function() {
                    return h.watch("coords", b), h.watch("icon", b), h.watch("options", b), h.onTimeOut(b), b.$on("$destroy", function() {
                        return h.onDestroy(b)
                    })
                }))
            }
            return c(d, b), d.prototype.DEFAULTS = {}, d.prototype.isFalse = function(a) {
                return-1 !== ["false", "FALSE", 0, "n", "N", "no", "NO"].indexOf(a)
            }, d.prototype.onTimeOut = function() {
            }, d.prototype.validateScope = function(a) {
                var b;
                return null == a ? !1 : (b = null != a.coords, b || this.$log.error(this.constructor.name + ": no valid coords attribute found"), b)
            }, d.prototype.watch = function(a, b) {
                var c = this;
                return b.$watch(a, function(d, e) {
                    return d !== e ? c.onWatch(a, b, d, e) : void 0
                }, !0)
            }, d.prototype.onWatch = function() {
                throw new Exception("Not Implemented!!")
            }, d.prototype.onDestroy = function() {
                throw new Exception("Not Implemented!!")
            }, d.prototype.linkInit = function() {
                throw new Exception("Not Implemented!!")
            }, d
        }(oo.BaseObject)
    })
}.call(this), function() {
    var a = {}.hasOwnProperty, b = function(b, c) {
        function d() {
            this.constructor = b
        }
        for (var e in c)
            a.call(c, e) && (b[e] = c[e]);
        return d.prototype = c.prototype, b.prototype = new d, b.__super__ = c.prototype, b
    };
    this.ngGmapModule("directives.api.models.parent", function() {
        return this.IWindowParentModel = function(a) {
            function c(a, b, c, d, e, f, g, h) {
                var i;
                i = this, this.$log = directives.api.utils.Logger, this.$timeout = e, this.$compile = f, this.$http = g, this.$templateCache = h, null != a.options && (this.DEFAULTS = a.options)
            }
            return b(c, a), c.include(directives.api.utils.GmapUtil), c.prototype.DEFAULTS = {}, c
        }(oo.BaseObject)
    })
}.call(this), function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, b = {}.hasOwnProperty, c = function(a, c) {
        function d() {
            this.constructor = a
        }
        for (var e in c)
            b.call(c, e) && (a[e] = c[e]);
        return d.prototype = c.prototype, a.prototype = new d, a.__super__ = c.prototype, a
    };
    this.ngGmapModule("directives.api.models.parent", function() {
        return this.LayerParentModel = function(b) {
            function d(b, c, d, e, f, g, h) {
                var i = this;
                return this.scope = b, this.element = c, this.attrs = d, this.mapCtrl = e, this.$timeout = f, this.onLayerCreated = null != g ? g : void 0, this.$log = null != h ? h : directives.api.utils.Logger, this.createGoogleLayer = a(this.createGoogleLayer, this), null == this.attrs.type ? void this.$log.info("type attribute for the layer directive is mandatory. Layer creation aborted!!") : (this.createGoogleLayer(), this.gMap = void 0, this.doShow = !0, void this.$timeout(function() {
                    return i.gMap = e.getMap(), angular.isDefined(i.attrs.show) && (i.doShow = i.scope.show), null !== i.doShow && i.doShow && null !== i.gMap && i.layer.setMap(i.gMap), i.scope.$watch("show", function(a, b) {
                        return a !== b ? (i.doShow = a, i.layer.setMap(a ? i.gMap : null)) : void 0
                    }, !0), i.scope.$watch("options", function(a, b) {
                        return a !== b ? (i.layer.setMap(null), i.layer = null, i.createGoogleLayer()) : void 0
                    }, !0), i.scope.$on("$destroy", function() {
                        return this.layer.setMap(null)
                    })
                }))
            }
            return c(d, b), d.prototype.createGoogleLayer = function() {
                var a = this;
                return this.layer = null == this.attrs.options ? void 0 === this.attrs.namespace ? new google.maps[this.attrs.type] : new google.maps[this.attrs.namespace][this.attrs.type] : void 0 === this.attrs.namespace ? new google.maps[this.attrs.type](this.scope.options) : new google.maps[this.attrs.namespace][this.attrs.type](this.scope.options), this.$timeout(function() {
                    var b;
                    return null != a.layer && null != a.onLayerCreated && (b = a.onLayerCreated(a.scope, a.layer)) ? b(a.layer) : void 0
                })
            }, d
        }(oo.BaseObject)
    })
}.call(this), function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, b = {}.hasOwnProperty, c = function(a, c) {
        function d() {
            this.constructor = a
        }
        for (var e in c)
            b.call(c, e) && (a[e] = c[e]);
        return d.prototype = c.prototype, a.prototype = new d, a.__super__ = c.prototype, a
    };
    this.ngGmapModule("directives.api.models.parent", function() {
        return this.MarkerParentModel = function(b) {
            function d(b, c, e, f, g) {
                this.onDestroy = a(this.onDestroy, this), this.onWatch = a(this.onWatch, this), this.onTimeOut = a(this.onTimeOut, this);
                var h;
                d.__super__.constructor.call(this, b, c, e, f, g), h = this
            }
            return c(d, b), d.include(directives.api.utils.GmapUtil), d.prototype.onTimeOut = function(a) {
                var b, c = this;
                return b = this.createMarkerOptions(a.coords, a.icon, a.options, this.mapCtrl.getMap()), this.scope.gMarker = new google.maps.Marker(b), google.maps.event.addListener(this.scope.gMarker, "click", function() {
                    return c.doClick && null != a.click ? c.$timeout(function() {
                        return c.scope.click()
                    }) : void 0
                }), this.setEvents(this.scope.gMarker, a), this.$log.info(this)
            }, d.prototype.onWatch = function(a, b) {
                switch (a) {
                    case"coords":
                        return null != b.coords && null != this.scope.gMarker ? (this.scope.gMarker.setMap(this.mapCtrl.getMap()), this.scope.gMarker.setPosition(new google.maps.LatLng(b.coords.latitude, b.coords.longitude)), this.scope.gMarker.setVisible(null != b.coords.latitude && null != b.coords.longitude), this.scope.gMarker.setOptions(b.options)) : this.scope.gMarker.setMap(null);
                    case"icon":
                        if (null != b.icon && null != b.coords && null != this.scope.gMarker)
                            return this.scope.gMarker.setOptions(b.options), this.scope.gMarker.setIcon(b.icon), this.scope.gMarker.setMap(null), this.scope.gMarker.setMap(this.mapCtrl.getMap()), this.scope.gMarker.setPosition(new google.maps.LatLng(b.coords.latitude, b.coords.longitude)), this.scope.gMarker.setVisible(b.coords.latitude && null != b.coords.longitude);
                        break;
                    case"options":
                        if (null != b.coords && null != b.icon && b.options)
                            return null != this.scope.gMarker && this.scope.gMarker.setMap(null), delete this.scope.gMarker, this.scope.gMarker = new google.maps.Marker(this.createMarkerOptions(b.coords, b.icon, b.options, this.mapCtrl.getMap()))
                    }
            }, d.prototype.onDestroy = function() {
                var a;
                return void 0 === this.scope.gMarker ? void(a = void 0) : (this.scope.gMarker.setMap(null), delete this.scope.gMarker, a = void 0)
            }, d.prototype.setEvents = function(a, b) {
                return angular.isDefined(b.events) && null != b.events && angular.isObject(b.events) ? _.compact(_.each(b.events, function(c, d) {
                    return b.events.hasOwnProperty(d) && angular.isFunction(b.events[d]) ? google.maps.event.addListener(a, d, function() {
                        return c.apply(b, [a, d, arguments])
                    }) : void 0
                })) : void 0
            }, d
        }(directives.api.models.parent.IMarkerParentModel)
    })
}.call(this), function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, b = {}.hasOwnProperty, c = function(a, c) {
        function d() {
            this.constructor = a
        }
        for (var e in c)
            b.call(c, e) && (a[e] = c[e]);
        return d.prototype = c.prototype, a.prototype = new d, a.__super__ = c.prototype, a
    };
    this.ngGmapModule("directives.api.models.parent", function() {
        return this.MarkersParentModel = function(b) {
            function d(b, c, e, f, g) {
                this.fit = a(this.fit, this), this.onDestroy = a(this.onDestroy, this), this.onWatch = a(this.onWatch, this), this.reBuildMarkers = a(this.reBuildMarkers, this), this.createMarkers = a(this.createMarkers, this), this.validateScope = a(this.validateScope, this), this.onTimeOut = a(this.onTimeOut, this);
                var h;
                d.__super__.constructor.call(this, b, c, e, f, g), h = this, this.markersIndex = 0, this.gMarkerManager = void 0, this.scope = b, this.scope.markerModels = [], this.bigGulp = directives.api.utils.AsyncProcessor, this.$timeout = g, this.$log.info(this)
            }
            return c(d, b), d.include(directives.api.utils.ModelsWatcher), d.prototype.onTimeOut = function(a) {
                return this.watch("models", a), this.watch("doCluster", a), this.watch("clusterOptions", a), this.watch("fit", a), this.createMarkers(a)
            }, d.prototype.validateScope = function(a) {
                var b;
                return b = angular.isUndefined(a.models) || void 0 === a.models, b && this.$log.error(this.constructor.name + ": no valid models attribute found"), d.__super__.validateScope.call(this, a) || b
            }, d.prototype.createMarkers = function(a) {
                var b, c = this;
                return null != a.doCluster && a.doCluster === !0 ? null != a.clusterOptions ? void 0 === this.gMarkerManager ? this.gMarkerManager = new directives.api.managers.ClustererMarkerManager(this.mapCtrl.getMap(), void 0, a.clusterOptions) : this.gMarkerManager.opt_options !== a.clusterOptions && (this.gMarkerManager = new directives.api.managers.ClustererMarkerManager(this.mapCtrl.getMap(), void 0, a.clusterOptions)) : this.gMarkerManager = new directives.api.managers.ClustererMarkerManager(this.mapCtrl.getMap()) : this.gMarkerManager = new directives.api.managers.MarkerManager(this.mapCtrl.getMap()), b = [], a.isMarkerModelsReady = !1, this.bigGulp.handleLargeArray(a.models, function(d) {
                    var e;
                    return a.doRebuild = !0, e = new directives.api.models.child.MarkerChildModel(c.markersIndex, d, a, c.mapCtrl, c.$timeout, c.DEFAULTS, c.doClick, c.gMarkerManager), c.$log.info("child", e, "markers", b), b.push(e), c.markersIndex++
                }, function() {
                }, function() {
                    return c.gMarkerManager.draw(), a.markerModels = b, angular.isDefined(c.attrs.fit) && null != a.fit && a.fit && c.fit(), a.isMarkerModelsReady = !0, null != a.onMarkerModelsReady ? a.onMarkerModelsReady(a) : void 0
                })
            }, d.prototype.reBuildMarkers = function(a) {
                if (a.doRebuild || void 0 === a.doRebuild)
                    return _.each(a.markerModels, function(a) {
                        return a.destroy()
                    }), this.markersIndex = 0, null != this.gMarkerManager && this.gMarkerManager.clear(), this.createMarkers(a)
            }, d.prototype.onWatch = function(a, b, c, d) {
                return"models" !== a || this.didModelsChange(c, d) ? "options" === a && null != c ? void(this.DEFAULTS = c) : this.reBuildMarkers(b) : void 0
            }, d.prototype.onDestroy = function(a) {
                var b, c, d, e;
                for (e = a.markerModels, c = 0, d = e.length; d > c; c++)
                    b = e[c], b.destroy();
                return null != this.gMarkerManager ? this.gMarkerManager.clear() : void 0
            }, d.prototype.fit = function() {
                var a, b;
                return this.mapCtrl && null != this.scope.markerModels && this.scope.markerModels.length > 0 && (a = new google.maps.LatLngBounds, b = !1, _.each(this.scope.markerModels, function(c) {
                    return null != c.gMarker ? (b || (b = !0), a.extend(c.gMarker.getPosition())) : void 0
                }), b) ? this.mapCtrl.getMap().fitBounds(a) : void 0
            }, d
        }(directives.api.models.parent.IMarkerParentModel)
    })
}.call(this), function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, b = {}.hasOwnProperty, c = function(a, c) {
        function d() {
            this.constructor = a
        }
        for (var e in c)
            b.call(c, e) && (a[e] = c[e]);
        return d.prototype = c.prototype, a.prototype = new d, a.__super__ = c.prototype, a
    };
    this.ngGmapModule("directives.api.models.parent", function() {
        return this.WindowsParentModel = function(b) {
            function d(b, c, e, f, g, h, i, j, k) {
                this.interpolateContent = a(this.interpolateContent, this), this.setChildScope = a(this.setChildScope, this), this.createWindow = a(this.createWindow, this), this.setContentKeys = a(this.setContentKeys, this), this.createChildScopesWindows = a(this.createChildScopesWindows, this), this.onMarkerModelsReady = a(this.onMarkerModelsReady, this), this.watchOurScope = a(this.watchOurScope, this), this.destroy = a(this.destroy, this), this.watchDestroy = a(this.watchDestroy, this), this.watchModels = a(this.watchModels, this), this.watch = a(this.watch, this);
                var l, m, n, o, p, q = this;
                for (d.__super__.constructor.call(this, b, c, e, f, g, h, i, j, k), m = this, this.$interpolate = k, this.windows = [], this.windwsIndex = 0, this.scopePropNames = ["show", "coords", "templateUrl", "templateParameter", "isIconVisibleOnClick", "closeClick"], p = this.scopePropNames, n = 0, o = p.length; o > n; n++)
                    l = p[n], this[l + "Key"] = void 0;
                this.linked = new directives.api.utils.Linked(b, c, e, f), this.models = void 0, this.contentKeys = void 0, this.isIconVisibleOnClick = void 0, this.firstTime = !0, this.bigGulp = directives.api.utils.AsyncProcessor, this.$log.info(m), this.$timeout(function() {
                    return q.watchOurScope(b), q.createChildScopesWindows()
                }, 50)
            }
            return c(d, b), d.include(directives.api.utils.ModelsWatcher), d.prototype.watch = function(a, b, c) {
                var d = this;
                return a.$watch(b, function(a, e) {
                    var f, g, h, i, j;
                    if (a !== e) {
                        for (d[c] = "function" == typeof a?a():a, i = d.windows, j = [], g = 0, h = i.length; h > g; g++)
                            f = i[g], j.push(function(a) {
                                return a.scope[b] = "self" === d[c] ? a : a[d[c]]
                            }(f));
                        return j
                    }
                }, !0)
            }, d.prototype.watchModels = function(a) {
                var b = this;
                return a.$watch("models", function(a, c) {
                    return b.didModelsChange(a, c) ? (b.destroy(), b.createChildScopesWindows()) : void 0
                })
            }, d.prototype.watchDestroy = function(a) {
                var b = this;
                return a.$on("$destroy", function() {
                    return b.destroy()
                })
            }, d.prototype.destroy = function() {
                return _.each(this.windows, function(a) {
                    return a.destroy()
                }), delete this.windows, this.windows = [], this.windowsIndex = 0
            }, d.prototype.watchOurScope = function(a) {
                var b = this;
                return _.each(this.scopePropNames, function(c) {
                    var d;
                    return d = c + "Key", b[d] = "function" == typeof a[c] ? a[c]() : a[c], b.watch(a, c, d)
                })
            }, d.prototype.onMarkerModelsReady = function(a) {
                var b = this;
                return this.destroy(), this.models = a.models, this.firstTime && this.watchDestroy(a), this.setContentKeys(a.models), this.bigGulp.handleLargeArray(a.markerModels, function(a) {
                    return b.createWindow(a.model, a.gMarker, b.gMap)
                }, function() {
                }, function() {
                    return b.firstTime = !1
                })
            }, d.prototype.createChildScopesWindows = function() {
                var a, b, c = this;
                if (this.isIconVisibleOnClick = !0, angular.isDefined(this.linked.attrs.isiconvisibleonclick) && (this.isIconVisibleOnClick = this.linked.scope.isIconVisibleOnClick), this.gMap = this.linked.ctrls[0].getMap(), a = this.linked.ctrls.length > 1 && null != this.linked.ctrls[1] ? this.linked.ctrls[1].getMarkersScope() : void 0, b = angular.isUndefined(this.linked.scope.models), b && (void 0 === a || void 0 === a.markerModels && void 0 === a.models))
                    return void this.$log.info("No models to create windows from! Need direct models or models derrived from markers!");
                if (null != this.gMap) {
                    if (null != this.linked.scope.models)
                        return this.models = this.linked.scope.models, this.firstTime && (this.watchModels(this.linked.scope), this.watchDestroy(this.linked.scope)), this.setContentKeys(this.linked.scope.models), this.bigGulp.handleLargeArray(this.linked.scope.models, function(a) {
                            return c.createWindow(a, void 0, c.gMap)
                        }, function() {
                        }, function() {
                            return c.firstTime = !1
                        });
                    if (a.onMarkerModelsReady = this.onMarkerModelsReady, a.isMarkerModelsReady)
                        return this.onMarkerModelsReady(a)
                }
            }, d.prototype.setContentKeys = function(a) {
                return a.length > 0 ? this.contentKeys = Object.keys(a[0]) : void 0
            }, d.prototype.createWindow = function(a, b, c) {
                var d, e, f, g = this;
                return d = this.linked.scope.$new(!1), this.setChildScope(d, a), d.$watch("model", function(a, b) {
                    return a !== b ? g.setChildScope(d, a) : void 0
                }, !0), f = this.interpolateContent(this.linked.element.html(), a), e = this.createWindowOptions(b, d, f, this.DEFAULTS), this.windows.push(new directives.api.models.child.WindowChildModel(d, e, this.isIconVisibleOnClick, c, b, this.$http, this.$templateCache, this.$compile, void 0, !0))
            }, d.prototype.setChildScope = function(a, b) {
                var c, d, e, f, g, h = this;
                for (g = this.scopePropNames, d = function(c) {
                    var d, e;
                    return d = c + "Key", e = "self" === h[d] ? b : b[h[d]], e !== a[c] ? a[c] = e : void 0
                }, e = 0, f = g.length; f > e; e++)
                    c = g[e], d(c);
                return a.model = b
            }, d.prototype.interpolateContent = function(a, b) {
                var c, d, e, f, g, h;
                if (void 0 !== this.contentKeys && 0 !== this.contentKeys.length) {
                    for (c = this.$interpolate(a), d = {}, h = this.contentKeys, f = 0, g = h.length; g > f; f++)
                        e = h[f], d[e] = b[e];
                    return c(d)
                }
            }, d
        }(directives.api.models.parent.IWindowParentModel)
    })
}.call(this), function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, b = {}.hasOwnProperty, c = function(a, c) {
        function d() {
            this.constructor = a
        }
        for (var e in c)
            b.call(c, e) && (a[e] = c[e]);
        return d.prototype = c.prototype, a.prototype = new d, a.__super__ = c.prototype, a
    };
    this.ngGmapModule("directives.api", function() {
        return this.ILabel = function(b) {
            function d(b) {
                this.link = a(this.link, this);
                var c;
                c = this, this.restrict = "ECMA", this.replace = !0, this.template = void 0, this.require = void 0, this.transclude = !0, this.priority = -100, this.scope = {labelContent: "=content", labelAnchor: "@anchor", labelClass: "@class", labelStyle: "=style"}, this.$log = directives.api.utils.Logger, this.$timeout = b
            }
            return c(d, b), d.prototype.link = function() {
                throw new Exception("Not Implemented!!")
            }, d
        }(oo.BaseObject)
    })
}.call(this), function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, b = {}.hasOwnProperty, c = function(a, c) {
        function d() {
            this.constructor = a
        }
        for (var e in c)
            b.call(c, e) && (a[e] = c[e]);
        return d.prototype = c.prototype, a.prototype = new d, a.__super__ = c.prototype, a
    };
    this.ngGmapModule("directives.api", function() {
        return this.IMarker = function(b) {
            function d(b) {
                this.link = a(this.link, this);
                var c;
                c = this, this.$log = directives.api.utils.Logger, this.$timeout = b, this.restrict = "ECMA", this.require = "^googleMap", this.priority = -1, this.transclude = !0, this.replace = !0, this.scope = {coords: "=coords", icon: "=icon", click: "&click", options: "=options", events: "=events"}
            }
            return c(d, b), d.prototype.controller = ["$scope", "$element", function() {
                    throw new Exception("Not Implemented!!")
                }], d.prototype.link = function() {
                throw new Exception("Not implemented!!")
            }, d
        }(oo.BaseObject)
    })
}.call(this), function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, b = {}.hasOwnProperty, c = function(a, c) {
        function d() {
            this.constructor = a
        }
        for (var e in c)
            b.call(c, e) && (a[e] = c[e]);
        return d.prototype = c.prototype, a.prototype = new d, a.__super__ = c.prototype, a
    };
    this.ngGmapModule("directives.api", function() {
        return this.IWindow = function(b) {
            function d(b, c, d, e) {
                var f;
                this.$timeout = b, this.$compile = c, this.$http = d, this.$templateCache = e, this.link = a(this.link, this), f = this, this.restrict = "ECMA", this.template = void 0, this.transclude = !0, this.priority = -100, this.require = void 0, this.replace = !0, this.scope = {coords: "=coords", show: "=show", templateUrl: "=templateurl", templateParameter: "=templateparameter", isIconVisibleOnClick: "=isiconvisibleonclick", closeClick: "&closeclick", options: "=options"}, this.$log = directives.api.utils.Logger
            }
            return c(d, b), d.include(directives.api.utils.ChildEvents), d.prototype.link = function() {
                throw new Exception("Not Implemented!!")
            }, d
        }(oo.BaseObject)
    })
}.call(this), function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, b = {}.hasOwnProperty, c = function(a, c) {
        function d() {
            this.constructor = a
        }
        for (var e in c)
            b.call(c, e) && (a[e] = c[e]);
        return d.prototype = c.prototype, a.prototype = new d, a.__super__ = c.prototype, a
    };
    this.ngGmapModule("directives.api", function() {
        return this.Label = function(b) {
            function d(b) {
                this.link = a(this.link, this);
                var c;
                d.__super__.constructor.call(this, b), c = this, this.require = "^marker", this.template = '<span class="angular-google-maps-marker-label" ng-transclude></span>', this.$log.info(this)
            }
            return c(d, b), d.prototype.link = function(a, b, c, d) {
                return this.$timeout(function() {
                    var b, c;
                    return c = d.getMarkerScope().gMarker, null != c && (b = new directives.api.models.child.MarkerLabelChildModel(c, a)), a.$on("$destroy", function() {
                        return b.destroy()
                    })
                }, directives.api.utils.GmapUtil.defaultDelay + 25)
            }, d
        }(directives.api.ILabel)
    })
}.call(this), function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, b = {}.hasOwnProperty, c = function(a, c) {
        function d() {
            this.constructor = a
        }
        for (var e in c)
            b.call(c, e) && (a[e] = c[e]);
        return d.prototype = c.prototype, a.prototype = new d, a.__super__ = c.prototype, a
    };
    this.ngGmapModule("directives.api", function() {
        return this.Layer = function(b) {
            function d(b) {
                this.$timeout = b, this.link = a(this.link, this), this.$log = directives.api.utils.Logger, this.restrict = "ECMA", this.require = "^googleMap", this.priority = -1, this.transclude = !0, this.template = '<span class="angular-google-map-layer" ng-transclude></span>', this.replace = !0, this.scope = {show: "=show", type: "=type", namespace: "=namespace", options: "=options", onCreated: "&oncreated"}
            }
            return c(d, b), d.prototype.link = function(a, b, c, d) {
                return null != c.oncreated ? new directives.api.models.parent.LayerParentModel(a, b, c, d, this.$timeout, a.onCreated) : new directives.api.models.parent.LayerParentModel(a, b, c, d, this.$timeout)
            }, d
        }(oo.BaseObject)
    })
}.call(this), function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, b = {}.hasOwnProperty, c = function(a, c) {
        function d() {
            this.constructor = a
        }
        for (var e in c)
            b.call(c, e) && (a[e] = c[e]);
        return d.prototype = c.prototype, a.prototype = new d, a.__super__ = c.prototype, a
    };
    this.ngGmapModule("directives.api", function() {
        return this.Marker = function(b) {
            function d(b) {
                this.link = a(this.link, this);
                var c;
                d.__super__.constructor.call(this, b), c = this, this.template = '<span class="angular-google-map-marker" ng-transclude></span>', this.$log.info(this)
            }
            return c(d, b), d.prototype.controller = ["$scope", "$element", function(a) {
                    return{getMarkerScope: function() {
                            return a
                        }}
                }], d.prototype.link = function(a, b, c, d) {
                return new directives.api.models.parent.MarkerParentModel(a, b, c, d, this.$timeout)
            }, d
        }(directives.api.IMarker)
    })
}.call(this), function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, b = {}.hasOwnProperty, c = function(a, c) {
        function d() {
            this.constructor = a
        }
        for (var e in c)
            b.call(c, e) && (a[e] = c[e]);
        return d.prototype = c.prototype, a.prototype = new d, a.__super__ = c.prototype, a
    };
    this.ngGmapModule("directives.api", function() {
        return this.Markers = function(b) {
            function d(b) {
                this.link = a(this.link, this);
                var c;
                d.__super__.constructor.call(this, b), c = this, this.template = '<span class="angular-google-map-markers" ng-transclude></span>', this.scope.models = "=models", this.scope.doCluster = "=docluster", this.scope.clusterOptions = "=clusteroptions", this.scope.fit = "=fit", this.scope.labelContent = "=labelcontent", this.scope.labelAnchor = "@labelanchor", this.scope.labelClass = "@labelclass", this.$timeout = b, this.$log.info(this)
            }
            return c(d, b), d.prototype.controller = ["$scope", "$element", function(a) {
                    return{getMarkersScope: function() {
                            return a
                        }}
                }], d.prototype.link = function(a, b, c, d) {
                return new directives.api.models.parent.MarkersParentModel(a, b, c, d, this.$timeout)
            }, d
        }(directives.api.IMarker)
    })
}.call(this), function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, b = {}.hasOwnProperty, c = function(a, c) {
        function d() {
            this.constructor = a
        }
        for (var e in c)
            b.call(c, e) && (a[e] = c[e]);
        return d.prototype = c.prototype, a.prototype = new d, a.__super__ = c.prototype, a
    };
    this.ngGmapModule("directives.api", function() {
        return this.Window = function(b) {
            function d(b, c, e, f) {
                this.link = a(this.link, this);
                var g;
                d.__super__.constructor.call(this, b, c, e, f), g = this, this.require = ["^googleMap", "^?marker"], this.template = '<span class="angular-google-maps-window" ng-transclude></span>', this.$log.info(g)
            }
            return c(d, b), d.include(directives.api.utils.GmapUtil), d.prototype.link = function(a, b, c, d) {
                var e = this;
                return this.$timeout(function() {
                    var f, g, h, i, j, k, l, m;
                    return h = !0, angular.isDefined(c.isiconvisibleonclick) && (h = a.isIconVisibleOnClick), i = d[0].getMap(), j = d.length > 1 && null != d[1] ? d[1].getMarkerScope().gMarker : void 0, f = null != a.options ? a.options : {}, g = null != a && null != a.coords && null != a.coords.latitude && null != a.coords.longitude, l = g ? e.createWindowOptions(j, a, b.html(), f) : f, null != i && (m = new directives.api.models.child.WindowChildModel(a, l, h, i, j, e.$http, e.$templateCache, e.$compile, b)), a.$on("$destroy", function() {
                        return m.destroy()
                    }), null != d[1] && (k = d[1].getMarkerScope(), k.$watch("coords", function(a) {
                        return null == a ? m.hideWindow() : void 0
                    }), k.$watch("coords.latitude", function(a, b) {
                        return a !== b ? m.getLatestPosition() : void 0
                    })), null != e.onChildCreation && null != m ? e.onChildCreation(m) : void 0
                }, directives.api.utils.GmapUtil.defaultDelay + 25)
            }, d
        }(directives.api.IWindow)
    })
}.call(this), function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, b = {}.hasOwnProperty, c = function(a, c) {
        function d() {
            this.constructor = a
        }
        for (var e in c)
            b.call(c, e) && (a[e] = c[e]);
        return d.prototype = c.prototype, a.prototype = new d, a.__super__ = c.prototype, a
    };
    this.ngGmapModule("directives.api", function() {
        return this.Windows = function(b) {
            function d(b, c, e, f, g) {
                this.link = a(this.link, this);
                var h;
                d.__super__.constructor.call(this, b, c, e, f), h = this, this.$interpolate = g, this.require = ["^googleMap", "^?markers"], this.template = '<span class="angular-google-maps-windows" ng-transclude></span>', this.scope.models = "=models", this.$log.info(h)
            }
            return c(d, b), d.prototype.link = function(a, b, c, d) {
                return new directives.api.models.parent.WindowsParentModel(a, b, c, d, this.$timeout, this.$compile, this.$http, this.$templateCache, this.$interpolate)
            }, d
        }(directives.api.IWindow)
    })
}.call(this), function() {
    angular.module("google-maps").directive("googleMap", ["$log", "$timeout", function(a) {
            "use strict";
            var b, c, d;
            return d = function(a) {
                return angular.isDefined(a) && null !== a && a === !0 || "1" === a || "y" === a || "true" === a
            }, directives.api.utils.Logger.logger = a, b = {mapTypeId: google.maps.MapTypeId.ROADMAP}, c = function(a) {
                return new google.maps.LatLng(a.latitude, a.longitude)
            }, {self: this, restrict: "ECMA", transclude: !0, replace: !1, template: '<div class="angular-google-map"><div class="angular-google-map-container"></div><div ng-transclude style="display: none"></div></div>', scope: {center: "=center", zoom: "=zoom", dragging: "=dragging", control: "=", windows: "=windows", options: "=options", events: "=events", styles: "=styles", bounds: "=bounds"}, controller: ["$scope", function(a) {
                        return{getMap: function() {
                                return a.map
                            }}
                    }], link: function(e, f, g) {
                    var h, i, j, k, l, m, n, o;
                    if (!angular.isDefined(e.center) || !angular.isDefined(e.center.latitude) || !angular.isDefined(e.center.longitude))
                        return void a.error("angular-google-maps: could not find a valid center property");
                    if (!angular.isDefined(e.zoom))
                        return void a.error("angular-google-maps: map zoom property not set");
                    if (i = angular.element(f), i.addClass("angular-google-map"), l = {options: {}}, g.options && (l.options = e.options), g.styles && (l.styles = e.styles), g.type && (n = g.type.toUpperCase(), google.maps.MapTypeId.hasOwnProperty(n) ? l.mapTypeId = google.maps.MapTypeId[g.type.toUpperCase()] : a.error('angular-google-maps: invalid map type "' + g.type + '"')), o = new google.maps.Map(i.find("div")[1], angular.extend({}, b, l, {center: new google.maps.LatLng(e.center.latitude, e.center.longitude), draggable: d(g.draggable), zoom: e.zoom, bounds: e.bounds})), h = !1, google.maps.event.addListener(o, "dragstart", function() {
                        return h = !0, _.defer(function() {
                            return e.$apply(function(a) {
                                return null != a.dragging ? a.dragging = h : void 0
                            })
                        })
                    }), google.maps.event.addListener(o, "dragend", function() {
                        return h = !1, _.defer(function() {
                            return e.$apply(function(a) {
                                return null != a.dragging ? a.dragging = h : void 0
                            })
                        })
                    }), google.maps.event.addListener(o, "drag", function() {
                        var a;
                        return a = o.center, _.defer(function() {
                            return e.$apply(function(b) {
                                return b.center.latitude = a.lat(), b.center.longitude = a.lng()
                            })
                        })
                    }), google.maps.event.addListener(o, "zoom_changed", function() {
                        return e.zoom !== o.zoom ? _.defer(function() {
                            return e.$apply(function(a) {
                                return a.zoom = o.zoom
                            })
                        }) : void 0
                    }), m = !1, google.maps.event.addListener(o, "center_changed", function() {
                        var a;
                        return a = o.center, m ? void 0 : _.defer(function() {
                            return e.$apply(function(b) {
                                return o.dragging || (b.center.latitude !== a.lat() && (b.center.latitude = a.lat()), b.center.longitude === a.lng()) ? void 0 : b.center.longitude = a.lng()
                            })
                        })
                    }), google.maps.event.addListener(o, "idle", function() {
                        var a, b, c;
                        return a = o.getBounds(), b = a.getNorthEast(), c = a.getSouthWest(), _.defer(function() {
                            return e.$apply(function(a) {
                                return null !== a.bounds && void 0 !== a.bounds && void 0 !== a.bounds ? (a.bounds.northeast = {latitude: b.lat(), longitude: b.lng()}, a.bounds.southwest = {latitude: c.lat(), longitude: c.lng()}) : void 0
                            })
                        })
                    }), angular.isDefined(e.events) && null !== e.events && angular.isObject(e.events)) {
                        k = function(a) {
                            return function() {
                                return e.events[a].apply(e, [o, a, arguments])
                            }
                        };
                        for (j in e.events)
                            e.events.hasOwnProperty(j) && angular.isFunction(e.events[j]) && google.maps.event.addListener(o, j, k(j))
                    }
                    return e.map = o, null != g.control && null != e.control && (e.control.refresh = function(a) {
                        var b;
                        if (null != o)
                            return google.maps.event.trigger(o, "resize"), null != (null != a ? a.latitude : void 0) && null != (null != a ? a.latitude : void 0) ? (b = c(a), d(g.pan) ? o.panTo(b) : o.setCenter(b)) : void 0
                    }, e.control.getGMap = function() {
                        return o
                    }), e.$watch("center", function(b, f) {
                        var i;
                        return i = c(b), b === f || i.lat() === o.center.lat() && i.lng() === o.center.lng() ? void 0 : (m = !0, h || ((null == b.latitude || null == b.longitude) && a.error("Invalid center for newValue: " + JSON.stringify(b)), d(g.pan) && e.zoom === o.zoom ? o.panTo(i) : o.setCenter(i)), m = !1)
                    }, !0), e.$watch("zoom", function(a, b) {
                        return a !== b && a !== o.zoom ? _.defer(function() {
                            return o.setZoom(a)
                        }) : void 0
                    }), e.$watch("bounds", function(b, c) {
                        var d, e, f;
                        if (b !== c)
                            return null == b.northeast.latitude || null == b.northeast.longitude || null == b.southwest.latitude || null == b.southwest.longitude ? void a.error("Invalid map bounds for new value: " + JSON.stringify(b)) : (e = new google.maps.LatLng(b.northeast.latitude, b.northeast.longitude), f = new google.maps.LatLng(b.southwest.latitude, b.southwest.longitude), d = new google.maps.LatLngBounds(f, e), o.fitBounds(d))
                    }), e.$watch("options", function(a, b) {
                        return _.isEqual(a, b) || (l.options = a, null == o) ? void 0 : o.setOptions(l)
                    }, !0), e.$watch("styles", function(a, b) {
                        return _.isEqual(a, b) || (l.styles = a, null == o) ? void 0 : o.setOptions(l)
                    }, !0)
                }}
        }])
}.call(this), function() {
    angular.module("google-maps").directive("marker", ["$timeout", function(a) {
            return new directives.api.Marker(a)
        }])
}.call(this), function() {
    angular.module("google-maps").directive("markers", ["$timeout", function(a) {
            return new directives.api.Markers(a)
        }])
}.call(this), function() {
    angular.module("google-maps").directive("markerLabel", ["$log", "$timeout", function(a, b) {
            return new directives.api.Label(b)
        }])
}.call(this), function() {
    angular.module("google-maps").directive("polygon", ["$log", "$timeout", function(a, b) {
            var c, d, e, f, g;
            return g = function(a) {
                var b;
                for (b = 0; b < a.length; ) {
                    if (angular.isUndefined(a[b].latitude) || angular.isUndefined(a[b].longitude))
                        return!1;
                    b++
                }
                return!0
            }, d = function(a) {
                var b, c;
                for (c = new google.maps.MVCArray, b = 0; b < a.length; )
                    c.push(new google.maps.LatLng(a[b].latitude, a[b].longitude)), b++;
                return c
            }, e = function(a, b) {
                var c, d;
                for (c = new google.maps.LatLngBounds, d = 0; d < b.length; )
                    c.extend(b.getAt(d)), d++;
                return a.fitBounds(c)
            }, f = function(a) {
                return angular.isDefined(a) && null !== a && a === !0 || "1" === a || "y" === a || "true" === a
            }, c = {}, {restrict: "ECA", require: "^googleMap", replace: !0, scope: {path: "=path", stroke: "=stroke", clickable: "=", draggable: "=", editable: "=", geodesic: "=", icons: "=icons", visible: "="}, link: function(h, i, j, k) {
                    return angular.isUndefined(h.path) || null === h.path || h.path.length < 2 || !g(h.path) ? void a.error("polyline: no valid path attribute found") : b(function() {
                        var a, b, g, i, l, m, n, o;
                        return a = k.getMap(), i = d(h.path), b = angular.extend({}, c, {map: a, path: i, strokeColor: h.stroke && h.stroke.color, strokeOpacity: h.stroke && h.stroke.opacity, strokeWeight: h.stroke && h.stroke.weight}), angular.forEach({clickable: !0, draggable: !1, editable: !1, geodesic: !1, visible: !0}, function(a, c) {
                            return b[c] = angular.isUndefined(h[c]) || null === h[c] ? a : h[c]
                        }), o = new google.maps.Polyline(b), f(j.fit) && e(a, i), angular.isDefined(h.editable) && h.$watch("editable", function(a) {
                            return o.setEditable(a)
                        }), angular.isDefined(h.draggable) && h.$watch("draggable", function(a) {
                            return o.setDraggable(a)
                        }), angular.isDefined(h.visible) && h.$watch("visible", function(a) {
                            return o.setVisible(a)
                        }), m = void 0, g = void 0, l = void 0, n = o.getPath(), m = google.maps.event.addListener(n, "set_at", function(a) {
                            var b;
                            return b = n.getAt(a), b && b.lng && b.lat ? (h.path[a].latitude = b.lat(), h.path[a].longitude = b.lng(), h.$apply()) : void 0
                        }), g = google.maps.event.addListener(n, "insert_at", function(a) {
                            var b;
                            return b = n.getAt(a), b && b.lng && b.lat ? (h.path.splice(a, 0, {latitude: b.lat(), longitude: b.lng()}), h.$apply()) : void 0
                        }), l = google.maps.event.addListener(n, "remove_at", function(a) {
                            return h.path.splice(a, 1), h.$apply()
                        }), h.$watch("path", function(b) {
                            var c, d, g, h, i, k, l;
                            if (i = o.getPath(), b !== i) {
                                if (!b)
                                    return o.setMap(null);
                                for (o.setMap(a), c = 0, k = i.getLength(), g = b.length, d = Math.min(k, g); d > c; )
                                    l = i.getAt(c), h = b[c], (l.lat() !== h.latitude || l.lng() !== h.longitude) && i.setAt(c, new google.maps.LatLng(h.latitude, h.longitude)), c++;
                                for (; g > c; )
                                    h = b[c], i.push(new google.maps.LatLng(h.latitude, h.longitude)), c++;
                                for (; k > c; )
                                    i.pop(), c++;
                                if (f(j.fit))
                                    return e(a, i)
                            }
                        }, !0), h.$on("$destroy", function() {
                            return o.setMap(null), m(), m = null, g(), g = null, l(), l = null
                        })
                    })
                }}
        }])
}.call(this), function() {
    angular.module("google-maps").directive("polyline", ["$log", "$timeout", "array-sync", function(a, b, c) {
            var d, e, f, g, h;
            return h = function(a) {
                var b;
                for (b = 0; b < a.length; ) {
                    if (angular.isUndefined(a[b].latitude) || angular.isUndefined(a[b].longitude))
                        return!1;
                    b++
                }
                return!0
            }, e = function(a) {
                var b, c;
                for (c = new google.maps.MVCArray, b = 0; b < a.length; )
                    c.push(new google.maps.LatLng(a[b].latitude, a[b].longitude)), b++;
                return c
            }, f = function(a, b) {
                var c, d;
                for (c = new google.maps.LatLngBounds, d = 0; d < b.length; )
                    c.extend(b.getAt(d)), d++;
                return a.fitBounds(c)
            }, g = function(a) {
                return angular.isDefined(a) && null !== a && a === !0 || "1" === a || "y" === a || "true" === a
            }, d = {}, {restrict: "ECA", replace: !0, require: "^googleMap", scope: {path: "=path", stroke: "=stroke", clickable: "=", draggable: "=", editable: "=", geodesic: "=", icons: "=icons", visible: "="}, link: function(i, j, k, l) {
                    return angular.isUndefined(i.path) || null === i.path || i.path.length < 2 || !h(i.path) ? void a.error("polyline: no valid path attribute found") : b(function() {
                        var a, b, h, j;
                        return b = function(a) {
                            var b;
                            return b = angular.extend({}, d, {map: h, path: a, strokeColor: i.stroke && i.stroke.color, strokeOpacity: i.stroke && i.stroke.opacity, strokeWeight: i.stroke && i.stroke.weight}), angular.forEach({clickable: !0, draggable: !1, editable: !1, geodesic: !1, visible: !0}, function(a, c) {
                                return b[c] = angular.isUndefined(i[c]) || null === i[c] ? a : i[c]
                            }), b
                        }, h = l.getMap(), j = new google.maps.Polyline(b(e(i.path))), g(k.fit) && f(h, pathPoints), angular.isDefined(i.editable) && i.$watch("editable", function(a) {
                            return j.setEditable(a)
                        }), angular.isDefined(i.draggable) && i.$watch("draggable", function(a) {
                            return j.setDraggable(a)
                        }), angular.isDefined(i.visible) && i.$watch("visible", function(a) {
                            return j.setVisible(a)
                        }), angular.isDefined(i.geodesic) && i.$watch("geodesic", function() {
                            return j.setOptions(b(j.getPath()))
                        }), angular.isDefined(i.stroke) && angular.isDefined(i.stroke.weight) && i.$watch("stroke.weight", function() {
                            return j.setOptions(b(j.getPath()))
                        }), angular.isDefined(i.stroke) && angular.isDefined(i.stroke.color) && i.$watch("stroke.color", function() {
                            return j.setOptions(b(j.getPath()))
                        }), a = c(j.getPath(), i, "path"), i.$on("$destroy", function() {
                            return j.setMap(null), a ? (a(), a = null) : void 0
                        })
                    })
                }}
        }])
}.call(this), function() {
    angular.module("google-maps").directive("window", ["$timeout", "$compile", "$http", "$templateCache", function(a, b, c, d) {
            return new directives.api.Window(a, b, c, d)
        }])
}.call(this), function() {
    angular.module("google-maps").directive("windows", ["$timeout", "$compile", "$http", "$templateCache", "$interpolate", function(a, b, c, d, e) {
            return new directives.api.Windows(a, b, c, d, e)
        }])
}.call(this), function() {
    angular.module("google-maps").directive("layer", ["$timeout", function(a) {
            return new directives.api.Layer(a)
        }])
}.call(this), InfoBox.prototype = new google.maps.OverlayView, InfoBox.prototype.createInfoBoxDiv_ = function() {
    var a, b, c, d = this, e = function(a) {
        a.cancelBubble = !0, a.stopPropagation && a.stopPropagation()
    }, f = function(a) {
        a.returnValue = !1, a.preventDefault && a.preventDefault(), d.enableEventPropagation_ || e(a)
    };
    if (!this.div_) {
        if (this.div_ = document.createElement("div"), this.setBoxStyle_(), "undefined" == typeof this.content_.nodeType ? this.div_.innerHTML = this.getCloseBoxImg_() + this.content_ : (this.div_.innerHTML = this.getCloseBoxImg_(), this.div_.appendChild(this.content_)), this.getPanes()[this.pane_].appendChild(this.div_), this.addClickHandler_(), this.div_.style.width ? this.fixedWidthSet_ = !0 : 0 !== this.maxWidth_ && this.div_.offsetWidth > this.maxWidth_ ? (this.div_.style.width = this.maxWidth_, this.div_.style.overflow = "auto", this.fixedWidthSet_ = !0) : (c = this.getBoxWidths_(), this.div_.style.width = this.div_.offsetWidth - c.left - c.right + "px", this.fixedWidthSet_ = !1), this.panBox_(this.disableAutoPan_), !this.enableEventPropagation_) {
            for (this.eventListeners_ = [], b = ["mousedown", "mouseover", "mouseout", "mouseup", "click", "dblclick", "touchstart", "touchend", "touchmove"], a = 0; a < b.length; a++)
                this.eventListeners_.push(google.maps.event.addDomListener(this.div_, b[a], e));
            this.eventListeners_.push(google.maps.event.addDomListener(this.div_, "mouseover", function() {
                this.style.cursor = "default"
            }))
        }
        this.contextListener_ = google.maps.event.addDomListener(this.div_, "contextmenu", f), google.maps.event.trigger(this, "domready")
    }
}, InfoBox.prototype.getCloseBoxImg_ = function() {
    var a = "";
    return"" !== this.closeBoxURL_ && (a = "<img", a += " src='" + this.closeBoxURL_ + "'", a += " align=right", a += " style='", a += " position: relative;", a += " cursor: pointer;", a += " margin: " + this.closeBoxMargin_ + ";", a += "'>"), a
}, InfoBox.prototype.addClickHandler_ = function() {
    var a;
    "" !== this.closeBoxURL_ ? (a = this.div_.firstChild, this.closeListener_ = google.maps.event.addDomListener(a, "click", this.getCloseClickHandler_())) : this.closeListener_ = null
}, InfoBox.prototype.getCloseClickHandler_ = function() {
    var a = this;
    return function(b) {
        b.cancelBubble = !0, b.stopPropagation && b.stopPropagation(), google.maps.event.trigger(a, "closeclick"), a.close()
    }
}, InfoBox.prototype.panBox_ = function(a) {
    var b, c, d = 0, e = 0;
    if (!a && (b = this.getMap(), b instanceof google.maps.Map)) {
        b.getBounds().contains(this.position_) || b.setCenter(this.position_), c = b.getBounds();
        var f = b.getDiv(), g = f.offsetWidth, h = f.offsetHeight, i = this.pixelOffset_.width, j = this.pixelOffset_.height, k = this.div_.offsetWidth, l = this.div_.offsetHeight, m = this.infoBoxClearance_.width, n = this.infoBoxClearance_.height, o = this.getProjection().fromLatLngToContainerPixel(this.position_);
        if (o.x < -i + m ? d = o.x + i - m : o.x + k + i + m > g && (d = o.x + k + i + m - g), this.alignBottom_ ? o.y < -j + n + l ? e = o.y + j - n - l : o.y + j + n > h && (e = o.y + j + n - h) : o.y < -j + n ? e = o.y + j - n : o.y + l + j + n > h && (e = o.y + l + j + n - h), 0 !== d || 0 !== e) {
            {
                b.getCenter()
            }
            b.panBy(d, e)
        }
    }
}, InfoBox.prototype.setBoxStyle_ = function() {
    var a, b;
    if (this.div_) {
        this.div_.className = this.boxClass_, this.div_.style.cssText = "", b = this.boxStyle_;
        for (a in b)
            b.hasOwnProperty(a) && (this.div_.style[a] = b[a]);
        "undefined" != typeof this.div_.style.opacity && "" !== this.div_.style.opacity && (this.div_.style.filter = "alpha(opacity=" + 100 * this.div_.style.opacity + ")"), this.div_.style.position = "absolute", this.div_.style.visibility = "hidden", null !== this.zIndex_ && (this.div_.style.zIndex = this.zIndex_)
    }
}, InfoBox.prototype.getBoxWidths_ = function() {
    var a, b = {top: 0, bottom: 0, left: 0, right: 0}, c = this.div_;
    return document.defaultView && document.defaultView.getComputedStyle ? (a = c.ownerDocument.defaultView.getComputedStyle(c, ""), a && (b.top = parseInt(a.borderTopWidth, 10) || 0, b.bottom = parseInt(a.borderBottomWidth, 10) || 0, b.left = parseInt(a.borderLeftWidth, 10) || 0, b.right = parseInt(a.borderRightWidth, 10) || 0)) : document.documentElement.currentStyle && c.currentStyle && (b.top = parseInt(c.currentStyle.borderTopWidth, 10) || 0, b.bottom = parseInt(c.currentStyle.borderBottomWidth, 10) || 0, b.left = parseInt(c.currentStyle.borderLeftWidth, 10) || 0, b.right = parseInt(c.currentStyle.borderRightWidth, 10) || 0), b
}, InfoBox.prototype.onRemove = function() {
    this.div_ && (this.div_.parentNode.removeChild(this.div_), this.div_ = null)
}, InfoBox.prototype.draw = function() {
    this.createInfoBoxDiv_();
    var a = this.getProjection().fromLatLngToDivPixel(this.position_);
    this.div_.style.left = a.x + this.pixelOffset_.width + "px", this.alignBottom_ ? this.div_.style.bottom = -(a.y + this.pixelOffset_.height) + "px" : this.div_.style.top = a.y + this.pixelOffset_.height + "px", this.div_.style.visibility = this.isHidden_ ? "hidden" : "visible"
}, InfoBox.prototype.setOptions = function(a) {
    "undefined" != typeof a.boxClass && (this.boxClass_ = a.boxClass, this.setBoxStyle_()), "undefined" != typeof a.boxStyle && (this.boxStyle_ = a.boxStyle, this.setBoxStyle_()), "undefined" != typeof a.content && this.setContent(a.content), "undefined" != typeof a.disableAutoPan && (this.disableAutoPan_ = a.disableAutoPan), "undefined" != typeof a.maxWidth && (this.maxWidth_ = a.maxWidth), "undefined" != typeof a.pixelOffset && (this.pixelOffset_ = a.pixelOffset), "undefined" != typeof a.alignBottom && (this.alignBottom_ = a.alignBottom), "undefined" != typeof a.position && this.setPosition(a.position), "undefined" != typeof a.zIndex && this.setZIndex(a.zIndex), "undefined" != typeof a.closeBoxMargin && (this.closeBoxMargin_ = a.closeBoxMargin), "undefined" != typeof a.closeBoxURL && (this.closeBoxURL_ = a.closeBoxURL), "undefined" != typeof a.infoBoxClearance && (this.infoBoxClearance_ = a.infoBoxClearance), "undefined" != typeof a.isHidden && (this.isHidden_ = a.isHidden), "undefined" != typeof a.visible && (this.isHidden_ = !a.visible), "undefined" != typeof a.enableEventPropagation && (this.enableEventPropagation_ = a.enableEventPropagation), this.div_ && this.draw()
}, InfoBox.prototype.setContent = function(a) {
    this.content_ = a, this.div_ && (this.closeListener_ && (google.maps.event.removeListener(this.closeListener_), this.closeListener_ = null), this.fixedWidthSet_ || (this.div_.style.width = ""), "undefined" == typeof a.nodeType ? this.div_.innerHTML = this.getCloseBoxImg_() + a : (this.div_.innerHTML = this.getCloseBoxImg_(), this.div_.appendChild(a)), this.fixedWidthSet_ || (this.div_.style.width = this.div_.offsetWidth + "px", "undefined" == typeof a.nodeType ? this.div_.innerHTML = this.getCloseBoxImg_() + a : (this.div_.innerHTML = this.getCloseBoxImg_(), this.div_.appendChild(a))), this.addClickHandler_()), google.maps.event.trigger(this, "content_changed")
}, InfoBox.prototype.setPosition = function(a) {
    this.position_ = a, this.div_ && this.draw(), google.maps.event.trigger(this, "position_changed")
}, InfoBox.prototype.setZIndex = function(a) {
    this.zIndex_ = a, this.div_ && (this.div_.style.zIndex = a), google.maps.event.trigger(this, "zindex_changed")
}, InfoBox.prototype.setVisible = function(a) {
    this.isHidden_ = !a, this.div_ && (this.div_.style.visibility = this.isHidden_ ? "hidden" : "visible")
}, InfoBox.prototype.getContent = function() {
    return this.content_
}, InfoBox.prototype.getPosition = function() {
    return this.position_
}, InfoBox.prototype.getZIndex = function() {
    return this.zIndex_
}, InfoBox.prototype.getVisible = function() {
    var a;
    return a = "undefined" == typeof this.getMap() || null === this.getMap() ? !1 : !this.isHidden_
}, InfoBox.prototype.show = function() {
    this.isHidden_ = !1, this.div_ && (this.div_.style.visibility = "visible")
}, InfoBox.prototype.hide = function() {
    this.isHidden_ = !0, this.div_ && (this.div_.style.visibility = "hidden")
}, InfoBox.prototype.open = function(a, b) {
    var c = this;
    b && (this.position_ = b.getPosition(), this.moveListener_ = google.maps.event.addListener(b, "position_changed", function() {
        c.setPosition(this.getPosition())
    })), this.setMap(a), this.div_ && this.panBox_()
}, InfoBox.prototype.close = function() {
    var a;
    if (this.closeListener_ && (google.maps.event.removeListener(this.closeListener_), this.closeListener_ = null), this.eventListeners_) {
        for (a = 0; a < this.eventListeners_.length; a++)
            google.maps.event.removeListener(this.eventListeners_[a]);
        this.eventListeners_ = null
    }
    this.moveListener_ && (google.maps.event.removeListener(this.moveListener_), this.moveListener_ = null), this.contextListener_ && (google.maps.event.removeListener(this.contextListener_), this.contextListener_ = null), this.setMap(null)
}, ClusterIcon.prototype.onAdd = function() {
    var a, b, c = this;
    this.div_ = document.createElement("div"), this.div_.className = this.className_, this.visible_ && this.show(), this.getPanes().overlayMouseTarget.appendChild(this.div_), this.boundsChangedListener_ = google.maps.event.addListener(this.getMap(), "bounds_changed", function() {
        b = a
    }), google.maps.event.addDomListener(this.div_, "mousedown", function() {
        a = !0, b = !1
    }), google.maps.event.addDomListener(this.div_, "click", function(d) {
        if (a = !1, !b) {
            var e, f, g = c.cluster_.getMarkerClusterer();
            google.maps.event.trigger(g, "click", c.cluster_), google.maps.event.trigger(g, "clusterclick", c.cluster_), g.getZoomOnClick() && (f = g.getMaxZoom(), e = c.cluster_.getBounds(), g.getMap().fitBounds(e), setTimeout(function() {
                g.getMap().fitBounds(e), null !== f && g.getMap().getZoom() > f && g.getMap().setZoom(f + 1)
            }, 100)), d.cancelBubble = !0, d.stopPropagation && d.stopPropagation()
        }
    }), google.maps.event.addDomListener(this.div_, "mouseover", function() {
        var a = c.cluster_.getMarkerClusterer();
        google.maps.event.trigger(a, "mouseover", c.cluster_)
    }), google.maps.event.addDomListener(this.div_, "mouseout", function() {
        var a = c.cluster_.getMarkerClusterer();
        google.maps.event.trigger(a, "mouseout", c.cluster_)
    })
}, ClusterIcon.prototype.onRemove = function() {
    this.div_ && this.div_.parentNode && (this.hide(), google.maps.event.removeListener(this.boundsChangedListener_), google.maps.event.clearInstanceListeners(this.div_), this.div_.parentNode.removeChild(this.div_), this.div_ = null)
}, ClusterIcon.prototype.draw = function() {
    if (this.visible_) {
        var a = this.getPosFromLatLng_(this.center_);
        this.div_.style.top = a.y + "px", this.div_.style.left = a.x + "px"
    }
}, ClusterIcon.prototype.hide = function() {
    this.div_ && (this.div_.style.display = "none"), this.visible_ = !1
}, ClusterIcon.prototype.show = function() {
    if (this.div_) {
        var a = "", b = this.backgroundPosition_.split(" "), c = parseInt(b[0].trim(), 10), d = parseInt(b[1].trim(), 10), e = this.getPosFromLatLng_(this.center_);
        this.div_.style.cssText = this.createCss(e), a = "<img src='" + this.url_ + "' style='position: absolute; top: " + d + "px; left: " + c + "px; ", this.cluster_.getMarkerClusterer().enableRetinaIcons_ || (a += "clip: rect(" + -1 * d + "px, " + (-1 * c + this.width_) + "px, " + (-1 * d + this.height_) + "px, " + -1 * c + "px);"), a += "'>", this.div_.innerHTML = a + "<div style='position: absolute;top: " + this.anchorText_[0] + "px;left: " + this.anchorText_[1] + "px;color: " + this.textColor_ + ";font-size: " + this.textSize_ + "px;font-family: " + this.fontFamily_ + ";font-weight: " + this.fontWeight_ + ";font-style: " + this.fontStyle_ + ";text-decoration: " + this.textDecoration_ + ";text-align: center;width: " + this.width_ + "px;line-height:" + this.height_ + "px;'>" + this.sums_.text + "</div>", this.div_.title = "undefined" == typeof this.sums_.title || "" === this.sums_.title ? this.cluster_.getMarkerClusterer().getTitle() : this.sums_.title, this.div_.style.display = ""
    }
    this.visible_ = !0
}, ClusterIcon.prototype.useStyle = function(a) {
    this.sums_ = a;
    var b = Math.max(0, a.index - 1);
    b = Math.min(this.styles_.length - 1, b);
    var c = this.styles_[b];
    this.url_ = c.url, this.height_ = c.height, this.width_ = c.width, this.anchorText_ = c.anchorText || [0, 0], this.anchorIcon_ = c.anchorIcon || [parseInt(this.height_ / 2, 10), parseInt(this.width_ / 2, 10)], this.textColor_ = c.textColor || "black", this.textSize_ = c.textSize || 11, this.textDecoration_ = c.textDecoration || "none", this.fontWeight_ = c.fontWeight || "bold", this.fontStyle_ = c.fontStyle || "normal", this.fontFamily_ = c.fontFamily || "Arial,sans-serif", this.backgroundPosition_ = c.backgroundPosition || "0 0"
}, ClusterIcon.prototype.setCenter = function(a) {
    this.center_ = a
}, ClusterIcon.prototype.createCss = function(a) {
    var b = [];
    return b.push("cursor: pointer;"), b.push("position: absolute; top: " + a.y + "px; left: " + a.x + "px;"), b.push("width: " + this.width_ + "px; height: " + this.height_ + "px;"), b.join("")
}, ClusterIcon.prototype.getPosFromLatLng_ = function(a) {
    var b = this.getProjection().fromLatLngToDivPixel(a);
    return b.x -= this.anchorIcon_[1], b.y -= this.anchorIcon_[0], b.x = parseInt(b.x, 10), b.y = parseInt(b.y, 10), b
}, Cluster.prototype.getSize = function() {
    return this.markers_.length
}, Cluster.prototype.getMarkers = function() {
    return this.markers_
}, Cluster.prototype.getCenter = function() {
    return this.center_
}, Cluster.prototype.getMap = function() {
    return this.map_
}, Cluster.prototype.getMarkerClusterer = function() {
    return this.markerClusterer_
}, Cluster.prototype.getBounds = function() {
    var a, b = new google.maps.LatLngBounds(this.center_, this.center_), c = this.getMarkers();
    for (a = 0; a < c.length; a++)
        b.extend(c[a].getPosition());
    return b
}, Cluster.prototype.remove = function() {
    this.clusterIcon_.setMap(null), this.markers_ = [], delete this.markers_
}, Cluster.prototype.addMarker = function(a) {
    var b, c, d;
    if (this.isMarkerAlreadyAdded_(a))
        return!1;
    if (this.center_) {
        if (this.averageCenter_) {
            var e = this.markers_.length + 1, f = (this.center_.lat() * (e - 1) + a.getPosition().lat()) / e, g = (this.center_.lng() * (e - 1) + a.getPosition().lng()) / e;
            this.center_ = new google.maps.LatLng(f, g), this.calculateBounds_()
        }
    } else
        this.center_ = a.getPosition(), this.calculateBounds_();
    if (a.isAdded = !0, this.markers_.push(a), c = this.markers_.length, d = this.markerClusterer_.getMaxZoom(), null !== d && this.map_.getZoom() > d)
        a.getMap() !== this.map_ && a.setMap(this.map_);
    else if (c < this.minClusterSize_)
        a.getMap() !== this.map_ && a.setMap(this.map_);
    else if (c === this.minClusterSize_)
        for (b = 0; c > b; b++)
            this.markers_[b].setMap(null);
    else
        a.setMap(null);
    return this.updateIcon_(), !0
}, Cluster.prototype.isMarkerInClusterBounds = function(a) {
    return this.bounds_.contains(a.getPosition())
}, Cluster.prototype.calculateBounds_ = function() {
    var a = new google.maps.LatLngBounds(this.center_, this.center_);
    this.bounds_ = this.markerClusterer_.getExtendedBounds(a)
}, Cluster.prototype.updateIcon_ = function() {
    var a = this.markers_.length, b = this.markerClusterer_.getMaxZoom();
    if (null !== b && this.map_.getZoom() > b)
        return void this.clusterIcon_.hide();
    if (a < this.minClusterSize_)
        return void this.clusterIcon_.hide();
    var c = this.markerClusterer_.getStyles().length, d = this.markerClusterer_.getCalculator()(this.markers_, c);
    this.clusterIcon_.setCenter(this.center_), this.clusterIcon_.useStyle(d), this.clusterIcon_.show()
}, Cluster.prototype.isMarkerAlreadyAdded_ = function(a) {
    var b;
    if (this.markers_.indexOf)
        return-1 !== this.markers_.indexOf(a);
    for (b = 0; b < this.markers_.length; b++)
        if (a === this.markers_[b])
            return!0;
    return!1
}, MarkerClusterer.prototype.onAdd = function() {
    var a = this;
    this.activeMap_ = this.getMap(), this.ready_ = !0, this.repaint(), this.listeners_ = [google.maps.event.addListener(this.getMap(), "zoom_changed", function() {
            a.resetViewport_(!1), (this.getZoom() === (this.get("minZoom") || 0) || this.getZoom() === this.get("maxZoom")) && google.maps.event.trigger(this, "idle")
        }), google.maps.event.addListener(this.getMap(), "idle", function() {
            a.redraw_()
        })]
}, MarkerClusterer.prototype.onRemove = function() {
    var a;
    for (a = 0; a < this.markers_.length; a++)
        this.markers_[a].getMap() !== this.activeMap_ && this.markers_[a].setMap(this.activeMap_);
    for (a = 0; a < this.clusters_.length; a++)
        this.clusters_[a].remove();
    for (this.clusters_ = [], a = 0; a < this.listeners_.length; a++)
        google.maps.event.removeListener(this.listeners_[a]);
    this.listeners_ = [], this.activeMap_ = null, this.ready_ = !1
}, MarkerClusterer.prototype.draw = function() {
}, MarkerClusterer.prototype.setupStyles_ = function() {
    var a, b;
    if (!(this.styles_.length > 0))
        for (a = 0; a < this.imageSizes_.length; a++)
            b = this.imageSizes_[a], this.styles_.push({url: this.imagePath_ + (a + 1) + "." + this.imageExtension_, height: b, width: b})
}, MarkerClusterer.prototype.fitMapToMarkers = function() {
    var a, b = this.getMarkers(), c = new google.maps.LatLngBounds;
    for (a = 0; a < b.length; a++)
        c.extend(b[a].getPosition());
    this.getMap().fitBounds(c)
}, MarkerClusterer.prototype.getGridSize = function() {
    return this.gridSize_
}, MarkerClusterer.prototype.setGridSize = function(a) {
    this.gridSize_ = a
}, MarkerClusterer.prototype.getMinimumClusterSize = function() {
    return this.minClusterSize_
}, MarkerClusterer.prototype.setMinimumClusterSize = function(a) {
    this.minClusterSize_ = a
}, MarkerClusterer.prototype.getMaxZoom = function() {
    return this.maxZoom_
}, MarkerClusterer.prototype.setMaxZoom = function(a) {
    this.maxZoom_ = a
}, MarkerClusterer.prototype.getStyles = function() {
    return this.styles_
}, MarkerClusterer.prototype.setStyles = function(a) {
    this.styles_ = a
}, MarkerClusterer.prototype.getTitle = function() {
    return this.title_
}, MarkerClusterer.prototype.setTitle = function(a) {
    this.title_ = a
}, MarkerClusterer.prototype.getZoomOnClick = function() {
    return this.zoomOnClick_
}, MarkerClusterer.prototype.setZoomOnClick = function(a) {
    this.zoomOnClick_ = a
}, MarkerClusterer.prototype.getAverageCenter = function() {
    return this.averageCenter_
}, MarkerClusterer.prototype.setAverageCenter = function(a) {
    this.averageCenter_ = a
}, MarkerClusterer.prototype.getIgnoreHidden = function() {
    return this.ignoreHidden_
}, MarkerClusterer.prototype.setIgnoreHidden = function(a) {
    this.ignoreHidden_ = a
}, MarkerClusterer.prototype.getEnableRetinaIcons = function() {
    return this.enableRetinaIcons_
}, MarkerClusterer.prototype.setEnableRetinaIcons = function(a) {
    this.enableRetinaIcons_ = a
}, MarkerClusterer.prototype.getImageExtension = function() {
    return this.imageExtension_
}, MarkerClusterer.prototype.setImageExtension = function(a) {
    this.imageExtension_ = a
}, MarkerClusterer.prototype.getImagePath = function() {
    return this.imagePath_
}, MarkerClusterer.prototype.setImagePath = function(a) {
    this.imagePath_ = a
}, MarkerClusterer.prototype.getImageSizes = function() {
    return this.imageSizes_
}, MarkerClusterer.prototype.setImageSizes = function(a) {
    this.imageSizes_ = a
}, MarkerClusterer.prototype.getCalculator = function() {
    return this.calculator_
}, MarkerClusterer.prototype.setCalculator = function(a) {
    this.calculator_ = a
}, MarkerClusterer.prototype.getBatchSizeIE = function() {
    return this.batchSizeIE_
}, MarkerClusterer.prototype.setBatchSizeIE = function(a) {
    this.batchSizeIE_ = a
}, MarkerClusterer.prototype.getClusterClass = function() {
    return this.clusterClass_
}, MarkerClusterer.prototype.setClusterClass = function(a) {
    this.clusterClass_ = a
}, MarkerClusterer.prototype.getMarkers = function() {
    return this.markers_
}, MarkerClusterer.prototype.getTotalMarkers = function() {
    return this.markers_.length
}, MarkerClusterer.prototype.getClusters = function() {
    return this.clusters_
}, MarkerClusterer.prototype.getTotalClusters = function() {
    return this.clusters_.length
}, MarkerClusterer.prototype.addMarker = function(a, b) {
    this.pushMarkerTo_(a), b || this.redraw_()
}, MarkerClusterer.prototype.addMarkers = function(a, b) {
    var c;
    for (c in a)
        a.hasOwnProperty(c) && this.pushMarkerTo_(a[c]);
    b || this.redraw_()
}, MarkerClusterer.prototype.pushMarkerTo_ = function(a) {
    if (a.getDraggable()) {
        var b = this;
        google.maps.event.addListener(a, "dragend", function() {
            b.ready_ && (this.isAdded = !1, b.repaint())
        })
    }
    a.isAdded = !1, this.markers_.push(a)
}, MarkerClusterer.prototype.removeMarker = function(a, b) {
    var c = this.removeMarker_(a);
    return!b && c && this.repaint(), c
}, MarkerClusterer.prototype.removeMarkers = function(a, b) {
    var c, d, e = !1;
    for (c = 0; c < a.length; c++)
        d = this.removeMarker_(a[c]), e = e || d;
    return!b && e && this.repaint(), e
}, MarkerClusterer.prototype.removeMarker_ = function(a) {
    var b, c = -1;
    if (this.markers_.indexOf)
        c = this.markers_.indexOf(a);
    else
        for (b = 0; b < this.markers_.length; b++)
            if (a === this.markers_[b]) {
                c = b;
                break
            }
    return-1 === c ? !1 : (a.setMap(null), this.markers_.splice(c, 1), !0)
}, MarkerClusterer.prototype.clearMarkers = function() {
    this.resetViewport_(!0), this.markers_ = []
}, MarkerClusterer.prototype.repaint = function() {
    var a = this.clusters_.slice();
    this.clusters_ = [], this.resetViewport_(!1), this.redraw_(), setTimeout(function() {
        var b;
        for (b = 0; b < a.length; b++)
            a[b].remove()
    }, 0)
}, MarkerClusterer.prototype.getExtendedBounds = function(a) {
    var b = this.getProjection(), c = new google.maps.LatLng(a.getNorthEast().lat(), a.getNorthEast().lng()), d = new google.maps.LatLng(a.getSouthWest().lat(), a.getSouthWest().lng()), e = b.fromLatLngToDivPixel(c);
    e.x += this.gridSize_, e.y -= this.gridSize_;
    var f = b.fromLatLngToDivPixel(d);
    f.x -= this.gridSize_, f.y += this.gridSize_;
    var g = b.fromDivPixelToLatLng(e), h = b.fromDivPixelToLatLng(f);
    return a.extend(g), a.extend(h), a
}, MarkerClusterer.prototype.redraw_ = function() {
    this.createClusters_(0)
}, MarkerClusterer.prototype.resetViewport_ = function(a) {
    var b, c;
    for (b = 0; b < this.clusters_.length; b++)
        this.clusters_[b].remove();
    for (this.clusters_ = [], b = 0; b < this.markers_.length; b++)
        c = this.markers_[b], c.isAdded = !1, a && c.setMap(null)
}, MarkerClusterer.prototype.distanceBetweenPoints_ = function(a, b) {
    var c = 6371, d = (b.lat() - a.lat()) * Math.PI / 180, e = (b.lng() - a.lng()) * Math.PI / 180, f = Math.sin(d / 2) * Math.sin(d / 2) + Math.cos(a.lat() * Math.PI / 180) * Math.cos(b.lat() * Math.PI / 180) * Math.sin(e / 2) * Math.sin(e / 2), g = 2 * Math.atan2(Math.sqrt(f), Math.sqrt(1 - f)), h = c * g;
    return h
}, MarkerClusterer.prototype.isMarkerInBounds_ = function(a, b) {
    return b.contains(a.getPosition())
}, MarkerClusterer.prototype.addToClosestCluster_ = function(a) {
    var b, c, d, e, f = 4e4, g = null;
    for (b = 0; b < this.clusters_.length; b++)
        d = this.clusters_[b], e = d.getCenter(), e && (c = this.distanceBetweenPoints_(e, a.getPosition()), f > c && (f = c, g = d));
    g && g.isMarkerInClusterBounds(a) ? g.addMarker(a) : (d = new Cluster(this), d.addMarker(a), this.clusters_.push(d))
}, MarkerClusterer.prototype.createClusters_ = function(a) {
    var b, c, d, e = this;
    if (this.ready_) {
        0 === a && (google.maps.event.trigger(this, "clusteringbegin", this), "undefined" != typeof this.timerRefStatic && (clearTimeout(this.timerRefStatic), delete this.timerRefStatic)), d = this.getMap().getZoom() > 3 ? new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(), this.getMap().getBounds().getNorthEast()) : new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472, -178.48388434375), new google.maps.LatLng(-85.08136444384544, 178.00048865625));
        var f = this.getExtendedBounds(d), g = Math.min(a + this.batchSize_, this.markers_.length);
        for (b = a; g > b; b++)
            c = this.markers_[b], !c.isAdded && this.isMarkerInBounds_(c, f) && (!this.ignoreHidden_ || this.ignoreHidden_ && c.getVisible()) && this.addToClosestCluster_(c);
        g < this.markers_.length ? this.timerRefStatic = setTimeout(function() {
            e.createClusters_(g)
        }, 0) : (delete this.timerRefStatic, google.maps.event.trigger(this, "clusteringend", this))
    }
}, MarkerClusterer.prototype.extend = function(a, b) {
    return function(a) {
        var b;
        for (b in a.prototype)
            this.prototype[b] = a.prototype[b];
        return this
    }.apply(a, [b])
}, MarkerClusterer.CALCULATOR = function(a, b) {
    for (var c = 0, d = "", e = a.length.toString(), f = e; 0 !== f; )
        f = parseInt(f / 10, 10), c++;
    return c = Math.min(c, b), {text: e, index: c, title: d}
}, MarkerClusterer.BATCH_SIZE = 2e3, MarkerClusterer.BATCH_SIZE_IE = 500, MarkerClusterer.IMAGE_PATH = "http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/images/m", MarkerClusterer.IMAGE_EXTENSION = "png", MarkerClusterer.IMAGE_SIZES = [53, 56, 66, 78, 90], "function" != typeof String.prototype.trim && (String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "")
}), inherits(MarkerLabel_, google.maps.OverlayView), MarkerLabel_.getSharedCross = function(a) {
    var b;
    return"undefined" == typeof MarkerLabel_.getSharedCross.crossDiv && (b = document.createElement("img"), b.style.cssText = "position: absolute; z-index: 1000002; display: none;", b.style.marginLeft = "-8px", b.style.marginTop = "-9px", b.src = a, MarkerLabel_.getSharedCross.crossDiv = b), MarkerLabel_.getSharedCross.crossDiv
}, MarkerLabel_.prototype.onAdd = function() {
    var a, b, c, d, e, f, g, h = this, i = !1, j = !1, k = 20, l = "url(" + this.handCursorURL_ + ")", m = function(a) {
        a.preventDefault && a.preventDefault(), a.cancelBubble = !0, a.stopPropagation && a.stopPropagation()
    }, n = function() {
        h.marker_.setAnimation(null)
    };
    this.getPanes().overlayImage.appendChild(this.labelDiv_), this.getPanes().overlayMouseTarget.appendChild(this.eventDiv_), "undefined" == typeof MarkerLabel_.getSharedCross.processed && (this.getPanes().overlayImage.appendChild(this.crossDiv_), MarkerLabel_.getSharedCross.processed = !0), this.listeners_ = [google.maps.event.addDomListener(this.eventDiv_, "mouseover", function(a) {
            (h.marker_.getDraggable() || h.marker_.getClickable()) && (this.style.cursor = "pointer", google.maps.event.trigger(h.marker_, "mouseover", a))
        }), google.maps.event.addDomListener(this.eventDiv_, "mouseout", function(a) {
            !h.marker_.getDraggable() && !h.marker_.getClickable() || j || (this.style.cursor = h.marker_.getCursor(), google.maps.event.trigger(h.marker_, "mouseout", a))
        }), google.maps.event.addDomListener(this.eventDiv_, "mousedown", function(a) {
            j = !1, h.marker_.getDraggable() && (i = !0, this.style.cursor = l), (h.marker_.getDraggable() || h.marker_.getClickable()) && (google.maps.event.trigger(h.marker_, "mousedown", a), m(a))
        }), google.maps.event.addDomListener(document, "mouseup", function(b) {
            var c;
            if (i && (i = !1, h.eventDiv_.style.cursor = "pointer", google.maps.event.trigger(h.marker_, "mouseup", b)), j) {
                if (e) {
                    c = h.getProjection().fromLatLngToDivPixel(h.marker_.getPosition()), c.y += k, h.marker_.setPosition(h.getProjection().fromDivPixelToLatLng(c));
                    try {
                        h.marker_.setAnimation(google.maps.Animation.BOUNCE), setTimeout(n, 1406)
                    } catch (f) {
                    }
                }
                h.crossDiv_.style.display = "none", h.marker_.setZIndex(a), d = !0, j = !1, b.latLng = h.marker_.getPosition(), google.maps.event.trigger(h.marker_, "dragend", b)
            }
        }), google.maps.event.addListener(h.marker_.getMap(), "mousemove", function(d) {
            var l;
            i && (j ? (d.latLng = new google.maps.LatLng(d.latLng.lat() - b, d.latLng.lng() - c), l = h.getProjection().fromLatLngToDivPixel(d.latLng), e && (h.crossDiv_.style.left = l.x + "px", h.crossDiv_.style.top = l.y + "px", h.crossDiv_.style.display = "", l.y -= k), h.marker_.setPosition(h.getProjection().fromDivPixelToLatLng(l)), e && (h.eventDiv_.style.top = l.y + k + "px"), google.maps.event.trigger(h.marker_, "drag", d)) : (b = d.latLng.lat() - h.marker_.getPosition().lat(), c = d.latLng.lng() - h.marker_.getPosition().lng(), a = h.marker_.getZIndex(), f = h.marker_.getPosition(), g = h.marker_.getMap().getCenter(), e = h.marker_.get("raiseOnDrag"), j = !0, h.marker_.setZIndex(1e6), d.latLng = h.marker_.getPosition(), google.maps.event.trigger(h.marker_, "dragstart", d)))
        }), google.maps.event.addDomListener(document, "keydown", function(a) {
            j && 27 === a.keyCode && (e = !1, h.marker_.setPosition(f), h.marker_.getMap().setCenter(g), google.maps.event.trigger(document, "mouseup", a))
        }), google.maps.event.addDomListener(this.eventDiv_, "click", function(a) {
            (h.marker_.getDraggable() || h.marker_.getClickable()) && (d ? d = !1 : (google.maps.event.trigger(h.marker_, "click", a), m(a)))
        }), google.maps.event.addDomListener(this.eventDiv_, "dblclick", function(a) {
            (h.marker_.getDraggable() || h.marker_.getClickable()) && (google.maps.event.trigger(h.marker_, "dblclick", a), m(a))
        }), google.maps.event.addListener(this.marker_, "dragstart", function() {
            j || (e = this.get("raiseOnDrag"))
        }), google.maps.event.addListener(this.marker_, "drag", function() {
            j || e && (h.setPosition(k), h.labelDiv_.style.zIndex = 1e6 + (this.get("labelInBackground") ? -1 : 1))
        }), google.maps.event.addListener(this.marker_, "dragend", function() {
            j || e && h.setPosition(0)
        }), google.maps.event.addListener(this.marker_, "position_changed", function() {
            h.setPosition()
        }), google.maps.event.addListener(this.marker_, "zindex_changed", function() {
            h.setZIndex()
        }), google.maps.event.addListener(this.marker_, "visible_changed", function() {
            h.setVisible()
        }), google.maps.event.addListener(this.marker_, "labelvisible_changed", function() {
            h.setVisible()
        }), google.maps.event.addListener(this.marker_, "title_changed", function() {
            h.setTitle()
        }), google.maps.event.addListener(this.marker_, "labelcontent_changed", function() {
            h.setContent()
        }), google.maps.event.addListener(this.marker_, "labelanchor_changed", function() {
            h.setAnchor()
        }), google.maps.event.addListener(this.marker_, "labelclass_changed", function() {
            h.setStyles()
        }), google.maps.event.addListener(this.marker_, "labelstyle_changed", function() {
            h.setStyles()
        })]
}, MarkerLabel_.prototype.onRemove = function() {
    var a;
    for (null !== this.labelDiv_.parentNode && this.labelDiv_.parentNode.removeChild(this.labelDiv_), null !== this.eventDiv_.parentNode && this.eventDiv_.parentNode.removeChild(this.eventDiv_), a = 0; a < this.listeners_.length; a++)
        google.maps.event.removeListener(this.listeners_[a])
}, MarkerLabel_.prototype.draw = function() {
    this.setContent(), this.setTitle(), this.setStyles()
}, MarkerLabel_.prototype.setContent = function() {
    var a = this.marker_.get("labelContent");
    "undefined" == typeof a.nodeType ? (this.labelDiv_.innerHTML = a, this.eventDiv_.innerHTML = this.labelDiv_.innerHTML) : (this.labelDiv_.innerHTML = "", this.labelDiv_.appendChild(a), a = a.cloneNode(!0), this.eventDiv_.appendChild(a))
}, MarkerLabel_.prototype.setTitle = function() {
    this.eventDiv_.title = this.marker_.getTitle() || ""
}, MarkerLabel_.prototype.setStyles = function() {
    var a, b;
    this.labelDiv_.className = this.marker_.get("labelClass"), this.eventDiv_.className = this.labelDiv_.className, this.labelDiv_.style.cssText = "", this.eventDiv_.style.cssText = "", b = this.marker_.get("labelStyle");
    for (a in b)
        b.hasOwnProperty(a) && (this.labelDiv_.style[a] = b[a], this.eventDiv_.style[a] = b[a]);
    this.setMandatoryStyles()
}, MarkerLabel_.prototype.setMandatoryStyles = function() {
    this.labelDiv_.style.position = "absolute", this.labelDiv_.style.overflow = "hidden", "undefined" != typeof this.labelDiv_.style.opacity && "" !== this.labelDiv_.style.opacity && (this.labelDiv_.style.MsFilter = '"progid:DXImageTransform.Microsoft.Alpha(opacity=' + 100 * this.labelDiv_.style.opacity + ')"', this.labelDiv_.style.filter = "alpha(opacity=" + 100 * this.labelDiv_.style.opacity + ")"), this.eventDiv_.style.position = this.labelDiv_.style.position, this.eventDiv_.style.overflow = this.labelDiv_.style.overflow, this.eventDiv_.style.opacity = .01, this.eventDiv_.style.MsFilter = '"progid:DXImageTransform.Microsoft.Alpha(opacity=1)"', this.eventDiv_.style.filter = "alpha(opacity=1)", this.setAnchor(), this.setPosition(), this.setVisible()
}, MarkerLabel_.prototype.setAnchor = function() {
    var a = this.marker_.get("labelAnchor");
    this.labelDiv_.style.marginLeft = -a.x + "px", this.labelDiv_.style.marginTop = -a.y + "px", this.eventDiv_.style.marginLeft = -a.x + "px", this.eventDiv_.style.marginTop = -a.y + "px"
}, MarkerLabel_.prototype.setPosition = function(a) {
    var b = this.getProjection().fromLatLngToDivPixel(this.marker_.getPosition());
    "undefined" == typeof a && (a = 0), this.labelDiv_.style.left = Math.round(b.x) + "px", this.labelDiv_.style.top = Math.round(b.y - a) + "px", this.eventDiv_.style.left = this.labelDiv_.style.left, this.eventDiv_.style.top = this.labelDiv_.style.top, this.setZIndex()
}, MarkerLabel_.prototype.setZIndex = function() {
    var a = this.marker_.get("labelInBackground") ? -1 : 1;
    "undefined" == typeof this.marker_.getZIndex() ? (this.labelDiv_.style.zIndex = parseInt(this.labelDiv_.style.top, 10) + a, this.eventDiv_.style.zIndex = this.labelDiv_.style.zIndex) : (this.labelDiv_.style.zIndex = this.marker_.getZIndex() + a, this.eventDiv_.style.zIndex = this.labelDiv_.style.zIndex)
}, MarkerLabel_.prototype.setVisible = function() {
    this.labelDiv_.style.display = this.marker_.get("labelVisible") ? this.marker_.getVisible() ? "block" : "none" : "none", this.eventDiv_.style.display = this.labelDiv_.style.display
}, inherits(MarkerWithLabel, google.maps.Marker), MarkerWithLabel.prototype.setMap = function(a) {
    google.maps.Marker.prototype.setMap.apply(this, arguments), this.label.setMap(a)
};