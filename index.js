var $66P0P$reactjsxruntime = require("react/jsx-runtime");
var $66P0P$react = require("react");
var $66P0P$emotionstyled = require("@emotion/styled");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Thermostat", () => $e68207026aca356b$export$c1cbc01833f43ebe);



const $c122116bdd400350$export$1fefafa9d19cfa77 = 40;
const $c122116bdd400350$export$852bdfb103a2bad0 = 320;
const $c122116bdd400350$export$57528c6c0bd59f75 = 1.5;
const $c122116bdd400350$export$306e165047789a05 = 1.4;
const $c122116bdd400350$export$2c9a6d1027132519 = 100;
const $c122116bdd400350$export$aeb116877fd5ad06 = 10;


function $589f0fa21786f068$export$a1eafce842b7029b(params) {
    const { angle: angle , min: min , max: max  } = params;
    if (angle < (0, $c122116bdd400350$export$1fefafa9d19cfa77)) return min;
    else if (angle > (0, $c122116bdd400350$export$852bdfb103a2bad0)) return max;
    else {
        const ratio = (angle - (0, $c122116bdd400350$export$1fefafa9d19cfa77)) / ((0, $c122116bdd400350$export$852bdfb103a2bad0) - (0, $c122116bdd400350$export$1fefafa9d19cfa77));
        const value = ratio * (max - min) + min;
        return value;
    }
}
function $589f0fa21786f068$export$7f7142e45456c312(params) {
    const { value: value , min: min , max: max  } = params;
    const ratio = (value - min) / (max - min);
    const angle = ratio * ((0, $c122116bdd400350$export$852bdfb103a2bad0) - (0, $c122116bdd400350$export$1fefafa9d19cfa77)) + (0, $c122116bdd400350$export$1fefafa9d19cfa77);
    return angle;
}
function $589f0fa21786f068$export$2d72ec1166563834(degree, radius, svgSize) {
    // js functions need radians, counterclockwise from positive x axis
    const angle = (90 + degree) % 360;
    const angleInRad = angle / 180 * Math.PI;
    let dX;
    let dY;
    if (angleInRad <= Math.PI) {
        // we are in the upper two quadrants
        if (angleInRad <= Math.PI / 2) {
            dY = Math.sin(angleInRad) * radius;
            dX = Math.cos(angleInRad) * radius;
        } else {
            dY = Math.sin(Math.PI - angleInRad) * radius;
            dX = Math.cos(Math.PI - angleInRad) * radius * -1;
        }
    } else // we are in the lower two quadrants
    if (angleInRad <= Math.PI * 1.5) {
        dY = Math.sin(angleInRad - Math.PI) * radius * -1;
        dX = Math.cos(angleInRad - Math.PI) * radius * -1;
    } else {
        dY = Math.sin(2 * Math.PI - angleInRad) * radius * -1;
        dX = Math.cos(2 * Math.PI - angleInRad) * radius;
    }
    // dX and dY are calculated based on having (0, 0) at the center
    // Now, translate dX and dY to svg coordinates, where (0, 0) is at the top left
    const x = dX + svgSize / 2;
    const y = svgSize / 2 - dY;
    return {
        x: x,
        y: y
    };
}
function $589f0fa21786f068$export$87e67ba629853261(position, svgSize) {
    const dX = position.x - svgSize / 2;
    // position.y increases downwards in svg
    const dY = svgSize / 2 - position.y;
    // radians, counterclockwise from positive x axis
    let theta = Math.atan2(dY, dX);
    if (theta < 0) theta = theta + 2 * Math.PI;
    // degrees, counterclockwise from positive x axis
    const degree = theta / Math.PI * 180;
    return (270 + degree) % 360;
}




