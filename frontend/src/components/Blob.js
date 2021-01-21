/* eslint-disable no-plusplus */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { spline } from '@georgedoescode/spline';
import SimpleNoise from 'simplex-noise';

const SVGStyles = styled.svg`
  width: 90vmin;
  height: 90vmin;
  margin: 0 auto;
  z-index: -99;

  @media (min-width: 768px) {
    width: 60vmin;
    height: 60vmin;
  }
`;

const Blob = () => {
  let noiseStep = 0.005;

  useEffect(() => {
    // Adapted from this article by @georgedoescode:
    // https://dev.to/georgedoescode/tutorial-build-a-smooth-animated-blob-using-svg-js-3pne?signin=true
    const simplex = new SimpleNoise();

    const svg = document.querySelector('#blob');
    const path = document.querySelector('#manipulated-path');
    const root = document.documentElement;

    const createPoints = () => {
      const points = [];
      const numberOfPoints = 6;
      const angleSteps = (Math.PI * 2) / numberOfPoints;
      const rad = 75;

      for (let i = 1; i <= numberOfPoints; i++) {
        const theta = i * angleSteps;

        const x = 100 + Math.cos(theta) * rad;
        const y = 100 + Math.sin(theta) * rad;

        points.push({
          x,
          y,
          originX: x,
          originY: y,
          noiseOffsetX: Math.random() * 1000,
          noiseOffsetY: Math.random() * 1000,
        });
      }

      return points;
    };

    const mapNumbers = (n, start1, end1, start2, end2) =>
      ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;

    const noise = (x, y) => simplex.noise2D(x, y);

    const generatedPoints = createPoints();

    (function animate() {
      path.setAttribute('d', spline(generatedPoints, 1, true));
      requestAnimationFrame(animate);

      generatedPoints.forEach((point) => {
        const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
        const nY = noise(point.noiseOffsetY, point.noiseOffsetY);

        const x = mapNumbers(nX, -1, 1, point.originX - 20, point.originX + 20);
        const y = mapNumbers(nY, -1, 1, point.originY - 20, point.originY + 20);

        point.x = x;
        point.y = y;

        point.noiseOffsetX += noiseStep;
        point.noiseOffsetY += noiseStep;
      });

      root.style.setProperty('--startColor', `hsl(${154}, 100%, 87%)`);
      root.style.setProperty('--stopColor', `hsl(${244}, 58%, 50%)`);
    })();

    if (window.navigator.userAgent.indexOf('Chrome') !== -1) {
      svg.style.filter = 'drop-shadow(0px 0px 56px rgba(72,61,229,0.25))';
    }
  });

  const onMouseOverHandler = () => {
    noiseStep = 0.01;
  };

  const onMouseLeaveHandler = () => {
    noiseStep = 0.005;
  };

  return (
    <SVGStyles viewBox="0 0 200 200" id="blob">
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop id="gradientStop1" offset="0%" stopColor="var(--startColor)" />
          <stop
            id="gradientStop2 "
            offset="100%"
            stopColor="var(--stopColor)"
          />
        </linearGradient>
      </defs>
      <path
        id="manipulated-path"
        d=""
        fill="url('#gradient')"
        onMouseOver={onMouseOverHandler}
        onMouseLeave={onMouseLeaveHandler}
      />
    </SVGStyles>
  );
};

export default Blob;
