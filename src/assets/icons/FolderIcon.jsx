import React from 'react';

const FolderIcon = () => {
    return (
        <svg width="36px" height="36px" viewBox="0 0 40 40">
            <g fill="none" fillRule="evenodd">
                <path
                    fill="#34C3FF"
                    d="M10 36H4a4 4 0 01-4-4V6a4 4 0 014-4h11.394a3 3 0 012.497 1.336L21 9h14a4 4 0 014 4v23H10z"
                    opacity={0.2}
                />
                <circle cx={27} cy={23} r={3} fill="#34C3FF" stroke="#34C3FF" strokeWidth={2} />
                <path
                    fill="#80DDFF"
                    d="M15 38a1 1 0 01-1-1v-3.5c0-1.607 1.02-3.214 2.696-4.001a3.5 3.5 0 113.608.001c1.676.786 2.696 2.393 2.696 4V37a1 1 0 01-1 1zm17 0a1 1 0 01-1-1v-3.5c0-1.607 1.02-3.214 2.696-4.001a3.5 3.5 0 113.608.001c1.676.786 2.696 2.393 2.696 4V37a1 1 0 01-1 1z"
                />
                <path
                    fill="#34C3FF"
                    stroke="#34C3FF"
                    strokeWidth={2}
                    d="M27 27l.257.007c1.279.064 2.43.61 3.279 1.457A4.984 4.984 0 0132 32h0v6H22v-6c0-1.38.56-2.63 1.464-3.536A4.984 4.984 0 0127 27h0z"
                />
            </g>
        </svg>
    );
};

export default FolderIcon;
