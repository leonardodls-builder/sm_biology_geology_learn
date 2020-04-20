var consumerConfig = {
  "players": {
    "playerMap": {
      "flashcard": "flashcard-activity-player",
      "presentation-card": "presentation-card-item-player"
    },
    "modules": {
      "flashcard-activity-player": {
        "baseURL": "https://d3f2ws3vg5f2o9.cloudfront.net/modules/flashcard-activity-player/releases/",
        "version": "0.0.5",
        "js": "0.0.5/libs-flashcard-activity-player",
        "css": "0.0.5/libs-flashcard-activity-player",
        "dependencies": [
          "react",
          "react-dom"
        ]
      },
      "presentation-card-item-player": {
        "baseURL": "https://d3f2ws3vg5f2o9.cloudfront.net/modules/presentation-card-item-player/releases/",
        "version": "0.0.4",
        "js": "0.0.4/libs-presentation-card-item-player",
        "css": "0.0.4/libs-presentation-card-item-player",
        "dependencies": [
          "react",
          "react-dom",
          "libs-player-ui-components"
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
      },
      "libs-player-ui-components": {
        "baseURL": "https://d3f2ws3vg5f2o9.cloudfront.net/modules/libs-player-ui-components/releases/",
        "version": "0.0.15",
        "js": "0.0.15/libs-player-ui-components"
      }
    }
  }
}