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
    setUpMapTable(null);
}
function setUpMapTable(numberOfShades) {

    let numShades = 0;
    if (numberOfShades == null) {
        numShades = 5;
    } else {
        numShades = numberOfShades;
    }

    t79CM2.shadesArray = Array(numShades).fill();
    
    for (colIndex in t79CM2.shadesArray) {
        t79CM2.shadesArray[colIndex] = Array(numShades).fill();

        const colorMapRow = document.createElement('div');
        colorMapRow.classList.add('color-view-row-container');

        for (rowIndex in t79CM2.shadesArray[colIndex]) {

            let field = {};
            field['rowView'] = colorMapRow;

            const svgContainer = document.createElement('div');
            field['viewContainer'] = svgContainer;
            colorMapRow.appendChild(svgContainer);

            t79CM2.colorOutputView.appendChild(colorMapRow);
            t79CM2.shadesArray[colIndex][rowIndex] = field;

        }

        t79CM2.colorOutputView.appendChild(colorMapRow);
    }
function constructMap() {

    for (colIndex in t79CM2.shadesArray) {

        const colorMapWidth = t79CM2.shadesArray[colIndex][0]['rowView'].clientWidth / t79CM2.shadesArray[colIndex].length;

        for (rowIndex in t79CM2.shadesArray[colIndex]) {

            const svgContainer = document.createElement('div');
            svgContainer.classList.add('svg-container');
            t79CM2.shadesArray[colIndex][rowIndex]['viewContainer'].appendChild(svgContainer);

            const svgColorField = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
            svgContainer.appendChild(svgColorField);

            let padding = 2;
            if (rowIndex == t79CM2.shadesArray[colIndex].length - 1) {
                padding = 2;
            }

            svgColorField.setAttribute('width',  '' + (colorMapWidth+padding));
            svgColorField.setAttribute('height', '' + (colorMapWidth+padding));

            const colorRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            colorRect.classList.add('color-rect');
            colorRect.setAttributeNS(null, 'width', '' + (colorMapWidth+padding));
            colorRect.setAttributeNS(null, 'height', '' + (colorMapWidth+padding));
            colorRect.style.fill = '#ffffff';
            svgColorField.appendChild(colorRect);
            t79CM2.shadesArray[colIndex][rowIndex]['cellViewBackground'] = colorRect;
            t79CM2.shadesArray[colIndex][rowIndex]['viewContainer'].style.width = '' + (colorMapWidth) + 'px';
            t79CM2.shadesArray[colIndex][rowIndex]['viewContainer'].style.height = '' + (colorMapWidth) + 'px';


        }
    }

}
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