function $47ca79622dc9c42e$export$bf8a3f9983094125({ innerRadius: innerRadius , thickness: thickness , svgSize: svgSize  }) {
    const largeArc = (0, $c122116bdd400350$export$852bdfb103a2bad0) - (0, $c122116bdd400350$export$1fefafa9d19cfa77) >= 180;
    const outerRadius = innerRadius + thickness;
    const innerArcStart = (0, $589f0fa21786f068$export$2d72ec1166563834)((0, $c122116bdd400350$export$1fefafa9d19cfa77), innerRadius, svgSize);
    const startPoint = `
    M ${innerArcStart.x},${innerArcStart.y}
  `;
    const innerArcEnd = (0, $589f0fa21786f068$export$2d72ec1166563834)((0, $c122116bdd400350$export$852bdfb103a2bad0), innerRadius, svgSize);
    const innerArc = `
    A ${innerRadius} ${innerRadius} 0
      ${largeArc ? "1" : "0"}
      0
      ${innerArcEnd.x} ${innerArcEnd.y}
  `;
    const outerArcStart = (0, $589f0fa21786f068$export$2d72ec1166563834)((0, $c122116bdd400350$export$852bdfb103a2bad0), outerRadius, svgSize);
    const firstButt = `
    A ${thickness / 2} ${thickness / 2} 0
      ${largeArc ? "1" : "0"}
      1
      ${outerArcStart.x} ${outerArcStart.y}
  `;
    const outerArcEnd = (0, $589f0fa21786f068$export$2d72ec1166563834)((0, $c122116bdd400350$export$1fefafa9d19cfa77), outerRadius, svgSize);
    const outerArc = `
    A ${outerRadius} ${outerRadius} 0
      ${largeArc ? "1" : "0"}
      1
      ${outerArcEnd.x} ${outerArcEnd.y}
  `;
    const secondButt = `
    A ${thickness / 2} ${thickness / 2} 0
      ${largeArc ? "1" : "0"}
      1
      ${innerArcStart.x} ${innerArcStart.y}
  `;
    return startPoint + innerArc + firstButt + outerArc + secondButt + " Z";
}




const $3bfe7bb3f4d0e5b2$var$TICK_DEFAULTS_MAIN = {
    thickness: 3,
    length: 7,
    color: "black",
    cap: "round"
};
const $3bfe7bb3f4d0e5b2$var$TICK_DEFAULTS_SUB = {
    thickness: 1,
    length: 4,
    color: "black",
    cap: "round"
};
const $3bfe7bb3f4d0e5b2$var$TICK_DEFAULTS = {
    count: 48,
    every: 4,
    main: $3bfe7bb3f4d0e5b2$var$TICK_DEFAULTS_MAIN,
    sub: $3bfe7bb3f4d0e5b2$var$TICK_DEFAULTS_SUB
};
function $3bfe7bb3f4d0e5b2$export$38a233b5ad2f3b00({ size: size , mask: mask = null , ticks: ticks = $3bfe7bb3f4d0e5b2$var$TICK_DEFAULTS  }) {
    const radius = size / 2;
    const { count: count , every: every , sub: subInput , main: mainInput ,  } = {
        ...$3bfe7bb3f4d0e5b2$var$TICK_DEFAULTS,
        ...ticks
    };
    const main = {
        ...$3bfe7bb3f4d0e5b2$var$TICK_DEFAULTS_MAIN,
        ...mainInput
    };
    const sub = {
        ...$3bfe7bb3f4d0e5b2$var$TICK_DEFAULTS_SUB,
        ...subInput
    };
    return /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)("g", {
        mask: mask ? `url(#${mask})` : undefined,
        children: Array(count).fill(undefined).map((u, i)=>{
            const cos = Math.cos(2 * Math.PI / count * i);
            const sin = Math.sin(2 * Math.PI / count * i);
            const isMain = i % every === 0;
            const { color: color , length: length , thickness: thickness , cap: cap  } = isMain ? main : sub;
            return /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)("line", {
                stroke: color,
                strokeWidth: thickness,
                strokeLinecap: cap,
                x1: cos * radius + radius,
                y1: sin * radius + radius,
                x2: cos * (radius - length) + radius,
                y2: sin * (radius - length) + radius
            }, i);
        })
    });
}





