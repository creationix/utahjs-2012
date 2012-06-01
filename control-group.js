var fs = require('fs');

function statFiles(dirname, callback) {
  fs.readdir(dirname, function (err, files) {
    if (err) return callback(err);
    var result = {};
    var left = files.length;
    if (!left) return callback(null, result);
    files.forEach(function (file) {
      fs.stat(dirname + "/" + file, function (err, stat) {
        if (err) result[file] = err;
        else result[file] = stat;
        if (!--left) callback(null, result);
      });
    });
  });
}

statFiles(__dirname, function (err, stats) {
  if (err) throw err;
  console.log(stats);
})