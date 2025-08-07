"use client"

import React, { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, Grid, List, Award, Trophy, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface AwardImage {
  id: string
  src: string
  alt: string
  title: string
  category: string
  description?: string
  year?: string
  organization?: string
  orientation?: "portrait" | "landscape" | "square"
  size?: "small" | "medium" | "large"
}

// Award images data
const awardImages: AwardImage[] = [
  {
    id: "award3",
    src: "/awards/award (3).JPG",
    alt: "Commendations for Substantive Contributions to Student Learning Award",
    title: "Commendations for Substantive Contributions to Student Learning Award",
    category: "Achievement",
    description: "Recognized for significant contributions to student learning and educational excellence.",
    year: "2020",
    organization: "The University Of Queensland Australia-HaBS 2020 Staff Awards",
    orientation: "portrait",
    size: "large"
  },
  {
    id: "award4",
    src: "/awards/award (4).JPG",
    alt: "People’s Choice Award",
    title: "People’s Choice Award",
    category: "Achievement",
    description: "General Poster Session 2 during the 63rd Annual Scientific Meeting of the IADR ANZ Division - Cairns",
    year: "2020",
    organization: "IADR ANZ Division",
    orientation: "square",
    size: "medium"
  },
 
 
  {
    id: "award11",
    src: "/awards/award (11).JPG",
    alt: "Higher Education Academy Fellowship",
    title: "Higher Education Academy Fellowship",
    category: "Achievement",
    description: "Recognition of fellowship status",
    year: "2021",
    organization: "The University Of Queensland Australia",
    orientation: "portrait",
    size: "medium"
  },
 {
    id: "award1",
    src: "/awards/award (1).JPG",
    alt: "Programs That Enhance Learning Award",
    title: "Programs That Enhance Learning Award",
    category: "Achievement",
    description: "Awarded for exceptional contribution to paediatric dental education and student learning enhancement.",
    year: "2021",
    organization: "The University Of Queensland Australia-HaBS 2021 Staff Awards",
    orientation: "portrait",
    size: "medium"
  },
 {
    id: "award8",
    src: "/awards/award (8).JPG",
    alt: "Best Supervision Award - HDR",
    title: "Best Supervision Award - HDR",
    category: "Patient Care",
    description: "Best Supervisor Award Winner at School of Dentistry Research Day 2022",
    year: "2022",
    organization: "The University Of Queensland Australia",
    orientation: "portrait",
    size: "medium"
  },
  {
    id: "award9",
    src: "/awards/award (9).JPG",
    alt: "Excellence in Teaching and Learning Award - Commendation for Program that Enhance Learning",
    title: "Excellence in Teaching and Learning Award - Commendation for Program that Enhance Learning",
    category: "Achievement",
    description: "2022 Awards for Excellence in Teaching and Learning",
    year: "2022",
    organization: "The University of Queensland",
    orientation: "portrait",
    size: "large"
  },

 {
    id: "award2",
    src: "/awards/award (2).JPG",
    alt: "Finalist Certificate",
    title: "Australian Muslim Achievement Award 2022",
    category: "Achievement",
    description: "Finalist for outstanding clinical skills and patient care",
    year: "2022",
    organization: "Amaa 2022 Australian Muslim Achievement Award 2022",
    orientation: "portrait",
    size: "medium"
  },
  {
    id: "award18",
    src: "/awards/award (18).jpg",
    alt: "Recognised by Australian Dental Association Queensland on International Women’s Day",
    title: "Recognised by Australian Dental Association Queensland on International Women’s Day",
    category: "Achievement",
    description: "Dr. Sobia Zafar was honoured by the Australian Dental Association Queensland for her exceptional contributions to dental education, as part of the International Women’s Day.",
    year: "8 March 2022",
    organization: "ADA Queensland",
    orientation: "square",
    size: "large"
  },
{
    id: "award5",
    src: "/awards/award (5).JPG",
    alt: "Excellence in Health Professional Education ",
    title: "Excellence in Health Professional Education",
    category: "Achievement",
    description: "Australia & New Zealand Association for Health Professional Educators",
    year: "27 June, 2023",
    organization: "Flinders University",
    orientation: "landscape",
    size: "medium"
  },

{
    id: "award6",
    src: "/awards/award.JPG",
    alt: "Queensland Young Tall Poppy Award",
    title: "Queensland Young Tall Poppy Award",
    category: "Professional Recognition",
    description: "Australian Institute of Policy and Science (AIPS) . In recognition of excellence in dental research, particularly in the area of paediatric dentistry, and her introduction of innovative teaching tools in digital dentistry that helps dental students move from laboratory simulations to patient care.",
    year: "13 October, 2023",
    organization: "Pakistan Australian Cultural Association",
    orientation: "landscape",
    size: "small"
  },
  {
    id: "award7",
    src: "/awards/award (7).JPG",
    alt: "Best Supervisor Award Winner",
    title: "Best Supervisor Award Winner",
    category: "Achievement",
    description: "Best Supervisor Award Winner at School of Dentistry Research Day 2023",
    year: "2023",
    organization: "The University Of Queensland Australia",
    orientation: "portrait",
    size: "medium"
  },
{
    id: "award13",
    src: "/awards/award (13).JPG",
    alt: "Invited Speaker at the ANZSPDQ Clinic Day",
    title: "Invited Speaker at the ANZSPDQ Clinic Day",
    category: "Participation Certificate",
    description: "Awarded by the Australia and New Zealand Society of Paediatric Dentistry Queensland",
    year: "5 October, 2024",
    organization: "Oral Health Centre, The University of Queensland",
    orientation: "portrait",
    size: "medium"
  },
   {
    id: "award10",
    src: "/awards/award (10).JPG",
    alt: "Distinguished Service Award for exceptionally distinguished service to the Association and to the dental profession",
    title: "Distinguished Service Award for exceptionally distinguished service to the Association and to the dental profession",
    category: "Achievement",
    description: "Awarded by the Australian Dental Association Queensland ",
    year: "23 November 2024",
    organization: "ADA",
    orientation: "landscape",
    size: "medium"
  },

  {
    id: "award14",
    src: "/awards/award (14).JPG",
    alt: "Distinguished Service Award APDAQ 2024 ",
    title: "Distinguished Service Award APDAQ 2024",
    category: "Achievement",
    description: "Arshad Hussain Excellence Award",
    year: "2024",
    organization: "APDOQ",
    orientation: "landscape",
    size: "medium"
  },
  {
    id: "award16",
    src: "/awards/award (16).JPG",
    alt: "Fellowship of the Faculty of Dental Trainers",
    title: "Fellowship of the Faculty of Dental Trainers",
    category: "Achievement",
    description: "The Royal College of Surgeons of Edinburgh admits to the fellowship of A/Prof Sobia",
    year: "2024",
    organization: "The Royal College of Surgeons of Edinburgh",
    orientation: "portrait",
    size: "large"
  },
  {
    id: "award17",
    src: "/awards/award (17).JPG",
    alt: "Appreciation Award",
    title: "Appreciation Award",
    category: "Appreciation Award",
    description: "Appreciation Award for A/Prof Sobia's ongoing commitment and support",
    year: "2024",
    organization: "Turbans Australia",
    orientation: "square",
    size: "large"
  },

{
    id: "award15",
    src: "/awards/award (15).JPG",
    alt: "Invited Speaker at the 9Th RK Hall Lecture Series",
    title: "Invited Speaker at the 9Th RK Hall Lecture Series",
    category: "Appreciation Award",
    description: "Awarded by Australia and New Zealand Society of Paediatric Dentistry ",
    year: "28th March 2025",
    organization: "ANZSPD",
    orientation: "square",
    size: "medium"
  },
 {
    id: "award12",
    src: "/awards/award (12).JPG",
    alt: "Excellence in Teaching, Research, Supervision, Service and Philanthropy Award",
    title: "Excellence in Teaching, Research, Supervision, Service and Philanthropy Award",
    category: "Achievement",
    description: "Awarded by Australia and New Zealand Society of Paediatric Dentistry Queensland",
    year: "28th March 2025",
    orientation: "landscape",
    size: "small"
  },
];

function AwardsGallery() {
  const [selectedImage, setSelectedImage] = useState<AwardImage | null>(null)
  const [filteredImages, setFilteredImages] = useState<AwardImage[]>(awardImages)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"masonry" | "list">("list")

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(awardImages.map((img) => img.category)))]

  // Filter images based on category
  useEffect(() => {
    let filtered = awardImages

    if (selectedCategory !== "all") {
      filtered = filtered.filter((img) => img.category === selectedCategory)
    }

    setFilteredImages(filtered)
  }, [selectedCategory])

  const openLightbox = (image: AwardImage) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredImages[newIndex])
  }



  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return

      switch (e.key) {
        case "Escape":
          closeLightbox()
          break
        case "ArrowLeft":
          navigateImage("prev")
          break
        case "ArrowRight":
          navigateImage("next")
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [selectedImage, filteredImages])

  const getImageClasses = (image: AwardImage) => {
    const { orientation = "square", size = "medium" } = image

    let classes =
      "group relative cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1"

    // Size variations for masonry effect
    if (size === "large") {
      if (orientation === "portrait") {
        classes += " row-span-3"
      } else if (orientation === "landscape") {
        classes += " col-span-2 row-span-2"
      } else {
        classes += " col-span-2 row-span-2"
      }
    } else if (size === "medium") {
      if (orientation === "portrait") {
        classes += " row-span-2"
      } else if (orientation === "landscape") {
        classes += " col-span-2"
      } else {
        classes += " row-span-1"
      }
    } else {
      classes += " row-span-1"
    }

    return classes
  }

  const getImageAspect = (image: AwardImage) => {
    const { orientation = "square", size = "medium" } = image

    if (size === "large") {
      if (orientation === "portrait") return "aspect-[3/4]"
      if (orientation === "landscape") return "aspect-[4/3]"
      return "aspect-square"
    } else if (size === "medium") {
      if (orientation === "portrait") return "aspect-[3/4]"
      if (orientation === "landscape") return "aspect-[4/3]"
      return "aspect-square"
    }
    return "aspect-square"
  }

  return (
    <div className="w-full">
      {/* Controls */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className={`cursor-pointer capitalize transition-all hover:scale-105 ${
                  selectedCategory === category 
                    ? "bg-teal-600 hover:bg-teal-700 text-white" 
                    : "bg-white/50 hover:bg-white/70 text-gray-700 border-teal-200"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={`transition-all hover:scale-105 ${
                viewMode === "list" 
                  ? "bg-teal-600 hover:bg-teal-700 text-white" 
                  : "border-teal-200 text-teal-600 hover:bg-teal-50"
              }`}
            >
              <List className="h-4 w-4 mr-2" />
              List
                      </Button>
                      <Button
              variant={viewMode === "masonry" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("masonry")}
              className={`transition-all hover:scale-105 ${
                viewMode === "masonry" 
                  ? "bg-teal-600 hover:bg-teal-700 text-white" 
                  : "border-teal-200 text-teal-600 hover:bg-teal-50"
              }`}
            >
              <Grid className="h-4 w-4 mr-2" />
              Gallery
            </Button>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="mb-6 text-sm text-muted-foreground">
        Showing {filteredImages.length} of {awardImages.length} awards
      </div>

      {/* Gallery Views */}
      {viewMode === "masonry" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 auto-rows-[200px]">
          {filteredImages.map((image, index) => (
            <div key={image.id} className={getImageClasses(image)} onClick={() => openLightbox(image)}>
              <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-teal-50/30 to-emerald-50/30 rounded-lg shadow-md border border-teal-100/50">
                {/* Internal animated blobs */}
                <div className="absolute inset-0 pointer-events-none">
                  <div
                    className="absolute -top-2 -right-2 w-12 h-12 bg-teal-100/40 rounded-full animate-pulse"
                    style={{ animationDuration: `${5 + (index % 3)}s` }}
                  ></div>
                  <div
                    className="absolute -bottom-1 -left-1 w-8 h-8 bg-emerald-200/30 rounded-full animate-bounce"
                    style={{ animationDuration: `${4 + (index % 2) * 0.5}s` }}
                  ></div>
                  <div
                    className="absolute top-4 right-8 w-2 h-2 bg-teal-400/60 rounded-full animate-ping"
                    style={{ animationDuration: `${3 + (index % 3) * 0.3}s` }}
                  ></div>
                </div>

                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 relative z-10"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-lg mb-1 line-clamp-2">{image.title}</h3>
                    <Badge variant="secondary" className="mb-2 text-xs bg-teal-600 text-white">
                      {image.category}
                    </Badge>
                    {image.year && (
                      <p className="text-xs opacity-75 mb-1">{image.year}</p>
                    )}
                    {image.description && <p className="text-sm opacity-90 line-clamp-2">{image.description}</p>}
                  </div>


                </div>

                {/* Category indicator */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <div className="h-2 w-2 rounded-full bg-teal-400 shadow-lg"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredImages.map((image, index) => (
            <Card
              key={image.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.01] border-teal-200/50 bg-gradient-to-br from-white to-teal-50/30 backdrop-blur-sm relative overflow-hidden"
              onClick={() => openLightbox(image)}
            >
              {/* Internal animated blobs */}
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute -top-2 -right-2 w-16 h-16 bg-teal-100/25 rounded-full animate-pulse"
                  style={{ animationDuration: `${6 + (index % 3)}s` }}
                ></div>
                <div
                  className="absolute -bottom-2 -left-2 w-12 h-12 bg-emerald-200/30 rounded-full animate-bounce"
                  style={{ animationDuration: `${5 + (index % 2) * 0.5}s` }}
                ></div>
                <div
                  className="absolute top-4 right-8 w-4 h-4 bg-teal-400/40 rounded-full animate-ping"
                  style={{ animationDuration: `${4 + (index % 3) * 0.3}s` }}
                ></div>
              </div>

              <CardContent className="p-6 relative z-10">
                <div className="flex gap-6">
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg shadow-md border border-teal-100/50">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-teal-600 transition-colors">
                          {image.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary" className="text-xs bg-teal-600 text-white">
                            {image.category}
                          </Badge>
                          {image.year && (
                            <span className="text-xs text-gray-500">{image.year}</span>
                          )}
                        </div>
                        {image.organization && (
                          <p className="text-sm text-gray-600 mb-2">{image.organization}</p>
                        )}
                        {image.description && (
                          <p className="text-sm text-gray-600 line-clamp-2">{image.description}</p>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Empty state */}
      {filteredImages.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-500">
            <Trophy className="h-16 w-16 mx-auto mb-6 opacity-50 text-teal-400" />
            <p className="text-xl font-medium mb-2 text-gray-700">No awards found</p>
            <p className="text-sm">Try selecting a different category</p>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm">
          <div className="relative max-h-full max-w-full">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-teal-600/30 h-12 w-12 z-50 bg-black/50 backdrop-blur-sm rounded-full"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12"
              onClick={() => navigateImage("prev")}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12"
              onClick={() => navigateImage("next")}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>



            {/* Image */}
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl"
            />

            {/* Image info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 text-white rounded-b-lg">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <div className="flex items-center gap-4 mb-3">
                <Badge variant="secondary" className="text-sm bg-teal-600 text-white">
                  {selectedImage.category}
                </Badge>
                {selectedImage.year && (
                  <span className="text-sm opacity-75">
                    {selectedImage.year}
                  </span>
                )}
                {selectedImage.organization && (
                  <span className="text-sm opacity-75">
                    {selectedImage.organization}
                  </span>
                )}
              </div>
              {selectedImage.description && <p className="text-sm opacity-90 max-w-2xl">{selectedImage.description}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function AwardsPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-teal-200/30 rounded-full animate-pulse"
          style={{ animationDuration: '5s' }}
        ></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-emerald-300/20 rounded-full animate-bounce"
          style={{ animationDuration: '7s' }}
        ></div>
        <div
          className="absolute top-96 left-1/4 w-20 h-20 bg-teal-300/25 rounded-full animate-pulse"
          style={{ animationDuration: '4s' }}
        ></div>
        <div
          className="absolute bottom-40 right-12 w-28 h-28 bg-emerald-200/30 rounded-full animate-bounce"
          style={{ animationDuration: '6s' }}
        ></div>
        <div
          className="absolute bottom-20 left-16 w-16 h-16 bg-teal-400/20 rounded-full animate-pulse"
          style={{ animationDuration: '5s' }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-14 h-14 bg-emerald-300/25 rounded-full animate-bounce"
          style={{ animationDuration: '8s' }}
        ></div>
        <div
          className="absolute top-64 left-1/2 w-10 h-10 bg-teal-500/30 rounded-full animate-ping"
          style={{ animationDuration: '3s' }}
        ></div>
        <div
          className="absolute bottom-60 left-1/3 w-8 h-8 bg-emerald-400/40 rounded-full animate-ping"
          style={{ animationDuration: '4s' }}
        ></div>

        {/* Plus sign elements */}
        <div
          className="absolute top-20 right-1/4 text-teal-300/30 text-2xl animate-spin"
          style={{ animationDuration: '20s' }}
        >
          +
        </div>
        <div
          className="absolute bottom-32 right-1/2 text-emerald-400/25 text-lg animate-spin"
          style={{ animationDuration: '25s' }}
        >
          +
        </div>
        <div
          className="absolute top-2/3 left-12 text-teal-400/20 text-xl animate-spin"
          style={{ animationDuration: '30s' }}
        >
          +
        </div>
        <div
          className="absolute top-80 right-8 text-emerald-300/30 text-sm animate-spin"
          style={{ animationDuration: '15s' }}
        >
          +
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center">
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-teal-600" />
              <span className="text-teal-600 font-semibold text-lg">
                Awards & Recognition
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Celebrating Excellence in Paediatric Dentistry
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional achievements, clinical innovations, and community service recognition 
              spanning nearly a decade of dedicated service to children's dental health.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-teal-600" />
                <span>17+ Professional Awards</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-teal-600" />
                <span>Multiple Categories</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-teal-600" />
                <span>2020-2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Awards Gallery */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <AwardsGallery />
      </div>
    </div>
  )
}