function $7594bc5aef9c54dc$export$a72d32054f236c4({ min: min , max: max , value: value , size: size , thickness: thickness = 20 , className: className , suffix: suffix = "\xb0"  }) {
    const height = size * (0, $c122116bdd400350$export$57528c6c0bd59f75);
    const center = size / 2;
    // calculate the size of the main bottom circle based on the input size
    const circleSize = (size - thickness * 4.5) / 2;
    const radius = circleSize / 2;
    // input value percentage between min and max
    const percent = (value - min) * 100 / (max - min);
    // / 100 * percent
    const fullBarHeight = height - circleSize - radius;
    // the minimum value the growing center should go to
    const growingMinY = fullBarHeight - radius;
    // the max height the growing center should go to
    const growingMaxY = radius;
    // animating height based on value of slider
    const scaling = (growingMaxY - growingMinY) * percent / 100 + growingMinY;
    const innerCircleRadius = circleSize - thickness * 2;
    return /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsxs)("svg", {
        className: className,
        width: size,
        height: height,
        children: [
            /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsxs)("mask", {
                id: "innerMask",
                children: [
                    /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)("rect", {
                        id: "mask-fill",
                        x: "0",
                        y: "0",
                        width: size,
                        height: height,
                        fill: "white"
                    }),
                    /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)("circle", {
                        id: "center-circle-mask",
                        cx: center,
                        cy: height - circleSize,
                        r: circleSize - thickness
                    }),
                    /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)("circle", {
                        id: "top-cap-mask",
                        cx: center,
                        cy: circleSize - thickness - (circleSize - thickness * 2) / 2,
                        r: (circleSize - thickness * 2) / 2
                    }),
                    /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)("rect", {
                        id: "inside-thermo-mask",
                        x: center - radius + thickness,
                        y: radius,
                        width: circleSize - thickness * 2,
                        height: height - circleSize - radius
                    })
                ]
            }),
            /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)("circle", {
                id: "main-circle",
                fill: "currentColor",
                cx: center,
                cy: height - circleSize,
                r: circleSize,
                mask: "url(#innerMask)"
            }),
            /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)("circle", {
                id: "top-cap",
                fill: "currentColor",
                cx: center,
                cy: radius,
                r: radius,
                mask: "url(#innerMask)"
            }),
            /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)("circle", {
                id: "center-circle",
                fill: "currentColor",
                cx: center,
                cy: height - circleSize,
                r: innerCircleRadius
            }),
            /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)("rect", {
                id: "thermo-sides",
                fill: "currentColor",
                x: center - radius,
                y: radius,
                width: circleSize,
                height: height - circleSize - radius,
                mask: "url(#innerMask)"
            }),
            /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsxs)("text", {
                style: {
                    userSelect: "none"
                },
                fontSize: innerCircleRadius,
                textAnchor: "middle",
                x: center,
                y: height - circleSize,
                dominantBaseline: "central",
                alignmentBaseline: "central",
                children: [
                    value,
                    suffix
                ]
            }),
            /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsxs)("g", {
                children: [
                    /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)("circle", {
                        id: "growing-thermo-cap",
                        fill: "currentColor",
                        cx: center,
                        cy: scaling,
                        r: (circleSize - thickness * 4) / 2
                    }),
                    /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)("rect", {
                        id: "growing-thermo",
                        fill: "currentColor",
                        x: center - radius + thickness * 2,
                        y: scaling,
                        width: circleSize - thickness * 4,
                        height: fullBarHeight - scaling
                    })
                ]
            })
        ]
    });
}





