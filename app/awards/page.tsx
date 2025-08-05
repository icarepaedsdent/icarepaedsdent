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
    id: "award1",
    src: "/awards/award (1).JPG",
    alt: "Professional Achievement Award",
    title: "Professional Excellence Award",
    category: "Professional Recognition",
    description: "Recognition for outstanding contribution to paediatric dentistry",
    year: "2023",
    organization: "Dental Association",
    orientation: "portrait",
    size: "medium"
  },
  {
    id: "award2",
    src: "/awards/award (2).JPG",
    alt: "Clinical Excellence Certificate",
    title: "Clinical Excellence Certificate",
    category: "Clinical Achievement",
    description: "Awarded for exceptional clinical skills and patient care",
    year: "2023",
    organization: "Medical Board",
    orientation: "landscape",
    size: "medium"
  },
  {
    id: "award3",
    src: "/awards/award (3).JPG",
    alt: "Research Innovation Award",
    title: "Research Innovation Award",
    category: "Research & Innovation",
    description: "Recognition for groundbreaking research in pediatric dental care",
    year: "2022",
    organization: "Research Institute",
    orientation: "portrait",
    size: "large"
  },
  {
    id: "award4",
    src: "/awards/award (4).JPG",
    alt: "Community Service Recognition",
    title: "Community Service Recognition",
    category: "Community Service",
    description: "Honored for dedicated service to the community",
    year: "2022",
    organization: "Community Health Board",
    orientation: "square",
    size: "medium"
  },
  {
    id: "award5",
    src: "/awards/award (5).JPG",
    alt: "Teaching Excellence Award",
    title: "Teaching Excellence Award",
    category: "Academic Achievement",
    description: "Recognition for outstanding contribution to dental education",
    year: "2021",
    organization: "University",
    orientation: "portrait",
    size: "medium"
  },
  {
    id: "award6",
    src: "/awards/award (6).JPG",
    alt: "Professional Milestone Certificate",
    title: "Professional Milestone Certificate",
    category: "Professional Recognition",
    description: "Celebrating significant professional achievements",
    year: "2021",
    organization: "Professional Body",
    orientation: "landscape",
    size: "small"
  },
  {
    id: "award7",
    src: "/awards/award (7).JPG",
    alt: "Clinical Innovation Award",
    title: "Clinical Innovation Award",
    category: "Clinical Achievement",
    description: "Recognition for innovative treatment approaches",
    year: "2020",
    organization: "Clinical Board",
    orientation: "portrait",
    size: "medium"
  },
  {
    id: "award8",
    src: "/awards/award (8).JPG",
    alt: "Patient Care Excellence",
    title: "Patient Care Excellence",
    category: "Patient Care",
    description: "Awarded for exceptional patient care and satisfaction",
    year: "2020",
    organization: "Patient Care Association",
    orientation: "square",
    size: "medium"
  },
  {
    id: "award9",
    src: "/awards/award (9).JPG",
    alt: "Research Publication Award",
    title: "Research Publication Award",
    category: "Research & Innovation",
    description: "Recognition for significant research contributions",
    year: "2019",
    organization: "Medical Journal",
    orientation: "portrait",
    size: "large"
  },
  {
    id: "award10",
    src: "/awards/award (10).JPG",
    alt: "Professional Development Certificate",
    title: "Professional Development Certificate",
    category: "Professional Recognition",
    description: "Completion of advanced professional development programs",
    year: "2019",
    organization: "Professional Institute",
    orientation: "landscape",
    size: "medium"
  },
  {
    id: "award11",
    src: "/awards/award (11).JPG",
    alt: "Academic Excellence Award",
    title: "Academic Excellence Award",
    category: "Academic Achievement",
    description: "Recognition for outstanding academic contributions",
    year: "2018",
    organization: "Academic Board",
    orientation: "portrait",
    size: "medium"
  },
  {
    id: "award12",
    src: "/awards/award (12).JPG",
    alt: "Community Health Champion",
    title: "Community Health Champion",
    category: "Community Service",
    description: "Honored for promoting community health and wellness",
    year: "2018",
    organization: "Health Department",
    orientation: "square",
    size: "small"
  },
  {
    id: "award13",
    src: "/awards/award (13).JPG",
    alt: "Clinical Training Certificate",
    title: "Clinical Training Certificate",
    category: "Clinical Achievement",
    description: "Successful completion of advanced clinical training",
    year: "2017",
    organization: "Training Institute",
    orientation: "landscape",
    size: "medium"
  },
  {
    id: "award14",
    src: "/awards/award (14).JPG",
    alt: "Professional Leadership Award",
    title: "Professional Leadership Award",
    category: "Professional Recognition",
    description: "Recognition for leadership in the dental profession",
    year: "2017",
    organization: "Leadership Council",
    orientation: "portrait",
    size: "medium"
  },
  {
    id: "award15",
    src: "/awards/award (15).JPG",
    alt: "Patient Safety Excellence",
    title: "Patient Safety Excellence",
    category: "Patient Care",
    description: "Awarded for maintaining highest patient safety standards",
    year: "2016",
    organization: "Safety Board",
    orientation: "square",
    size: "medium"
  },
  {
    id: "award16",
    src: "/awards/award (16).JPG",
    alt: "International Recognition Award",
    title: "International Recognition Award",
    category: "International Achievement",
    description: "Global recognition for contributions to paediatric dentistry",
    year: "2016",
    organization: "International Dental Association",
    orientation: "portrait",
    size: "large"
  },
  {
    id: "award17",
    src: "/awards/award (17).JPG",
    alt: "Lifetime Achievement Award",
    title: "Lifetime Achievement Award",
    category: "Lifetime Achievement",
    description: "Recognition for lifetime dedication to dental excellence",
    year: "2015",
    organization: "Dental Academy",
    orientation: "landscape",
    size: "large"
  }
];

function AwardsGallery() {
  const [selectedImage, setSelectedImage] = useState<AwardImage | null>(null)
  const [filteredImages, setFilteredImages] = useState<AwardImage[]>(awardImages)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"masonry" | "list">("masonry")

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
                <span>2015-2023</span>
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
