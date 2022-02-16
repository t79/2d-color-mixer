document.addEventListener('readystatechange', function () {
    if (document.readyState === 'interactive') {
        initColorMixer();
    }
});

var t79CM2 = {
    INIT_COLORS: ['#858fff', '#ecc2b1', '#00009c', '#b0ffda'],
    colorInputText: [],
    colorInputPicker: []
}

function initColorMixer() {
    getElements();
    setInputColor();
}

function setInputColor() {

    for (index in t79CM2.INIT_COLORS) {
        t79CM2.colorInputText[index].value = t79CM2.INIT_COLORS[index];
        t79CM2.colorInputPicker[index].value = t79CM2.INIT_COLORS[index];
    }

    let url2 = new URL(document.location);
    let params = String(new URLSearchParams(url2.search));

    if (params == '') {
        return;
    }

    const paramsArray = params.split('&');

    for (index in paramsArray) {
        const singleParam = paramsArray[index].split('=');
        if (singleParam[0] == 'first-color') {
            t79CM2.colorInputText[0].value = "#" + singleParam[1];
            t79CM2.colorInputPicker[0].value = "#" + singleParam[1];
        } else if (singleParam[0] == 'second-color') {
            t79CM2.colorInputText[1].value = "#" + singleParam[1];
            t79CM2.colorInputPicker[1].value = "#" + singleParam[1];
        } else if (singleParam[0] == 'third-color') {
            t79CM2.colorInputText[2].value = "#" + singleParam[1];
            t79CM2.colorInputPicker[2].value = "#" + singleParam[1];
        } else if (singleParam[0] == 'fourth-color') {
            t79CM2.colorInputText[3].value = "#" + singleParam[1];
            t79CM2.colorInputPicker[3].value = "#" + singleParam[1];
        }
    }

}

function getElements() {
    t79CM2.colorInputText.push(document.getElementById('color-input-text-1'));
    t79CM2.colorInputPicker.push(document.getElementById('color-input-picker-1'));
    t79CM2.colorInputText.push(document.getElementById('color-input-text-2'));
    t79CM2.colorInputPicker.push(document.getElementById('color-input-picker-2'));
    t79CM2.colorInputText.push(document.getElementById('color-input-text-3'));
    t79CM2.colorInputPicker.push(document.getElementById('color-input-picker-3'));
    t79CM2.colorInputText.push(document.getElementById('color-input-text-4'));
    t79CM2.colorInputPicker.push(document.getElementById('color-input-picker-4'));
}