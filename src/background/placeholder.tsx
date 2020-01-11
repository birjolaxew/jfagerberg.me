import React from "react";

export default () => (
    <div
        style={{
            background:
                "url(data:image/png;base64,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)",
            filter: "blur(8px)",
            position: "fixed",
            left: "0",
            top: "0",
            width: "100vw",
            height: "100vh",
            backgroundSize: "cover",
            zIndex: -1,
        }}
    ></div>
);
