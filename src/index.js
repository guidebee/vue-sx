import json2mq from 'json2mq';

const breakpointThresholds = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560,
};
const sxStyle = {
    install(app, options) {

        const breakPoints = options || breakpointThresholds;
        const mediaQueries = convertBreakpointsToMediaQueries(breakPoints);
        app.directive('sx',
            {
                mounted: (el, binding) => {
                    const styleValues = binding.value || {};
                    const styleProperty = binding.arg;
                    if (styleProperty) {
                        const windowWidth = window.innerWidth;
                        const currentBreakpoint = getBreakpoint(windowWidth, breakPoints);
                        console.log(currentBreakpoint.value);
                        el.style[styleProperty] = transformValuesFromBreakpoints(
                            Object.keys(breakPoints),
                            styleValues,
                            currentBreakpoint,
                        );
                        for (const key in mediaQueries) {
                            const mediaQuery = mediaQueries[key];
                            const enter = () => {
                                el.style[styleProperty] = transformValuesFromBreakpoints(
                                    Object.keys(breakPoints),
                                    styleValues,
                                    key,
                                );
                            };
                            subscribeToMediaQuery(mediaQuery, enter);
                        }
                    }
                }
            }
        );
    },
};

function convertBreakpointsToMediaQueries(breakpoints) {
    const keys = Object.keys(breakpoints);
    const breakpointValues = keys.map(key => breakpoints[key]);
    return breakpointValues.reduce((sum, value, index) => {
        const options = Object.assign(
            {
                minWidth: value,
            },
            index < keys.length - 1
                ? {maxWidth: breakpointValues[index + 1] - 1}
                : {},
        );
        const mediaQuery = json2mq(options);
        return Object.assign(sum, {
            [keys[index]]: mediaQuery,
        });
    }, {});
}

function transformValuesFromBreakpoints(
    breakpoints,
    values,
    currentBreakpoint,
) {
    const findClosestValue = currentBreakpoint => {
        if (values[currentBreakpoint] !== undefined)
            return values[currentBreakpoint];
        const index = breakpoints.findIndex(b => b === currentBreakpoint);
        const newBreakpoint =
            index !== -1 || index !== 0 ? breakpoints[index - 1] : null;
        if (!newBreakpoint) return values[index];
        return values[newBreakpoint] !== undefined
            ? values[newBreakpoint]
            : findClosestValue(newBreakpoint);
    };
    return findClosestValue(currentBreakpoint);
}

const getBreakpoint = (width, options) => {
    const keys = Object.keys(options);
    const count = keys.length;
    if (width >= options[keys[count - 1]]) {
        return keys[count - 1];
    } else {
        for (let i = 1; i < count; i++) {
            if (width < options[keys[i]]) {
                return keys[i - 1];
            }
        }
    }
    return 'lg';
};

function subscribeToMediaQuery(mediaQuery, enter) {
    const mql = window.matchMedia(mediaQuery);
    mql.onchange = e => {
        if (e.matches) {
            enter();
        }
    };
}

export default sxStyle;