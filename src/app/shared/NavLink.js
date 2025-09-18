"use client";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { Home, User, BriefcaseBusiness } from "lucide-react";

const iconComponent = {
  ["Home"]: Home,
  ["About"]: User,
  ["Projects"]: BriefcaseBusiness,
};

const NavLink = ({ nav, href }) => {
  const iconRef = useRef(null);
  const Icon = iconComponent[nav];

  useEffect(() => {
    const icon = iconRef.current;
    if (!icon) return;

    const svgShapes = icon.querySelectorAll(
      "path, circle, rect, line, polyline, polygon, ellipse"
    );
    svgShapes.forEach((shape) => {
      if (typeof shape.getTotalLength !== "function") return;
      const shapeLength = shape.getTotalLength();
      shape.style.setProperty("--dash", shapeLength);
      shape.style.removeProperty("stroke-dasharray");
      shape.style.removeProperty("stroke-dashoffset");
      shape.setAttribute("data-nav-icon", "");
    });
  }, []);

  return (
    <Link
      href={href}
      className="link-group inline-flex items-center gap-2 text-white/90 hover:text-white"
      aria-label="Home"
    >
      <span className="font-display">{nav}</span>
      <Icon
        ref={iconRef}
        className="nav-stroke size-5"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Link>
  );
};

export { NavLink };
