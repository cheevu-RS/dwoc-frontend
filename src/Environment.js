const { Environment, Network, RecordSource, Store } = require("relay-runtime");
const Cookie = require("js-cookie");

function fetchQuery(operation, variables) {
  return fetch("https://dwoc.io/dwocb", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
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
  return fetch("https://dwoc.io/dwocb", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'session': JSON.parse(Cookie.get("dwoc_user_session")).session,
      'id': JSON.parse(Cookie.get("dwoc_user_session")).id
      // 'session': '5cf4c780e60aa1269f164f6d7cc352c8bf19ba13',
      // 'id': 'ck2c19k11015n0847iyx85wnj',
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
