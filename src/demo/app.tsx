import { useState } from 'react';
import styled from '@emotion/styled';
import { css, Global, keyframes } from '@emotion/react';
import { createRoot } from 'react-dom/client';
import { Thermostat } from '..';
import { Icon } from '@iconify/react';

const spin = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`;

const FanIcon = styled(Icon)<{
  speed?: FanMode;
}>`
  animation-name: ${spin};
  animation-duration: ${props => props.speed === 'Low' ? '5s' : props.speed === 'Mid' ? '3s' : props.speed === 'High' ? '1s' : '0s'};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Fab = styled.button<{
  activeColor?: string;
  active?: boolean;
  size?: 'small' | 'large'
}>`
  background-color: var(--ha-button-primary-background);
  border: 2px solid ${props => props.active ? `var(--ha-button-primary-border)` : `var(--ha-button-primary-color)`};
  border-radius: 100%;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size === 'large' ? '80px' : '50px'};
  height: ${props => props.size === 'large' ? '80px' : '50px'};
  svg {
    font-size: ${props => props.size === 'large' ? '40px' : '20px'};
  }
  outline: 0;
  color: ${props => props.active ? `${props.activeColor}` : 'var(--ha-button-primary-color)'}
`;

const Area = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at var(--ha-x) var(--ha-y), rgb(25 49 58) 0%, rgba(17, 24, 39, 1) 50%, rgba(17, 24, 39, 1) 100%);
  background-size: cover;

`;

const Actions = styled.div`
  position: absolute;
  top: 0;
  right:0;
  display: flex;
  flex-direction: column;
  z-index: 4;
  > * {
    margin-bottom: 8px;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
`;

const CurrentTemperature = styled.div<{
  fontSize: number;
  color: string;
}>`
  position: absolute;
  top: 0;
  left:0;
  font-weight: 100;
  font-size: ${props => props.fontSize}px;
  line-height: ${props => props.fontSize}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  color: ${props => props.color};
  span {
    color: white;
    font-size: ${props => props.fontSize / 4}px;
    line-height: ${props => props.fontSize / 4}px;
  }
`;

const ActionsLeft = styled.div`
  position: absolute;
  top: 17%;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 4;
  > * {
    margin-bottom: 8px;
  }
`;


const coolColors = ['#dae8eb', '#2c8e98'];
const heatColors = ['#cfac48', '#cd5401'];
const offColors = ['#848484', '#383838'];
const dryColors = ['#fff', '#ffc0bd'];
const size = 300;

type FanMode = 'Low' | 'Mid' | 'High';
const fanModes: FanMode[] = ['Low', 'Mid', 'High'];

function Root() {
  const [temp, setTemp] = useState(21);
  const [colors, setColors] = useState<string[]>(heatColors);
  const [state, setState] = useState('heat');
  const [fanMode, setFanMode] = useState<FanMode>('High');
  const currentTempColor = state === 'off' ? 'white' : colors[1];
  const on = state !== 'off';

  return <>
    <Global
      styles={css`
        :root {
          --ha-background: rgb(11, 15, 25);
          --ha-button-primary-background: rgba(17, 24, 39, 0.9);
          --ha-button-primary-border: #437882;
          --ha-button-primary-color: #565656;
          @property --ha-x {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
          }
          @property --ha-y {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
          }
        }
        html, body, #root {
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
          font-family: sans-serif;
          font-weight: 300;
          overflow: hidden;
        }
        
        #root {
          background-color: var(--ha-background);
        }
      `}
    />
    <Area>
      <Container>
        <CurrentTemperature color={currentTempColor} fontSize={size / 5}>
          22°
          <span>CURRENT</span>
        </CurrentTemperature>
        <ActionsLeft>
          <Fab active={on} activeColor={colors[1]} onClick={() => {
            const currentIndex = fanModes.findIndex(mode => mode === fanMode);
            setFanMode(fanModes[currentIndex + 1] ? fanModes[currentIndex + 1] : fanModes[0]);
          }}>
            <FanIcon speed={on ? fanMode : undefined} icon="mdi:fan" />
          </Fab>
        </ActionsLeft>
        <Actions>
          <Fab active={state === 'heat'} activeColor={heatColors[0]} onClick={() => {
            setState('heat');
            setColors(heatColors);
          }}>
            <Icon icon="material-symbols:mode-heat" />
          </Fab>
          <Fab active={state === 'dry'} activeColor={dryColors[1]} onClick={() => {
            setState('dry');
            setColors(dryColors);
          }}>
            <Icon icon="material-symbols:cool-to-dry-outline" />
          </Fab>
          <Fab active={state === 'cool'} activeColor={coolColors[1]} onClick={() => {
            setState('cool');
            setColors(coolColors);
          }}>
            <Icon icon="ic:baseline-ac-unit" />
          </Fab>
        </Actions>
        <Thermostat
          min={6}
          max={36}
          disabled={!on}
          value={temp}
          track={{
            colors
          }}
          onChange={(newTemp) => {
            setTemp(Number(newTemp.toFixed(0)));
          }}
        />
        <Fab style={{
          marginTop: 20
        }} size="large" active={on} activeColor={'#cfac48'} onClick={() => {
          setState(state === 'off' ? 'heat' : 'off');
          setColors(state === 'off' ? heatColors : offColors);
        }}>
          <Icon icon="ic:round-power-settings-new" />
        </Fab>
      </Container>
    </Area>
  </>
}

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = createRoot(rootEl);
  root.render(<Root />);
}
