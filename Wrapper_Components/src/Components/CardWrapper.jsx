import React from 'react';

const CardWrapper = ({ title, children, footer }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
  };

  const titleStyle = {
    fontSize: '1.5em',
    marginBottom: '10px',
  };

  const footerStyle = {
    borderTop: '1px solid #eee',
    paddingTop: '10px',
    textAlign: 'right',
  };

  return (
    <div style={cardStyle}>
      {title && <div style={titleStyle}>{title}</div>}
      <div>{children}</div>
      {footer && <div style={footerStyle}>{footer}</div>}
    </div>
  );
};

export default CardWrapper;
