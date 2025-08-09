import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "./tubelight-navbar"
import { BackgroundPaths } from "@/components/ui/background-paths"
import { HeroGeometric } from "@/components/ui/shape-landing-hero"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Features', url: '#features', icon: User },
    { name: 'Pricing', url: '#pricing', icon: Briefcase },
    { name: 'Contact', url: '#contact', icon: FileText }
  ]

  return <NavBar items={navItems} />
}

export function DemoBackgroundPaths() {
    return <BackgroundPaths title="Background Paths" />
}

function DemoHeroGeometric() {
    return <HeroGeometric badge="Kokonut UI"
            title1 = "Elevate Your"
            title2 = "Digital Vision" />
}

export { DemoHeroGeometric }