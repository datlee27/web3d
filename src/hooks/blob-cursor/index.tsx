import { useTrail, useSpring, animated } from "@react-spring/web";
import { useRef, useCallback, useEffect, useState } from "react";
import type { ReactNode, MouseEvent, TouchEvent } from "react";
const cursorImage = "/images/aboutus/service-logo-studio.png";
import { BlobCursorContext } from "./context";

const slow = { mass: 1, tension: 150, friction: 150 };
const trans = (x: number, y: number) =>
  `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

interface BlobCursorProps {
  children: ReactNode;
}

const BlobCursor = ({ children }: BlobCursorProps) => {
  const [trail, api] = useTrail(1, () => ({
    xy: [0, 0],
    config: slow,
  }));

  const [{ rotation }, rotApi] = useSpring(() => ({
    rotation: 0,
    config: { mass: 20, tension: 300, friction: 150 },
  }));

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const triggerRotation = useCallback(() => {
    rotApi.start({
      from: { rotation: 0 },
      to: { rotation: 360 },
    });
  }, [rotApi]);

  const ref = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      return { left: rect.left, top: rect.top };
    }
    return { left: 0, top: 0 };
  }, []);

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (isMobile) return;
    let clientX, clientY;

    if ("touches" in e) {
      if (e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        return;
      }
    } else {
      clientX = (e as MouseEvent).clientX;
      clientY = (e as MouseEvent).clientY;
    }

    const { left, top } = updatePosition();
    const x = clientX - left;
    const y = clientY - top;

    api.start({ xy: [x, y] });
  };



  return (
    <BlobCursorContext.Provider value={{ triggerRotation }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          backgroundColor: "transparent",
          overflow: "hidden",
        }}
      >
        <div
          ref={ref}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "visible",
          }}
        >
          {!isMobile && trail.map((props, index) => (
            <animated.div
              key={index}
              style={{
                transform: props.xy.to(trans),
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
                zIndex: 0,
                willChange: "transform",
              }}
            >
              <animated.div
                style={{
                  transform: rotation.to((r) => `rotate(${r}deg)`),
                  width: "800px",
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={cursorImage}
                  alt="cursor-trail"
                  style={{
                    width: "100%",
                    height: "auto",
                    filter: "blur(35px)",
                    objectFit: "contain",
                    opacity: 0.4,
                  }}
                />
              </animated.div>
            </animated.div>
          ))}
          <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
        </div>
      </div>
    </BlobCursorContext.Provider>
  );
};

export default BlobCursor;
export { useBlobCursor } from "./useBlobCursor";
