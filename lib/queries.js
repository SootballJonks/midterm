const db = require('./db/db.js');

//user stories for userpage
const getUserStories = (user_id) => {
  const queryString = `
    SELECT *
    FROM stories
    WHERE user_id = $1;
  `;
  const values = [user_id];

  return db.query(queryString, values)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      console.error('query error:', err.stack)
    });
}
exports.getUserStories = getUserStories;


//all stories for homepage
const getAllStories = (options) => {
  const queryParams = [];

  let queryString = `
    SELECT *
    FROM stories
    WHERE true
  `;

  //specific user
  if(options.user_id) {
    queryParams.push(`%${options.user_id}%`);
    queryString += `AND user_id LIKE $${queryParams.length} `;
  }
  //specific title
  if(options.title) {
    queryParams.push(`%${options.title}%`);
    queryString += `AND title LIKE $${queryParams.length} `;
  }
  //specific tags
  if(options.tags) {
    queryParams.push(`%${options.tags}%`);
    queryString += `AND tags ANY($${queryParams.length}) `;
  }
  //active status
  if(options.active) {
    queryParams.push(`%${options.active}%`);
    queryString += `AND active = $${queryParams.length} `;
  }

  queryString += `;`;

  return db.query(queryString, queryParams)
    .then(res => res.rows)
}
exports.getAllStories = getAllStories;


//create a new story
const newStory = (entry) => {
  const queryString = `
  INSERT INTO stories
  (user_id, title, text, tags)
  VALUES
  ($1, $2, $3, $4)
  RETURNING *;
  `;
  const values = [
    entry.user_id,
    entry.title,
    entry.text,
    entry.tags
  ];

  return db.query(queryString, values)
    .then(res => res.rows[0]);
}
exports.newStory = newStory;

//add a piece to an in-progress story as 'pending'
const addNewPiece = (user, story) => {

}

//add a pending piece to the story
const addPieceToStory = (piece) => {
  let appendedText = [];
  const queryString1 = `
  SELECT pieces.text AS new_text, stories.text AS original_text
  FROM pieces
  JOIN stories ON stories.id = story_id
  WHERE story_id = $1;
  `;
  const queryString2 = `
  UPDATE stories
  SET text = $2
  WHERE story_id = $1
  RETURNING * ;
  `;

  let values = [piece.story_id]

  return db.query(queryString1, values[0])
    .then(res => {
      let results = res.rows[0];
      appendedText.push(results.original_text);
      appendedText.push(results.new_text);
      appendedText.join('\n')
    })
    .then(res => {
      values.push(res);
      db.query(queryString2, values)
    })
    .then(res => {
      res.rows[0];
    })
}
exports.addPieceToStory = addPieceToStory;

//add upvote to pending piece
const addUpvote = () => {

}

//get all upvotes for pending piece
const getAllUpvotes = () => {

}
