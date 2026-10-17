import {
  ArrowRight, BookOpen, Building2, Check, ChevronDown, Droplets, Gavel,
  GraduationCap, HeartHandshake, Landmark, Laptop, Lightbulb, Mail, MapPin,
  PartyPopper, Phone, Route as RoadIcon, Star, Sun, Users, Wrench, Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const map: Record<string, LucideIcon> = {
  laptop_mac: Laptop, laptop: Laptop, computer: Laptop, devices: Laptop,
  diversity_3: Users, groups: Users, group: Users, people: Users, women: Users,
  lightbulb: Lightbulb, light: Lightbulb, solar_power: Sun, wb_sunny: Sun,
  school: GraduationCap, cast_for_education: GraduationCap, menu_book: BookOpen,
  location_on: MapPin, expand_more: ChevronDown, arrow_forward: ArrowRight,
  gavel: Gavel, balance: Landmark, account_balance: Landmark,
  water_drop: Droplets, water: Droplets,
  add_road: RoadIcon, route: RoadIcon, road: RoadIcon,
  bolt: Zap, electric_bolt: Zap, power: Zap,
  volunteer_activism: HeartHandshake, favorite: HeartHandshake,
  celebration: PartyPopper, festival: PartyPopper,
  apartment: Building2, domain: Building2, construction: Wrench, build: Wrench,
  phone: Phone, mail: Mail, check: Check,
}

export default function Icon({ name, size = 22 }: { name: string; size?: number }) {
  const Cmp = map[name] ?? Star
  return <Cmp size={size} aria-hidden />
}