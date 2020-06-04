var consumerConfig = {
  "renderers": {
    "modules": {
      "flashcard-activity-player": {
        "baseURL": "https://sdk-qa.leonardodls.com/modules/flashcard-activity-player/releases/",
        "version": "0.0.13",
        "js": "0.0.13/libs-flashcard-activity-player",
        "css": "0.0.13/libs-flashcard-activity-player",
        "dependencies": [
          "react",
          "react-dom",
          "libs-player-ui-components"
        ]
      },
      "presentation-card-item-player": {
        "baseURL": "https://sdk-qa.leonardodls.com/modules/presentation-card-item-player/releases/",
        "version": "0.0.10",
        "js": "0.0.10/libs-presentation-card-item-player",
        "css": "0.010/libs-presentation-card-item-player",
        "dependencies": [
          "react",
          "react-dom",
          "libs-player-ui-components"
        ]
      },
      "react": {
        "baseURL": "https://sdk-qa.leonardodls.com/modules/react/releases/",
        "version": "16.12.0",
        "js": "16.12.0/react.development"
      },
      "react-dom": {
        "baseURL": "https://sdk-qa.leonardodls.com/modules/react-dom/releases/",
        "version": "16.12.0",
        "js": "16.12.0/react-dom.development"
      },
      "libs-player-ui-components": {
        "baseURL": "https://sdk-qa.leonardodls.com/modules/libs-player-ui-components/releases/",
        "version": "0.3.1",
        "js": "0.3.1/libs-player-ui-components"
      }
    }
  }
}
