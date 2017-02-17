import _ from 'lodash';
import {MetricsPanelCtrl} from 'app/plugins/sdk';

const panelDefaults = {
	imageURL : ""
};

export class ImageViewerCtrl extends MetricsPanelCtrl  {
  
  
  constructor($scope, $injector) {
    super($scope, $injector);
    _.defaults(this.panel, panelDefaults);

    this.events.on('panel-initialized', this.render.bind(this));
	this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('data-snapshot-load', this.onDataReceived.bind(this));
  }

  onDataReceived(dataList) {
	this.panel.imageURL=dataList[0].datapoints[dataList[0].datapoints.length-1][0];
    this.render();
  }
	
  link(scope, elem, attrs, ctrl) {
    function render() {
    }

    this.events.on('render', function() {
      render();
      ctrl.renderingCompleted();
    });
  }
}

ImageViewerCtrl.templateUrl = 'module.html';
