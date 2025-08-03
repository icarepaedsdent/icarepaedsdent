'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 30);
    };

    // Add passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Infant / Toddler Care',
      href: '/services/infant-toddler-care',
      description: 'Gentle dental care for the littlest patients'
    },
    {
      title: 'Preventive Care',
      href: '/services/preventive-care',
      description: 'Regular checkups, cleanings, and preventive treatments'
    },
    {
      title: 'Fillings & Crowns',
      href: '/services/fillings-and-crowns',
      description: 'Restorative treatments for damaged teeth'
    },
    {
      title: 'Extractions',
      href: '/services/extractions',
      description: 'Safe and gentle tooth removal when necessary'
    },
    {
      title: 'Space Maintainers',
      href: '/services/space-maintainers',
      description: 'Maintaining proper spacing for developing teeth'
    },
    {
      title: 'Chalky Teeth',
      href: '/services/chalky-teeth',
      description: 'Treatment for hypomineralized teeth'
    },
    {
      title: 'Emergency Care',
      href: '/services/emergency-care',
      description: 'Immediate care for dental emergencies'
    },
    {
      title: 'Children with Special Needs',
      href: '/services/special-needs',
      description: 'Specailised care for children with special needs'
    }
  ];

  return (
    <header className={cn(
      "sticky z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
      isScrolled ? "top-6" : "top-0"
    )}>
      <div className={cn(
        "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
        isScrolled 
          ? "mx-6 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-32" 
          : "mx-0"
      )}>
        <div className={cn(
          "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
          isScrolled 
            ? "bg-gradient-to-r from-white/15 via-white/10 to-white/15 backdrop-blur-2xl border border-white/30 shadow-2xl shadow-black/5 rounded-2xl" 
            : "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        )}>
          <div className={cn(
            "container mx-auto transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
            isScrolled ? "px-6" : "px-4"
          )}>
            <div className={cn(
              "flex items-center justify-between relative transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
              isScrolled ? "h-14" : "h-16"
            )}>
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-10">
            <Image
              src="/main-logo.png"
              alt="i-Care Paediatric Dentistry"
              width={120}
              height={40}
              className={cn(
                "w-auto object-contain transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                isScrolled ? "h-8" : "h-10"
              )}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-teal-600 focus:text-teal-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:text-teal-600 data-[state=open]:text-teal-600"
                  )}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-teal-600 focus:text-teal-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:text-teal-600 data-[state=open]:text-teal-600"
                  )}>
                    About 
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent hover:bg-transparent focus:bg-transparent group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-teal-600 focus:text-teal-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:text-teal-600 data-[state=open]:text-teal-600">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{service.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {service.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/sedation" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-teal-600 focus:text-teal-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:text-teal-600 data-[state=open]:text-teal-600"
                  )}>
                    Sedation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/referrals" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-teal-600 focus:text-teal-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:text-teal-600 data-[state=open]:text-teal-600"
                  )}>
                    Referrals
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-teal-600 focus:text-teal-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:text-teal-600 data-[state=open]:text-teal-600"
                  )}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* <NavigationMenuItem>
                <Link href="/parental-portal" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-teal-600 focus:text-teal-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:text-teal-600 data-[state=open]:text-teal-600"
                  )}>
                    Portal
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem> */}
            </NavigationMenuList>
          </NavigationMenu>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4 relative z-10">
            <Link href="tel:36230000">
              <Button variant="outline" size="sm">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white">
                <Calendar className="h-4 w-4 mr-2" />
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center justify-center">
                  <Image
                    src="/main-logo.png"
                    alt="i-Care Paediatric Dentistry"
                    width={100}
                    height={32}
                    className={cn(
                      "w-auto object-contain transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                      isScrolled ? "h-7" : "h-8"
                    )}
                  />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-teal-600 transition-colors">
                  Home
                </Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-teal-600 transition-colors">
                  About
                </Link>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-gray-900">Services</p>
                  <div className="pl-4 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-gray-600 hover:text-teal-600 transition-colors"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href="/sedation" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-teal-600 transition-colors">
                  Sedation
                </Link>
                <Link href="/referrals" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-teal-600 transition-colors">
                  Referrals
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-teal-600 transition-colors">
                  Contact
                </Link>
                {/* <Link href="/parental-portal" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-blue-600 transition-colors">
                  Parental Portal
                </Link> */}
                <div className="pt-6 space-y-3">
                  <Link href="tel:36230000">
                    <Button variant="outline" className="w-full mb-2 sm:text-xs">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button className="w-full sm:text-xs bg-teal-600 hover:bg-teal-700 text-white">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Appointment
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}