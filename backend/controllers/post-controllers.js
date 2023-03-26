const getAllMusicPosts = (req, res) => {
  res.send("음악 페이지");
};

const getAllMoviePosts = (req, res) => {
  res.send("영화페이지");
};

const getAllExhibitonPosts = (req, res) => {
  res.send("전시 페이지");
};

const getAllEtcPosts = (req, res) => {
  res.send("etc 페이지");
};

const getAllBookPosts = (req, res) => {
  res.send("book 페이지.");
};

exports.getAllMusicPosts = getAllMusicPosts;
exports.getAllMoviePosts = getAllMoviePosts;
exports.getAllExhibitonPosts = getAllExhibitonPosts;
exports.getAllEtcPosts = getAllEtcPosts;
exports.getAllBookPosts = getAllBookPosts;
