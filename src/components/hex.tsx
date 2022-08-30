interface HexProps {
  color: string;
  onClick: any;
}

const Hex = ({ color, onClick }: HexProps) => {
  return (
    <button style={{ background: color }} onClick={onClick}>
      {color}
    </button>
  );
};

export default Hex;
