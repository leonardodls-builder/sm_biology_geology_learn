var consumerConfig = {
  "players": {
    "playerMap": {
      "flashcard": "flashcard-activity-player",
      "presentation-card": "presentation-card-item-player"
    },
    "modules": {
      "flashcard-activity-player": {
        "baseURL": "https://d3f2ws3vg5f2o9.cloudfront.net/modules/flashcard-activity-player/releases/",
        "version": "0.0.3",
        "js": "0.0.3/libs-flashcard-activity-player",
        "css": "0.0.3/libs-flashcard-activity-player",
        "dependencies": [
          "react",
          "react-dom"
        ]
      },
      "presentation-card-item-player": {
        "baseURL": "https://d3f2ws3vg5f2o9.cloudfront.net/modules/presentation-card-item-player/releases/",
        "version": "0.0.2",
        "js": "0.0.2/libs-presentation-card-item-player",
        "dependencies": [
          "react",
          "react-dom"
        ]
      },
      "react": {
        "baseURL": "https://d3f2ws3vg5f2o9.cloudfront.net/modules/react/releases/",
        "version": "16.12.0",
        "js": "16.12.0/react.development"
      },
      "react-dom": {
        "baseURL": "https://d3f2ws3vg5f2o9.cloudfront.net/modules/react-dom/releases/",
        "version": "16.12.0",
        "js": "16.12.0/react-dom.development"
      }
    }
  }
}