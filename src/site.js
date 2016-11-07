require('./stylesheets/base.scss');
require('./images/logo.png');
require('./images/tech-radar-201611-landing-page-wide.png');
require('./images/tw-logo.png');
require('./images/favicon.ico');
require('./images/radar_legend.png');

//const GoogleSheetInput = require('./util/googleFactory');
//GoogleSheetInput().build();

//const ExcelSheetInput = require('./util/excelFactory');
//ExcelSheetInput().build();

const JsonSheetInput = require('./util/jsonFactory');
JsonSheetInput().build();
