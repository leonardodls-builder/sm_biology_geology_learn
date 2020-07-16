var consumerConfig = {
  "renderers": {
    "modules": {
      "flashcard-activity-player": {
        "baseURL": "https://sm.sdk.leonardodls.com/modules/flashcard-activity-player/releases/",
        "version": "0.0.17",
        "js": "0.0.17/libs-flashcard-activity-player",
        "css": "0.0.17/libs-flashcard-activity-player",
        "dependencies": [
          "react",
          "react-dom",
          "libs-player-ui-components"
        ]
      },
      "presentation-card-item-player": {
        "baseURL": "https://sm.sdk.leonardodls.com/modules/presentation-card-item-player/releases/",
        "version": "0.0.12",
        "js": "0.0.12/libs-presentation-card-item-player",
        "css": "0.0.12/libs-presentation-card-item-player",
        "dependencies": [
          "react",
          "react-dom",
          "libs-player-ui-components"
        ]
      },
      "react": {
        "baseURL": "https://sm.sdk.leonardodls.com/modules/react/releases/",
        "version": "16.12.0",
        "js": "16.12.0/react.development"
      },
      "react-dom": {
        "baseURL": "https://sm.sdk.leonardodls.com/modules/react-dom/releases/",
        "version": "16.12.0",
        "js": "16.12.0/react-dom.development"
      },
      "libs-player-ui-components": {
        "baseURL": "https://sm.sdk.leonardodls.com/modules/libs-player-ui-components/releases/",
        "version": "0.10.0",
        "js": "0.10.0/libs-player-ui-components"
      }
    }
  }
}