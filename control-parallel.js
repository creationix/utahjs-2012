function getComments(userId, callback) {
  var user, comments, done;
  queryOne("users", userId, function (err, result) {
    if (err) return error(err);
    user = result;
    checkDone();
  });
  queryAll("comments", userId, function (err, result) {
    if (err) return error(err);
    comments = result;
    checkDone();
  });
  
  function error(err) {
    if (done) return; 
    done = true;
    callback(err);
  }
  function checkDone() {
    if (done || !user || !comments)) return;
    done = true;
    callback(null, { user: user, comments: comments });
  }
}

getComments("6ls9fv8czv02", function (err, data) {
  // handle err or data
});