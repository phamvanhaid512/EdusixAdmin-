export default function Email(props) {
  return (
    <svg
      {...props}
      className="mb-2"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="36" height="36" rx="18" fill="#E0E2E7" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 15C10 13.3431 11.3431 12 13 12H27C28.6569 12 30 13.3431 30 15V25C30 26.6569 28.6569 28 27 28H13C11.3431 28 10 26.6569 10 25V15ZM26.3334 14H13.6667L19.4 18.3C19.7556 18.5667 20.2445 18.5667 20.6 18.3L26.3334 14ZM12 15.25V25C12 25.5523 12.4477 26 13 26H27C27.5523 26 28 25.5523 28 25V15.25L21.8 19.9C20.7334 20.7 19.2667 20.7 18.2 19.9L12 15.25Z"
        fill="#667085"
      />
      <rect
        x="2"
        y="2"
        width="36"
        height="36"
        rx="18"
        stroke="#F0F1F3"
        strokeWidth="4"
      />
    </svg>
  );
}
