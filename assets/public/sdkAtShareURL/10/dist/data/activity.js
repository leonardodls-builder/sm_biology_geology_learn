var activityJson = {
  "itemId": "leonardo-dev-5",
  "type": "activity",
  "editor": "itembank-editor",
  "player": "itembank-player",
  "model": "bank",
  "status": "in-process",
  "displayType": "master",
  "toolName": "paint",
  "toolVersion": "1.0",
  "systemMeta": {
    "orgId": "leonardo-dev",
    "state": "draft",
    "revision": 1,
    "created": {
      "timestamp": "2019-12-26T09:39:22.333Z",
      "userId": "be6d5f4a-46f9-11e8-83c3-0acad1ee5072"
    },
    "lastModified": {
      "timestamp": "2019-12-30T12:00:57.128Z",
      "userId": "be6d5f4a-46f9-11e8-83c3-0acad1ee5072"
    },
    "schemaVersion": "2.0",
    "assetsBasePath": null,
    "itemIndex": 5
  },
  "itemMeta": {
    "title": "Question Bank",
    "description": "This Question Bank is a collection of a variety of questions",
    "tags": {}
  },
  "itemBody": {
    "questions": [
      {
        "placement": "external-meta",
        "id": "ITEM02",
        "meta": {
          "title": "Question #2",
          "stimulus": {
            "content": {
              "type": "item-html",
              "data": "<h5>La fabricación de proteínas necesita energía que es generada en los ribosomas.</h5>"
            }
          },
          "type": "item",
          "player": "mcsr-radio",
          "model": "mcsr",
          "editor": "mcsr-item-editor",
          "status": "complete",
          "score": 5
        }
      }
    ]
  },
  "itemResources": null,
  "_id": "5e047fca6a280900045abcf5",
  "__v": 0,
  "itemFragments": {
    "ITEM02": {
      "itemId": {
        "_id": "5f0552f9a96e0a0e7a07ab9d",
        "displayType": "embedded",
        "workspace": {
          "default": {}
        },
        "status": "in-process",
        "systemMeta": {
          "publish": {
            "requestReceived": false
          },
          "isDeleted": false,
          "schemaVersion": "2.0",
          "revision": 1,
          "state": "draft",
          "clientId": "compro",
          "created": {
            "userId": "be6d5f4a-46f9-11e8-83c3-0acad1ee5072",
            "timestamp": "2020-07-08T05:00:41.572Z"
          },
          "lastModified": {
            "userId": "be6d5f4a-46f9-11e8-83c3-0acad1ee5072",
            "timestamp": "2020-07-23T12:41:54.222Z"
          },
          "itemIndex": 4190
        },
        "itemId": "comproqa-dev-4190",
        "type": "item",
        "model": "mcsr",
        "editor": "mcsr-item-editor",
        "player": "mcsr-radio",
        "toolName": "paint",
        "toolVersion": "1",
        "itemMeta": {
          "title": "Question #2",
          "description": "Description",
          "tags": {
            "domain": "",
            "difficulty": "",
            "custom": [
              ""
            ]
          },
          "skill": "",
          "learningObjective": "",
          "targetAudience": ""
        },
        "itemBody": {
          "instruction": {
            "content": {
              "type": "item-text",
              "data": ""
            }
          },
          "stimulus": {
            "content": {
              "type": "item-xhtml",
              "data": "<div class='item-body-standard'>La fabricación de proteínas necesita energía que es generada en los ribosomas.</div>"
            }
          },
          "media": {
            "content": {
              "type": "item-media",
              "data": {
                "type": "",
                "title": "",
                "url": "",
                "xhtml": ""
              }
            }
          },
          "options": [
            {
              "id": "O1",
              "content": {
                "type": "item-text",
                "data": "Falso"
              },
              "feedback": {
                "content": {
                  "type": "item-text",
                  "data": "Feedback A"
                }
              }
            },
            {
              "id": "O2",
              "content": {
                "type": "item-text",
                "data": "Verdadero"
              },
              "feedback": {
                "content": {
                  "type": "item-text",
                  "data": "Feedback B"
                }
              }
            }
          ],
          "validations": [
            {
              "validationId": "v1",
              "responseContainer": "1",
              "correctResponse": "O1",
              "operator": "id_equals"
            }
          ],
          "scoring": {
            "rules": [
              {
                "type": "compute",
                "validationId": "v1",
                "score": 5
              }
            ]
          },
          "preferences": {
            "shuffle": true,
            "layout": {
              "orientation": "vertical"
            }
          },
          "feedback": {
            "general": {
              "content": {
                "type": "item-text",
                "data": ""
              }
            },
            "correct": {
              "content": {
                "type": "item-text",
                "data": ""
              }
            },
            "incorrect": {
              "content": {
                "type": "item-text",
                "data": ""
              }
            }
          },
          "hints": []
        },
        "itemResources": {},
        "itemFragments": null,
        "__v": 0
      }
    }
  }
};