import { BookOpen, Droplet, HeartHandshake, Home, Leaf, Waves } from "lucide-react";
import type { RitualFamily } from "@/types";

const map = { book: BookOpen, home: Home, waves: Waves, droplet: Droplet, leaf: Leaf, hands: HeartHandshake };

export function FamilyIcon({ icon, className = "h-6 w-6" }: { icon: RitualFamily["icon"]; className?: string }) {
  const Icon = map[icon];
  return <Icon className={className} aria-hidden="true" />;
}
