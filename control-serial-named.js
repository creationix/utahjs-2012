function getComments(sessionId, callback) {
  var userId, user;
  queryOne("sessions", sessionId, onSession);
  function onSession(err, session) {
    if (err) return callback(err);
    userId = session.userId;
    queryOne("users", userId, onUser)
  function onUser(err, result) {
    if (err) return callback(err);
    user = result;
    queryAll("comments", userId, onComments);
  }
  function onComments(err, comments) {
    if (err) return callback(err);
    callback(null { user: user, comments: comments });
  };
}

getComments("6ls9fv8czv02", function (err, data) {
  // handle err or data
});