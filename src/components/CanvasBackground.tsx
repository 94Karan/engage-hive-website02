import { useEffect, useRef } from "react";

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 180,
    };

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    // Particles array
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      originalX: number;
      originalY: number;
    }

    interface HoneycombCell {
      x: number;
      y: number;
      size: number;
      angle: number;
      speed: number;
      opacity: number;
    }

    const particles: Particle[] = [];
    const honeycombs: HoneycombCell[] = [];

    // Initialize regular particles
    const particleCount = prefersReducedMotion ? 15 : 60;
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        color: i % 5 === 0 ? "rgba(255, 193, 7, 0.45)" : "rgba(255, 255, 255, 0.15)",
        originalX: x,
        originalY: y,
      });
    }

    // Initialize decorative honeycomb shapes
    const honeycombCount = prefersReducedMotion ? 4 : 12;
    for (let i = 0; i < honeycombCount; i++) {
      honeycombs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 40 + 20,
        angle: Math.random() * Math.PI * 2,
        speed: (Math.random() * 0.05 + 0.01) * (Math.random() > 0.5 ? 1 : -1),
        opacity: Math.random() * 0.15 + 0.05,
      });
    }

    // Draw regular hexagon
    const drawHexagon = (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      opacity: number
    ) => {
      context.beginPath();
      context.strokeStyle = `rgba(255, 193, 7, ${opacity})`;
      context.lineWidth = 1;
      for (let side = 0; side < 6; side++) {
        const angle = (side * Math.PI) / 3;
        const hx = x + size * Math.cos(angle);
        const hy = y + size * Math.sin(angle);
        if (side === 0) {
          context.moveTo(hx, hy);
        } else {
          context.lineTo(hx, hy);
        }
      }
      context.closePath();
      context.stroke();
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Honeycombs
      honeycombs.forEach((h) => {
        if (!prefersReducedMotion) {
          h.angle += h.speed * 0.1;
          h.y -= 0.1; // Slow drift upward
          if (h.y + h.size < 0) {
            h.y = height + h.size;
            h.x = Math.random() * width;
          }
        }

        // Mouse hover interaction on hexagons
        let offsetX = 0;
        let offsetY = 0;
        const dx = mouse.x - h.x;
        const dy = mouse.y - h.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          offsetX = -dx * force * 0.08;
          offsetY = -dy * force * 0.08;
        }

        ctx.save();
        ctx.translate(h.x + offsetX, h.y + offsetY);
        ctx.rotate(h.angle);
        drawHexagon(ctx, 0, 0, h.size, h.opacity);
        ctx.restore();
      });

      // Update & Draw Particles
      particles.forEach((p, idx) => {
        // Simple drift physics
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Boundary bounce/wrap
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }

        // Interactive mouse force (subtle push away)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          const pushX = Math.cos(angle) * force * 2;
          const pushY = Math.sin(angle) * force * 2;

          p.x -= pushX;
          p.y -= pushY;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Connect nearby particles with lines
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distBetween = Math.hypot(p.x - p2.x, p.y - p2.y);
          const maxDist = 120;

          if (distBetween < maxDist) {
            const alpha = (1 - distBetween / maxDist) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 193, 7, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10 bg-[#050505]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
