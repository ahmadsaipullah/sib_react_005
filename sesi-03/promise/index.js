import fetch from "node-fetch";


fetch("https://fake-tweets-api.herokuapp.com/posts")
.then(response => {
  return response.json()
}).then(tweets => {
  return tweets.filter(tweet => {
    return tweet.stars > 50;
  })
}).then(tweets => {
  return tweets.filter(tweet => {
    return tweet.rts > 50;
  })
}).catch(err => {
  console.error(error);
});


//async/await
fetch("https://fake-tweets-api.herokuapp.com/posts")
.then(response => response.json())
.then(tweets => tweets.filter(tweet => tweet.stars > 50))
.then(tweets => tweets.filter(tweet => tweet.rts > 50))
.catch(err => {
  console.error(error);
});

//mencetak panjang karakter
(async() => {
  const response = await fetch("https://fake-tweets-api.herokuapp.com/posts");

  //output
  let tweets = await response.json();
  console.log(tweets.lenght);
})
