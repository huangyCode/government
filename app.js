/**
 * yoho-activity-platform app
 * @author: leo<qi.li@yoho.cn>
 * @date: 2017/6/23
 */
'use strict';
const port = 3100;
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('dist'));
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'dist'));
});
app.listen(port, function() {
  console.log('started successfully, listening on port:' + port);
});
