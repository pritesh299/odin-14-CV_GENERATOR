function Button(props){

        const buttonStyle = {
          // eslint-disable-next-line react/prop-types
          color: props.color||'black',
          // eslint-disable-next-line react/prop-types
          fontSize: props.fontSize || '12px',
          // eslint-disable-next-line react/prop-types
          backgroundColor: props.backgroundColor,
          // eslint-disable-next-line react/prop-types
          border: `1px solid ${props.borderColor || '#RRGGBB'}`, // Use props.borderColor or a default color
          // eslint-disable-next-line react/prop-types
          borderRadius: props.borderRadius || '5px',
          // eslint-disable-next-line react/prop-types
          padding: props.padding || '10px',
          // eslint-disable-next-line react/prop-types
          margin: props.margin || '10px',
          // eslint-disable-next-line react/prop-types
          fontWeight: props.fontWeight || 'bold',
          // eslint-disable-next-line react/prop-types
          textDecoration: props.textDecoration || 'none',
          // eslint-disable-next-line react/prop-types
          cursor: props.cursor || 'pointer',
          // eslint-disable-next-line react/prop-types
          boxShadow: props.boxShadow || '2px 2px 4px rgba(0, 0, 0, 0.2)',
          // eslint-disable-next-line react/prop-types
          transition: props.transition || 'background-color 0.3s ease-in-out',
        };
  
          // eslint-disable-next-line react/prop-types
    return <button style={buttonStyle}>{props.text|| "Button"}</button>

}

export default Button;