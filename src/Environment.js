const { Environment, Network, RecordSource, Store } = require("relay-runtime");
const Cookie = require("js-cookie");

function fetchQuery(operation, variables) {
  return fetch("https://delta.nitt.edu/dwocb", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      // 'session': JSON.parse(Cookie.get("dwoc_user_session")).session,
      // 'id': JSON.parse(Cookie.get("dwoc_user_session")).id
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
}
function fetchQuery1(operation, variables) {
  return fetch("https://delta.nitt.edu/dwocb", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'session': JSON.parse(Cookie.get("dwoc_user_session")).session,
      'id': JSON.parse(Cookie.get("dwoc_user_session")).id
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
}





const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});
const environment1 = new Environment({
  network: Network.create(fetchQuery1),
  store: new Store(new RecordSource())
});


module.exports={
  environment,
  environment1
}
