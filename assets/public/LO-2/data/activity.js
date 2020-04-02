var activityJson = {
  "itemId": "leonardo-dev-5",
  "type": "activity",
  "subType": "collection",
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
        "id": "ITEM01",
        "meta": {
          "title": "Question #1",
          "stimulus": {
            "content": {
              "type": "item-html",
              "data": "<h5>The air we breathe in, or inhale, is 21% oxygen, 0,03% carbon dioxide and 78% nitrogen. What about when we breathe out, or exhale?</h5>"
            }
          },
          "type": "item",
          "subType": "mcsr-radio",
          "status": "complete",
          "score": 2
        }
      },
      {
        "placement": "external-meta",
        "id": "ITEM02",
        "meta": {
          "title": "Question #2",
          "stimulus": {
            "content": {
              "type": "item-html",
              "data": "<h5>Smoking is the cause of more than 25 illnesses, including chronic bronchitis and lung cancer.</h5>"
            }
          },
          "type": "item",
          "subType": "mcsr-radio",
          "status": "complete",
          "score": 2
        }
      },
      {
        "placement": "external-meta",
        "id": "ITEM03",
        "meta": {
          "title": "Question #3",
          "stimulus": {
            "content": {
              "type": "item-xhtml",
              "data": "<h5>Drag each word to its correct place on the picture.</h5>"
            }
          },
          "type": "item",
          "subType": "imagelabel-dnd",
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
    "ITEM01": {
      "itemId": {
        "itemId": "leonardo-dev-004",
        "type": "item",
        "subType": "mcsr-block",
        "status": "complete",
        "displayType": "embedded",
        "toolName": "paint",
        "toolVersion": "1.0",
        "systemMeta": {
          "orgId": "leonardo-dev",
          "state": "draft",
          "revision": "1",
          "created": {
            "timestamp": "2019-09-03T05:38:18.168Z",
            "userId": "be6d5f4a-46f9-11e8-83c3-0acad1ee5072"
          },
          "lastModified": {
            "timestamp": "2019-09-04T12:57:42.535Z",
            "userId": "be6d5f4a-46f9-11e8-83c3-0acad1ee5072"
          },
          "schemaVersion": "2.0",
          "assetsBasePath": "https://s3.amazonaws.com/paint.leonardodls.com/organization_bucket/"
        },
        "itemMeta": {
          "title": "Title",
          "description": "Description",
          "tags": {
            "domain": "Engineering",
            "difficulty": "Beginner",
            "custom": [
              ""
            ]
          },
          "skill": "",
          "learningObjective": ""
        },
        "itemBody": {
          "instruction": {
            "content": {
              "type": "item-text",
              "data": ""
            }
          },
          "mediaContent": {
            "type": "item-xhtml",
            "data": ""
          },
          "stimulus": {
            "content": {
              "type": "item-html",
              "data": "<h5>The air we breathe in, or inhale, is 21% oxygen, 0,03% carbon dioxide and 78% nitrogen. What about when we breathe out, or exhale?</h5>"
            }
          },
          "options": [
            {
              "id": "O1",
              "content": {
                "type": "item-text",
                "data": "16% oxygen, 5% carbon dioxide and 78% nitrogen"
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
                "data": "26% oxygen, 0,01% carbon dioxide and 78% nitrogen"
              },
              "feedback": {
                "content": {
                  "type": "item-text",
                  "data": "Feedback B"
                }
              }
            },
            {
              "id": "O3",
              "content": {
                "type": "item-text",
                "data": "16% oxygen, 0,03% carbon dioxide and 78% nitrogen"
              },
              "feedback": {
                "content": {
                  "type": "item-text",
                  "data": "Feedback C"
                }
              }
            },
            {
              "id": "O4",
              "content": {
                "type": "item-text",
                "data": "21% oxygen, 5% carbon dioxide and 78% nitrogen"
              },
              "feedback": {
                "content": {
                  "type": "item-text",
                  "data": "Feedback D"
                }
              }
            }
          ],
          "validations": [
            {
              "validationId": "v1",
              "responseContainer": "1",
              "correctResponse": "16% oxygen, 5% carbon dioxide and 78% nitrogen",
              "operator": "text_equals"
            }
          ],
          "scoring": {
            "rules": [
              {
                "type": "compute",
                "validationId": "v1",
                "score": 2
              }
            ]
          },
          "preferences": {
            "shuffle": true,
            "layout": {
              "orientation": "vertical/horizontal"
            },
            "score": 2
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
          "hints": [
            {
              "id": "H1",
              "content": {
                "type": "item-text",
                "data": "Hint 1"
              }
            },
            {
              "id": "H2",
              "content": {
                "type": "item-text",
                "data": "Hint 2"
              }
            }
          ]
        },
        "itemResponse": {
          "userResponse": [],
          "hintsShown": false,
          "feedbackShown": false,
          "noOptionSelectedAlertShown": false,
          "locked": false,
          "consumedHints": [],
          "outcomes": {
            "score": 0,
            "scoringStatus": "",
            "attemptStatus": ""
          }
        },
        "itemResources": {}
      }
    },
    "ITEM02": {
      "itemId": {
        "itemId": "leonardo-dev-005",
        "type": "item",
        "subType": "mcsr-block",
        "status": "complete",
        "displayType": "embedded",
        "toolName": "paint",
        "toolVersion": "1.0",
        "systemMeta": {
          "orgId": "leonardo-dev",
          "state": "draft",
          "revision": "1",
          "created": {
            "timestamp": "2019-09-03T05:38:18.168Z",
            "userId": "be6d5f4a-46f9-11e8-83c3-0acad1ee5072"
          },
          "lastModified": {
            "timestamp": "2019-09-04T12:57:42.535Z",
            "userId": "be6d5f4a-46f9-11e8-83c3-0acad1ee5072"
          },
          "schemaVersion": "2.0",
          "assetsBasePath": "https://s3.amazonaws.com/paint.leonardodls.com/organization_bucket/"
        },
        "itemMeta": {
          "title": "Title",
          "description": "Description",
          "tags": {
            "domain": "Engineering",
            "difficulty": "Beginner",
            "custom": [
              ""
            ]
          },
          "skill": "",
          "learningObjective": ""
        },
        "itemBody": {
          "instruction": {
            "content": {
              "type": "item-text",
              "data": ""
            }
          },
          "mediaContent": {
            "type": "item-xhtml",
            "data": ""
          },
          "stimulus": {
            "content": {
              "type": "item-html",
              "data": "<h5>Smoking is the cause of more than 25 illnesses, including chronic bronchitis and lung cancer.</h5>"
            }
          },
          "options": [
            {
              "id": "O1",
              "content": {
                "type": "item-text",
                "data": "True"
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
                "data": "False"
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
              "correctResponse": "True",
              "operator": "text_equals"
            }
          ],
          "scoring": {
            "rules": [
              {
                "type": "compute",
                "validationId": "v1",
                "score": 2
              }
            ]
          },
          "preferences": {
            "shuffle": true,
            "layout": {
              "orientation": "vertical/horizontal"
            },
            "score": 2
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
          "hints": [
            {
              "id": "H1",
              "content": {
                "type": "item-text",
                "data": "Hint 1"
              }
            },
            {
              "id": "H2",
              "content": {
                "type": "item-text",
                "data": "Hint 2"
              }
            }
          ]
        },
        "itemResponse": {
          "userResponse": [],
          "hintsShown": false,
          "feedbackShown": false,
          "noOptionSelectedAlertShown": false,
          "locked": false,
          "consumedHints": [],
          "outcomes": {
            "score": 0,
            "scoringStatus": "",
            "attemptStatus": ""
          }
        },
        "itemResources": {}
      }
    },
    "ITEM03": {
      "itemId": {
        "itemId": "leonardo-dev-006",
        "type": "item",
        "subType": "imagelabel-dnd",
        "status": "complete",
        "displayType": "embedded",
        "toolName": "paint",
        "toolVersion": "1.0",
        "systemMeta": {
          "orgId": "leonardo-dev",
          "state": "draft",
          "revision": "1",
          "created": {
            "timestamp": "2019-09-03T05:38:18.168Z",
            "userId": "be6d5f4a-46f9-11e8-83c3-0acad1ee5072"
          },
          "lastModified": {
            "timestamp": "2019-09-04T12:57:42.535Z",
            "userId": "be6d5f4a-46f9-11e8-83c3-0acad1ee5072"
          },
          "schemaVersion": "2.0",
          "assetsBasePath": "https://s3.amazonaws.com/paint.leonardodls.com/organization_bucket/"
        },
        "itemMeta": {
          "title": "Title",
          "description": "Description",
          "tags": {
            "domain": "Sample",
            "difficulty": "Sample",
            "custom": [
              "Sample"
            ]
          },
          "skill": "",
          "learningObjective": ""
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
              "data": "<h5>Drag each word to its correct place on the picture.</h5>"
            }
          },
          "responseTemplate": {
            "content": {
              "type": "item-image",
              "data": "<img src='data:image/png;base64,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'>"
            }
          },
          "options": [
            {
              "id": "O1",
              "content": {
                "type": "item-text",
                "data": "Gall bladder"
              }
            },
            {
              "id": "O2",
              "content": {
                "type": "item-text",
                "data": "Pancreas"
              }
            },
            {
              "id": "O3",
              "content": {
                "type": "item-text",
                "data": "Intestinal glands"
              }
            },
            {
              "id": "O4",
              "content": {
                "type": "item-text",
                "data": "Liver"
              }
            },
            {
              "id": "O5",
              "content": {
                "type": "item-text",
                "data": "Gastric glands"
              }
            }
          ],
          "responseContainer": [
            {
              "id": "RC01",
              "pos": {
                "x": "6%",
                "y": "3%"
              },
              "feedback": {
                "correct": {
                  "content": {
                    "type": "item-text",
                    "data": "Feedback For Correct Answer"
                  }
                },
                "incorrect": {
                  "content": {
                    "type": "item-text",
                    "data": "Feedback For Incorrect Answer"
                  }
                }
              }
            },
            {
              "id": "RC02",
              "pos": {
                "x": "6%",
                "y": "35%"
              },
              "feedback": {
                "correct": {
                  "content": {
                    "type": "item-text",
                    "data": "Feedback For Correct Answer"
                  }
                },
                "incorrect": {
                  "content": {
                    "type": "item-text",
                    "data": "Feedback For Incorrect Answer"
                  }
                }
              }
            },
            {
              "id": "RC03",
              "pos": {
                "x": "6%",
                "y": "66%"
              },
              "feedback": {
                "correct": {
                  "content": {
                    "type": "item-text",
                    "data": "Feedback For Correct Answer"
                  }
                },
                "incorrect": {
                  "content": {
                    "type": "item-text",
                    "data": "Feedback For Incorrect Answer"
                  }
                }
              }
            },
            {
              "id": "RC04",
              "pos": {
                "x": "73%",
                "y": "8%"
              },
              "feedback": {
                "correct": {
                  "content": {
                    "type": "item-text",
                    "data": "Feedback For Correct Answer"
                  }
                },
                "incorrect": {
                  "content": {
                    "type": "item-text",
                    "data": "Feedback For Incorrect Answer"
                  }
                }
              }
            },
            {
              "id": "RC05",
              "pos": {
                "x": "73%",
                "y": "40%"
              },
              "feedback": {
                "correct": {
                  "content": {
                    "type": "item-text",
                    "data": "Feedback For Correct Answer"
                  }
                },
                "incorrect": {
                  "content": {
                    "type": "item-text",
                    "data": "Feedback For Incorrect Answer"
                  }
                }
              }
            }
          ],
          "preferences": {
            "shuffle": true,
            "layout": {
              "possibilityListPosition": "bottom"
            },
            "score": 5
          },
          "validations": [
            {
              "validationId": "v1",
              "responseContainer": "RC01",
              "correctResponse": "Liver",
              "operator": "text_equals"
            },
            {
              "validationId": "v2",
              "responseContainer": "RC02",
              "correctResponse": "Gall bladder",
              "operator": "text_equals"
            },
            {
              "validationId": "v3",
              "responseContainer": "RC03",
              "correctResponse": "Intestinal glands",
              "operator": "text_equals"
            },
            {
              "validationId": "v5",
              "responseContainer": "RC05",
              "correctResponse": "Pancreas",
              "operator": "text_equals"
            },
            {
              "validationId": "v4",
              "responseContainer": "RC04",
              "correctResponse": "Gastric glands",
              "operator": "text_equals"
            }
          ],
          "scoring": {
            "rules": [
              {
                "type": "sum",
                "rules": [
                  {
                    "type": "compute",
                    "validationId": "v1",
                    "score": 1
                  },
                  {
                    "type": "compute",
                    "validationId": "v2",
                    "score": 1
                  },
                  {
                    "type": "compute",
                    "validationId": "v3",
                    "score": 1
                  },
                  {
                    "type": "compute",
                    "validationId": "v4",
                    "score": 1
                  },
                  {
                    "type": "compute",
                    "validationId": "v5",
                    "score": 1
                  }
                ]
              }
            ]
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
          "hints": [
            {
              "id": "H1",
              "content": {
                "type": "item-text",
                "data": "Hint 1"
              }
            },
            {
              "id": "H2",
              "content": {
                "type": "item-text",
                "data": "Hint 2"
              }
            }
          ]
        },
        "itemResources": {},
        "itemResponse": {
          "userResponse": [],
          "hintsShown": false,
          "feedbackShown": false,
          "noOptionSelectedAlertShown": false,
          "locked": false,
          "consumedHints": [],
          "outcomes": {
            "score": 0,
            "scoringStatus": "",
            "attemptStatus": ""
          }
        }
      }
    }
  }
};