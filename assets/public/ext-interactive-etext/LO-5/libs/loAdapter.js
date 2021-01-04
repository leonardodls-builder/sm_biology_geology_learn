var loId;
const containerClass = '.item-container';
let activityState = {};

function updateCss() {
    let wrapper = document.getElementById('wrapper');
    wrapper.style.overflow = 'hidden';
}

function initChannel() {
    return new Promise((resolve, reject) => {
        channel = Channel.build({
            window: window.parent,
            origin: '*',
            scope: 'generic-default',
            onReady: function () {
                resolve(channel);
            }
        });
    });
}

var updateState = function () {

    channel.call({
        method: 'sendMessageToContainer',
        params: {
            type: 'newState',
            data: activityState
        },
        success: function () { },
        error: function () {
            console.log('newState method error');
        }
    });

}

/* Function to generate statement - started/launched/scored etc.*/
var generateStatement = function (verb) {
    var statement = {
        verb: {
            "id": "http://adlnet.gov/expapi/verbs/" + verb,
            "display": {
                "und": verb
            }
        },
        object: {
            "id": loId
        }
    };
    var statementsArray = [];
    statementsArray.push(statement);
    channel.call({
        method: 'sendMessageToContainer',
        params: {
            type: 'newStatements',
            data: statementsArray
        },
        success: function () { },
        error: function () {
            console.log('newStatements method error');
        }
    });
};

/* Function called on launch of Activity, to notify container with the ready event when the LO is loaded and ready for interaction */
var DOMReady = function () {
    channel.notify({
        method: 'sendMessageToContainer',
        params: {
            type: 'ready'
        }
    });
};

/* Function to get initialization paramters from the container */
function getInitParameters() {
    return new Promise((resolve, reject) => {
        channel.call({
            method: 'sendMessageToContainer',
            params: {
                type: 'init'
            },
            success: function (params) {
                resolve(params);
            }
        });
    })
}

/* Function called by the LO to pass dimensions change data to the container */
var newDimensions = function (dimensions) {
    channel.call({
        method: 'sendMessageToContainer',
        params: {
            type: 'size',
            data: {
                size: dimensions
            }
        },
        success: function () { },
        error: function () {
            console.log('size method error');
        }
    });
};

function debounce(func, delay) {
    let debounceTimer;
    return function () {
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => func.apply(context, args), delay)
    }
}

function sendSizeEvent() {
    let container = document.querySelector(containerClass);
    let containerComputedStyles = getComputedStyle(container);
    newDimensions({
        height: container.clientHeight + parseFloat(containerComputedStyles.marginTop) + parseFloat(containerComputedStyles.marginBottom) + 1,
        width: container.clientWidth + parseFloat(containerComputedStyles.marginRight) + parseFloat(containerComputedStyles.marginLeft)
    });
}

function registerContainerResizeEvent() {
    let container = document.querySelector(containerClass);
    let debounceEvent = debounce(sendSizeEvent, 50);
    new ResizeObserver(debounceEvent).observe(container);
}

function updateCurrentState() {
    let elements = Array.from(document.getElementsByClassName('keyboardInput'));
    elements.forEach((element) => {
        if (activityState[element.id] != element.value) {
            activityState[element.id] = element.value
        }
    });
    updateState();
}

function setState() {
    let elements = Array.from(document.getElementsByClassName('keyboardInput'));
    elements.forEach((element) => {
        element.value = activityState[element.id] ;
    });
}

function bindOnBlurEventOnInput() {
    document.querySelectorAll('input').forEach(element => {
        element.addEventListener('blur', updateCurrentState);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    initChannel()
        .then(channel => {
            return getInitParameters()
                .then(initParams => {
                    loId = initParams.id;
                    if (initParams.hasOwnProperty('state') && initParams.state) {
                        activityState = initParams.state;
                        setState(initParams.state);
                    }
                    DOMReady();
                    //updateCss();
                    sendSizeEvent();
                    registerContainerResizeEvent();
                    generateStatement('started');
                    generateStatement('launched');
                    bindOnBlurEventOnInput();
                })
        });
});