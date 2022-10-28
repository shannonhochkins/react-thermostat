export interface HandleColors {
    handle?: string;
    icon?: string;
    pulse?: string;
}
export interface HandleProps {
    size?: number;
    colors?: HandleColors;
}
interface TrackProps {
    colors?: string[];
    thickness?: number;
    markers?: {
        enabled?: boolean;
        every?: number;
        count?: number;
        main?: {
            color?: string;
            length?: number;
            thickness?: number;
        };
        sub?: {
            color?: string;
            length?: number;
            thickness?: number;
        };
    };
}
interface ThermostatProps {
    size?: number;
    min?: number;
    max?: number;
    value: number;
    valueSuffix?: string;
    onChange: (value: number) => void;
    handle?: HandleProps;
    disabled?: boolean;
    track?: TrackProps;
}
export function Thermostat({ size, min, max, value, handle: handleInput, track: trackInput, onChange, disabled, }: ThermostatProps): JSX.Element;

//# sourceMappingURL=types.d.ts.map
