export default function Airplane({
  className,
  size,
  color,
}: {
  className?: string;
  size: number;
  color?: string;
}) {
  return (
    <svg
      fill={color ?? "currentColor"}
      className={className ?? ""}
      stroke={color ?? "currentColor"}
      height={size ? size + "px" : "100px"}
      width={size ? size + "px" : "100px"}
      viewBox="-1.92 -1.92 35.84 35.84"
    >
      <path d="M0 14.016l9.216 6.912 18.784-16.928-14.592 20.064 10.592 7.936 8-32zM8 32l6.016-4-6.016-4v8z" />
    </svg>
  );
}

// <svg
//   fill="#ababab"
//   width="213px"
//   height="213px"
//   viewBox="0 0 32.00 32.00"
//   version="1.1"
//   xmlns="http://www.w3.org/2000/svg"
//   stroke="#ababab"
//   transform="rotate(0)"
//   stroke-width="0.00032"
// >
//
//
//
//
//
//
//
//
//
//
// </svg>;
