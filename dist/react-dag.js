!(function(t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e(require('react')))
    : 'function' == typeof define && define.amd
      ? define(['react'], e)
      : 'object' == typeof exports
        ? (exports.reactDag = e(require('react')))
        : (t.reactDag = e(t.React));
})(this, function(t) {
  return (function(t) {
    function e(i) {
      if (n[i]) return n[i].exports;
      var o = (n[i] = { i: i, l: !1, exports: {} });
      return t[i].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
    }
    var n = {};
    return (e.m = t), (e.c = n), (e.d = function(t, n, i) {
      e.o(t, n) ||
        Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: i });
    }), (e.n = function(t) {
      var n =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return e.d(n, 'a', n), n;
    }), (e.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }), (e.p = ''), e((e.s = 22));
  })([
    function(t, e, n) {
      'use strict';
      function i() {
        d = !1;
      }
      function o(t) {
        if (!t) return void (c !== f && ((c = f), i()));
        if (t !== c) {
          if (t.length !== f.length)
            throw new Error(
              'Custom alphabet for shortid must be ' +
                f.length +
                ' unique characters. You submitted ' +
                t.length +
                ' characters: ' +
                t,
            );
          var e = t.split('').filter(function(t, e, n) {
            return e !== n.lastIndexOf(t);
          });
          if (e.length)
            throw new Error(
              'Custom alphabet for shortid must be ' +
                f.length +
                ' unique characters. These characters were not unique: ' +
                e.join(', '),
            );
          (c = t), i();
        }
      }
      function s(t) {
        return o(t), c;
      }
      function r(t) {
        p.seed(t), h !== t && (i(), (h = t));
      }
      function a() {
        c || o(f);
        for (var t, e = c.split(''), n = [], i = p.nextValue(); e.length > 0; )
          (i = p.nextValue()), (t = Math.floor(i * e.length)), n.push(e.splice(t, 1)[0]);
        return n.join('');
      }
      function l() {
        return d || (d = a());
      }
      function u(t) {
        return l()[t];
      }
      var c,
        h,
        d,
        p = n(40),
        f = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
      t.exports = { characters: s, seed: r, lookup: u, shuffled: l };
    },
    function(t, e, n) {
      function i(t, e) {
        for (var n = t.length; n--; ) if (o(t[n][0], e)) return n;
        return -1;
      }
      var o = n(16);
      t.exports = i;
    },
    function(e, n) {
      e.exports = t;
    },
    function(t, e) {
      var n;
      n = (function() {
        return this;
      })();
      try {
        n = n || Function('return this')() || (0, eval)('this');
      } catch (t) {
        'object' == typeof window && (n = window);
      }
      t.exports = n;
    },
    function(t, e, n) {
      'use strict';
      t.exports = n(39);
    },
    function(t, e, n) {
      function i(t, e, n, i) {
        var r = !n;
        n || (n = {});
        for (var a = -1, l = e.length; ++a < l; ) {
          var u = e[a],
            c = i ? i(n[u], t[u], u, n, t) : void 0;
          void 0 === c && (c = t[u]), r ? s(n, u, c) : o(n, u, c);
        }
        return n;
      }
      var o = n(14),
        s = n(15);
      t.exports = i;
    },
    function(t, e) {
      function n(t, e) {
        return function(n) {
          return t(e(n));
        };
      }
      t.exports = n;
    },
    function(t, e, n) {
      'use strict';
      function i(t, e, n) {
        function s() {
          m === v && (m = v.slice());
        }
        function l() {
          return g;
        }
        function u(t) {
          if ('function' != typeof t)
            throw new Error('Expected listener to be a function.');
          var e = !0;
          return s(), m.push(t), function() {
            if (e) {
              (e = !1), s();
              var n = m.indexOf(t);
              m.splice(n, 1);
            }
          };
        }
        function c(t) {
          if (!Object(o.a)(t))
            throw new Error(
              'Actions must be plain objects. Use custom middleware for async actions.',
            );
          if (void 0 === t.type)
            throw new Error(
              'Actions may not have an undefined "type" property. Have you misspelled a constant?',
            );
          if (b) throw new Error('Reducers may not dispatch actions.');
          try {
            (b = !0), (g = f(g, t));
          } finally {
            b = !1;
          }
          for (var e = (v = m), n = 0; n < e.length; n++) e[n]();
          return t;
        }
        function h(t) {
          if ('function' != typeof t)
            throw new Error('Expected the nextReducer to be a function.');
          (f = t), c({ type: a.INIT });
        }
        function d() {
          var t,
            e = u;
          return (t = {
            subscribe: function(t) {
              function n() {
                t.next && t.next(l());
              }
              if ('object' != typeof t)
                throw new TypeError('Expected the observer to be an object.');
              return n(), { unsubscribe: e(n) };
            },
          }), (t[r.a] = function() {
            return this;
          }), t;
        }
        var p;
        if (
          (
            'function' == typeof e && void 0 === n && ((n = e), (e = void 0)),
            void 0 !== n
          )
        ) {
          if ('function' != typeof n)
            throw new Error('Expected the enhancer to be a function.');
          return n(i)(t, e);
        }
        if ('function' != typeof t)
          throw new Error('Expected the reducer to be a function.');
        var f = t,
          g = e,
          v = [],
          m = v,
          b = !1;
        return c({ type: a.INIT }), (p = {
          dispatch: c,
          subscribe: u,
          getState: l,
          replaceReducer: h,
        }), (p[r.a] = d), p;
      }
      n.d(e, 'a', function() {
        return a;
      }), (e.b = i);
      var o = n(8),
        s = n(33),
        r = n.n(s),
        a = { INIT: '@@redux/INIT' };
    },
    function(t, e, n) {
      'use strict';
      function i(t) {
        if (!Object(r.a)(t) || Object(o.a)(t) != a) return !1;
        var e = Object(s.a)(t);
        if (null === e) return !0;
        var n = h.call(e, 'constructor') && e.constructor;
        return 'function' == typeof n && n instanceof n && c.call(n) == d;
      }
      var o = n(25),
        s = n(30),
        r = n(32),
        a = '[object Object]',
        l = Function.prototype,
        u = Object.prototype,
        c = l.toString,
        h = u.hasOwnProperty,
        d = c.call(Object);
      e.a = i;
    },
    function(t, e, n) {
      'use strict';
      var i = n(26),
        o = i.a.Symbol;
      e.a = o;
    },
    function(t, e) {
      t.exports = function(t) {
        return t.webpackPolyfill ||
          (
            (t.deprecate = function() {}),
            (t.paths = []),
            t.children || (t.children = []),
            Object.defineProperty(t, 'loaded', {
              enumerable: !0,
              get: function() {
                return t.l;
              },
            }),
            Object.defineProperty(t, 'id', {
              enumerable: !0,
              get: function() {
                return t.i;
              },
            }),
            (t.webpackPolyfill = 1)
          ), t;
      };
    },
    function(t, e, n) {
      'use strict';
    },
    function(t, e, n) {
      'use strict';
      function i() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        if (0 === e.length)
          return function(t) {
            return t;
          };
        if (1 === e.length) return e[0];
        var i = e[e.length - 1],
          o = e.slice(0, -1);
        return function() {
          return o.reduceRight(function(t, e) {
            return e(t);
          }, i.apply(void 0, arguments));
        };
      }
      e.a = i;
    },
    function(t, e, n) {
      'use strict';
      function i(t, e) {
        for (var n, i = 0, s = ''; !n; )
          (s += t(((e >> (4 * i)) & 15) | o())), (n = e < Math.pow(16, i + 1)), i++;
        return s;
      }
      var o = n(41);
      t.exports = i;
    },
    function(t, e, n) {
      function i(t, e, n) {
        var i = t[e];
        (a.call(t, e) && s(i, n) && (void 0 !== n || e in t)) || o(t, e, n);
      }
      var o = n(15),
        s = n(16),
        r = Object.prototype,
        a = r.hasOwnProperty;
      t.exports = i;
    },
    function(t, e, n) {
      function i(t, e, n) {
        '__proto__' == e && o
          ? o(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 })
          : (t[e] = n);
      }
      var o = n(49);
      t.exports = i;
    },
    function(t, e) {
      function n(t, e) {
        return t === e || (t !== t && e !== e);
      }
      t.exports = n;
    },
    function(t, e, n) {
      var i = n(6),
        o = i(Object.keys, Object);
      t.exports = o;
    },
    function(t, e) {
      function n(t) {
        var e = typeof t;
        return null != t && ('object' == e || 'function' == e);
      }
      t.exports = n;
    },
    function(t, e, n) {
      var i, o;
      !(function() {
        'use strict';
        function n() {
          for (var t = [], e = 0; e < arguments.length; e++) {
            var i = arguments[e];
            if (i) {
              var o = typeof i;
              if ('string' === o || 'number' === o) t.push(i);
              else if (Array.isArray(i)) t.push(n.apply(null, i));
              else if ('object' === o) for (var r in i) s.call(i, r) && i[r] && t.push(r);
            }
          }
          return t.join(' ');
        }
        var s = {}.hasOwnProperty;
        void 0 !== t && t.exports
          ? (t.exports = n)
          : (
              (i = []),
              void 0 !==
                (o = function() {
                  return n;
                }.apply(e, i)) && (t.exports = o)
            );
      })();
    },
    function(t, e) {
      t.exports = function() {
        var t = [];
        return (t.toString = function() {
          for (var t = [], e = 0; e < this.length; e++) {
            var n = this[e];
            n[2] ? t.push('@media ' + n[2] + '{' + n[1] + '}') : t.push(n[1]);
          }
          return t.join('');
        }), (t.i = function(e, n) {
          'string' == typeof e && (e = [[null, e, '']]);
          for (var i = {}, o = 0; o < this.length; o++) {
            var s = this[o][0];
            'number' == typeof s && (i[s] = !0);
          }
          for (o = 0; o < e.length; o++) {
            var r = e[o];
            ('number' == typeof r[0] && i[r[0]]) ||
              (
                n && !r[2] ? (r[2] = n) : n && (r[2] = '(' + r[2] + ') and (' + n + ')'),
                t.push(r)
              );
          }
        }), t;
      };
    },
    function(t, e) {
      function n(t, e) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n],
            o = d[i.id];
          if (o) {
            o.refs++;
            for (var s = 0; s < o.parts.length; s++) o.parts[s](i.parts[s]);
            for (; s < i.parts.length; s++) o.parts.push(l(i.parts[s], e));
          } else {
            for (var r = [], s = 0; s < i.parts.length; s++) r.push(l(i.parts[s], e));
            d[i.id] = { id: i.id, refs: 1, parts: r };
          }
        }
      }
      function i(t) {
        for (var e = [], n = {}, i = 0; i < t.length; i++) {
          var o = t[i],
            s = o[0],
            r = o[1],
            a = o[2],
            l = o[3],
            u = { css: r, media: a, sourceMap: l };
          n[s] ? n[s].parts.push(u) : e.push((n[s] = { id: s, parts: [u] }));
        }
        return e;
      }
      function o(t, e) {
        var n = g(),
          i = b[b.length - 1];
        if ('top' === t.insertAt)
          i
            ? i.nextSibling ? n.insertBefore(e, i.nextSibling) : n.appendChild(e)
            : n.insertBefore(e, n.firstChild), b.push(e);
        else {
          if ('bottom' !== t.insertAt)
            throw new Error(
              "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.",
            );
          n.appendChild(e);
        }
      }
      function s(t) {
        t.parentNode.removeChild(t);
        var e = b.indexOf(t);
        e >= 0 && b.splice(e, 1);
      }
      function r(t) {
        var e = document.createElement('style');
        return (e.type = 'text/css'), o(t, e), e;
      }
      function a(t) {
        var e = document.createElement('link');
        return (e.rel = 'stylesheet'), o(t, e), e;
      }
      function l(t, e) {
        var n, i, o;
        if (e.singleton) {
          var l = m++;
          (n = v || (v = r(e))), (i = u.bind(null, n, l, !1)), (o = u.bind(
            null,
            n,
            l,
            !0,
          ));
        } else
          t.sourceMap &&
          'function' == typeof URL &&
          'function' == typeof URL.createObjectURL &&
          'function' == typeof URL.revokeObjectURL &&
          'function' == typeof Blob &&
          'function' == typeof btoa
            ? (
                (n = a(e)),
                (i = h.bind(null, n)),
                (o = function() {
                  s(n), n.href && URL.revokeObjectURL(n.href);
                })
              )
            : (
                (n = r(e)),
                (i = c.bind(null, n)),
                (o = function() {
                  s(n);
                })
              );
        return i(t), function(e) {
          if (e) {
            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
              return;
            i((t = e));
          } else o();
        };
      }
      function u(t, e, n, i) {
        var o = n ? '' : i.css;
        if (t.styleSheet) t.styleSheet.cssText = y(e, o);
        else {
          var s = document.createTextNode(o),
            r = t.childNodes;
          r[e] && t.removeChild(r[e]), r.length
            ? t.insertBefore(s, r[e])
            : t.appendChild(s);
        }
      }
      function c(t, e) {
        var n = e.css,
          i = e.media;
        if ((i && t.setAttribute('media', i), t.styleSheet)) t.styleSheet.cssText = n;
        else {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(n));
        }
      }
      function h(t, e) {
        var n = e.css,
          i = e.sourceMap;
        i &&
          (n +=
            '\n/*# sourceMappingURL=data:application/json;base64,' +
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
            ' */');
        var o = new Blob([n], { type: 'text/css' }),
          s = t.href;
        (t.href = URL.createObjectURL(o)), s && URL.revokeObjectURL(s);
      }
      var d = {},
        p = function(t) {
          var e;
          return function() {
            return void 0 === e && (e = t.apply(this, arguments)), e;
          };
        },
        f = p(function() {
          return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
        }),
        g = p(function() {
          return document.head || document.getElementsByTagName('head')[0];
        }),
        v = null,
        m = 0,
        b = [];
      t.exports = function(t, e) {
        if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
          throw new Error('The style-loader cannot be used in a non-browser environment');
        (e = e || {}), void 0 === e.singleton && (e.singleton = f()), void 0 ===
          e.insertAt && (e.insertAt = 'bottom');
        var o = i(t);
        return n(o, e), function(t) {
          for (var s = [], r = 0; r < o.length; r++) {
            var a = o[r],
              l = d[a.id];
            l.refs--, s.push(l);
          }
          t && n(i(t), e);
          for (var r = 0; r < s.length; r++) {
            var l = s[r];
            if (0 === l.refs) {
              for (var u = 0; u < l.parts.length; u++) l.parts[u]();
              delete d[l.id];
            }
          }
        };
      };
      var y = (function() {
        var t = [];
        return function(e, n) {
          return (t[e] = n), t.filter(Boolean).join('\n');
        };
      })();
    },
    function(t, e, n) {
      'use strict';
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
          return n;
        }
        return Array.from(t);
      }
      function s(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
      }
      function r(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
      }
      function a(t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof e,
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })), e &&
          (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
      }
      Object.defineProperty(e, '__esModule', {
        value: !0,
      }), (e.STOREACTIONS = e.configureStore = void 0);
      var l = (function() {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i &&
                (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
          }
          return function(e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })(),
        u = n(2),
        c = i(u),
        h = n(23),
        d = i(h),
        p = n(46),
        f = n(4),
        g = i(f),
        v = n(19),
        m = i(v),
        b = n(85),
        y = i(b),
        P = n(86),
        x = i(P),
        _ = n(90),
        E = i(_);
      n(91), (e.configureStore = d.default), (e.STOREACTIONS = h.STOREACTIONS);
      var C = (function(t) {
        function e(t) {
          s(this, e);
          var n = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
          (n.loadNodes = function() {
            if (!n.state.graph.loading)
              return c.default.createElement(x.default, {
                nodes: n.state.nodes,
                onNodesClick:
                  'function' != typeof n.props.onNodesClick
                    ? null
                    : n.props.onNodesClick.bind(null, n.instance),
                renderNode:
                  'function' != typeof n.props.renderNode
                    ? null
                    : n.props.renderNode.bind(null, n.instance),
                jsPlumbInstance: n.instance,
              });
          }), (n.loadingAnimation = function() {
            if (n.state.graph.loading)
              return c.default.createElement('div', {
                className: 'fa fa-spin fa-refresh fa-5x',
              });
          }), (n.props = t);
          var i = t.data,
            a = t.additionalReducersMap,
            l = t.enhancers,
            u = void 0 === l ? [] : l,
            h = t.middlewares,
            f = void 0 === h ? [] : h;
          return (n.store = (0, y.default)(t.store)
            ? (0, d.default)(i, a, [].concat(o(f)), [].concat(o(u)))
            : t.store), t.data && n.toggleLoading(!0), (n.state = Object.assign(
            {},
            { componentId: 'N-' + g.default.generate() },
            n.store.getState(),
          )), t.settings
            ? (n.settings = Object.assign({}, t.settings))
            : (n.settings = (
                0,
                p.getSettings
              )()), (n.storeSub = n.store.subscribe(function() {
            n.setState(n.store.getState(), function() {
              n.resetGraph(), n.renderGraph();
            });
          })), n;
        }
        return a(e, t), l(e, [
          {
            key: 'componentWillUnmount',
            value: function() {
              this.storeSub(), this.store.dispatch({
                type: h.STOREACTIONS.RESET,
              }), this.resetGraph();
            },
          },
          {
            key: 'componentDidMount',
            value: function() {
              var t = this;
              E.default.ready(function() {
                var e = t.settings.default,
                  n = document.querySelector(
                    '#' + t.state.componentId + ' #dag-container',
                  );
                E.default.setContainer(
                  n,
                ), (t.instance = E.default.getInstance(e)), (window.instance = t.instance), t.instance.bind('connection', t.makeConnections.bind(t)), t.instance.bind('connectionDetached', t.makeConnections.bind(t));
              }), setTimeout(function() {
                t.toggleLoading(
                  !1,
                ), Object.keys(t.props.data || {}).length && (t.renderGraph(), t.cleanUpGraph());
              }, 600);
            },
          },
          {
            key: 'toggleLoading',
            value: function(t) {
              this.store.dispatch({
                type: h.STOREACTIONS.GRAPHLOADING,
                payload: { loading: t },
              });
            },
          },
          {
            key: 'makeNodesDraggable',
            value: function() {
              var t = this,
                e = document.querySelectorAll('#dag-container .node');
              this.instance.draggable(e, {
                start: function() {
                  console.log('Starting to drag');
                },
                stop: function(e) {
                  t.store.dispatch({
                    type: h.STOREACTIONS.UPDATENODE,
                    payload: {
                      nodeId: e.el.id,
                      style: { top: e.el.style.top, left: e.el.style.left },
                    },
                  }), t.instance.repaintEverything();
                },
              });
            },
          },
          {
            key: 'makeConnections',
            value: function(t, e) {
              if (e) {
                var n = this.instance.getConnections().map(function(t) {
                  return { from: t.sourceId, to: t.targetId };
                });
                this.store.dispatch({
                  type: h.STOREACTIONS.SETCONNECTIONS,
                  payload: { connections: n },
                });
              }
            },
          },
          {
            key: 'addEndpoints',
            value: function() {
              var t = this,
                e = this.store.getState().nodes;
              this.instance.deleteEveryEndpoint(), this.instance.detachEveryConnection(), e.forEach(
                function(e) {
                  switch (e.type) {
                    case 'source':
                      return void t.instance.addEndpoint(e.id, t.settings.source, {
                        uuid: e.id,
                      });
                    case 'sink':
                      return void t.instance.addEndpoint(e.id, t.settings.sink, {
                        uuid: e.id,
                      });
                    default:
                      t.instance.addEndpoint(e.id, t.settings.transformSource, {
                        uuid: 'Left' + e.id,
                      }), t.instance.addEndpoint(e.id, t.settings.transformSink, {
                        uuid: 'Right' + e.id,
                      });
                  }
                },
              );
            },
          },
          {
            key: 'cleanUpGraph',
            value: function() {
              var t = this.store.getState(),
                e = t.nodes,
                n = t.connections;
              this.store.dispatch({
                type: 'CLEANUP-GRAPH',
                payload: { nodes: e, connections: n },
              }), this.store.dispatch({
                type: 'FIT-TO-SCREEN',
                payload: {
                  nodes: e,
                  connections: n,
                  parentSelector: '#' + this.state.componentId + ' .diagram-container',
                },
              }), setTimeout(this.instance.repaintEverything.bind(this));
            },
          },
          {
            key: 'renderConnections',
            value: function() {
              var t = this,
                e = this.instance.getConnections().map(function(t) {
                  return { from: t.sourceId, to: t.targetId };
                }),
                n = this.store.getState(),
                i = n.nodes,
                o = n.connections;
              o.length !== e.length &&
                o.forEach(function(e) {
                  var n = i.find(function(t) {
                      return t.id === e.from;
                    }),
                    o = i.find(function(t) {
                      return t.id === e.to;
                    });
                  if (n && o) {
                    var s = 'transform' === n.type ? 'Left' + e.from : e.from,
                      r = 'transform' === o.type ? 'Right' + e.to : e.to,
                      a = { uuids: [s, r], detachable: !0 };
                    t.instance.connect(a);
                  }
                });
            },
          },
          {
            key: 'resetGraph',
            value: function() {
              this.instance &&
                (
                  this.instance.unbind('connection'),
                  this.instance.unbind('connectionDetached'),
                  this.instance.detachEveryConnection(),
                  this.instance.deleteEveryEndpoint()
                );
            },
          },
          {
            key: 'renderGraph',
            value: function() {
              this.instance &&
                (
                  this.instance.bind('connection', this.makeConnections.bind(this)),
                  this.instance.bind(
                    'connectionDetached',
                    this.makeConnections.bind(this),
                  ),
                  this.addEndpoints(),
                  this.makeNodesDraggable(),
                  this.renderConnections(),
                  this.instance.repaintEverything()
                );
            },
          },
          {
            key: 'render',
            value: function() {
              var t = this;
              return c.default.createElement(
                'div',
                {
                  className: (0, m.default)('react-dag', this.props.className),
                  id: this.state.componentId,
                },
                this.props.children,
                c.default.createElement(
                  'div',
                  { className: 'diagram-container' },
                  c.default.createElement(
                    'div',
                    {
                      id: 'dag-container',
                      style: (function() {
                        var e = { transform: '' };
                        return t.state.graph.scale &&
                          (
                            (e.transform += 'scale(' + t.state.graph.scale + ')'),
                            t.instance.setZoom(t.state.graph.scale)
                          ), t.state.graph.translate &&
                          (e.transform +=
                            'translate(' + t.state.graph.translate + ')'), e;
                      })(),
                    },
                    this.loadingAnimation(),
                    this.loadNodes(),
                  ),
                ),
              );
            },
          },
        ]), e;
      })(u.Component);
      (C.defaultProps = {
        onNodesClick: function() {},
        additionalReducersMap: {},
        enhancers: [],
        middlewares: [],
      }), (e.default = C);
    },
    function(t, e, n) {
      'use strict';
      function i(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
          return n;
        }
        return Array.from(t);
      }
      function o(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
        return (0, s.createStore)(
          p(e),
          t,
          s.compose.apply(
            null,
            [s.applyMiddleware.apply(null, n)].concat(
              i.map(function(t) {
                return t();
              }),
            ),
          ),
        );
      }
      Object.defineProperty(e, '__esModule', {
        value: !0,
      }), (e.STOREACTIONS = void 0), (e.default = o);
      var s = n(24),
        r = n(4),
        a = (function(t) {
          return t && t.__esModule ? t : { default: t };
        })(r),
        l = {
          ADDNODE: 'ADD_NODE',
          UPDATENODE: 'UPDATE_NODE',
          REMOVENODE: 'REMOVE_NODE',
          ADDCONNECTION: 'ADD_CONNECTIONS',
          SETCONNECTIONS: 'SET_CONNECTIONS',
          RESET: 'RESET',
          GRAPHLOADING: 'GRAPHLOADING',
        };
      e.STOREACTIONS = l;
      var u = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          switch (e.type) {
            case l.ADDNODE:
              return [].concat(i(t), [
                {
                  id: e.payload.id || 'N-' + a.default.generate(),
                  label: e.payload.label,
                  type: e.payload.type,
                },
              ]);
            case l.UPDATENODE:
              return t.map(function(t) {
                return t.id === e.payload.nodeId ? ((t.style = e.payload.style), t) : t;
              });
            case l.REMOVENODE:
              return t.filter(function(t) {
                return t.id !== e.payload.nodeId;
              });
            case l.RESET:
              return [];
            default:
              return t;
          }
        },
        c = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          switch (e.type) {
            case l.ADDCONNECTION:
              return [].concat(i(t), [{ from: e.connection.from, to: e.connection.to }]);
            case l.SETCONNECTIONS:
              return [].concat(i(e.payload.connections));
            case l.RESET:
              return [];
            default:
              return t;
          }
        },
        h = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          switch (e.type) {
            case l.GRAPHLOADING:
              return Object.assign({}, t, { loading: e.payload.loading });
            case l.RESET:
              return {};
            default:
              return t;
          }
        },
        d = function() {
          return {
            nodes: [
              function() {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return arguments.length > 1 && void 0 !== arguments[1] && arguments[1], t;
              },
            ],
            graph: [
              function() {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return arguments.length > 1 && void 0 !== arguments[1] && arguments[1], t;
              },
            ],
            connections: [
              function() {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return arguments.length > 1 && void 0 !== arguments[1] && arguments[1], t;
              },
            ],
          };
        },
        p = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d(),
            e = d(),
            n = function(t, e, n) {
              return Array.isArray(t[e]) && t[e].length > 0 ? t[e] : n[e];
            },
            i = [u].concat(n(t, 'nodes', e)),
            o = [h].concat(n(t, 'graph', e)),
            r = [c].concat(n(t, 'connections', e)),
            a = function(t, e, n) {
              return t.length > 1
                ? t.reduce(function(t, i) {
                    return i.bind(null, t(e, n), n);
                  })()
                : t[0]();
            };
          return (0, s.combineReducers)({
            nodes: function(t, e) {
              return a(i, t, e);
            },
            connections: function(t, e) {
              return a(r, t, e);
            },
            graph: function(t, e) {
              return a(o, t, e);
            },
          });
        };
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n(7),
        o = n(36),
        s = n(37),
        r = n(38),
        a = n(12);
      n(11), n.d(e, 'createStore', function() {
        return i.b;
      }), n.d(e, 'combineReducers', function() {
        return o.a;
      }), n.d(e, 'bindActionCreators', function() {
        return s.a;
      }), n.d(e, 'applyMiddleware', function() {
        return r.a;
      }), n.d(e, 'compose', function() {
        return a.a;
      });
    },
    function(t, e, n) {
      'use strict';
      function i(t) {
        return null == t
          ? void 0 === t ? l : a
          : u && u in Object(t) ? Object(s.a)(t) : Object(r.a)(t);
      }
      var o = n(9),
        s = n(28),
        r = n(29),
        a = '[object Null]',
        l = '[object Undefined]',
        u = o.a ? o.a.toStringTag : void 0;
      e.a = i;
    },
    function(t, e, n) {
      'use strict';
      var i = n(27),
        o = 'object' == typeof self && self && self.Object === Object && self,
        s = i.a || o || Function('return this')();
      e.a = s;
    },
    function(t, e, n) {
      'use strict';
      (function(t) {
        var n = 'object' == typeof t && t && t.Object === Object && t;
        e.a = n;
      }.call(e, n(3)));
    },
    function(t, e, n) {
      'use strict';
      function i(t) {
        var e = r.call(t, l),
          n = t[l];
        try {
          t[l] = void 0;
          var i = !0;
        } catch (t) {}
        var o = a.call(t);
        return i && (e ? (t[l] = n) : delete t[l]), o;
      }
      var o = n(9),
        s = Object.prototype,
        r = s.hasOwnProperty,
        a = s.toString,
        l = o.a ? o.a.toStringTag : void 0;
      e.a = i;
    },
    function(t, e, n) {
      'use strict';
      function i(t) {
        return s.call(t);
      }
      var o = Object.prototype,
        s = o.toString;
      e.a = i;
    },
    function(t, e, n) {
      'use strict';
      var i = n(31),
        o = Object(i.a)(Object.getPrototypeOf, Object);
      e.a = o;
    },
    function(t, e, n) {
      'use strict';
      function i(t, e) {
        return function(n) {
          return t(e(n));
        };
      }
      e.a = i;
    },
    function(t, e, n) {
      'use strict';
      function i(t) {
        return null != t && 'object' == typeof t;
      }
      e.a = i;
    },
    function(t, e, n) {
      t.exports = n(34);
    },
    function(t, e, n) {
      'use strict';
      (function(t, i) {
        Object.defineProperty(e, '__esModule', { value: !0 });
        var o,
          s = n(35),
          r = (function(t) {
            return t && t.__esModule ? t : { default: t };
          })(s);
        o =
          'undefined' != typeof self
            ? self
            : 'undefined' != typeof window ? window : void 0 !== t ? t : i;
        var a = (0, r.default)(o);
        e.default = a;
      }.call(e, n(3), n(10)(t)));
    },
    function(t, e, n) {
      'use strict';
      function i(t) {
        var e,
          n = t.Symbol;
        return 'function' == typeof n
          ? n.observable
            ? (e = n.observable)
            : ((e = n('observable')), (n.observable = e))
          : (e = '@@observable'), e;
      }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = i);
    },
    function(t, e, n) {
      'use strict';
      function i(t, e) {
        var n = e && e.type;
        return (
          'Given action ' +
          ((n && '"' + n.toString() + '"') || 'an action') +
          ', reducer "' +
          t +
          '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        );
      }
      function o(t) {
        Object.keys(t).forEach(function(e) {
          var n = t[e];
          if (void 0 === n(void 0, { type: r.a.INIT }))
            throw new Error(
              'Reducer "' +
                e +
                '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.',
            );
          if (
            void 0 ===
            n(void 0, {
              type:
                '@@redux/PROBE_UNKNOWN_ACTION_' +
                Math.random().toString(36).substring(7).split('').join('.'),
            })
          )
            throw new Error(
              'Reducer "' +
                e +
                '" returned undefined when probed with a random type. Don\'t try to handle ' +
                r.a.INIT +
                ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.',
            );
        });
      }
      function s(t) {
        for (var e = Object.keys(t), n = {}, s = 0; s < e.length; s++) {
          var r = e[s];
          'function' == typeof t[r] && (n[r] = t[r]);
        }
        var a,
          l = Object.keys(n);
        try {
          o(n);
        } catch (t) {
          a = t;
        }
        return function() {
          var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
            e = arguments[1];
          if (a) throw a;
          for (var o = !1, s = {}, r = 0; r < l.length; r++) {
            var u = l[r],
              c = n[u],
              h = t[u],
              d = c(h, e);
            if (void 0 === d) {
              var p = i(u, e);
              throw new Error(p);
            }
            (s[u] = d), (o = o || d !== h);
          }
          return o ? s : t;
        };
      }
      e.a = s;
      var r = n(7);
      n(8), n(11);
    },
    function(t, e, n) {
      'use strict';
      function i(t, e) {
        return function() {
          return e(t.apply(void 0, arguments));
        };
      }
      function o(t, e) {
        if ('function' == typeof t) return i(t, e);
        if ('object' != typeof t || null === t)
          throw new Error(
            'bindActionCreators expected an object or a function, instead received ' +
              (null === t ? 'null' : typeof t) +
              '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?',
          );
        for (var n = Object.keys(t), o = {}, s = 0; s < n.length; s++) {
          var r = n[s],
            a = t[r];
          'function' == typeof a && (o[r] = i(a, e));
        }
        return o;
      }
      e.a = o;
    },
    function(t, e, n) {
      'use strict';
      function i() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return function(t) {
          return function(n, i, r) {
            var a = t(n, i, r),
              l = a.dispatch,
              u = [],
              c = {
                getState: a.getState,
                dispatch: function(t) {
                  return l(t);
                },
              };
            return (u = e.map(function(t) {
              return t(c);
            })), (l = o.a.apply(void 0, u)(a.dispatch)), s({}, a, { dispatch: l });
          };
        };
      }
      e.a = i;
      var o = n(12),
        s =
          Object.assign ||
          function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          };
    },
    function(t, e, n) {
      'use strict';
      function i(e) {
        return a.seed(e), t.exports;
      }
      function o(e) {
        return (h = e), t.exports;
      }
      function s(t) {
        return void 0 !== t && a.characters(t), a.shuffled();
      }
      function r() {
        return u(h);
      }
      var a = n(0),
        l = (n(13), n(42)),
        u = n(43),
        c = n(44),
        h = n(45) || 0;
      (t.exports = r), (t.exports.generate = r), (t.exports.seed = i), (t.exports.worker = o), (t.exports.characters = s), (t.exports.decode = l), (t.exports.isValid = c);
    },
    function(t, e, n) {
      'use strict';
      function i() {
        return (s = (9301 * s + 49297) % 233280) / 233280;
      }
      function o(t) {
        s = t;
      }
      var s = 1;
      t.exports = { nextValue: i, seed: o };
    },
    function(t, e, n) {
      'use strict';
      function i() {
        if (!o || !o.getRandomValues) return 48 & Math.floor(256 * Math.random());
        var t = new Uint8Array(1);
        return o.getRandomValues(t), 48 & t[0];
      }
      var o = 'object' == typeof window && (window.crypto || window.msCrypto);
      t.exports = i;
    },
    function(t, e, n) {
      'use strict';
      function i(t) {
        var e = o.shuffled();
        return {
          version: 15 & e.indexOf(t.substr(0, 1)),
          worker: 15 & e.indexOf(t.substr(1, 1)),
        };
      }
      var o = n(0);
      t.exports = i;
    },
    function(t, e, n) {
      'use strict';
      function i(t) {
        var e = '',
          n = Math.floor(0.001 * (Date.now() - l));
        return n === s ? o++ : ((o = 0), (s = n)), (e += r(a.lookup, u)), (e += r(
          a.lookup,
          t,
        )), o > 0 && (e += r(a.lookup, o)), (e += r(a.lookup, n));
      }
      var o,
        s,
        r = n(13),
        a = n(0),
        l = 1459707606518,
        u = 6;
      t.exports = i;
    },
    function(t, e, n) {
      'use strict';
      function i(t) {
        if (!t || 'string' != typeof t || t.length < 6) return !1;
        for (var e = o.characters(), n = t.length, i = 0; i < n; i++)
          if (-1 === e.indexOf(t[i])) return !1;
        return !0;
      }
      var o = n(0);
      t.exports = i;
    },
    function(t, e, n) {
      'use strict';
      t.exports = 0;
    },
    function(t, e, n) {
      'use strict';
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          e = { transformSource: {}, transformSink: {} };
        return (e = t
          ? {
              default: u,
              commonSettings: (0, r.default)(p, d),
              source: (0, r.default)(f, d),
              sink: (0, r.default)(g, d),
              transformSource: {},
              transformSink: {},
            }
          : {
              default: u,
              commonSettings: (0, r.default)(p, h),
              source: (0, r.default)(f, h),
              sink: (0, r.default)(g, h),
              transformSource: {},
              transformSink: {},
            }), (e.transformSource = (0, l.default)(e.source)), (e.transformSink = (
          0,
          l.default
        )(e.sink)), (e.transformSource.anchor = [
          0.5,
          1,
          1,
          0,
          26,
          -43,
          'transformAnchor',
        ]), (e.transformSink.anchor = [0.5, 1, -1, 0, -26, -43, 'transformAnchor']), e;
      }
      Object.defineProperty(e, '__esModule', {
        value: !0,
      }), (e.sinkSettings = e.sourceSettings = e.commonSettings = e.disabledConnectorOverlays = e.connectorOverlays = e.connectorStyle = e.defaultSettings = void 0), (e.getSettings = o);
      var s = n(47),
        r = i(s),
        a = n(59),
        l = i(a),
        u = (e.defaultSettings = {
          Connector: ['Flowchart', { gap: 6, stub: [10, 15], alwaysRespectStubs: !0 }],
          ConnectionsDetachable: !0,
        }),
        c = (e.connectorStyle = {
          stroke: 'black',
          strokeWidth: 2,
          radius: 5,
          lineWidth: 2,
        }),
        h = (e.connectorOverlays = {
          connectorOverlays: [
            ['Arrow', { location: 1, length: 12, width: 12, height: 10, foldback: 1 }],
          ],
        }),
        d = (e.disabledConnectorOverlays = {
          connectorOverlays: [
            ['Arrow', { location: 1, length: 12, width: 12, height: 10, foldback: 1 }],
          ],
        }),
        p = (e.commonSettings = {
          endpoint: 'Dot',
          maxConnections: -1,
          paintStyle: { stroke: 'black', fill: 'black', radius: 5, lineWidth: 3 },
          anchors: ['Static'],
        }),
        f = (e.sourceSettings = (0, r.default)(
          {
            isSource: !0,
            connectorStyle: c,
            anchor: [0.5, 1, 1, 0, 26, -43, 'sourceAnchor'],
          },
          p,
        )),
        g = (e.sinkSettings = (0, r.default)(
          {
            isTarget: !0,
            anchor: [0.5, 1, -1, 0, -26, -43, 'sinkAnchor'],
            connectorStyle: c,
          },
          p,
        ));
    },
    function(t, e, n) {
      t.exports = n(48);
    },
    function(t, e, n) {
      var i = n(5),
        o = n(51),
        s = n(58),
        r = o(function(t, e) {
          i(e, s(e), t);
        });
      t.exports = r;
    },
    function(t, e, n) {
      var i = n(50),
        o = (function() {
          try {
            var t = i(Object, 'defineProperty');
            return t({}, '', {}), t;
          } catch (t) {}
        })();
      t.exports = o;
    },
    function(t, e) {
      function n(t, e) {
        return null == t ? void 0 : t[e];
      }
      t.exports = n;
    },
    function(t, e, n) {
      function i(t) {
        return o(function(e, n) {
          var i = -1,
            o = n.length,
            r = o > 1 ? n[o - 1] : void 0,
            a = o > 2 ? n[2] : void 0;
          for (
            r = t.length > 3 && 'function' == typeof r ? (o--, r) : void 0, a &&
              s(n[0], n[1], a) &&
              ((r = o < 3 ? void 0 : r), (o = 1)), e = Object(e);
            ++i < o;

          ) {
            var l = n[i];
            l && t(e, l, i, r);
          }
          return e;
        });
      }
      var o = n(52),
        s = n(57);
      t.exports = i;
    },
    function(t, e, n) {
      function i(t, e) {
        return r(s(t, e, o), t + '');
      }
      var o = n(53),
        s = n(54),
        r = n(56);
      t.exports = i;
    },
    function(t, e) {
      function n(t) {
        return t;
      }
      t.exports = n;
    },
    function(t, e, n) {
      function i(t, e, n) {
        return (e = s(void 0 === e ? t.length - 1 : e, 0)), function() {
          for (var i = arguments, r = -1, a = s(i.length - e, 0), l = Array(a); ++r < a; )
            l[r] = i[e + r];
          r = -1;
          for (var u = Array(e + 1); ++r < e; ) u[r] = i[r];
          return (u[e] = n(l)), o(t, this, u);
        };
      }
      var o = n(55),
        s = Math.max;
      t.exports = i;
    },
    function(t, e) {
      function n(t, e, n) {
        switch (n.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, n[0]);
          case 2:
            return t.call(e, n[0], n[1]);
          case 3:
            return t.call(e, n[0], n[1], n[2]);
        }
        return t.apply(e, n);
      }
      t.exports = n;
    },
    function(t, e) {
      function n(t) {
        return t;
      }
      t.exports = n;
    },
    function(t, e) {
      function n() {
        return !1;
      }
      t.exports = n;
    },
    function(t, e) {
      function n(t) {
        var e = [];
        if (null != t) for (var n in Object(t)) e.push(n);
        return e;
      }
      t.exports = n;
    },
    function(t, e, n) {
      function i(t) {
        return o(t, !1, !0);
      }
      var o = n(60);
      t.exports = i;
    },
    function(t, e, n) {
      function i(t, e, n, j, S, D, w) {
        var A;
        if ((j && (A = D ? j(t, S, D, w) : j(t)), void 0 !== A)) return A;
        if (!b(t)) return t;
        var O = v(t);
        if (O) {
          if (((A = p(t)), !e)) return u(t, A);
        } else {
          var I = d(t),
            k = I == x || I == _;
          if (m(t)) return l(t, e);
          if (I == E || I == P || (k && !D)) {
            if (((A = g(k ? {} : t)), !e)) return c(t, a(A, t));
          } else {
            if (!C[I]) return D ? t : {};
            A = f(t, I, i, e);
          }
        }
        w || (w = new o());
        var T = w.get(t);
        if (T) return T;
        w.set(t, A);
        var M = O ? void 0 : (n ? h : y)(t);
        return s(M || t, function(o, s) {
          M && ((s = o), (o = t[s])), r(A, s, i(o, e, n, j, s, t, w));
        }), A;
      }
      var o = n(61),
        s = n(67),
        r = n(14),
        a = n(68),
        l = n(69),
        u = n(72),
        c = n(73),
        h = n(75),
        d = n(76),
        p = n(77),
        f = n(78),
        g = n(79),
        v = n(83),
        m = n(84),
        b = n(18),
        y = n(17),
        P = '[object Arguments]',
        x = '[object Function]',
        _ = '[object GeneratorFunction]',
        E = '[object Object]',
        C = {};
      (C[P] = C['[object Array]'] = C['[object ArrayBuffer]'] = C[
        '[object DataView]'
      ] = C['[object Boolean]'] = C['[object Date]'] = C['[object Float32Array]'] = C[
        '[object Float64Array]'
      ] = C['[object Int8Array]'] = C['[object Int16Array]'] = C[
        '[object Int32Array]'
      ] = C['[object Map]'] = C['[object Number]'] = C[E] = C['[object RegExp]'] = C[
        '[object Set]'
      ] = C['[object String]'] = C['[object Symbol]'] = C['[object Uint8Array]'] = C[
        '[object Uint8ClampedArray]'
      ] = C['[object Uint16Array]'] = C['[object Uint32Array]'] = !0), (C[
        '[object Error]'
      ] = C[x] = C['[object WeakMap]'] = !1), (t.exports = i);
    },
    function(t, e, n) {
      function i(t) {
        var e = -1,
          n = t ? t.length : 0;
        for (this.clear(); ++e < n; ) {
          var i = t[e];
          this.set(i[0], i[1]);
        }
      }
      var o = n(62),
        s = n(63),
        r = n(64),
        a = n(65),
        l = n(66);
      (i.prototype.clear = o), (i.prototype.delete = s), (i.prototype.get = r), (i.prototype.has = a), (i.prototype.set = l), (t.exports = i);
    },
    function(t, e) {
      function n() {
        (this.__data__ = []), (this.size = 0);
      }
      t.exports = n;
    },
    function(t, e, n) {
      function i(t) {
        var e = this.__data__,
          n = o(e, t);
        return !(
          n < 0 || (n == e.length - 1 ? e.pop() : r.call(e, n, 1), --this.size, 0)
        );
      }
      var o = n(1),
        s = Array.prototype,
        r = s.splice;
      t.exports = i;
    },
    function(t, e, n) {
      function i(t) {
        var e = this.__data__,
          n = o(e, t);
        return n < 0 ? void 0 : e[n][1];
      }
      var o = n(1);
      t.exports = i;
    },
    function(t, e, n) {
      function i(t) {
        return o(this.__data__, t) > -1;
      }
      var o = n(1);
      t.exports = i;
    },
    function(t, e, n) {
      function i(t, e) {
        var n = this.__data__,
          i = o(n, t);
        return i < 0 ? (++this.size, n.push([t, e])) : (n[i][1] = e), this;
      }
      var o = n(1);
      t.exports = i;
    },
    function(t, e) {
      function n(t, e) {
        for (var n = -1, i = t ? t.length : 0; ++n < i && !1 !== e(t[n], n, t); );
        return t;
      }
      t.exports = n;
    },
    function(t, e, n) {
      function i(t, e) {
        return t && o(e, s(e), t);
      }
      var o = n(5),
        s = n(17);
      t.exports = i;
    },
    function(t, e, n) {
      (function(t) {
        function i(t, e) {
          if (e) return t.slice();
          var n = t.length,
            i = u ? u(n) : new t.constructor(n);
          return t.copy(i), i;
        }
        var o = n(70),
          s = 'object' == typeof e && e && !e.nodeType && e,
          r = s && 'object' == typeof t && t && !t.nodeType && t,
          a = r && r.exports === s,
          l = a ? o.Buffer : void 0,
          u = l ? l.allocUnsafe : void 0;
        t.exports = i;
      }.call(e, n(10)(t)));
    },
    function(t, e, n) {
      var i = n(71),
        o = 'object' == typeof self && self && self.Object === Object && self,
        s = i || o || Function('return this')();
      t.exports = s;
    },
    function(t, e, n) {
      (function(e) {
        var n = 'object' == typeof e && e && e.Object === Object && e;
        t.exports = n;
      }.call(e, n(3)));
    },
    function(t, e) {
      function n(t, e) {
        var n = -1,
          i = t.length;
        for (e || (e = Array(i)); ++n < i; ) e[n] = t[n];
        return e;
      }
      t.exports = n;
    },
    function(t, e, n) {
      function i(t, e) {
        return o(t, s(t), e);
      }
      var o = n(5),
        s = n(74);
      t.exports = i;
    },
    function(t, e) {
      function n() {
        return [];
      }
      t.exports = n;
    },
    function(t, e, n) {
      var i = n(6),
        o = i(Object.keys, Object);
      t.exports = o;
    },
    function(t, e) {
      function n(t) {
        return o.call(t);
      }
      var i = Object.prototype,
        o = i.toString;
      t.exports = n;
    },
    function(t, e) {
      function n(t) {
        var e = t.length,
          n = t.constructor(e);
        return e &&
          'string' == typeof t[0] &&
          o.call(t, 'index') &&
          ((n.index = t.index), (n.input = t.input)), n;
      }
      var i = Object.prototype,
        o = i.hasOwnProperty;
      t.exports = n;
    },
    function(t, e) {
      function n(t) {
        return t;
      }
      t.exports = n;
    },
    function(t, e, n) {
      function i(t) {
        return 'function' != typeof t.constructor || r(t) ? {} : o(s(t));
      }
      var o = n(80),
        s = n(81),
        r = n(82);
      t.exports = i;
    },
    function(t, e, n) {
      var i = n(18),
        o = Object.create,
        s = (function() {
          function t() {}
          return function(e) {
            if (!i(e)) return {};
            if (o) return o(e);
            t.prototype = e;
            var n = new t();
            return (t.prototype = void 0), n;
          };
        })();
      t.exports = s;
    },
    function(t, e, n) {
      var i = n(6),
        o = i(Object.getPrototypeOf, Object);
      t.exports = o;
    },
    function(t, e) {
      function n() {
        return !1;
      }
      t.exports = n;
    },
    function(t, e) {
      var n = Array.isArray;
      t.exports = n;
    },
    function(t, e) {
      function n() {
        return !1;
      }
      t.exports = n;
    },
    function(t, e) {
      function n(t) {
        return null == t;
      }
      t.exports = n;
    },
    function(t, e, n) {
      'use strict';
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
      }
      function s(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
      }
      function r(t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof e,
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })), e &&
          (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
      }
      Object.defineProperty(e, '__esModule', { value: !0 });
      var a = (function() {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i &&
                (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
          }
          return function(e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })(),
        l = n(2),
        u = i(l),
        c = n(87),
        h = i(c),
        d = n(4),
        p = i(d),
        f = (function(t) {
          function e(t) {
            o(this, e);
            var n = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)),
              i = t.nodes,
              r = void 0 === i ? [] : i;
            return (n.state = {
              nodes: r.map(function(t) {
                return Object.assign({}, t, { id: t.id || 'N-' + p.default.generate() });
              }),
            }), n;
          }
          return r(e, t), a(e, [
            {
              key: 'componentWillReceiveProps',
              value: function(t) {
                this.setState({
                  nodes: t.nodes.map(function(t) {
                    return t.id
                      ? t
                      : Object.assign({}, t, { id: t.id || 'N-' + p.default.generate() });
                  }),
                });
              },
            },
            {
              key: 'render',
              value: function() {
                var t = this;
                return u.default.createElement(
                  'div',
                  { className: 'dag-nodes-list' },
                  this.state.nodes.map(function(e) {
                    return t.props.renderNode
                      ? t.props.renderNode(e)
                      : u.default.createElement(h.default, {
                          style: e.style,
                          type: e.type,
                          label: e.label,
                          key: e.id,
                          id: e.id,
                          onNodesClick: t.props.onNodesClick,
                        });
                  }),
                );
              },
            },
          ]), e;
        })(l.Component);
      e.default = f;
    },
    function(t, e, n) {
      'use strict';
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o(t, e, n) {
        return e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n), t;
      }
      function s(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
      }
      function r(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
      }
      function a(t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof e,
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })), e &&
          (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
      }
      Object.defineProperty(e, '__esModule', { value: !0 });
      var l = (function() {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i &&
                (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
          }
          return function(e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })(),
        u = n(2),
        c = i(u),
        h = n(19),
        d = i(h);
      n(88);
      var p = (function(t) {
        function e(t) {
          s(this, e);
          var n = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)),
            i = t.style,
            o = t.type,
            a = t.label,
            l = t.id;
          return (n.state = { style: i, type: o, label: a, id: l }), n;
        }
        return a(e, t), l(e, [
          {
            key: 'componentWillReceiveProps',
            value: function(t) {
              var e = t.style,
                n = t.type,
                i = t.label,
                o = t.id;
              this.setState({ style: e, type: n, label: i, id: o });
            },
          },
          {
            key: 'componentWillUnmount',
            value: function() {
              this.props.jsPlumbInstance.remove(this.state.id, !1);
            },
          },
          {
            key: 'render',
            value: function() {
              var t = this;
              return c.default.createElement(
                'div',
                {
                  className: 'node text-center',
                  id: this.state.id,
                  style: this.state.style,
                  onClick: this.props.onNodesClick.bind(null, 'click', this.state),
                },
                c.default.createElement(
                  'div',
                  {
                    className: (0, d.default)(o({ 'dag-node': !0 }, this.state.type, !0)),
                  },
                  c.default.createElement(
                    'strong',
                    {
                      className: 'close-btn',
                      onClick: function(e) {
                        return t.props.onNodesClick.bind(
                          null,
                          'close',
                          t.state,
                        ), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), e.preventDefault(), !1;
                      },
                    },
                    'x',
                  ),
                ),
                c.default.createElement('div', { className: 'label' }, this.state.label),
              );
            },
          },
        ]), e;
      })(u.Component);
      (p.defaultProps = { onClick: function() {} }), (e.default = p);
    },
    function(t, e, n) {
      var i = n(89);
      'string' == typeof i && (i = [[t.i, i, '']]), n(21)(i, {}), i.locals &&
        (t.exports = i.locals);
    },
    function(t, e, n) {
      (e = t.exports = n(20)()), e.push([
        t.i,
        '.node .dag-node{position:relative}.node .dag-node .close-btn{cursor:pointer;position:absolute;top:-3px;right:3px}',
        '',
      ]);
    },
    function(t, e, n) {
      var i, o;
      (function() {
        void 0 === Math.sgn &&
          (Math.sgn = function(t) {
            return 0 == t ? 0 : t > 0 ? 1 : -1;
          });
        var t = {
            subtract: function(t, e) {
              return { x: t.x - e.x, y: t.y - e.y };
            },
            dotProduct: function(t, e) {
              return t.x * e.x + t.y * e.y;
            },
            square: function(t) {
              return Math.sqrt(t.x * t.x + t.y * t.y);
            },
            scale: function(t, e) {
              return { x: t.x * e, y: t.y * e };
            },
          },
          e = Math.pow(2, -65),
          n = function(e, n) {
            for (
              var i = [],
                r = o(e, n),
                a = n.length - 1,
                l = 2 * a - 1,
                c = s(r, l, i, 0),
                h = t.subtract(e, n[0]),
                d = t.square(h),
                p = 0,
                f = 0;
              f < c;
              f++
            ) {
              h = t.subtract(e, u(n, a, i[f], null, null));
              var g = t.square(h);
              g < d && ((d = g), (p = i[f]));
            }
            return (h = t.subtract(e, n[a])), (g = t.square(h)), g < d &&
              ((d = g), (p = 1)), { location: p, distance: d };
          },
          i = function(t, e) {
            var i = n(t, e);
            return {
              point: u(e, e.length - 1, i.location, null, null),
              location: i.location,
            };
          },
          o = function(e, n) {
            for (
              var i = n.length - 1,
                o = 2 * i - 1,
                s = [],
                r = [],
                a = [],
                l = [],
                u = [[1, 0.6, 0.3, 0.1], [0.4, 0.6, 0.6, 0.4], [0.1, 0.3, 0.6, 1]],
                c = 0;
              c <= i;
              c++
            )
              s[c] = t.subtract(n[c], e);
            for (var c = 0; c <= i - 1; c++)
              (r[c] = t.subtract(n[c + 1], n[c])), (r[c] = t.scale(r[c], 3));
            for (var h = 0; h <= i - 1; h++)
              for (var d = 0; d <= i; d++)
                a[h] || (a[h] = []), (a[h][d] = t.dotProduct(r[h], s[d]));
            for (c = 0; c <= o; c++)
              l[c] || (l[c] = []), (l[c].y = 0), (l[c].x = parseFloat(c) / o);
            for (var p = i, f = i - 1, g = 0; g <= p + f; g++) {
              var v = Math.max(0, g - f),
                m = Math.min(g, p);
              for (c = v; c <= m; c++) (j = g - c), (l[c + j].y += a[j][c] * u[j][c]);
            }
            return l;
          },
          s = function(t, e, n, i) {
            var o,
              c,
              h = [],
              d = [],
              p = [],
              f = [];
            switch (r(t, e)) {
              case 0:
                return 0;
              case 1:
                if (i >= 64) return (n[0] = (t[0].x + t[e].x) / 2), 1;
                if (a(t, e)) return (n[0] = l(t, e)), 1;
            }
            u(t, e, 0.5, h, d), (o = s(h, e, p, i + 1)), (c = s(d, e, f, i + 1));
            for (var g = 0; g < o; g++) n[g] = p[g];
            for (var g = 0; g < c; g++) n[g + o] = f[g];
            return o + c;
          },
          r = function(t, e) {
            var n,
              i,
              o = 0;
            n = i = Math.sgn(t[0].y);
            for (var s = 1; s <= e; s++) (n = Math.sgn(t[s].y)), n != i && o++, (i = n);
            return o;
          },
          a = function(t, n) {
            var i, o, s, r, a, l, u, c, h, d, p, f, g, v, m, b;
            (l = t[0].y - t[n].y), (u = t[n].x - t[0].x), (c =
              t[0].x * t[n].y - t[n].x * t[0].y);
            for (var y = (max_distance_below = 0), P = 1; P < n; P++) {
              var x = l * t[P].x + u * t[P].y + c;
              x > y ? (y = x) : x < max_distance_below && (max_distance_below = x);
            }
            return (p = 0), (f = 1), (g = 0), (v = l), (m = u), (b = c - y), (h =
              p * m - v * f), (d = 1 / h), (o =
              (f * b - m * g) * d), (v = l), (m = u), (b = c - max_distance_below), (h =
              p * m - v * f), (d = 1 / h), (s = (f * b - m * g) * d), (r = Math.min(
              o,
              s,
            )), (a = Math.max(o, s)), (i = a - r), i < e ? 1 : 0;
          },
          l = function(t, e) {
            var n = t[e].x - t[0].x,
              i = t[e].y - t[0].y,
              o = t[0].x - 0;
            return 0 + (n * (t[0].y - 0) - i * o) * (1 / (0 * n - 1 * i)) * 1;
          },
          u = function(t, e, n, i, o) {
            for (var s = [[]], r = 0; r <= e; r++) s[0][r] = t[r];
            for (var a = 1; a <= e; a++)
              for (var r = 0; r <= e - a; r++)
                s[a] || (s[a] = []), s[a][r] || (s[a][r] = {}), (s[a][r].x =
                  (1 - n) * s[a - 1][r].x + n * s[a - 1][r + 1].x), (s[a][r].y =
                  (1 - n) * s[a - 1][r].y + n * s[a - 1][r + 1].y);
            if (null != i) for (r = 0; r <= e; r++) i[r] = s[r][0];
            if (null != o) for (r = 0; r <= e; r++) o[r] = s[e - r][r];
            return s[e][0];
          },
          c = {},
          h = function(t) {
            var e = c[t];
            if (!e) {
              e = [];
              var n = function() {
                  return function(e) {
                    return Math.pow(e, t);
                  };
                },
                i = function() {
                  return function(e) {
                    return Math.pow(1 - e, t);
                  };
                },
                o = function(t) {
                  return function(e) {
                    return t;
                  };
                },
                s = function() {
                  return function(t) {
                    return t;
                  };
                },
                r = function() {
                  return function(t) {
                    return 1 - t;
                  };
                },
                a = function(t) {
                  return function(e) {
                    for (var n = 1, i = 0; i < t.length; i++) n *= t[i](e);
                    return n;
                  };
                };
              e.push(new n());
              for (var l = 1; l < t; l++) {
                for (var u = [new o(t)], h = 0; h < t - l; h++) u.push(new s());
                for (var h = 0; h < l; h++) u.push(new r());
                e.push(new a(u));
              }
              e.push(new i()), (c[t] = e);
            }
            return e;
          },
          d = function(t, e) {
            for (var n = h(t.length - 1), i = 0, o = 0, s = 0; s < t.length; s++)
              (i += t[s].x * n[s](e)), (o += t[s].y * n[s](e));
            return { x: i, y: o };
          },
          p = function(t, e) {
            return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
          },
          f = function(t) {
            return t[0].x == t[1].x && t[0].y == t[1].y;
          },
          g = function(t, e, n) {
            if (f(t)) return { point: t[0], location: e };
            for (
              var i = d(t, e), o = 0, s = e, r = n > 0 ? 1 : -1, a = null;
              o < Math.abs(n);

            )
              (s += 0.005 * r), (a = d(t, s)), (o += p(a, i)), (i = a);
            return { point: a, location: s };
          },
          v = function(t) {
            if (f(t)) return 0;
            for (var e = d(t, 0), n = 0, i = 0, o = null; i < 1; )
              (i += 0.005), (o = d(t, i)), (n += p(o, e)), (e = o);
            return n;
          },
          m = function(t, e, n) {
            return g(t, e, n).point;
          },
          b = function(t, e, n) {
            return g(t, e, n).location;
          },
          y = function(t, e) {
            var n = d(t, e),
              i = d(t.slice(0, t.length - 1), e),
              o = i.y - n.y,
              s = i.x - n.x;
            return 0 == o ? 1 / 0 : Math.atan(o / s);
          },
          P = function(t, e, n) {
            var i = g(t, e, n);
            return i.location > 1 && (i.location = 1), i.location < 0 &&
              (i.location = 0), y(t, i.location);
          },
          x = function(t, e, n, i) {
            i = null == i ? 0 : i;
            var o = g(t, e, i),
              s = y(t, o.location),
              r = Math.atan(-1 / s),
              a = n / 2 * Math.sin(r),
              l = n / 2 * Math.cos(r);
            return [
              { x: o.point.x + l, y: o.point.y + a },
              { x: o.point.x - l, y: o.point.y - a },
            ];
          };
        this.jsBezier = {
          distanceFromCurve: n,
          gradientAtPoint: y,
          gradientAtPointAlongCurveFrom: P,
          nearestPointOnCurve: i,
          pointOnCurve: d,
          pointAlongCurveFrom: m,
          perpendicularToCurveAt: x,
          locationAlongCurveFrom: b,
          getLength: v,
        };
      }.call('undefined' != typeof window ? window : this), function() {
        'use strict';
        var t = this,
          e = (t.Biltong = {}),
          n = function(t) {
            return '[object Array]' === Object.prototype.toString.call(t);
          },
          i = function(t, e, i) {
            return (t = n(t) ? t : [t.x, t.y]), (e = n(e) ? e : [e.x, e.y]), i(t, e);
          },
          o = (e.gradient = function(t, e) {
            return i(t, e, function(t, e) {
              return e[0] == t[0]
                ? e[1] > t[1] ? 1 / 0 : -1 / 0
                : e[1] == t[1] ? (e[0] > t[0] ? 0 : -0) : (e[1] - t[1]) / (e[0] - t[0]);
            });
          }),
          s = (
            (e.normal = function(t, e) {
              return -1 / o(t, e);
            }),
            (e.lineLength = function(t, e) {
              return i(t, e, function(t, e) {
                return Math.sqrt(Math.pow(e[1] - t[1], 2) + Math.pow(e[0] - t[0], 2));
              });
            }),
            (e.quadrant = function(t, e) {
              return i(t, e, function(t, e) {
                return e[0] > t[0]
                  ? e[1] > t[1] ? 2 : 1
                  : e[0] == t[0] ? (e[1] > t[1] ? 2 : 1) : e[1] > t[1] ? 3 : 4;
              });
            })
          ),
          r = (
            (e.theta = function(t, e) {
              return i(t, e, function(t, e) {
                var n = o(t, e),
                  i = Math.atan(n),
                  r = s(t, e);
                return (4 != r && 3 != r) ||
                  (i += Math.PI), i < 0 && (i += 2 * Math.PI), i;
              });
            }),
            (e.intersects = function(t, e) {
              var n = t.x,
                i = t.x + t.w,
                o = t.y,
                s = t.y + t.h,
                r = e.x,
                a = e.x + e.w,
                l = e.y,
                u = e.y + e.h;
              return (
                (n <= r && r <= i && o <= l && l <= s) ||
                (n <= a && a <= i && o <= l && l <= s) ||
                (n <= r && r <= i && o <= u && u <= s) ||
                (n <= a && r <= i && o <= u && u <= s) ||
                (r <= n && n <= a && l <= o && o <= u) ||
                (r <= i && i <= a && l <= o && o <= u) ||
                (r <= n && n <= a && l <= s && s <= u) ||
                (r <= i && n <= a && l <= s && s <= u)
              );
            }),
            (e.encloses = function(t, e, n) {
              var i = t.x,
                o = t.x + t.w,
                s = t.y,
                r = t.y + t.h,
                a = e.x,
                l = e.x + e.w,
                u = e.y,
                c = e.y + e.h,
                h = function(t, e, i, o) {
                  return n ? t <= e && i >= o : t < e && i > o;
                };
              return h(i, a, o, l) && h(s, u, r, c);
            }),
            [null, [1, -1], [1, 1], [-1, 1], [-1, -1]]
          ),
          a = [null, [-1, -1], [-1, 1], [1, 1], [1, -1]];
        (e.pointOnLine = function(t, e, n) {
          var i = o(t, e),
            l = s(t, e),
            u = n > 0 ? r[l] : a[l],
            c = Math.atan(i),
            h = Math.abs(n * Math.sin(c)) * u[1],
            d = Math.abs(n * Math.cos(c)) * u[0];
          return { x: t.x + d, y: t.y + h };
        }), (e.perpendicularLineTo = function(t, e, n) {
          var i = o(t, e),
            s = Math.atan(-1 / i),
            r = n / 2 * Math.sin(s),
            a = n / 2 * Math.cos(s);
          return [{ x: e.x + a, y: e.y + r }, { x: e.x - a, y: e.y - r }];
        });
      }.call('undefined' != typeof window ? window : this), function() {
        'use strict';
        var t = this,
          e = { android: navigator.userAgent.toLowerCase().indexOf('android') > -1 },
          n = function(t, e, n) {
            n = n || t.parentNode;
            for (var i = n.querySelectorAll(e), o = 0; o < i.length; o++)
              if (i[o] === t) return !0;
            return !1;
          },
          i = function(t) {
            return 'string' == typeof t || t.constructor === String
              ? document.getElementById(t)
              : t;
          },
          o = function(t) {
            return t.srcElement || t.target;
          },
          s = function(t, e, n, i) {
            if (i) {
              if (void 0 !== t.path) return { path: t.path, end: t.path.indexOf(n) };
              var o = { path: [], end: -1 },
                s = function(t) {
                  o.path.push(t), t === n
                    ? (o.end = o.path.length - 1)
                    : null != t.parentNode && s(t.parentNode);
                };
              return s(e), o;
            }
            return { path: [e], end: 1 };
          },
          r = function(t, e) {
            for (var n = 0, i = t.length; n < i && t[n] != e; n++);
            n < t.length && t.splice(n, 1);
          },
          a = 1,
          l = function(t, e, n) {
            var i = a++;
            return (t.__ta = t.__ta || {}), (t.__ta[e] = t.__ta[e] || {}), (t.__ta[e][
              i
            ] = n), (n.__tauid = i), i;
          },
          u = function(t, e, n) {
            if ((t.__ta && t.__ta[e] && delete t.__ta[e][n.__tauid], n.__taExtra)) {
              for (var i = 0; i < n.__taExtra.length; i++)
                I(t, n.__taExtra[i][0], n.__taExtra[i][1]);
              n.__taExtra.length = 0;
            }
            n.__taUnstore && n.__taUnstore();
          },
          c = function(t, e, i, r) {
            if (null == t) return i;
            var a = t.split(','),
              l = function(r) {
                l.__tauid = i.__tauid;
                var u = o(r),
                  c = u,
                  h = s(r, u, e, null != t);
                if (-1 != h.end)
                  for (var d = 0; d < h.end; d++) {
                    c = h.path[d];
                    for (var p = 0; p < a.length; p++)
                      n(c, a[p], e) && i.apply(c, arguments);
                  }
              };
            return h(i, r, l), l;
          },
          h = function(t, e, n) {
            (t.__taExtra = t.__taExtra || []), t.__taExtra.push([e, n]);
          },
          d = function(t, e, n, i) {
            if (b && P[e]) {
              var o = c(i, t, n, P[e]);
              O(t, P[e], o, n);
            }
            'focus' === e &&
              null == t.getAttribute('tabindex') &&
              t.setAttribute('tabindex', '1'), O(t, e, c(i, t, n, e), n);
          },
          p = function(t, e, n, i) {
            if (null == t.__taSmartClicks) {
              var s = function(e) {
                  t.__tad = C(e);
                },
                a = function(e) {
                  t.__tau = C(e);
                },
                l = function(e) {
                  if (
                    t.__tad &&
                    t.__tau &&
                    t.__tad[0] === t.__tau[0] &&
                    t.__tad[1] === t.__tau[1]
                  )
                    for (var n = 0; n < t.__taSmartClicks.length; n++)
                      t.__taSmartClicks[n].apply(o(e), [e]);
                };
              d(t, 'mousedown', s, i), d(t, 'mouseup', a, i), d(
                t,
                'click',
                l,
                i,
              ), (t.__taSmartClicks = []);
            }
            t.__taSmartClicks.push(n), (n.__taUnstore = function() {
              r(t.__taSmartClicks, n);
            });
          },
          f = {
            tap: { touches: 1, taps: 1 },
            dbltap: { touches: 1, taps: 2 },
            contextmenu: { touches: 2, taps: 1 },
          },
          g = function(t, e) {
            return function(i, a, l, u) {
              if ('contextmenu' == a && y) d(i, a, l, u);
              else {
                if (null == i.__taTapHandler) {
                  var c = (i.__taTapHandler = {
                      tap: [],
                      dbltap: [],
                      contextmenu: [],
                      down: !1,
                      taps: 0,
                      downSelectors: [],
                    }),
                    h = function(r) {
                      for (
                        var a = o(r), l = s(r, a, i, null != u), h = !1, d = 0;
                        d < l.end;
                        d++
                      ) {
                        if (h) return;
                        a = l.path[d];
                        for (var p = 0; p < c.downSelectors.length; p++)
                          if (null == c.downSelectors[p] || n(a, c.downSelectors[p], i)) {
                            (c.down = !0), setTimeout(g, t), setTimeout(v, e), (h = !0);
                            break;
                          }
                      }
                    },
                    p = function(t) {
                      if (c.down) {
                        var e,
                          r,
                          a = o(t);
                        c.taps++;
                        var l = A(t);
                        for (var u in f)
                          if (f.hasOwnProperty(u)) {
                            var h = f[u];
                            if (h.touches === l && (1 === h.taps || h.taps === c.taps))
                              for (var d = 0; d < c[u].length; d++) {
                                r = s(t, a, i, null != c[u][d][1]);
                                for (var p = 0; p < r.end; p++)
                                  if (
                                    (
                                      (e = r.path[p]),
                                      null == c[u][d][1] || n(e, c[u][d][1], i)
                                    )
                                  ) {
                                    c[u][d][0].apply(e, [t]);
                                    break;
                                  }
                              }
                          }
                      }
                    },
                    g = function() {
                      c.down = !1;
                    },
                    v = function() {
                      c.taps = 0;
                    };
                  d(i, 'mousedown', h), d(i, 'mouseup', p);
                }
                i.__taTapHandler.downSelectors.push(u), i.__taTapHandler[a].push([
                  l,
                  u,
                ]), (l.__taUnstore = function() {
                  r(i.__taTapHandler[a], l);
                });
              }
            };
          },
          v = function(t, e, n, i) {
            for (var o in n.__tamee[t])
              n.__tamee[t].hasOwnProperty(o) && n.__tamee[t][o].apply(i, [e]);
          },
          m = function() {
            var t = [];
            return function(e, i, s, r) {
              if (!e.__tamee) {
                e.__tamee = { over: !1, mouseenter: [], mouseexit: [] };
                var a = function(i) {
                    var s = o(i);
                    ((null == r && s == e && !e.__tamee.over) ||
                      (n(s, r, e) && (null == s.__tamee || !s.__tamee.over))) &&
                      (
                        v('mouseenter', i, e, s),
                        (s.__tamee = s.__tamee || {}),
                        (s.__tamee.over = !0),
                        t.push(s)
                      );
                  },
                  u = function(i) {
                    for (var s = o(i), r = 0; r < t.length; r++)
                      s != t[r] ||
                        n(i.relatedTarget || i.toElement, '*', s) ||
                        ((s.__tamee.over = !1), t.splice(r, 1), v('mouseexit', i, e, s));
                  };
                O(e, 'mouseover', c(r, e, a, 'mouseover'), a), O(
                  e,
                  'mouseout',
                  c(r, e, u, 'mouseout'),
                  u,
                );
              }
              (s.__taUnstore = function() {
                delete e.__tamee[i][s.__tauid];
              }), l(e, i, s), (e.__tamee[i][s.__tauid] = s);
            };
          },
          b = 'ontouchstart' in document.documentElement,
          y = 'onmousedown' in document.documentElement,
          P = { mousedown: 'touchstart', mouseup: 'touchend', mousemove: 'touchmove' },
          x = (function() {
            var t = -1;
            if ('Microsoft Internet Explorer' == navigator.appName) {
              var e = navigator.userAgent;
              null != new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})').exec(e) &&
                (t = parseFloat(RegExp.$1));
            }
            return t;
          })(),
          _ = x > -1 && x < 9,
          E = function(t, e) {
            if (null == t) return [0, 0];
            var n = w(t),
              i = D(n, 0);
            return [i[e + 'X'], i[e + 'Y']];
          },
          C = function(t) {
            return null == t
              ? [0, 0]
              : _
                ? [
                    t.clientX + document.documentElement.scrollLeft,
                    t.clientY + document.documentElement.scrollTop,
                  ]
                : E(t, 'page');
          },
          j = function(t) {
            return E(t, 'screen');
          },
          S = function(t) {
            return E(t, 'client');
          },
          D = function(t, e) {
            return t.item ? t.item(e) : t[e];
          },
          w = function(t) {
            return t.touches && t.touches.length > 0
              ? t.touches
              : t.changedTouches && t.changedTouches.length > 0
                ? t.changedTouches
                : t.targetTouches && t.targetTouches.length > 0 ? t.targetTouches : [t];
          },
          A = function(t) {
            return w(t).length;
          },
          O = function(t, e, n, i) {
            if ((l(t, e, n), (i.__tauid = n.__tauid), t.addEventListener))
              t.addEventListener(e, n, !1);
            else if (t.attachEvent) {
              var o = e + n.__tauid;
              (t['e' + o] = n), (t[o] = function() {
                t['e' + o] && t['e' + o](window.event);
              }), t.attachEvent('on' + e, t[o]);
            }
          },
          I = function(t, e, n) {
            null != n &&
              k(t, function() {
                var o = i(this);
                if ((u(o, e, n), null != n.__tauid))
                  if (o.removeEventListener)
                    o.removeEventListener(e, n, !1), b &&
                      P[e] &&
                      o.removeEventListener(P[e], n, !1);
                  else if (this.detachEvent) {
                    var s = e + n.__tauid;
                    o[s] && o.detachEvent('on' + e, o[s]), (o[s] = null), (o[
                      'e' + s
                    ] = null);
                  }
                n.__taTouchProxy && I(t, n.__taTouchProxy[1], n.__taTouchProxy[0]);
              });
          },
          k = function(t, e) {
            if (null != t) {
              t =
                'undefined' != typeof Window && 'unknown' != typeof t.top && t == t.top
                  ? [t]
                  : 'string' != typeof t && null == t.tagName && null != t.length
                    ? t
                    : 'string' == typeof t ? document.querySelectorAll(t) : [t];
              for (var n = 0; n < t.length; n++) e.apply(t[n]);
            }
          };
        (t.Mottle = function(t) {
          t = t || {};
          var n = t.clickThreshold || 250,
            o = t.dblClickThreshold || 450,
            s = new m(),
            r = new g(n, o),
            a = t.smartClicks,
            l = function(t, e, n, o) {
              null != n &&
                k(t, function() {
                  var t = i(this);
                  a && 'click' === e
                    ? p(t, 0, n, o)
                    : 'tap' === e || 'dbltap' === e || 'contextmenu' === e
                      ? r(t, e, n, o)
                      : 'mouseenter' === e || 'mouseexit' == e
                        ? s(t, e, n, o)
                        : d(t, e, n, o);
                });
            };
          (this.remove = function(t) {
            return k(t, function() {
              var t = i(this);
              if (t.__ta)
                for (var e in t.__ta)
                  if (t.__ta.hasOwnProperty(e))
                    for (var n in t.__ta[e])
                      t.__ta[e].hasOwnProperty(n) && I(t, e, t.__ta[e][n]);
              t.parentNode && t.parentNode.removeChild(t);
            }), this;
          }), (this.on = function(t, e, n, i) {
            var o = arguments[0],
              s = 4 == arguments.length ? arguments[2] : null,
              r = arguments[1],
              a = arguments[arguments.length - 1];
            return l(o, r, a, s), this;
          }), (this.off = function(t, e, n) {
            return I(t, e, n), this;
          }), (this.trigger = function(t, n, o, s) {
            var r =
                y &&
                ('undefined' == typeof MouseEvent ||
                  null == o ||
                  o.constructor === MouseEvent),
              a = b && !y && P[n] ? P[n] : n,
              l = !(b && !y && P[n]),
              u = C(o),
              c = j(o),
              h = S(o);
            return k(t, function() {
              var t,
                d = i(this);
              o = o || { screenX: c[0], screenY: c[1], clientX: h[0], clientY: h[1] };
              var p = function(t) {
                  s && (t.payload = s);
                },
                f = {
                  TouchEvent: function(t) {
                    var e = document.createTouch(
                        window,
                        d,
                        0,
                        u[0],
                        u[1],
                        c[0],
                        c[1],
                        h[0],
                        h[1],
                        0,
                        0,
                        0,
                        0,
                      ),
                      n = document.createTouchList(e),
                      i = document.createTouchList(e),
                      o = document.createTouchList(e);
                    t.initTouchEvent(
                      a,
                      !0,
                      !0,
                      window,
                      null,
                      c[0],
                      c[1],
                      h[0],
                      h[1],
                      !1,
                      !1,
                      !1,
                      !1,
                      n,
                      i,
                      o,
                      1,
                      0,
                    );
                  },
                  MouseEvents: function(t) {
                    if (
                      (
                        t.initMouseEvent(
                          a,
                          !0,
                          !0,
                          window,
                          0,
                          c[0],
                          c[1],
                          h[0],
                          h[1],
                          !1,
                          !1,
                          !1,
                          !1,
                          1,
                          d,
                        ),
                        e.android
                      )
                    ) {
                      var n = document.createTouch(
                        window,
                        d,
                        0,
                        u[0],
                        u[1],
                        c[0],
                        c[1],
                        h[0],
                        h[1],
                        0,
                        0,
                        0,
                        0,
                      );
                      t.touches = t.targetTouches = t.changedTouches = document.createTouchList(
                        n,
                      );
                    }
                  },
                };
              if (document.createEvent) {
                var g = !l && !r && b && P[n] && !e.android,
                  v = g ? 'TouchEvent' : 'MouseEvents';
                (t = document.createEvent(v)), f[v](t), p(t), d.dispatchEvent(t);
              } else document.createEventObject && ((t = document.createEventObject()), (t.eventType = t.eventName = a), (t.screenX = c[0]), (t.screenY = c[1]), (t.clientX = h[0]), (t.clientY = h[1]), p(t), d.fireEvent('on' + a, t));
            }), this;
          });
        }), (t.Mottle.consume = function(t, e) {
          t.stopPropagation ? t.stopPropagation() : (t.returnValue = !1), !e &&
            t.preventDefault &&
            t.preventDefault();
        }), (t.Mottle.pageLocation = C), (t.Mottle.setForceTouchEvents = function(t) {
          b = t;
        }), (t.Mottle.setForceMouseEvents = function(t) {
          y = t;
        });
      }.call('undefined' == typeof window ? this : window), function() {
        'use strict';
        var t = this,
          e = function(t, e, n) {
            return -1 === t.indexOf(e) && (n ? t.unshift(e) : t.push(e), !0);
          },
          n = function(t, e) {
            var n = t.indexOf(e);
            -1 != n && t.splice(n, 1);
          },
          i = function(t, e) {
            for (var n = [], i = 0; i < t.length; i++)
              -1 == e.indexOf(t[i]) && n.push(t[i]);
            return n;
          },
          o = function(t) {
            return null != t && ('string' == typeof t || t.constructor == String);
          },
          s = function(t) {
            var e = t.getBoundingClientRect(),
              n = document.body,
              i = document.documentElement,
              o = window.pageYOffset || i.scrollTop || n.scrollTop,
              s = window.pageXOffset || i.scrollLeft || n.scrollLeft,
              r = i.clientTop || n.clientTop || 0,
              a = i.clientLeft || n.clientLeft || 0,
              l = e.top + o - r,
              u = e.left + s - a;
            return { top: Math.round(l), left: Math.round(u) };
          },
          r = function(t, e, n) {
            n = n || t.parentNode;
            for (var i = n.querySelectorAll(e), o = 0; o < i.length; o++)
              if (i[o] === t) return !0;
            return !1;
          },
          a = (function() {
            var t = -1;
            if ('Microsoft Internet Explorer' == navigator.appName) {
              var e = navigator.userAgent;
              null != new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})').exec(e) &&
                (t = parseFloat(RegExp.$1));
            }
            return t;
          })(),
          l = a > -1 && a < 9,
          u = 9 == a,
          c = function(t) {
            if (l)
              return [
                t.clientX + document.documentElement.scrollLeft,
                t.clientY + document.documentElement.scrollTop,
              ];
            var e = d(t),
              n = h(e, 0);
            return u ? [n.pageX || n.clientX, n.pageY || n.clientY] : [n.pageX, n.pageY];
          },
          h = function(t, e) {
            return t.item ? t.item(e) : t[e];
          },
          d = function(t) {
            return t.touches && t.touches.length > 0
              ? t.touches
              : t.changedTouches && t.changedTouches.length > 0
                ? t.changedTouches
                : t.targetTouches && t.targetTouches.length > 0 ? t.targetTouches : [t];
          },
          p = {
            draggable: 'katavorio-draggable',
            droppable: 'katavorio-droppable',
            drag: 'katavorio-drag',
            selected: 'katavorio-drag-selected',
            active: 'katavorio-drag-active',
            hover: 'katavorio-drag-hover',
            noSelect: 'katavorio-drag-no-select',
            ghostProxy: 'katavorio-ghost-proxy',
          },
          f = ['stop', 'start', 'drag', 'drop', 'over', 'out', 'beforeStart'],
          g = function() {},
          v = function() {
            return !0;
          },
          m = function(t, e, n) {
            for (var i = 0; i < t.length; i++) t[i] != n && e(t[i]);
          },
          b = function(t, e, n, i) {
            m(t, function(t) {
              t.setActive(e), e && t.updatePosition(), n && t.setHover(i, e);
            });
          },
          y = function(t, e) {
            if (null != t) {
              t = o(t) || null != t.tagName || null == t.length ? [t] : t;
              for (var n = 0; n < t.length; n++) e.apply(t[n], [t[n]]);
            }
          },
          P = function(t) {
            t.stopPropagation
              ? (t.stopPropagation(), t.preventDefault())
              : (t.returnValue = !1);
          },
          x = function(t, e, n) {
            var i = t.srcElement || t.target;
            return !r(i, n.getInputFilterSelector(), e);
          },
          _ = function(t, e, n, i) {
            (this.params = e || {}), (this.el = t), this.params.addClass(
              this.el,
              this._class,
            ), (this.uuid = D());
            var o = !0;
            return (this.setEnabled = function(t) {
              o = t;
            }), (this.isEnabled = function() {
              return o;
            }), (this.toggleEnabled = function() {
              o = !o;
            }), (this.setScope = function(t) {
              this.scopes = t ? t.split(/\s+/) : [i];
            }), (this.addScope = function(t) {
              var e = {};
              y(this.scopes, function(t) {
                e[t] = !0;
              }), y(t ? t.split(/\s+/) : [], function(t) {
                e[t] = !0;
              }), (this.scopes = []);
              for (var n in e) this.scopes.push(n);
            }), (this.removeScope = function(t) {
              var e = {};
              y(this.scopes, function(t) {
                e[t] = !0;
              }), y(t ? t.split(/\s+/) : [], function(t) {
                delete e[t];
              }), (this.scopes = []);
              for (var n in e) this.scopes.push(n);
            }), (this.toggleScope = function(t) {
              var e = {};
              y(this.scopes, function(t) {
                e[t] = !0;
              }), y(t ? t.split(/\s+/) : [], function(t) {
                e[t] ? delete e[t] : (e[t] = !0);
              }), (this.scopes = []);
              for (var n in e) this.scopes.push(n);
            }), this.setScope(e.scope), (this.k = e.katavorio), e.katavorio;
          },
          E = function() {
            return !0;
          },
          C = function() {
            return !1;
          },
          j = function(t, e, n, i) {
            this._class = n.draggable;
            var a = _.apply(this, arguments);
            this.rightButtonCanDrag = this.params.rightButtonCanDrag;
            var l = [0, 0],
              u = null,
              h = null,
              d = [0, 0],
              f = !1,
              g = !1 !== this.params.consumeStartEvent,
              m = this.el,
              y = this.params.clone,
              j = (this.params.scroll, !1 !== e.multipleDrop),
              S = !1,
              w =
                !0 === e.ghostProxy
                  ? E
                  : e.ghostProxy && 'function' == typeof e.ghostProxy ? e.ghostProxy : C,
              A = function(t) {
                return t.cloneNode(!0);
              },
              O = e.snapThreshold || 5,
              I = function(t, e, n, i, o) {
                (i = i || O), (o = o || O);
                var s = Math.floor(t[0] / e),
                  r = e * s,
                  a = r + e,
                  l = Math.abs(t[0] - r) <= i ? r : Math.abs(a - t[0]) <= i ? a : t[0],
                  u = Math.floor(t[1] / n),
                  c = n * u,
                  h = c + n;
                return [
                  l,
                  Math.abs(t[1] - c) <= o ? c : Math.abs(h - t[1]) <= o ? h : t[1],
                ];
              };
            (this.posses = []), (this.posseRoles = {}), (this.toGrid = function(t) {
              return null == this.params.grid
                ? t
                : I(t, this.params.grid[0], this.params.grid[1]);
            }), (this.snap = function(t, e) {
              if (null != m) {
                (t = t || (this.params.grid ? this.params.grid[0] : 50)), (e =
                  e || (this.params.grid ? this.params.grid[1] : 50));
                var n = this.params.getPosition(m);
                this.params.setPosition(m, I(n, t, e, t, e));
              }
            }), (this.setUseGhostProxy = function(t) {
              w = t ? E : C;
            });
            var k,
              T = function(t) {
                return !1 === e.allowNegative
                  ? [Math.max(0, t[0]), Math.max(0, t[1])]
                  : t;
              },
              M = function(t) {
                k =
                  'function' == typeof t
                    ? t
                    : t
                      ? function(t) {
                          return T([
                            Math.max(0, Math.min(U.w - this.size[0], t[0])),
                            Math.max(0, Math.min(U.h - this.size[1], t[1])),
                          ]);
                        }.bind(this)
                      : function(t) {
                          return T(t);
                        };
              }.bind(this);
            M(
              'function' == typeof this.params.constrain
                ? this.params.constrain
                : this.params.constrain || this.params.containment,
            ), (this.setConstrain = function(t) {
              M(t);
            });
            var L;
            this.setRevert = function(t) {
              L = t;
            };
            var N = function(t) {
                return 'function' == typeof t
                  ? ((t._katavorioId = D()), t._katavorioId)
                  : t;
              },
              F = {},
              G = function(t) {
                for (var e in F) {
                  var n = F[e],
                    i = n[0](t);
                  if ((n[1] && (i = !i), !i)) return !1;
                }
                return !0;
              },
              R = (this.setFilter = function(e, n) {
                if (e) {
                  var i = N(e);
                  F[i] = [
                    function(n) {
                      var i,
                        s = n.srcElement || n.target;
                      return o(e)
                        ? (i = r(s, e, t))
                        : 'function' == typeof e && (i = e(n, t)), i;
                    },
                    !1 !== n,
                  ];
                }
              });
            (this.addFilter = R), (this.removeFilter = function(t) {
              var e = 'function' == typeof t ? t._katavorioId : t;
              delete F[e];
            }), (this.clearAllFilters = function() {
              F = {};
            }), (this.canDrag = this.params.canDrag || v);
            var U,
              B = [],
              H = [];
            (this.downListener = function(t) {
              if (
                (this.rightButtonCanDrag || (3 !== t.which && 2 !== t.button)) &&
                this.isEnabled() &&
                this.canDrag()
              )
                if (G(t) && x(t, this.el, this.k)) {
                  if (y) {
                    (m = this.el.cloneNode(!0)), m.setAttribute(
                      'id',
                      null,
                    ), (m.style.position = 'absolute');
                    var e = s(this.el);
                    (m.style.left = e.left + 'px'), (m.style.top =
                      e.top + 'px'), document.body.appendChild(m);
                  } else m = this.el;
                  g && P(t), (l = c(t)), this.params.bind(
                    document,
                    'mousemove',
                    this.moveListener,
                  ), this.params.bind(
                    document,
                    'mouseup',
                    this.upListener,
                  ), a.markSelection(this), a.markPosses(this), this.params.addClass(
                    document.body,
                    n.noSelect,
                  ), X('beforeStart', { el: this.el, pos: u, e: t, drag: this });
                } else this.params.consumeFilteredEvents && P(t);
            }.bind(this)), (this.moveListener = function(t) {
              if (l) {
                if (!f && !1 !== X('start', { el: this.el, pos: u, e: t, drag: this })) {
                  if (!l) return;
                  this.mark(!0), (f = !0);
                }
                if (l) {
                  H.length = 0;
                  var e = c(t),
                    n = e[0] - l[0],
                    i = e[1] - l[1],
                    o = this.params.ignoreZoom ? 1 : a.getZoom();
                  (n /= o), (i /= o), this.moveBy(n, i, t), a.updateSelection(
                    n,
                    i,
                    this,
                  ), a.updatePosses(n, i, this);
                }
              }
            }.bind(this)), (this.upListener = function(t) {
              l &&
                (
                  (l = null),
                  this.params.unbind(document, 'mousemove', this.moveListener),
                  this.params.unbind(document, 'mouseup', this.upListener),
                  this.params.removeClass(document.body, n.noSelect),
                  this.unmark(t),
                  a.unmarkSelection(this, t),
                  a.unmarkPosses(this, t),
                  this.stop(t),
                  a.notifySelectionDragStop(this, t),
                  a.notifyPosseDragStop(this, t),
                  (f = !1),
                  y && (m && m.parentNode && m.parentNode.removeChild(m), (m = null)),
                  L &&
                    !0 === L(this.el, this.params.getPosition(this.el)) &&
                    (this.params.setPosition(this.el, u), X('revert', this.el))
                );
            }.bind(this)), (this.getFilters = function() {
              return F;
            }), (this.abort = function() {
              null != l && this.upListener();
            }), (this.getDragElement = function() {
              return m || this.el;
            });
            var Y = {
              start: [],
              drag: [],
              stop: [],
              over: [],
              out: [],
              beforeStart: [],
              revert: [],
            };
            e.events.start && Y.start.push(e.events.start), e.events.beforeStart &&
              Y.beforeStart.push(e.events.beforeStart), e.events.stop &&
              Y.stop.push(e.events.stop), e.events.drag && Y.drag.push(e.events.drag), e
              .events.revert && Y.revert.push(e.events.revert), (this.on = function(
              t,
              e,
            ) {
              Y[t] && Y[t].push(e);
            }), (this.off = function(t, e) {
              if (Y[t]) {
                for (var n = [], i = 0; i < Y[t].length; i++)
                  Y[t][i] !== e && n.push(Y[t][i]);
                Y[t] = n;
              }
            });
            var X = function(t, e) {
              if (Y[t])
                for (var n = 0; n < Y[t].length; n++)
                  try {
                    Y[t][n](e);
                  } catch (t) {}
            };
            (this.notifyStart = function(t) {
              X('start', {
                el: this.el,
                pos: this.params.getPosition(m),
                e: t,
                drag: this,
              });
            }), (this.stop = function(t, e) {
              if (e || f) {
                var n = [],
                  i = a.getSelection(),
                  o = this.params.getPosition(m);
                if (i.length > 1)
                  for (var s = 0; s < i.length; s++) {
                    var r = this.params.getPosition(i[s].el);
                    n.push([i[s].el, { left: r[0], top: r[1] }, i[s]]);
                  }
                else n.push([m, { left: o[0], top: o[1] }, this]);
                X('stop', {
                  el: m,
                  pos: W || o,
                  finalPos: o,
                  e: t,
                  drag: this,
                  selection: n,
                });
              }
            }), (this.mark = function(t) {
              (u = this.params.getPosition(m)), (h = this.params.getPosition(
                m,
                !0,
              )), (d = [h[0] - u[0], h[1] - u[1]]), (this.size = this.params.getSize(
                m,
              )), (B = a.getMatchingDroppables(this)), b(
                B,
                !0,
                !1,
                this,
              ), this.params.addClass(m, this.params.dragClass || n.drag);
              var e = this.params.getSize(m.parentNode);
              (U = { w: e[0], h: e[1] }), t && a.notifySelectionDragStart(this);
            });
            var W;
            (this.unmark = function(t, i) {
              if (
                (
                  b(B, !1, !0, this),
                  S && w(this.el)
                    ? (
                        (W = [m.offsetLeft, m.offsetTop]),
                        this.el.parentNode.removeChild(m),
                        (m = this.el)
                      )
                    : (W = null),
                  this.params.removeClass(m, this.params.dragClass || n.drag),
                  (B.length = 0),
                  (S = !1),
                  !i
                )
              ) {
                H.length > 0 && W && e.setPosition(this.el, W);
                for (var o = 0; o < H.length && !0 !== H[o].drop(this, t); o++);
              }
            }), (this.moveBy = function(t, n, i) {
              H.length = 0;
              var o = this.toGrid([u[0] + t, u[1] + n]),
                s = k(o, m);
              if (w(this.el))
                if (o[0] != s[0] || o[1] != s[1]) {
                  if (!S) {
                    var r = A(this.el);
                    e.addClass(r, p.ghostProxy), this.el.parentNode.appendChild(
                      r,
                    ), (m = r), (S = !0);
                  }
                  s = o;
                } else S && (this.el.parentNode.removeChild(m), (m = this.el), (S = !1));
              var a = { x: s[0], y: s[1], w: this.size[0], h: this.size[1] },
                l = { x: a.x + d[0], y: a.y + d[1], w: a.w, h: a.h },
                c = null;
              this.params.setPosition(m, s);
              for (var h = 0; h < B.length; h++) {
                var f = {
                  x: B[h].pagePosition[0],
                  y: B[h].pagePosition[1],
                  w: B[h].size[0],
                  h: B[h].size[1],
                };
                this.params.intersects(l, f) &&
                (j || null == c || c == B[h].el) &&
                B[h].canDrop(this)
                  ? (c || (c = B[h].el), H.push(B[h]), B[h].setHover(this, !0, i))
                  : B[h].isHover() && B[h].setHover(this, !1, i);
              }
              X('drag', { el: this.el, pos: s, e: i, drag: this });
            }), (this.destroy = function() {
              this.params.unbind(
                this.el,
                'mousedown',
                this.downListener,
              ), this.params.unbind(
                document,
                'mousemove',
                this.moveListener,
              ), this.params.unbind(
                document,
                'mouseup',
                this.upListener,
              ), (this.downListener = null), (this.upListener = null), (this.moveListener = null);
            }), this.params.bind(this.el, 'mousedown', this.downListener), this.params
              .handle
              ? R(this.params.handle, !1)
              : R(this.params.filter, this.params.filterExclude);
          },
          S = function(t, e, n, i) {
            (this._class = n.droppable), (this.params = e || {}), (this._activeClass =
              this.params.activeClass || n.active), (this._hoverClass =
              this.params.hoverClass || n.hover), _.apply(this, arguments);
            var o = !1;
            (this.allowLoopback =
              !1 !== this.params.allowLoopback), (this.setActive = function(t) {
              this.params[t ? 'addClass' : 'removeClass'](this.el, this._activeClass);
            }), (this.updatePosition = function() {
              (this.position = this.params.getPosition(
                this.el,
              )), (this.pagePosition = this.params.getPosition(
                this.el,
                !0,
              )), (this.size = this.params.getSize(this.el));
            }), (this.canDrop =
              this.params.canDrop ||
              function(t) {
                return !0;
              }), (this.isHover = function() {
              return o;
            }), (this.setHover = function(t, e, n) {
              (e ||
                null == this.el._katavorioDragHover ||
                this.el._katavorioDragHover == t.el._katavorio) &&
                (
                  this.params[e ? 'addClass' : 'removeClass'](this.el, this._hoverClass),
                  (this.el._katavorioDragHover = e ? t.el._katavorio : null),
                  o !== e &&
                    this.params.events[e ? 'over' : 'out']({
                      el: this.el,
                      e: n,
                      drag: t,
                      drop: this,
                    }),
                  (o = e)
                );
            }), (this.drop = function(t, e) {
              return this.params.events.drop({ drag: t, e: e, drop: this });
            }), (this.destroy = function() {
              (this._class = null), (this._activeClass = null), (this._hoverClass = null), (o = null);
            });
          },
          D = function() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(t) {
              var e = (16 * Math.random()) | 0;
              return ('x' == t ? e : (3 & e) | 8).toString(16);
            });
          },
          w = function(t) {
            return null == t
              ? null
              : null ==
                (t =
                  'string' == typeof t || t.constructor == String
                    ? document.getElementById(t)
                    : t)
                ? null
                : ((t._katavorio = t._katavorio || D()), t);
          };
        t.Katavorio = function(t) {
          var s = [],
            r = {};
          (this._dragsByScope = {}), (this._dropsByScope = {});
          var a = 1,
            l = function(t, e) {
              y(t, function(t) {
                for (var n = 0; n < t.scopes.length; n++)
                  (e[t.scopes[n]] = e[t.scopes[n]] || []), e[t.scopes[n]].push(t);
              });
            },
            u = function(e, n) {
              var i = 0;
              return y(e, function(e) {
                for (var o = 0; o < e.scopes.length; o++)
                  if (n[e.scopes[o]]) {
                    var s = t.indexOf(n[e.scopes[o]], e);
                    -1 != s && (n[e.scopes[o]].splice(s, 1), i++);
                  }
              }), i > 0;
            },
            c = (
              (this.getMatchingDroppables = function(t) {
                for (var e = [], n = {}, i = 0; i < t.scopes.length; i++) {
                  var o = this._dropsByScope[t.scopes[i]];
                  if (o)
                    for (var s = 0; s < o.length; s++)
                      !o[s].canDrop(t) ||
                        n[o[s].uuid] ||
                        (!o[s].allowLoopback && o[s].el === t.el) ||
                        ((n[o[s].uuid] = !0), e.push(o[s]));
                }
                return e;
              }),
              function(e) {
                e = e || {};
                var n,
                  i = { events: {} };
                for (n in t) i[n] = t[n];
                for (n in e) i[n] = e[n];
                for (n = 0; n < f.length; n++) i.events[f[n]] = e[f[n]] || g;
                return (i.katavorio = this), i;
              }.bind(this)
            ),
            h = function(t, e) {
              for (var n = 0; n < f.length; n++) e[f[n]] && t.on(f[n], e[f[n]]);
            }.bind(this),
            d = {},
            v = t.css || {},
            b = t.scope || 'katavorio-drag-scope';
          for (var P in p) d[P] = p[P];
          for (var P in v) d[P] = v[P];
          var x = t.inputFilterSelector || 'input,textarea,select,button,option';
          (this.getInputFilterSelector = function() {
            return x;
          }), (this.setInputFilterSelector = function(t) {
            return (x = t), this;
          }), (this.draggable = function(e, n) {
            var i = [];
            return y(
              e,
              function(e) {
                if (null != (e = w(e)))
                  if (null == e._katavorioDrag) {
                    var o = c(n);
                    (e._katavorioDrag = new j(e, o, d, b)), l(
                      e._katavorioDrag,
                      this._dragsByScope,
                    ), i.push(e._katavorioDrag), t.addClass(e, d.draggable);
                  } else h(e._katavorioDrag, n);
              }.bind(this),
            ), i;
          }), (this.droppable = function(e, n) {
            var i = [];
            return y(
              e,
              function(e) {
                if (null != (e = w(e))) {
                  var o = new S(e, c(n), d, b);
                  (e._katavorioDrop = e._katavorioDrop || []), e._katavorioDrop.push(
                    o,
                  ), l(o, this._dropsByScope), i.push(o), t.addClass(e, d.droppable);
                }
              }.bind(this),
            ), i;
          }), (this.select = function(e) {
            return y(e, function() {
              var e = w(this);
              e &&
                e._katavorioDrag &&
                (r[e._katavorio] ||
                  (
                    s.push(e._katavorioDrag),
                    (r[e._katavorio] = [e, s.length - 1]),
                    t.addClass(e, d.selected)
                  ));
            }), this;
          }), (this.deselect = function(e) {
            return y(e, function() {
              var e = w(this);
              if (e && e._katavorio && r[e._katavorio]) {
                for (var n = [], i = 0; i < s.length; i++) s[i].el !== e && n.push(s[i]);
                (s = n), delete r[e._katavorio], t.removeClass(e, d.selected);
              }
            }), this;
          }), (this.deselectAll = function() {
            for (var e in r) {
              var n = r[e];
              t.removeClass(n[0], d.selected);
            }
            (s.length = 0), (r = {});
          }), (this.markSelection = function(t) {
            m(
              s,
              function(t) {
                t.mark();
              },
              t,
            );
          }), (this.markPosses = function(t) {
            t.posses &&
              y(t.posses, function(e) {
                t.posseRoles[e] &&
                  D[e] &&
                  m(
                    D[e].members,
                    function(t) {
                      t.mark();
                    },
                    t,
                  );
              });
          }), (this.unmarkSelection = function(t, e) {
            m(
              s,
              function(t) {
                t.unmark(e);
              },
              t,
            );
          }), (this.unmarkPosses = function(t, e) {
            t.posses &&
              y(t.posses, function(n) {
                t.posseRoles[n] &&
                  D[n] &&
                  m(
                    D[n].members,
                    function(t) {
                      t.unmark(e, !0);
                    },
                    t,
                  );
              });
          }), (this.getSelection = function() {
            return s.slice(0);
          }), (this.updateSelection = function(t, e, n) {
            m(
              s,
              function(n) {
                n.moveBy(t, e);
              },
              n,
            );
          });
          var _ = function(t, e) {
            e.posses &&
              y(e.posses, function(n) {
                e.posseRoles[n] &&
                  D[n] &&
                  m(
                    D[n].members,
                    function(e) {
                      t(e);
                    },
                    e,
                  );
              });
          };
          (this.updatePosses = function(t, e, n) {
            _(function(n) {
              n.moveBy(t, e);
            }, n);
          }), (this.notifyPosseDragStop = function(t, e) {
            _(function(t) {
              t.stop(e, !0);
            }, t);
          }), (this.notifySelectionDragStop = function(t, e) {
            m(
              s,
              function(t) {
                t.stop(e, !0);
              },
              t,
            );
          }), (this.notifySelectionDragStart = function(t, e) {
            m(
              s,
              function(t) {
                t.notifyStart(e);
              },
              t,
            );
          }), (this.setZoom = function(t) {
            a = t;
          }), (this.getZoom = function() {
            return a;
          });
          var E = function(t, e, n, i) {
            y(t, function(t) {
              u(t, n), t[i](e), l(t, n);
            });
          };
          y(
            ['set', 'add', 'remove', 'toggle'],
            function(t) {
              (this[t + 'Scope'] = function(e, n) {
                E(e._katavorioDrag, n, this._dragsByScope, t + 'Scope'), E(
                  e._katavorioDrop,
                  n,
                  this._dropsByScope,
                  t + 'Scope',
                );
              }.bind(this)), (this[t + 'DragScope'] = function(e, n) {
                E(
                  e.constructor === j ? e : e._katavorioDrag,
                  n,
                  this._dragsByScope,
                  t + 'Scope',
                );
              }.bind(this)), (this[t + 'DropScope'] = function(e, n) {
                E(
                  e.constructor === S ? e : e._katavorioDrop,
                  n,
                  this._dropsByScope,
                  t + 'Scope',
                );
              }.bind(this));
            }.bind(this),
          ), (this.snapToGrid = function(t, e) {
            for (var n in this._dragsByScope)
              m(this._dragsByScope[n], function(n) {
                n.snap(t, e);
              });
          }), (this.getDragsForScope = function(t) {
            return this._dragsByScope[t];
          }), (this.getDropsForScope = function(t) {
            return this._dropsByScope[t];
          });
          var C = function(t, e, n) {
            if (((t = w(t)), t[e])) {
              var i = s.indexOf(t[e]);
              i >= 0 && s.splice(i, 1), u(t[e], n) &&
                y(t[e], function(t) {
                  t.destroy();
                }), delete t[e];
            }
          };
          (this.elementRemoved = function(t) {
            this.destroyDraggable(t), this.destroyDroppable(t);
          }), (this.destroyDraggable = function(t) {
            C(t, '_katavorioDrag', this._dragsByScope);
          }), (this.destroyDroppable = function(t) {
            C(t, '_katavorioDrop', this._dropsByScope);
          }), (this.reset = function() {
            (this._dragsByScope = {}), (this._dropsByScope = {}), (s = []), (r = {}), (D = {});
          });
          var D = {},
            A = function(t, n, i) {
              var s = o(n) ? n : n.id,
                r = !!o(n) || !1 !== n.active,
                a =
                  D[s] ||
                  (function() {
                    var t = { name: s, members: [] };
                    return (D[s] = t), t;
                  })();
              return y(t, function(t) {
                if (t._katavorioDrag) {
                  if (i && null != t._katavorioDrag.posseRoles[a.name]) return;
                  e(a.members, t._katavorioDrag), e(
                    t._katavorioDrag.posses,
                    a.name,
                  ), (t._katavorioDrag.posseRoles[a.name] = r);
                }
              }), a;
            };
          (this.addToPosse = function(t, e) {
            for (var n = [], i = 1; i < arguments.length; i++) n.push(A(t, arguments[i]));
            return 1 == n.length ? n[0] : n;
          }), (this.setPosse = function(t, e) {
            for (var n = [], o = 1; o < arguments.length; o++)
              n.push(A(t, arguments[o], !0).name);
            return y(
              t,
              function(t) {
                if (t._katavorioDrag) {
                  var e = i(t._katavorioDrag.posses, n),
                    o = [];
                  Array.prototype.push.apply(o, t._katavorioDrag.posses);
                  for (var s = 0; s < e.length; s++) this.removeFromPosse(t, e[s]);
                }
              }.bind(this),
            ), 1 == n.length ? n[0] : n;
          }), (this.removeFromPosse = function(t, e) {
            if (arguments.length < 2)
              throw new TypeError('No posse id provided for remove operation');
            for (var i = 1; i < arguments.length; i++)
              (e = arguments[i]), y(t, function(t) {
                if (t._katavorioDrag && t._katavorioDrag.posses) {
                  var i = t._katavorioDrag;
                  y(e, function(t) {
                    n(D[t].members, i), n(i.posses, t), delete i.posseRoles[t];
                  });
                }
              });
          }), (this.removeFromAllPosses = function(t) {
            y(t, function(t) {
              if (t._katavorioDrag && t._katavorioDrag.posses) {
                var e = t._katavorioDrag;
                y(e.posses, function(t) {
                  n(D[t].members, e);
                }), (e.posses.length = 0), (e.posseRoles = {});
              }
            });
          }), (this.setPosseState = function(t, e, n) {
            var i = D[e];
            i &&
              y(t, function(t) {
                t._katavorioDrag &&
                  t._katavorioDrag.posses &&
                  (t._katavorioDrag.posseRoles[i.name] = n);
              });
          });
        };
      }.call('undefined' != typeof window ? window : this), function() {
        var t = function(t) {
            return '[object Array]' === Object.prototype.toString.call(t);
          },
          n = function(t) {
            return '[object Number]' === Object.prototype.toString.call(t);
          },
          i = function(t) {
            return 'string' == typeof t;
          },
          o = function(t) {
            return 'boolean' == typeof t;
          },
          s = function(t) {
            return null == t;
          },
          r = function(t) {
            return null != t && '[object Object]' === Object.prototype.toString.call(t);
          },
          a = function(t) {
            return '[object Date]' === Object.prototype.toString.call(t);
          },
          l = function(t) {
            return '[object Function]' === Object.prototype.toString.call(t);
          },
          u = function(t) {
            for (var e in t) if (t.hasOwnProperty(e)) return !1;
            return !0;
          },
          c = this;
        (c.jsPlumbUtil = {
          isArray: t,
          isString: i,
          isBoolean: o,
          isNull: s,
          isObject: r,
          isDate: a,
          isFunction: l,
          isEmpty: u,
          isNumber: n,
          clone: function(e) {
            if (i(e)) return '' + e;
            if (o(e)) return !!e;
            if (a(e)) return new Date(e.getTime());
            if (l(e)) return e;
            if (t(e)) {
              for (var n = [], s = 0; s < e.length; s++) n.push(this.clone(e[s]));
              return n;
            }
            if (r(e)) {
              var u = {};
              for (var c in e) u[c] = this.clone(e[c]);
              return u;
            }
            return e;
          },
          merge: function(e, n, s) {
            var a,
              l,
              u = {};
            for (s = s || [], l = 0; l < s.length; l++) u[s[l]] = !0;
            var c = this.clone(e);
            for (l in n)
              if (null == c[l]) c[l] = n[l];
              else if (i(n[l]) || o(n[l]))
                u[l]
                  ? (
                      (a = []),
                      a.push.apply(a, t(c[l]) ? c[l] : [c[l]]),
                      a.push.apply(a, t(n[l]) ? n[l] : [n[l]]),
                      (c[l] = a)
                    )
                  : (c[l] = n[l]);
              else if (t(n[l]))
                (a = []), t(c[l]) && a.push.apply(a, c[l]), a.push.apply(a, n[l]), (c[
                  l
                ] = a);
              else if (r(n[l])) {
                r(c[l]) || (c[l] = {});
                for (var h in n[l]) c[l][h] = n[l][h];
              }
            return c;
          },
          replace: function(t, e, n) {
            if (null != t) {
              var i = t,
                o = i;
              return e.replace(/([^\.])+/g, function(t, e, i, s) {
                var r = t.match(/([^\[0-9]+){1}(\[)([0-9+])/),
                  a = i + t.length >= s.length,
                  l = function() {
                    return (
                      o[r[1]] ||
                      (function() {
                        return (o[r[1]] = []), o[r[1]];
                      })()
                    );
                  };
                if (a) r ? (l()[r[3]] = n) : (o[t] = n);
                else if (r) {
                  var u = l();
                  o =
                    u[r[3]] ||
                    (function() {
                      return (u[r[3]] = {}), u[r[3]];
                    })();
                } else
                  o =
                    o[t] ||
                    (function() {
                      return (o[t] = {}), o[t];
                    })();
              }), t;
            }
          },
          functionChain: function(t, e, n) {
            for (var i = 0; i < n.length; i++) {
              var o = n[i][0][n[i][1]].apply(n[i][0], n[i][2]);
              if (o === e) return o;
            }
            return t;
          },
          populate: function(e, n, o) {
            var s = function(t) {
                var e = t.match(/(\${.*?})/g);
                if (null != e)
                  for (var i = 0; i < e.length; i++) {
                    var o = n[e[i].substring(2, e[i].length - 1)] || '';
                    null != o && (t = t.replace(e[i], o));
                  }
                return t;
              },
              a = function(e) {
                if (null != e) {
                  if (i(e)) return s(e);
                  if (!l(e) || (null != o && 0 !== (e.name || '').indexOf(o))) {
                    if (t(e)) {
                      for (var u = [], c = 0; c < e.length; c++) u.push(a(e[c]));
                      return u;
                    }
                    if (r(e)) {
                      var h = {};
                      for (var d in e) h[d] = a(e[d]);
                      return h;
                    }
                    return e;
                  }
                  return e(n);
                }
              };
            return a(e);
          },
          findWithFunction: function(t, e) {
            if (t) for (var n = 0; n < t.length; n++) if (e(t[n])) return n;
            return -1;
          },
          removeWithFunction: function(t, e) {
            var n = c.jsPlumbUtil.findWithFunction(t, e);
            return n > -1 && t.splice(n, 1), -1 != n;
          },
          remove: function(t, e) {
            var n = t.indexOf(e);
            return n > -1 && t.splice(n, 1), -1 != n;
          },
          addWithFunction: function(t, e, n) {
            -1 == c.jsPlumbUtil.findWithFunction(t, n) && t.push(e);
          },
          addToList: function(t, e, n, i) {
            var o = t[e];
            return null == o && ((o = []), (t[e] = o)), o[i ? 'unshift' : 'push'](n), o;
          },
          suggest: function(t, e, n) {
            return -1 === t.indexOf(e) && (n ? t.unshift(e) : t.push(e), !0);
          },
          extend: function(e, n, i) {
            var o;
            for (n = t(n) ? n : [n], o = 0; o < n.length; o++)
              for (var s in n[o].prototype)
                n[o].prototype.hasOwnProperty(s) && (e.prototype[s] = n[o].prototype[s]);
            var r = function(t, e) {
              return function() {
                for (o = 0; o < n.length; o++)
                  n[o].prototype[t] && n[o].prototype[t].apply(this, arguments);
                return e.apply(this, arguments);
              };
            };
            if (arguments.length > 2)
              for (o = 2; o < arguments.length; o++)
                !(function(t) {
                  for (var n in t) e.prototype[n] = r(n, t[n]);
                })(arguments[o]);
            return e;
          },
          uuid: function() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(t) {
              var e = (16 * Math.random()) | 0;
              return ('x' == t ? e : (3 & e) | 8).toString(16);
            });
          },
          logEnabled: !0,
          log: function() {
            if (c.jsPlumbUtil.logEnabled && 'undefined' != typeof console)
              try {
                var t = arguments[arguments.length - 1];
                console.log(t);
              } catch (t) {}
          },
          wrap: function(t, e, n) {
            return (t = t || function() {}), (e = e || function() {}), function() {
              var i = null;
              try {
                i = e.apply(this, arguments);
              } catch (t) {
                c.jsPlumbUtil.log('jsPlumb function failed : ' + t);
              }
              if (null == n || i !== n)
                try {
                  i = t.apply(this, arguments);
                } catch (t) {
                  c.jsPlumbUtil.log('wrapped function failed : ' + t);
                }
              return i;
            };
          },
        }), (c.jsPlumbUtil.EventGenerator = function() {
          var t = {},
            e = !1,
            n = { ready: !0 };
          (this.bind = function(e, n, i) {
            var o = function(e) {
              c.jsPlumbUtil.addToList(t, e, n, i), (n.__jsPlumb =
                n.__jsPlumb || {}), (n.__jsPlumb[c.jsPlumbUtil.uuid()] = e);
            };
            if ('string' == typeof e) o(e);
            else if (null != e.length) for (var s = 0; s < e.length; s++) o(e[s]);
            return this;
          }), (this.fire = function(i, o, s) {
            if (!e && t[i]) {
              var r = t[i].length,
                a = 0,
                l = !1,
                u = null;
              if (!this.shouldFireEvent || this.shouldFireEvent(i, o, s))
                for (; !l && a < r && !1 !== u; ) {
                  if (n[i]) t[i][a].apply(this, [o, s]);
                  else
                    try {
                      u = t[i][a].apply(this, [o, s]);
                    } catch (t) {
                      c.jsPlumbUtil.log(
                        'jsPlumb: fire failed for event ' + i + ' : ' + t,
                      );
                    }
                  a++, (null != t && null != t[i]) || (l = !0);
                }
            }
            return this;
          }), (this.unbind = function(e, n) {
            if (0 === arguments.length) t = {};
            else if (1 === arguments.length) {
              if ('string' == typeof e) delete t[e];
              else if (e.__jsPlumb) {
                var i;
                for (var o in e.__jsPlumb)
                  (i = e.__jsPlumb[o]), c.jsPlumbUtil.remove(t[i] || [], e);
              }
            } else 2 === arguments.length && c.jsPlumbUtil.remove(t[e] || [], n);
            return this;
          }), (this.getListener = function(e) {
            return t[e];
          }), (this.setSuspendEvents = function(t) {
            e = t;
          }), (this.isSuspendEvents = function() {
            return e;
          }), (this.silently = function(t) {
            this.setSuspendEvents(!0);
            try {
              t();
            } catch (t) {
              c.jsPlumbUtil.log('Cannot execute silent function ' + t);
            }
            this.setSuspendEvents(!1);
          }), (this.cleanupListeners = function() {
            for (var e in t) t[e] = null;
          });
        }), (c.jsPlumbUtil.EventGenerator.prototype = {
          cleanup: function() {
            this.cleanupListeners();
          },
        }), (e.jsPlumbUtil = c.jsPlumbUtil);
      }.call('undefined' != typeof window ? window : this), function() {
        'use strict';
        var t = this,
          e = t.jsPlumbUtil;
        (e.matchesSelector = function(t, e, n) {
          n = n || t.parentNode;
          for (var i = n.querySelectorAll(e), o = 0; o < i.length; o++)
            if (i[o] === t) return !0;
          return !1;
        }), (e.consume = function(t, e) {
          t.stopPropagation ? t.stopPropagation() : (t.returnValue = !1), !e &&
            t.preventDefault &&
            t.preventDefault();
        }), (e.sizeElement = function(t, e, n, i, o) {
          t &&
            (
              (t.style.height = o + 'px'),
              (t.height = o),
              (t.style.width = i + 'px'),
              (t.width = i),
              (t.style.left = e + 'px'),
              (t.style.top = n + 'px')
            );
        });
      }.call('undefined' != typeof window ? window : this), function() {
        'use strict';
        var n,
          s = this,
          r = [],
          a = s.jsPlumbUtil,
          l = function() {
            return '' + new Date().getTime();
          },
          u = function(t) {
            if (t._jsPlumb.paintStyle && t._jsPlumb.hoverPaintStyle) {
              var e = {};
              x.extend(e, t._jsPlumb.paintStyle), x.extend(
                e,
                t._jsPlumb.hoverPaintStyle,
              ), delete t._jsPlumb.hoverPaintStyle, e.gradient &&
                t._jsPlumb.paintStyle.fill &&
                delete e.gradient, (t._jsPlumb.hoverPaintStyle = e);
            }
          },
          c = [
            'tap',
            'dbltap',
            'click',
            'dblclick',
            'mouseover',
            'mouseout',
            'mousemove',
            'mousedown',
            'mouseup',
            'contextmenu',
          ],
          h = function(t, e, n, i) {
            var o = t.getAttachedElements();
            if (o)
              for (var s = 0, r = o.length; s < r; s++)
                (i && i == o[s]) || o[s].setHover(e, !0, n);
          },
          d = function(t) {
            return null == t ? null : t.split(' ');
          },
          p = function(t, e, n) {
            for (var i in e) t[i] = n;
          },
          f = function(t, e) {
            e = a.isArray(e) || (null != e.length && !a.isString(e)) ? e : [e];
            for (var n = 0; n < e.length; n++)
              try {
                t.apply(e[n], [e[n]]);
              } catch (t) {
                a.log('.each iteration failed : ' + t);
              }
          },
          g = function(t, e, n) {
            if (t.getDefaultType) {
              var i = t.getTypeDescriptor(),
                o = {},
                s = t.getDefaultType(),
                r = a.merge({}, s);
              p(o, s, '__default');
              for (var l = 0, u = t._jsPlumb.types.length; l < u; l++) {
                var c = t._jsPlumb.types[l];
                if ('__default' !== c) {
                  var h = t._jsPlumb.instance.getType(c, i);
                  null != h && ((r = a.merge(r, h, ['cssClass'])), p(o, h, c));
                }
              }
              e && (r = a.populate(r, e, '_')), t.applyType(r, n, o), n || t.repaint();
            }
          },
          v = (s.jsPlumbUIComponent = function(t) {
            a.EventGenerator.apply(this, arguments);
            var e = this,
              n = arguments,
              i = e.idPrefix,
              o = i + new Date().getTime();
            (this._jsPlumb = {
              instance: t._jsPlumb,
              parameters: t.parameters || {},
              paintStyle: null,
              hoverPaintStyle: null,
              paintStyleInUse: null,
              hover: !1,
              beforeDetach: t.beforeDetach,
              beforeDrop: t.beforeDrop,
              overlayPlacements: [],
              hoverClass: t.hoverClass || t._jsPlumb.Defaults.HoverClass,
              types: [],
              typeCache: {},
            }), (this.cacheTypeItem = function(t, e, n) {
              (this._jsPlumb.typeCache[n] =
                this._jsPlumb.typeCache[n] || {}), (this._jsPlumb.typeCache[n][t] = e);
            }), (this.getCachedTypeItem = function(t, e) {
              return this._jsPlumb.typeCache[e] ? this._jsPlumb.typeCache[e][t] : null;
            }), (this.getId = function() {
              return o;
            });
            var s = t.overlays || [],
              r = {};
            if (this.defaultOverlayKeys) {
              for (var l = 0; l < this.defaultOverlayKeys.length; l++)
                Array.prototype.push.apply(
                  s,
                  this._jsPlumb.instance.Defaults[this.defaultOverlayKeys[l]] || [],
                );
              for (l = 0; l < s.length; l++) {
                var u = x.convertToFullOverlaySpec(s[l]);
                r[u[1].id] = u;
              }
            }
            var c = {
              overlays: r,
              parameters: t.parameters || {},
              scope: t.scope || this._jsPlumb.instance.getDefaultScope(),
            };
            if (
              (
                (this.getDefaultType = function() {
                  return c;
                }),
                (this.appendToDefaultType = function(t) {
                  for (var e in t) c[e] = t[e];
                }),
                t.events
              )
            )
              for (l in t.events) e.bind(l, t.events[l]);
            (this.clone = function() {
              var t = Object.create(this.constructor.prototype);
              return this.constructor.apply(t, n), t;
            }.bind(this)), (this.isDetachAllowed = function(t) {
              var e = !0;
              if (this._jsPlumb.beforeDetach)
                try {
                  e = this._jsPlumb.beforeDetach(t);
                } catch (t) {
                  a.log('jsPlumb: beforeDetach callback failed', t);
                }
              return e;
            }), (this.isDropAllowed = function(t, e, n, i, o, s, r) {
              var l = this._jsPlumb.instance.checkCondition('beforeDrop', {
                sourceId: t,
                targetId: e,
                scope: n,
                connection: i,
                dropEndpoint: o,
                source: s,
                target: r,
              });
              if (this._jsPlumb.beforeDrop)
                try {
                  l = this._jsPlumb.beforeDrop({
                    sourceId: t,
                    targetId: e,
                    scope: n,
                    connection: i,
                    dropEndpoint: o,
                    source: s,
                    target: r,
                  });
                } catch (t) {
                  a.log('jsPlumb: beforeDrop callback failed', t);
                }
              return l;
            });
            var h = [];
            this.setListenerComponent = function(t) {
              for (var e = 0; e < h.length; e++) h[e][3] = t;
            };
          }),
          m = function(t, e) {
            var n = t._jsPlumb.types[e],
              i = t._jsPlumb.instance.getType(n, t.getTypeDescriptor());
            null != i &&
              i.cssClass &&
              t.canvas &&
              t._jsPlumb.instance.removeClass(t.canvas, i.cssClass);
          };
        a.extend(s.jsPlumbUIComponent, a.EventGenerator, {
          getParameter: function(t) {
            return this._jsPlumb.parameters[t];
          },
          setParameter: function(t, e) {
            this._jsPlumb.parameters[t] = e;
          },
          getParameters: function() {
            return this._jsPlumb.parameters;
          },
          setParameters: function(t) {
            this._jsPlumb.parameters = t;
          },
          getClass: function() {
            return x.getClass(this.canvas);
          },
          hasClass: function(t) {
            return x.hasClass(this.canvas, t);
          },
          addClass: function(t) {
            x.addClass(this.canvas, t);
          },
          removeClass: function(t) {
            x.removeClass(this.canvas, t);
          },
          updateClasses: function(t, e) {
            x.updateClasses(this.canvas, t, e);
          },
          setType: function(t, e, n) {
            this.clearTypes(), (this._jsPlumb.types = d(t) || []), g(this, e, n);
          },
          getType: function() {
            return this._jsPlumb.types;
          },
          reapplyTypes: function(t, e) {
            g(this, t, e);
          },
          hasType: function(t) {
            return -1 != this._jsPlumb.types.indexOf(t);
          },
          addType: function(t, e, n) {
            var i = d(t),
              o = !1;
            if (null != i) {
              for (var s = 0, r = i.length; s < r; s++)
                this.hasType(i[s]) || (this._jsPlumb.types.push(i[s]), (o = !0));
              o && g(this, e, n);
            }
          },
          removeType: function(t, e, n) {
            var i = d(t),
              o = !1,
              s = function(t) {
                var e = this._jsPlumb.types.indexOf(t);
                return -1 != e && (m(this, e), this._jsPlumb.types.splice(e, 1), !0);
              }.bind(this);
            if (null != i) {
              for (var r = 0, a = i.length; r < a; r++) o = s(i[r]) || o;
              o && g(this, e, n);
            }
          },
          clearTypes: function(t, e) {
            for (var n = this._jsPlumb.types.length, i = 0; i < n; i++)
              m(this, 0), this._jsPlumb.types.splice(0, 1);
            g(this, t, e);
          },
          toggleType: function(t, e, n) {
            var i = d(t);
            if (null != i) {
              for (var o = 0, s = i.length; o < s; o++) {
                var r = this._jsPlumb.types.indexOf(i[o]);
                -1 != r
                  ? (m(this, r), this._jsPlumb.types.splice(r, 1))
                  : this._jsPlumb.types.push(i[o]);
              }
              g(this, e, n);
            }
          },
          applyType: function(t, e) {
            if (
              (
                this.setPaintStyle(t.paintStyle, e),
                this.setHoverPaintStyle(t.hoverPaintStyle, e),
                t.parameters
              )
            )
              for (var n in t.parameters) this.setParameter(n, t.parameters[n]);
            this._jsPlumb.paintStyleInUse = this.getPaintStyle();
          },
          setPaintStyle: function(t, e) {
            (this._jsPlumb.paintStyle = t), (this._jsPlumb.paintStyleInUse = this._jsPlumb.paintStyle), u(
              this,
            ), e || this.repaint();
          },
          getPaintStyle: function() {
            return this._jsPlumb.paintStyle;
          },
          setHoverPaintStyle: function(t, e) {
            (this._jsPlumb.hoverPaintStyle = t), u(this), e || this.repaint();
          },
          getHoverPaintStyle: function() {
            return this._jsPlumb.hoverPaintStyle;
          },
          destroy: function(t) {
            (t || null == this.typeId) &&
              (this.cleanupListeners(), (this.clone = null), (this._jsPlumb = null));
          },
          isHover: function() {
            return this._jsPlumb.hover;
          },
          setHover: function(t, e, n) {
            if (
              this._jsPlumb &&
              !this._jsPlumb.instance.currentlyDragging &&
              !this._jsPlumb.instance.isHoverSuspended()
            ) {
              if (((this._jsPlumb.hover = t), null != this.canvas)) {
                if (null != this._jsPlumb.instance.hoverClass) {
                  var i = t ? 'addClass' : 'removeClass';
                  this._jsPlumb.instance[i](
                    this.canvas,
                    this._jsPlumb.instance.hoverClass,
                  );
                }
                null != this._jsPlumb.hoverClass &&
                  this._jsPlumb.instance[i](this.canvas, this._jsPlumb.hoverClass);
              }
              null != this._jsPlumb.hoverPaintStyle &&
                (
                  (this._jsPlumb.paintStyleInUse = t
                    ? this._jsPlumb.hoverPaintStyle
                    : this._jsPlumb.paintStyle),
                  this._jsPlumb.instance.isSuspendDrawing() ||
                    ((n = n || l()), this.repaint({ timestamp: n, recalc: !1 }))
                ), this.getAttachedElements && !e && h(this, t, l(), this);
            }
          },
        });
        var b = 0,
          y = function() {
            var t = b + 1;
            return b++, t;
          },
          P = (s.jsPlumbInstance = function(t) {
            t &&
              x.extend(
                this.Defaults,
                t,
              ), (this.logEnabled = this.Defaults.LogEnabled), (this._connectionTypes = {}), (this._endpointTypes = {}), a.EventGenerator.apply(
              this,
            );
            var e = this,
              i = y(),
              o = e.bind,
              u = {},
              h = 1,
              d = function(t) {
                if (null == t) return null;
                if (3 == t.nodeType || 8 == t.nodeType) return { el: t, text: !0 };
                var n = e.getElement(t);
                return { el: n, id: a.isString(t) && null == n ? t : K(n) };
              };
            (this.getInstanceIndex = function() {
              return i;
            }), (this.setZoom = function(t, n) {
              return (h = t), e.fire('zoom', h), n && e.repaintEverything(), !0;
            }), (this.getZoom = function() {
              return h;
            });
            for (var p in this.Defaults) u[p] = this.Defaults[p];
            var g,
              m = [];
            (this.unbindContainer = function() {
              if (null != g && m.length > 0)
                for (var t = 0; t < m.length; t++) e.off(g, m[t][0], m[t][1]);
            }), (this.setContainer = function(t) {
              this.unbindContainer(), (t = this.getElement(
                t,
              )), this.select().each(function(e) {
                e.moveParent(t);
              }), this.selectEndpoints().each(function(e) {
                e.moveParent(t);
              });
              var n = g;
              (g = t), (m.length = 0);
              for (
                var i = {
                    endpointclick: 'endpointClick',
                    endpointdblclick: 'endpointDblClick',
                  },
                  o = function(t, n, o) {
                    var s = n.srcElement || n.target,
                      r =
                        (s && s.parentNode ? s.parentNode._jsPlumb : null) ||
                        (s ? s._jsPlumb : null) ||
                        (s && s.parentNode && s.parentNode.parentNode
                          ? s.parentNode.parentNode._jsPlumb
                          : null);
                    if (r) {
                      r.fire(t, r, n);
                      var a = o ? i[o + t] || t : t;
                      e.fire(a, r.component || r, n);
                    }
                  },
                  s = function(t, n, i) {
                    m.push([t, i]), e.on(g, t, n, i);
                  },
                  r = 0;
                r < c.length;
                r++
              )
                !(function(t) {
                  s(t, '.jtk-connector', function(e) {
                    o(t, e);
                  }), s(t, '.jtk-endpoint', function(e) {
                    o(t, e, 'endpoint');
                  }), s(t, '.jtk-overlay', function(e) {
                    o(t, e);
                  });
                })(c[r]);
              for (var a in j) {
                var l = j[a].el;
                l.parentNode === n && (n.removeChild(l), g.appendChild(l));
              }
            }), (this.getContainer = function() {
              return g;
            }), (this.bind = function(t, n) {
              'ready' === t && P ? n() : o.apply(e, [t, n]);
            }), (e.importDefaults = function(t) {
              for (var n in t) e.Defaults[n] = t[n];
              return t.Container && e.setContainer(t.Container), e;
            }), (e.restoreDefaults = function() {
              return (e.Defaults = x.extend({}, u)), e;
            });
            var b = null,
              P = !1,
              _ = [],
              E = {},
              C = {},
              j = {},
              S = {},
              D = {},
              w = {},
              A = !1,
              O = [],
              I = !1,
              k = null,
              T = this.Defaults.Scope,
              M = 1,
              L = function() {
                return '' + M++;
              },
              N = function(t, e) {
                g
                  ? g.appendChild(t)
                  : e ? this.getElement(e).appendChild(t) : this.appendToRoot(t);
              }.bind(this),
              F = function(t, n, i, o) {
                if (!I) {
                  var s,
                    r = K(t),
                    a = e.getDragManager();
                  a && (s = a.getElementsForDraggable(r)), null == i && (i = l());
                  var u = mt({ elId: r, offset: n, recalc: !1, timestamp: i });
                  if (s)
                    for (var c in s)
                      mt({
                        elId: s[c].id,
                        offset: {
                          left: u.o.left + s[c].offset.left,
                          top: u.o.top + s[c].offset.top,
                        },
                        recalc: !1,
                        timestamp: i,
                      });
                  if ((e.anchorManager.redraw(r, n, i, null, o), s))
                    for (var h in s)
                      e.anchorManager.redraw(s[h].id, n, i, s[h].offset, o, !0);
                }
              },
              G = function(t) {
                return C[t];
              },
              R = function(t, n, i, o, s) {
                if (!x.headless && null != n && n && x.isDragSupported(t, e)) {
                  var r = i || e.Defaults.DragOptions;
                  if (((r = x.extend({}, r)), x.isAlreadyDraggable(t, e)))
                    i.force && e.initDraggable(t, r);
                  else {
                    var l = x.dragEvents.drag,
                      u = x.dragEvents.stop,
                      c = x.dragEvents.start,
                      h = !1;
                    vt(o, t), (r[c] = a.wrap(
                      r[c],
                      function() {
                        if (
                          (
                            e.setHoverSuspended(!0),
                            e
                              .select({ source: t })
                              .addClass(
                                e.elementDraggingClass +
                                  ' ' +
                                  e.sourceElementDraggingClass,
                                !0,
                              ),
                            e
                              .select({ target: t })
                              .addClass(
                                e.elementDraggingClass +
                                  ' ' +
                                  e.targetElementDraggingClass,
                                !0,
                              ),
                            e.setConnectionBeingDragged(!0),
                            r.canDrag
                          )
                        )
                          return i.canDrag();
                      },
                      !1,
                    )), (r[l] = a.wrap(r[l], function() {
                      var n = e.getUIPosition(arguments, e.getZoom());
                      null != n &&
                        (F(t, n, null, !0), h && e.addClass(t, 'jtk-dragged'), (h = !0));
                    })), (r[u] = a.wrap(r[u], function() {
                      for (var t, n = arguments[0].selection, i = 0; i < n.length; i++)
                        !(function(n) {
                          null != n[1] &&
                            (
                              (t = e.getUIPosition([
                                { el: n[2].el, pos: [n[1].left, n[1].top] },
                              ])),
                              F(n[2].el, t)
                            ), e.removeClass(n[0], 'jtk-dragged'), e
                            .select({ source: n[2].el })
                            .removeClass(
                              e.elementDraggingClass + ' ' + e.sourceElementDraggingClass,
                              !0,
                            ), e
                            .select({ target: n[2].el })
                            .removeClass(
                              e.elementDraggingClass + ' ' + e.targetElementDraggingClass,
                              !0,
                            ), e.getDragManager().dragEnded(n[2].el);
                        })(n[i]);
                      (h = !1), e.setHoverSuspended(!1), e.setConnectionBeingDragged(!1);
                    }));
                    var d = K(t);
                    w[d] = !0;
                    var p = w[d];
                    (r.disabled = null != p && !p), e.initDraggable(
                      t,
                      r,
                    ), e.getDragManager().register(t), s &&
                      e.fire('elementDraggable', { el: t, options: r });
                  }
                }
              },
              U = function(t, e) {
                for (
                  var n = t.scope.split(/\s/), i = e.scope.split(/\s/), o = 0;
                  o < n.length;
                  o++
                )
                  for (var s = 0; s < i.length; s++) if (i[s] == n[o]) return !0;
                return !1;
              },
              B = function(t, n) {
                var i = x.extend({}, t);
                if (
                  (
                    n && x.extend(i, n),
                    i.source &&
                      (i.source.endpoint
                        ? (i.sourceEndpoint = i.source)
                        : (i.source = e.getElement(i.source))),
                    i.target &&
                      (i.target.endpoint
                        ? (i.targetEndpoint = i.target)
                        : (i.target = e.getElement(i.target))),
                    t.uuids &&
                      (
                        (i.sourceEndpoint = G(t.uuids[0])),
                        (i.targetEndpoint = G(t.uuids[1]))
                      ),
                    i.sourceEndpoint && i.sourceEndpoint.isFull()
                  )
                )
                  return void a.log(
                    e,
                    'could not add connection; source endpoint is full',
                  );
                if (i.targetEndpoint && i.targetEndpoint.isFull())
                  return void a.log(
                    e,
                    'could not add connection; target endpoint is full',
                  );
                if (
                  (
                    !i.type &&
                      i.sourceEndpoint &&
                      (i.type = i.sourceEndpoint.connectionType),
                    i.sourceEndpoint && i.sourceEndpoint.connectorOverlays
                  )
                ) {
                  i.overlays = i.overlays || [];
                  for (
                    var o = 0, s = i.sourceEndpoint.connectorOverlays.length;
                    o < s;
                    o++
                  )
                    i.overlays.push(i.sourceEndpoint.connectorOverlays[o]);
                }
                i.sourceEndpoint &&
                  i.sourceEndpoint.scope &&
                  (i.scope = i.sourceEndpoint.scope), !i['pointer-events'] &&
                  i.sourceEndpoint &&
                  i.sourceEndpoint.connectorPointerEvents &&
                  (i['pointer-events'] = i.sourceEndpoint.connectorPointerEvents);
                var r = function(t, e) {
                    var n = x.extend({}, t);
                    for (var i in e) e[i] && (n[i] = e[i]);
                    return n;
                  },
                  l = function(t, n, o) {
                    return e.addEndpoint(
                      t,
                      r(n, {
                        anchor: i.anchors ? i.anchors[o] : i.anchor,
                        endpoint: i.endpoints ? i.endpoints[o] : i.endpoint,
                        paintStyle: i.endpointStyles
                          ? i.endpointStyles[o]
                          : i.endpointStyle,
                        hoverPaintStyle: i.endpointHoverStyles
                          ? i.endpointHoverStyles[o]
                          : i.endpointHoverStyle,
                      }),
                    );
                  },
                  u = function(t, e, n, o) {
                    if (
                      i[t] &&
                      !i[t].endpoint &&
                      !i[t + 'Endpoint'] &&
                      !i.newConnection
                    ) {
                      var s = K(i[t]),
                        r = n[s];
                      if ((r = r ? r[o] : null)) {
                        if (!r.enabled) return !1;
                        var a =
                          null != r.endpoint && r.endpoint._jsPlumb
                            ? r.endpoint
                            : l(i[t], r.def, e);
                        if (a.isFull()) return !1;
                        (i[t + 'Endpoint'] = a), !i.scope &&
                          r.def.scope &&
                          (i.scope =
                            r.def.scope), (a._doNotDeleteOnDetach = !1), (a._deleteOnDetach = !0), r.uniqueEndpoint &&
                          (r.endpoint
                            ? (a.finalEndpoint = r.endpoint)
                            : (
                                (r.endpoint = a),
                                (a._deleteOnDetach = !1),
                                (a._doNotDeleteOnDetach = !0)
                              ));
                      }
                    }
                  };
                return !1 !==
                  u('source', 0, this.sourceEndpointDefinitions, i.type || 'default') &&
                !1 !== u('target', 1, this.targetEndpointDefinitions, i.type || 'default')
                  ? (
                      i.sourceEndpoint &&
                        i.targetEndpoint &&
                        (U(i.sourceEndpoint, i.targetEndpoint) || (i = null)),
                      i
                    )
                  : void 0;
              }.bind(e),
              H = function(t) {
                var n = e.Defaults.ConnectionType || e.getDefaultConnectionType();
                (t._jsPlumb = e), (t.newConnection = H), (t.newEndpoint = X), (t.endpointsByUUID = C), (t.endpointsByElement = E), (t.finaliseConnection = Y), (t.id =
                  'con_' + L());
                var i = new n(t);
                return i.isDetachable() &&
                  (
                    i.endpoints[0].initDraggable('_jsPlumbSource'),
                    i.endpoints[1].initDraggable('_jsPlumbTarget')
                  ), i;
              },
              Y = (e.finaliseConnection = function(t, n, i, o) {
                if (
                  (
                    (n = n || {}),
                    t.suspendedEndpoint || _.push(t),
                    (t.pending = null),
                    (t.endpoints[0].isTemporarySource = !1),
                    !1 !== o && e.anchorManager.newConnection(t),
                    F(t.source),
                    !n.doNotFireConnectionEvent && !1 !== n.fireEvent
                  )
                ) {
                  var s = {
                    connection: t,
                    source: t.source,
                    target: t.target,
                    sourceId: t.sourceId,
                    targetId: t.targetId,
                    sourceEndpoint: t.endpoints[0],
                    targetEndpoint: t.endpoints[1],
                  };
                  e.fire('connection', s, i);
                }
              }),
              X = function(t, n) {
                var i = e.Defaults.EndpointType || x.Endpoint,
                  o = x.extend({}, t);
                (o._jsPlumb = e), (o.newConnection = H), (o.newEndpoint = X), (o.endpointsByUUID = C), (o.endpointsByElement = E), (o.fireDetachEvent = tt), (o.elementId =
                  n || K(o.source));
                var s = new i(o);
                return (s.id = 'ep_' + L()), vt(o.elementId, o.source), x.headless ||
                  e.getDragManager().endpointAdded(o.source, n), s;
              },
              W = function(t, e, n) {
                var i = E[t];
                if (i && i.length)
                  for (var o = 0, s = i.length; o < s; o++) {
                    for (var r = 0, a = i[o].connections.length; r < a; r++) {
                      var l = e(i[o].connections[r]);
                      if (l) return;
                    }
                    n && n(i[o]);
                  }
              },
              z = function(t, n) {
                return x.each(t, function(t) {
                  e.isDragSupported(t) &&
                    ((w[e.getAttribute(t, 'id')] = n), e.setElementDraggable(t, n));
                });
              },
              V = function(t, e, n) {
                e = 'block' === e;
                var i = null;
                n &&
                  (i = function(t) {
                    t.setVisible(e, !0, !0);
                  });
                var o = d(t);
                W(
                  o.id,
                  function(t) {
                    if (e && n) {
                      var i = t.sourceId === o.id ? 1 : 0;
                      t.endpoints[i].isVisible() && t.setVisible(!0);
                    } else t.setVisible(e);
                  },
                  i,
                );
              },
              q = function(t) {
                var n;
                return x.each(
                  t,
                  function(t) {
                    var i = e.getAttribute(t, 'id');
                    return (n = null != w[i] && w[i]), (n = !n), (w[
                      i
                    ] = n), e.setDraggable(t, n), n;
                  }.bind(this),
                ), n;
              },
              J = function(t, e) {
                var n = null;
                e &&
                  (n = function(t) {
                    var e = t.isVisible();
                    t.setVisible(!e);
                  }), W(
                  t,
                  function(t) {
                    var e = t.isVisible();
                    t.setVisible(!e);
                  },
                  n,
                );
              },
              Z = function(t) {
                var e = S[t];
                return e ? { o: e, s: O[t] } : mt({ elId: t });
              },
              K = function(t, n, o) {
                if (a.isString(t)) return t;
                if (null == t) return null;
                var s = e.getAttribute(t, 'id');
                return (s && 'undefined' !== s) ||
                  (
                    2 == arguments.length && void 0 !== arguments[1]
                      ? (s = n)
                      : (1 == arguments.length ||
                          (3 == arguments.length && !arguments[2])) &&
                        (s = 'jsPlumb_' + i + '_' + L()),
                    o || e.setAttribute(t, 'id', s)
                  ), s;
              };
            (this.setConnectionBeingDragged = function(t) {
              A = t;
            }), (this.isConnectionBeingDragged = function() {
              return A;
            }), (this.getManagedElements = function() {
              return j;
            }), (this.connectorClass = 'jtk-connector'), (this.connectorOutlineClass =
              'jtk-connector-outline'), (this.editableConnectorClass =
              'jtk-connector-editable'), (this.connectedClass =
              'jtk-connected'), (this.hoverClass = 'jtk-hover'), (this.endpointClass =
              'jtk-endpoint'), (this.endpointConnectedClass =
              'jtk-endpoint-connected'), (this.endpointFullClass =
              'jtk-endpoint-full'), (this.endpointDropAllowedClass =
              'jtk-endpoint-drop-allowed'), (this.endpointDropForbiddenClass =
              'jtk-endpoint-drop-forbidden'), (this.overlayClass =
              'jtk-overlay'), (this.draggingClass =
              'jtk-dragging'), (this.elementDraggingClass =
              'jtk-element-dragging'), (this.sourceElementDraggingClass =
              'jtk-source-element-dragging'), (this.targetElementDraggingClass =
              'jtk-target-element-dragging'), (this.endpointAnchorClassPrefix =
              'jtk-endpoint-anchor'), (this.hoverSourceClass =
              'jtk-source-hover'), (this.hoverTargetClass =
              'jtk-target-hover'), (this.dragSelectClass =
              'jtk-drag-select'), (this.Anchors = {}), (this.Connectors = {
              svg: {},
            }), (this.Endpoints = { svg: {} }), (this.Overlays = {
              svg: {},
            }), (this.ConnectorRenderers = {}), (this.SVG =
              'svg'), (this.addEndpoint = function(t, n, i) {
              i = i || {};
              var o = x.extend({}, i);
              x.extend(o, n), (o.endpoint =
                o.endpoint || e.Defaults.Endpoint), (o.paintStyle =
                o.paintStyle || e.Defaults.EndpointStyle);
              for (
                var s = [],
                  r = a.isArray(t) || (null != t.length && !a.isString(t)) ? t : [t],
                  l = 0,
                  u = r.length;
                l < u;
                l++
              ) {
                (o.source = e.getElement(r[l])), ft(o.source);
                var c = K(o.source),
                  h = X(o, c),
                  d = vt(c, o.source).info.o;
                a.addToList(E, c, h), I ||
                  h.paint({
                    anchorLoc: h.anchor.compute({
                      xy: [d.left, d.top],
                      wh: O[c],
                      element: h,
                      timestamp: k,
                    }),
                    timestamp: k,
                  }), s.push(h), (h._doNotDeleteOnDetach = !0);
              }
              return 1 == s.length ? s[0] : s;
            }), (this.addEndpoints = function(t, n, i) {
              for (var o = [], s = 0, r = n.length; s < r; s++) {
                var l = e.addEndpoint(t, n[s], i);
                a.isArray(l) ? Array.prototype.push.apply(o, l) : o.push(l);
              }
              return o;
            }), (this.animate = function(t, n, i) {
              if (!this.animationSupported) return !1;
              i = i || {};
              var o = e.getElement(t),
                s = K(o),
                r = x.animEvents.step,
                l = x.animEvents.complete;
              (i[r] = a.wrap(i[r], function() {
                e.revalidate(s);
              })), (i[l] = a.wrap(i[l], function() {
                e.revalidate(s);
              })), e.doAnimate(o, n, i);
            }), (this.checkCondition = function(t, n) {
              var i = e.getListener(t),
                o = !0;
              if (i && i.length > 0) {
                var s = Array.prototype.slice.call(arguments, 1);
                try {
                  for (var r = 0, l = i.length; r < l; r++) o = o && i[r].apply(i[r], s);
                } catch (n) {
                  a.log(e, 'cannot check condition [' + t + ']' + n);
                }
              }
              return o;
            }), (this.connect = function(t, e) {
              var n,
                i = B(t, e);
              if (i) {
                if (null == i.source && null == i.sourceEndpoint)
                  return void a.log(
                    'Cannot establish connection - source does not exist',
                  );
                if (null == i.target && null == i.targetEndpoint)
                  return void a.log(
                    'Cannot establish connection - target does not exist',
                  );
                ft(i.source), (n = H(i)), Y(n, i);
              }
              return n;
            });
            var $ = [
                { el: 'source', elId: 'sourceId', epDefs: 'sourceEndpointDefinitions' },
                { el: 'target', elId: 'targetId', epDefs: 'targetEndpointDefinitions' },
              ],
              Q = function(t, e, n, i) {
                var o,
                  s,
                  r,
                  a = $[n],
                  l = t[a.elId],
                  u = (t[a.el], t.endpoints[n]),
                  c = {
                    index: n,
                    originalSourceId: 0 === n ? l : t.sourceId,
                    newSourceId: t.sourceId,
                    originalTargetId: 1 == n ? l : t.targetId,
                    newTargetId: t.targetId,
                    connection: t,
                  };
                if (e.constructor == x.Endpoint)
                  (o = e), o.addConnection(t), (e = o.element);
                else if (((s = K(e)), (r = this[a.epDefs][s]), s === t[a.elId])) o = null;
                else if (r)
                  for (var h in r) {
                    if (!r[h].enabled) return;
                    (o =
                      null != r[h].endpoint && r[h].endpoint._jsPlumb
                        ? r[h].endpoint
                        : this.addEndpoint(e, r[h].def)), r[h].uniqueEndpoint &&
                      (r[
                        h
                      ].endpoint = o), (o._doNotDeleteOnDetach = !1), (o._deleteOnDetach = !0), o.addConnection(
                      t,
                    );
                  }
                else
                  (o = t.makeEndpoint(
                    0 === n,
                    e,
                    s,
                  )), (o._doNotDeleteOnDetach = !1), (o._deleteOnDetach = !0);
                return null != o &&
                  (
                    u.detachFromConnection(t),
                    (t.endpoints[n] = o),
                    (t[a.el] = o.element),
                    (t[a.elId] = o.elementId),
                    (c[0 === n ? 'newSourceId' : 'newTargetId'] = o.elementId),
                    et(c),
                    i || t.repaint()
                  ), (c.element = e), c;
              }.bind(this);
            (this.setSource = function(t, e, n) {
              var i = Q(t, e, 0, n);
              this.anchorManager.sourceChanged(
                i.originalSourceId,
                i.newSourceId,
                t,
                i.el,
              );
            }), (this.setTarget = function(t, e, n) {
              var i = Q(t, e, 1, n);
              this.anchorManager.updateOtherEndpoint(
                i.originalSourceId,
                i.originalTargetId,
                i.newTargetId,
                t,
              );
            }), (this.deleteEndpoint = function(t, n, i) {
              var o = 'string' == typeof t ? C[t] : t;
              return o &&
                e.deleteObject({
                  endpoint: o,
                  dontUpdateHover: n,
                  deleteAttachedObjects: i,
                }), e;
            }), (this.deleteEveryEndpoint = function() {
              var t = e.setSuspendDrawing(!0);
              for (var n in E) {
                var i = E[n];
                if (i && i.length)
                  for (var o = 0, s = i.length; o < s; o++) e.deleteEndpoint(i[o], !0);
              }
              return (E = {}), (j = {}), (C = {}), (S = {}), (D = {}), e.anchorManager.reset(), e
                .getDragManager()
                .reset(), t || e.setSuspendDrawing(!1), e;
            });
            var tt = function(t, n, i) {
                var o = e.Defaults.ConnectionType || e.getDefaultConnectionType(),
                  s = t.constructor == o,
                  r = s
                    ? {
                        connection: t,
                        source: t.source,
                        target: t.target,
                        sourceId: t.sourceId,
                        targetId: t.targetId,
                        sourceEndpoint: t.endpoints[0],
                        targetEndpoint: t.endpoints[1],
                      }
                    : t;
                n && e.fire('connectionDetached', r, i), e.fire(
                  'internal.connectionDetached',
                  r,
                  i,
                ), e.anchorManager.connectionDetached(r);
              },
              et = (e.fireMoveEvent = function(t, n) {
                e.fire('connectionMoved', t, n);
              });
            (this.unregisterEndpoint = function(t) {
              t._jsPlumb.uuid &&
                (C[t._jsPlumb.uuid] = null), e.anchorManager.deleteEndpoint(t);
              for (var n in E) {
                var i = E[n];
                if (i) {
                  for (var o = [], s = 0, r = i.length; s < r; s++)
                    i[s] != t && o.push(i[s]);
                  E[n] = o;
                }
                E[n].length < 1 && delete E[n];
              }
            }), (this.detach = function() {
              if (0 !== arguments.length) {
                var t = e.Defaults.ConnectionType || e.getDefaultConnectionType(),
                  n = arguments[0].constructor == t,
                  i = 2 == arguments.length && n ? arguments[1] || {} : arguments[0],
                  o = !1 !== i.fireEvent,
                  s = i.forceDetach,
                  r = n ? arguments[0] : i.connection,
                  l = n ? null : i.deleteAttachedObjects;
                if (r)
                  (s ||
                    a.functionChain(!0, !1, [
                      [r.endpoints[0], 'isDetachAllowed', [r]],
                      [r.endpoints[1], 'isDetachAllowed', [r]],
                      [r, 'isDetachAllowed', [r]],
                      [e, 'checkCondition', ['beforeDetach', r]],
                    ])) &&
                    r.endpoints[0].detach({
                      connection: r,
                      ignoreTarget: !1,
                      forceDetach: !0,
                      fireEvent: o,
                      deleteAttachedObjects: l,
                    });
                else {
                  var u = x.extend({}, i);
                  if (u.uuids) G(u.uuids[0]).detachFrom(G(u.uuids[1]), o);
                  else if (u.sourceEndpoint && u.targetEndpoint)
                    u.sourceEndpoint.detachFrom(u.targetEndpoint);
                  else {
                    var c = K(e.getElement(u.source)),
                      h = K(e.getElement(u.target));
                    W(c, function(t) {
                      ((t.sourceId == c && t.targetId == h) ||
                        (t.targetId == c && t.sourceId == h)) &&
                        e.checkCondition('beforeDetach', t) &&
                        t.endpoints[0].detach({
                          connection: t,
                          ignoreTarget: !1,
                          forceDetach: !0,
                          fireEvent: o,
                        });
                    });
                  }
                }
              }
            }), (this.detachAllConnections = function(t, n) {
              (n = n || {}), (t = e.getElement(t));
              var i = K(t),
                o = E[i];
              if (o && o.length)
                for (var s = 0, r = o.length; s < r; s++)
                  o[s].detachAll(!1 !== n.fireEvent, n.forceDetach);
              return e;
            }), (this.detachEveryConnection = function(t) {
              return (t = t || {}), e.batch(function() {
                for (var e in E) {
                  var n = E[e];
                  if (n && n.length)
                    for (var i = 0, o = n.length; i < o; i++)
                      n[i].detachAll(!1 !== t.fireEvent, t.forceDetach);
                }
                _.length = 0;
              }), e;
            }), (this.deleteObject = function(t) {
              var n = {
                  endpoints: {},
                  connections: {},
                  endpointCount: 0,
                  connectionCount: 0,
                },
                i = (t.fireEvent, !1 !== t.deleteAttachedObjects),
                o = function(e) {
                  if (
                    null != e &&
                    null == n.connections[e.id] &&
                    (
                      t.dontUpdateHover || null == e._jsPlumb || e.setHover(!1),
                      (n.connections[e.id] = e),
                      n.connectionCount++,
                      i
                    )
                  )
                    for (var o = 0; o < e.endpoints.length; o++)
                      e.endpoints[o]._deleteOnDetach && s(e.endpoints[o]);
                },
                s = function(e) {
                  if (
                    null != e &&
                    null == n.endpoints[e.id] &&
                    (
                      t.dontUpdateHover || null == e._jsPlumb || e.setHover(!1),
                      (n.endpoints[e.id] = e),
                      n.endpointCount++,
                      i
                    )
                  )
                    for (var s = 0; s < e.connections.length; s++) {
                      var r = e.connections[s];
                      o(r);
                    }
                };
              t.connection ? o(t.connection) : s(t.endpoint);
              for (var r in n.connections) {
                var l = n.connections[r];
                if (l._jsPlumb) {
                  a.removeWithFunction(_, function(t) {
                    return l.id == t.id;
                  }), tt(l, !1 !== t.fireEvent && !l.pending, t.originalEvent);
                  var u =
                    null == t.deleteAttachedObjects ? null : !t.deleteAttachedObjects;
                  l.endpoints[0].detachFromConnection(
                    l,
                    null,
                    u,
                  ), l.endpoints[1].detachFromConnection(l, null, u), l.cleanup(
                    !0,
                  ), l.destroy(!0);
                }
              }
              for (var c in n.endpoints) {
                var h = n.endpoints[c];
                h._jsPlumb && (e.unregisterEndpoint(h), h.cleanup(!0), h.destroy(!0));
              }
              return n;
            }), (this.draggable = function(t, n) {
              var i;
              return f(function(t) {
                (i = d(t)), i.el && R(i.el, !0, n, i.id, !0);
              }, t), e;
            }), (this.droppable = function(t, n) {
              var i;
              return (n = n || {}), (n.allowLoopback = !1), f(function(t) {
                (i = d(t)), i.el && e.initDroppable(i.el, n);
              }, t), e;
            });
            var nt = function(t, e, n, i) {
                for (var o = 0, s = t.length; o < s; o++) t[o][e].apply(t[o], n);
                return i(t);
              },
              it = function(t, e, n) {
                for (var i = [], o = 0, s = t.length; o < s; o++)
                  i.push([t[o][e].apply(t[o], n), t[o]]);
                return i;
              },
              ot = function(t, e, n) {
                return function() {
                  return nt(t, e, arguments, n);
                };
              },
              st = function(t, e) {
                return function() {
                  return it(t, e, arguments);
                };
              },
              rt = function(t, e) {
                var n = [];
                if (t)
                  if ('string' == typeof t) {
                    if ('*' === t) return t;
                    n.push(t);
                  } else if (e) n = t;
                  else if (t.length)
                    for (var i = 0, o = t.length; i < o; i++) n.push(d(t[i]).id);
                  else n.push(d(t).id);
                return n;
              },
              at = function(t, e, n) {
                return '*' === t || (t.length > 0 ? -1 != t.indexOf(e) : !n);
              };
            this.getConnections = function(t, n) {
              t ? t.constructor == String && (t = { scope: t }) : (t = {});
              for (
                var i = t.scope || e.getDefaultScope(),
                  o = rt(i, !0),
                  s = rt(t.source),
                  r = rt(t.target),
                  a = !n && o.length > 1 ? {} : [],
                  l = 0,
                  u = _.length;
                l < u;
                l++
              ) {
                var c = _[l],
                  h =
                    c.proxies && c.proxies[0]
                      ? c.proxies[0].originalEp.elementId
                      : c.sourceId,
                  d =
                    c.proxies && c.proxies[1]
                      ? c.proxies[1].originalEp.elementId
                      : c.targetId;
                at(o, c.scope) &&
                  at(s, h) &&
                  at(r, d) &&
                  (function(t, e) {
                    if (!n && o.length > 1) {
                      var i = a[t];
                      null == i && (i = a[t] = []), i.push(e);
                    } else a.push(e);
                  })(c.scope, c);
              }
              return a;
            };
            var lt = function(t, e) {
                return function(n) {
                  for (var i = 0, o = t.length; i < o; i++) n(t[i]);
                  return e(t);
                };
              },
              ut = function(t) {
                return function(e) {
                  return t[e];
                };
              },
              ct = function(t, e) {
                var n,
                  i,
                  o = { length: t.length, each: lt(t, e), get: ut(t) },
                  s = [
                    'setHover',
                    'removeAllOverlays',
                    'setLabel',
                    'addClass',
                    'addOverlay',
                    'removeOverlay',
                    'removeOverlays',
                    'showOverlay',
                    'hideOverlay',
                    'showOverlays',
                    'hideOverlays',
                    'setPaintStyle',
                    'setHoverPaintStyle',
                    'setSuspendEvents',
                    'setParameter',
                    'setParameters',
                    'setVisible',
                    'repaint',
                    'addType',
                    'toggleType',
                    'removeType',
                    'removeClass',
                    'setType',
                    'bind',
                    'unbind',
                  ],
                  r = [
                    'getLabel',
                    'getOverlay',
                    'isHover',
                    'getParameter',
                    'getParameters',
                    'getPaintStyle',
                    'getHoverPaintStyle',
                    'isVisible',
                    'hasType',
                    'getType',
                    'isSuspendEvents',
                  ];
                for (n = 0, i = s.length; n < i; n++) o[s[n]] = ot(t, s[n], e);
                for (n = 0, i = r.length; n < i; n++) o[r[n]] = st(t, r[n]);
                return o;
              },
              ht = function(t) {
                var n = ct(t, ht);
                return x.extend(n, {
                  setDetachable: ot(t, 'setDetachable', ht),
                  setReattach: ot(t, 'setReattach', ht),
                  setConnector: ot(t, 'setConnector', ht),
                  detach: function() {
                    for (var n = 0, i = t.length; n < i; n++) e.detach(t[n]);
                  },
                  isDetachable: st(t, 'isDetachable'),
                  isReattach: st(t, 'isReattach'),
                });
              },
              dt = function(t) {
                var n = ct(t, dt);
                return x.extend(n, {
                  setEnabled: ot(t, 'setEnabled', dt),
                  setAnchor: ot(t, 'setAnchor', dt),
                  isEnabled: st(t, 'isEnabled'),
                  detachAll: function() {
                    for (var e = 0, n = t.length; e < n; e++) t[e].detachAll();
                  },
                  remove: function() {
                    for (var n = 0, i = t.length; n < i; n++)
                      e.deleteObject({ endpoint: t[n] });
                  },
                });
              };
            (this.select = function(t) {
              return (t = t || {}), (t.scope = t.scope || '*'), ht(
                t.connections || e.getConnections(t, !0),
              );
            }), (this.selectEndpoints = function(t) {
              (t = t || {}), (t.scope = t.scope || '*');
              var e = !t.element && !t.source && !t.target,
                n = e ? '*' : rt(t.element),
                i = e ? '*' : rt(t.source),
                o = e ? '*' : rt(t.target),
                s = rt(t.scope, !0),
                r = [];
              for (var a in E) {
                var l = at(n, a, !0),
                  u = at(i, a, !0),
                  c = '*' != i,
                  h = at(o, a, !0),
                  d = '*' != o;
                if (l || u || h)
                  t: for (var p = 0, f = E[a].length; p < f; p++) {
                    var g = E[a][p];
                    if (at(s, g.scope, !0)) {
                      var v = c && i.length > 0 && !g.isSource,
                        m = d && o.length > 0 && !g.isTarget;
                      if (v || m) continue t;
                      r.push(g);
                    }
                  }
              }
              return dt(r);
            }), (this.getAllConnections = function() {
              return _;
            }), (this.getDefaultScope = function() {
              return T;
            }), (this.getEndpoint = G), (this.getEndpoints = function(t) {
              return E[d(t).id];
            }), (this.getDefaultEndpointType = function() {
              return x.Endpoint;
            }), (this.getDefaultConnectionType = function() {
              return x.Connection;
            }), (this.getId = K), (this.appendElement = N);
            var pt = !1;
            (this.isHoverSuspended = function() {
              return pt;
            }), (this.setHoverSuspended = function(t) {
              pt = t;
            }), (this.hide = function(t, n) {
              return V(t, 'none', n), e;
            }), (this.idstamp = L), (this.connectorsInitialized = !1), (this.registerConnectorType = function(
              t,
              e,
            ) {
              r.push([t, e]);
            });
            var ft = function(t) {
                if (!g && t) {
                  var n = e.getElement(t);
                  n.offsetParent && e.setContainer(n.offsetParent);
                }
              },
              gt = function() {
                e.Defaults.Container && e.setContainer(e.Defaults.Container);
              },
              vt = (e.manage = function(t, n, i) {
                return j[t] ||
                  (
                    (j[t] = { el: n, endpoints: [], connections: [] }),
                    (j[t].info = mt({ elId: t, timestamp: k })),
                    i || e.fire('manageElement', { id: t, info: j[t].info, el: n })
                  ), j[t];
              }),
              mt = (this.updateOffset = function(t) {
                var n,
                  i = t.timestamp,
                  o = t.recalc,
                  s = t.offset,
                  r = t.elId;
                return I && !i && (i = k), !o && i && i === D[r]
                  ? { o: t.offset || S[r], s: O[r] }
                  : (
                      o || (!s && null == S[r])
                        ? null != (n = j[r] ? j[r].el : null) &&
                          ((O[r] = e.getSize(n)), (S[r] = e.getOffset(n)), (D[r] = i))
                        : (
                            (S[r] = s || S[r]),
                            null == O[r] &&
                              null != (n = j[r].el) &&
                              (O[r] = e.getSize(n)),
                            (D[r] = i)
                          ),
                      S[r] &&
                        !S[r].right &&
                        (
                          (S[r].right = S[r].left + O[r][0]),
                          (S[r].bottom = S[r].top + O[r][1]),
                          (S[r].width = O[r][0]),
                          (S[r].height = O[r][1]),
                          (S[r].centerx = S[r].left + S[r].width / 2),
                          (S[r].centery = S[r].top + S[r].height / 2)
                        ),
                      { o: S[r], s: O[r] }
                    );
              });
            (this.init = function() {
              if (((n = s.jsPlumb.getRenderModes()), !s.jsPlumb.connectorsInitialized)) {
                for (var t = 0; t < r.length; t++)
                  for (var i = 0; i < n.length; i++)
                    !(function(t, e, n) {
                      (s.jsPlumb.Connectors[t][e] = function() {
                        n.apply(this, arguments), s.jsPlumb.ConnectorRenderers[t].apply(
                          this,
                          arguments,
                        );
                      }), a.extend(s.jsPlumb.Connectors[t][e], [
                        n,
                        s.jsPlumb.ConnectorRenderers[t],
                      ]);
                    })(n[i], r[t][1], r[t][0]);
                s.jsPlumb.connectorsInitialized = !0;
              }
              P ||
                (
                  gt(),
                  (e.anchorManager = new s.jsPlumb.AnchorManager({ jsPlumbInstance: e })),
                  (P = !0),
                  e.fire('ready', e)
                );
            }.bind(
              this,
            )), (this.log = b), (this.jsPlumbUIComponent = v), (this.makeAnchor = function() {
              var t,
                n = function(t, n) {
                  if (s.jsPlumb.Anchors[t]) return new s.jsPlumb.Anchors[t](n);
                  if (!e.Defaults.DoNotThrowErrors)
                    throw { msg: "jsPlumb: unknown anchor type '" + t + "'" };
                };
              if (0 === arguments.length) return null;
              var i = arguments[0],
                o = arguments[1],
                r = (arguments[2], null);
              if (i.compute && i.getOrientation) return i;
              if ('string' == typeof i)
                r = n(arguments[0], { elementId: o, jsPlumbInstance: e });
              else if (a.isArray(i))
                if (a.isArray(i[0]) || a.isString(i[0]))
                  2 == i.length && a.isObject(i[1])
                    ? a.isString(i[0])
                      ? (
                          (t = s.jsPlumb.extend(
                            { elementId: o, jsPlumbInstance: e },
                            i[1],
                          )),
                          (r = n(i[0], t))
                        )
                      : (
                          (t = s.jsPlumb.extend(
                            { elementId: o, jsPlumbInstance: e, anchors: i[0] },
                            i[1],
                          )),
                          (r = new s.jsPlumb.DynamicAnchor(t))
                        )
                    : (r = new x.DynamicAnchor({
                        anchors: i,
                        selector: null,
                        elementId: o,
                        jsPlumbInstance: e,
                      }));
                else {
                  var l = {
                    x: i[0],
                    y: i[1],
                    orientation: i.length >= 4 ? [i[2], i[3]] : [0, 0],
                    offsets: i.length >= 6 ? [i[4], i[5]] : [0, 0],
                    elementId: o,
                    jsPlumbInstance: e,
                    cssClass: 7 == i.length ? i[6] : null,
                  };
                  (r = new s.jsPlumb.Anchor(l)), (r.clone = function() {
                    return new s.jsPlumb.Anchor(l);
                  });
                }
              return r.id || (r.id = 'anchor_' + L()), r;
            }), (this.makeAnchors = function(t, n, i) {
              for (var o = [], r = 0, l = t.length; r < l; r++)
                'string' == typeof t[r]
                  ? o.push(s.jsPlumb.Anchors[t[r]]({ elementId: n, jsPlumbInstance: i }))
                  : a.isArray(t[r]) && o.push(e.makeAnchor(t[r], n, i));
              return o;
            }), (this.makeDynamicAnchor = function(t, n) {
              return new s.jsPlumb.DynamicAnchor({
                anchors: t,
                selector: n,
                elementId: null,
                jsPlumbInstance: e,
              });
            }), (this.targetEndpointDefinitions = {}), (this.sourceEndpointDefinitions = {});
            var bt = function(t, e, n, i, o) {
                for (
                  var s = t.target || t.srcElement,
                    r = !1,
                    a = i.getSelector(e, n),
                    l = 0;
                  l < a.length;
                  l++
                )
                  if (a[l] == s) {
                    r = !0;
                    break;
                  }
                return o ? !r : r;
              },
              yt = function(t, n, i, o, r) {
                var l = new v(n),
                  u = n._jsPlumb.EndpointDropHandler({
                    jsPlumb: e,
                    enabled: function() {
                      return t.def.enabled;
                    },
                    isFull: function() {
                      var n = e.select({ target: t.id }).length;
                      return t.def.maxConnections > 0 && n >= t.def.maxConnections;
                    },
                    element: t.el,
                    elementId: t.id,
                    isSource: o,
                    isTarget: r,
                    addClass: function(n) {
                      e.addClass(t.el, n);
                    },
                    removeClass: function(n) {
                      e.removeClass(t.el, n);
                    },
                    onDrop: function(t) {
                      t.endpoints[0].anchor.locked = !1;
                    },
                    isDropAllowed: function() {
                      return l.isDropAllowed.apply(l, arguments);
                    },
                    isRedrop: function(e) {
                      return (
                        null != e.suspendedElement &&
                        null != e.suspendedEndpoint &&
                        e.suspendedEndpoint.element === t.el
                      );
                    },
                    getEndpoint: function(i) {
                      var o = t.def.endpoint;
                      if (null == o || null == o._jsPlumb) {
                        var r = e.deriveEndpointAndAnchorSpec(i.getType().join(' '), !0),
                          a = r.endpoints
                            ? s.jsPlumb.extend(n, {
                                endpoint: t.def.def.endpoint || r.endpoints[1],
                              })
                            : n;
                        r.anchors &&
                          (a = s.jsPlumb.extend(a, {
                            anchor: t.def.def.anchor || r.anchors[1],
                          })), (o = e.addEndpoint(t.el, a)), (o._mtNew = !0);
                      }
                      if (
                        (
                          n.uniqueEndpoint && (t.def.endpoint = o),
                          (o._doNotDeleteOnDetach = !1),
                          (o._deleteOnDetach = !0),
                          i.isDetachable() && o.initDraggable(),
                          null != o.anchor.positionFinder
                        )
                      ) {
                        var l = e.getUIPosition(arguments, e.getZoom()),
                          u = e.getOffset(t.el),
                          c = e.getSize(t.el),
                          h =
                            null == l
                              ? [0, 0]
                              : o.anchor.positionFinder(
                                  l,
                                  u,
                                  c,
                                  o.anchor.constructorParams,
                                );
                        (o.anchor.x = h[0]), (o.anchor.y = h[1]);
                      }
                      return o;
                    },
                    maybeCleanup: function(t) {
                      t._mtNew && 0 === t.connections.length
                        ? e.deleteObject({ endpoint: t })
                        : delete t._mtNew;
                    },
                  }),
                  c = s.jsPlumb.dragEvents.drop;
                return (i.scope = i.scope || n.scope || e.Defaults.Scope), (i[c] = a.wrap(
                  i[c],
                  u,
                  !0,
                )), r &&
                  (i[s.jsPlumb.dragEvents.over] = function() {
                    return !0;
                  }), !1 === n.allowLoopback &&
                  (i.canDrop = function(e) {
                    return e.getDragElement()._jsPlumbRelatedElement != t.el;
                  }), e.initDroppable(t.el, i, 'internal'), u;
              };
            (this.makeTarget = function(t, e, n) {
              var i = s.jsPlumb.extend({ _jsPlumb: this }, n);
              s.jsPlumb.extend(i, e);
              for (
                var o = (i.deleteEndpointsOnDetach, i.maxConnections || -1),
                  r = function(t) {
                    var e = d(t),
                      n = e.id,
                      r = s.jsPlumb.extend({}, i.dropOptions || {});
                    (this.targetEndpointDefinitions[n] =
                      this.targetEndpointDefinitions[n] || {}), ft(n);
                    var a = {
                      def: s.jsPlumb.extend({}, i),
                      uniqueEndpoint: i.uniqueEndpoint,
                      maxConnections: o,
                      enabled: !0,
                    };
                    (e.def = a), (this.targetEndpointDefinitions[n].default = a), yt(
                      e,
                      i,
                      r,
                      !0 === i.isSource,
                      !0,
                    ), (e.el._katavorioDrop[
                      e.el._katavorioDrop.length - 1
                    ].targetDef = a);
                  }.bind(this),
                  a = t.length && t.constructor != String ? t : [t],
                  l = 0,
                  u = a.length;
                l < u;
                l++
              )
                r(a[l]);
              return this;
            }), (this.unmakeTarget = function(t, n) {
              var i = d(t);
              return e.destroyDroppable(i.el, 'internal'), n ||
                delete this.targetEndpointDefinitions[i.id], this;
            }), (this.makeSource = function(t, n, i) {
              var o = s.jsPlumb.extend({ _jsPlumb: this }, i);
              s.jsPlumb.extend(o, n);
              var r = o.connectionType || 'default',
                l = e.deriveEndpointAndAnchorSpec(r);
              (o.endpoint = o.endpoint || l.endpoints[0]), (o.anchor =
                o.anchor || l.anchors[0]);
              for (
                var u = o.maxConnections || -1,
                  c = o.onMaxConnections,
                  p = function(t) {
                    var n = t.id,
                      i = this.getElement(t.el);
                    (this.sourceEndpointDefinitions[n] =
                      this.sourceEndpointDefinitions[n] || {}), ft(n);
                    var l = {
                      def: s.jsPlumb.extend({}, o),
                      uniqueEndpoint: o.uniqueEndpoint,
                      maxConnections: u,
                      enabled: !0,
                    };
                    (this.sourceEndpointDefinitions[n][r] = l), (t.def = l);
                    var d = s.jsPlumb.dragEvents.stop,
                      p = s.jsPlumb.dragEvents.drag,
                      f = s.jsPlumb.extend({}, o.dragOptions || {}),
                      g = f.drag,
                      v = f.stop,
                      m = null,
                      b = !1;
                    (f.scope = f.scope || o.scope), (f[p] = a.wrap(f[p], function() {
                      g && g.apply(this, arguments), (b = !1);
                    })), (f[d] = a.wrap(
                      f[d],
                      function() {
                        if (
                          (
                            v && v.apply(this, arguments),
                            (this.currentlyDragging = !1),
                            null != m._jsPlumb
                          )
                        ) {
                          var t = o.anchor || this.Defaults.Anchor,
                            i = m.anchor,
                            s = m.connections[0],
                            r = this.makeAnchor(t, n, this),
                            a = m.element;
                          if (null != r.positionFinder) {
                            var l = e.getOffset(a),
                              u = this.getSize(a),
                              c = { left: l.left + i.x * u[0], top: l.top + i.y * u[1] },
                              h = r.positionFinder(c, l, u, r.constructorParams);
                            (r.x = h[0]), (r.y = h[1]);
                          }
                          m.setAnchor(r, !0), m.repaint(), this.repaint(
                            m.elementId,
                          ), null != s && this.repaint(s.targetId);
                        }
                      }.bind(this),
                    ));
                    var y = function(l) {
                      if (3 !== l.which && 2 !== l.button) {
                        var d = this.sourceEndpointDefinitions[n][r];
                        if (d.enabled) {
                          if (
                            (
                              (n = this.getId(this.getElement(t.el))),
                              o.filter &&
                                !1 ===
                                  (a.isString(o.filter)
                                    ? bt(l, t.el, o.filter, this, o.filterExclude)
                                    : o.filter(l, t.el))
                            )
                          )
                            return;
                          var p = this.select({ source: n }).length;
                          if (d.maxConnections >= 0 && p >= d.maxConnections)
                            return c && c({ element: t.el, maxConnections: u }, l), !1;
                          var g = s.jsPlumb.getPositionOnElement(l, i, h),
                            v = {};
                          s.jsPlumb.extend(
                            v,
                            o,
                          ), (v.isTemporarySource = !0), (v.anchor = [
                            g[0],
                            g[1],
                            0,
                            0,
                          ]), (v.dragOptions = f), d.def.scope &&
                            (v.scope = d.def.scope), (m = this.addEndpoint(
                            n,
                            v,
                          )), (b = !0), (m._doNotDeleteOnDetach = !1), (m._deleteOnDetach = !0), d.uniqueEndpoint &&
                            (d.endpoint
                              ? (m.finalEndpoint = d.endpoint)
                              : (
                                  (d.endpoint = m),
                                  (m._deleteOnDetach = !1),
                                  (m._doNotDeleteOnDetach = !0)
                                ));
                          var y = function() {
                            e.off(m.canvas, 'mouseup', y), e.off(t.el, 'mouseup', y), b &&
                              ((b = !1), e.deleteEndpoint(m));
                          };
                          e.on(m.canvas, 'mouseup', y), e.on(t.el, 'mouseup', y);
                          var P = {};
                          if (d.def.extract)
                            for (var x in d.def.extract) {
                              var _ = (l.srcElement || l.target).getAttribute(x);
                              _ && (P[d.def.extract[x]] = _);
                            }
                          e.trigger(m.canvas, 'mousedown', l, P), a.consume(l);
                        }
                      }
                    }.bind(this);
                    this.on(t.el, 'mousedown', y), (l.trigger = y), o.filter &&
                      (a.isString(o.filter) || a.isFunction(o.filter)) &&
                      e.setDragFilter(t.el, o.filter);
                    var P = s.jsPlumb.extend({}, o.dropOptions || {});
                    yt(t, o, P, !0, !0 === o.isTarget);
                  }.bind(this),
                  f = t.length && t.constructor != String ? t : [t],
                  g = 0,
                  v = f.length;
                g < v;
                g++
              )
                p(d(f[g]));
              return this;
            }), (this.unmakeSource = function(t, n, i) {
              var o = d(t);
              e.destroyDroppable(o.el, 'internal');
              var s = this.sourceEndpointDefinitions[o.id];
              if (s)
                for (var r in s)
                  if (null == n || n === r) {
                    var a = s[r].trigger;
                    a && e.off(o.el, 'mousedown', a), i ||
                      delete this.sourceEndpointDefinitions[o.id][r];
                  }
              return this;
            }), (this.unmakeEverySource = function() {
              for (var t in this.sourceEndpointDefinitions) e.unmakeSource(t, null, !0);
              return (this.sourceEndpointDefinitions = {}), this;
            });
            var Pt = function(t, e, n) {
                e = a.isArray(e) ? e : [e];
                var i = K(t);
                n = n || 'default';
                for (var o = 0; o < e.length; o++) {
                  var s = this[e[o]][i];
                  if (s && s[n]) return s[n].def.scope || this.Defaults.Scope;
                }
              }.bind(this),
              xt = function(t, e, n, i) {
                n = a.isArray(n) ? n : [n];
                var o = K(t);
                i = i || 'default';
                for (var s = 0; s < n.length; s++) {
                  var r = this[n[s]][o];
                  r && r[i] && (r[i].def.scope = e);
                }
              }.bind(this);
            (this.getScope = function(t, e) {
              return Pt(t, ['sourceEndpointDefinitions', 'targetEndpointDefinitions']);
            }), (this.getSourceScope = function(t) {
              return Pt(t, 'sourceEndpointDefinitions');
            }), (this.getTargetScope = function(t) {
              return Pt(t, 'targetEndpointDefinitions');
            }), (this.setScope = function(t, e, n) {
              this.setSourceScope(t, e, n), this.setTargetScope(t, e, n);
            }), (this.setSourceScope = function(t, e, n) {
              xt(t, e, 'sourceEndpointDefinitions', n), this.setDragScope(t, e);
            }), (this.setTargetScope = function(t, e, n) {
              xt(t, e, 'targetEndpointDefinitions', n), this.setDropScope(t, e);
            }), (this.unmakeEveryTarget = function() {
              for (var t in this.targetEndpointDefinitions) e.unmakeTarget(t, !0);
              return (this.targetEndpointDefinitions = {}), this;
            });
            var _t = function(t, n, i, o, s) {
                var r,
                  l,
                  u,
                  c =
                    'source' == t
                      ? this.sourceEndpointDefinitions
                      : this.targetEndpointDefinitions;
                if (((s = s || 'default'), n.length && !a.isString(n))) {
                  r = [];
                  for (var h = 0, p = n.length; h < p; h++)
                    (l = d(n[h])), c[l.id] &&
                      c[l.id][s] &&
                      (
                        (r[h] = c[l.id][s].enabled),
                        (u = o ? !r[h] : i),
                        (c[l.id][s].enabled = u),
                        e[u ? 'removeClass' : 'addClass'](l.el, 'jtk-' + t + '-disabled')
                      );
                } else {
                  l = d(n);
                  var f = l.id;
                  c[f] &&
                    c[f][s] &&
                    (
                      (r = c[f][s].enabled),
                      (u = o ? !r : i),
                      (c[f][s].enabled = u),
                      e[u ? 'removeClass' : 'addClass'](l.el, 'jtk-' + t + '-disabled')
                    );
                }
                return r;
              }.bind(this),
              Et = function(t, e) {
                return a.isString(t) || !t.length
                  ? e.apply(this, [t])
                  : t.length ? e.apply(this, [t[0]]) : void 0;
              }.bind(this);
            (this.toggleSourceEnabled = function(t, e) {
              return _t('source', t, null, !0, e), this.isSourceEnabled(t, e);
            }), (this.setSourceEnabled = function(t, e, n) {
              return _t('source', t, e, null, n);
            }), (this.isSource = function(t, e) {
              return (e = e || 'default'), Et(
                t,
                function(t) {
                  var n = this.sourceEndpointDefinitions[d(t).id];
                  return null != n && null != n[e];
                }.bind(this),
              );
            }), (this.isSourceEnabled = function(t, e) {
              return (e = e || 'default'), Et(
                t,
                function(t) {
                  var n = this.sourceEndpointDefinitions[d(t).id];
                  return n && n[e] && !0 === n[e].enabled;
                }.bind(this),
              );
            }), (this.toggleTargetEnabled = function(t, e) {
              return _t('target', t, null, !0, e), this.isTargetEnabled(t, e);
            }), (this.isTarget = function(t, e) {
              return (e = e || 'default'), Et(
                t,
                function(t) {
                  var n = this.targetEndpointDefinitions[d(t).id];
                  return null != n && null != n[e];
                }.bind(this),
              );
            }), (this.isTargetEnabled = function(t, e) {
              return (e = e || 'default'), Et(
                t,
                function(t) {
                  var n = this.targetEndpointDefinitions[d(t).id];
                  return n && n[e] && !0 === n[e].enabled;
                }.bind(this),
              );
            }), (this.setTargetEnabled = function(t, e, n) {
              return _t('target', t, e, null, n);
            }), (this.ready = function(t) {
              e.bind('ready', t);
            });
            var Ct = function(t, n) {
              if ('object' == typeof t && t.length)
                for (var i = 0, o = t.length; i < o; i++) n(t[i]);
              else n(t);
              return e;
            };
            (this.repaint = function(t, e, n) {
              return Ct(t, function(t) {
                F(t, e, n);
              });
            }), (this.revalidate = function(t, n, i) {
              return Ct(t, function(t) {
                var o = i ? t : e.getId(t);
                e.updateOffset({ elId: o, recalc: !0, timestamp: n }), e.repaint(t);
              });
            }), (this.repaintEverything = function() {
              var t,
                n = l();
              for (t in E) e.updateOffset({ elId: t, recalc: !0, timestamp: n });
              for (t in E) F(t, null, n);
              return this;
            }), (this.removeAllEndpoints = function(t, n, i) {
              i = i || [];
              var o = function(t) {
                var s,
                  r,
                  a = d(t),
                  l = E[a.id];
                if (l)
                  for (i.push(a), s = 0, r = l.length; s < r; s++)
                    e.deleteEndpoint(l[s], !1);
                if (
                  (delete E[a.id], n && a.el && 3 != a.el.nodeType && 8 != a.el.nodeType)
                )
                  for (s = 0, r = a.el.childNodes.length; s < r; s++)
                    o(a.el.childNodes[s]);
              };
              return o(t), this;
            });
            var jt = function(t, n) {
              e.removeAllEndpoints(t.id, !0, n);
              for (
                var i = function(t) {
                    e.getDragManager().elementRemoved(t.id), e.anchorManager.clearFor(
                      t.id,
                    ), e.anchorManager.removeFloatingConnection(t.id), e.isSource(t.el) &&
                      e.unmakeSource(t.el), e.isTarget(t.el) &&
                      e.unmakeTarget(t.el), e.destroyDraggable(t.el), e.destroyDroppable(
                      t.el,
                    ), delete e.floatingConnections[t.id], delete j[t.id], delete S[
                      t.id
                    ], t.el && (e.removeElement(t.el), (t.el._jsPlumb = null));
                  },
                  o = 1;
                o < n.length;
                o++
              )
                i(n[o]);
              i(t);
            };
            (this.remove = function(t, n) {
              var i = d(t),
                o = [];
              return i.text
                ? i.el.parentNode.removeChild(i.el)
                : i.id &&
                  e.batch(function() {
                    jt(i, o);
                  }, !1 === n), e;
            }), (this.empty = function(t, n) {
              var i = [],
                o = function(t, e) {
                  var n = d(t);
                  if (n.text) n.el.parentNode.removeChild(n.el);
                  else if (n.el) {
                    for (; n.el.childNodes.length > 0; ) o(n.el.childNodes[0]);
                    e || jt(n, i);
                  }
                };
              return e.batch(function() {
                o(t, !0);
              }, !1 === n), e;
            }), (this.reset = function() {
              e.silently(
                function() {
                  (pt = !1), e.removeAllGroups(), e.removeGroupManager(), e.deleteEveryEndpoint(), e.unbind(), (this.targetEndpointDefinitions = {}), (this.sourceEndpointDefinitions = {}), (_.length = 0), this
                    .doReset && this.doReset();
                }.bind(this),
              );
            });
            var St = function(t) {
              t.canvas &&
                t.canvas.parentNode &&
                t.canvas.parentNode.removeChild(t.canvas), t.cleanup(), t.destroy();
            };
            (this.clear = function() {
              e.select().each(St), e.selectEndpoints().each(St), (E = {}), (C = {});
            }), (this.setDefaultScope = function(t) {
              return (T = t), e;
            }), (this.setDraggable = z), (this.deriveEndpointAndAnchorSpec = function(
              t,
              n,
            ) {
              for (
                var i = ((n ? '' : 'default ') + t).split(/[\s]/),
                  o = null,
                  s = null,
                  r = null,
                  a = null,
                  l = 0;
                l < i.length;
                l++
              ) {
                var u = e.getType(i[l], 'connection');
                u &&
                  (
                    u.endpoints && (o = u.endpoints),
                    u.endpoint && (s = u.endpoint),
                    u.anchors && (a = u.anchors),
                    u.anchor && (r = u.anchor)
                  );
              }
              return { endpoints: o || [s, s], anchors: a || [r, r] };
            }), (this.setId = function(t, e, n) {
              var i;
              a.isString(t) ? (i = t) : ((t = this.getElement(t)), (i = this.getId(t)));
              var o = this.getConnections({ source: i, scope: '*' }, !0),
                s = this.getConnections({ target: i, scope: '*' }, !0);
              (e = '' + e), n
                ? (t = this.getElement(e))
                : ((t = this.getElement(i)), this.setAttribute(t, 'id', e)), (E[e] =
                E[i] || []);
              for (var r = 0, l = E[e].length; r < l; r++)
                E[e][r].setElementId(e), E[e][r].setReferenceElement(t);
              delete E[i], (this.sourceEndpointDefinitions[
                e
              ] = this.sourceEndpointDefinitions[i]), delete this
                .sourceEndpointDefinitions[i], (this.targetEndpointDefinitions[
                e
              ] = this.targetEndpointDefinitions[i]), delete this
                .targetEndpointDefinitions[i], this.anchorManager.changeId(
                i,
                e,
              ), this.getDragManager().changeId(i, e), (j[e] = j[i]), delete j[i];
              var u = function(n, i, o) {
                for (var s = 0, r = n.length; s < r; s++)
                  n[s].endpoints[i].setElementId(e), n[s].endpoints[
                    i
                  ].setReferenceElement(t), (n[s][o + 'Id'] = e), (n[s][o] = t);
              };
              u(o, 0, 'source'), u(s, 1, 'target'), this.repaint(e);
            }), (this.setDebugLog = function(t) {
              b = t;
            }), (this.setSuspendDrawing = function(t, e) {
              var n = I;
              return (I = t), (k = t ? new Date().getTime() : null), e &&
                this.repaintEverything(), n;
            }), (this.isSuspendDrawing = function() {
              return I;
            }), (this.getSuspendedAt = function() {
              return k;
            }), (this.batch = function(t, e) {
              var n = this.isSuspendDrawing();
              n || this.setSuspendDrawing(!0);
              try {
                t();
              } catch (t) {
                a.log('Function run while suspended failed', t);
              }
              n || this.setSuspendDrawing(!1, !e);
            }), (this.doWhileSuspended = this.batch), (this.getCachedData = Z), (this.timestamp = l), (this.show = function(
              t,
              n,
            ) {
              return V(t, 'block', n), e;
            }), (this.toggleVisible = J), (this.toggleDraggable = q), (this.addListener = this.bind);
          });
        a.extend(s.jsPlumbInstance, a.EventGenerator, {
          setAttribute: function(t, e, n) {
            this.setAttribute(t, e, n);
          },
          getAttribute: function(t, e) {
            return this.getAttribute(s.jsPlumb.getElement(t), e);
          },
          convertToFullOverlaySpec: function(t) {
            return a.isString(t) && (t = [t, {}]), (t[1].id = t[1].id || a.uuid()), t;
          },
          registerConnectionType: function(t, e) {
            if (((this._connectionTypes[t] = s.jsPlumb.extend({}, e)), e.overlays)) {
              for (var n = {}, i = 0; i < e.overlays.length; i++) {
                var o = this.convertToFullOverlaySpec(e.overlays[i]);
                n[o[1].id] = o;
              }
              this._connectionTypes[t].overlays = n;
            }
          },
          registerConnectionTypes: function(t) {
            for (var e in t) this.registerConnectionType(e, t[e]);
          },
          registerEndpointType: function(t, e) {
            if (((this._endpointTypes[t] = s.jsPlumb.extend({}, e)), e.overlays)) {
              for (var n = {}, i = 0; i < e.overlays.length; i++) {
                var o = this.convertToFullOverlaySpec(e.overlays[i]);
                n[o[1].id] = o;
              }
              this._endpointTypes[t].overlays = n;
            }
          },
          registerEndpointTypes: function(t) {
            for (var e in t) this.registerEndpointType(e, t[e]);
          },
          getType: function(t, e) {
            return 'connection' === e ? this._connectionTypes[t] : this._endpointTypes[t];
          },
          setIdChanged: function(t, e) {
            this.setId(t, e, !0);
          },
          setParent: function(t, e) {
            var n = this.getElement(t),
              i = this.getId(n),
              o = this.getElement(e),
              s = this.getId(o);
            n.parentNode.removeChild(n), o.appendChild(
              n,
            ), this.getDragManager().setParent(n, i, o, s);
          },
          extend: function(t, e, n) {
            var i;
            if (n) for (i = 0; i < n.length; i++) t[n[i]] = e[n[i]];
            else for (i in e) t[i] = e[i];
            return t;
          },
          floatingConnections: {},
          getFloatingAnchorIndex: function(t) {
            return t.endpoints[0].isFloating() ? 0 : t.endpoints[1].isFloating() ? 1 : -1;
          },
        }), (P.prototype.Defaults = {
          Anchor: 'Bottom',
          Anchors: [null, null],
          ConnectionsDetachable: !0,
          ConnectionOverlays: [],
          Connector: 'Bezier',
          Container: null,
          DoNotThrowErrors: !1,
          DragOptions: {},
          DropOptions: {},
          Endpoint: 'Dot',
          EndpointOverlays: [],
          Endpoints: [null, null],
          EndpointStyle: { fill: '#456' },
          EndpointStyles: [null, null],
          EndpointHoverStyle: null,
          EndpointHoverStyles: [null, null],
          HoverPaintStyle: null,
          LabelStyle: { color: 'black' },
          LogEnabled: !1,
          Overlays: [],
          MaxConnections: 1,
          PaintStyle: { 'stroke-width': 4, stroke: '#456' },
          ReattachConnections: !1,
          RenderMode: 'svg',
          Scope: 'jsPlumb_DefaultScope',
        });
        var x = new P();
        (s.jsPlumb = x), (x.getInstance = function(t, e) {
          var n = new P(t);
          if (e) for (var i in e) n[i] = e[i];
          return n.init(), n;
        }), (x.each = function(t, e) {
          if (null != t)
            if ('string' == typeof t) e(x.getElement(t));
            else if (null != t.length)
              for (var n = 0; n < t.length; n++) e(x.getElement(t[n]));
            else e(t);
        }), (i = []), void 0 !==
          (o = function() {
            return x;
          }.apply(e, i)) && (t.exports = o), (e.jsPlumb = x);
      }.call('undefined' != typeof window ? window : this), function() {
        var t = this,
          e = t.jsPlumbUtil,
          n = function(t, e) {
            if (null == e) return [0, 0];
            var n = a(e),
              i = r(n, 0);
            return [i[t + 'X'], i[t + 'Y']];
          },
          i = n.bind(this, 'page'),
          o = n.bind(this, 'screen'),
          s = n.bind(this, 'client'),
          r = function(t, e) {
            return t.item ? t.item(e) : t[e];
          },
          a = function(t) {
            return t.touches && t.touches.length > 0
              ? t.touches
              : t.changedTouches && t.changedTouches.length > 0
                ? t.changedTouches
                : t.targetTouches && t.targetTouches.length > 0 ? t.targetTouches : [t];
          },
          l = function(t) {
            var e = {},
              n = [],
              i = {},
              o = {},
              s = {};
            (this.register = function(r) {
              var a = t.getId(r),
                l = t.getOffset(r);
              e[a] || ((e[a] = r), n.push(r), (i[a] = {}));
              var u = function(e) {
                if (e)
                  for (var n = 0; n < e.childNodes.length; n++)
                    if (3 != e.childNodes[n].nodeType && 8 != e.childNodes[n].nodeType) {
                      var r = jsPlumb.getElement(e.childNodes[n]),
                        c = t.getId(e.childNodes[n], null, !0);
                      if (c && o[c] && o[c] > 0) {
                        var h = t.getOffset(r);
                        (i[a][c] = {
                          id: c,
                          offset: { left: h.left - l.left, top: h.top - l.top },
                        }), (s[c] = a);
                      }
                      u(e.childNodes[n]);
                    }
              };
              u(r);
            }), (this.updateOffsets = function(e, n) {
              if (null != e) {
                n = n || {};
                var o = jsPlumb.getElement(e),
                  r = t.getId(o),
                  a = i[r],
                  l = t.getOffset(o);
                if (a)
                  for (var u in a)
                    if (a.hasOwnProperty(u)) {
                      var c = jsPlumb.getElement(u),
                        h = n[u] || t.getOffset(c);
                      if (null == c.offsetParent && null != i[r][u]) continue;
                      (i[r][u] = {
                        id: u,
                        offset: { left: h.left - l.left, top: h.top - l.top },
                      }), (s[u] = r);
                    }
              }
            }), (this.endpointAdded = function(n, r) {
              r = r || t.getId(n);
              var a = document.body,
                l = n.parentNode;
              for (o[r] = o[r] ? o[r] + 1 : 1; null != l && l != a; ) {
                var u = t.getId(l, null, !0);
                if (u && e[u]) {
                  var c = t.getOffset(l);
                  if (null == i[u][r]) {
                    var h = t.getOffset(n);
                    (i[u][r] = {
                      id: r,
                      offset: { left: h.left - c.left, top: h.top - c.top },
                    }), (s[r] = u);
                  }
                  break;
                }
                l = l.parentNode;
              }
            }), (this.endpointDeleted = function(t) {
              if (o[t.elementId] && --o[t.elementId] <= 0)
                for (var e in i)
                  i.hasOwnProperty(e) &&
                    i[e] &&
                    (delete i[e][t.elementId], delete s[t.elementId]);
            }), (this.changeId = function(t, e) {
              (i[e] = i[t]), (i[t] = {}), (s[e] = s[t]), (s[t] = null);
            }), (this.getElementsForDraggable = function(t) {
              return i[t];
            }), (this.elementRemoved = function(t) {
              var e = s[t];
              e && (delete i[e][t], delete s[t]);
            }), (this.reset = function() {
              (e = {}), (n = []), (i = {}), (o = {});
            }), (this.dragEnded = function(e) {
              if (null != e.offsetParent) {
                var n = t.getId(e),
                  i = s[n];
                i && this.updateOffsets(i);
              }
            }), (this.setParent = function(e, n, o, r, a) {
              var l = s[n];
              i[r] || (i[r] = {});
              var u = t.getOffset(o),
                c = a || t.getOffset(e);
              l && delete i[l][n], (i[r][n] = {
                id: n,
                offset: { left: c.left - u.left, top: c.top - u.top },
              }), (s[n] = r);
            }), (this.clearParent = function(t, e) {
              var n = s[e];
              n && (delete i[n][e], delete s[e]);
            }), (this.revalidateParent = function(e, n, i) {
              var o = s[n];
              if (o) {
                var r = {};
                (r[n] = i), this.updateOffsets(o, r), t.revalidate(o);
              }
            }), (this.getDragAncestor = function(e) {
              var n = jsPlumb.getElement(e),
                i = t.getId(n),
                o = s[i];
              return o ? jsPlumb.getElement(o) : null;
            });
          },
          u = function(t) {
            return null == t ? null : t.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
          },
          c = function(t, e) {
            (e = u(e)), void 0 !== t.className.baseVal
              ? (t.className.baseVal = e)
              : (t.className = e);
          },
          h = function(t) {
            return void 0 === t.className.baseVal ? t.className : t.className.baseVal;
          },
          d = function(t, n, i) {
            (n = null == n ? [] : e.isArray(n) ? n : n.split(/\s+/)), (i =
              null == i ? [] : e.isArray(i) ? i : i.split(/\s+/));
            var o = h(t),
              s = o.split(/\s+/),
              r = function(t, e) {
                for (var n = 0; n < e.length; n++)
                  if (t) -1 == s.indexOf(e[n]) && s.push(e[n]);
                  else {
                    var i = s.indexOf(e[n]);
                    -1 != i && s.splice(i, 1);
                  }
              };
            r(!0, n), r(!1, i), c(t, s.join(' '));
          };
        t.jsPlumb.extend(t.jsPlumbInstance.prototype, {
          headless: !1,
          pageLocation: i,
          screenLocation: o,
          clientLocation: s,
          getDragManager: function() {
            return null == this.dragManager && (this.dragManager = new l(this)), this
              .dragManager;
          },
          recalculateOffsets: function(t) {
            this.getDragManager().updateOffsets(t);
          },
          createElement: function(t, e, n, i) {
            return this.createElementNS(null, t, e, n, i);
          },
          createElementNS: function(t, e, n, i, o) {
            var s,
              r = null == t ? document.createElement(e) : document.createElementNS(t, e);
            n = n || {};
            for (s in n) r.style[s] = n[s];
            i && (r.className = i), (o = o || {});
            for (s in o) r.setAttribute(s, '' + o[s]);
            return r;
          },
          getAttribute: function(t, e) {
            return null != t.getAttribute ? t.getAttribute(e) : null;
          },
          setAttribute: function(t, e, n) {
            null != t.setAttribute && t.setAttribute(e, n);
          },
          setAttributes: function(t, e) {
            for (var n in e) e.hasOwnProperty(n) && t.setAttribute(n, e[n]);
          },
          appendToRoot: function(t) {
            document.body.appendChild(t);
          },
          getRenderModes: function() {
            return ['svg'];
          },
          getClass: h,
          addClass: function(t, e) {
            jsPlumb.each(t, function(t) {
              d(t, e);
            });
          },
          hasClass: function(t, e) {
            return (t = jsPlumb.getElement(t)), t.classList
              ? t.classList.contains(e)
              : -1 != h(t).indexOf(e);
          },
          removeClass: function(t, e) {
            jsPlumb.each(t, function(t) {
              d(t, null, e);
            });
          },
          updateClasses: function(t, e, n) {
            jsPlumb.each(t, function(t) {
              d(t, e, n);
            });
          },
          setClass: function(t, e) {
            jsPlumb.each(t, function(t) {
              c(t, e);
            });
          },
          setPosition: function(t, e) {
            (t.style.left = e.left + 'px'), (t.style.top = e.top + 'px');
          },
          getPosition: function(t) {
            var e = function(e) {
              var n = t.style[e];
              return n ? n.substring(0, n.length - 2) : 0;
            };
            return { left: e('left'), top: e('top') };
          },
          getStyle: function(t, e) {
            return void 0 !== window.getComputedStyle
              ? getComputedStyle(t, null).getPropertyValue(e)
              : t.currentStyle[e];
          },
          getSelector: function(t, e) {
            return 1 == arguments.length
              ? null != t.nodeType ? t : document.querySelectorAll(t)
              : t.querySelectorAll(e);
          },
          getOffset: function(t, e, n) {
            (t = jsPlumb.getElement(t)), (n = n || this.getContainer());
            for (
              var i = { left: t.offsetLeft, top: t.offsetTop },
                o =
                  e || (null != n && t != n && t.offsetParent != n)
                    ? t.offsetParent
                    : null,
                s = function(t) {
                  null != t &&
                    t !== document.body &&
                    (t.scrollTop > 0 || t.scrollLeft > 0) &&
                    ((i.left -= t.scrollLeft), (i.top -= t.scrollTop));
                }.bind(this);
              null != o;

            )
              (i.left += o.offsetLeft), (i.top += o.offsetTop), s(o), (o = e
                ? o.offsetParent
                : o.offsetParent == n ? null : o.offsetParent);
            if (null != n && !e && (n.scrollTop > 0 || n.scrollLeft > 0)) {
              var r =
                  null != t.offsetParent
                    ? this.getStyle(t.offsetParent, 'position')
                    : 'static',
                a = this.getStyle(t, 'position');
              'absolute' !== a &&
                'fixed' !== a &&
                'absolute' !== r &&
                'fixed' != r &&
                ((i.left -= n.scrollLeft), (i.top -= n.scrollTop));
            }
            return i;
          },
          getPositionOnElement: function(t, e, n) {
            var i =
                void 0 !== e.getBoundingClientRect
                  ? e.getBoundingClientRect()
                  : { left: 0, top: 0, width: 0, height: 0 },
              o = document.body,
              s = document.documentElement,
              r = window.pageYOffset || s.scrollTop || o.scrollTop,
              a = window.pageXOffset || s.scrollLeft || o.scrollLeft,
              l = s.clientTop || o.clientTop || 0,
              u = s.clientLeft || o.clientLeft || 0,
              c = i.top + r - l + 0 * n,
              h = i.left + a - u + 0 * n,
              d = jsPlumb.pageLocation(t),
              p = i.width || e.offsetWidth * n,
              f = i.height || e.offsetHeight * n;
            return [(d[0] - h) / p, (d[1] - c) / f];
          },
          getAbsolutePosition: function(t) {
            var e = function(e) {
              var n = t.style[e];
              if (n) return parseFloat(n.substring(0, n.length - 2));
            };
            return [e('left'), e('top')];
          },
          setAbsolutePosition: function(t, e, n, i) {
            n
              ? this.animate(
                  t,
                  { left: '+=' + (e[0] - n[0]), top: '+=' + (e[1] - n[1]) },
                  i,
                )
              : ((t.style.left = e[0] + 'px'), (t.style.top = e[1] + 'px'));
          },
          getSize: function(t) {
            return [t.offsetWidth, t.offsetHeight];
          },
          getWidth: function(t) {
            return t.offsetWidth;
          },
          getHeight: function(t) {
            return t.offsetHeight;
          },
          getRenderMode: function() {
            return 'svg';
          },
        });
      }.call('undefined' != typeof window ? window : this), function() {
        'use strict';
        var t = this,
          e = t.jsPlumb,
          n = t.jsPlumbUtil,
          i = function(t, n) {
            var i = {
                cssClass: n.cssClass,
                labelStyle: t.labelStyle,
                id: '__label',
                component: t,
                _jsPlumb: t._jsPlumb.instance,
              },
              o = e.extend(i, n);
            return new e.Overlays[(t._jsPlumb.instance.getRenderMode())].Label(o);
          },
          o = function(t, i) {
            var o = null;
            if (n.isArray(i)) {
              var s = i[0],
                r = e.extend({ component: t, _jsPlumb: t._jsPlumb.instance }, i[1]);
              3 == i.length && e.extend(r, i[2]), (o = new e.Overlays[
                (t._jsPlumb.instance.getRenderMode())
              ][s](r));
            } else
              o =
                i.constructor == String
                  ? new e.Overlays[(t._jsPlumb.instance.getRenderMode())][i]({
                      component: t,
                      _jsPlumb: t._jsPlumb.instance,
                    })
                  : i;
            return (o.id = o.id || n.uuid()), t.cacheTypeItem(
              'overlay',
              o,
              o.id,
            ), (t._jsPlumb.overlays[o.id] = o), o;
          };
        (e.OverlayCapableJsPlumbUIComponent = function(e) {
          t.jsPlumbUIComponent.apply(
            this,
            arguments,
          ), (this._jsPlumb.overlays = {}), (this._jsPlumb.overlayPositions = {}), e.label &&
            (this.getDefaultType().overlays.__label = [
              'Label',
              {
                label: e.label,
                location: e.labelLocation || this.defaultLabelLocation || 0.5,
                labelStyle: e.labelStyle || this._jsPlumb.instance.Defaults.LabelStyle,
                id: '__label',
              },
            ]), (this.setListenerComponent = function(t) {
            if (this._jsPlumb)
              for (var e in this._jsPlumb.overlays)
                this._jsPlumb.overlays[e].setListenerComponent(t);
          });
        }), (e.OverlayCapableJsPlumbUIComponent.applyType = function(t, e) {
          if (e.overlays) {
            var n,
              i = {};
            for (n in e.overlays) {
              var o = t._jsPlumb.overlays[e.overlays[n][1].id];
              if (o) o.updateFrom(e.overlays[n][1]), (i[e.overlays[n][1].id] = !0);
              else {
                var s = t.getCachedTypeItem('overlay', e.overlays[n][1].id);
                null != s
                  ? (
                      s.reattach(t._jsPlumb.instance),
                      s.setVisible(!0),
                      s.updateFrom(e.overlays[n][1]),
                      (t._jsPlumb.overlays[s.id] = s)
                    )
                  : (s = t.addOverlay(e.overlays[n], !0)), (i[s.id] = !0);
              }
            }
            for (n in t._jsPlumb.overlays)
              null == i[t._jsPlumb.overlays[n].id] &&
                t.removeOverlay(t._jsPlumb.overlays[n].id, !0);
          }
        }), n.extend(e.OverlayCapableJsPlumbUIComponent, t.jsPlumbUIComponent, {
          setHover: function(t, e) {
            if (this._jsPlumb && !this._jsPlumb.instance.isConnectionBeingDragged())
              for (var n in this._jsPlumb.overlays)
                this._jsPlumb.overlays[n][t ? 'addClass' : 'removeClass'](
                  this._jsPlumb.instance.hoverClass,
                );
          },
          addOverlay: function(t, e) {
            var n = o(this, t);
            return e || this.repaint(), n;
          },
          getOverlay: function(t) {
            return this._jsPlumb.overlays[t];
          },
          getOverlays: function() {
            return this._jsPlumb.overlays;
          },
          hideOverlay: function(t) {
            var e = this.getOverlay(t);
            e && e.hide();
          },
          hideOverlays: function() {
            for (var t in this._jsPlumb.overlays) this._jsPlumb.overlays[t].hide();
          },
          showOverlay: function(t) {
            var e = this.getOverlay(t);
            e && e.show();
          },
          showOverlays: function() {
            for (var t in this._jsPlumb.overlays) this._jsPlumb.overlays[t].show();
          },
          removeAllOverlays: function(t) {
            for (var e in this._jsPlumb.overlays)
              this._jsPlumb.overlays[e].cleanup && this._jsPlumb.overlays[e].cleanup();
            (this._jsPlumb.overlays = {}), (this._jsPlumb.overlayPositions = null), t ||
              this.repaint();
          },
          removeOverlay: function(t, e) {
            var n = this._jsPlumb.overlays[t];
            n &&
              (
                n.setVisible(!1),
                !e && n.cleanup && n.cleanup(),
                delete this._jsPlumb.overlays[t],
                this._jsPlumb.overlayPositions && delete this._jsPlumb.overlayPositions[t]
              );
          },
          removeOverlays: function() {
            for (var t = 0, e = arguments.length; t < e; t++)
              this.removeOverlay(arguments[t]);
          },
          moveParent: function(t) {
            if (
              (
                this.bgCanvas &&
                  (
                    this.bgCanvas.parentNode.removeChild(this.bgCanvas),
                    t.appendChild(this.bgCanvas)
                  ),
                this.canvas && this.canvas.parentNode
              )
            ) {
              this.canvas.parentNode.removeChild(this.canvas), t.appendChild(this.canvas);
              for (var e in this._jsPlumb.overlays)
                if (this._jsPlumb.overlays[e].isAppendedAtTopLevel) {
                  var n = this._jsPlumb.overlays[e].getElement();
                  n.parentNode.removeChild(n), t.appendChild(n);
                }
            }
          },
          getLabel: function() {
            var t = this.getOverlay('__label');
            return null != t ? t.getLabel() : null;
          },
          getLabelOverlay: function() {
            return this.getOverlay('__label');
          },
          setLabel: function(t) {
            var e = this.getOverlay('__label');
            if (e)
              t.constructor == String || t.constructor == Function
                ? e.setLabel(t)
                : (
                    t.label && e.setLabel(t.label),
                    t.location && e.setLocation(t.location)
                  );
            else {
              var n =
                t.constructor == String || t.constructor == Function ? { label: t } : t;
              (e = i(this, n)), (this._jsPlumb.overlays.__label = e);
            }
            this._jsPlumb.instance.isSuspendDrawing() || this.repaint();
          },
          cleanup: function(t) {
            for (var e in this._jsPlumb.overlays)
              this._jsPlumb.overlays[e].cleanup(t), this._jsPlumb.overlays[e].destroy(t);
            t && ((this._jsPlumb.overlays = {}), (this._jsPlumb.overlayPositions = null));
          },
          setVisible: function(t) {
            this[t ? 'showOverlays' : 'hideOverlays']();
          },
          setAbsoluteOverlayPosition: function(t, e) {
            this._jsPlumb.overlayPositions[t.id] = e;
          },
          getAbsoluteOverlayPosition: function(t) {
            return this._jsPlumb.overlayPositions
              ? this._jsPlumb.overlayPositions[t.id]
              : null;
          },
          _clazzManip: function(t, e, n) {
            if (!n)
              for (var i in this._jsPlumb.overlays)
                this._jsPlumb.overlays[i][t + 'Class'](e);
          },
          addClass: function(t, e) {
            this._clazzManip('add', t, e);
          },
          removeClass: function(t, e) {
            this._clazzManip('remove', t, e);
          },
        });
      }.call('undefined' != typeof window ? window : this), function() {
        'use strict';
        var t = this,
          e = t.jsPlumb,
          n = t.jsPlumbUtil,
          i = function(t, e, n) {
            var i = !1;
            return {
              drag: function() {
                if (i) return (i = !1), !0;
                if (e.element) {
                  var o = n.getUIPosition(arguments, n.getZoom());
                  null != o && jsPlumb.setPosition(e.element, o), n.repaint(
                    e.element,
                    o,
                  ), t.paint({
                    anchorPoint: t.anchor.getCurrentLocation({ element: t }),
                  });
                }
              },
              stopDrag: function() {
                i = !0;
              },
            };
          },
          o = function(t, e, n, i) {
            var o = jsPlumb.createElement('div', { position: 'absolute' });
            e.appendElement(o);
            var s = e.getId(o);
            jsPlumb.setPosition(o, n), (o.style.width = i[0] + 'px'), (o.style.height =
              i[1] + 'px'), e.manage(s, o, !0), (t.id = s), (t.element = o);
          },
          s = function(t, n, i, o, s, r, a, l) {
            return a({
              paintStyle: t,
              endpoint: i,
              anchor: new e.FloatingAnchor({
                reference: n,
                referenceCanvas: o,
                jsPlumbInstance: r,
              }),
              source: s,
              scope: l,
            });
          },
          r = [
            'connectorStyle',
            'connectorHoverStyle',
            'connectorOverlays',
            'connector',
            'connectionType',
            'connectorClass',
            'connectorHoverClass',
          ],
          a = function(t, e) {
            var n = 0;
            if (null != e)
              for (var i = 0; i < t.connections.length; i++)
                if (t.connections[i].sourceId == e || t.connections[i].targetId == e) {
                  n = i;
                  break;
                }
            return t.connections[n];
          };
        (e.Endpoint = function(t) {
          var l = t._jsPlumb,
            u = t.newConnection,
            c = t.newEndpoint;
          (this.idPrefix = '_jsplumb_e_'), (this.defaultLabelLocation = [
            0.5,
            0.5,
          ]), (this.defaultOverlayKeys = [
            'Overlays',
            'EndpointOverlays',
          ]), e.OverlayCapableJsPlumbUIComponent.apply(
            this,
            arguments,
          ), this.appendToDefaultType({
            connectionType: t.connectionType,
            maxConnections:
              null == t.maxConnections
                ? this._jsPlumb.instance.Defaults.MaxConnections
                : t.maxConnections,
            paintStyle:
              t.endpointStyle ||
              t.paintStyle ||
              t.style ||
              this._jsPlumb.instance.Defaults.EndpointStyle ||
              e.Defaults.EndpointStyle,
            hoverPaintStyle:
              t.endpointHoverStyle ||
              t.hoverPaintStyle ||
              this._jsPlumb.instance.Defaults.EndpointHoverStyle ||
              e.Defaults.EndpointHoverStyle,
            connectorStyle: t.connectorStyle,
            connectorHoverStyle: t.connectorHoverStyle,
            connectorClass: t.connectorClass,
            connectorHoverClass: t.connectorHoverClass,
            connectorOverlays: t.connectorOverlays,
            connector: t.connector,
            connectorTooltip: t.connectorTooltip,
          }), (this._jsPlumb.enabled = !(
            !1 === t.enabled
          )), (this._jsPlumb.visible = !0), (this.element = e.getElement(
            t.source,
          )), (this._jsPlumb.uuid = t.uuid), (this._jsPlumb.floatingEndpoint = null), this
            ._jsPlumb.uuid &&
            (t.endpointsByUUID[this._jsPlumb.uuid] = this), (this.elementId =
            t.elementId), (this.dragProxy = t.dragProxy), (this._jsPlumb.connectionCost =
            t.connectionCost), (this._jsPlumb.connectionsDirected =
            t.connectionsDirected), (this._jsPlumb.currentAnchorClass =
            ''), (this._jsPlumb.events = {});
          var h = function() {
            var t = l.endpointAnchorClassPrefix + '-' + this._jsPlumb.currentAnchorClass;
            this._jsPlumb.currentAnchorClass = this.anchor.getCssClass();
            var n =
              l.endpointAnchorClassPrefix +
              (this._jsPlumb.currentAnchorClass
                ? '-' + this._jsPlumb.currentAnchorClass
                : '');
            this.removeClass(t), this.addClass(n), e.updateClasses(this.element, n, t);
          }.bind(this);
          (this.prepareAnchor = function(t) {
            var e = this._jsPlumb.instance.makeAnchor(t, this.elementId, l);
            return e.bind(
              'anchorChanged',
              function(t) {
                this.fire('anchorChanged', { endpoint: this, anchor: t }), h();
              }.bind(this),
            ), e;
          }), (this.setPreparedAnchor = function(t, e) {
            return this._jsPlumb.instance.continuousAnchorFactory.clear(
              this.elementId,
            ), (this.anchor = t), h(), e ||
              this._jsPlumb.instance.repaint(this.elementId), this;
          }), (this.setAnchor = function(t, e) {
            var n = this.prepareAnchor(t);
            return this.setPreparedAnchor(n, e), this;
          });
          var d = function(t) {
            if (this.connections.length > 0)
              for (var e = 0; e < this.connections.length; e++)
                this.connections[e].setHover(t, !1);
            else this.setHover(t);
          }.bind(this);
          this.bind('mouseover', function() {
            d(!0);
          }), this.bind('mouseout', function() {
            d(!1);
          }), t._transient ||
            this._jsPlumb.instance.anchorManager.add(
              this,
              this.elementId,
            ), (this.prepareEndpoint = function(i, o) {
            var s,
              r = function(t, n) {
                var i = l.getRenderMode();
                if (e.Endpoints[i][t]) return new e.Endpoints[i][t](n);
                if (!l.Defaults.DoNotThrowErrors)
                  throw { msg: "jsPlumb: unknown endpoint type '" + t + "'" };
              },
              a = {
                _jsPlumb: this._jsPlumb.instance,
                cssClass: t.cssClass,
                container: t.container,
                tooltip: t.tooltip,
                connectorTooltip: t.connectorTooltip,
                endpoint: this,
              };
            return n.isString(i)
              ? (s = r(i, a))
              : n.isArray(i)
                ? ((a = n.merge(i[1], a)), (s = r(i[0], a)))
                : (s = i.clone()), (s.clone = function() {
              return n.isString(i)
                ? r(i, a)
                : n.isArray(i) ? ((a = n.merge(i[1], a)), r(i[0], a)) : void 0;
            }.bind(this)), (s.typeId = o), s;
          }), (this.setEndpoint = function(t, e) {
            var n = this.prepareEndpoint(t);
            this.setPreparedEndpoint(n, !0);
          }), (this.setPreparedEndpoint = function(t, e) {
            null != this.endpoint &&
              (
                this.endpoint.cleanup(),
                this.endpoint.destroy()
              ), (this.endpoint = t), (this.type = this.endpoint.type), (this.canvas = this.endpoint.canvas);
          }), e.extend(this, t, r), (this.isSource =
            t.isSource || !1), (this.isTemporarySource =
            t.isTemporarySource || !1), (this.isTarget =
            t.isTarget || !1), (this.connections =
            t.connections || []), (this.connectorPointerEvents =
            t['connector-pointer-events']), (this.scope =
            t.scope ||
            l.getDefaultScope()), (this.timestamp = null), (this.reattachConnections =
            t.reattach || l.Defaults.ReattachConnections), (this.connectionsDetachable =
            l.Defaults.ConnectionsDetachable), (!1 !== t.connectionsDetachable &&
            !1 !== t.detachable) ||
            (this.connectionsDetachable = !1), (this.dragAllowedWhenFull =
            !1 !== t.dragAllowedWhenFull), t.onMaxConnections &&
            this.bind(
              'maxConnections',
              t.onMaxConnections,
            ), (this.addConnection = function(t) {
            this.connections.push(t), this[
              (this.connections.length > 0 ? 'add' : 'remove') + 'Class'
            ](l.endpointConnectedClass), this[
              (this.isFull() ? 'add' : 'remove') + 'Class'
            ](l.endpointFullClass);
          }), (this.detachFromConnection = function(t, e, n) {
            (e = null == e ? this.connections.indexOf(t) : e), e >= 0 &&
              (
                this.connections.splice(e, 1),
                this[(this.connections.length > 0 ? 'add' : 'remove') + 'Class'](
                  l.endpointConnectedClass,
                ),
                this[(this.isFull() ? 'add' : 'remove') + 'Class'](l.endpointFullClass)
              ), (this._forceDeleteOnDetach || (!n && this._deleteOnDetach)) &&
              0 === this.connections.length &&
              l.deleteObject({
                endpoint: this,
                fireEvent: !1,
                deleteAttachedObjects: !0 !== n,
              });
          }), (this.detach = function(t) {
            var e = t.connectionIndex,
              n = t.connection,
              i = t.ignoreTarget,
              o = t.fireEvent,
              s = t.originalEvent,
              r = t.endpointBeingDeleted,
              a = t.forceDetach,
              u = null == e ? this.connections.indexOf(n) : e,
              c = !1;
            return (o = !1 !== o), u >= 0 &&
              (a ||
                n._forceDetach ||
                (n.isDetachable() &&
                  n.isDetachAllowed(n) &&
                  this.isDetachAllowed(n) &&
                  l.checkCondition('beforeDetach', n, r))) &&
              (
                l.deleteObject({
                  connection: n,
                  fireEvent: !i && o,
                  originalEvent: s,
                  deleteAttachedObjects: t.deleteAttachedObjects,
                }),
                (c = !0)
              ), c;
          }), (this.detachAll = function(t, e) {
            for (var n = []; this.connections.length > 0; )
              this.detach({
                connection: this.connections[0],
                ignoreTarget: !1,
                forceDetach: !0 === e,
                fireEvent: !1 !== t,
                originalEvent: null,
                endpointBeingDeleted: this,
                connectionIndex: 0,
              }) || (n.push(this.connections[0]), this.connections.splice(0, 1));
            return (this.connections = n), this;
          }), (this.detachFrom = function(t, e, n) {
            for (var i = [], o = 0; o < this.connections.length; o++)
              (this.connections[o].endpoints[1] != t &&
                this.connections[o].endpoints[0] != t) ||
                i.push(this.connections[o]);
            for (var s = 0; s < i.length; s++)
              this.detach({
                connection: i[s],
                ignoreTarget: !1,
                forceDetach: !0,
                fireEvent: e,
                originalEvent: n,
              });
            return this;
          }), (this.getElement = function() {
            return this.element;
          }), (this.setElement = function(i) {
            var o = this._jsPlumb.instance.getId(i),
              s = this.elementId;
            return n.removeWithFunction(
              t.endpointsByElement[this.elementId],
              function(t) {
                return t.id == this.id;
              }.bind(this),
            ), (this.element = e.getElement(i)), (this.elementId = l.getId(
              this.element,
            )), l.anchorManager.rehomeEndpoint(
              this,
              s,
              this.element,
            ), l.dragManager.endpointAdded(this.element), n.addToList(
              t.endpointsByElement,
              o,
              this,
            ), this;
          }), (this.makeInPlaceCopy = function() {
            var e = this.anchor.getCurrentLocation({ element: this }),
              n = this.anchor.getOrientation(this),
              i = this.anchor.getCssClass(),
              o = {
                bind: function() {},
                compute: function() {
                  return [e[0], e[1]];
                },
                getCurrentLocation: function() {
                  return [e[0], e[1]];
                },
                getOrientation: function() {
                  return n;
                },
                getCssClass: function() {
                  return i;
                },
              };
            return c({
              dropOptions: t.dropOptions,
              anchor: o,
              source: this.element,
              paintStyle: this.getPaintStyle(),
              endpoint: t.hideOnDrag ? 'Blank' : this.endpoint,
              _transient: !0,
              scope: this.scope,
              reference: this,
            });
          }), (this.connectorSelector = function() {
            var t = this.connections[0];
            return (
              t ||
              (this.connections.length < this._jsPlumb.maxConnections ||
              -1 == this._jsPlumb.maxConnections
                ? null
                : t)
            );
          }), (this.setStyle = this.setPaintStyle), (this.paint = function(t) {
            t = t || {};
            var e = t.timestamp,
              n = !(!1 === t.recalc);
            if (!e || this.timestamp !== e) {
              var i = l.updateOffset({ elId: this.elementId, timestamp: e }),
                o = t.offset ? t.offset.o : i.o;
              if (null != o) {
                var s = t.anchorPoint,
                  r = t.connectorPaintStyle;
                if (null == s) {
                  var u = t.dimensions || i.s,
                    c = { xy: [o.left, o.top], wh: u, element: this, timestamp: e };
                  if (n && this.anchor.isDynamic && this.connections.length > 0) {
                    var h = a(this, t.elementWithPrecedence),
                      d = h.endpoints[0] == this ? 1 : 0,
                      p = 0 === d ? h.sourceId : h.targetId,
                      f = l.getCachedData(p),
                      g = f.o,
                      v = f.s;
                    (c.txy = [g.left, g.top]), (c.twh = v), (c.tElement = h.endpoints[d]);
                  }
                  s = this.anchor.compute(c);
                }
                this.endpoint.compute(
                  s,
                  this.anchor.getOrientation(this),
                  this._jsPlumb.paintStyleInUse,
                  r || this.paintStyleInUse,
                ), this.endpoint.paint(
                  this._jsPlumb.paintStyleInUse,
                  this.anchor,
                ), (this.timestamp = e);
                for (var m in this._jsPlumb.overlays)
                  if (this._jsPlumb.overlays.hasOwnProperty(m)) {
                    var b = this._jsPlumb.overlays[m];
                    b.isVisible() &&
                      (
                        (this._jsPlumb.overlayPlacements[m] = b.draw(
                          this.endpoint,
                          this._jsPlumb.paintStyleInUse,
                        )),
                        b.paint(this._jsPlumb.overlayPlacements[m])
                      );
                  }
              }
            }
          }), (this.getTypeDescriptor = function() {
            return 'endpoint';
          }), (this.isVisible = function() {
            return this._jsPlumb.visible;
          }), (this.repaint = this.paint);
          var p = !1;
          this.initDraggable = function() {
            if (!p && e.isDragSupported(this.element)) {
              var r,
                a = { id: null, element: null },
                h = null,
                d = !1,
                f = null,
                g = i(this, a, l),
                v = t.dragOptions || {},
                m = {},
                b = e.dragEvents.start,
                y = e.dragEvents.stop,
                P = e.dragEvents.drag,
                x = e.dragEvents.beforeStart,
                _ = function(t) {
                  r = t.e.payload || {};
                },
                E = function(i) {
                  h = this.connectorSelector();
                  var p = !0;
                  this.isEnabled() || (p = !1), null != h ||
                    this.isSource ||
                    this.isTemporarySource ||
                    (p = !1), !this.isSource ||
                    !this.isFull() ||
                    (null != h && this.dragAllowedWhenFull) ||
                    (p = !1), null == h || h.isDetachable(this) || (p = !1);
                  var v = l.checkCondition(
                    null == h ? 'beforeDrag' : 'beforeStartDetach',
                    {
                      endpoint: this,
                      source: this.element,
                      sourceId: this.elementId,
                      connection: h,
                    },
                  );
                  if (
                    (
                      !1 === v
                        ? (p = !1)
                        : 'object' == typeof v ? e.extend(v, r || {}) : (v = r || {}),
                      !1 === p
                    )
                  )
                    return l.stopDrag && l.stopDrag(this.canvas), g.stopDrag(), !1;
                  for (var m = 0; m < this.connections.length; m++)
                    this.connections[m].setHover(!1);
                  this.addClass('endpointDrag'), l.setConnectionBeingDragged(!0), h &&
                    !this.isFull() &&
                    this.isSource &&
                    (h = null), l.updateOffset({ elId: this.elementId });
                  var b = this._jsPlumb.instance.getOffset(this.canvas),
                    y = this.canvas,
                    P = this._jsPlumb.instance.getSize(this.canvas);
                  o(a, l, b, P), l.setAttributes(this.canvas, {
                    dragId: a.id,
                    elId: this.elementId,
                  });
                  var x = this.dragProxy || this.endpoint;
                  if (null == this.dragProxy && null != this.connectionType) {
                    var _ = this._jsPlumb.instance.deriveEndpointAndAnchorSpec(
                      this.connectionType,
                    );
                    _.endpoints[1] && (x = _.endpoints[1]);
                  }
                  var E = this._jsPlumb.instance.makeAnchor('Center');
                  (E.isFloating = !0), (this._jsPlumb.floatingEndpoint = s(
                    this.getPaintStyle(),
                    E,
                    x,
                    this.canvas,
                    a.element,
                    l,
                    c,
                    this.scope,
                  ));
                  var C = this._jsPlumb.floatingEndpoint.anchor;
                  if (null == h)
                    this.setHover(!1, !1), (h = u({
                      sourceEndpoint: this,
                      targetEndpoint: this._jsPlumb.floatingEndpoint,
                      source: this.element,
                      target: a.element,
                      anchors: [this.anchor, this._jsPlumb.floatingEndpoint.anchor],
                      paintStyle: t.connectorStyle,
                      hoverPaintStyle: t.connectorHoverStyle,
                      connector: t.connector,
                      overlays: t.connectorOverlays,
                      type: this.connectionType,
                      cssClass: this.connectorClass,
                      hoverClass: this.connectorHoverClass,
                      scope: t.scope,
                      data: v,
                    })), (h.pending = !0), h.addClass(
                      l.draggingClass,
                    ), this._jsPlumb.floatingEndpoint.addClass(
                      l.draggingClass,
                    ), (this._jsPlumb.floatingEndpoint.anchor = C), l.fire(
                      'connectionDrag',
                      h,
                    ), l.anchorManager.newConnection(h);
                  else {
                    (d = !0), h.setHover(!1);
                    var j = h.endpoints[0].id == this.id ? 0 : 1;
                    this.detachFromConnection(h, null, !0);
                    var S = l.getDragScope(y);
                    l.setAttribute(this.canvas, 'originalScope', S), l.fire(
                      'connectionDrag',
                      h,
                    ), 0 === j
                      ? (
                          (f = [h.source, h.sourceId, y, S]),
                          l.anchorManager.sourceChanged(
                            h.endpoints[j].elementId,
                            a.id,
                            h,
                            a.element,
                          )
                        )
                      : (
                          (f = [h.target, h.targetId, y, S]),
                          (h.target = a.element),
                          (h.targetId = a.id),
                          l.anchorManager.updateOtherEndpoint(
                            h.sourceId,
                            h.endpoints[j].elementId,
                            h.targetId,
                            h,
                          )
                        ), (h.suspendedEndpoint =
                      h.endpoints[j]), (h.suspendedElement = h.endpoints[
                      j
                    ].getElement()), (h.suspendedElementId =
                      h.endpoints[j].elementId), (h.suspendedElementType =
                      0 === j ? 'source' : 'target'), h.suspendedEndpoint.setHover(
                      !1,
                    ), (this._jsPlumb.floatingEndpoint.referenceEndpoint =
                      h.suspendedEndpoint), (h.endpoints[
                      j
                    ] = this._jsPlumb.floatingEndpoint), h.addClass(
                      l.draggingClass,
                    ), this._jsPlumb.floatingEndpoint.addClass(l.draggingClass);
                  }
                  (l.floatingConnections[a.id] = h), n.addToList(
                    t.endpointsByElement,
                    a.id,
                    this._jsPlumb.floatingEndpoint,
                  ), (l.currentlyDragging = !0);
                }.bind(this),
                C = function() {
                  if ((l.setConnectionBeingDragged(!1), h && null != h.endpoints)) {
                    var t = l.getDropEvent(arguments),
                      e = l.getFloatingAnchorIndex(h);
                    if (
                      (
                        (h.endpoints[0 === e ? 1 : 0].anchor.locked = !1),
                        h.removeClass(l.draggingClass),
                        this._jsPlumb &&
                          (h.deleteConnectionNow ||
                            h.endpoints[e] == this._jsPlumb.floatingEndpoint) &&
                          d &&
                          h.suspendedEndpoint
                      )
                    ) {
                      0 === e
                        ? (
                            (h.floatingElement = h.source),
                            (h.floatingId = h.sourceId),
                            (h.floatingEndpoint = h.endpoints[0]),
                            (h.floatingIndex = 0),
                            (h.source = f[0]),
                            (h.sourceId = f[1])
                          )
                        : (
                            (h.floatingElement = h.target),
                            (h.floatingId = h.targetId),
                            (h.floatingEndpoint = h.endpoints[1]),
                            (h.floatingIndex = 1),
                            (h.target = f[0]),
                            (h.targetId = f[1])
                          );
                      var n = this._jsPlumb.floatingEndpoint;
                      l.setDragScope(f[2], f[3]), (h.endpoints[e] =
                        h.suspendedEndpoint), h.isReattach() ||
                      h._forceReattach ||
                      h._forceDetach ||
                      !h.endpoints[0 === e ? 1 : 0].detach({
                        connection: h,
                        ignoreTarget: !1,
                        forceDetach: !1,
                        fireEvent: !0,
                        originalEvent: t,
                        endpointBeingDeleted: !0,
                      })
                        ? (
                            h.setHover(!1),
                            (h._forceDetach = null),
                            (h._forceReattach = null),
                            this._jsPlumb.floatingEndpoint.detachFromConnection(h),
                            h.suspendedEndpoint.addConnection(h),
                            1 == e
                              ? l.anchorManager.updateOtherEndpoint(
                                  h.sourceId,
                                  h.floatingId,
                                  h.targetId,
                                  h,
                                )
                              : l.anchorManager.sourceChanged(
                                  h.floatingId,
                                  h.sourceId,
                                  h,
                                  h.source,
                                ),
                            l.repaint(f[1])
                          )
                        : l.deleteObject({ endpoint: n });
                    }
                    this.deleteAfterDragStop
                      ? l.deleteObject({ endpoint: this })
                      : this._jsPlumb && this.paint({ recalc: !1 }), l.fire(
                      'connectionDragStop',
                      h,
                      t,
                    ), h.pending &&
                      l.fire(
                        'connectionAborted',
                        h,
                        t,
                      ), (l.currentlyDragging = !1), (h.suspendedElement = null), (h.suspendedEndpoint = null), (h = null);
                  }
                  a && a.element && l.remove(a.element, !1, !1), this._jsPlumb &&
                    (
                      (this.canvas.style.visibility = 'visible'),
                      (this.anchor.locked = !1),
                      (this._jsPlumb.floatingEndpoint = null)
                    );
                }.bind(this);
              (v = e.extend(m, v)), (v.scope = this.scope || v.scope), (v[x] = n.wrap(
                v[x],
                _,
                !1,
              )), (v[b] = n.wrap(v[b], E, !1)), (v[P] = n.wrap(v[P], g.drag)), (v[
                y
              ] = n.wrap(v[y], C)), (v.multipleDrop = !1), (v.canDrag = function() {
                return (
                  this.isSource || this.isTemporarySource || this.connections.length > 0
                );
              }.bind(this)), l.initDraggable(
                this.canvas,
                v,
                'internal',
              ), (this.canvas._jsPlumbRelatedElement = this.element), (p = !0);
            }
          };
          var f =
            t.endpoint || this._jsPlumb.instance.Defaults.Endpoint || e.Defaults.Endpoint;
          this.setEndpoint(f, !0);
          var g = t.anchor
            ? t.anchor
            : t.anchors ? t.anchors : l.Defaults.Anchor || 'Top';
          this.setAnchor(g, !0);
          var v = ['default', t.type || ''].join(' ');
          this.addType(
            v,
            t.data,
            !0,
          ), (this.canvas = this.endpoint.canvas), (this.canvas._jsPlumb = this), this.initDraggable();
          var m = function(i, o, s, r) {
            if (e.isDropSupported(this.element)) {
              var a = t.dropOptions || l.Defaults.DropOptions || e.Defaults.DropOptions;
              (a = e.extend({}, a)), (a.scope = a.scope || this.scope);
              var u = e.dragEvents.drop,
                c = e.dragEvents.over,
                h = e.dragEvents.out,
                d = this,
                p = l.EndpointDropHandler({
                  getEndpoint: function() {
                    return d;
                  },
                  jsPlumb: l,
                  enabled: function() {
                    return null == s || s.isEnabled();
                  },
                  isFull: function() {
                    return s.isFull();
                  },
                  element: this.element,
                  elementId: this.elementId,
                  isSource: this.isSource,
                  isTarget: this.isTarget,
                  addClass: function(t) {
                    d.addClass(t);
                  },
                  removeClass: function(t) {
                    d.removeClass(t);
                  },
                  isDropAllowed: function() {
                    return d.isDropAllowed.apply(d, arguments);
                  },
                  reference: r,
                  isRedrop: function(t, e) {
                    return (
                      t.suspendedEndpoint &&
                      e.reference &&
                      t.suspendedEndpoint.id === e.reference.id
                    );
                  },
                });
              (a[u] = n.wrap(a[u], p, !0)), (a[c] = n.wrap(
                a[c],
                function() {
                  var t = e.getDragObject(arguments),
                    n = l.getAttribute(e.getElement(t), 'dragId'),
                    i = l.floatingConnections[n];
                  if (null != i) {
                    var o = l.getFloatingAnchorIndex(i);
                    if (
                      (this.isTarget && 0 !== o) ||
                      (i.suspendedEndpoint &&
                        this.referenceEndpoint &&
                        this.referenceEndpoint.id == i.suspendedEndpoint.id)
                    ) {
                      var s = l.checkCondition('checkDropAllowed', {
                        sourceEndpoint: i.endpoints[o],
                        targetEndpoint: this,
                        connection: i,
                      });
                      this[(s ? 'add' : 'remove') + 'Class'](
                        l.endpointDropAllowedClass,
                      ), this[(s ? 'remove' : 'add') + 'Class'](
                        l.endpointDropForbiddenClass,
                      ), i.endpoints[o].anchor.over(this.anchor, this);
                    }
                  }
                }.bind(this),
              )), (a[h] = n.wrap(
                a[h],
                function() {
                  var t = e.getDragObject(arguments),
                    n = null == t ? null : l.getAttribute(e.getElement(t), 'dragId'),
                    i = n ? l.floatingConnections[n] : null;
                  if (null != i) {
                    var o = l.getFloatingAnchorIndex(i);
                    ((this.isTarget && 0 !== o) ||
                      (i.suspendedEndpoint &&
                        this.referenceEndpoint &&
                        this.referenceEndpoint.id == i.suspendedEndpoint.id)) &&
                      (
                        this.removeClass(l.endpointDropAllowedClass),
                        this.removeClass(l.endpointDropForbiddenClass),
                        i.endpoints[o].anchor.out()
                      );
                  }
                }.bind(this),
              )), l.initDroppable(i, a, 'internal', o);
            }
          }.bind(this);
          return this.anchor.isFloating ||
            m(
              this.canvas,
              !(t._transient || this.anchor.isFloating),
              this,
              t.reference,
            ), this;
        }), n.extend(e.Endpoint, e.OverlayCapableJsPlumbUIComponent, {
          setVisible: function(t, e, n) {
            if (
              (
                (this._jsPlumb.visible = t),
                this.canvas && (this.canvas.style.display = t ? 'block' : 'none'),
                this[t ? 'showOverlays' : 'hideOverlays'](),
                !e
              )
            )
              for (var i = 0; i < this.connections.length; i++)
                if ((this.connections[i].setVisible(t), !n)) {
                  var o = this === this.connections[i].endpoints[0] ? 1 : 0;
                  1 == this.connections[i].endpoints[o].connections.length &&
                    this.connections[i].endpoints[o].setVisible(t, !0, !0);
                }
          },
          getAttachedElements: function() {
            return this.connections;
          },
          applyType: function(t, n) {
            this.setPaintStyle(
              t.endpointStyle || t.paintStyle,
              n,
            ), this.setHoverPaintStyle(
              t.endpointHoverStyle || t.hoverPaintStyle,
              n,
            ), null != t.maxConnections &&
              (this._jsPlumb.maxConnections = t.maxConnections), t.scope &&
              (this.scope = t.scope), e.extend(this, t, r), null != t.cssClass &&
              this.canvas &&
              this._jsPlumb.instance.addClass(
                this.canvas,
                t.cssClass,
              ), e.OverlayCapableJsPlumbUIComponent.applyType(this, t);
          },
          isEnabled: function() {
            return this._jsPlumb.enabled;
          },
          setEnabled: function(t) {
            this._jsPlumb.enabled = t;
          },
          cleanup: function() {
            var t =
              this._jsPlumb.instance.endpointAnchorClassPrefix +
              (this._jsPlumb.currentAnchorClass
                ? '-' + this._jsPlumb.currentAnchorClass
                : '');
            e.removeClass(this.element, t), (this.anchor = null), this.endpoint.cleanup(
              !0,
            ), this.endpoint.destroy(), (this.endpoint = null), this._jsPlumb.instance.destroyDraggable(
              this.canvas,
              'internal',
            ), this._jsPlumb.instance.destroyDroppable(this.canvas, 'internal');
          },
          setHover: function(t) {
            this.endpoint &&
              this._jsPlumb &&
              !this._jsPlumb.instance.isConnectionBeingDragged() &&
              this.endpoint.setHover(t);
          },
          isFull: function() {
            return (
              0 === this._jsPlumb.maxConnections ||
              !(
                this.isFloating() ||
                this._jsPlumb.maxConnections < 0 ||
                this.connections.length < this._jsPlumb.maxConnections
              )
            );
          },
          isFloating: function() {
            return null != this.anchor && this.anchor.isFloating;
          },
          isConnectedTo: function(t) {
            var e = !1;
            if (t)
              for (var n = 0; n < this.connections.length; n++)
                if (
                  this.connections[n].endpoints[1] == t ||
                  this.connections[n].endpoints[0] == t
                ) {
                  e = !0;
                  break;
                }
            return e;
          },
          getConnectionCost: function() {
            return this._jsPlumb.connectionCost;
          },
          setConnectionCost: function(t) {
            this._jsPlumb.connectionCost = t;
          },
          areConnectionsDirected: function() {
            return this._jsPlumb.connectionsDirected;
          },
          setConnectionsDirected: function(t) {
            this._jsPlumb.connectionsDirected = t;
          },
          setElementId: function(t) {
            (this.elementId = t), (this.anchor.elementId = t);
          },
          setReferenceElement: function(t) {
            this.element = e.getElement(t);
          },
          setDragAllowedWhenFull: function(t) {
            this.dragAllowedWhenFull = t;
          },
          equals: function(t) {
            return this.anchor.equals(t.anchor);
          },
          getUuid: function() {
            return this._jsPlumb.uuid;
          },
          computeAnchor: function(t) {
            return this.anchor.compute(t);
          },
        }), (t.jsPlumbInstance.prototype.EndpointDropHandler = function(t) {
          return function(e) {
            var i = t.jsPlumb;
            t.removeClass(i.endpointDropAllowedClass), t.removeClass(
              i.endpointDropForbiddenClass,
            );
            var o = i.getDropEvent(arguments),
              s = i.getDragObject(arguments),
              r = i.getAttribute(s, 'dragId'),
              a = (i.getAttribute(s, 'elId'), i.getAttribute(s, 'originalScope')),
              l = i.floatingConnections[r];
            if (null != l) {
              var u = null != l.suspendedEndpoint;
              if (!u || null != l.suspendedEndpoint._jsPlumb) {
                var c = t.getEndpoint(l);
                if (null != c) {
                  if (t.isRedrop(l, t))
                    return (l._forceReattach = !0), l.setHover(!1), void (
                      t.maybeCleanup && t.maybeCleanup(c)
                    );
                  var h = i.getFloatingAnchorIndex(l);
                  if ((0 === h && !t.isSource) || (1 === h && !t.isTarget))
                    return void (t.maybeCleanup && t.maybeCleanup(c));
                  t.onDrop && t.onDrop(l), a && i.setDragScope(s, a);
                  var d = t.isFull(e);
                  if (
                    (
                      d &&
                        c.fire(
                          'maxConnections',
                          {
                            endpoint: this,
                            connection: l,
                            maxConnections: c._jsPlumb.maxConnections,
                          },
                          o,
                        ),
                      !d && t.enabled()
                    )
                  ) {
                    var p = !0;
                    0 === h
                      ? (
                          (l.floatingElement = l.source),
                          (l.floatingId = l.sourceId),
                          (l.floatingEndpoint = l.endpoints[0]),
                          (l.floatingIndex = 0),
                          (l.source = t.element),
                          (l.sourceId = t.elementId)
                        )
                      : (
                          (l.floatingElement = l.target),
                          (l.floatingId = l.targetId),
                          (l.floatingEndpoint = l.endpoints[1]),
                          (l.floatingIndex = 1),
                          (l.target = t.element),
                          (l.targetId = t.elementId)
                        ), u &&
                      l.suspendedEndpoint.id != c.id &&
                      ((l.isDetachAllowed(l) &&
                        l.endpoints[h].isDetachAllowed(l) &&
                        l.suspendedEndpoint.isDetachAllowed(l) &&
                        i.checkCondition('beforeDetach', l)) ||
                        (p = !1));
                    var f = function(t) {
                      l.endpoints[h].detachFromConnection(l), l.suspendedEndpoint &&
                        l.suspendedEndpoint.detachFromConnection(l), (l.endpoints[
                        h
                      ] = c), c.addConnection(l);
                      var e = c.getParameters();
                      for (var s in e) l.setParameter(s, e[s]);
                      if (u) {
                        var r = l.suspendedEndpoint.elementId;
                        i.fireMoveEvent(
                          {
                            index: h,
                            originalSourceId: 0 === h ? r : l.sourceId,
                            newSourceId: 0 === h ? c.elementId : l.sourceId,
                            originalTargetId: 1 == h ? r : l.targetId,
                            newTargetId: 1 == h ? c.elementId : l.targetId,
                            originalSourceEndpoint:
                              0 === h ? l.suspendedEndpoint : l.endpoints[0],
                            newSourceEndpoint: 0 === h ? c : l.endpoints[0],
                            originalTargetEndpoint:
                              1 == h ? l.suspendedEndpoint : l.endpoints[1],
                            newTargetEndpoint: 1 == h ? c : l.endpoints[1],
                            connection: l,
                          },
                          o,
                        );
                      } else
                        e.draggable &&
                          i.initDraggable(this.element, dragOptions, 'internal', i);
                      1 == h
                        ? i.anchorManager.updateOtherEndpoint(
                            l.sourceId,
                            l.floatingId,
                            l.targetId,
                            l,
                          )
                        : i.anchorManager.sourceChanged(
                            l.floatingId,
                            l.sourceId,
                            l,
                            l.source,
                          ), l.endpoints[0].finalEndpoint &&
                        (
                          l.endpoints[0].detachFromConnection(l),
                          (l.endpoints[0] = l.endpoints[0].finalEndpoint),
                          l.endpoints[0].addConnection(l)
                        ), n.isObject(t) && l.mergeData(t), i.finaliseConnection(
                        l,
                        null,
                        o,
                        !1,
                      ), l.setHover(!1);
                    }.bind(this);
                    if ((p = p && t.isDropAllowed(l.sourceId, l.targetId, l.scope, l, c)))
                      return f(p), !0;
                    !(function() {
                      l.suspendedEndpoint &&
                        (
                          (l.endpoints[h] = l.suspendedEndpoint),
                          l.setHover(!1),
                          (l._forceDetach = !0),
                          0 === h
                            ? (
                                (l.source = l.suspendedEndpoint.element),
                                (l.sourceId = l.suspendedEndpoint.elementId)
                              )
                            : (
                                (l.target = l.suspendedEndpoint.element),
                                (l.targetId = l.suspendedEndpoint.elementId)
                              ),
                          l.suspendedEndpoint.addConnection(l),
                          1 == h
                            ? i.anchorManager.updateOtherEndpoint(
                                l.sourceId,
                                l.floatingId,
                                l.targetId,
                                l,
                              )
                            : i.anchorManager.sourceChanged(
                                l.floatingId,
                                l.sourceId,
                                l,
                                l.source,
                              ),
                          i.repaint(l.sourceId),
                          (l._forceDetach = !1)
                        );
                    })();
                  }
                  t.maybeCleanup && t.maybeCleanup(c), (i.currentlyDragging = !1);
                }
              }
            }
          };
        });
      }.call('undefined' != typeof window ? window : this), function() {
        'use strict';
        var t = this,
          e = t.jsPlumb,
          n = t.jsPlumbUtil,
          i = function(t, n, i, o, s) {
            if (!t.Defaults.DoNotThrowErrors && null == e.Connectors[n][i])
              throw { msg: "jsPlumb: unknown connector type '" + i + "'" };
            return new e.Connectors[n][i](o, s);
          },
          o = function(t, e, n) {
            return t ? n.makeAnchor(t, e, n) : null;
          },
          s = function(t, e, i, o) {
            null != e &&
              (
                (e._jsPlumbConnections = e._jsPlumbConnections || {}),
                o
                  ? delete e._jsPlumbConnections[t.id]
                  : (e._jsPlumbConnections[t.id] = !0),
                n.isEmpty(e._jsPlumbConnections)
                  ? i.removeClass(e, i.connectedClass)
                  : i.addClass(e, i.connectedClass)
              );
          };
        (e.Connection = function(t) {
          var i = t.newEndpoint;
          (this.id = t.id), (this.connector = null), (this.idPrefix =
            '_jsplumb_c_'), (this.defaultLabelLocation = 0.5), (this.defaultOverlayKeys = [
            'Overlays',
            'ConnectionOverlays',
          ]), (this.previousConnection =
            t.previousConnection), (this.source = e.getElement(
            t.source,
          )), (this.target = e.getElement(t.target)), t.sourceEndpoint &&
            (this.source = t.sourceEndpoint.getElement()), t.targetEndpoint &&
            (this.target = t.targetEndpoint.getElement()), e.OverlayCapableJsPlumbUIComponent.apply(
            this,
            arguments,
          ), (this.sourceId = this._jsPlumb.instance.getId(
            this.source,
          )), (this.targetId = this._jsPlumb.instance.getId(this.target)), (this.scope =
            t.scope), (this.endpoints = []), (this.endpointStyles = []);
          var o = this._jsPlumb.instance;
          o.manage(this.sourceId, this.source), o.manage(
            this.targetId,
            this.target,
          ), (this._jsPlumb.visible = !0), (this._jsPlumb.editable =
            !0 === t.editable), (this._jsPlumb.params = {
            cssClass: t.cssClass,
            container: t.container,
            'pointer-events': t['pointer-events'],
            editorParams: t.editorParams,
            overlays: t.overlays,
          }), (this._jsPlumb.lastPaintedAt = null), this.bind(
            'mouseover',
            function() {
              this.setHover(!0);
            }.bind(this),
          ), this.bind(
            'mouseout',
            function() {
              this.setHover(!1);
            }.bind(this),
          ), (this.editableRequested = !1 !== t.editable), (this.setEditable = function(
            t,
          ) {
            return !!this.connector && this.connector.setEditable(t);
          }), (this.isEditable = function() {
            return !!this.connector && this.connector.isEditable();
          }), (this.isEditing = function() {
            return !!this.connector && this.connector.isEditing();
          }), (this.makeEndpoint = function(e, n, s, r) {
            return (s = s || this._jsPlumb.instance.getId(n)), this.prepareEndpoint(
              o,
              i,
              this,
              r,
              e ? 0 : 1,
              t,
              n,
              s,
            );
          }), t.type &&
            (t.endpoints = this._jsPlumb.instance.deriveEndpointAndAnchorSpec(
              t.type,
            ).endpoints);
          var s = this.makeEndpoint(!0, this.source, this.sourceId, t.sourceEndpoint),
            r = this.makeEndpoint(!1, this.target, this.targetId, t.targetEndpoint);
          s && n.addToList(t.endpointsByElement, this.sourceId, s), r &&
            n.addToList(t.endpointsByElement, this.targetId, r), this.scope ||
            (this.scope = this.endpoints[0].scope), null != t.deleteEndpointsOnDetach
            ? (
                (this.endpoints[0]._deleteOnDetach = t.deleteEndpointsOnDetach),
                (this.endpoints[1]._deleteOnDetach = t.deleteEndpointsOnDetach)
              )
            : (
                this.endpoints[0]._doNotDeleteOnDetach ||
                  (this.endpoints[0]._deleteOnDetach = !0),
                this.endpoints[1]._doNotDeleteOnDetach ||
                  (this.endpoints[1]._deleteOnDetach = !0)
              );
          var a = o.Defaults.ConnectionsDetachable;
          !1 === t.detachable && (a = !1), !1 ===
            this.endpoints[0].connectionsDetachable && (a = !1), !1 ===
            this.endpoints[1].connectionsDetachable && (a = !1);
          var l =
            t.reattach ||
            this.endpoints[0].reattachConnections ||
            this.endpoints[1].reattachConnections ||
            o.Defaults.ReattachConnections;
          this.appendToDefaultType({
            detachable: a,
            reattach: l,
            paintStyle:
              this.endpoints[0].connectorStyle ||
              this.endpoints[1].connectorStyle ||
              t.paintStyle ||
              o.Defaults.PaintStyle ||
              e.Defaults.PaintStyle,
            hoverPaintStyle:
              this.endpoints[0].connectorHoverStyle ||
              this.endpoints[1].connectorHoverStyle ||
              t.hoverPaintStyle ||
              o.Defaults.HoverPaintStyle ||
              e.Defaults.HoverPaintStyle,
          });
          var u = o.getSuspendedAt();
          if (!o.isSuspendDrawing()) {
            var c = o.getCachedData(this.sourceId),
              h = c.o,
              d = c.s,
              p = o.getCachedData(this.targetId),
              f = p.o,
              g = p.s,
              v = u || o.timestamp(),
              m = this.endpoints[0].anchor.compute({
                xy: [h.left, h.top],
                wh: d,
                element: this.endpoints[0],
                elementId: this.endpoints[0].elementId,
                txy: [f.left, f.top],
                twh: g,
                tElement: this.endpoints[1],
                timestamp: v,
              });
            this.endpoints[0].paint({
              anchorLoc: m,
              timestamp: v,
            }), (m = this.endpoints[1].anchor.compute({
              xy: [f.left, f.top],
              wh: g,
              element: this.endpoints[1],
              elementId: this.endpoints[1].elementId,
              txy: [h.left, h.top],
              twh: d,
              tElement: this.endpoints[0],
              timestamp: v,
            })), this.endpoints[1].paint({ anchorLoc: m, timestamp: v });
          }
          (this.getTypeDescriptor = function() {
            return 'connection';
          }), (this.getAttachedElements = function() {
            return this.endpoints;
          }), (this.isDetachable = function() {
            return !0 === this._jsPlumb.detachable;
          }), (this.setDetachable = function(t) {
            this._jsPlumb.detachable = !0 === t;
          }), (this.isReattach = function() {
            return (
              !0 === this._jsPlumb.reattach ||
              !0 === this.endpoints[0].reattachConnections ||
              !0 === this.endpoints[1].reattachConnections
            );
          }), (this.setReattach = function(t) {
            this._jsPlumb.reattach = !0 === t;
          }), (this._jsPlumb.cost =
            t.cost || this.endpoints[0].getConnectionCost()), (this._jsPlumb.directed =
            t.directed), null == t.directed &&
            (this._jsPlumb.directed = this.endpoints[0].areConnectionsDirected());
          var b = e.extend({}, this.endpoints[1].getParameters());
          e.extend(b, this.endpoints[0].getParameters()), e.extend(
            b,
            this.getParameters(),
          ), this.setParameters(b), this.setConnector(
            this.endpoints[0].connector ||
              this.endpoints[1].connector ||
              t.connector ||
              o.Defaults.Connector ||
              e.Defaults.Connector,
            !0,
          ), t.geometry && this.connector.setGeometry(t.geometry);
          var y = null != t.data && n.isObject(t.data) ? t.data : {};
          (this.getData = function() {
            return y;
          }), (this.setData = function(t) {
            y = t || {};
          }), (this.mergeData = function(t) {
            y = e.extend(y, t);
          });
          var P = [
            'default',
            this.endpoints[0].connectionType,
            this.endpoints[1].connectionType,
            t.type,
          ].join(' ');
          /[^\s]/.test(P) && this.addType(P, t.data, !0), this.updateConnectedClass();
        }), n.extend(e.Connection, e.OverlayCapableJsPlumbUIComponent, {
          applyType: function(t, n, i) {
            null != t.detachable && this.setDetachable(t.detachable), null !=
              t.reattach && this.setReattach(t.reattach), t.scope &&
              (this.scope = t.scope), null != t.cssClass &&
              this.canvas &&
              this._jsPlumb.instance.addClass(this.canvas, t.cssClass);
            var o = null;
            t.anchor
              ? null == (o = this.getCachedTypeItem('anchors', i.anchor)) &&
                (
                  (o = [
                    this._jsPlumb.instance.makeAnchor(t.anchor),
                    this._jsPlumb.instance.makeAnchor(t.anchor),
                  ]),
                  this.cacheTypeItem('anchors', o, i.anchor)
                )
              : t.anchors &&
                null == (o = this.getCachedTypeItem('anchors', i.anchors)) &&
                (
                  (o = [
                    this._jsPlumb.instance.makeAnchor(t.anchors[0]),
                    this._jsPlumb.instance.makeAnchor(t.anchors[1]),
                  ]),
                  this.cacheTypeItem('anchors', o, i.anchors)
                ), null != o &&
              (
                (this.endpoints[0].anchor = o[0]),
                (this.endpoints[1].anchor = o[1]),
                this.endpoints[1].anchor.isDynamic &&
                  this._jsPlumb.instance.repaint(this.endpoints[1].elementId)
              ), e.OverlayCapableJsPlumbUIComponent.applyType(this, t);
          },
          addClass: function(t, e) {
            e &&
              (
                this.endpoints[0].addClass(t),
                this.endpoints[1].addClass(t),
                this.suspendedEndpoint && this.suspendedEndpoint.addClass(t)
              ), this.connector && this.connector.addClass(t);
          },
          removeClass: function(t, e) {
            e &&
              (
                this.endpoints[0].removeClass(t),
                this.endpoints[1].removeClass(t),
                this.suspendedEndpoint && this.suspendedEndpoint.removeClass(t)
              ), this.connector && this.connector.removeClass(t);
          },
          isVisible: function() {
            return this._jsPlumb.visible;
          },
          setVisible: function(t) {
            (this._jsPlumb.visible = t), this.connector &&
              this.connector.setVisible(t), this.repaint();
          },
          cleanup: function() {
            this.updateConnectedClass(
              !0,
            ), (this.endpoints = null), (this.source = null), (this.target = null), null !=
              this.connector &&
              (
                this.connector.cleanup(!0),
                this.connector.destroy(!0)
              ), (this.connector = null);
          },
          updateConnectedClass: function(t) {
            this._jsPlumb &&
              (
                s(this, this.source, this._jsPlumb.instance, t),
                s(this, this.target, this._jsPlumb.instance, t)
              );
          },
          setHover: function(e) {
            this.connector &&
              this._jsPlumb &&
              !this._jsPlumb.instance.isConnectionBeingDragged() &&
              (
                this.connector.setHover(e),
                t.jsPlumb[e ? 'addClass' : 'removeClass'](
                  this.source,
                  this._jsPlumb.instance.hoverSourceClass,
                ),
                t.jsPlumb[e ? 'addClass' : 'removeClass'](
                  this.target,
                  this._jsPlumb.instance.hoverTargetClass,
                )
              );
          },
          getUuids: function() {
            return [this.endpoints[0].getUuid(), this.endpoints[1].getUuid()];
          },
          getCost: function() {
            return this._jsPlumb ? this._jsPlumb.cost : -1 / 0;
          },
          setCost: function(t) {
            this._jsPlumb.cost = t;
          },
          isDirected: function() {
            return !0 === this._jsPlumb.directed;
          },
          getConnector: function() {
            return this.connector;
          },
          getGeometry: function() {
            return this.connector ? this.connector.getGeometry() : null;
          },
          setGeometry: function(t) {
            this.connector && this.connector.setGeometry(t);
          },
          prepareConnector: function(t, e) {
            var o,
              s = {
                _jsPlumb: this._jsPlumb.instance,
                cssClass:
                  (this._jsPlumb.params.cssClass || '') +
                  (this.isEditable()
                    ? this._jsPlumb.instance.editableConnectorClass
                    : ''),
                container: this._jsPlumb.params.container,
                'pointer-events': this._jsPlumb.params['pointer-events'],
                editable: this.editableRequested,
              },
              r = this._jsPlumb.instance.getRenderMode();
            return n.isString(t)
              ? (o = i(this._jsPlumb.instance, r, t, s, this))
              : n.isArray(t) &&
                (o =
                  1 == t.length
                    ? i(this._jsPlumb.instance, r, t[0], s, this)
                    : i(this._jsPlumb.instance, r, t[0], n.merge(t[1], s), this)), null !=
              e && (o.typeId = e), o;
          },
          setPreparedConnector: function(t, e, n, i) {
            var o,
              s = '';
            if (
              (
                null != this.connector &&
                  (
                    (o = this.connector),
                    (s = o.getClass()),
                    this.connector.cleanup(),
                    this.connector.destroy()
                  ),
                (this.connector = t),
                i && this.cacheTypeItem('connector', t, i),
                (this.canvas = this.connector.canvas),
                (this.bgCanvas = this.connector.bgCanvas),
                this.addClass(s),
                this.canvas && (this.canvas._jsPlumb = this),
                this.bgCanvas && (this.bgCanvas._jsPlumb = this),
                null != o
              )
            )
              for (var r = this.getOverlays(), a = 0; a < r.length; a++)
                r[a].transfer && r[a].transfer(this.connector);
            n || this.setListenerComponent(this.connector), e || this.repaint();
          },
          setConnector: function(t, e, n, i) {
            var o = this.prepareConnector(t, i);
            this.setPreparedConnector(o, e, n, i);
          },
          paint: function(t) {
            if (!this._jsPlumb.instance.isSuspendDrawing() && this._jsPlumb.visible) {
              t = t || {};
              var e = t.timestamp,
                n = this.targetId,
                i = this.sourceId;
              if (null == e || e != this._jsPlumb.lastPaintedAt) {
                var o = this._jsPlumb.instance.updateOffset({ elId: i }).o,
                  s = this._jsPlumb.instance.updateOffset({ elId: n }).o,
                  r = this.endpoints[0],
                  a = this.endpoints[1],
                  l = r.anchor.getCurrentLocation({
                    xy: [o.left, o.top],
                    wh: [o.width, o.height],
                    element: r,
                    timestamp: e,
                  }),
                  u = a.anchor.getCurrentLocation({
                    xy: [s.left, s.top],
                    wh: [s.width, s.height],
                    element: a,
                    timestamp: e,
                  });
                this.connector.resetBounds(), this.connector.compute({
                  sourcePos: l,
                  targetPos: u,
                  sourceEndpoint: this.endpoints[0],
                  targetEndpoint: this.endpoints[1],
                  'stroke-width': this._jsPlumb.paintStyleInUse.strokeWidth,
                  sourceInfo: o,
                  targetInfo: s,
                });
                var c = { minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 };
                for (var h in this._jsPlumb.overlays)
                  if (this._jsPlumb.overlays.hasOwnProperty(h)) {
                    var d = this._jsPlumb.overlays[h];
                    d.isVisible() &&
                      (
                        (this._jsPlumb.overlayPlacements[h] = d.draw(
                          this.connector,
                          this._jsPlumb.paintStyleInUse,
                          this.getAbsoluteOverlayPosition(d),
                        )),
                        (c.minX = Math.min(
                          c.minX,
                          this._jsPlumb.overlayPlacements[h].minX,
                        )),
                        (c.maxX = Math.max(
                          c.maxX,
                          this._jsPlumb.overlayPlacements[h].maxX,
                        )),
                        (c.minY = Math.min(
                          c.minY,
                          this._jsPlumb.overlayPlacements[h].minY,
                        )),
                        (c.maxY = Math.max(
                          c.maxY,
                          this._jsPlumb.overlayPlacements[h].maxY,
                        ))
                      );
                  }
                var p = parseFloat(this._jsPlumb.paintStyleInUse.strokeWidth || 1) / 2,
                  f = parseFloat(this._jsPlumb.paintStyleInUse.strokeWidth || 0),
                  g = {
                    xmin: Math.min(this.connector.bounds.minX - (p + f), c.minX),
                    ymin: Math.min(this.connector.bounds.minY - (p + f), c.minY),
                    xmax: Math.max(this.connector.bounds.maxX + (p + f), c.maxX),
                    ymax: Math.max(this.connector.bounds.maxY + (p + f), c.maxY),
                  };
                this.connector.paint(this._jsPlumb.paintStyleInUse, null, g);
                for (var v in this._jsPlumb.overlays)
                  if (this._jsPlumb.overlays.hasOwnProperty(v)) {
                    var m = this._jsPlumb.overlays[v];
                    m.isVisible() && m.paint(this._jsPlumb.overlayPlacements[v], g);
                  }
              }
              this._jsPlumb.lastPaintedAt = e;
            }
          },
          repaint: function(t) {
            (t = t || {}), this.paint({
              elId: this.sourceId,
              recalc: !(!1 === t.recalc),
              timestamp: t.timestamp,
            });
          },
          prepareEndpoint: function(t, n, i, s, r, a, l, u) {
            var c;
            if (s) (i.endpoints[r] = s), s.addConnection(i);
            else {
              a.endpoints || (a.endpoints = [null, null]);
              var h =
                a.endpoints[r] ||
                a.endpoint ||
                t.Defaults.Endpoints[r] ||
                e.Defaults.Endpoints[r] ||
                t.Defaults.Endpoint ||
                e.Defaults.Endpoint;
              a.endpointStyles ||
                (a.endpointStyles = [null, null]), a.endpointHoverStyles ||
                (a.endpointHoverStyles = [null, null]);
              var d =
                a.endpointStyles[r] ||
                a.endpointStyle ||
                t.Defaults.EndpointStyles[r] ||
                e.Defaults.EndpointStyles[r] ||
                t.Defaults.EndpointStyle ||
                e.Defaults.EndpointStyle;
              null == d.fill &&
                null != a.paintStyle &&
                (d.fill = a.paintStyle.stroke), null == d.outlineStroke &&
                null != a.paintStyle &&
                (d.outlineStroke = a.paintStyle.outlineStroke), null == d.outlineWidth &&
                null != a.paintStyle &&
                (d.outlineWidth = a.paintStyle.outlineWidth);
              var p =
                a.endpointHoverStyles[r] ||
                a.endpointHoverStyle ||
                t.Defaults.EndpointHoverStyles[r] ||
                e.Defaults.EndpointHoverStyles[r] ||
                t.Defaults.EndpointHoverStyle ||
                e.Defaults.EndpointHoverStyle;
              null != a.hoverPaintStyle &&
                (
                  null == p && (p = {}),
                  null == p.fill && (p.fill = a.hoverPaintStyle.stroke)
                );
              var f = a.anchors
                ? a.anchors[r]
                : a.anchor
                  ? a.anchor
                  : o(t.Defaults.Anchors[r], u, t) ||
                    o(e.Defaults.Anchors[r], u, t) ||
                    o(t.Defaults.Anchor, u, t) ||
                    o(e.Defaults.Anchor, u, t);
              (c = n({
                paintStyle: d,
                hoverPaintStyle: p,
                endpoint: h,
                connections: [i],
                uuid: a.uuids ? a.uuids[r] : null,
                anchor: f,
                source: l,
                scope: a.scope,
                reattach: a.reattach || t.Defaults.ReattachConnections,
                detachable: a.detachable || t.Defaults.ConnectionsDetachable,
              })), (i.endpoints[r] = c), !1 === a.drawEndpoints &&
                c.setVisible(!1, !0, !0);
            }
            return c;
          },
        });
      }.call('undefined' != typeof window ? window : this), function() {
        'use strict';
        var t = this,
          e = t.jsPlumbUtil,
          n = t.jsPlumb;
        (n.AnchorManager = function(t) {
          var i = {},
            o = {},
            s = {},
            r = {},
            a = {
              HORIZONTAL: 'horizontal',
              VERTICAL: 'vertical',
              DIAGONAL: 'diagonal',
              IDENTITY: 'identity',
            },
            l = ['left', 'top', 'right', 'bottom'],
            u = {},
            c = this,
            h = {},
            d = t.jsPlumbInstance,
            p = {},
            f = function(t, e, n, i, o, s) {
              if (t === e) return { orientation: a.IDENTITY, a: ['top', 'top'] };
              var r = Math.atan2(i.centery - n.centery, i.centerx - n.centerx),
                u = Math.atan2(n.centery - i.centery, n.centerx - i.centerx),
                c = [],
                h = {};
              !(function(t, e) {
                for (var n = 0; n < t.length; n++)
                  h[t[n]] = {
                    left: [e[n].left, e[n].centery],
                    right: [e[n].right, e[n].centery],
                    top: [e[n].centerx, e[n].top],
                    bottom: [e[n].centerx, e[n].bottom],
                  };
              })(['source', 'target'], [n, i]);
              for (var d = 0; d < l.length; d++)
                for (var p = 0; p < l.length; p++)
                  c.push({
                    source: l[d],
                    target: l[p],
                    dist: Biltong.lineLength(h.source[l[d]], h.target[l[p]]),
                  });
              c.sort(function(t, e) {
                return t.dist < e.dist ? -1 : t.dist > e.dist ? 1 : 0;
              });
              for (
                var f = c[0].source, g = c[0].target, v = 0;
                v < c.length &&
                (
                  (f =
                    !o.isContinuous || o.isEdgeSupported(c[v].source)
                      ? c[v].source
                      : null),
                  (g =
                    !s.isContinuous || s.isEdgeSupported(c[v].target)
                      ? c[v].target
                      : null),
                  null == f || null == g
                );
                v++
              );
              return { a: [f, g], theta: r, theta2: u };
            },
            g = function(t, e, n, i, o, s, r) {
              for (
                var a = [], l = e[o ? 0 : 1] / (i.length + 1), u = 0;
                u < i.length;
                u++
              ) {
                var c = (u + 1) * l,
                  h = s * e[o ? 1 : 0];
                r && (c = e[o ? 0 : 1] - c);
                var d = o ? c : h,
                  p = n[0] + d,
                  f = d / e[0],
                  g = o ? h : c,
                  v = n[1] + g,
                  m = g / e[1];
                a.push([p, v, f, m, i[u][1], i[u][2]]);
              }
              return a;
            },
            v = function(t) {
              return function(e, n) {
                var i = !0;
                return (i = t ? e[0][0] < n[0][0] : e[0][0] > n[0][0]), !1 === i ? -1 : 1;
              };
            },
            m = function(t, e) {
              return (t[0][0] < 0 ? -Math.PI - t[0][0] : Math.PI - t[0][0]) >
              (e[0][0] < 0 ? -Math.PI - e[0][0] : Math.PI - e[0][0])
                ? 1
                : -1;
            },
            b = {
              top: function(t, e) {
                return t[0] > e[0] ? 1 : -1;
              },
              right: v(!0),
              bottom: v(!0),
              left: m,
            },
            y = function(t, e) {
              return t.sort(e);
            },
            P = function(t, e) {
              var n = d.getCachedData(t),
                i = n.s,
                s = n.o,
                a = function(e, n, i, s, a, l, u) {
                  if (s.length > 0)
                    for (
                      var c = y(s, b[e]),
                        h = 'right' === e || 'top' === e,
                        d = g(0, n, i, c, a, l, h),
                        p = function(t, e) {
                          (o[t.id] = [e[0], e[1], e[2], e[3]]), (r[t.id] = u);
                        },
                        f = 0;
                      f < d.length;
                      f++
                    ) {
                      var v = d[f][4],
                        m = v.endpoints[0].elementId === t,
                        P = v.endpoints[1].elementId === t;
                      m && p(v.endpoints[0], d[f]), P && p(v.endpoints[1], d[f]);
                    }
                };
              a('bottom', i, [s.left, s.top], e.bottom, !0, 1, [0, 1]), a(
                'top',
                i,
                [s.left, s.top],
                e.top,
                !0,
                0,
                [0, -1],
              ), a('left', i, [s.left, s.top], e.left, !1, 0, [-1, 0]), a(
                'right',
                i,
                [s.left, s.top],
                e.right,
                !1,
                1,
                [1, 0],
              );
            };
          (this.reset = function() {
            (i = {}), (u = {}), (h = {});
          }), (this.addFloatingConnection = function(t, e) {
            p[t] = e;
          }), (this.removeFloatingConnection = function(t) {
            delete p[t];
          }), (this.newConnection = function(t) {
            var i = t.sourceId,
              o = t.targetId,
              s = t.endpoints,
              r = !0,
              a = function(a, l, c, h, d) {
                i == o &&
                  c.isContinuous &&
                  (
                    t._jsPlumb.instance.removeElement(s[1].canvas),
                    (r = !1)
                  ), e.addToList(u, h, [d, l, c.constructor == n.DynamicAnchor]);
              };
            a(0, s[0], s[0].anchor, o, t), r && a(0, s[1], s[1].anchor, i, t);
          });
          var x = function(t) {
            !(function(t, n) {
              if (t) {
                var i = function(t) {
                  return t[4] == n;
                };
                e.removeWithFunction(t.top, i), e.removeWithFunction(
                  t.left,
                  i,
                ), e.removeWithFunction(t.bottom, i), e.removeWithFunction(t.right, i);
              }
            })(h[t.elementId], t.id);
          };
          (this.connectionDetached = function(t, n) {
            var i = t.connection || t,
              o = t.sourceId,
              s = t.targetId,
              r = i.endpoints,
              a = function(t, n, i, o, s) {
                e.removeWithFunction(u[o], function(t) {
                  return t[0].id == s.id;
                });
              };
            a(0, r[1], r[1].anchor, o, i), a(0, r[0], r[0].anchor, s, i), i.floatingId &&
              (
                a(
                  i.floatingIndex,
                  i.floatingEndpoint,
                  i.floatingEndpoint.anchor,
                  i.floatingId,
                  i,
                ),
                x(i.floatingEndpoint)
              ), x(i.endpoints[0]), x(i.endpoints[1]), n ||
              (c.redraw(i.sourceId), i.targetId !== i.sourceId && c.redraw(i.targetId));
          }), (this.add = function(t, n) {
            e.addToList(i, n, t);
          }), (this.changeId = function(t, e) {
            (u[e] = u[t]), (i[e] = i[t]), delete u[t], delete i[t];
          }), (this.getConnectionsFor = function(t) {
            return u[t] || [];
          }), (this.getEndpointsFor = function(t) {
            return i[t] || [];
          }), (this.deleteEndpoint = function(t) {
            e.removeWithFunction(i[t.elementId], function(e) {
              return e.id == t.id;
            }), x(t);
          }), (this.clearFor = function(t) {
            delete i[t], (i[t] = []);
          });
          var _ = function(n, i, o, s, r, a, l, u, c, h, d, p) {
            var f,
              g,
              v = -1,
              m = s.endpoints[l],
              b = m.id,
              y = [1, 0][l],
              P = [[i, o], s, r, a, b],
              x = n[c],
              _ = m._continuousAnchorEdge ? n[m._continuousAnchorEdge] : null;
            if (_) {
              var E = e.findWithFunction(_, function(t) {
                return t[4] == b;
              });
              if (-1 != E)
                for (_.splice(E, 1), f = 0; f < _.length; f++)
                  (g = _[f][1]), e.addWithFunction(d, g, function(t) {
                    return t.id == g.id;
                  }), e.addWithFunction(p, _[f][1].endpoints[l], function(t) {
                    return t.id == g.endpoints[l].id;
                  }), e.addWithFunction(p, _[f][1].endpoints[y], function(t) {
                    return t.id == g.endpoints[y].id;
                  });
            }
            for (f = 0; f < x.length; f++)
              (g = x[f][1]), 1 == t.idx &&
                x[f][3] === a &&
                -1 == v &&
                (v = f), e.addWithFunction(d, g, function(t) {
                return t.id == g.id;
              }), e.addWithFunction(p, x[f][1].endpoints[l], function(t) {
                return t.id == g.endpoints[l].id;
              }), e.addWithFunction(p, x[f][1].endpoints[y], function(t) {
                return t.id == g.endpoints[y].id;
              });
            var C = u ? (-1 != v ? v : 0) : x.length;
            x.splice(C, 0, P), (m._continuousAnchorEdge = c);
          };
          (this.updateOtherEndpoint = function(t, i, o, s) {
            var r = e.findWithFunction(u[t], function(t) {
                return t[0].id === s.id;
              }),
              a = e.findWithFunction(u[i], function(t) {
                return t[0].id === s.id;
              });
            -1 != r &&
              (
                (u[t][r][0] = s),
                (u[t][r][1] = s.endpoints[1]),
                (u[t][r][2] = s.endpoints[1].anchor.constructor == n.DynamicAnchor)
              ), a > -1 &&
              (
                u[i].splice(a, 1),
                e.addToList(u, o, [
                  s,
                  s.endpoints[0],
                  s.endpoints[0].anchor.constructor == n.DynamicAnchor,
                ])
              ), s.updateConnectedClass();
          }), (this.sourceChanged = function(t, i, o, s) {
            if (t !== i) {
              (o.sourceId = i), (o.source = s), e.removeWithFunction(u[t], function(t) {
                return t[0].id === o.id;
              });
              var r = e.findWithFunction(u[o.targetId], function(t) {
                return t[0].id === o.id;
              });
              r > -1 &&
                (
                  (u[o.targetId][r][0] = o),
                  (u[o.targetId][r][1] = o.endpoints[0]),
                  (u[o.targetId][r][2] =
                    o.endpoints[0].anchor.constructor == n.DynamicAnchor)
                ), e.addToList(u, i, [
                o,
                o.endpoints[1],
                o.endpoints[1].anchor.constructor == n.DynamicAnchor,
              ]), o.endpoints[1].anchor.isContinuous &&
                (o.source === o.target
                  ? o._jsPlumb.instance.removeElement(o.endpoints[1].canvas)
                  : null == o.endpoints[1].canvas.parentNode &&
                    o._jsPlumb.instance.appendElement(
                      o.endpoints[1].canvas,
                    )), o.updateConnectedClass();
            }
          }), (this.rehomeEndpoint = function(t, e, n) {
            var o = i[e] || [],
              s = d.getId(n);
            if (s !== e) {
              var r = o.indexOf(t);
              if (r > -1) {
                var a = o.splice(r, 1)[0];
                c.add(a, s);
              }
            }
            for (var l = 0; l < t.connections.length; l++)
              t.connections[l].sourceId == e
                ? c.sourceChanged(e, t.elementId, t.connections[l], t.element)
                : t.connections[l].targetId == e &&
                  (
                    (t.connections[l].targetId = t.elementId),
                    (t.connections[l].target = t.element),
                    c.updateOtherEndpoint(
                      t.connections[l].sourceId,
                      e,
                      t.elementId,
                      t.connections[l],
                    )
                  );
          }), (this.redraw = function(t, o, s, r, a, l) {
            if (!d.isSuspendDrawing()) {
              var c = i[t] || [],
                g = u[t] || [],
                v = [],
                m = [],
                b = [];
              (s = s || d.timestamp()), (r = r || { left: 0, top: 0 }), o &&
                (o = { left: o.left + r.left, top: o.top + r.top });
              for (
                var y = d.updateOffset({ elId: t, offset: o, recalc: !1, timestamp: s }),
                  x = {},
                  E = 0;
                E < g.length;
                E++
              ) {
                var C = g[E][0],
                  j = C.sourceId,
                  S = C.targetId,
                  D = C.endpoints[0].anchor.isContinuous,
                  w = C.endpoints[1].anchor.isContinuous;
                if (D || w) {
                  var A = j + '_' + S,
                    O = x[A],
                    I = C.sourceId == t ? 1 : 0;
                  D &&
                    !h[j] &&
                    (h[j] = { top: [], right: [], bottom: [], left: [] }), w &&
                    !h[S] &&
                    (h[S] = { top: [], right: [], bottom: [], left: [] }), t != S &&
                    d.updateOffset({ elId: S, timestamp: s }), t != j &&
                    d.updateOffset({ elId: j, timestamp: s });
                  var k = d.getCachedData(S),
                    T = d.getCachedData(j);
                  S == j && (D || w)
                    ? (
                        _(h[j], -Math.PI / 2, 0, C, !1, S, 0, !1, 'top', 0, v, m),
                        _(h[S], -Math.PI / 2, 0, C, !1, j, 1, !1, 'top', 0, v, m)
                      )
                    : (
                        O ||
                          (
                            (O = f(
                              j,
                              S,
                              T.o,
                              k.o,
                              C.endpoints[0].anchor,
                              C.endpoints[1].anchor,
                            )),
                            (x[A] = O)
                          ),
                        D && _(h[j], O.theta, 0, C, !1, S, 0, !1, O.a[0], 0, v, m),
                        w && _(h[S], O.theta2, -1, C, !0, j, 1, !0, O.a[1], 0, v, m)
                      ), D &&
                    e.addWithFunction(b, j, function(t) {
                      return t === j;
                    }), w &&
                    e.addWithFunction(b, S, function(t) {
                      return t === S;
                    }), e.addWithFunction(v, C, function(t) {
                    return t.id == C.id;
                  }), ((D && 0 === I) || (w && 1 === I)) &&
                    e.addWithFunction(m, C.endpoints[I], function(t) {
                      return t.id == C.endpoints[I].id;
                    });
                }
              }
              for (E = 0; E < c.length; E++)
                0 === c[E].connections.length &&
                  c[E].anchor.isContinuous &&
                  (
                    h[t] || (h[t] = { top: [], right: [], bottom: [], left: [] }),
                    _(
                      h[t],
                      -Math.PI / 2,
                      0,
                      { endpoints: [c[E], c[E]], paint: function() {} },
                      !1,
                      t,
                      0,
                      !1,
                      c[E].anchor.getDefaultFace(),
                      0,
                      v,
                      m,
                    ),
                    e.addWithFunction(b, t, function(e) {
                      return e === t;
                    })
                  );
              for (E = 0; E < b.length; E++) P(b[E], h[b[E]]);
              for (E = 0; E < c.length; E++)
                c[E].paint({
                  timestamp: s,
                  offset: y,
                  dimensions: y.s,
                  recalc: !0 !== l,
                });
              for (E = 0; E < m.length; E++) {
                var M = d.getCachedData(m[E].elementId);
                m[E].paint({ timestamp: s, offset: M, dimensions: M.s });
              }
              for (E = 0; E < g.length; E++) {
                var L = g[E][1];
                if (L.anchor.constructor == n.DynamicAnchor) {
                  L.paint({
                    elementWithPrecedence: t,
                    timestamp: s,
                  }), e.addWithFunction(v, g[E][0], function(t) {
                    return t.id == g[E][0].id;
                  });
                  for (var N = 0; N < L.connections.length; N++)
                    L.connections[N] !== g[E][0] &&
                      e.addWithFunction(v, L.connections[N], function(t) {
                        return t.id == L.connections[N].id;
                      });
                } else
                  L.anchor.constructor == n.Anchor &&
                    e.addWithFunction(v, g[E][0], function(t) {
                      return t.id == g[E][0].id;
                    });
              }
              var F = p[t];
              for (
                F && F.paint({ timestamp: s, recalc: !1, elId: t }), E = 0;
                E < v.length;
                E++
              )
                v[E].paint({ elId: t, timestamp: s, recalc: !1, clearEdits: a });
            }
          });
          var E = function(t) {
            e.EventGenerator.apply(this), (this.type =
              'Continuous'), (this.isDynamic = !0), (this.isContinuous = !0);
            for (
              var n = t.faces || ['top', 'right', 'bottom', 'left'],
                i = !(!1 === t.clockwise),
                a = {},
                l = { top: 'bottom', right: 'left', left: 'right', bottom: 'top' },
                u = { top: 'right', right: 'bottom', left: 'top', bottom: 'left' },
                c = { top: 'left', right: 'top', left: 'bottom', bottom: 'right' },
                h = i ? u : c,
                d = i ? c : u,
                p = t.cssClass || '',
                f = 0;
              f < n.length;
              f++
            )
              a[n[f]] = !0;
            (this.getDefaultFace = function() {
              return 0 === n.length ? 'top' : n[0];
            }), (this.verifyEdge = function(t) {
              return a[t] ? t : a[l[t]] ? l[t] : a[h[t]] ? h[t] : a[d[t]] ? d[t] : t;
            }), (this.isEdgeSupported = function(t) {
              return !0 === a[t];
            }), (this.compute = function(t) {
              return s[t.element.id] || o[t.element.id] || [0, 0];
            }), (this.getCurrentLocation = function(t) {
              return s[t.element.id] || o[t.element.id] || [0, 0];
            }), (this.getOrientation = function(t) {
              return r[t.id] || [0, 0];
            }), (this.clearUserDefinedLocation = function() {
              delete s[t.elementId];
            }), (this.setUserDefinedLocation = function(e) {
              s[t.elementId] = e;
            }), (this.getCssClass = function() {
              return p;
            });
          };
          d.continuousAnchorFactory = {
            get: function(t) {
              return new E(t);
            },
            clear: function(t) {
              delete s[t], delete o[t];
            },
          };
        }), (n.Anchor = function(t) {
          (this.x = t.x || 0), (this.y = t.y || 0), (this.elementId =
            t.elementId), (this.cssClass =
            t.cssClass ||
            ''), (this.userDefinedLocation = null), (this.orientation = t.orientation || [
            0,
            0,
          ]), (this.lastReturnValue = null), (this.offsets = t.offsets || [
            0,
            0,
          ]), (this.timestamp = null), e.EventGenerator.apply(
            this,
          ), (this.compute = function(t) {
            var e = t.xy,
              n = t.wh,
              i = t.timestamp;
            return t.clearUserDefinedLocation && (this.userDefinedLocation = null), i &&
            i === this.timestamp
              ? this.lastReturnValue
              : (
                  null != this.userDefinedLocation
                    ? (this.lastReturnValue = this.userDefinedLocation)
                    : (this.lastReturnValue = [
                        e[0] + this.x * n[0] + this.offsets[0],
                        e[1] + this.y * n[1] + this.offsets[1],
                      ]),
                  (this.timestamp = i),
                  this.lastReturnValue
                );
          }), (this.getCurrentLocation = function(t) {
            return (t = t || {}), null == this.lastReturnValue ||
            (null != t.timestamp && this.timestamp != t.timestamp)
              ? this.compute(t)
              : this.lastReturnValue;
          });
        }), e.extend(n.Anchor, e.EventGenerator, {
          equals: function(t) {
            if (!t) return !1;
            var e = t.getOrientation(),
              n = this.getOrientation();
            return (
              this.x == t.x &&
              this.y == t.y &&
              this.offsets[0] == t.offsets[0] &&
              this.offsets[1] == t.offsets[1] &&
              n[0] == e[0] &&
              n[1] == e[1]
            );
          },
          getUserDefinedLocation: function() {
            return this.userDefinedLocation;
          },
          setUserDefinedLocation: function(t) {
            this.userDefinedLocation = t;
          },
          clearUserDefinedLocation: function() {
            this.userDefinedLocation = null;
          },
          getOrientation: function() {
            return this.orientation;
          },
          getCssClass: function() {
            return this.cssClass;
          },
        }), (n.FloatingAnchor = function(t) {
          n.Anchor.apply(this, arguments);
          var e = t.reference,
            i = t.referenceCanvas,
            o = n.getSize(i),
            s = null,
            r = null;
          (this.orientation = null), (this.x = 0), (this.y = 0), (this.isFloating = !0), (this.compute = function(
            t,
          ) {
            var e = t.xy,
              n = [e[0] + o[0] / 2, e[1] + o[1] / 2];
            return (r = n), n;
          }), (this.getOrientation = function(t) {
            if (s) return s;
            var n = e.getOrientation(t);
            return [0 * Math.abs(n[0]) * -1, 0 * Math.abs(n[1]) * -1];
          }), (this.over = function(t, e) {
            s = t.getOrientation(e);
          }), (this.out = function() {
            s = null;
          }), (this.getCurrentLocation = function(t) {
            return null == r ? this.compute(t) : r;
          });
        }), e.extend(n.FloatingAnchor, n.Anchor);
        var i = function(t, e, i) {
          return t.constructor == n.Anchor ? t : e.makeAnchor(t, i, e);
        };
        (n.DynamicAnchor = function(t) {
          n.Anchor.apply(
            this,
            arguments,
          ), (this.isDynamic = !0), (this.anchors = []), (this.elementId =
            t.elementId), (this.jsPlumbInstance = t.jsPlumbInstance);
          for (var e = 0; e < t.anchors.length; e++)
            this.anchors[e] = i(t.anchors[e], this.jsPlumbInstance, this.elementId);
          (this.getAnchors = function() {
            return this.anchors;
          }), (this.locked = !1);
          var o = this.anchors.length > 0 ? this.anchors[0] : null,
            s = o,
            r = this,
            a = function(t, e, n, i, o) {
              var s = i[0] + t.x * o[0],
                r = i[1] + t.y * o[1],
                a = i[0] + o[0] / 2,
                l = i[1] + o[1] / 2;
              return (
                Math.sqrt(Math.pow(e - s, 2) + Math.pow(n - r, 2)) +
                Math.sqrt(Math.pow(a - s, 2) + Math.pow(l - r, 2))
              );
            },
            l =
              t.selector ||
              function(t, e, n, i, o) {
                for (
                  var s = n[0] + i[0] / 2, r = n[1] + i[1] / 2, l = -1, u = 1 / 0, c = 0;
                  c < o.length;
                  c++
                ) {
                  var h = a(o[c], s, r, t, e);
                  h < u && ((l = c + 0), (u = h));
                }
                return o[l];
              };
          (this.compute = function(t) {
            var e = t.xy,
              n = t.wh,
              i = t.txy,
              a = t.twh;
            this.timestamp = t.timestamp;
            var u = r.getUserDefinedLocation();
            return null != u
              ? u
              : this.locked || null == i || null == a
                ? o.compute(t)
                : (
                    (t.timestamp = null),
                    (o = l(e, n, i, a, this.anchors)),
                    (this.x = o.x),
                    (this.y = o.y),
                    o != s && this.fire('anchorChanged', o),
                    (s = o),
                    o.compute(t)
                  );
          }), (this.getCurrentLocation = function(t) {
            return (
              this.getUserDefinedLocation() ||
              (null != o ? o.getCurrentLocation(t) : null)
            );
          }), (this.getOrientation = function(t) {
            return null != o ? o.getOrientation(t) : [0, 0];
          }), (this.over = function(t, e) {
            null != o && o.over(t, e);
          }), (this.out = function() {
            null != o && o.out();
          }), (this.getCssClass = function() {
            return (o && o.getCssClass()) || '';
          });
        }), e.extend(n.DynamicAnchor, n.Anchor);
        var o = function(t, e, i, o, s, r) {
          n.Anchors[s] = function(n) {
            var a = n.jsPlumbInstance.makeAnchor(
              [t, e, i, o, 0, 0],
              n.elementId,
              n.jsPlumbInstance,
            );
            return (a.type = s), r && r(a, n), a;
          };
        };
        o(0.5, 0, 0, -1, 'TopCenter'), o(0.5, 1, 0, 1, 'BottomCenter'), o(
          0,
          0.5,
          -1,
          0,
          'LeftMiddle',
        ), o(1, 0.5, 1, 0, 'RightMiddle'), o(0.5, 0, 0, -1, 'Top'), o(
          0.5,
          1,
          0,
          1,
          'Bottom',
        ), o(0, 0.5, -1, 0, 'Left'), o(1, 0.5, 1, 0, 'Right'), o(
          0.5,
          0.5,
          0,
          0,
          'Center',
        ), o(1, 0, 0, -1, 'TopRight'), o(1, 1, 0, 1, 'BottomRight'), o(
          0,
          0,
          0,
          -1,
          'TopLeft',
        ), o(0, 1, 0, 1, 'BottomLeft'), (n.Defaults.DynamicAnchors = function(t) {
          return t.jsPlumbInstance.makeAnchors(
            ['TopCenter', 'RightMiddle', 'BottomCenter', 'LeftMiddle'],
            t.elementId,
            t.jsPlumbInstance,
          );
        }), (n.Anchors.AutoDefault = function(t) {
          var e = t.jsPlumbInstance.makeDynamicAnchor(n.Defaults.DynamicAnchors(t));
          return (e.type = 'AutoDefault'), e;
        });
        var s = function(t, e) {
          n.Anchors[t] = function(n) {
            var i = n.jsPlumbInstance.makeAnchor(
              ['Continuous', { faces: e }],
              n.elementId,
              n.jsPlumbInstance,
            );
            return (i.type = t), i;
          };
        };
        (n.Anchors.Continuous = function(t) {
          return t.jsPlumbInstance.continuousAnchorFactory.get(t);
        }), s('ContinuousLeft', ['left']), s('ContinuousTop', [
          'top',
        ]), s('ContinuousBottom', ['bottom']), s('ContinuousRight', [
          'right',
        ]), o(0, 0, 0, 0, 'Assign', function(t, e) {
          var n = e.position || 'Fixed';
          (t.positionFinder =
            n.constructor == String
              ? e.jsPlumbInstance.AnchorPositionFinders[n]
              : n), (t.constructorParams = e);
        }), (t.jsPlumbInstance.prototype.AnchorPositionFinders = {
          Fixed: function(t, e, n) {
            return [(t.left - e.left) / n[0], (t.top - e.top) / n[1]];
          },
          Grid: function(t, e, n, i) {
            var o = t.left - e.left,
              s = t.top - e.top,
              r = n[0] / i.grid[0],
              a = n[1] / i.grid[1],
              l = Math.floor(o / r),
              u = Math.floor(s / a);
            return [(l * r + r / 2) / n[0], (u * a + a / 2) / n[1]];
          },
        }), (n.Anchors.Perimeter = function(t) {
          t = t || {};
          var e = t.anchorCount || 60,
            n = t.shape;
          if (!n) throw new Error('no shape supplied to Perimeter Anchor type');
          var i = function() {
              for (var t = 2 * Math.PI / e, n = 0, i = [], o = 0; o < e; o++) {
                var s = 0.5 + 0.5 * Math.sin(n),
                  r = 0.5 + 0.5 * Math.cos(n);
                i.push([s, r, 0, 0]), (n += t);
              }
              return i;
            },
            o = function(t) {
              for (
                var n = e / t.length,
                  i = [],
                  o = function(t, o, s, r, a) {
                    n = e * a;
                    for (var l = (s - t) / n, u = (r - o) / n, c = 0; c < n; c++)
                      i.push([t + l * c, o + u * c, 0, 0]);
                  },
                  s = 0;
                s < t.length;
                s++
              )
                o.apply(null, t[s]);
              return i;
            },
            s = function(t) {
              for (var e = [], n = 0; n < t.length; n++)
                e.push([t[n][0], t[n][1], t[n][2], t[n][3], 1 / t.length]);
              return o(e);
            },
            r = function() {
              return s([[0, 0, 1, 0], [1, 0, 1, 1], [1, 1, 0, 1], [0, 1, 0, 0]]);
            },
            a = {
              Circle: i,
              Ellipse: i,
              Diamond: function() {
                return s([
                  [0.5, 0, 1, 0.5],
                  [1, 0.5, 0.5, 1],
                  [0.5, 1, 0, 0.5],
                  [0, 0.5, 0.5, 0],
                ]);
              },
              Rectangle: r,
              Square: r,
              Triangle: function() {
                return s([[0.5, 0, 1, 1], [1, 1, 0, 1], [0, 1, 0.5, 0]]);
              },
              Path: function(t) {
                for (var e = t.points, n = [], i = 0, s = 0; s < e.length - 1; s++) {
                  var r = Math.sqrt(
                    Math.pow(e[s][2] - e[s][0]) + Math.pow(e[s][3] - e[s][1]),
                  );
                  (i += r), n.push([e[s][0], e[s][1], e[s + 1][0], e[s + 1][1], r]);
                }
                for (var a = 0; a < n.length; a++) n[a][4] = n[a][4] / i;
                return o(n);
              },
            };
          if (!a[n])
            throw new Error('Shape [' + n + '] is unknown by Perimeter Anchor type');
          var l = a[n](t);
          t.rotation &&
            (l = (function(t, e) {
              for (var n = [], i = e / 180 * Math.PI, o = 0; o < t.length; o++) {
                var s = t[o][0] - 0.5,
                  r = t[o][1] - 0.5;
                n.push([
                  s * Math.cos(i) - r * Math.sin(i) + 0.5,
                  s * Math.sin(i) + r * Math.cos(i) + 0.5,
                  t[o][2],
                  t[o][3],
                ]);
              }
              return n;
            })(l, t.rotation));
          var u = t.jsPlumbInstance.makeDynamicAnchor(l);
          return (u.type = 'Perimeter'), u;
        });
      }.call('undefined' != typeof window ? window : this), function() {
        'use strict';
        var t = this,
          e = t.jsPlumb,
          n = t.jsPlumbUtil,
          i = t.Biltong;
        (e.Segments = {
          AbstractSegment: function(t) {
            (this.params = t), (this.findClosestPointOnPath = function(t, e) {
              return { d: 1 / 0, x: null, y: null, l: null };
            }), (this.getBounds = function() {
              return {
                minX: Math.min(t.x1, t.x2),
                minY: Math.min(t.y1, t.y2),
                maxX: Math.max(t.x1, t.x2),
                maxY: Math.max(t.y1, t.y2),
              };
            });
          },
          Straight: function(t) {
            var n,
              o,
              s,
              r,
              a,
              l,
              u,
              c = (
                e.Segments.AbstractSegment.apply(this, arguments),
                function() {
                  (n = Math.sqrt(
                    Math.pow(a - r, 2) + Math.pow(u - l, 2),
                  )), (o = i.gradient({ x: r, y: l }, { x: a, y: u })), (s = -1 / o);
                }
              );
            (this.type = 'Straight'), (this.getLength = function() {
              return n;
            }), (this.getGradient = function() {
              return o;
            }), (this.getCoordinates = function() {
              return { x1: r, y1: l, x2: a, y2: u };
            }), (this.setCoordinates = function(t) {
              (r = t.x1), (l = t.y1), (a = t.x2), (u = t.y2), c();
            }), this.setCoordinates({
              x1: t.x1,
              y1: t.y1,
              x2: t.x2,
              y2: t.y2,
            }), (this.getBounds = function() {
              return {
                minX: Math.min(r, a),
                minY: Math.min(l, u),
                maxX: Math.max(r, a),
                maxY: Math.max(l, u),
              };
            }), (this.pointOnPath = function(t, e) {
              if (0 !== t || e) {
                if (1 != t || e) {
                  var o = e ? (t > 0 ? t : n + t) : t * n;
                  return i.pointOnLine({ x: r, y: l }, { x: a, y: u }, o);
                }
                return { x: a, y: u };
              }
              return { x: r, y: l };
            }), (this.gradientAtPoint = function(t) {
              return o;
            }), (this.pointAlongPathFrom = function(t, e, n) {
              var o = this.pointOnPath(t, n),
                s = e <= 0 ? { x: r, y: l } : { x: a, y: u };
              return e <= 0 && Math.abs(e) > 1 && (e *= -1), i.pointOnLine(o, s, e);
            });
            var h = function(t, e, n) {
                return n >= Math.min(t, e) && n <= Math.max(t, e);
              },
              d = function(t, e, n) {
                return Math.abs(n - t) < Math.abs(n - e) ? t : e;
              };
            this.findClosestPointOnPath = function(t, e) {
              var c = { d: 1 / 0, x: null, y: null, l: null, x1: r, x2: a, y1: l, y2: u };
              if (0 === o) (c.y = l), (c.x = h(r, a, t) ? t : d(r, a, t));
              else if (o == 1 / 0 || o == -1 / 0)
                (c.x = r), (c.y = h(l, u, e) ? e : d(l, u, e));
              else {
                var p = l - o * r,
                  f = e - s * t,
                  g = (f - p) / (o - s),
                  v = o * g + p;
                (c.x = h(r, a, g) ? g : d(r, a, g)), (c.y = h(l, u, v) ? v : d(l, u, v));
              }
              var m = i.lineLength([c.x, c.y], [r, l]);
              return (c.d = i.lineLength([t, e], [c.x, c.y])), (c.l = m / n), c;
            };
          },
          Arc: function(t) {
            var n = (
                e.Segments.AbstractSegment.apply(this, arguments),
                function(e, n) {
                  return i.theta([t.cx, t.cy], [e, n]);
                }
              ),
              o = function(t, e) {
                if (t.anticlockwise) {
                  var n = t.startAngle < t.endAngle ? t.startAngle + s : t.startAngle;
                  return n - Math.abs(n - t.endAngle) * e;
                }
                var i = t.endAngle < t.startAngle ? t.endAngle + s : t.endAngle,
                  o = Math.abs(i - t.startAngle);
                return t.startAngle + o * e;
              },
              s = 2 * Math.PI;
            (this.radius = t.r), (this.anticlockwise = t.ac), (this.type =
              'Arc'), t.startAngle && t.endAngle
              ? (
                  (this.startAngle = t.startAngle),
                  (this.endAngle = t.endAngle),
                  (this.x1 = t.cx + this.radius * Math.cos(t.startAngle)),
                  (this.y1 = t.cy + this.radius * Math.sin(t.startAngle)),
                  (this.x2 = t.cx + this.radius * Math.cos(t.endAngle)),
                  (this.y2 = t.cy + this.radius * Math.sin(t.endAngle))
                )
              : (
                  (this.startAngle = n(t.x1, t.y1)),
                  (this.endAngle = n(t.x2, t.y2)),
                  (this.x1 = t.x1),
                  (this.y1 = t.y1),
                  (this.x2 = t.x2),
                  (this.y2 = t.y2)
                ), this.endAngle < 0 && (this.endAngle += s), this.startAngle < 0 &&
              (this.startAngle += s);
            var r = this.endAngle < this.startAngle ? this.endAngle + s : this.endAngle;
            (this.sweep = Math.abs(r - this.startAngle)), this.anticlockwise &&
              (this.sweep = s - this.sweep);
            var a = 2 * Math.PI * this.radius,
              l = this.sweep / s,
              u = a * l;
            (this.getLength = function() {
              return u;
            }), (this.getBounds = function() {
              return {
                minX: t.cx - t.r,
                maxX: t.cx + t.r,
                minY: t.cy - t.r,
                maxY: t.cy + t.r,
              };
            });
            var c = function(t) {
              var e = Math.floor(t),
                n = Math.ceil(t);
              return t - e < 1e-10 ? e : n - t < 1e-10 ? n : t;
            };
            (this.pointOnPath = function(e, n) {
              if (0 === e) return { x: this.x1, y: this.y1, theta: this.startAngle };
              if (1 == e) return { x: this.x2, y: this.y2, theta: this.endAngle };
              n && (e /= u);
              var i = o(this, e),
                s = t.cx + t.r * Math.cos(i),
                r = t.cy + t.r * Math.sin(i);
              return { x: c(s), y: c(r), theta: i };
            }), (this.gradientAtPoint = function(e, n) {
              var o = this.pointOnPath(e, n),
                s = i.normal([t.cx, t.cy], [o.x, o.y]);
              return this.anticlockwise || (s != 1 / 0 && s != -1 / 0) || (s *= -1), s;
            }), (this.pointAlongPathFrom = function(e, n, i) {
              var o = this.pointOnPath(e, i),
                s = n / a * 2 * Math.PI,
                r = this.anticlockwise ? -1 : 1,
                l = o.theta + r * s;
              return {
                x: t.cx + this.radius * Math.cos(l),
                y: t.cy + this.radius * Math.sin(l),
              };
            });
          },
          Bezier: function(n) {
            (this.curve = [
              { x: n.x1, y: n.y1 },
              { x: n.cp1x, y: n.cp1y },
              { x: n.cp2x, y: n.cp2y },
              { x: n.x2, y: n.y2 },
            ]), e.Segments.AbstractSegment.apply(this, arguments), (this.bounds = {
              minX: Math.min(n.x1, n.x2, n.cp1x, n.cp2x),
              minY: Math.min(n.y1, n.y2, n.cp1y, n.cp2y),
              maxX: Math.max(n.x1, n.x2, n.cp1x, n.cp2x),
              maxY: Math.max(n.y1, n.y2, n.cp1y, n.cp2y),
            }), (this.type = 'Bezier');
            var i = function(e, n, i) {
              return i && (n = t.jsBezier.locationAlongCurveFrom(e, n > 0 ? 0 : 1, n)), n;
            };
            (this.pointOnPath = function(e, n) {
              return (e = i(this.curve, e, n)), t.jsBezier.pointOnCurve(this.curve, e);
            }), (this.gradientAtPoint = function(e, n) {
              return (e = i(this.curve, e, n)), t.jsBezier.gradientAtPoint(this.curve, e);
            }), (this.pointAlongPathFrom = function(e, n, o) {
              return (e = i(this.curve, e, o)), t.jsBezier.pointAlongCurveFrom(
                this.curve,
                e,
                n,
              );
            }), (this.getLength = function() {
              return t.jsBezier.getLength(this.curve);
            }), (this.getBounds = function() {
              return this.bounds;
            });
          },
        }), (e.SegmentRenderer = {
          getPath: function(t) {
            return {
              Straight: function() {
                var e = t.getCoordinates();
                return 'M ' + e.x1 + ' ' + e.y1 + ' L ' + e.x2 + ' ' + e.y2;
              },
              Bezier: function() {
                var e = t.params;
                return (
                  'M ' +
                  e.x1 +
                  ' ' +
                  e.y1 +
                  ' C ' +
                  e.cp1x +
                  ' ' +
                  e.cp1y +
                  ' ' +
                  e.cp2x +
                  ' ' +
                  e.cp2y +
                  ' ' +
                  e.x2 +
                  ' ' +
                  e.y2
                );
              },
              Arc: function() {
                var e = t.params,
                  n = t.sweep > Math.PI ? 1 : 0,
                  i = t.anticlockwise ? 0 : 1;
                return (
                  'M' +
                  t.x1 +
                  ' ' +
                  t.y1 +
                  ' A ' +
                  t.radius +
                  ' ' +
                  e.r +
                  ' 0 ' +
                  n +
                  ',' +
                  i +
                  ' ' +
                  t.x2 +
                  ' ' +
                  t.y2
                );
              },
            }[t.type]();
          },
        });
        var o = function() {
          (this.resetBounds = function() {
            this.bounds = { minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 };
          }), this.resetBounds();
        };
        (e.Connectors.AbstractConnector = function(t) {
          o.apply(this, arguments);
          var s = [],
            r = 0,
            a = [],
            l = [],
            u = t.stub || 0,
            c = n.isArray(u) ? u[0] : u,
            h = n.isArray(u) ? u[1] : u,
            d = t.gap || 0,
            p = n.isArray(d) ? d[0] : d,
            f = n.isArray(d) ? d[1] : d,
            g = null,
            v = !1,
            m = null,
            b = null,
            y =
              !1 !== t.editable &&
              null != e.ConnectorEditors &&
              null != e.ConnectorEditors[this.type],
            P = (this.setGeometry = function(t, e) {
              (v = !e), (b = t);
            }),
            x = (this.getGeometry = function() {
              return b;
            });
          (this.getPathData = function() {
            for (var t = '', n = 0; n < s.length; n++)
              (t += e.SegmentRenderer.getPath(s[n])), (t += ' ');
            return t;
          }), (this.hasBeenEdited = function() {
            return v;
          }), (this.isEditing = function() {
            return null != this.editor && this.editor.isActive();
          }), (this.setEditable = function(t) {
            return (y =
              !(
                !t ||
                null == e.ConnectorEditors ||
                null == e.ConnectorEditors[this.type] ||
                (null != this.overrideSetEditable && !this.overrideSetEditable())
              ) && t);
          }), (this.isEditable = function() {
            return y;
          }), (this.findSegmentForPoint = function(t, e) {
            for (
              var n = { d: 1 / 0, s: null, x: null, y: null, l: null }, i = 0;
              i < s.length;
              i++
            ) {
              var o = s[i].findClosestPointOnPath(t, e);
              o.d < n.d &&
                (
                  (n.d = o.d),
                  (n.l = o.l),
                  (n.x = o.x),
                  (n.y = o.y),
                  (n.s = s[i]),
                  (n.x1 = o.x1),
                  (n.x2 = o.x2),
                  (n.y1 = o.y1),
                  (n.y2 = o.y2),
                  (n.index = i)
                );
            }
            return n;
          });
          var _ = function() {
              for (var t = 0, e = 0; e < s.length; e++) {
                var n = s[e].getLength();
                (l[e] = n / r), (a[e] = [t, (t += n / r)]);
              }
            },
            E = function(t, e) {
              e && (t = t > 0 ? t / r : (r + t) / r);
              for (var n = a.length - 1, i = 1, o = 0; o < a.length; o++)
                if (a[o][1] >= t) {
                  (n = o), (i = 1 == t ? 1 : 0 === t ? 0 : (t - a[o][0]) / l[o]);
                  break;
                }
              return { segment: s[n], proportion: i, index: n };
            },
            C = function(t, n, i) {
              if (i.x1 != i.x2 || i.y1 != i.y2) {
                var o = new e.Segments[n](i);
                s.push(o), (r += o.getLength()), t.updateBounds(o);
              }
            },
            j = function() {
              r = s.length = a.length = l.length = 0;
            };
          (this.setSegments = function(t) {
            (g = []), (r = 0);
            for (var e = 0; e < t.length; e++) g.push(t[e]), (r += t[e].getLength());
          }), (this.getLength = function() {
            return r;
          });
          var S = function(t) {
            this.strokeWidth = t.strokeWidth;
            var e = i.quadrant(t.sourcePos, t.targetPos),
              n = t.targetPos[0] < t.sourcePos[0],
              o = t.targetPos[1] < t.sourcePos[1],
              s = t.strokeWidth || 1,
              r = t.sourceEndpoint.anchor.getOrientation(t.sourceEndpoint),
              a = t.targetEndpoint.anchor.getOrientation(t.targetEndpoint),
              l = n ? t.targetPos[0] : t.sourcePos[0],
              u = o ? t.targetPos[1] : t.sourcePos[1],
              d = Math.abs(t.targetPos[0] - t.sourcePos[0]),
              g = Math.abs(t.targetPos[1] - t.sourcePos[1]);
            if ((0 === r[0] && 0 === r[1]) || (0 === a[0] && 0 === a[1])) {
              var v = d > g ? 0 : 1,
                m = [1, 0][v];
              (r = []), (a = []), (r[v] = t.sourcePos[v] > t.targetPos[v] ? -1 : 1), (a[
                v
              ] =
                t.sourcePos[v] > t.targetPos[v] ? 1 : -1), (r[m] = 0), (a[m] = 0);
            }
            var b = n ? d + p * r[0] : p * r[0],
              y = o ? g + p * r[1] : p * r[1],
              P = n ? f * a[0] : d + f * a[0],
              x = o ? f * a[1] : g + f * a[1],
              _ = r[0] * a[0] + r[1] * a[1],
              E = {
                sx: b,
                sy: y,
                tx: P,
                ty: x,
                lw: s,
                xSpan: Math.abs(P - b),
                ySpan: Math.abs(x - y),
                mx: (b + P) / 2,
                my: (y + x) / 2,
                so: r,
                to: a,
                x: l,
                y: u,
                w: d,
                h: g,
                segment: e,
                startStubX: b + r[0] * c,
                startStubY: y + r[1] * c,
                endStubX: P + a[0] * h,
                endStubY: x + a[1] * h,
                isXGreaterThanStubTimes2: Math.abs(b - P) > c + h,
                isYGreaterThanStubTimes2: Math.abs(y - x) > c + h,
                opposite: -1 == _,
                perpendicular: 0 === _,
                orthogonal: 1 == _,
                sourceAxis: 0 === r[0] ? 'y' : 'x',
                points: [l, u, d, g, b, y, P, x],
              };
            return (E.anchorOrientation = E.opposite
              ? 'opposite'
              : E.orthogonal ? 'orthogonal' : 'perpendicular'), E;
          };
          return (this.getSegments = function() {
            return s;
          }), (this.updateBounds = function(t) {
            var e = t.getBounds();
            (this.bounds.minX = Math.min(
              this.bounds.minX,
              e.minX,
            )), (this.bounds.maxX = Math.max(
              this.bounds.maxX,
              e.maxX,
            )), (this.bounds.minY = Math.min(
              this.bounds.minY,
              e.minY,
            )), (this.bounds.maxY = Math.max(this.bounds.maxY, e.maxY));
          }), (this.pointOnPath = function(t, e) {
            var n = E(t, e);
            return (n.segment && n.segment.pointOnPath(n.proportion, !1)) || [0, 0];
          }), (this.gradientAtPoint = function(t, e) {
            var n = E(t, e);
            return (n.segment && n.segment.gradientAtPoint(n.proportion, !1)) || 0;
          }), (this.pointAlongPathFrom = function(t, e, n) {
            var i = E(t, n);
            return (
              (i.segment && i.segment.pointAlongPathFrom(i.proportion, e, !1)) || [0, 0]
            );
          }), (this.compute = function(t) {
            (m = S.call(this, t)), j(), this._compute(m, t), (this.x =
              m.points[0]), (this.y = m.points[1]), (this.w = m.points[2]), (this.h =
              m.points[3]), (this.segment = m.segment), _();
          }), {
            addSegment: C,
            prepareCompute: S,
            sourceStub: c,
            targetStub: h,
            maxStub: Math.max(c, h),
            sourceGap: p,
            targetGap: f,
            maxGap: Math.max(p, f),
            setGeometry: P,
            getGeometry: x,
          };
        }), n.extend(
          e.Connectors.AbstractConnector,
          o,
        ), (e.Endpoints.AbstractEndpoint = function(t) {
          return o.apply(this, arguments), {
            compute: (this.compute = function(t, e, n, i) {
              var o = this._compute.apply(this, arguments);
              return (this.x = o[0]), (this.y = o[1]), (this.w = o[2]), (this.h =
                o[3]), (this.bounds.minX = this.x), (this.bounds.minY = this.y), (this.bounds.maxX =
                this.x + this.w), (this.bounds.maxY = this.y + this.h), o;
            }),
            cssClass: t.cssClass,
          };
        }), n.extend(e.Endpoints.AbstractEndpoint, o), (e.Endpoints.Dot = function(t) {
          (this.type = 'Dot'), e.Endpoints.AbstractEndpoint.apply(this, arguments), (t =
            t || {}), (this.radius = t.radius || 10), (this.defaultOffset =
            0.5 * this.radius), (this.defaultInnerRadius =
            this.radius / 3), (this._compute = function(t, e, n, i) {
            this.radius = n.radius || this.radius;
            var o = t[0] - this.radius,
              s = t[1] - this.radius,
              r = 2 * this.radius,
              a = 2 * this.radius;
            if (n.stroke) {
              var l = n.strokeWidth || 1;
              (o -= l), (s -= l), (r += 2 * l), (a += 2 * l);
            }
            return [o, s, r, a, this.radius];
          });
        }), n.extend(
          e.Endpoints.Dot,
          e.Endpoints.AbstractEndpoint,
        ), (e.Endpoints.Rectangle = function(t) {
          (this.type = 'Rectangle'), e.Endpoints.AbstractEndpoint.apply(
            this,
            arguments,
          ), (t = t || {}), (this.width = t.width || 20), (this.height =
            t.height || 20), (this._compute = function(t, e, n, i) {
            var o = n.width || this.width,
              s = n.height || this.height;
            return [t[0] - o / 2, t[1] - s / 2, o, s];
          });
        }), n.extend(e.Endpoints.Rectangle, e.Endpoints.AbstractEndpoint);
        var s = function(t) {
          e.jsPlumbUIComponent.apply(
            this,
            arguments,
          ), (this._jsPlumb.displayElements = []);
        };
        n.extend(s, e.jsPlumbUIComponent, {
          getDisplayElements: function() {
            return this._jsPlumb.displayElements;
          },
          appendDisplayElement: function(t) {
            this._jsPlumb.displayElements.push(t);
          },
        }), (e.Endpoints.Image = function(i) {
          (this.type = 'Image'), s.apply(
            this,
            arguments,
          ), e.Endpoints.AbstractEndpoint.apply(this, arguments);
          var o = i.onload,
            r = i.src || i.url,
            a = i.cssClass ? ' ' + i.cssClass : '';
          (this._jsPlumb.img = new Image()), (this._jsPlumb.ready = !1), (this._jsPlumb.initialized = !1), (this._jsPlumb.deleted = !1), (this._jsPlumb.widthToUse =
            i.width), (this._jsPlumb.heightToUse = i.height), (this._jsPlumb.endpoint =
            i.endpoint), (this._jsPlumb.img.onload = function() {
            null != this._jsPlumb &&
              (
                (this._jsPlumb.ready = !0),
                (this._jsPlumb.widthToUse =
                  this._jsPlumb.widthToUse || this._jsPlumb.img.width),
                (this._jsPlumb.heightToUse =
                  this._jsPlumb.heightToUse || this._jsPlumb.img.height),
                o && o(this)
              );
          }.bind(this)), (this._jsPlumb.endpoint.setImage = function(t, e) {
            var n = t.constructor == String ? t : t.src;
            (o = e), (this._jsPlumb.img.src = n), null != this.canvas &&
              this.canvas.setAttribute('src', this._jsPlumb.img.src);
          }.bind(this)), this._jsPlumb.endpoint.setImage(r, o), (this._compute = function(
            t,
            e,
            n,
            i,
          ) {
            return (this.anchorPoint = t), this._jsPlumb.ready
              ? [
                  t[0] - this._jsPlumb.widthToUse / 2,
                  t[1] - this._jsPlumb.heightToUse / 2,
                  this._jsPlumb.widthToUse,
                  this._jsPlumb.heightToUse,
                ]
              : [0, 0, 0, 0];
          }), (this.canvas = e.createElement(
            'img',
            { position: 'absolute', margin: 0, padding: 0, outline: 0 },
            this._jsPlumb.instance.endpointClass + a,
          )), this._jsPlumb.widthToUse &&
            this.canvas.setAttribute('width', this._jsPlumb.widthToUse), this._jsPlumb
            .heightToUse &&
            this.canvas.setAttribute(
              'height',
              this._jsPlumb.heightToUse,
            ), this._jsPlumb.instance.appendElement(
            this.canvas,
          ), (this.actuallyPaint = function(t, e, i) {
            if (!this._jsPlumb.deleted) {
              this._jsPlumb.initialized ||
                (
                  this.canvas.setAttribute('src', this._jsPlumb.img.src),
                  this.appendDisplayElement(this.canvas),
                  (this._jsPlumb.initialized = !0)
                );
              var o = this.anchorPoint[0] - this._jsPlumb.widthToUse / 2,
                s = this.anchorPoint[1] - this._jsPlumb.heightToUse / 2;
              n.sizeElement(
                this.canvas,
                o,
                s,
                this._jsPlumb.widthToUse,
                this._jsPlumb.heightToUse,
              );
            }
          }), (this.paint = function(e, n) {
            null != this._jsPlumb &&
              (this._jsPlumb.ready
                ? this.actuallyPaint(e, n)
                : t.setTimeout(
                    function() {
                      this.paint(e, n);
                    }.bind(this),
                    200,
                  ));
          });
        }), n.extend(e.Endpoints.Image, [s, e.Endpoints.AbstractEndpoint], {
          cleanup: function(t) {
            t &&
              (
                (this._jsPlumb.deleted = !0),
                this.canvas && this.canvas.parentNode.removeChild(this.canvas),
                (this.canvas = null)
              );
          },
        }), (e.Endpoints.Blank = function(t) {
          e.Endpoints.AbstractEndpoint.apply(this, arguments), (this.type =
            'Blank'), s.apply(this, arguments), (this._compute = function(t, e, n, i) {
            return [t[0], t[1], 10, 0];
          });
          var i = t.cssClass ? ' ' + t.cssClass : '';
          (this.canvas = e.createElement(
            'div',
            {
              display: 'block',
              width: '1px',
              height: '1px',
              background: 'transparent',
              position: 'absolute',
            },
            this._jsPlumb.instance.endpointClass + i,
          )), this._jsPlumb.instance.appendElement(this.canvas), (this.paint = function(
            t,
            e,
          ) {
            n.sizeElement(this.canvas, this.x, this.y, this.w, this.h);
          });
        }), n.extend(e.Endpoints.Blank, [e.Endpoints.AbstractEndpoint, s], {
          cleanup: function() {
            this.canvas &&
              this.canvas.parentNode &&
              this.canvas.parentNode.removeChild(this.canvas);
          },
        }), (e.Endpoints.Triangle = function(t) {
          (this.type = 'Triangle'), e.Endpoints.AbstractEndpoint.apply(
            this,
            arguments,
          ), (t = t || {}), (t.width = t.width || 55), (t.height =
            t.height || 55), (this.width = t.width), (this.height =
            t.height), (this._compute = function(t, e, n, i) {
            var o = n.width || self.width,
              s = n.height || self.height;
            return [t[0] - o / 2, t[1] - s / 2, o, s];
          });
        });
        var r = (e.Overlays.AbstractOverlay = function(t) {
          (this.visible = !0), (this.isAppendedAtTopLevel = !0), (this.component =
            t.component), (this.loc =
            null == t.location ? 0.5 : t.location), (this.endpointLoc =
            null == t.endpointLocation ? [0.5, 0.5] : t.endpointLocation), (this.visible =
            !1 !== t.visible);
        });
        (r.prototype = {
          cleanup: function(t) {
            t &&
              ((this.component = null), (this.canvas = null), (this.endpointLoc = null));
          },
          reattach: function(t) {},
          setVisible: function(t) {
            (this.visible = t), this.component.repaint();
          },
          isVisible: function() {
            return this.visible;
          },
          hide: function() {
            this.setVisible(!1);
          },
          show: function() {
            this.setVisible(!0);
          },
          incrementLocation: function(t) {
            (this.loc += t), this.component.repaint();
          },
          setLocation: function(t) {
            (this.loc = t), this.component.repaint();
          },
          getLocation: function() {
            return this.loc;
          },
          updateFrom: function() {},
        }), (e.Overlays.Arrow = function(t) {
          (this.type = 'Arrow'), r.apply(
            this,
            arguments,
          ), (this.isAppendedAtTopLevel = !1), (t = t || {}), (this.length =
            t.length || 20), (this.width = t.width || 20), (this.id = t.id);
          var o = (t.direction || 1) < 0 ? -1 : 1,
            s = t.paintStyle || { 'stroke-width': 1 },
            a = t.foldback || 0.623;
          (this.computeMaxSize = function() {
            return 1.5 * self.width;
          }), (this.elementCreated = function(n, i) {
            if (((this.path = n), t.events))
              for (var o in t.events) e.on(n, o, t.events[o]);
          }), (this.draw = function(t, e) {
            var r, l, u, c, h;
            if (t.pointAlongPathFrom) {
              if (n.isString(this.loc) || this.loc > 1 || this.loc < 0) {
                var d = parseInt(this.loc, 10),
                  p = this.loc < 0 ? 1 : 0;
                (r = t.pointAlongPathFrom(p, d, !1)), (l = t.pointAlongPathFrom(
                  p,
                  d - o * this.length / 2,
                  !1,
                )), (u = i.pointOnLine(r, l, this.length));
              } else if (1 == this.loc) {
                if (
                  (
                    (r = t.pointOnPath(this.loc)),
                    (l = t.pointAlongPathFrom(this.loc, -this.length)),
                    (u = i.pointOnLine(r, l, this.length)),
                    -1 == o
                  )
                ) {
                  var f = u;
                  (u = r), (r = f);
                }
              } else if (0 === this.loc) {
                if (
                  (
                    (u = t.pointOnPath(this.loc)),
                    (l = t.pointAlongPathFrom(this.loc, this.length)),
                    (r = i.pointOnLine(u, l, this.length)),
                    -1 == o
                  )
                ) {
                  var g = u;
                  (u = r), (r = g);
                }
              } else
                (r = t.pointAlongPathFrom(
                  this.loc,
                  o * this.length / 2,
                )), (l = t.pointOnPath(this.loc)), (u = i.pointOnLine(r, l, this.length));
              (c = i.perpendicularLineTo(r, u, this.width)), (h = i.pointOnLine(
                r,
                u,
                a * this.length,
              ));
              var v = { hxy: r, tail: c, cxy: h },
                m = s.stroke || e.stroke,
                b = s.fill || e.stroke;
              return {
                component: t,
                d: v,
                'stroke-width': s.strokeWidth || e.strokeWidth,
                stroke: m,
                fill: b,
                minX: Math.min(r.x, c[0].x, c[1].x),
                maxX: Math.max(r.x, c[0].x, c[1].x),
                minY: Math.min(r.y, c[0].y, c[1].y),
                maxY: Math.max(r.y, c[0].y, c[1].y),
              };
            }
            return { component: t, minX: 0, maxX: 0, minY: 0, maxY: 0 };
          });
        }), n.extend(e.Overlays.Arrow, r, {
          updateFrom: function(t) {
            (this.length = t.length || this.length), (this.width =
              t.width || this.width), (this.direction =
              null != t.direction ? t.direction : this.direction), (this.foldback =
              t.foldback || this.foldback);
          },
        }), (e.Overlays.PlainArrow = function(t) {
          t = t || {};
          var n = e.extend(t, { foldback: 1 });
          e.Overlays.Arrow.call(this, n), (this.type = 'PlainArrow');
        }), n.extend(
          e.Overlays.PlainArrow,
          e.Overlays.Arrow,
        ), (e.Overlays.Diamond = function(t) {
          t = t || {};
          var n = t.length || 40,
            i = e.extend(t, { length: n / 2, foldback: 2 });
          e.Overlays.Arrow.call(this, i), (this.type = 'Diamond');
        }), n.extend(e.Overlays.Diamond, e.Overlays.Arrow);
        var a = function(t, e) {
            return (null == t._jsPlumb.cachedDimensions || e) &&
              (t._jsPlumb.cachedDimensions = t.getDimensions()), t._jsPlumb
              .cachedDimensions;
          },
          l = function(t) {
            e.jsPlumbUIComponent.apply(this, arguments), r.apply(this, arguments);
            var i = this.fire;
            (this.fire = function() {
              i.apply(this, arguments), this.component &&
                this.component.fire.apply(this.component, arguments);
            }), (this.detached = !1), (this.id =
              t.id), (this._jsPlumb.div = null), (this._jsPlumb.initialised = !1), (this._jsPlumb.component =
              t.component), (this._jsPlumb.cachedDimensions = null), (this._jsPlumb.create =
              t.create), (this._jsPlumb.initiallyInvisible =
              !1 === t.visible), (this.getElement = function() {
              if (null == this._jsPlumb.div) {
                var n = (this._jsPlumb.div = e.getElement(
                  this._jsPlumb.create(this._jsPlumb.component),
                ));
                (n.style.position = 'absolute'), (n.className =
                  this._jsPlumb.instance.overlayClass +
                  ' ' +
                  (this.cssClass
                    ? this.cssClass
                    : t.cssClass
                      ? t.cssClass
                      : '')), this._jsPlumb.instance.appendElement(
                  n,
                ), this._jsPlumb.instance.getId(n), (this.canvas = n);
                var i = 'translate(-50%, -50%)';
                (n.style.webkitTransform = i), (n.style.mozTransform = i), (n.style.msTransform = i), (n.style.oTransform = i), (n.style.transform = i), (n._jsPlumb = this), !1 ===
                  t.visible && (n.style.display = 'none');
              }
              return this._jsPlumb.div;
            }), (this.draw = function(t, e, i) {
              var o = a(this);
              if (null != o && 2 == o.length) {
                var s = { x: 0, y: 0 };
                if (i) s = { x: i[0], y: i[1] };
                else if (t.pointOnPath) {
                  var r = this.loc,
                    l = !1;
                  (n.isString(this.loc) || this.loc < 0 || this.loc > 1) &&
                    ((r = parseInt(this.loc, 10)), (l = !0)), (s = t.pointOnPath(r, l));
                } else {
                  var u = this.loc.constructor == Array ? this.loc : this.endpointLoc;
                  s = { x: u[0] * t.w, y: u[1] * t.h };
                }
                var c = s.x - o[0] / 2,
                  h = s.y - o[1] / 2;
                return {
                  component: t,
                  d: { minx: c, miny: h, td: o, cxy: s },
                  minX: c,
                  maxX: c + o[0],
                  minY: h,
                  maxY: h + o[1],
                };
              }
              return { minX: 0, maxX: 0, minY: 0, maxY: 0 };
            });
          };
        n.extend(l, [e.jsPlumbUIComponent, r], {
          getDimensions: function() {
            return [1, 1];
          },
          setVisible: function(t) {
            this._jsPlumb.div &&
              (
                (this._jsPlumb.div.style.display = t ? 'block' : 'none'),
                t &&
                  this._jsPlumb.initiallyInvisible &&
                  (
                    a(this, !0),
                    this.component.repaint(),
                    (this._jsPlumb.initiallyInvisible = !1)
                  )
              );
          },
          clearCachedDimensions: function() {
            this._jsPlumb.cachedDimensions = null;
          },
          cleanup: function(t) {
            t
              ? null != this._jsPlumb.div &&
                (
                  (this._jsPlumb.div._jsPlumb = null),
                  this._jsPlumb.instance.removeElement(this._jsPlumb.div)
                )
              : (
                  this._jsPlumb &&
                    this._jsPlumb.div &&
                    this._jsPlumb.div.parentNode &&
                    this._jsPlumb.div.parentNode.removeChild(this._jsPlumb.div),
                  (this.detached = !0)
                );
          },
          reattach: function(t) {
            null != this._jsPlumb.div &&
              t.getContainer().appendChild(this._jsPlumb.div), (this.detached = !1);
          },
          computeMaxSize: function() {
            var t = a(this);
            return Math.max(t[0], t[1]);
          },
          paint: function(t, e) {
            this._jsPlumb.initialised ||
              (
                this.getElement(),
                t.component.appendDisplayElement(this._jsPlumb.div),
                (this._jsPlumb.initialised = !0),
                this.detached &&
                  this._jsPlumb.div.parentNode.removeChild(this._jsPlumb.div)
              ), (this._jsPlumb.div.style.left =
              t.component.x + t.d.minx + 'px'), (this._jsPlumb.div.style.top =
              t.component.y + t.d.miny + 'px');
          },
        }), (e.Overlays.Custom = function(t) {
          (this.type = 'Custom'), l.apply(this, arguments);
        }), n.extend(e.Overlays.Custom, l), (e.Overlays.GuideLines = function() {
          var t = this;
          (t.length = 50), (t.strokeWidth = 5), (this.type = 'GuideLines'), r.apply(
            this,
            arguments,
          ), e.jsPlumbUIComponent.apply(this, arguments), (this.draw = function(e, n) {
            var o = e.pointAlongPathFrom(t.loc, t.length / 2),
              s = e.pointOnPath(t.loc),
              r = i.pointOnLine(o, s, t.length),
              a = i.perpendicularLineTo(o, r, 40),
              l = i.perpendicularLineTo(r, o, 20);
            return {
              connector: e,
              head: o,
              tail: r,
              headLine: l,
              tailLine: a,
              minX: Math.min(o.x, r.x, l[0].x, l[1].x),
              minY: Math.min(o.y, r.y, l[0].y, l[1].y),
              maxX: Math.max(o.x, r.x, l[0].x, l[1].x),
              maxY: Math.max(o.y, r.y, l[0].y, l[1].y),
            };
          });
        }), (e.Overlays.Label = function(t) {
          (this.labelStyle = t.labelStyle), (this.cssClass =
            null != this.labelStyle ? this.labelStyle.cssClass : null);
          var n = e.extend(
            {
              create: function() {
                return e.createElement('div');
              },
            },
            t,
          );
          if (
            (
              e.Overlays.Custom.call(this, n),
              (this.type = 'Label'),
              (this.label = t.label || ''),
              (this.labelText = null),
              this.labelStyle
            )
          ) {
            var i = this.getElement();
            if (
              (
                (this.labelStyle.font = this.labelStyle.font || '12px sans-serif'),
                (i.style.font = this.labelStyle.font),
                (i.style.color = this.labelStyle.color || 'black'),
                this.labelStyle.fill && (i.style.background = this.labelStyle.fill),
                this.labelStyle.borderWidth > 0
              )
            ) {
              var o = this.labelStyle.borderStyle ? this.labelStyle.borderStyle : 'black';
              i.style.border = this.labelStyle.borderWidth + 'px solid ' + o;
            }
            this.labelStyle.padding && (i.style.padding = this.labelStyle.padding);
          }
        }), n.extend(e.Overlays.Label, e.Overlays.Custom, {
          cleanup: function(t) {
            t &&
              (
                (this.div = null),
                (this.label = null),
                (this.labelText = null),
                (this.cssClass = null),
                (this.labelStyle = null)
              );
          },
          getLabel: function() {
            return this.label;
          },
          setLabel: function(t) {
            (this.label = t), (this.labelText = null), this.clearCachedDimensions(), this.update(), this.component.repaint();
          },
          getDimensions: function() {
            return this.update(), l.prototype.getDimensions.apply(this, arguments);
          },
          update: function() {
            if ('function' == typeof this.label) {
              var t = this.label(this);
              this.getElement().innerHTML = t.replace(/\r\n/g, '<br/>');
            } else
              null == this.labelText &&
                (
                  (this.labelText = this.label),
                  (this.getElement().innerHTML = this.labelText.replace(/\r\n/g, '<br/>'))
                );
          },
          updateFrom: function(t) {
            t.label && this.setLabel(t.label);
          },
        });
      }.call('undefined' != typeof window ? window : this), function() {
        'use strict';
        var t = this,
          e = function(e) {
            var n = e._mottle;
            return n || (n = e._mottle = new t.Mottle()), n;
          };
        t.jsPlumb.extend(t.jsPlumbInstance.prototype, {
          getEventManager: function() {
            return e(this);
          },
          on: function(t, e, n) {
            return this.getEventManager().on.apply(this, arguments), this;
          },
          off: function(t, e, n) {
            return this.getEventManager().off.apply(this, arguments), this;
          },
        });
      }.call('undefined' != typeof window ? window : this), function() {
        'use strict';
        var t = this,
          e = t.jsPlumbUtil,
          n = t.jsPlumbInstance,
          i = 'stop',
          o = 'revert',
          s = '_jsPlumbGroup',
          r = function(t) {
            function n(t) {
              delete t.proxies;
              var n,
                i = a[t.id];
              null != i &&
                (
                  (n = function(e) {
                    return e.id === t.id;
                  }),
                  e.removeWithFunction(i.connections.source, n),
                  e.removeWithFunction(i.connections.target, n),
                  delete a[t.id]
                ), null != (i = l[t.id]) &&
                (
                  (n = function(e) {
                    return e.id === t.id;
                  }),
                  e.removeWithFunction(i.connections.source, n),
                  e.removeWithFunction(i.connections.target, n),
                  delete l[t.id]
                );
            }
            function i(e, n) {
              for (var i = e.getMembers(), o = 0; o < i.length; o++)
                t[n ? 'show' : 'hide'](i[o], !0);
            }
            function o(e) {
              var n = e.getMembers(),
                i = t.getConnections({ source: n }, !0),
                o = t.getConnections({ target: n }, !0),
                s = {};
              (e.connections.source.length = 0), (e.connections.target.length = 0);
              var r = function(t) {
                for (var n = 0; n < t.length; n++)
                  s[t[n].id] ||
                    (
                      (s[t[n].id] = !0),
                      t[n].source._jsPlumbGroup === e
                        ? (
                            t[n].target._jsPlumbGroup !== e &&
                              e.connections.source.push(t[n]),
                            (a[t[n].id] = e)
                          )
                        : t[n].target._jsPlumbGroup === e &&
                          (e.connections.target.push(t[n]), (l[t[n].id] = e))
                    );
              };
              r(i), r(o);
            }
            var r = {},
              a = {},
              l = {};
            t.bind('connection', function(t) {
              null != t.source[s] && null != t.target[s] && t.source[s] === t.target[s]
                ? ((a[t.connection.id] = t.source[s]), (l[t.connection.id] = t.source[s]))
                : (
                    null != t.source[s] &&
                      (
                        e.suggest(t.source[s].connections.source, t.connection),
                        (a[t.connection.id] = t.source[s])
                      ),
                    null != t.target[s] &&
                      (
                        e.suggest(t.target[s].connections.target, t.connection),
                        (l[t.connection.id] = t.target[s])
                      )
                  );
            }), t.bind('internal.connectionDetached', function(t) {
              n(t.connection);
            }), t.bind('connectionMoved', function(t) {
              var e = 0 === t.index ? a : l,
                n = e[t.connection.id];
              if (n) {
                var i = n.connections[0 === t.index ? 'source' : 'target'],
                  o = i.indexOf(t.connection);
                -1 != o && i.splice(o, 1);
              }
            }), (this.addGroup = function(e) {
              t.addClass(e.getEl(), 'jtk-group-expanded'), (r[
                e.id
              ] = e), (e.manager = this), o(e), t.fire('group:add', { group: e });
            }), (this.addToGroup = function(t, e, n) {
              (t = this.getGroup(t)) && t.add(e, n);
            }), (this.removeFromGroup = function(t, e, n) {
              (t = this.getGroup(t)) && t.remove(e, null, n);
            }), (this.getGroup = function(t) {
              var n = t;
              if (e.isString(t) && null == (n = r[t]))
                throw new TypeError('No such group [' + t + ']');
              return n;
            }), (this.getGroups = function() {
              var t = [];
              for (var e in r) t.push(r[e]);
              return t;
            }), (this.removeGroup = function(e, n, i, o) {
              (e = this.getGroup(e)), this.expandGroup(e, !0), e[
                n ? 'removeAll' : 'orphanAll'
              ](i, o), t.remove(e.getEl()), delete r[e.id], delete t._groups[
                e.id
              ], t.fire('group:remove', { group: e });
            }), (this.removeAllGroups = function(t, e, n) {
              for (var i in r) this.removeGroup(r[i], t, e, n);
            });
            var u = (this.collapseConnection = function(e, n, i) {
              var o,
                r = i.getEl(),
                a = t.getId(r),
                l = e.endpoints[n].elementId,
                u = e.endpoints[0 === n ? 1 : 0].element;
              (u[s] && !u[s].shouldProxy() && u[s].collapsed) ||
                (
                  (e.proxies = e.proxies || []),
                  e.proxies[n]
                    ? (o = e.proxies[n].ep)
                    : (
                        (o = t.addEndpoint(r, {
                          endpoint: i.getEndpoint(e, n),
                          anchor: i.getAnchor(e, n),
                          parameters: { isProxyEndpoint: !0 },
                        })),
                        (o._forceDeleteOnDetach = !0)
                      ),
                  (e.proxies[n] = { ep: o, originalEp: e.endpoints[n] }),
                  0 === n
                    ? t.anchorManager.sourceChanged(l, a, e, r)
                    : (
                        t.anchorManager.updateOtherEndpoint(
                          e.endpoints[0].elementId,
                          l,
                          a,
                          e,
                        ),
                        (e.target = r),
                        (e.targetId = a)
                      ),
                  e.proxies[n].originalEp.detachFromConnection(e, null, !0),
                  (o.connections = [e]),
                  (e.endpoints[n] = o),
                  e.setVisible(!0)
                );
            });
            this.collapseGroup = function(e) {
              if (null != (e = this.getGroup(e)) && !e.collapsed) {
                var n = e.getEl();
                if ((i(e, !1), e.shouldProxy())) {
                  var o = function(t, n) {
                    for (var i = 0; i < t.length; i++) {
                      var o = t[i];
                      u(o, n, e);
                    }
                  };
                  o(e.connections.source, 0), o(e.connections.target, 1);
                }
                (e.collapsed = !0), t.removeClass(n, 'jtk-group-expanded'), t.addClass(
                  n,
                  'jtk-group-collapsed',
                ), t.revalidate(n), t.fire('group:collapse', { group: e });
              }
            };
            var c = (this.expandConnection = function(e, n, i) {
              if (null != e.proxies && null != e.proxies[n]) {
                var o = t.getId(i.getEl()),
                  s = e.proxies[n].originalEp.element,
                  r = e.proxies[n].originalEp.elementId;
                (e.endpoints[n] = e.proxies[n].originalEp), 0 === n
                  ? t.anchorManager.sourceChanged(o, r, e, s)
                  : (
                      t.anchorManager.updateOtherEndpoint(
                        e.endpoints[0].elementId,
                        o,
                        r,
                        e,
                      ),
                      (e.target = s),
                      (e.targetId = r)
                    ), e.proxies[n].ep.detachFromConnection(e, null, !0), e.proxies[
                  n
                ].originalEp.addConnection(e), delete e.proxies[n];
              }
            });
            (this.expandGroup = function(e, n) {
              if (null != (e = this.getGroup(e)) && e.collapsed) {
                var o = e.getEl();
                if ((i(e, !0), e.shouldProxy())) {
                  var s = function(t, n) {
                    for (var i = 0; i < t.length; i++) {
                      var o = t[i];
                      c(o, n, e);
                    }
                  };
                  s(e.connections.source, 0), s(e.connections.target, 1);
                }
                (e.collapsed = !1), t.addClass(o, 'jtk-group-expanded'), t.removeClass(
                  o,
                  'jtk-group-collapsed',
                ), t.revalidate(o), this.repaintGroup(e), n ||
                  t.fire('group:expand', { group: e });
              }
            }), (this.repaintGroup = function(e) {
              e = this.getGroup(e);
              for (var n = e.getMembers(), i = 0; i < n.length; i++) t.revalidate(n[i]);
            }), (this.updateConnectionsForGroup = o), (this.refreshAllGroups = function() {
              for (var e in r)
                o(r[e]), t.dragManager.updateOffsets(t.getId(r[e].getEl()));
            });
          },
          a = function(n, r) {
            function a(t) {
              return t.offsetParent;
            }
            function l(t, e) {
              var i = a(t),
                o = n.getSize(i),
                s = n.getSize(t),
                r = e[0],
                l = r + s[0],
                u = e[1],
                c = u + s[1];
              return l > 0 && r < o[0] && c > 0 && u < o[1];
            }
            function u(t) {
              var e = n.getId(t),
                i = n.getOffset(t);
              t.parentNode.removeChild(t), n.getContainer().appendChild(t), n.setPosition(
                t,
                i,
              ), delete t._jsPlumbGroup, d(t), n.dragManager.clearParent(t, e);
            }
            function c(t) {
              l(t.el, t.pos) ||
                (t.el._jsPlumbGroup.remove(t.el), x ? n.remove(t.el) : u(t.el));
            }
            function h(t) {
              var e = n.getId(t);
              n.revalidate(t), n.dragManager.revalidateParent(t, e);
            }
            function d(t) {
              t._katavorioDrag &&
                (
                  (x || P) && t._katavorioDrag.off(i, c),
                  x ||
                    P ||
                    !y ||
                    (t._katavorioDrag.off(o, h), t._katavorioDrag.setRevert(null))
                );
            }
            function p(t) {
              t._katavorioDrag &&
                (
                  (x || P) && t._katavorioDrag.on(i, c),
                  b && t._katavorioDrag.setConstrain(!0),
                  m && t._katavorioDrag.setUseGhostProxy(!0),
                  x ||
                    P ||
                    !y ||
                    (
                      t._katavorioDrag.on(o, h),
                      t._katavorioDrag.setRevert(function(t, e) {
                        return !l(t, e);
                      })
                    )
                );
            }
            var f = this,
              g = r.el;
            (this.getEl = function() {
              return g;
            }), (this.id = r.id || e.uuid()), (g._isJsPlumbGroup = !0);
            var v = (this.getDragArea = function() {
                var t = n.getSelector(g, '[jtk-group-content]');
                return t && t.length > 0 ? t[0] : g;
              }),
              m = !0 === r.ghost,
              b = m || !0 === r.constrain,
              y = !1 !== r.revert,
              P = !0 === r.orphan,
              x = !0 === r.prune,
              _ = !0 === r.dropOverride,
              E = !1 !== r.proxied,
              C = [];
            if (
              (
                (this.connections = { source: [], target: [], internal: [] }),
                (this.getAnchor = function(t, e) {
                  return r.anchor || 'Continuous';
                }),
                (this.getEndpoint = function(t, e) {
                  return r.endpoint || ['Dot', { radius: 10 }];
                }),
                (this.collapsed = !1),
                !1 !== r.draggable
              )
            ) {
              var j = {
                stop: function(t) {
                  n.fire('groupDragStop', jsPlumb.extend(t, { group: f }));
                },
                scope: '_jsPlumbGroupDrag',
              };
              r.dragOptions && t.jsPlumb.extend(j, r.dragOptions), n.draggable(r.el, j);
            }
            !1 !== r.droppable &&
              n.droppable(r.el, {
                drop: function(t) {
                  var e = n.getGroupManager(),
                    i = t.drag.el;
                  if (!i._isJsPlumbGroup) {
                    var o = i._jsPlumbGroup;
                    if (o !== f) {
                      var s = n.getOffset(i, !0),
                        r = f.collapsed ? n.getOffset(g, !0) : n.getOffset(v(), !0);
                      if (null != o) {
                        if (o.overrideDrop(i, f)) return;
                        o.remove(i, !0), e.updateConnectionsForGroup(o);
                      }
                      f.add(i, !0);
                      var a = function(t, n) {
                        var i = 0 == n ? 1 : 0;
                        t.each(function(t) {
                          t.setVisible(
                            !1,
                          ), t.endpoints[i].element._jsPlumbGroup === f ? (t.endpoints[i].setVisible(!1), e.expandConnection(t, i, f)) : (t.endpoints[n].setVisible(!1), e.collapseConnection(t, n, f));
                        });
                      };
                      f.collapsed &&
                        (a(n.select({ source: i }), 0), a(n.select({ target: i }), 1));
                      var l = n.getId(i);
                      n.dragManager.setParent(i, l, g, n.getId(g), s), n.setPosition(i, {
                        left: s.left - r.left,
                        top: s.top - r.top,
                      }), n.dragManager.revalidateParent(
                        i,
                        l,
                        s,
                      ), e.updateConnectionsForGroup(f), setTimeout(function() {
                        n.fire('group:addMember', { group: f, el: i });
                      }, 0);
                    }
                  }
                },
              });
            var S = function(t, e) {
              for (var n = null == t.nodeType ? t : [t], i = 0; i < n.length; i++)
                e(n[i]);
            };
            (this.overrideDrop = function(t, e) {
              return _ && (y || x || P);
            }), (this.add = function(t, e) {
              var i = v();
              S(t, function(t) {
                (t._jsPlumbGroup = f), C.push(t), n.isAlreadyDraggable(t) && p(t), t.parentNode != i && i.appendChild(t), e || n.fire('group:addMember', { group: f, el: t });
              }), n.getGroupManager().updateConnectionsForGroup(f);
            }), (this.remove = function(t, i, o, s) {
              S(t, function(t) {
                if (
                  (
                    delete t._jsPlumbGroup,
                    e.removeWithFunction(C, function(e) {
                      return e === t;
                    }),
                    i
                  )
                )
                  try {
                    f.getDragArea().removeChild(t);
                  } catch (t) {
                    jsPlumbUtil.log('Could not remove element from Group ' + t);
                  }
                d(t), o || n.fire('group:removeMember', { group: f, el: t });
              }), s || n.getGroupManager().updateConnectionsForGroup(f);
            }), (this.removeAll = function(t, e) {
              for (var i = 0, o = C.length; i < o; i++) f.remove(C[0], t, e, !0);
              (C.length = 0), n.getGroupManager().updateConnectionsForGroup(f);
            }), (this.orphanAll = function() {
              for (var t = 0; t < C.length; t++) u(C[t]);
              C.length = 0;
            }), (this.getMembers = function() {
              return C;
            }), (g[s] = this), n.bind(
              'elementDraggable',
              function(t) {
                t.el._jsPlumbGroup == this && p(t.el);
              }.bind(this),
            ), (this.shouldProxy = function() {
              return E;
            }), n.getGroupManager().addGroup(this);
          };
        (n.prototype.addGroup = function(t) {
          var e = this;
          if (((e._groups = e._groups || {}), null != e._groups[t.id]))
            throw new TypeError(
              'cannot create Group [' + t.id + ']; a Group with that ID exists',
            );
          if (null != t.el[s])
            throw new TypeError(
              'cannot create Group [' + t.id + ']; the given element is already a Group',
            );
          var n = new a(e, t);
          return (e._groups[n.id] = n), n;
        }), (n.prototype.addToGroup = function(t, e, n) {
          this.getGroupManager().addToGroup(t, e, n);
        }), (n.prototype.removeFromGroup = function(t, e, n) {
          this.getGroupManager().removeFromGroup(t, e, n);
        }), (n.prototype.removeGroup = function(t, e, n, i) {
          this.getGroupManager().removeGroup(t, e, n, i);
        }), (n.prototype.removeAllGroups = function(t, e, n) {
          this.getGroupManager().removeAllGroups(t, e, n);
        }), (n.prototype.getGroup = function(t) {
          return this.getGroupManager().getGroup(t);
        }), (n.prototype.getGroups = function() {
          return this.getGroupManager().getGroups();
        }), (n.prototype.expandGroup = function(t) {
          this.getGroupManager().expandGroup(t);
        }), (n.prototype.collapseGroup = function(t) {
          this.getGroupManager().collapseGroup(t);
        }), (n.prototype.repaintGroup = function(t) {
          this.getGroupManager().repaintGroup(t);
        }), (n.prototype.toggleGroup = function(t) {
          null != (t = this.getGroupManager().getGroup(t)) &&
            this.getGroupManager()[t.collapsed ? 'expandGroup' : 'collapseGroup'](t);
        }), (n.prototype.getGroupManager = function() {
          var t = this._groupManager;
          return null == t && (t = this._groupManager = new r(this)), t;
        }), (n.prototype.removeGroupManager = function() {
          delete this._groupManager;
        }), (n.prototype.getGroupFor = function(t) {
          if ((t = this.getElement(t))) return t[s];
        });
      }.call('undefined' != typeof window ? window : this), function() {
        'use strict';
        var t = this,
          e = t.jsPlumb,
          n = t.jsPlumbUtil,
          i = function(t) {
            (this.type = 'Flowchart'), (t = t || {}), (t.stub =
              null == t.stub ? 30 : t.stub);
            var n,
              i,
              o = e.Connectors.AbstractConnector.apply(this, arguments),
              s = null == t.midpoint ? 0.5 : t.midpoint,
              r = !0 === t.alwaysRespectStubs,
              a = null,
              l = null,
              u = null != t.cornerRadius ? t.cornerRadius : 0,
              c = (
                t.loopbackRadius,
                function(t) {
                  return t < 0 ? -1 : 0 === t ? 0 : 1;
                }
              ),
              h = function(t, e, n, i) {
                if (a != e || l != n) {
                  var o = null == a ? i.sx : a,
                    s = null == l ? i.sy : l,
                    r = o == e ? 'v' : 'h',
                    u = c(e - o),
                    h = c(n - s);
                  (a = e), (l = n), t.push([o, s, e, n, r, u, h]);
                }
              },
              d = function(t) {
                return Math.sqrt(Math.pow(t[0] - t[2], 2) + Math.pow(t[1] - t[3], 2));
              },
              p = function(t) {
                var e = [];
                return e.push.apply(e, t), e;
              },
              f = function(t, e, n) {
                for (var i, s = null, r = 0; r < e.length - 1; r++) {
                  if (((s = s || p(e[r])), (i = p(e[r + 1])), u > 0 && s[4] != i[4])) {
                    var a = Math.min(u, d(s), d(i));
                    (s[2] -= s[5] * a), (s[3] -= s[6] * a), (i[0] += i[5] * a), (i[1] +=
                      i[6] * a);
                    var l =
                        (s[6] == i[5] && 1 == i[5]) ||
                        (s[6] == i[5] && 0 === i[5] && s[5] != i[6]) ||
                        (s[6] == i[5] && -1 == i[5]),
                      c = i[1] > s[3] ? 1 : -1,
                      h = i[0] > s[2] ? 1 : -1,
                      f = c == h,
                      g = (f && l) || (!f && !l) ? i[0] : s[2],
                      v = (f && l) || (!f && !l) ? s[3] : i[1];
                    o.addSegment(t, 'Straight', {
                      x1: s[0],
                      y1: s[1],
                      x2: s[2],
                      y2: s[3],
                    }), o.addSegment(t, 'Arc', {
                      r: a,
                      x1: s[2],
                      y1: s[3],
                      x2: i[0],
                      y2: i[1],
                      cx: g,
                      cy: v,
                      ac: l,
                    });
                  } else {
                    var m = s[2] == s[0] ? 0 : s[2] > s[0] ? n.lw / 2 : -n.lw / 2,
                      b = s[3] == s[1] ? 0 : s[3] > s[1] ? n.lw / 2 : -n.lw / 2;
                    o.addSegment(t, 'Straight', {
                      x1: s[0] - m,
                      y1: s[1] - b,
                      x2: s[2] + m,
                      y2: s[3] + b,
                    });
                  }
                  s = i;
                }
                null != i &&
                  o.addSegment(t, 'Straight', { x1: i[0], y1: i[1], x2: i[2], y2: i[3] });
              };
            this._compute = function(t, e) {
              (n = []), (a = null), (l = null), (i = null);
              var u = function() {
                  return [t.startStubX, t.startStubY, t.endStubX, t.endStubY];
                },
                c = {
                  perpendicular: u,
                  orthogonal: u,
                  opposite: function(e) {
                    var n = t,
                      i = 'x' == e ? 0 : 1,
                      o = {
                        x: function() {
                          return (
                            (1 == n.so[i] &&
                              ((n.startStubX > n.endStubX && n.tx > n.startStubX) ||
                                (n.sx > n.endStubX && n.tx > n.sx))) ||
                            (-1 == n.so[i] &&
                              ((n.startStubX < n.endStubX && n.tx < n.startStubX) ||
                                (n.sx < n.endStubX && n.tx < n.sx)))
                          );
                        },
                        y: function() {
                          return (
                            (1 == n.so[i] &&
                              ((n.startStubY > n.endStubY && n.ty > n.startStubY) ||
                                (n.sy > n.endStubY && n.ty > n.sy))) ||
                            (-1 == n.so[i] &&
                              ((n.startStubY < n.endStubY && n.ty < n.startStubY) ||
                                (n.sy < n.endStubY && n.ty < n.sy)))
                          );
                        },
                      };
                    return !r && o[e]()
                      ? {
                          x: [
                            (t.sx + t.tx) / 2,
                            t.startStubY,
                            (t.sx + t.tx) / 2,
                            t.endStubY,
                          ],
                          y: [
                            t.startStubX,
                            (t.sy + t.ty) / 2,
                            t.endStubX,
                            (t.sy + t.ty) / 2,
                          ],
                        }[e]
                      : [t.startStubX, t.startStubY, t.endStubX, t.endStubY];
                  },
                },
                d = c[t.anchorOrientation](t.sourceAxis),
                p = 'x' == t.sourceAxis ? 0 : 1,
                g = 'x' == t.sourceAxis ? 1 : 0,
                v = d[p],
                m = d[g],
                b = d[p + 2],
                y = d[g + 2];
              h(n, d[0], d[1], t);
              var P = t.startStubX + (t.endStubX - t.startStubX) * s,
                x = t.startStubY + (t.endStubY - t.startStubY) * s,
                _ = { x: [0, 1], y: [1, 0] },
                E = {
                  perpendicular: function(e) {
                    var n = t,
                      i = {
                        x: [
                          [[1, 2, 3, 4], null, [2, 1, 4, 3]],
                          null,
                          [[4, 3, 2, 1], null, [3, 4, 1, 2]],
                        ],
                        y: [
                          [[3, 2, 1, 4], null, [2, 3, 4, 1]],
                          null,
                          [[4, 1, 2, 3], null, [1, 4, 3, 2]],
                        ],
                      },
                      o = {
                        x: [[n.startStubX, n.endStubX], null, [n.endStubX, n.startStubX]],
                        y: [[n.startStubY, n.endStubY], null, [n.endStubY, n.startStubY]],
                      },
                      s = {
                        x: [[P, n.startStubY], [P, n.endStubY]],
                        y: [[n.startStubX, x], [n.endStubX, x]],
                      },
                      r = {
                        x: [[n.endStubX, n.startStubY]],
                        y: [[n.startStubX, n.endStubY]],
                      },
                      a = {
                        x: [[n.startStubX, n.endStubY], [n.endStubX, n.endStubY]],
                        y: [[n.endStubX, n.startStubY], [n.endStubX, n.endStubY]],
                      },
                      l = {
                        x: [[n.startStubX, x], [n.endStubX, x], [n.endStubX, n.endStubY]],
                        y: [[P, n.startStubY], [P, n.endStubY], [n.endStubX, n.endStubY]],
                      },
                      u = {
                        x: [n.startStubY, n.endStubY],
                        y: [n.startStubX, n.endStubX],
                      },
                      c = _[e][0],
                      h = _[e][1],
                      d = n.so[c] + 1,
                      p = n.to[h] + 1,
                      f =
                        (-1 == n.to[h] && u[e][1] < u[e][0]) ||
                        (1 == n.to[h] && u[e][1] > u[e][0]),
                      g = o[e][d][0],
                      v = o[e][d][1],
                      m = i[e][d][p];
                    return n.segment == m[3] || (n.segment == m[2] && f)
                      ? s[e]
                      : n.segment == m[2] && v < g
                        ? r[e]
                        : (n.segment == m[2] && v >= g) || (n.segment == m[1] && !f)
                          ? l[e]
                          : n.segment == m[0] || (n.segment == m[1] && f) ? a[e] : void 0;
                  },
                  orthogonal: function(e, n, i, o, s) {
                    var r = t,
                      a = {
                        x: -1 == r.so[0] ? Math.min(n, o) : Math.max(n, o),
                        y: -1 == r.so[1] ? Math.min(n, o) : Math.max(n, o),
                      }[e];
                    return { x: [[a, i], [a, s], [o, s]], y: [[i, a], [s, a], [s, o]] }[
                      e
                    ];
                  },
                  opposite: function(n, i, s, r) {
                    var a = t,
                      l = { x: 'y', y: 'x' }[n],
                      u = { x: 'height', y: 'width' }[n],
                      c = a['is' + n.toUpperCase() + 'GreaterThanStubTimes2'];
                    if (e.sourceEndpoint.elementId == e.targetEndpoint.elementId) {
                      var h =
                        s +
                        (1 - e.sourceEndpoint.anchor[l]) * e.sourceInfo[u] +
                        o.maxStub;
                      return { x: [[i, h], [r, h]], y: [[h, i], [h, r]] }[n];
                    }
                    return !c || (1 == a.so[p] && i > r) || (-1 == a.so[p] && i < r)
                      ? { x: [[i, x], [r, x]], y: [[P, i], [P, r]] }[n]
                      : (1 == a.so[p] && i < r) || (-1 == a.so[p] && i > r)
                        ? { x: [[P, a.sy], [P, a.ty]], y: [[a.sx, x], [a.tx, x]] }[n]
                        : void 0;
                  },
                },
                C = E[t.anchorOrientation](t.sourceAxis, v, m, b, y);
              if (C) for (var j = 0; j < C.length; j++) h(n, C[j][0], C[j][1], t);
              h(n, d[2], d[3], t), h(n, t.tx, t.ty, t), f(this, n, t);
            };
          };
        n.extend(i, e.Connectors.AbstractConnector), e.registerConnectorType(
          i,
          'Flowchart',
        );
      }.call('undefined' != typeof window ? window : this), function() {
        'use strict';
        var t = this,
          e = t.jsPlumb,
          n = t.jsPlumbUtil;
        (e.Connectors.AbstractBezierConnector = function(t) {
          t = t || {};
          var n,
            i = !1 !== t.showLoopback,
            o = (t.curviness, t.margin || 5),
            s = (t.proximityLimit, t.orientation && 'clockwise' === t.orientation),
            r = t.loopbackRadius || 25,
            a = !1;
          return (this.overrideSetEditable = function() {
            return !a;
          }), (this._compute = function(t, e) {
            var l = e.sourcePos,
              u = e.targetPos,
              c = Math.abs(l[0] - u[0]),
              h = Math.abs(l[1] - u[1]);
            if (i && e.sourceEndpoint.elementId === e.targetEndpoint.elementId) {
              a = !0;
              var d = e.sourcePos[0],
                p = e.sourcePos[1] - o,
                f = d,
                g = p - r,
                v = f - r,
                m = g - r;
              (c = 2 * r), (h =
                2 *
                r), (t.points[0] = v), (t.points[1] = m), (t.points[2] = c), (t.points[3] = h), n.addSegment(
                this,
                'Arc',
                {
                  loopback: !0,
                  x1: d - v + 4,
                  y1: p - m,
                  startAngle: 0,
                  endAngle: 2 * Math.PI,
                  r: r,
                  ac: !s,
                  x2: d - v - 4,
                  y2: p - m,
                  cx: f - v,
                  cy: g - m,
                },
              );
            } else (a = !1), this._computeBezier(t, e, l, u, c, h);
          }), (n = e.Connectors.AbstractConnector.apply(this, arguments));
        }), n.extend(
          e.Connectors.AbstractBezierConnector,
          e.Connectors.AbstractConnector,
        );
        var i = function(t) {
          (t = t || {}), (this.type = 'Bezier');
          var n = e.Connectors.AbstractBezierConnector.apply(this, arguments),
            i = t.curviness || 150;
          (this.getCurviness = function() {
            return i;
          }), (this._findControlPoint = function(t, e, n, o, s, r, a) {
            var l = r[0] != a[0] || r[1] == a[1],
              u = [];
            return l
              ? (
                  0 === a[0]
                    ? u.push(n[0] < e[0] ? t[0] + 10 : t[0] - 10)
                    : u.push(t[0] + i * a[0]),
                  0 === a[1]
                    ? u.push(n[1] < e[1] ? t[1] + 10 : t[1] - 10)
                    : u.push(t[1] + i * r[1])
                )
              : (
                  0 === r[0]
                    ? u.push(e[0] < n[0] ? t[0] + 10 : t[0] - 10)
                    : u.push(t[0] - i * r[0]),
                  0 === r[1]
                    ? u.push(e[1] < n[1] ? t[1] + 10 : t[1] - 10)
                    : u.push(t[1] + i * a[1])
                ), u;
          }), (this._computeBezier = function(t, e, i, o, s, r) {
            var a,
              l,
              u = this.getGeometry(),
              c = i[0] < o[0] ? s : 0,
              h = i[1] < o[1] ? r : 0,
              d = i[0] < o[0] ? 0 : s,
              p = i[1] < o[1] ? 0 : r;
            (this.hasBeenEdited() || this.isEditing()) &&
            null != u &&
            null != u.controlPoints &&
            null != u.controlPoints[0] &&
            null != u.controlPoints[1]
              ? ((a = u.controlPoints[0]), (l = u.controlPoints[1]))
              : (
                  (a = this._findControlPoint(
                    [c, h],
                    i,
                    o,
                    e.sourceEndpoint,
                    e.targetEndpoint,
                    t.so,
                    t.to,
                  )),
                  (l = this._findControlPoint(
                    [d, p],
                    o,
                    i,
                    e.targetEndpoint,
                    e.sourceEndpoint,
                    t.to,
                    t.so,
                  ))
                ), n.setGeometry(
              { controlPoints: [a, l] },
              !0,
            ), n.addSegment(this, 'Bezier', {
              x1: c,
              y1: h,
              x2: d,
              y2: p,
              cp1x: a[0],
              cp1y: a[1],
              cp2x: l[0],
              cp2y: l[1],
            });
          });
        };
        n.extend(i, e.Connectors.AbstractBezierConnector), e.registerConnectorType(
          i,
          'Bezier',
        );
      }.call('undefined' != typeof window ? window : this), function() {
        'use strict';
        var t = this,
          e = t.jsPlumb,
          n = t.jsPlumbUtil,
          i = function(t, e, n, i) {
            return t <= n && i <= e ? 1 : t <= n && e <= i ? 2 : n <= t && i >= e ? 3 : 4;
          },
          o = function(t, e, n, i, o, s, r, a, l) {
            return a <= l
              ? [t, e]
              : 1 === n
                ? i[3] <= 0 && o[3] >= 1
                  ? [t + (i[2] < 0.5 ? -1 * s : s), e]
                  : i[2] >= 1 && o[2] <= 0
                    ? [t, e + (i[3] < 0.5 ? -1 * r : r)]
                    : [t + -1 * s, e + -1 * r]
                : 2 === n
                  ? i[3] >= 1 && o[3] <= 0
                    ? [t + (i[2] < 0.5 ? -1 * s : s), e]
                    : i[2] >= 1 && o[2] <= 0
                      ? [t, e + (i[3] < 0.5 ? -1 * r : r)]
                      : [t + s, e + -1 * r]
                  : 3 === n
                    ? i[3] >= 1 && o[3] <= 0
                      ? [t + (i[2] < 0.5 ? -1 * s : s), e]
                      : i[2] <= 0 && o[2] >= 1
                        ? [t, e + (i[3] < 0.5 ? -1 * r : r)]
                        : [t + -1 * s, e + -1 * r]
                    : 4 === n
                      ? i[3] <= 0 && o[3] >= 1
                        ? [t + (i[2] < 0.5 ? -1 * s : s), e]
                        : i[2] <= 0 && o[2] >= 1
                          ? [t, e + (i[3] < 0.5 ? -1 * r : r)]
                          : [t + s, e + -1 * r]
                      : void 0;
          },
          s = function(t) {
            (t = t || {}), (this.type = 'StateMachine');
            var n,
              s = e.Connectors.AbstractBezierConnector.apply(this, arguments),
              r = t.curviness || 10,
              a = t.margin || 5,
              l = t.proximityLimit || 80;
            t.orientation && t.orientation, (this._computeBezier = function(
              t,
              e,
              u,
              c,
              h,
              d,
            ) {
              var p = e.sourcePos[0] < e.targetPos[0] ? 0 : h,
                f = e.sourcePos[1] < e.targetPos[1] ? 0 : d,
                g = e.sourcePos[0] < e.targetPos[0] ? h : 0,
                v = e.sourcePos[1] < e.targetPos[1] ? d : 0;
              0 === e.sourcePos[2] && (p -= a), 1 === e.sourcePos[2] && (p += a), 0 ===
                e.sourcePos[3] && (f -= a), 1 === e.sourcePos[3] && (f += a), 0 ===
                e.targetPos[2] && (g -= a), 1 === e.targetPos[2] && (g += a), 0 ===
                e.targetPos[3] && (v -= a), 1 === e.targetPos[3] && (v += a);
              var m,
                b,
                y,
                P,
                x = (p + g) / 2,
                _ = (f + v) / 2,
                E = i(p, f, g, v),
                C = Math.sqrt(Math.pow(g - p, 2) + Math.pow(v - f, 2)),
                j = s.getGeometry();
              (this.hasBeenEdited() || this.isEditing()) && null != j
                ? (
                    (m = j.controlPoints[0][0]),
                    (y = j.controlPoints[0][1]),
                    (b = j.controlPoints[1][0]),
                    (P = j.controlPoints[1][1])
                  )
                : (
                    (n = o(x, _, E, e.sourcePos, e.targetPos, r, r, C, l)),
                    (m = n[0]),
                    (b = n[0]),
                    (y = n[1]),
                    (P = n[1]),
                    s.setGeometry({ controlPoints: [n, n] }, !0)
                  ), s.addSegment(this, 'Bezier', {
                x1: g,
                y1: v,
                x2: p,
                y2: f,
                cp1x: m,
                cp1y: y,
                cp2x: b,
                cp2y: P,
              });
            });
          };
        n.extend(s, e.Connectors.AbstractBezierConnector), e.registerConnectorType(
          s,
          'StateMachine',
        );
      }.call('undefined' != typeof window ? window : this), function() {
        'use strict';
        var t = this,
          e = t.jsPlumb,
          n = t.jsPlumbUtil,
          i = function(t) {
            this.type = 'Straight';
            var n = e.Connectors.AbstractConnector.apply(this, arguments);
            this._compute = function(t, e) {
              n.addSegment(this, 'Straight', {
                x1: t.sx,
                y1: t.sy,
                x2: t.startStubX,
                y2: t.startStubY,
              }), n.addSegment(this, 'Straight', {
                x1: t.startStubX,
                y1: t.startStubY,
                x2: t.endStubX,
                y2: t.endStubY,
              }), n.addSegment(this, 'Straight', {
                x1: t.endStubX,
                y1: t.endStubY,
                x2: t.tx,
                y2: t.ty,
              });
            };
          };
        n.extend(i, e.Connectors.AbstractConnector), e.registerConnectorType(
          i,
          'Straight',
        );
      }.call('undefined' != typeof window ? window : this), function() {
        'use strict';
        var t = this,
          e = t.jsPlumb,
          n = t.jsPlumbUtil,
          i = {
            'stroke-linejoin': 'stroke-linejoin',
            'stroke-dashoffset': 'stroke-dashoffset',
            'stroke-linecap': 'stroke-linecap',
          },
          o = {
            svg: 'http://www.w3.org/2000/svg',
            xhtml: 'http://www.w3.org/1999/xhtml',
          },
          s = function(t, e) {
            for (var n in e) t.setAttribute(n, '' + e[n]);
          },
          r = function(t, n) {
            return (n = n || {}), (n.version = '1.1'), (n.xmlns =
              o.xhtml), e.createElementNS(o.svg, t, null, null, n);
          },
          a = function(t) {
            return 'position:absolute;left:' + t[0] + 'px;top:' + t[1] + 'px';
          },
          l = function(t) {
            for (
              var e = t.querySelectorAll(' defs,linearGradient,radialGradient'), n = 0;
              n < e.length;
              n++
            )
              e[n].parentNode.removeChild(e[n]);
          },
          u = function(t, e, n, i, o) {
            var s = 'jsplumb_gradient_' + o._jsPlumb.instance.idstamp();
            l(t);
            var a;
            a = n.gradient.offset
              ? r('radialGradient', { id: s })
              : r('linearGradient', { id: s, gradientUnits: 'userSpaceOnUse' });
            var u = r('defs');
            t.appendChild(u), u.appendChild(a);
            for (var c = 0; c < n.gradient.stops.length; c++) {
              var h =
                  1 == o.segment || 2 == o.segment ? c : n.gradient.stops.length - 1 - c,
                d = n.gradient.stops[h][1],
                p = r('stop', {
                  offset: Math.floor(100 * n.gradient.stops[c][0]) + '%',
                  'stop-color': d,
                });
              a.appendChild(p);
            }
            var f = n.stroke ? 'stroke' : 'fill';
            e.setAttribute(f, 'url(#' + s + ')');
          },
          c = function(t, e, n, o, s) {
            if (
              (
                e.setAttribute('fill', n.fill ? n.fill : 'none'),
                e.setAttribute('stroke', n.stroke ? n.stroke : 'none'),
                n.gradient ? u(t, e, n, 0, s) : (l(t), e.setAttribute('style', '')),
                n.strokeWidth && e.setAttribute('stroke-width', n.strokeWidth),
                n.dashstyle && n.strokeWidth && !n['stroke-dasharray']
              )
            ) {
              var r = -1 == n.dashstyle.indexOf(',') ? ' ' : ',',
                a = n.dashstyle.split(r),
                c = '';
              a.forEach(function(t) {
                c += Math.floor(t * n.strokeWidth) + r;
              }), e.setAttribute('stroke-dasharray', c);
            } else
              n['stroke-dasharray'] &&
                e.setAttribute('stroke-dasharray', n['stroke-dasharray']);
            for (var h in i) n[h] && e.setAttribute(i[h], n[h]);
          },
          h = function(t, e, n) {
            t.childNodes.length > n
              ? t.insertBefore(e, t.childNodes[n])
              : t.appendChild(e);
          };
        n.svg = { node: r, attr: s, pos: a };
        var d = function(t) {
          var i = t.pointerEventsSpec || 'all',
            o = {};
          e.jsPlumbUIComponent.apply(
            this,
            t.originalArgs,
          ), (this.canvas = null), (this.path = null), (this.svg = null), (this.bgCanvas = null);
          var l = t.cssClass + ' ' + (t.originalArgs[0].cssClass || ''),
            u = {
              style: '',
              width: 0,
              height: 0,
              'pointer-events': i,
              position: 'absolute',
            };
          (this.svg = r('svg', u)), t.useDivWrapper
            ? (
                (this.canvas = e.createElement('div', { position: 'absolute' })),
                n.sizeElement(this.canvas, 0, 0, 1, 1),
                (this.canvas.className = l)
              )
            : (
                s(this.svg, { class: l }),
                (this.canvas = this.svg)
              ), t._jsPlumb.appendElement(
            this.canvas,
            t.originalArgs[0].parent,
          ), t.useDivWrapper && this.canvas.appendChild(this.svg);
          var c = [this.canvas];
          return (this.getDisplayElements = function() {
            return c;
          }), (this.appendDisplayElement = function(t) {
            c.push(t);
          }), (this.paint = function(e, i, r) {
            if (null != e) {
              var l,
                u = [this.x, this.y],
                c = [this.w, this.h];
              null != r &&
                (
                  r.xmin < 0 && (u[0] += r.xmin),
                  r.ymin < 0 && (u[1] += r.ymin),
                  (c[0] = r.xmax + (r.xmin < 0 ? -r.xmin : 0)),
                  (c[1] = r.ymax + (r.ymin < 0 ? -r.ymin : 0))
                ), t.useDivWrapper
                ? (
                    n.sizeElement(this.canvas, u[0], u[1], c[0], c[1]),
                    (u[0] = 0),
                    (u[1] = 0),
                    (l = a([0, 0]))
                  )
                : (l = a([u[0], u[1]])), o.paint.apply(this, arguments), s(this.svg, {
                style: l,
                width: c[0] || 0,
                height: c[1] || 0,
              });
            }
          }), { renderer: o };
        };
        n.extend(d, e.jsPlumbUIComponent, {
          cleanup: function(t) {
            t || null == this.typeId
              ? (
                  this.canvas && (this.canvas._jsPlumb = null),
                  this.svg && (this.svg._jsPlumb = null),
                  this.bgCanvas && (this.bgCanvas._jsPlumb = null),
                  this.canvas &&
                    this.canvas.parentNode &&
                    this.canvas.parentNode.removeChild(this.canvas),
                  this.bgCanvas &&
                    this.bgCanvas.parentNode &&
                    this.canvas.parentNode.removeChild(this.canvas),
                  (this.svg = null),
                  (this.canvas = null),
                  (this.path = null),
                  (this.group = null)
                )
              : (
                  this.canvas &&
                    this.canvas.parentNode &&
                    this.canvas.parentNode.removeChild(this.canvas),
                  this.bgCanvas &&
                    this.bgCanvas.parentNode &&
                    this.bgCanvas.parentNode.removeChild(this.bgCanvas)
                );
          },
          reattach: function(t) {
            var e = t.getContainer();
            this.canvas &&
              null == this.canvas.parentNode &&
              e.appendChild(this.canvas), this.bgCanvas &&
              null == this.bgCanvas.parentNode &&
              e.appendChild(this.bgCanvas);
          },
          setVisible: function(t) {
            this.canvas && (this.canvas.style.display = t ? 'block' : 'none');
          },
        }), (e.ConnectorRenderers.svg = function(t) {
          var n = this,
            i = d.apply(this, [
              {
                cssClass:
                  t._jsPlumb.connectorClass +
                  (this.isEditable() ? ' ' + t._jsPlumb.editableConnectorClass : ''),
                originalArgs: arguments,
                pointerEventsSpec: 'none',
                _jsPlumb: t._jsPlumb,
              },
            ]),
            o = this.setEditable;
          (this.setEditable = function(t) {
            var n = o.apply(this, [t]);
            e[n ? 'addClass' : 'removeClass'](
              this.canvas,
              this._jsPlumb.instance.editableConnectorClass,
            );
          }), (i.renderer.paint = function(i, o, a) {
            var l = n.getSegments(),
              u = '',
              d = [0, 0];
            if (
              (
                a.xmin < 0 && (d[0] = -a.xmin),
                a.ymin < 0 && (d[1] = -a.ymin),
                l.length > 0
              )
            ) {
              u = n.getPathData();
              var p = {
                  d: u,
                  transform: 'translate(' + d[0] + ',' + d[1] + ')',
                  'pointer-events': t['pointer-events'] || 'visibleStroke',
                },
                f = null;
              if ((n.x, n.y, n.w, n.h, i.outlineStroke)) {
                var g = i.outlineWidth || 1,
                  v = i.strokeWidth + 2 * g;
                (f = e.extend({}, i)), delete f.gradient, (f.stroke =
                  i.outlineStroke), (f.strokeWidth = v), null == n.bgPath
                  ? (
                      (n.bgPath = r('path', p)),
                      e.addClass(n.bgPath, e.connectorOutlineClass),
                      h(n.svg, n.bgPath, 0)
                    )
                  : s(n.bgPath, p), c(n.svg, n.bgPath, f, 0, n);
              }
              null == n.path
                ? ((n.path = r('path', p)), h(n.svg, n.path, i.outlineStroke ? 1 : 0))
                : s(n.path, p), c(n.svg, n.path, i, 0, n);
            }
          });
        }), n.extend(e.ConnectorRenderers.svg, d);
        var p = (e.SvgEndpoint = function(t) {
          d.apply(this, [
            {
              cssClass: t._jsPlumb.endpointClass,
              originalArgs: arguments,
              pointerEventsSpec: 'all',
              useDivWrapper: !0,
              _jsPlumb: t._jsPlumb,
            },
          ]).renderer.paint = function(t) {
            var n = e.extend({}, t);
            n.outlineStroke &&
              ((n.strokeWidth = n.strokeWidth), (n.stroke = n.outlineStroke)), null ==
            this.node
              ? ((this.node = this.makeNode(n)), this.svg.appendChild(this.node))
              : null != this.updateNode && this.updateNode(this.node), c(
              this.svg,
              this.node,
              n,
              (this.x, this.y, this.w, this.h),
              this,
            ), a(this.node, (this.x, this.y));
          }.bind(this);
        });
        n.extend(p, d), (e.Endpoints.svg.Dot = function() {
          e.Endpoints.Dot.apply(this, arguments), p.apply(
            this,
            arguments,
          ), (this.makeNode = function(t) {
            return r('circle', { cx: this.w / 2, cy: this.h / 2, r: this.radius });
          }), (this.updateNode = function(t) {
            s(t, { cx: this.w / 2, cy: this.h / 2, r: this.radius });
          });
        }), n.extend(e.Endpoints.svg.Dot, [
          e.Endpoints.Dot,
          p,
        ]), (e.Endpoints.svg.Rectangle = function() {
          e.Endpoints.Rectangle.apply(this, arguments), p.apply(
            this,
            arguments,
          ), (this.makeNode = function(t) {
            return r('rect', { width: this.w, height: this.h });
          }), (this.updateNode = function(t) {
            s(t, { width: this.w, height: this.h });
          });
        }), n.extend(e.Endpoints.svg.Rectangle, [
          e.Endpoints.Rectangle,
          p,
        ]), (e.Endpoints.svg.Image = e.Endpoints.Image), (e.Endpoints.svg.Blank =
          e.Endpoints.Blank), (e.Overlays.svg.Label =
          e.Overlays.Label), (e.Overlays.svg.Custom = e.Overlays.Custom);
        var f = function(t, n) {
          t.apply(this, n), e.jsPlumbUIComponent.apply(
            this,
            n,
          ), (this.isAppendedAtTopLevel = !1), (this.path = null), (this.paint = function(
            t,
            e,
          ) {
            if (t.component.svg && e) {
              null == this.path &&
                (
                  (this.path = r('path', { 'pointer-events': 'all' })),
                  t.component.svg.appendChild(this.path),
                  this.elementCreated && this.elementCreated(this.path, t.component),
                  (this.canvas = t.component.svg)
                );
              var o = n && 1 == n.length ? n[0].cssClass || '' : '',
                a = [0, 0];
              e.xmin < 0 && (a[0] = -e.xmin), e.ymin < 0 && (a[1] = -e.ymin), s(
                this.path,
                {
                  d: i(t.d),
                  class: o,
                  stroke: t.stroke ? t.stroke : null,
                  fill: t.fill ? t.fill : null,
                  transform: 'translate(' + a[0] + ',' + a[1] + ')',
                },
              );
            }
          });
          var i = function(t) {
            return isNaN(t.cxy.x) || isNaN(t.cxy.y)
              ? ''
              : 'M' +
                t.hxy.x +
                ',' +
                t.hxy.y +
                ' L' +
                t.tail[0].x +
                ',' +
                t.tail[0].y +
                ' L' +
                t.cxy.x +
                ',' +
                t.cxy.y +
                ' L' +
                t.tail[1].x +
                ',' +
                t.tail[1].y +
                ' L' +
                t.hxy.x +
                ',' +
                t.hxy.y;
          };
          this.transfer = function(t) {
            t.canvas &&
              this.path &&
              this.path.parentNode &&
              (
                this.path.parentNode.removeChild(this.path),
                t.canvas.appendChild(this.path)
              );
          };
        };
        n.extend(f, [e.jsPlumbUIComponent, e.Overlays.AbstractOverlay], {
          cleanup: function(t) {
            null != this.path &&
              (t
                ? this._jsPlumb.instance.removeElement(this.path)
                : this.path.parentNode && this.path.parentNode.removeChild(this.path));
          },
          reattach: function(t) {
            this.path &&
              this.canvas &&
              null == this.path.parentNode &&
              this.canvas.appendChild(this.path);
          },
          setVisible: function(t) {
            null != this.path && (this.path.style.display = t ? 'block' : 'none');
          },
        }), (e.Overlays.svg.Arrow = function() {
          f.apply(this, [e.Overlays.Arrow, arguments]);
        }), n.extend(e.Overlays.svg.Arrow, [
          e.Overlays.Arrow,
          f,
        ]), (e.Overlays.svg.PlainArrow = function() {
          f.apply(this, [e.Overlays.PlainArrow, arguments]);
        }), n.extend(e.Overlays.svg.PlainArrow, [
          e.Overlays.PlainArrow,
          f,
        ]), (e.Overlays.svg.Diamond = function() {
          f.apply(this, [e.Overlays.Diamond, arguments]);
        }), n.extend(e.Overlays.svg.Diamond, [
          e.Overlays.Diamond,
          f,
        ]), (e.Overlays.svg.GuideLines = function() {
          var t,
            n,
            i = null,
            o = this;
          e.Overlays.GuideLines.apply(this, arguments), (this.paint = function(e, l) {
            null == i &&
              (
                (i = r('path')),
                e.connector.svg.appendChild(i),
                o.attachListeners(i, e.connector),
                o.attachListeners(i, o),
                (t = r('path')),
                e.connector.svg.appendChild(t),
                o.attachListeners(t, e.connector),
                o.attachListeners(t, o),
                (n = r('path')),
                e.connector.svg.appendChild(n),
                o.attachListeners(n, e.connector),
                o.attachListeners(n, o)
              );
            var u = [0, 0];
            l.xmin < 0 && (u[0] = -l.xmin), l.ymin < 0 && (u[1] = -l.ymin), s(i, {
              d: a(e.head, e.tail),
              stroke: 'red',
              fill: null,
              transform: 'translate(' + u[0] + ',' + u[1] + ')',
            }), s(t, {
              d: a(e.tailLine[0], e.tailLine[1]),
              stroke: 'blue',
              fill: null,
              transform: 'translate(' + u[0] + ',' + u[1] + ')',
            }), s(n, {
              d: a(e.headLine[0], e.headLine[1]),
              stroke: 'green',
              fill: null,
              transform: 'translate(' + u[0] + ',' + u[1] + ')',
            });
          });
          var a = function(t, e) {
            return 'M ' + t.x + ',' + t.y + ' L' + e.x + ',' + e.y;
          };
        }), n.extend(e.Overlays.svg.GuideLines, e.Overlays.GuideLines);
      }.call('undefined' != typeof window ? window : this), function() {
        'use strict';
        var t = this,
          e = t.jsPlumb,
          n = t.jsPlumbUtil,
          i = t.Katavorio,
          o = t.Biltong,
          s = function(t, n) {
            n = n || 'main';
            var s = '_katavorio_' + n,
              r = t[s],
              a = t.getEventManager();
            return r ||
              (
                (r = new i({
                  bind: a.on,
                  unbind: a.off,
                  getSize: e.getSize,
                  getPosition: function(e, n) {
                    var i = t.getOffset(e, n, e._katavorioDrag ? e.offsetParent : null);
                    return [i.left, i.top];
                  },
                  setPosition: function(t, e) {
                    (t.style.left = e[0] + 'px'), (t.style.top = e[1] + 'px');
                  },
                  addClass: e.addClass,
                  removeClass: e.removeClass,
                  intersects: o.intersects,
                  indexOf: function(t, e) {
                    return t.indexOf(e);
                  },
                  scope: t.getDefaultScope(),
                  css: {
                    noSelect: t.dragSelectClass,
                    droppable: 'jtk-droppable',
                    draggable: 'jtk-draggable',
                    drag: 'jtk-drag',
                    selected: 'jtk-drag-selected',
                    active: 'jtk-drag-active',
                    hover: 'jtk-drag-hover',
                    ghostProxy: 'jtk-ghost-proxy',
                  },
                })),
                (t[s] = r),
                t.bind('zoom', r.setZoom)
              ), r;
          },
          r = function(t, e) {
            var i = function(i) {
              if (null != e[i]) {
                if (n.isString(e[i])) {
                  var o = e[i].match(/-=/) ? -1 : 1,
                    s = e[i].substring(2);
                  return t[i] + o * s;
                }
                return e[i];
              }
              return t[i];
            };
            return [i('left'), i('top')];
          };
        e.extend(t.jsPlumbInstance.prototype, {
          animationSupported: !0,
          getElement: function(t) {
            return null == t
              ? null
              : (
                  (t =
                    'string' == typeof t
                      ? t
                      : null != t.length && null == t.enctype ? t[0] : t),
                  'string' == typeof t ? document.getElementById(t) : t
                );
          },
          removeElement: function(t) {
            s(this).elementRemoved(t), this.getEventManager().remove(t);
          },
          doAnimate: function(t, n, i) {
            i = i || {};
            var o = this.getOffset(t),
              s = r(o, n),
              a = s[0] - o.left,
              l = s[1] - o.top,
              u = i.duration || 250,
              c = u / 15,
              h = 15 / u * a,
              d = 15 / u * l,
              p = 0,
              f = setInterval(function() {
                e.setPosition(t, {
                  left: o.left + h * (p + 1),
                  top: o.top + d * (p + 1),
                }), null != i.step && i.step(p, Math.ceil(c)), ++p >= c && (window.clearInterval(f), null != i.complete && i.complete());
              }, 15);
          },
          destroyDraggable: function(t, e) {
            s(this, e).destroyDraggable(t);
          },
          destroyDroppable: function(t, e) {
            s(this, e).destroyDroppable(t);
          },
          initDraggable: function(t, e, n) {
            s(this, n).draggable(t, e);
          },
          initDroppable: function(t, e, n) {
            s(this, n).droppable(t, e);
          },
          isAlreadyDraggable: function(t) {
            return null != t._katavorioDrag;
          },
          isDragSupported: function(t, e) {
            return !0;
          },
          isDropSupported: function(t, e) {
            return !0;
          },
          isElementDraggable: function(t) {
            return (t = e.getElement(t)), t._katavorioDrag &&
              t._katavorioDrag.isEnabled();
          },
          getDragObject: function(t) {
            return t[0].drag.getDragElement();
          },
          getDragScope: function(t) {
            return (t._katavorioDrag && t._katavorioDrag.scopes.join(' ')) || '';
          },
          getDropEvent: function(t) {
            return t[0].e;
          },
          getUIPosition: function(t, e) {
            var n = t[0].el;
            if (null == n.offsetParent) return null;
            var i = t[0].finalPos || t[0].pos,
              o = { left: i[0], top: i[1] };
            if (n._katavorioDrag && n.offsetParent !== this.getContainer()) {
              var s = this.getOffset(n.offsetParent);
              (o.left += s.left), (o.top += s.top);
            }
            return o;
          },
          setDragFilter: function(t, e, n) {
            t._katavorioDrag && t._katavorioDrag.setFilter(e, n);
          },
          setElementDraggable: function(t, n) {
            (t = e.getElement(t)), t._katavorioDrag && t._katavorioDrag.setEnabled(n);
          },
          setDragScope: function(t, e) {
            t._katavorioDrag && t._katavorioDrag.k.setDragScope(t, e);
          },
          setDropScope: function(t, e) {
            t._katavorioDrop &&
              t._katavorioDrop.length > 0 &&
              t._katavorioDrop[0].k.setDropScope(t, e);
          },
          addToPosse: function(t, n) {
            var i = Array.prototype.slice.call(arguments, 1),
              o = s(this);
            e.each(t, function(t) {
              (t = [e.getElement(t)]), t.push.apply(t, i), o.addToPosse.apply(o, t);
            });
          },
          setPosse: function(t, n) {
            var i = Array.prototype.slice.call(arguments, 1),
              o = s(this);
            e.each(t, function(t) {
              (t = [e.getElement(t)]), t.push.apply(t, i), o.setPosse.apply(o, t);
            });
          },
          removeFromPosse: function(t, n) {
            var i = Array.prototype.slice.call(arguments, 1),
              o = s(this);
            e.each(t, function(t) {
              (t = [e.getElement(t)]), t.push.apply(t, i), o.removeFromPosse.apply(o, t);
            });
          },
          removeFromAllPosses: function(t) {
            var n = s(this);
            e.each(t, function(t) {
              n.removeFromAllPosses(e.getElement(t));
            });
          },
          setPosseState: function(t, n, i) {
            var o = s(this);
            e.each(t, function(t) {
              o.setPosseState(e.getElement(t), n, i);
            });
          },
          dragEvents: {
            start: 'start',
            stop: 'stop',
            drag: 'drag',
            step: 'step',
            over: 'over',
            out: 'out',
            drop: 'drop',
            complete: 'complete',
            beforeStart: 'beforeStart',
          },
          animEvents: { step: 'step', complete: 'complete' },
          stopDrag: function(t) {
            t._katavorioDrag && t._katavorioDrag.abort();
          },
          addToDragSelection: function(t) {
            s(this).select(t);
          },
          removeFromDragSelection: function(t) {
            s(this).deselect(t);
          },
          clearDragSelection: function() {
            s(this).deselectAll();
          },
          trigger: function(t, e, n, i) {
            this.getEventManager().trigger(t, e, n, i);
          },
          doReset: function() {
            for (var t in this) 0 === t.indexOf('_katavorio_') && this[t].reset();
          },
        }), (function(t) {
          var e = function() {
            /complete|loaded|interactive/.test(document.readyState) &&
            void 0 !== document.body &&
            null != document.body
              ? t()
              : setTimeout(e, 9);
          };
          e();
        })(e.init);
      }.call('undefined' != typeof window ? window : this));
    },
    function(t, e, n) {
      var i = n(92);
      'string' == typeof i && (i = [[t.i, i, '']]), n(21)(i, {}), i.locals &&
        (t.exports = i.locals);
    },
    function(t, e, n) {
      (e = t.exports = n(20)()), e.push([
        t.i,
        '.react-dag{display:block}.react-dag .jtk-endpoint svg{overflow:visible}.react-dag .jtk-endpoint circle{fill:#fff;r:2px;stroke-width:8px}.react-dag .jtk-endpoint-anchor-sourceAnchor circle{stroke:green}.react-dag .jtk-endpoint-anchor-transformAnchor circle{stroke:purple}.react-dag .jtk-endpoint-anchor-sinkAnchor circle{stroke:orange}.react-dag .diagram-container{position:relative;width:100%;height:80vh;background:#eee;overflow:hidden}.react-dag .diagram-container #dag-container{height:inherit;width:inherit;position:absolute;transform-origin:left center}.react-dag .diagram-container #dag-container .node{position:absolute;height:66px;width:105px;cursor:pointer}.react-dag .diagram-container #dag-container .node .dag-node{margin:0 auto;background-clip:border-box;height:46px;width:56px;border-radius:5px}.react-dag .diagram-container #dag-container .node .dag-node.source{border:2px solid green}.react-dag .diagram-container #dag-container .node .dag-node.source~.label{color:green}.react-dag .diagram-container #dag-container .node .dag-node.transform{border:2px solid purple}.react-dag .diagram-container #dag-container .node .dag-node.transform~.label{color:purple}.react-dag .diagram-container #dag-container .node .dag-node.sink{border:2px solid orange}.react-dag .diagram-container #dag-container .node .dag-node.sink~.label{color:orange}.react-dag .diagram-container #dag-container .node .label{font-size:12px}.react-dag .fa.fa-spin.fa-refresh{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}',
        '',
      ]);
    },
  ]);
});
