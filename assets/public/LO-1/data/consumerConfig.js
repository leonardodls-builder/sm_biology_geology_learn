var consumerConfig = {
  "players": {
    "playerMap": {
      "collection": "multi-item-activity-player",
      "imagelabel-dnd": "image-label-dnd-player",
      "mcsr-radio": "mcq-radio-player"
    },
    "modules": {
      "multi-item-activity-player": {
        "baseURL": "https://d3f2ws3vg5f2o9.cloudfront.net/modules/multi-item-activity-player/releases/",
        "version": "0.0.19",
        "js": "0.0.19/multiItemActivityPlayer",
        "css": "0.0.19/multiItemActivityPlayer"
      },
      "image-label-dnd-player": {
        "baseURL": "https://d3f2ws3vg5f2o9.cloudfront.net/modules/image-label-dnd-player/releases/",
        "version": "0.0.18",
        "js": "0.0.18/libs-imagelabel-dnd-item-player",
        "dependencies": [
          "react",
          "react-dom",
          "libs-player-ui-components"
        ]
      },
      "mcq-radio-player": {
        "baseURL": "https://d3f2ws3vg5f2o9.cloudfront.net/modules/mcq-radio-player/releases/",
        "version": "0.0.18",
        "js": "0.0.18/libs-mcsr-radio-item-player",
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
        "version": "0.0.13",
        "js": "0.0.13/libs-player-ui-components"
      }
    }
  }
}
