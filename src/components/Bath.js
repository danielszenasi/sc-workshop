import React from 'react';

const Bath = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <path
        id="prefix__a"
        d="M10.91 0C9.716 0 8.726 1.002 8.726 2.21v5.527H1.091C.488 7.737 0 8.23 0 8.842s.488 1.105 1.09 1.105h.129l.494 4a5.516 5.516 0 0 0 2.088 3.668l-.496 2.012A1.103 1.103 0 0 0 4.364 21c.5 0 .935-.346 1.056-.838l.384-1.558c.426.108.865.185 1.321.185h9.75c.457 0 .895-.077 1.321-.185l.384 1.558c.12.492.556.838 1.056.838.71 0 1.23-.676 1.06-1.373l-.497-2.01a5.516 5.516 0 0 0 2.088-3.67l.496-4h.126c.603 0 1.091-.494 1.091-1.105s-.488-1.105-1.09-1.105h-12V2.21h3.272v1.105c-.602 0-1.091.495-1.091 1.105s.489 1.105 1.09 1.105h.908c.118.02.239.02.356 0h.919c.602 0 1.09-.495 1.09-1.105s-.488-1.105-1.09-1.105V2.21c0-1.209-.99-2.211-2.182-2.211h-3.273z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(0 2)">
      <mask id="prefix__b" fill="#fff">
        <use xlinkHref="#prefix__a" />
      </mask>
      <use fill="#CDCDCD" fillRule="nonzero" xlinkHref="#prefix__a" />
      <g fill="#1E1E84" mask="url(#prefix__b)">
        <path d="M0-2h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default Bath;
