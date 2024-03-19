import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('server is ready');
})

app.get('/jokes', (req, res) => {
    const jokes = [
        {
          "id": "j123",
          "title": "The Programmer's Guide to Humor",
          "joke": "Why did the computer scientist cross the road? To get to the even byte."
        },
        {
          "id": "f456",
          "title": "Cannibal Walks Into a Bar",
          "joke": "Waiter, what's on the menu?  ... Don't worry, it's nothing serious."
        },
        {
          "id": "a789",
          "title": "Why Did the Scared Mushroom Need Therapy?",
          "joke": "Because he had a fungi problem!"
        },
        {
          "id": "k012",
          "title": "What do you call a fish with no eyes?",
          "joke": "Fsh!"
        },
        {
          "id": "z345",
          "title": "Customer Service Conundrum",
          "joke": "Customer: Can I have a refund on this keyboard? It keeps typing random things.  Me: Like what?  Customer: uiopdefghjkl;'"
        },
        {
          "id": "m678",
          "title": "Light Bulb Joke (Not Really)",
          "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
          "id": "t901",
          "title": "What do you call a lazy kangaroo?",
          "joke": "A pouch potato!"
        },
        {
          "id": "w234",
          "title": "Chemistry Joke (For the Pun-ditry)",
          "joke": "What do you call a lazy kangaroo? A pouch potato! But wait, that's a biology joke.  Never mind."
        }
      ];
      res.send(jokes);
})
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`); 
})