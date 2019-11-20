const products = {
  "company": "gap",
  "north-america": {
    "products": [
      {
        "category": "jeans",
        "title": "skinny",
        "image": "https://www3.assets-gap.com/webcontent/0017/436/382/cn17436382.jpg"
      },
      {
        "category": "jeans",
        "title": "fit",
        "image": "https://www4.assets-gap.com/webcontent/0017/969/692/cn17969692.jpg"
      },
      {
        "category": "sweaters",
        "title": "winter is coming",
        "image": "https://www4.assets-gap.com/webcontent/0017/160/823/cn17160823.jpg"
      }
    ]
  }
};

exports.handler = async event => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    statusCode: 200,
    body: JSON.stringify(products),
  }
}
