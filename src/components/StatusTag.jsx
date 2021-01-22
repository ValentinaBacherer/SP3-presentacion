import React from "react";

export function StatusTag({ status }) {
  const [color, setColor] = React.useState("#71BB52");
  React.useState(() => {
    if (status === "Approved") {
      setColor("#71BB52");
    } else if (status === "Pending") {
      setColor("#F0AE4F");
    } else {
      setColor("#F63923");
    }
  }, [status]);

  return (
    <>
      <span style={{ color: "white", backgroundColor: color }}>{status}</span>
    </>
  );
}
