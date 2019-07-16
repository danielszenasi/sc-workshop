import React from 'react';

const Bed = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <path
        id="prefix__a"
        d="M3.6 0C2.274 0 1.2 1.094 1.2 2.444v4.89c0 .674.538 1.222 1.2 1.222.662 0 1.2-.548 1.2-1.223V6.111c0-.675.538-1.222 1.2-1.222h4.8c.662 0 1.2.547 1.2 1.222v1.222c0 .675.538 1.223 1.2 1.223.662 0 1.2-.548 1.2-1.223V6.111c0-.675.538-1.222 1.2-1.222h4.8c.662 0 1.2.547 1.2 1.222v1.222c0 .675.538 1.223 1.2 1.223.662 0 1.2-.548 1.2-1.223V2.444C22.8 1.094 21.726 0 20.4 0H3.6zM2.4 11C1.074 11 0 12.094 0 13.444v7.334C0 21.452.538 22 1.2 22c.662 0 1.2-.548 1.2-1.222v-1.222h19.2v1.222c0 .674.538 1.222 1.2 1.222.662 0 1.2-.548 1.2-1.222v-7.334C24 12.094 22.926 11 21.6 11H2.4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(0 1)">
      <mask id="prefix__b" fill="#fff">
        <use xlinkHref="#prefix__a" />
      </mask>
      <use fill="#D1D1D1" fillRule="nonzero" xlinkHref="#prefix__a" />
      <g fill="#1E1E84" mask="url(#prefix__b)">
        <path d="M0-1h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default Bed;
