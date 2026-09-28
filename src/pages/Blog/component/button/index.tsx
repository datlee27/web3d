import { useState } from 'react';
import ScrollAnimationWrapper from '@components/animation/scroll-animation-wrapper';

const Button = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <ScrollAnimationWrapper
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                gap: '10px',
                position: 'absolute',
                width: '140px',
                height: '0.82%',
                left: 'calc(50% - 140px/2)',
                top: '58.55%',
                border: isHovered ? '1px solid #FF682A' : '1px solid #000000',
                borderRadius: '40px',
                cursor: 'pointer',
                backgroundColor: isHovered ? '#FF682A' : 'transparent',
                transition: 'all 0.3s ease',
            }}
        >
            <div style={{
                width: '88px',
                height: '20px',
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '20px',
                textAlign: 'center',
                color: isHovered ? '#FFFFFF' : '#000000',
                flex: 'none',
                order: 0,
                flexGrow: 0,
                transition: 'color 0.3s ease',
            }}>
                Show more
            </div>
        </ScrollAnimationWrapper>
    );
};

export default Button;