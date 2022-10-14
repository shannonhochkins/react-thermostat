import React from 'react';
declare module 'react-thermostat' {
  type HandleColors = {
    handle?: string;
    icon?: string;
    pulse?: string;
  }
  
  type HandleProps = {
    size?: number;
    colors?: HandleColors;
  }
  
  type TrackProps = {
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
      }
    }
  }
  
  export type ThermostatProps = {
    size?: number;
    min?: number;
    max?: number;
    value: number;
    onChange: (value: number) => void;
    handle?: HandleProps;
    disabled?: boolean;
    track?: TrackProps;
  };
  const Thermostat: React.FC<ThermostatProps>;
  export default Thermostat;
}
