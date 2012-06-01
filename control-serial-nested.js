function getComments(sessionId, callback) {
  queryOne("sessions", sessionId, function (err, session) {
    if (err) return callback(err);
    queryOne("users", session.userId, function (err, user) {
      if (err) return callback(err);
      queryAll("comments", session.userId, function (err, comments) {
        if (err) return callback(err);
        callback(null { user: user, comments: comments });
      });
    });
  });
}

getComments("6ls9fv8czv02", function (err, data) {
  // handle err or data
});