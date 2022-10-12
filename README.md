# React Thermostat

![version](https://img.shields.io/github/package-json/v/shannonhochkins/react-thermostat)

A react thermostat which can be easily plugged into any smart home application, I've used this with Home Assistant connecting to websockets for a standalone smart home application and it's working great.

[Online Demo](https://shannonhochkins.github.io/react-thermostat/dist/index.html)

![](https://github.com/shannonhochkins/react-thermostat/blob/master/demo.gif)

## Install

```
  npm i react-thermostat
```
## Example

```javascript
import React, { useState } from 'react';
import { Thermostat } from 'react-thermostat';
const App = () => {
    const [value, setValue] = useState(50);
    return (
        <Thermostat
          min={0}
          max={100}
          size={300}
          value={value}
          onChange={ newValue => setValue(newValue) }
        />
    )
};
export default App;
```

## Main Props

| prop     | type                         | required | default                      | description                                                                                      |
|----------|------------------------------|----------|------------------------------|--------------------------------------------------------------------------------------------------|
| value    | number                       | yes      |                              | The value for the thermostat                                                                     |
| onChange | (value: number) => void      | yes      |                              | Called when a user interacts with the handle, you should update your value with this callback.   |
| min      | number                       | no       | 0                            | The minimum value for the thermostat                                                             |
| max      | number                       | no       | 100                          | The maximum value for the thermostat                                                             |
| size     | number                       | no       | 200                          | The size for the thermostat, this is more or less the width, the height is calculated from this. |
| handle   | [HandleProps](#handle-props) | no       | [HandleProps](#handle-props) | The props for the dragging handle                                                                |
| disabled | boolean                      | no       | false                        | If the thermostat should be disabled                                                             |
| track    | [TrackProps](#track-props)   | no       | [TrackProps](#track-props)   | The props for the track                                                                          |


## Handle Props

| prop   | type                           | required | default                        | description                |
|--------|--------------------------------|----------|--------------------------------|----------------------------|
| size   | number                         | no       | size / 10                      | The size of the handle     |
| colors | [HandleColors](#handle-colors) | no       | [HandleColors](#handle-colors) | The colours for the handle |
## Handle Colors

| prop   | type   | required | default         | description                                     |
|--------|--------|----------|-----------------|-------------------------------------------------|
| handle | string | no       | #fff            | The background color of the handle              |
| icon   | string | no       | #111            | The color of the icon in the handle             |
| pulse  | string | no       | rgba(0,0,0,0.3) | The color of the pulse effect behind the handle |

## Track Props

| prop      | type                      | required | default                   | description                                                                                                                        |
|-----------|---------------------------|----------|---------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| colors    | string[]                  | no       | ['#cfac48', '#cd5401']    | The colours of the track gradient, from left to right, this can be one or many colours and will apply in a conical gradient effect |
| thickness | number                    | no       | size / 10                 | The thickness of the main arc track, the inner thermometer will divide it's track size by 1.4                                      |
| markers   | [Markers](#markers-props) | no       | [Markers](#markers-props) | The options for the markers on the arc track, this is really only for advanced control                                             |

## Markers Props

| prop           | type    | required | default             | description                                       |
|----------------|---------|----------|---------------------|---------------------------------------------------|
| enabled        | boolean | no       | true                | If the markers on the arc track should be enabled |
| every          | number  | no       | 5                   | Every 5 ticks will be the "main" mark             |
| count          |         | no       | 60                  | The number of marks to include on the arc         |
| main.color     | string  | no       | black               | The colour of the main mark                       |
| main.length    | number  | no       | track.thickness / 4 | The length of the mark                            |
| main.thickness | number  | no       | 2                   | The thickness of the mark                         |
| sub.color      | string  | no       | rgba(0,0,0,0.8)     | The colour of the sub mark                        |
| sub.length     | number  | no       | track.thickness / 8 | The length of the sub mark                        |
| sub.thickness  | number  | no       | 1                   | The thickness of the sub mark                     |