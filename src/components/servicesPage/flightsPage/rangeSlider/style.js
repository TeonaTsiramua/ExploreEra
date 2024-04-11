import styled from 'styled-components';

export const SliderWrapper = styled.div`
  position: relative;
  min-height: 50px;
`;

export const ValuesDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Value = styled.span`
  color: hsl(var(--clr-text-1), 0.6);
  font-size: clamp(14px, 1.5vw, 16px);
`;

export const RangeInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  height: 2px;
  width: 100%;
  position: absolute;
  background-color: hsl(var(--primary-2));
  pointer-events: none;
  z-index: 1;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    pointer-events: all;
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px hsl(var(--primary-2));
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px hsl(var(--primary-2));
    cursor: pointer;
  }

  &::-webkit-slider-thumb:hover {
    background: #f7f7f7;
  }

  &::-webkit-slider-thumb:active {
    box-shadow: inset 0 0 3px hsl(var(--primary-2)),
      0 0 9px hsl(var(--primary-2));
    -webkit-box-shadow: inset 0 0 3px hsl(var(--primary-2)),
      0 0 9px hsl(var(--primary-2));
  }
`;

export const FromRangeInput = styled(RangeInput)`
  height: 0;
  z-index: 1;
  top: 1px;
`;
