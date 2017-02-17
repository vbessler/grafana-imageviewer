'use strict';

System.register(['lodash', 'app/plugins/sdk'], function (_export, _context) {
  "use strict";

  var _, MetricsPanelCtrl, _createClass, panelDefaults, ImageViewerCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_lodash) {
      _ = _lodash.default;
    }, function (_appPluginsSdk) {
      MetricsPanelCtrl = _appPluginsSdk.MetricsPanelCtrl;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      panelDefaults = {
        imageURL: ""
      };

      _export('ImageViewerCtrl', ImageViewerCtrl = function (_MetricsPanelCtrl) {
        _inherits(ImageViewerCtrl, _MetricsPanelCtrl);

        function ImageViewerCtrl($scope, $injector) {
          _classCallCheck(this, ImageViewerCtrl);

          var _this = _possibleConstructorReturn(this, (ImageViewerCtrl.__proto__ || Object.getPrototypeOf(ImageViewerCtrl)).call(this, $scope, $injector));

          _.defaults(_this.panel, panelDefaults);

          _this.events.on('panel-initialized', _this.render.bind(_this));
          _this.events.on('data-received', _this.onDataReceived.bind(_this));
          _this.events.on('data-snapshot-load', _this.onDataReceived.bind(_this));
          return _this;
        }

        _createClass(ImageViewerCtrl, [{
          key: 'onDataReceived',
          value: function onDataReceived(dataList) {
            this.panel.imageURL = dataList[0].datapoints[dataList[0].datapoints.length - 1][0];
            this.render();
          }
        }, {
          key: 'link',
          value: function link(scope, elem, attrs, ctrl) {
            function render() {}

            this.events.on('render', function () {
              render();
              ctrl.renderingCompleted();
            });
          }
        }]);

        return ImageViewerCtrl;
      }(MetricsPanelCtrl));

      _export('ImageViewerCtrl', ImageViewerCtrl);

      ImageViewerCtrl.templateUrl = 'module.html';
    }
  };
});
//# sourceMappingURL=imageviewer_ctrl.js.map
