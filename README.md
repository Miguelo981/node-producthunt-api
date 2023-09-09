# Product Hunt API V2 Node.js Library
The Product Hunt Node.js library provides convenient access to the Product Hunt Graphql V2 API from Node.js applications.

> ⚠️ **Important note: this library is meant for server-side usage only, as using it in client-side browser code will expose your secret API key. [See here](https://api.producthunt.com/v2/docs) for more details.**

## Installation

```bash
npm install node-producthunt-api
```

## Usage

The library needs to be configured with your account's secret key, which is available in your [Product Hunt account page]([https://platform.openai.com/account/api-keys](https://www.producthunt.com/v2/oauth/applications)). We recommend setting it as an environment variable. Here's an example of initializing the library with the API key loaded from an environment variable and creating a completion:

```javascript
const { Configuration, ProductHuntAPI } = require("node-producthunt-api");

const configuration = new Configuration({
        clientId: process.env.PRODUCT_HUNT_CLIENT_ID,
        clientSecret: process.env.PRODUCT_HUNT_CLIENT_SECRET,
        grantType: "client_credentials",
})
const productHuntAPI = new ProductHuntAPI(configuration)

const { data } = await productHuntAPI
  .GetPosts({
    variables: {
      first: 20,
      order: "VOTES",
      postedAfter: new Date("2022/12/01"),
      after: "NjA",
      topic: "web3"
    }
  })
console.log(data.data.posts.edges)
```

Check out the [full API documentation](http://api-v2-docs.producthunt.com.s3-website-us-east-1.amazonaws.com/object/post/) for examples of all the available functions.

### Request options

All of the available API request functions additionally contain an optional final parameter where you can pass custom [axios request options](https://axios-http.com/docs/req_config), for example:

```javascript
const completion = await productHuntAPI
  .GetPosts(
    {
      variables: {
        first: 20,
        order: "VOTES"
      }
    },
    {
      timeout: 1000,
      headers: {
        "Example-Header": "example",
      },
    }
  );
```

### Error handling

API requests can potentially return errors due to invalid inputs or other issues. These errors can be handled with a `try...catch` statement, and the error details can be found in either `error.response` or `error.message`:

```javascript
try {
  const { data } = await productHuntAPI
  .GetPosts({
      variables: {
        first: 20,
        order: "VOTES"
      }
  });
  console.log(data.data.posts.edges);
} catch (error) {
  if (error.response) {
    console.log(error.response.status);
    console.log(error.response.data);
  } else {
    console.log(error.message);
  }
}
```


### Roadmap

- [x] Support Typescript typing
- [x] Support for Oauth token middleware
- [x] Add GetPosts query
- [x] Add GetTopics query
- [x] Add GetPost query
- [ ] Add GetTopic query
- [ ] Add GetCollection/s query
- [ ] Add GetViewer/s query
- [ ] Add GetUser/s query
- [ ] Add GetMakerGroup/s query
- [ ] Add GetGoal/s query
- [ ] Add GetComment/s query
- [ ] Add mutation/s support