const $4a368a512235c392$var$HandleBase = (0, ($parcel$interopDefault($66P0P$emotionstyled))).circle``;
const $4a368a512235c392$var$HandlePulse = (0, ($parcel$interopDefault($66P0P$emotionstyled))).circle`
  transform-box: fill-box;
  transform-origin: center center;
  animation-timing-function: ease-out;
  animation-duration: 1500ms;
  animation-iteration-count: infinite;
  animation-name: pulse;
  @keyframes pulse {
    0% {
      transform: scale(1.4);
    }
    50% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1.4);
    }
  }
  
`;
const $4a368a512235c392$export$78486ed8e1ee431c = {
    handle: "#fff",
    icon: "#111",
    pulse: "rgba(0,0,0,0.3)"
};
function $4a368a512235c392$export$94890c79f4cae6d6({ x: x = 0 , y: y = 0 , size: size = 30 , handleSize: handleSize = 8 , colors: colors = $4a368a512235c392$export$78486ed8e1ee431c  }) {
    const double = handleSize * 2;
    const _colors = {
        ...$4a368a512235c392$export$78486ed8e1ee431c,
        ...colors
    };
    const ref = (0, $66P0P$react.useRef)(null);
    const svgRef = (0, $66P0P$react.useRef)(null);
    const [angle, setAngle] = (0, $66P0P$react.useState)(0);
    const iconLineSpacing = handleSize / 3;
    const halfHandle = handleSize / 2;
    const lineThickness = 1;
    const verticalOffset = lineThickness + (halfHandle + iconLineSpacing * 2 - halfHandle);
    const offsetToCenter = handleSize - verticalOffset / 2;
    (0, $66P0P$react.useEffect)(()=>{
        if (ref.current && svgRef.current) {
            const bubbleBounding = ref.current.getBoundingClientRect();
            const svgBounding = svgRef.current.getBoundingClientRect();
            var redX = bubbleBounding.left + bubbleBounding.width / 2;
            var redY = bubbleBounding.top + bubbleBounding.height / 2;
            var blueX = svgBounding.left + svgBounding.width / 2;
            var blueY = svgBounding.top + svgBounding.height / 2;
            var X = blueX - redX;
            var Y = blueY - redY;
            setAngle(Math.atan2(Y, X) + Math.PI / 2);
        }
    }, [
        ref,
        x,
        handleSize,
        y
    ]);
    return /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsxs)("svg", {
        ref: svgRef,
        width: size + double,
        height: size + double,
        viewBox: `-${handleSize} -${handleSize} ${size + double} ${size + double}`,
        children: [
            /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)($4a368a512235c392$var$HandlePulse, {
                r: handleSize,
                cx: x,
                cy: y,
                fill: _colors.pulse,
                fillOpacity: "0.2"
            }),
            /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)($4a368a512235c392$var$HandleBase, {
                r: handleSize,
                cx: x,
                cy: y,
                fill: _colors.handle
            }),
            /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)("g", {
                style: {
                    transform: `translate3d(${x - handleSize}px, ${y - handleSize}px, 0)`,
                    cursor: "grab"
                },
                children: /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsxs)("svg", {
                    width: double,
                    height: double,
                    viewBox: `0 0 ${double} ${double}`,
                    children: [
                        /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)("rect", {
                            ref: ref,
                            fill: "transparent",
                            width: double,
                            height: double
                        }),
                        /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsxs)("g", {
                            style: {
                                transform: `rotate(${angle}rad)`,
                                transformOrigin: "center center"
                            },
                            children: [
                                /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)("rect", {
                                    fill: _colors.icon,
                                    x: halfHandle,
                                    y: 0 + offsetToCenter,
                                    width: handleSize,
                                    height: lineThickness
                                }),
                                /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)("rect", {
                                    fill: _colors.icon,
                                    x: halfHandle,
                                    y: iconLineSpacing + offsetToCenter,
                                    width: handleSize,
                                    height: lineThickness
                                }),
                                /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)("rect", {
                                    fill: _colors.icon,
                                    x: halfHandle,
                                    y: iconLineSpacing * 2 + offsetToCenter,
                                    width: handleSize,
                                    height: lineThickness
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}



const $e68207026aca356b$var$Wrapper = (0, ($parcel$interopDefault($66P0P$emotionstyled))).div`
  position: relative;
`;
const $e68207026aca356b$var$ColorPicker = (0, ($parcel$interopDefault($66P0P$emotionstyled))).canvas`
  position: absolute;
  z-index: -1;
`;
const $e68207026aca356b$var$HandleContainer = (0, ($parcel$interopDefault($66P0P$emotionstyled))).div`
  position: absolute;
  z-index: 3;
  bottom: 0;
  left: 0;
  width: ${(props)=>props.size}px;
  height: ${(props)=>props.size}px;
  margin-bottom: -${(props)=>props.handleSize - 3}px;
  margin-left: -${(props)=>props.handleSize}px;
`;
const $e68207026aca356b$var$Thermometer = (0, ($parcel$interopDefault($66P0P$emotionstyled)))((0, $7594bc5aef9c54dc$export$a72d32054f236c4))`
  color: ${(props)=>props.color};
  font-family: "Kanit", sans-serif;
  font-weight: 100;
`;
const $e68207026aca356b$var$Gradient = (0, ($parcel$interopDefault($66P0P$emotionstyled))).div`
  width: ${(props)=>props.width}px;
  height: ${(props)=>props.height}px;
`;
const $e68207026aca356b$var$Arc = (0, ($parcel$interopDefault($66P0P$emotionstyled))).svg`
  position: relative;
`;
const $e68207026aca356b$var$HANDLE_DEFAULTS = {
    size: 20,
    colors: (0, $4a368a512235c392$export$78486ed8e1ee431c)
};
const $e68207026aca356b$var$TRACK_DEFAULTS = {
    colors: [
        "#cfac48",
        "#cd5401"
    ],
    markers: {
        enabled: true,
        every: 5,
        count: 60,
        main: {
            color: "black"
        },
        sub: {
            color: "rgba(0,0,0,0.8)"
        }
    }
};
function $e68207026aca356b$export$c1cbc01833f43ebe({ size: size = 200 , min: min = 0 , max: max = 100 , value: value , handle: handleInput , track: trackInput , onChange: onChange , disabled: disabled  }) {
    const handle = {
        ...$e68207026aca356b$var$HANDLE_DEFAULTS,
        ...handleInput
    };
    const track = {
        ...$e68207026aca356b$var$TRACK_DEFAULTS,
        thickness: size / 10,
        ...trackInput || {},
        ...trackInput?.markers ? {
            ...$e68207026aca356b$var$TRACK_DEFAULTS.markers,
            ...trackInput.markers,
            main: {
                ...$e68207026aca356b$var$TRACK_DEFAULTS.markers.main,
                ...trackInput.markers.main || {}
            },
            sub: {
                ...$e68207026aca356b$var$TRACK_DEFAULTS.markers.sub,
                ...trackInput.markers.sub || {}
            }
        } : {}
    };
    const _svgRef = (0, $66P0P$react.useRef)(null);
    const _handleRef = (0, $66P0P$react.useRef)(null);
    const _canvasRef = (0, $66P0P$react.useRef)(null);
    const [color, setColor] = (0, $66P0P$react.useState)("transparent");
    const trackInnerRadius = size / 2 - track.thickness;
    const thermoOffset = track.thickness + track.thickness / (0, $c122116bdd400350$export$306e165047789a05);
    const height = size * (0, $c122116bdd400350$export$57528c6c0bd59f75) + thermoOffset;
    const handleAngle = (0, $589f0fa21786f068$export$7f7142e45456c312)({
        value: value,
        min: min,
        max: max
    });
    const handlePosition = (0, $589f0fa21786f068$export$2d72ec1166563834)(handleAngle, trackInnerRadius + track.thickness / 2, size);
    const controllable = !disabled && Boolean(onChange);
    (0, $66P0P$react.useEffect)(()=>{
        const canvasRef = _canvasRef.current;
        if (canvasRef) {
            const ctx = canvasRef.getContext("2d");
            if (ctx) {
                const gradient = ctx.createLinearGradient(0, 0, (0, $c122116bdd400350$export$2c9a6d1027132519), (0, $c122116bdd400350$export$aeb116877fd5ad06));
                track.colors?.forEach((color, index)=>{
                    const offset = index === 0 ? 0.2 : index === track.colors.length - 1 ? 0.8 : index / (track.colors.length - 1);
                    gradient.addColorStop(offset, color);
                });
                ctx.fillStyle = gradient;
                ctx.rect(0, 0, (0, $c122116bdd400350$export$2c9a6d1027132519), (0, $c122116bdd400350$export$aeb116877fd5ad06));
                ctx.fill();
            }
        }
    }, [
        track.colors
    ]);
    (0, $66P0P$react.useEffect)(()=>{
        getColourFromValue();
    }, [
        value,
        track.colors
    ]);
    if (value < min || value > max) throw new Error(`"value" should be between ${min} and ${max}`);
    function onMouseEnter(ev) {
        if (ev.buttons === 1) // The left mouse button is pressed, act as though user clicked us
        onMouseDown(ev);
    }
    function onMouseDown(ev) {
        const handleRef = _handleRef.current;
        if (handleRef) {
            handleRef.addEventListener("mousemove", processSelection);
            handleRef.addEventListener("mouseleave", removeMouseListeners);
            handleRef.addEventListener("mouseup", removeMouseListeners);
        }
        processSelection(ev);
    }
    function removeMouseListeners() {
        const handleRef = _handleRef.current;
        if (handleRef) {
            handleRef.removeEventListener("mousemove", processSelection);
            handleRef.removeEventListener("mouseleave", removeMouseListeners);
            handleRef.removeEventListener("mouseup", removeMouseListeners);
        }
    }
    function getColourFromValue() {
        const canvasRef = _canvasRef.current;
        if (canvasRef) {
            const ctx = canvasRef.getContext("2d");
            // input value percentage between min and max
            const percent = (value - min) * 100 / (max - min);
            const scaling = ((0, $c122116bdd400350$export$2c9a6d1027132519) - 1) * percent / 100;
            const v = ctx.getImageData(scaling, 1, 1, 1).data;
            setColor(`rgb(${v[0]},${v[1]},${v[2]})`);
        }
    }
    function processSelection(ev) {
        if (!onChange || disabled) // Read-only, don't bother doing calculations
        return;
        const svgRef = _svgRef.current;
        if (!svgRef) return;
        // Find the coordinates with respect to the SVG
        const svgPoint = svgRef.createSVGPoint();
        const x = ev.clientX;
        const y = ev.clientY;
        svgPoint.x = x;
        // offset the Y by the size of the thermometer difference
        svgPoint.y = y - (height - size);
        const coordsInSvg = svgPoint.matrixTransform(svgRef.getScreenCTM().inverse());
        const angle = (0, $589f0fa21786f068$export$87e67ba629853261)(coordsInSvg, size);
        onChange((0, $589f0fa21786f068$export$a1eafce842b7029b)({
            angle: angle,
            min: min,
            max: max
        }));
    }
    const arc = (0, $47ca79622dc9c42e$export$bf8a3f9983094125)({
        innerRadius: trackInnerRadius,
        thickness: track.thickness,
        svgSize: size
    });
    return /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsxs)($e68207026aca356b$var$Wrapper, {
        children: [
            /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)($e68207026aca356b$var$ColorPicker, {
                width: (0, $c122116bdd400350$export$2c9a6d1027132519),
                height: (0, $c122116bdd400350$export$aeb116877fd5ad06),
                ref: _canvasRef
            }),
            /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsxs)($e68207026aca356b$var$Arc, {
                width: size,
                height: height,
                ref: _svgRef,
                children: [
                    /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)($e68207026aca356b$var$Thermometer, {
                        handleSize: handle.size,
                        textColor: "rgba(0,0,0,0.9)",
                        color: color,
                        value: Number(value.toFixed(0)),
                        min: min,
                        max: max,
                        thickness: track.thickness / (0, $c122116bdd400350$export$306e165047789a05),
                        size: size
                    }),
                    /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)("foreignObject", {
                        x: "0",
                        y: height - size,
                        width: size,
                        height: size,
                        clipPath: "url(#clip)",
                        children: /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)($e68207026aca356b$var$Gradient, {
                            width: size,
                            height: size,
                            style: {
                                backgroundImage: `conic-gradient(from 0deg, ${[
                                    ...track.colors || []
                                ].reverse().map((color, index)=>{
                                    const offset = index === 0 ? 20 : index === track.colors.length - 1 ? 80 : index / (track.colors.length - 1) * 100;
                                    return `${color} ${offset}%`;
                                }).join(", ")}`
                            }
                        })
                    }),
                    /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)("mask", {
                        id: "arc-mask",
                        children: /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)("path", {
                            d: arc,
                            fill: "white"
                        })
                    }),
                    /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)("clipPath", {
                        id: "clip",
                        children: /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)("path", {
                            d: arc
                        })
                    }),
                    track.markers.enabled && /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)("g", {
                        transform: `translate(0, ${height - size})`,
                        children: /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)((0, $3bfe7bb3f4d0e5b2$export$38a233b5ad2f3b00), {
                            ticks: {
                                every: track.markers.every,
                                count: track.markers.count,
                                main: {
                                    thickness: 2,
                                    length: track.thickness / 4,
                                    ...track.markers.main
                                },
                                sub: {
                                    thickness: 1,
                                    length: track.thickness / 8,
                                    ...track.markers.sub
                                }
                            },
                            mask: "arc-mask",
                            size: size
                        })
                    })
                ]
            }),
            !disabled && /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)($e68207026aca356b$var$HandleContainer, {
                onMouseDown: onMouseDown,
                onMouseEnter: onMouseEnter,
                onClick: (ev)=>{
                    // we could determine how close we are to the track here and only allow events when they're closer to the
                    // arc, later job
                    return controllable && ev.stopPropagation();
                },
                ref: _handleRef,
                handleSize: handle.size,
                size: size + handle.size * 2,
                children: /*#__PURE__*/ (0, $66P0P$reactjsxruntime.jsx)((0, $4a368a512235c392$export$94890c79f4cae6d6), {
                    colors: handle.colors,
                    x: handlePosition.x,
                    y: handlePosition.y,
                    size: size,
                    handleSize: handle.size
                })
            })
        ]
    });
}


