var excel2Json = require('node-excel-to-json');

excel2Json('./data.xls', {
    'convert_all_sheet': false,
    'return_type': 'Object',
    'sheetName': 'Sheet1'
}, function(err, output) {

 console.log(err);
 console.log(output);

});

