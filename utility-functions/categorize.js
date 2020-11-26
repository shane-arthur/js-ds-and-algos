var categories = [{
    "id": 1,
    "name": "category 1",
    "parentId": -1
  },
  {
    "id": 2,
    "name": "category 2",
    "parentId": 1
  },
  {
    "id": 3,
    "name": "category 3",
    "parentId": 2
  },
  {
    "id": 4,
    "name": "category 4",
    "parentId": 1
  }
];

// expected output
var output = [{
  "name": "category 1",
  "children": [{
      "name": "category 2",
      "children": [{
        "name": "category 3"
      }]
    },
    {
      "name": "category 4"
    }
  ]
}];

categorize(categories);

function categorize() {
  const map = new Map();
  const output = [];

  function extract(parentId, name) {
    if (!map.has(parentId)) {
      return {
        name
      };
    }

    const output = {
      name,
      children: []
    };

    for (const {
        id,
        name
      } of map.get(parentId)) {
      output.children.push(extract(id, name))
    }

    return output;
  }

  for (const category of categories) {
    const {
      id,
      name,
      parentId
    } = category;
    if (!map.has(parentId)) {
      map.set(parentId, []);
    }
    map.get(parentId).push({
      name,
      id
    });
  }

  const topLevel = map.get(-1);

  for (const {
      id,
      name
    } of topLevel) {
    console.log(extract(id, name));
  }

}
