import { useEffect, useRef } from 'react';

export default function PersonalImage({ imageSrc = '/assets/img_0.webp', size = 360 }) {
  const outlineRef = useRef(null);
  const clipRef = useRef(null);

  useEffect(() => {
    const outline = outlineRef.current;
    const clipShape = clipRef.current;

    const cx = 130,
      cy = 130;
    const baseR = 120;
    const amp = 2.5;
    const N = 64;
    const speed = 2;

    function radiusAt(a, t) {
      const w1 = Math.sin(a * 2 + t * 0.9);
      const w2 = Math.sin(a * 3 - t * 0.6) * 0.6;
      const w3 = Math.sin(a * 5 + t * 0.35) * 0.35;
      const w4 = Math.sin(a * 7 - t * 0.25) * 0.22;
      return baseR + amp * (w1 * 0.55 + w2 + w3 + w4);
    }

    function points(t) {
      const pts = [];
      for (let i = 0; i < N; i++) {
        const a = (i / N) * Math.PI * 2;
        const r = radiusAt(a, t);
        pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
      }
      return pts;
    }

    function catmullRomClosedToBezier(pts) {
      const p = pts;
      const n = p.length;
      let d = `M ${p[0][0].toFixed(2)} ${p[0][1].toFixed(2)}`;

      for (let i = 0; i < n; i++) {
        const p0 = p[(i - 1 + n) % n];
        const p1 = p[i];
        const p2 = p[(i + 1) % n];
        const p3 = p[(i + 2) % n];

        const c1x = p1[0] + (p2[0] - p0[0]) / 6;
        const c1y = p1[1] + (p2[1] - p0[1]) / 6;
        const c2x = p2[0] - (p3[0] - p1[0]) / 6;
        const c2y = p2[1] - (p3[1] - p1[1]) / 6;

        d += ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(
          2
        )}, ${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`;
      }
      return d + ' Z';
    }

    let start = performance.now();
    let rafId;

    function tick(now) {
      const t = ((now - start) / 1000) * speed;
      const d = catmullRomClosedToBezier(points(t));

      outline.setAttribute('d', d);
      clipShape.setAttribute('d', d);

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <svg
      viewBox="0 0 260 260"
      style={{ width: size, height: 'auto', display: 'block', margin: '0 auto' }}
      aria-label="Floating ribbon ring"
    >
      <defs>
        <clipPath id="blobClip" clipPathUnits="userSpaceOnUse">
          <path ref={clipRef} />
        </clipPath>
      </defs>

      <image
        href={imageSrc}
        x="10"
        y="15"
        width="240"
        height="240"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#blobClip)"
      />

      <path
        ref={outlineRef}
        fill="none"
        stroke="#000"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
