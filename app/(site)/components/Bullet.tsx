"use client";

import clsx from "clsx";

interface BulletProps {
  id: string;
  content: string;
  randomTop: string;
}

const Bullet: React.FC<BulletProps> = ({ id, content, randomTop }) => {
  return (
    <div
      key={id}
      className={clsx(`
          absolute
          text-xl
          text-white
          font-semibold
          right-0
          translate-x-[100%]
          animate-[flow_20s_linear_infinite]
        `)}
      style={{ top: randomTop }}
    >
      {content}
    </div>
  );
};

export default Bullet;
