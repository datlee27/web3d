// ── Shared text content ──────────────────────────────────────────────────────
export const PARA_TEXT =
    'Dolor sit amet, consectetur adipiscing elit. In nibh justo, commodo eget sapien at, consectetur viverra ipsum. Vivamus faucibus orci sed purus tincidunt, vel dictum turpis sagittis. Vestibulum laoreet varius ante, et finibus metus porta eu. Curabitur ultrices venenatis leo eu.';

export const FAQ_ANSWER =
    'Dolor sit amet, consectetur adipiscing elit. In nibh justo, commodo eget sapien at, consectetur viverra ipsum. Vivamus faucibus orci sed purus tincidunt, vel dictum turpis sagittis. Vestibulum laoreet varius ante, et finibus metus porta eu. Curabitur ultrices venenatis leo eu.';

// ── Article body styles ───────────────────────────────────────────────────────
export const paraRowStyle: React.CSSProperties = {
    display: 'flex', flexDirection: 'row', alignItems: 'center',
    padding: '0px', gap: '10px', width: '813px', height: '68px',
    alignSelf: 'stretch', flexGrow: 0,
};

export const paraTextStyle: React.CSSProperties = {
    width: '813px', height: '60px',
    fontFamily: "'Be Vietnam Pro', sans-serif", fontStyle: 'normal',
    fontWeight: 400, fontSize: '16px', lineHeight: '20px',
    color: '#000000', flex: 'none', order: 0, flexGrow: 0,
};

export const headingRowStyle: React.CSSProperties = {
    display: 'flex', flexDirection: 'row', alignItems: 'center',
    padding: '10px 0px', gap: '10px', width: '813px', height: '64px',
    alignSelf: 'stretch', flexGrow: 0,
};

export const headingTextStyle: React.CSSProperties = {
    width: '830px', height: '33px',
    fontFamily: "'Be Vietnam Pro', sans-serif", fontStyle: 'normal',
    fontWeight: 700, fontSize: '26px', lineHeight: '33px',
    color: '#000000', flex: 'none', order: 0, flexGrow: 0,
};

export const paraBlockStyle: React.CSSProperties = {
    display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
    padding: '0px', width: '813px', height: '204px',
    alignSelf: 'stretch', flexGrow: 0,
};
