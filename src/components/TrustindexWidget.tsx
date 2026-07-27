"use client";

import { useEffect, useRef, useState } from "react";

const WIDGET_SRC =
  "https://cdn.trustindex.io/loader.js?23bb87077beb74463a76e3e3b06";

const MAX_REVIEWS = 8;

const SRC_DOC = `<!doctype html>
<html>
<head>
<style>
  html, body { margin: 0; overflow-x: hidden; font-family: system-ui, sans-serif; }
  .ti-load-more-reviews-container,
  .ti-verified-by {
    display: none !important;
  }
  .ti-reviews-container-wrapper > .ti-review-item:nth-child(n + ${MAX_REVIEWS + 1}) {
    display: none !important;
  }
</style>
</head>
<body>
<script defer async src="${WIDGET_SRC}"></script>
</body>
</html>`;

export default function TrustindexWidget() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let observer: ResizeObserver | null = null;

    // The widget's content loads async inside the iframe, so its <body>
    // doesn't exist yet at mount - poll briefly just to attach the
    // ResizeObserver once it appears, then let the observer (not a timer)
    // track height for as long as the widget keeps resizing itself.
    const attach = setInterval(() => {
      const body = iframe.contentDocument?.body;
      if (!body) return;
      clearInterval(attach);

      observer = new ResizeObserver(() => {
        // +8px buffer: sub-pixel layout rounding inside the widget can put
        // scrollHeight a couple px above the iframe's box, which triggers
        // the iframe's own native scrollbars.
        setHeight(body.scrollHeight + 8);
      });
      observer.observe(body);
    }, 200);

    return () => {
      clearInterval(attach);
      observer?.disconnect();
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      title="Google reviews"
      srcDoc={SRC_DOC}
      scrolling="no"
      className="mt-12 w-full border-0"
      style={{ height: height || 300, overflow: "hidden" }}
    />
  );
}
