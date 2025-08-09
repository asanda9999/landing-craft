import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "./tubelight-navbar"
import { BackgroundPaths } from "@/components/ui/background-paths"
import { HeroGeometric } from "@/components/ui/shape-landing-hero"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#', icon: User },
    { name: 'Projects', url: '#', icon: Briefcase },
    { name: 'Resume', url: '#', icon: FileText }
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