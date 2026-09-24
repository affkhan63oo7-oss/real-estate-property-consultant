import React, { useState, useEffect, useRef } from 'react';
import { Rotate3d, Sun, Box, Layers, RefreshCw } from 'lucide-react';

export const Model3DViewer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState({ x: 25, y: 45 });
  const [isWireframe, setIsWireframe] = useState(false);
  const [selectedTier, setSelectedTier] = useState<number>(2); // 0: Base, 1: Mid, 2: Sky
  const [isDaylight, setIsDaylight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  // Render 3D isometric architectural massing on HTML5 Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high-DPI displays
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, width, height);

    const radX = (rotation.x * Math.PI) / 180;
    const radY = (rotation.y * Math.PI) / 180;

    // Center of projection
    const cx = width / 2;
    const cy = height / 2 + 30;

    // 3D to 2D isometric projection matrix
    const project = (x: number, y: number, z: number) => {
      // Rotate around Y axis
      const x1 = x * Math.cos(radY) + z * Math.sin(radY);
      const z1 = -x * Math.sin(radY) + z * Math.cos(radY);

      // Rotate around X axis
      const y2 = y * Math.cos(radX) - z1 * Math.sin(radX);
      const z2 = y * Math.sin(radX) + z1 * Math.cos(radX);

      // Simple perspective
      const scale = 360 / (360 + z2 * 0.4);
      return {
        px: cx + x1 * scale,
        py: cy - y2 * scale
      };
    };

    // Draw grid plane
    ctx.strokeStyle = isDaylight ? 'rgba(18, 19, 22, 0.08)' : 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    const gridSize = 160;
    const step = 40;
    for (let i = -gridSize; i <= gridSize; i += step) {
      const p1 = project(i, 0, -gridSize);
      const p2 = project(i, 0, gridSize);
      ctx.beginPath();
      ctx.moveTo(p1.px, p1.py);
      ctx.lineTo(p2.px, p2.py);
      ctx.stroke();

      const p3 = project(-gridSize, 0, i);
      const p4 = project(gridSize, 0, i);
      ctx.beginPath();
      ctx.moveTo(p3.px, p3.py);
      ctx.lineTo(p4.px, p4.py);
      ctx.stroke();
    }

    // Architectural Volumes (Tier 0: Subterranean/Ground, Tier 1: Mid Living, Tier 2: Cantilever Sky)
    const tiers = [
      { y: 0, h: 45, w: 140, d: 100, label: 'Base Gallery & Spa' },
      { y: 45, h: 55, w: 120, d: 80, label: 'Grand Living Salon' },
      { y: 100, h: 40, w: 160, d: 70, label: 'Cantilever Sky Suite' } // Cantilevers out
    ];

    tiers.forEach((tier, idx) => {
      const isHighlighted = selectedTier === idx;
      const hw = tier.w / 2;
      const hd = tier.d / 2;
      const y0 = tier.y;
      const y1 = tier.y + tier.h;

      // 8 Vertices of the architectural box
      const v = [
        project(-hw, y0, -hd), // 0: bottom back left
        project(hw, y0, -hd),  // 1: bottom back right
        project(hw, y0, hd),   // 2: bottom front right
        project(-hw, y0, hd),  // 3: bottom front left
        project(-hw, y1, -hd), // 4: top back left
        project(hw, y1, -hd),  // 5: top back right
        project(hw, y1, hd),   // 6: top front right
        project(-hw, y1, hd)   // 7: top front left
      ];

      // Draw faces if not wireframe
      if (!isWireframe) {
        // Top Face
        ctx.fillStyle = isHighlighted
          ? 'rgba(179, 142, 93, 0.85)'
          : isDaylight
          ? 'rgba(235, 233, 227, 0.95)'
          : 'rgba(40, 42, 48, 0.95)';
        ctx.beginPath();
        ctx.moveTo(v[4].px, v[4].py);
        ctx.lineTo(v[5].px, v[5].py);
        ctx.lineTo(v[6].px, v[6].py);
        ctx.lineTo(v[7].px, v[7].py);
        ctx.closePath();
        ctx.fill();

        // Front Face
        ctx.fillStyle = isHighlighted
          ? 'rgba(179, 142, 93, 0.7)'
          : isDaylight
          ? 'rgba(215, 212, 204, 0.9)'
          : 'rgba(30, 32, 36, 0.9)';
        ctx.beginPath();
        ctx.moveTo(v[3].px, v[3].py);
        ctx.lineTo(v[2].px, v[2].py);
        ctx.lineTo(v[6].px, v[6].py);
        ctx.lineTo(v[7].px, v[7].py);
        ctx.closePath();
        ctx.fill();

        // Right Face
        ctx.fillStyle = isHighlighted
          ? 'rgba(179, 142, 93, 0.55)'
          : isDaylight
          ? 'rgba(195, 192, 185, 0.85)'
          : 'rgba(24, 25, 29, 0.85)';
        ctx.beginPath();
        ctx.moveTo(v[2].px, v[2].py);
        ctx.lineTo(v[1].px, v[1].py);
        ctx.lineTo(v[5].px, v[5].py);
        ctx.lineTo(v[6].px, v[6].py);
        ctx.closePath();
        ctx.fill();
      }

      // Draw Architectural Edges
      ctx.strokeStyle = isHighlighted
        ? '#B38E5D'
        : isDaylight
        ? '#121316'
        : '#FFFFFF';
      ctx.lineWidth = isHighlighted ? 2 : 1.25;

      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0], // bottom
        [4, 5], [5, 6], [6, 7], [7, 4], // top
        [0, 4], [1, 5], [2, 6], [3, 7]  // vertical pillars
      ];

      edges.forEach(([start, end]) => {
        ctx.beginPath();
        ctx.moveTo(v[start].px, v[start].py);
        ctx.lineTo(v[end].px, v[end].py);
        ctx.stroke();
      });
    });

  }, [rotation, isWireframe, selectedTier, isDaylight]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;
    lastMousePos.current = { x: e.clientX, y: e.clientY };

    setRotation((prev) => ({
      x: Math.max(5, Math.min(80, prev.x - deltaY * 0.5)),
      y: (prev.y + deltaX * 0.5) % 360
    }));
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <section
      id="spatial"
      className="section-spacing"
      style={{
        backgroundColor: isDaylight ? 'var(--bg-primary)' : 'var(--bg-dark)',
        color: isDaylight ? 'var(--text-primary)' : '#FFFFFF',
        borderBottom: '1px solid var(--border-light)',
        transition: 'background-color 0.4s, color 0.4s'
      }}
    >
      <div className="container-luxury">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--accent-bronze)',
              display: 'block',
              marginBottom: '0.75rem'
            }}
          >
            07 / Spatial Massing & 3D Form
          </span>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1.5rem'
            }}
          >
            <div>
              <h2 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: isDaylight ? 'var(--text-primary)' : '#FFFFFF' }}>
                Interactive 3D Architectural Model
              </h2>
              <p style={{ maxWidth: '600px', marginTop: '0.5rem', color: isDaylight ? 'var(--text-secondary)' : 'rgba(255, 255, 255, 0.7)' }}>
                Click and drag to rotate the monolithic massing. Inspect structural cantilevers, solar daylight incidence, and elevation tiers.
              </p>
            </div>

            {/* Interactive Control Toggles */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <button
                onClick={() => setIsDaylight(!isDaylight)}
                className="btn-luxury-secondary"
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.75rem',
                  color: isDaylight ? 'var(--text-primary)' : '#FFFFFF',
                  borderColor: isDaylight ? 'var(--border-medium)' : 'rgba(255, 255, 255, 0.25)'
                }}
              >
                <Sun size={14} />
                <span>{isDaylight ? 'Daylight Mode' : 'Dusk Mode'}</span>
              </button>

              <button
                onClick={() => setIsWireframe(!isWireframe)}
                className="btn-luxury-secondary"
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.75rem',
                  color: isDaylight ? 'var(--text-primary)' : '#FFFFFF',
                  borderColor: isDaylight ? 'var(--border-medium)' : 'rgba(255, 255, 255, 0.25)'
                }}
              >
                <Box size={14} />
                <span>{isWireframe ? 'Solid Mass' : 'Wireframe Blueprint'}</span>
              </button>

              <button
                onClick={() => setRotation({ x: 25, y: 45 })}
                className="btn-luxury-secondary"
                style={{
                  padding: '0.5rem 0.75rem',
                  color: isDaylight ? 'var(--text-primary)' : '#FFFFFF',
                  borderColor: isDaylight ? 'var(--border-medium)' : 'rgba(255, 255, 255, 0.25)'
                }}
                title="Reset Camera Angle"
              >
                <RefreshCw size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* 3D Canvas Box */}
        <div
          data-cursor="drag"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{
            position: 'relative',
            width: '100%',
            height: '460px',
            backgroundColor: isDaylight ? '#FAF9F6' : '#111215',
            border: `1px solid ${isDaylight ? 'var(--border-medium)' : 'rgba(255, 255, 255, 0.1)'}`,
            borderRadius: '2px',
            overflow: 'hidden',
            cursor: isDragging ? 'grabbing' : 'grab',
            boxShadow: 'var(--shadow-elevated)'
          }}
        >
          <canvas
            ref={canvasRef}
            style={{ width: '100%', height: '100%', display: 'block' }}
          />

          {/* Floating Tier Selector Controls */}
          <div
            style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              backgroundColor: isDaylight ? 'rgba(255, 255, 255, 0.9)' : 'rgba(18, 19, 22, 0.9)',
              backdropFilter: 'blur(8px)',
              padding: '0.75rem 1rem',
              borderRadius: '2px',
              border: `1px solid ${isDaylight ? 'var(--border-light)' : 'rgba(255, 255, 255, 0.15)'}`
            }}
          >
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-bronze)' }}>
              Highlight Structural Tier
            </span>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              {['Ground Base', 'Main Salon', 'Cantilever Sky'].map((name, idx) => (
                <button
                  key={name}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTier(idx);
                  }}
                  style={{
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.75rem',
                    border: 'none',
                    borderRadius: '1px',
                    backgroundColor: selectedTier === idx ? 'var(--accent-bronze)' : (isDaylight ? '#F3F1EC' : 'rgba(255, 255, 255, 0.1)'),
                    color: selectedTier === idx ? '#FFFFFF' : (isDaylight ? 'var(--text-primary)' : '#EDE8DF'),
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          {/* Hint Overlay */}
          <div
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.75rem',
              color: isDaylight ? 'var(--text-muted)' : 'rgba(255, 255, 255, 0.5)'
            }}
          >
            <Rotate3d size={15} />
            <span>Click & drag to orbit 360°</span>
          </div>
        </div>
      </div>
    </section>
  );
};
